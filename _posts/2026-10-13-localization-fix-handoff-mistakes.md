---
layout: post
title: "Five mistakes that turn a one-line localization fix into three rounds of rework"
description: "A localization bug crosses design, QA and engineering. Five common handoff mistakes, and a worked example: a Russian gem counter that was wrong for 5 of 11 counts."
date: 2026-10-13 10:00:00 +0400
---

A localization bug looks small. One string reads wrong on one screen. But fixing it usually needs three people who don't share a tool: a designer or localization lead who knows what the string means, QA who knows where and when it shows up, and an engineer who knows how the text gets onto the screen. The code change is often one line. The handoff between those three is where it tends to go wrong.

Below are five mistakes that cause that rework. The worked example is a small fixture I built for this post, not a shipped game: a shop header that shows how many gems the player has, in Russian.

## The worked example: "У вас 21 кристаллов"

The shop header is built in code from three pieces: the string `shop.you_have` ("You have"), the number, and the string `shop.gems` ("gems"). The translator got "gems" on its own, with no number, and translated it as "кристаллов". That's the right form for 5 gems, and the wrong one for 1, 2, 4, 21 or 22.

![The shop header in Russian for 1, 2, 5 and 21 gems. The old, concatenated version is wrong for 1, 2 and 21; the new plural message is right for all four.](/assets/l10n-plural-handoff/gem-header-ru.png)

Here is the handoff that made this fixable in one pass:

```text
Bug: ru shop header uses the wrong word form for
  most gem counts ("У вас 21 кристаллов").
Source string: shop.you_have + {count} + shop.gems,
  joined in code. English: "You have 21 gems".
Context: shop header, top-right, all locales.
  Screenshot attached for 1, 2, 5 and 21.
Meaning: the player's current gem balance. Not a
  price, not a reward amount.
Counts to check: 0, 1, 2, 4, 5, 11, 12, 21, 22,
  25, 111 (one of each Russian plural form, plus
  the 11-14 and 21-24 traps).
Fix scope: replace the joined string with one
  plural message, shop.gem_count. No other strings.
Verification: automated check for every count
  above, then QA on the real screen at 1, 2, 5, 21.
Wording sign-off: native Russian reviewer.
```

The fix is one message with a form for each plural category, and the runtime picks the category:

```javascript
export function pluralLabel(strings, locale, count) {
  const forms = strings["shop.gem_count"];
  const category = new Intl.PluralRules(locale).select(count);
  const message = forms[category] ?? forms.other;
  return message.replace("{count}", String(count));
}
```

The check covered all 11 counts from the handoff. The old joined string was wrong for 5 of them (1, 2, 4, 21 and 22). The plural message matched the expected text for all 11, and English still reads "1 gem" and "2 gems". That is a check against the forms I wrote down; a native speaker still has to confirm them.

## Mistake 1: sending the translator a fragment

"Gems" with no number in front of it can't be translated correctly into a language with several plural forms. The translator has to guess. The fix belongs in the source: one message per sentence, with the number inside it, so the translator sees the whole thing.

**Avoid it:** before a string goes to translation, the engineer checks that no sentence is assembled from pieces in code.

## Mistake 2: fixing the translation in the build

The fastest fix is to edit the Russian file in the game repository. Then the next import from the translation tool overwrites it, and the bug comes back two weeks later with nobody remembering why.

**Avoid it:** the handoff names where the string's source of truth lives, and the localization lead updates it there. The engineer only changes how the string is used.

## Mistake 3: verifying on the strings file, or in English

A correct strings file doesn't prove the screen is right, and an English build can't show a Russian plural bug at all. Checking one count isn't enough either. "21" looks like it should behave like "1", and in Russian it does, but "11" doesn't.

**Avoid it:** QA's part of the handoff is the list of counts that reach every form and the real screen to check them on. Automated tests cover the list; QA checks the screen.

## Mistake 4: reusing one key in two places

If `shop.gems` also labels a tab called "Gems", the two uses can need different grammar, and fixing one breaks the other. This fixture doesn't have that problem, but it's the first thing to look for before changing a shared key.

**Avoid it:** the context line says where the string appears. If it appears in more than one place, split the key before translating.

## Mistake 5: letting the person who wrote the fix approve the wording

An engineer, or a coding agent, can write the plural message and a test that matches it. Neither can confirm that "кристалла" is the word a Russian player expects. Passing tests only say the code matches what was written down.

**Avoid it:** wording sign-off goes to a native reviewer, named in the handoff before the work starts.

## Who does what

The localization lead prepares the meaning, the source of truth and the sign-off owner. QA prepares the screenshot and the list of counts. An engineer, possibly running a coding agent in their own environment with their own repository access, makes the bounded code change and the automated check. The native reviewer and QA judge acceptance: the reviewer judges the words, QA judges the screen. The engineer's review of the diff is separate from both.

That separation is the useful part of a game studio AI workflow. The agent can take the mechanical middle, while the people who know the language and the screen keep the decisions they're qualified to make. Wagglet describes the same split on its [page for game studios](https://wagglet.com/for/studios): the expert defines the outcome, and execution stays separate from approval.

## Checklist for the next localization fix

- [ ] Source string and key, and how the sentence is built in code
- [ ] Meaning, in one line
- [ ] Screenshot of the real screen, in the affected locale
- [ ] Values to test (counts, names, dates), chosen to hit every form
- [ ] Where the source of truth lives, and who updates it
- [ ] Fix scope, and what's out of scope
- [ ] Automated check, plus QA on the screen
- [ ] Wording sign-off owner

## Limits

This is a fixture, not a game. The screenshot is an HTML mock of a shop header. The plural check ran in Node 24's `Intl.PluralRules`, and other runtimes or older engines may differ. The Russian forms are the standard ones, but nobody has given them native sign-off for this post. The fixture also ignores fractional numbers, gender and right-to-left layout.
