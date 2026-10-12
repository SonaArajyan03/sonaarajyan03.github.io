(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fc="185",tf=0,Tl=1,nf=2,ks=1,rf=2,Hr=3,$n=0,Zt=1,cn=2,Dn=0,In=1,mr=2,Al=3,wl=4,sf=5,bi=100,af=101,of=102,cf=103,lf=104,uf=200,df=201,hf=202,ff=203,Do=204,Io=205,pf=206,mf=207,gf=208,xf=209,vf=210,_f=211,Mf=212,Sf=213,yf=214,Lo=0,Fo=1,No=2,gr=3,Uo=4,Oo=5,Bo=6,Vo=7,hd=0,Ef=1,bf=2,Ln=0,fd=1,pd=2,md=3,gd=4,xd=5,vd=6,_d=7,Md=300,Li=301,xr=302,Sa=303,ya=304,ua=306,Kr=1e3,Wn=1001,zo=1002,Ot=1003,Tf=1004,fs=1005,Bt=1006,Ea=1007,li=1008,ln=1009,Sd=1010,yd=1011,Jr=1012,Nc=1013,Nn=1014,_n=1015,qn=1016,Uc=1017,Oc=1018,Qr=1020,Ed=35902,bd=35899,Td=1021,Ad=1022,pn=1023,Yn=1026,wi=1027,Bc=1028,Vc=1029,Fi=1030,zc=1031,Gc=1033,Ws=33776,Xs=33777,$s=33778,qs=33779,Go=35840,Ho=35841,ko=35842,Wo=35843,Xo=36196,$o=37492,qo=37496,Yo=37488,Zo=37489,Ks=37490,Ko=37491,Jo=37808,Qo=37809,jo=37810,ec=37811,tc=37812,nc=37813,ic=37814,rc=37815,sc=37816,ac=37817,oc=37818,cc=37819,lc=37820,uc=37821,dc=36492,hc=36494,fc=36495,pc=36283,mc=36284,Js=36285,gc=36286,Af=3200,xc=0,wf=1,Rn="",Ut="srgb",Qs="srgb-linear",js="linear",st="srgb",Xi=7680,Cl=519,Cf=512,Rf=513,Pf=514,Hc=515,Df=516,If=517,kc=518,Lf=519,Rl=35044,$r=35048,Pl="300 es",Pn=2e3,jr=2001;function Ff(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ea(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Nf(){const t=ea("canvas");return t.style.display="block",t}const Dl={};function Il(...t){const e="THREE."+t.shift();console.log(e,...t)}function wd(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ne(...t){t=wd(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function je(...t){t=wd(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function dr(...t){const e=t.join(" ");e in Dl||(Dl[e]=!0,Ne(...t))}function Uf(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Of={[Lo]:Fo,[No]:Bo,[Uo]:Vo,[gr]:Oo,[Fo]:Lo,[Bo]:No,[Vo]:Uo,[Oo]:gr};class Vi{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ba=Math.PI/180,vc=180/Math.PI;function ss(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function Ke(t,e,n){return Math.max(e,Math.min(n,t))}function Bf(t,e){return(t%e+e)%e}function Ta(t,e,n){return(1-n)*t+n*e}function Ar(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const dl=class dl{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};dl.prototype.isVector2=!0;let Je=dl;class pi{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3],d=s[a+0],f=s[a+1],p=s[a+2],x=s[a+3];if(h!==x||c!==d||l!==f||u!==p){let g=c*d+l*f+u*p+h*x;g<0&&(d=-d,f=-f,p=-p,x=-x,g=-g);let m=1-o;if(g<.9995){const S=Math.acos(g),A=Math.sin(S);m=Math.sin(m*S)/A,o=Math.sin(o*S)/A,c=c*m+d*o,l=l*m+f*o,u=u*m+p*o,h=h*m+x*o}else{c=c*m+d*o,l=l*m+f*o,u=u*m+p*o,h=h*m+x*o;const S=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=S,l*=S,u*=S,h*=S}}e[n]=c,e[n+1]=l,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[a],d=s[a+1],f=s[a+2],p=s[a+3];return e[n]=o*p+u*h+c*f-l*d,e[n+1]=c*p+u*d+l*h-o*f,e[n+2]=l*p+u*f+o*d-c*h,e[n+3]=u*p-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),h=o(s/2),d=c(i/2),f=c(r/2),p=c(s/2);switch(a){case"XYZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"YZX":this._x=d*u*h+l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h-d*f*p;break;case"XZY":this._x=d*u*h-l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h+d*f*p;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],l=n[2],u=n[6],h=n[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,l=n._z,u=n._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-n;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,n=Math.sin(n*l)/u,this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const hl=class hl{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ll.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ll.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+c*l+a*h-o*u,this.y=i+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Aa.copy(this).projectOnVector(e),this.sub(Aa)}reflect(e){return this.sub(Aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hl.prototype.isVector3=!0;let O=hl;const Aa=new O,Ll=new pi,fl=class fl{constructor(e,n,i,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l)}set(e,n,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],p=i[8],x=r[0],g=r[3],m=r[6],S=r[1],A=r[4],M=r[7],E=r[2],T=r[5],C=r[8];return s[0]=a*x+o*S+c*E,s[3]=a*g+o*A+c*T,s[6]=a*m+o*M+c*C,s[1]=l*x+u*S+h*E,s[4]=l*g+u*A+h*T,s[7]=l*m+u*M+h*C,s[2]=d*x+f*S+p*E,s[5]=d*g+f*A+p*T,s[8]=d*m+f*M+p*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return n*a*u-n*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*s,f=l*s-a*c,p=n*h+i*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return e[0]=h*x,e[1]=(r*l-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=d*x,e[4]=(u*n-r*c)*x,e[5]=(r*s-o*n)*x,e[6]=f*x,e[7]=(i*c-l*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+n,0,0,1),this}scale(e,n){return dr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wa.makeScale(e,n)),this}rotate(e){return dr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wa.makeRotation(-e)),this}translate(e,n){return dr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wa.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};fl.prototype.isMatrix3=!0;let Be=fl;const wa=new Be,Fl=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nl=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vf(){const t={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===st&&(r.r=Xn(r.r),r.g=Xn(r.g),r.b=Xn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(r.r=hr(r.r),r.g=hr(r.g),r.b=hr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Rn?js:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return dr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return dr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Qs]:{primaries:e,whitePoint:i,transfer:js,toXYZ:Fl,fromXYZ:Nl,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:i,transfer:st,toXYZ:Fl,fromXYZ:Nl,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),t}const Ze=Vf();function Xn(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function hr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let $i;class zf{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{$i===void 0&&($i=ea("canvas")),$i.width=e.width,$i.height=e.height;const r=$i.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=$i}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ea("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Xn(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Xn(n[i]/255)*255):n[i]=Xn(n[i]);return{data:n,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gf=0;class Wc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=ss(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ca(r[a].image)):s.push(Ca(r[a]))}else s=Ca(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ca(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?zf.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let Hf=0;const Ra=new O;class Vt extends Vi{constructor(e=Vt.DEFAULT_IMAGE,n=Vt.DEFAULT_MAPPING,i=Wn,r=Wn,s=Bt,a=li,o=pn,c=ln,l=Vt.DEFAULT_ANISOTROPY,u=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=ss(),this.name="",this.source=new Wc(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ra).x}get height(){return this.source.getSize(Ra).y}get depth(){return this.source.getSize(Ra).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ne(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ne(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Md)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kr:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case zo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kr:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case zo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Md;Vt.DEFAULT_ANISOTROPY=1;const pl=class pl{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],p=c[9],x=c[2],g=c[6],m=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(p+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const A=(l+1)/2,M=(f+1)/2,E=(m+1)/2,T=(u+d)/4,C=(h+x)/4,v=(p+g)/4;return A>M&&A>E?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=T/i,s=C/i):M>E?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=v/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=C/s,r=v/s),this.set(i,r,s,n),this}let S=Math.sqrt((g-p)*(g-p)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(g-p)/S,this.y=(h-x)/S,this.z=(d-u)/S,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this.w=Ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this.w=Ke(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pl.prototype.isVector4=!0;let ft=pl;class kf extends Vi{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new ft(0,0,e,n),this.scissorTest=!1,this.viewport=new ft(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new Vt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Wc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends kf{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Cd extends Vt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wf extends Vt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const la=class la{constructor(e,n,i,r,s,a,o,c,l,u,h,d,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l,u,h,d,f,p,x,g)}set(e,n,i,r,s,a,o,c,l,u,h,d,f,p,x,g){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new la().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/qi.setFromMatrixColumn(e,0).length(),s=1/qi.setFromMatrixColumn(e,1).length(),a=1/qi.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,p=o*u,x=o*h;n[0]=c*u,n[4]=-c*h,n[8]=l,n[1]=f+p*l,n[5]=d-x*l,n[9]=-o*c,n[2]=x-d*l,n[6]=p+f*l,n[10]=a*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,p=l*u,x=l*h;n[0]=d+x*o,n[4]=p*o-f,n[8]=a*l,n[1]=a*h,n[5]=a*u,n[9]=-o,n[2]=f*o-p,n[6]=x+d*o,n[10]=a*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,p=l*u,x=l*h;n[0]=d-x*o,n[4]=-a*h,n[8]=p+f*o,n[1]=f+p*o,n[5]=a*u,n[9]=x-d*o,n[2]=-a*l,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const d=a*u,f=a*h,p=o*u,x=o*h;n[0]=c*u,n[4]=p*l-f,n[8]=d*l+x,n[1]=c*h,n[5]=x*l+d,n[9]=f*l-p,n[2]=-l,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,p=o*c,x=o*l;n[0]=c*u,n[4]=x-d*h,n[8]=p*h+f,n[1]=h,n[5]=a*u,n[9]=-o*u,n[2]=-l*u,n[6]=f*h+p,n[10]=d-x*h}else if(e.order==="XZY"){const d=a*c,f=a*l,p=o*c,x=o*l;n[0]=c*u,n[4]=-h,n[8]=l*u,n[1]=d*h+x,n[5]=a*u,n[9]=f*h-p,n[2]=p*h-f,n[6]=o*u,n[10]=x*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xf,e,$f)}lookAt(e,n,i){const r=this.elements;return an.subVectors(e,n),an.lengthSq()===0&&(an.z=1),an.normalize(),jn.crossVectors(i,an),jn.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),jn.crossVectors(i,an)),jn.normalize(),ps.crossVectors(an,jn),r[0]=jn.x,r[4]=ps.x,r[8]=an.x,r[1]=jn.y,r[5]=ps.y,r[9]=an.y,r[2]=jn.z,r[6]=ps.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],p=i[2],x=i[6],g=i[10],m=i[14],S=i[3],A=i[7],M=i[11],E=i[15],T=r[0],C=r[4],v=r[8],b=r[12],R=r[1],P=r[5],D=r[9],L=r[13],H=r[2],N=r[6],q=r[10],B=r[14],G=r[3],Q=r[7],ne=r[11],j=r[15];return s[0]=a*T+o*R+c*H+l*G,s[4]=a*C+o*P+c*N+l*Q,s[8]=a*v+o*D+c*q+l*ne,s[12]=a*b+o*L+c*B+l*j,s[1]=u*T+h*R+d*H+f*G,s[5]=u*C+h*P+d*N+f*Q,s[9]=u*v+h*D+d*q+f*ne,s[13]=u*b+h*L+d*B+f*j,s[2]=p*T+x*R+g*H+m*G,s[6]=p*C+x*P+g*N+m*Q,s[10]=p*v+x*D+g*q+m*ne,s[14]=p*b+x*L+g*B+m*j,s[3]=S*T+A*R+M*H+E*G,s[7]=S*C+A*P+M*N+E*Q,s[11]=S*v+A*D+M*q+E*ne,s[15]=S*b+A*L+M*B+E*j,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],x=e[7],g=e[11],m=e[15],S=c*f-l*d,A=o*f-l*h,M=o*d-c*h,E=a*f-l*u,T=a*d-c*u,C=a*h-o*u;return n*(x*S-g*A+m*M)-i*(p*S-g*E+m*T)+r*(p*A-x*E+m*C)-s*(p*M-x*T+g*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return n*(a*u-o*l)-i*(s*u-o*c)+r*(s*l-a*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],x=e[13],g=e[14],m=e[15],S=n*o-i*a,A=n*c-r*a,M=n*l-s*a,E=i*c-r*o,T=i*l-s*o,C=r*l-s*c,v=u*x-h*p,b=u*g-d*p,R=u*m-f*p,P=h*g-d*x,D=h*m-f*x,L=d*m-f*g,H=S*L-A*D+M*P+E*R-T*b+C*v;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/H;return e[0]=(o*L-c*D+l*P)*N,e[1]=(r*D-i*L-s*P)*N,e[2]=(x*C-g*T+m*E)*N,e[3]=(d*T-h*C-f*E)*N,e[4]=(c*R-a*L-l*b)*N,e[5]=(n*L-r*R+s*b)*N,e[6]=(g*M-p*C-m*A)*N,e[7]=(u*C-d*M+f*A)*N,e[8]=(a*D-o*R+l*v)*N,e[9]=(i*R-n*D-s*v)*N,e[10]=(p*T-x*M+m*S)*N,e[11]=(h*M-u*T-f*S)*N,e[12]=(o*b-a*P-c*v)*N,e[13]=(n*P-i*b+r*v)*N,e[14]=(x*A-p*E-g*S)*N,e[15]=(u*E-h*A+d*S)*N,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,l=s+s,u=a+a,h=o+o,d=s*l,f=s*u,p=s*h,x=a*u,g=a*h,m=o*h,S=c*l,A=c*u,M=c*h,E=i.x,T=i.y,C=i.z;return r[0]=(1-(x+m))*E,r[1]=(f+M)*E,r[2]=(p-A)*E,r[3]=0,r[4]=(f-M)*T,r[5]=(1-(d+m))*T,r[6]=(g+S)*T,r[7]=0,r[8]=(p+A)*C,r[9]=(g-S)*C,r[10]=(1-(d+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=qi.set(r[0],r[1],r[2]).length();const o=qi.set(r[4],r[5],r[6]).length(),c=qi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),mn.copy(this);const l=1/a,u=1/o,h=1/c;return mn.elements[0]*=l,mn.elements[1]*=l,mn.elements[2]*=l,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=h,mn.elements[9]*=h,mn.elements[10]*=h,n.setFromRotationMatrix(mn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,n,i,r,s,a,o=Pn,c=!1){const l=this.elements,u=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let p,x;if(c)p=s/(a-s),x=a*s/(a-s);else if(o===Pn)p=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===jr)p=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Pn,c=!1){const l=this.elements,u=2/(n-e),h=2/(i-r),d=-(n+e)/(n-e),f=-(i+r)/(i-r);let p,x;if(c)p=1/(a-s),x=a/(a-s);else if(o===Pn)p=-2/(a-s),x=-(a+s)/(a-s);else if(o===jr)p=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};la.prototype.isMatrix4=!0;let at=la;const qi=new O,mn=new at,Xf=new O(0,0,0),$f=new O(1,1,1),jn=new O,ps=new O,an=new O,Ul=new at,Ol=new pi;class Zn{constructor(e=0,n=0,i=0,r=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(n){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ul.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ul,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ol.setFromEuler(this),this.setFromQuaternion(Ol,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class Rd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qf=0;const Bl=new O,Yi=new pi,On=new at,ms=new O,wr=new O,Yf=new O,Zf=new pi,Vl=new O(1,0,0),zl=new O(0,1,0),Gl=new O(0,0,1),Hl={type:"added"},Kf={type:"removed"},Zi={type:"childadded",child:null},Pa={type:"childremoved",child:null};class Ft extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new O,n=new Zn,i=new pi,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new Be}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Yi.setFromAxisAngle(e,n),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,n){return Yi.setFromAxisAngle(e,n),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(Vl,e)}rotateY(e){return this.rotateOnAxis(zl,e)}rotateZ(e){return this.rotateOnAxis(Gl,e)}translateOnAxis(e,n){return Bl.copy(e).applyQuaternion(this.quaternion),this.position.add(Bl.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Vl,e)}translateY(e){return this.translateOnAxis(zl,e)}translateZ(e){return this.translateOnAxis(Gl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ms.copy(e):ms.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(wr,ms,this.up):On.lookAt(ms,wr,this.up),this.quaternion.setFromRotationMatrix(On),r&&(On.extractRotation(r.matrixWorld),Yi.setFromRotationMatrix(On),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hl),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Kf),Pa.child=e,this.dispatchEvent(Pa),Pa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hl),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,e,Yf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,Zf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new O(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class lr extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jf={type:"move"};class Da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const g=n.getJointPose(x,i),m=this._getHandJoint(l,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jf)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new lr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},gs={h:0,s:0,l:0};function Ia(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class He{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=Bf(e,1),n=Ke(n,0,1),i=Ke(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Ia(a,s,e+1/3),this.g=Ia(a,s,e),this.b=Ia(a,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,n=Ut){function i(s){s!==void 0&&parseFloat(s)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ne("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ut){const i=Pd[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}copyLinearToSRGB(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return Ze.workingToColorSpace(Ht.copy(this),e),Math.round(Ke(Ht.r*255,0,255))*65536+Math.round(Ke(Ht.g*255,0,255))*256+Math.round(Ke(Ht.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.workingToColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,n=Ze.workingColorSpace){return Ze.workingToColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Ut){Ze.workingToColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==Ut?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+n,ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ei),e.getHSL(gs);const i=Ta(ei.h,gs.h,n),r=Ta(ei.s,gs.s,n),s=Ta(ei.l,gs.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new He;He.NAMES=Pd;class Qf extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const gn=new O,Bn=new O,La=new O,Vn=new O,Ki=new O,Ji=new O,kl=new O,Fa=new O,Na=new O,Ua=new O,Oa=new ft,Ba=new ft,Va=new ft;class vn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),gn.subVectors(e,n),r.cross(gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){gn.subVectors(r,n),Bn.subVectors(i,n),La.subVectors(e,n);const a=gn.dot(gn),o=gn.dot(Bn),c=gn.dot(La),l=Bn.dot(Bn),u=Bn.dot(La),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(l*c-o*u)*d,p=(a*u-o*c)*d;return s.set(1-f-p,p,f)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Vn.x),c.addScaledVector(a,Vn.y),c.addScaledVector(o,Vn.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return Oa.setScalar(0),Ba.setScalar(0),Va.setScalar(0),Oa.fromBufferAttribute(e,n),Ba.fromBufferAttribute(e,i),Va.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Oa,s.x),a.addScaledVector(Ba,s.y),a.addScaledVector(Va,s.z),a}static isFrontFacing(e,n,i,r){return gn.subVectors(i,n),Bn.subVectors(e,n),gn.cross(Bn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),gn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return vn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return vn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Ki.subVectors(r,i),Ji.subVectors(s,i),Fa.subVectors(e,i);const c=Ki.dot(Fa),l=Ji.dot(Fa);if(c<=0&&l<=0)return n.copy(i);Na.subVectors(e,r);const u=Ki.dot(Na),h=Ji.dot(Na);if(u>=0&&h<=u)return n.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),n.copy(i).addScaledVector(Ki,a);Ua.subVectors(e,s);const f=Ki.dot(Ua),p=Ji.dot(Ua);if(p>=0&&f<=p)return n.copy(s);const x=f*l-c*p;if(x<=0&&l>=0&&p<=0)return o=l/(l-p),n.copy(i).addScaledVector(Ji,o);const g=u*p-f*h;if(g<=0&&h-u>=0&&f-p>=0)return kl.subVectors(s,r),o=(h-u)/(h-u+(f-p)),n.copy(r).addScaledVector(kl,o);const m=1/(g+x+d);return a=x*m,o=d*m,n.copy(i).addScaledVector(Ki,a).addScaledVector(Ji,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class zi{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(xn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(xn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=xn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,xn):xn.fromBufferAttribute(s,a),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xs.copy(i.boundingBox)),xs.applyMatrix4(e.matrixWorld),this.union(xs)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),vs.subVectors(this.max,Cr),Qi.subVectors(e.a,Cr),ji.subVectors(e.b,Cr),er.subVectors(e.c,Cr),ti.subVectors(ji,Qi),ni.subVectors(er,ji),xi.subVectors(Qi,er);let n=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-xi.z,xi.y,ti.z,0,-ti.x,ni.z,0,-ni.x,xi.z,0,-xi.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-xi.y,xi.x,0];return!za(n,Qi,ji,er,vs)||(n=[1,0,0,0,1,0,0,0,1],!za(n,Qi,ji,er,vs))?!1:(_s.crossVectors(ti,ni),n=[_s.x,_s.y,_s.z],za(n,Qi,ji,er,vs))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zn=[new O,new O,new O,new O,new O,new O,new O,new O],xn=new O,xs=new zi,Qi=new O,ji=new O,er=new O,ti=new O,ni=new O,xi=new O,Cr=new O,vs=new O,_s=new O,vi=new O;function za(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){vi.fromArray(t,s);const o=r.x*Math.abs(vi.x)+r.y*Math.abs(vi.y)+r.z*Math.abs(vi.z),c=e.dot(vi),l=n.dot(vi),u=i.dot(vi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Rt=new O,Ms=new Je;let jf=0;class Kt extends Vi{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jf++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Rl,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ms.fromBufferAttribute(this,n),Ms.applyMatrix3(e),this.setXY(n,Ms.x,Ms.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix3(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix4(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyNormalMatrix(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.transformDirection(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ar(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ar(n,this.array)),n}setX(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ar(n,this.array)),n}setY(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ar(n,this.array)),n}setZ(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ar(n,this.array)),n}setW(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array),s=jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rl&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Dd extends Kt{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Id extends Kt{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Pt extends Kt{constructor(e,n,i){super(new Float32Array(e),n,i)}}const ep=new zi,Rr=new O,Ga=new O;class Gi{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ep.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rr.subVectors(e,this.center);const n=Rr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Rr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rr.copy(e.center).add(Ga)),this.expandByPoint(Rr.copy(e.center).sub(Ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let tp=0;const hn=new at,Ha=new Ft,tr=new O,on=new zi,Pr=new zi,Lt=new O;class rn extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ff(e)?Id:Dd)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,n,i){return hn.makeTranslation(e,n,i),this.applyMatrix4(hn),this}scale(e,n,i){return hn.makeScale(e,n,i),this.applyMatrix4(hn),this}lookAt(e){return Ha.lookAt(e),Ha.updateMatrix(),this.applyMatrix4(Ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];on.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Pr.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(on.min,Pr.min),on.expandByPoint(Lt),Lt.addVectors(on.max,Pr.max),on.expandByPoint(Lt)):(on.expandByPoint(Pr.min),on.expandByPoint(Pr.max))}on.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Lt.fromBufferAttribute(o,l),c&&(tr.fromBufferAttribute(e,l),Lt.add(tr)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Kt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let v=0;v<i.count;v++)o[v]=new O,c[v]=new O;const l=new O,u=new O,h=new O,d=new Je,f=new Je,p=new Je,x=new O,g=new O;function m(v,b,R){l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,R),d.fromBufferAttribute(s,v),f.fromBufferAttribute(s,b),p.fromBufferAttribute(s,R),u.sub(l),h.sub(l),f.sub(d),p.sub(d);const P=1/(f.x*p.y-p.x*f.y);isFinite(P)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(P),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(P),o[v].add(x),o[b].add(x),o[R].add(x),c[v].add(g),c[b].add(g),c[R].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let v=0,b=S.length;v<b;++v){const R=S[v],P=R.start,D=R.count;for(let L=P,H=P+D;L<H;L+=3)m(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const A=new O,M=new O,E=new O,T=new O;function C(v){E.fromBufferAttribute(r,v),T.copy(E);const b=o[v];A.copy(b),A.sub(E.multiplyScalar(E.dot(b))).normalize(),M.crossVectors(T,b);const P=M.dot(c[v])<0?-1:1;a.setXYZW(v,A.x,A.y,A.z,P)}for(let v=0,b=S.length;v<b;++v){const R=S[v],P=R.start,D=R.count;for(let L=P,H=P+D;L<H;L+=3)C(e.getX(L+0)),C(e.getX(L+1)),C(e.getX(L+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Kt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new O,s=new O,a=new O,o=new O,c=new O,l=new O,u=new O,h=new O;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,p),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,g),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,p),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),o.add(u),c.add(u),l.add(u),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=n.count;d<f;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let f=0,p=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*u;for(let m=0;m<u;m++)d[p++]=l[f++]}return new Kt(d,u,h)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new rn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);n.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,i);c.push(f)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(n))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(n));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let np=0;class Er extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=In,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Do,this.blendDst=Io,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ne(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ne(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==In&&(i.blending=this.blending),this.side!==$n&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Do&&(i.blendSrc=this.blendSrc),this.blendDst!==Io&&(i.blendDst=this.blendDst),this.blendEquation!==bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new He().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Je().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Je().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Gn=new O,ka=new O,Ss=new O,ii=new O,Wa=new O,ys=new O,Xa=new O;class Ld{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Gn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,n),Gn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ka.copy(e).add(n).multiplyScalar(.5),Ss.copy(n).sub(e).normalize(),ii.copy(this.origin).sub(ka);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Ss),o=ii.dot(this.direction),c=-ii.dot(Ss),l=ii.lengthSq(),u=Math.abs(1-a*a);let h,d,f,p;if(u>0)if(h=a*c-o,d=a*o-c,p=s*u,h>=0)if(d>=-p)if(d<=p){const x=1/u;h*=x,d*=x,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-p?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=p?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ka).addScaledVector(Ss,d),f}intersectSphere(e,n){Gn.subVectors(e.center,this.origin);const i=Gn.dot(this.direction),r=Gn.dot(Gn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,n,i,r,s){Wa.subVectors(n,e),ys.subVectors(i,e),Xa.crossVectors(Wa,ys);let a=this.direction.dot(Xa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ii.subVectors(this.origin,e);const c=o*this.direction.dot(ys.crossVectors(ii,ys));if(c<0)return null;const l=o*this.direction.dot(Wa.cross(ii));if(l<0||c+l>a)return null;const u=-o*ii.dot(Xa);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class br extends Er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wl=new at,_i=new Ld,Es=new Gi,Xl=new O,bs=new O,Ts=new O,As=new O,$a=new O,ws=new O,$l=new O,Cs=new O;class Jt extends Ft{constructor(e=new rn,n=new br){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ws.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&($a.fromBufferAttribute(h,e),a?ws.addScaledVector($a,u):ws.addScaledVector($a.sub(n),u))}n.add(ws)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Es.copy(i.boundingSphere),Es.applyMatrix4(s),_i.copy(e.ray).recast(e.near),!(Es.containsPoint(_i.origin)===!1&&(_i.intersectSphere(Es,Xl)===null||_i.origin.distanceToSquared(Xl)>(e.far-e.near)**2))&&(Wl.copy(s).invert(),_i.copy(e.ray).applyMatrix4(Wl),!(i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,_i)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){const g=d[p],m=a[g.materialIndex],S=Math.max(g.start,f.start),A=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let M=S,E=A;M<E;M+=3){const T=o.getX(M),C=o.getX(M+1),v=o.getX(M+2);r=Rs(this,m,e,i,l,u,h,T,C,v),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){const S=o.getX(g),A=o.getX(g+1),M=o.getX(g+2);r=Rs(this,a,e,i,l,u,h,S,A,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){const g=d[p],m=a[g.materialIndex],S=Math.max(g.start,f.start),A=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let M=S,E=A;M<E;M+=3){const T=M,C=M+1,v=M+2;r=Rs(this,m,e,i,l,u,h,T,C,v),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const p=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){const S=g,A=g+1,M=g+2;r=Rs(this,a,e,i,l,u,h,S,A,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function ip(t,e,n,i,r,s,a,o){let c;if(e.side===Zt?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===$n,o),c===null)return null;Cs.copy(o),Cs.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(Cs);return l<n.near||l>n.far?null:{distance:l,point:Cs.clone(),object:t}}function Rs(t,e,n,i,r,s,a,o,c,l){t.getVertexPosition(o,bs),t.getVertexPosition(c,Ts),t.getVertexPosition(l,As);const u=ip(t,e,n,i,bs,Ts,As,$l);if(u){const h=new O;vn.getBarycoord($l,bs,Ts,As,h),r&&(u.uv=vn.getInterpolatedAttribute(r,o,c,l,h,new Je)),s&&(u.uv1=vn.getInterpolatedAttribute(s,o,c,l,h,new Je)),a&&(u.normal=vn.getInterpolatedAttribute(a,o,c,l,h,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new O,materialIndex:0};vn.getNormal(bs,Ts,As,d.normal),u.face=d,u.barycoord=h}return u}class Xc extends Vt{constructor(e=null,n=1,i=1,r,s,a,o,c,l=Ot,u=Ot,h,d){super(null,a,o,c,l,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ta extends Kt{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const nr=new at,ql=new at,Ps=[],Yl=new zi,rp=new at,Dr=new Jt,Ir=new Gi;class sp extends Jt{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new ta(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,rp)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new zi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,nr),Yl.copy(e.boundingBox).applyMatrix4(nr),this.boundingBox.union(Yl)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,nr),Ir.copy(e.boundingSphere).applyMatrix4(nr),this.boundingSphere.union(Ir)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(Dr.geometry=this.geometry,Dr.material=this.material,Dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ir.copy(this.boundingSphere),Ir.applyMatrix4(i),e.ray.intersectsSphere(Ir)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,nr),ql.multiplyMatrices(i,nr),Dr.matrixWorld=ql,Dr.raycast(e,Ps);for(let a=0,o=Ps.length;a<o;a++){const c=Ps[a];c.instanceId=s,c.object=this,n.push(c)}Ps.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new ta(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Xc(new Float32Array(r*this.count),r,this.count,Bc,_n));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;return s[c]=o,s.set(i,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const qa=new O,ap=new O,op=new Be;class yi{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=qa.subVectors(i,n).cross(ap.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(qa),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||op.getNormalMatrix(e),r=this.coplanarPoint(qa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new Gi,cp=new Je(.5,.5),Ds=new O;class $c{constructor(e=new yi,n=new yi,i=new yi,r=new yi,s=new yi,a=new yi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Pn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],h=s[5],d=s[6],f=s[7],p=s[8],x=s[9],g=s[10],m=s[11],S=s[12],A=s[13],M=s[14],E=s[15];if(r[0].setComponents(l-a,f-u,m-p,E-S).normalize(),r[1].setComponents(l+a,f+u,m+p,E+S).normalize(),r[2].setComponents(l+o,f+h,m+x,E+A).normalize(),r[3].setComponents(l-o,f-h,m-x,E-A).normalize(),i)r[4].setComponents(c,d,g,M).normalize(),r[5].setComponents(l-c,f-d,m-g,E-M).normalize();else if(r[4].setComponents(l-c,f-d,m-g,E-M).normalize(),n===Pn)r[5].setComponents(l+c,f+d,m+g,E+M).normalize();else if(n===jr)r[5].setComponents(c,d,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Mi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){Mi.center.set(0,0,0);const n=cp.distanceTo(e.center);return Mi.radius=.7071067811865476+n,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ds.x=r.normal.x>0?e.max.x:e.min.x,Ds.y=r.normal.y>0?e.max.y:e.min.y,Ds.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ds)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fd extends Er{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const na=new O,ia=new O,Zl=new at,Lr=new Ld,Is=new Gi,Ya=new O,Kl=new O;class lp extends Ft{constructor(e=new rn,n=new Fd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)na.fromBufferAttribute(n,r-1),ia.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=na.distanceTo(ia);e.setAttribute("lineDistance",new Pt(i,1))}else Ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Is.copy(i.boundingSphere),Is.applyMatrix4(r),Is.radius+=s,e.ray.intersectsSphere(Is)===!1)return;Zl.copy(r).invert(),Lr.copy(e.ray).applyMatrix4(Zl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=l){const m=u.getX(x),S=u.getX(x+1),A=Ls(this,e,Lr,c,m,S,x);A&&n.push(A)}if(this.isLineLoop){const x=u.getX(p-1),g=u.getX(f),m=Ls(this,e,Lr,c,x,g,p-1);m&&n.push(m)}}else{const f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=l){const m=Ls(this,e,Lr,c,x,x+1,x);m&&n.push(m)}if(this.isLineLoop){const x=Ls(this,e,Lr,c,p-1,f,p-1);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ls(t,e,n,i,r,s,a){const o=t.geometry.attributes.position;if(na.fromBufferAttribute(o,r),ia.fromBufferAttribute(o,s),n.distanceSqToSegment(na,ia,Ya,Kl)>i)return;Ya.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Ya);if(!(l<e.near||l>e.far))return{distance:l,point:Kl.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}const Jl=new O,Ql=new O;class up extends lp{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Jl.fromBufferAttribute(n,r),Ql.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Jl.distanceTo(Ql);e.setAttribute("lineDistance",new Pt(i,1))}else Ne("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nd extends Vt{constructor(e=[],n=Li,i,r,s,a,o,c,l,u){super(e,n,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qc extends Vt{constructor(e,n,i,r,s,a,o,c,l){super(e,n,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vr extends Vt{constructor(e,n,i=Nn,r,s,a,o=Ot,c=Ot,l,u=Yn,h=1){if(u!==Yn&&u!==wi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:h};super(d,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class dp extends vr{constructor(e,n=Nn,i=Li,r,s,a=Ot,o=Ot,c,l=Yn){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,n,i,r,s,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ud extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class as extends rn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,f=0;p("z","y","x",-1,-1,i,n,e,a,s,0),p("z","y","x",1,-1,i,n,-e,a,s,1),p("x","z","y",1,1,e,i,n,r,a,2),p("x","z","y",1,-1,e,i,-n,r,a,3),p("x","y","z",1,-1,e,n,i,r,s,4),p("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(u,3)),this.setAttribute("uv",new Pt(h,2));function p(x,g,m,S,A,M,E,T,C,v,b){const R=M/C,P=E/v,D=M/2,L=E/2,H=T/2,N=C+1,q=v+1;let B=0,G=0;const Q=new O;for(let ne=0;ne<q;ne++){const j=ne*P-L;for(let re=0;re<N;re++){const Oe=re*R-D;Q[x]=Oe*S,Q[g]=j*A,Q[m]=H,l.push(Q.x,Q.y,Q.z),Q[x]=0,Q[g]=0,Q[m]=T>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(re/C),h.push(1-ne/v),B+=1}}for(let ne=0;ne<v;ne++)for(let j=0;j<C;j++){const re=d+j+N*ne,Oe=d+j+N*(ne+1),We=d+(j+1)+N*(ne+1),Fe=d+(j+1)+N*ne;c.push(re,Oe,Fe),c.push(Oe,We,Fe),G+=6}o.addGroup(f,G,b),f+=G,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Yc extends rn{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const a=[],o=[],c=[],l=[],u=n/2,h=Math.PI/2*e,d=n,f=2*h+d,p=i*2+s,x=r+1,g=new O,m=new O;for(let S=0;S<=p;S++){let A=0,M=0,E=0,T=0;if(S<=i){const b=S/i,R=b*Math.PI/2;M=-u-e*Math.cos(R),E=e*Math.sin(R),T=-e*Math.cos(R),A=b*h}else if(S<=i+s){const b=(S-i)/s;M=-u+b*n,E=e,T=0,A=h+b*d}else{const b=(S-i-s)/i,R=b*Math.PI/2;M=u+e*Math.sin(R),E=e*Math.cos(R),T=e*Math.sin(R),A=h+d+b*h}const C=Math.max(0,Math.min(1,A/f));let v=0;S===0?v=.5/r:S===p&&(v=-.5/r);for(let b=0;b<=r;b++){const R=b/r,P=R*Math.PI*2,D=Math.sin(P),L=Math.cos(P);m.x=-E*L,m.y=M,m.z=E*D,o.push(m.x,m.y,m.z),g.set(-E*L,T,E*D),g.normalize(),c.push(g.x,g.y,g.z),l.push(R+v,C)}if(S>0){const b=(S-1)*x;for(let R=0;R<r;R++){const P=b+R,D=b+R+1,L=S*x+R,H=S*x+R+1;a.push(P,D,L),a.push(D,H,L)}}}this.setIndex(a),this.setAttribute("position",new Pt(o,3)),this.setAttribute("normal",new Pt(c,3)),this.setAttribute("uv",new Pt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yc(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class os extends rn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,h=e/o,d=n/c,f=[],p=[],x=[],g=[];for(let m=0;m<u;m++){const S=m*d-a;for(let A=0;A<l;A++){const M=A*h-s;p.push(M,-S,0),x.push(0,0,1),g.push(A/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let S=0;S<o;S++){const A=S+l*m,M=S+l*(m+1),E=S+1+l*(m+1),T=S+1+l*m;f.push(A,M,T),f.push(M,E,T)}this.setIndex(f),this.setAttribute("position",new Pt(p,3)),this.setAttribute("normal",new Pt(x,3)),this.setAttribute("uv",new Pt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zc extends rn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const c=[],l=[],u=[],h=[],d=new O,f=new O,p=new O;for(let x=0;x<=i;x++){const g=a+x/i*o;for(let m=0;m<=r;m++){const S=m/r*s;f.x=(e+n*Math.cos(g))*Math.cos(S),f.y=(e+n*Math.cos(g))*Math.sin(S),f.z=n*Math.sin(g),l.push(f.x,f.y,f.z),d.x=e*Math.cos(S),d.y=e*Math.sin(S),p.subVectors(f,d).normalize(),u.push(p.x,p.y,p.z),h.push(m/r),h.push(x/i)}}for(let x=1;x<=i;x++)for(let g=1;g<=r;g++){const m=(r+1)*x+g-1,S=(r+1)*(x-1)+g-1,A=(r+1)*(x-1)+g,M=(r+1)*x+g;c.push(m,S,M),c.push(S,A,M)}this.setIndex(c),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(u,3)),this.setAttribute("uv",new Pt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function _r(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(jl(r))r.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(jl(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function Xt(t){const e={};for(let n=0;n<t.length;n++){const i=_r(t[n]);for(const r in i)e[r]=i[r]}return e}function jl(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function hp(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Od(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Bd={clone:_r,merge:Xt};var fp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _t extends Er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fp,this.fragmentShader=pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_r(e.uniforms),this.uniformsGroups=hp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new He().setHex(r.value);break;case"v2":this.uniforms[i].value=new Je().fromArray(r.value);break;case"v3":this.uniforms[i].value=new O().fromArray(r.value);break;case"v4":this.uniforms[i].value=new ft().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Be().fromArray(r.value);break;case"m4":this.uniforms[i].value=new at().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class mp extends _t{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Kc extends Er{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xc,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gp extends Er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Af,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xp extends Er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Vd extends Ft{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class vp extends Vd{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const Za=new at,eu=new O,tu=new O;class _p{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $c,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;eu.setFromMatrixPosition(e.matrixWorld),n.position.copy(eu),tu.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(tu),n.updateMatrixWorld(),Za.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Za,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===jr||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Za)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Fs=new O,Ns=new pi,bn=new O;class zd extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fs,Ns,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fs,Ns,bn.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Fs,Ns,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fs,Ns,bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ri=new O,nu=new Je,iu=new Je;class fn extends zd{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=vc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vc*2*Math.atan(Math.tan(ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-e/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ri.x,ri.y).multiplyScalar(-e/ri.z)}getViewSize(e,n){return this.getViewBounds(e,nu,iu),n.subVectors(iu,nu)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ba*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Jc extends zd{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Mp extends _p{constructor(){super(new Jc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sp extends Vd{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Mp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const ir=-90,rr=1;class yp extends Ft{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fn(ir,rr,e,n);r.layers=this.layers,this.add(r);const s=new fn(ir,rr,e,n);s.layers=this.layers,this.add(s);const a=new fn(ir,rr,e,n);a.layers=this.layers,this.add(a);const o=new fn(ir,rr,e,n);o.layers=this.layers,this.add(o);const c=new fn(ir,rr,e,n);c.layers=this.layers,this.add(c);const l=new fn(ir,rr,e,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const l of n)this.remove(l);if(e===Pn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===jr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of n)this.add(l),l.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Ep extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ml=class ml{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};ml.prototype.isMatrix2=!0;let ru=ml;class bp extends up{constructor(e=10,n=10,i=4473924,r=8947848){i=new He(i),r=new He(r);const s=n/2,a=e/n,o=e/2,c=[],l=[];for(let d=0,f=0,p=-o;d<=n;d++,p+=a){c.push(-o,0,p,o,0,p),c.push(p,0,-o,p,0,o);const x=d===s?i:r;x.toArray(l,f),f+=3,x.toArray(l,f),f+=3,x.toArray(l,f),f+=3,x.toArray(l,f),f+=3}const u=new rn;u.setAttribute("position",new Pt(c,3)),u.setAttribute("color",new Pt(l,3));const h=new Fd({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function su(t,e,n,i){const r=Tp(i);switch(n){case Td:return t*e;case Bc:return t*e/r.components*r.byteLength;case Vc:return t*e/r.components*r.byteLength;case Fi:return t*e*2/r.components*r.byteLength;case zc:return t*e*2/r.components*r.byteLength;case Ad:return t*e*3/r.components*r.byteLength;case pn:return t*e*4/r.components*r.byteLength;case Gc:return t*e*4/r.components*r.byteLength;case Ws:case Xs:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case $s:case qs:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ho:case Wo:return Math.max(t,16)*Math.max(e,8)/4;case Go:case ko:return Math.max(t,8)*Math.max(e,8)/2;case Xo:case $o:case Yo:case Zo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case qo:case Ks:case Ko:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qo:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case jo:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ec:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case tc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case nc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case ic:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case rc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case sc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ac:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case oc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case cc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case lc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case uc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case dc:case hc:case fc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case pc:case mc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Js:case gc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Tp(t){switch(t){case ln:case Sd:return{byteLength:1,components:1};case Jr:case yd:case qn:return{byteLength:2,components:1};case Uc:case Oc:return{byteLength:2,components:4};case Nn:case Nc:case _n:return{byteLength:4,components:1};case Ed:case bd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fc}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gd(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Ap(t){const e=new WeakMap;function n(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=t.createBuffer();t.bindBuffer(c,d),t.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=t.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=t.HALF_FLOAT:f=t.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=t.SHORT;else if(l instanceof Uint32Array)f=t.UNSIGNED_INT;else if(l instanceof Int32Array)f=t.INT;else if(l instanceof Int8Array)f=t.BYTE;else if(l instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){const u=c.array,h=c.updateRanges;if(t.bindBuffer(l,o),h.length===0)t.bufferSubData(l,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){const p=h[d],x=h[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){const x=h[f];t.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(t.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,n(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var wp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ip=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Np=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Up=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Kp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,im="gl_FragColor = linearToOutputTexel( gl_FragColor );",rm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,am=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,om=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,_m=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Em=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Tm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Am=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Pm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Om=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,km=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$m=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Km=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,i0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,c0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,u0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,d0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,h0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,f0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,m0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,x0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,S0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,y0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,A0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const w0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,F0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,N0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,U0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,z0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,G0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,H0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Y0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Z0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Q0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ng=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ig=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ag=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:wp,alphahash_pars_fragment:Cp,alphamap_fragment:Rp,alphamap_pars_fragment:Pp,alphatest_fragment:Dp,alphatest_pars_fragment:Ip,aomap_fragment:Lp,aomap_pars_fragment:Fp,batching_pars_vertex:Np,batching_vertex:Up,begin_vertex:Op,beginnormal_vertex:Bp,bsdfs:Vp,iridescence_fragment:zp,bumpmap_pars_fragment:Gp,clipping_planes_fragment:Hp,clipping_planes_pars_fragment:kp,clipping_planes_pars_vertex:Wp,clipping_planes_vertex:Xp,color_fragment:$p,color_pars_fragment:qp,color_pars_vertex:Yp,color_vertex:Zp,common:Kp,cube_uv_reflection_fragment:Jp,defaultnormal_vertex:Qp,displacementmap_pars_vertex:jp,displacementmap_vertex:em,emissivemap_fragment:tm,emissivemap_pars_fragment:nm,colorspace_fragment:im,colorspace_pars_fragment:rm,envmap_fragment:sm,envmap_common_pars_fragment:am,envmap_pars_fragment:om,envmap_pars_vertex:cm,envmap_physical_pars_fragment:_m,envmap_vertex:lm,fog_vertex:um,fog_pars_vertex:dm,fog_fragment:hm,fog_pars_fragment:fm,gradientmap_pars_fragment:pm,lightmap_pars_fragment:mm,lights_lambert_fragment:gm,lights_lambert_pars_fragment:xm,lights_pars_begin:vm,lights_toon_fragment:Mm,lights_toon_pars_fragment:Sm,lights_phong_fragment:ym,lights_phong_pars_fragment:Em,lights_physical_fragment:bm,lights_physical_pars_fragment:Tm,lights_fragment_begin:Am,lights_fragment_maps:wm,lights_fragment_end:Cm,lightprobes_pars_fragment:Rm,logdepthbuf_fragment:Pm,logdepthbuf_pars_fragment:Dm,logdepthbuf_pars_vertex:Im,logdepthbuf_vertex:Lm,map_fragment:Fm,map_pars_fragment:Nm,map_particle_fragment:Um,map_particle_pars_fragment:Om,metalnessmap_fragment:Bm,metalnessmap_pars_fragment:Vm,morphinstance_vertex:zm,morphcolor_vertex:Gm,morphnormal_vertex:Hm,morphtarget_pars_vertex:km,morphtarget_vertex:Wm,normal_fragment_begin:Xm,normal_fragment_maps:$m,normal_pars_fragment:qm,normal_pars_vertex:Ym,normal_vertex:Zm,normalmap_pars_fragment:Km,clearcoat_normal_fragment_begin:Jm,clearcoat_normal_fragment_maps:Qm,clearcoat_pars_fragment:jm,iridescence_pars_fragment:e0,opaque_fragment:t0,packing:n0,premultiplied_alpha_fragment:i0,project_vertex:r0,dithering_fragment:s0,dithering_pars_fragment:a0,roughnessmap_fragment:o0,roughnessmap_pars_fragment:c0,shadowmap_pars_fragment:l0,shadowmap_pars_vertex:u0,shadowmap_vertex:d0,shadowmask_pars_fragment:h0,skinbase_vertex:f0,skinning_pars_vertex:p0,skinning_vertex:m0,skinnormal_vertex:g0,specularmap_fragment:x0,specularmap_pars_fragment:v0,tonemapping_fragment:_0,tonemapping_pars_fragment:M0,transmission_fragment:S0,transmission_pars_fragment:y0,uv_pars_fragment:E0,uv_pars_vertex:b0,uv_vertex:T0,worldpos_vertex:A0,background_vert:w0,background_frag:C0,backgroundCube_vert:R0,backgroundCube_frag:P0,cube_vert:D0,cube_frag:I0,depth_vert:L0,depth_frag:F0,distance_vert:N0,distance_frag:U0,equirect_vert:O0,equirect_frag:B0,linedashed_vert:V0,linedashed_frag:z0,meshbasic_vert:G0,meshbasic_frag:H0,meshlambert_vert:k0,meshlambert_frag:W0,meshmatcap_vert:X0,meshmatcap_frag:$0,meshnormal_vert:q0,meshnormal_frag:Y0,meshphong_vert:Z0,meshphong_frag:K0,meshphysical_vert:J0,meshphysical_frag:Q0,meshtoon_vert:j0,meshtoon_frag:eg,points_vert:tg,points_frag:ng,shadow_vert:ig,shadow_frag:rg,sprite_vert:sg,sprite_frag:ag},fe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},wn={basic:{uniforms:Xt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Xt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Xt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Xt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Xt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new He(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Xt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Xt([fe.points,fe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Xt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Xt([fe.common,fe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Xt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Xt([fe.sprite,fe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:Xt([fe.common,fe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:Xt([fe.lights,fe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};wn.physical={uniforms:Xt([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Us={r:0,b:0,g:0},og=new at,Hd=new Be;Hd.set(-1,0,0,0,1,0,0,0,1);function cg(t,e,n,i,r,s){const a=new He(0);let o=r===!0?0:1,c,l,u=null,h=0,d=null;function f(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){const M=S.backgroundBlurriness>0;A=e.get(A,M)}return A}function p(S){let A=!1;const M=f(S);M===null?g(a,o):M&&M.isColor&&(g(M,1),A=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(S,A){const M=f(A);M&&(M.isCubeTexture||M.mapping===ua)?(l===void 0&&(l=new Jt(new as(1,1,1),new _t({name:"BackgroundCubeMaterial",uniforms:_r(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(og.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Hd),l.material.toneMapped=Ze.getTransfer(M.colorSpace)!==st,(u!==M||h!==M.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,d=t.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Jt(new os(2,2),new _t({name:"BackgroundMaterial",uniforms:_r(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(M.colorSpace)!==st,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,d=t.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function g(S,A){S.getRGB(Us,Od(t)),n.buffers.color.setClear(Us.r,Us.g,Us.b,A,s)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,A=1){a.set(S),o=A,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,g(a,o)},render:p,addToRenderList:x,dispose:m}}function lg(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(P,D,L,H,N){let q=!1;const B=h(P,H,L,D);s!==B&&(s=B,l(s.object)),q=f(P,H,L,N),q&&p(P,H,L,N),N!==null&&e.update(N,t.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,M(P,D,L,H),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return t.createVertexArray()}function l(P){return t.bindVertexArray(P)}function u(P){return t.deleteVertexArray(P)}function h(P,D,L,H){const N=H.wireframe===!0;let q=i[D.id];q===void 0&&(q={},i[D.id]=q);const B=P.isInstancedMesh===!0?P.id:0;let G=q[B];G===void 0&&(G={},q[B]=G);let Q=G[L.id];Q===void 0&&(Q={},G[L.id]=Q);let ne=Q[N];return ne===void 0&&(ne=d(c()),Q[N]=ne),ne}function d(P){const D=[],L=[],H=[];for(let N=0;N<n;N++)D[N]=0,L[N]=0,H[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:L,attributeDivisors:H,object:P,attributes:{},index:null}}function f(P,D,L,H){const N=s.attributes,q=D.attributes;let B=0;const G=L.getAttributes();for(const Q in G)if(G[Q].location>=0){const j=N[Q];let re=q[Q];if(re===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(re=P.instanceColor)),j===void 0||j.attribute!==re||re&&j.data!==re.data)return!0;B++}return s.attributesNum!==B||s.index!==H}function p(P,D,L,H){const N={},q=D.attributes;let B=0;const G=L.getAttributes();for(const Q in G)if(G[Q].location>=0){let j=q[Q];j===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(j=P.instanceColor));const re={};re.attribute=j,j&&j.data&&(re.data=j.data),N[Q]=re,B++}s.attributes=N,s.attributesNum=B,s.index=H}function x(){const P=s.newAttributes;for(let D=0,L=P.length;D<L;D++)P[D]=0}function g(P){m(P,0)}function m(P,D){const L=s.newAttributes,H=s.enabledAttributes,N=s.attributeDivisors;L[P]=1,H[P]===0&&(t.enableVertexAttribArray(P),H[P]=1),N[P]!==D&&(t.vertexAttribDivisor(P,D),N[P]=D)}function S(){const P=s.newAttributes,D=s.enabledAttributes;for(let L=0,H=D.length;L<H;L++)D[L]!==P[L]&&(t.disableVertexAttribArray(L),D[L]=0)}function A(P,D,L,H,N,q,B){B===!0?t.vertexAttribIPointer(P,D,L,N,q):t.vertexAttribPointer(P,D,L,H,N,q)}function M(P,D,L,H){x();const N=H.attributes,q=L.getAttributes(),B=D.defaultAttributeValues;for(const G in q){const Q=q[G];if(Q.location>=0){let ne=N[G];if(ne===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor)),ne!==void 0){const j=ne.normalized,re=ne.itemSize,Oe=e.get(ne);if(Oe===void 0)continue;const We=Oe.buffer,Fe=Oe.type,Z=Oe.bytesPerElement,se=Fe===t.INT||Fe===t.UNSIGNED_INT||ne.gpuType===Nc;if(ne.isInterleavedBufferAttribute){const V=ne.data,ge=V.stride,Ee=ne.offset;if(V.isInstancedInterleavedBuffer){for(let Se=0;Se<Q.locationSize;Se++)m(Q.location+Se,V.meshPerAttribute);P.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Se=0;Se<Q.locationSize;Se++)g(Q.location+Se);t.bindBuffer(t.ARRAY_BUFFER,We);for(let Se=0;Se<Q.locationSize;Se++)A(Q.location+Se,re/Q.locationSize,Fe,j,ge*Z,(Ee+re/Q.locationSize*Se)*Z,se)}else{if(ne.isInstancedBufferAttribute){for(let V=0;V<Q.locationSize;V++)m(Q.location+V,ne.meshPerAttribute);P.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let V=0;V<Q.locationSize;V++)g(Q.location+V);t.bindBuffer(t.ARRAY_BUFFER,We);for(let V=0;V<Q.locationSize;V++)A(Q.location+V,re/Q.locationSize,Fe,j,re*Z,re/Q.locationSize*V*Z,se)}}else if(B!==void 0){const j=B[G];if(j!==void 0)switch(j.length){case 2:t.vertexAttrib2fv(Q.location,j);break;case 3:t.vertexAttrib3fv(Q.location,j);break;case 4:t.vertexAttrib4fv(Q.location,j);break;default:t.vertexAttrib1fv(Q.location,j)}}}}S()}function E(){b();for(const P in i){const D=i[P];for(const L in D){const H=D[L];for(const N in H){const q=H[N];for(const B in q)u(q[B].object),delete q[B];delete H[N]}}delete i[P]}}function T(P){if(i[P.id]===void 0)return;const D=i[P.id];for(const L in D){const H=D[L];for(const N in H){const q=H[N];for(const B in q)u(q[B].object),delete q[B];delete H[N]}}delete i[P.id]}function C(P){for(const D in i){const L=i[D];for(const H in L){const N=L[H];if(N[P.id]===void 0)continue;const q=N[P.id];for(const B in q)u(q[B].object),delete q[B];delete N[P.id]}}}function v(P){for(const D in i){const L=i[D],H=P.isInstancedMesh===!0?P.id:0,N=L[H];if(N!==void 0){for(const q in N){const B=N[q];for(const G in B)u(B[G].object),delete B[G];delete N[q]}delete L[H],Object.keys(L).length===0&&delete i[D]}}}function b(){R(),a=!0,s!==r&&(s=r,l(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:S}}function ug(t,e,n){let i;function r(c){i=c}function s(c,l){t.drawArrays(i,c,l),n.update(l,i,1)}function a(c,l,u){u!==0&&(t.drawArraysInstanced(i,c,l,u),n.update(l,i,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let d=0;for(let f=0;f<u;f++)d+=l[f];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function dg(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==pn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const v=C===qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ln&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==_n&&!v)}function c(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const u=c(l);u!==l&&(Ne("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),S=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),A=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:M,maxSamples:E,samples:T}}function hg(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new yi,o=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,f){const p=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,m=t.get(h);if(!r||p===null||p.length===0||s&&!g)s?u(null):l();else{const S=s?0:i,A=S*4;let M=m.clippingState||null;c.value=M,M=u(p,d,A,f);for(let E=0;E!==A;++E)M[E]=n[E];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,p){const x=h!==null?h.length:0;let g=null;if(x!==0){if(g=c.value,p!==!0||g===null){const m=f+x*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let A=0,M=f;A!==x;++A,M+=4)a.copy(h[A]).applyMatrix4(S,o),a.normal.toArray(g,M),g[M+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}const ui=4,au=[.125,.215,.35,.446,.526,.582],Ti=20,fg=256,Fr=new Jc,ou=new He;let Ka=null,Ja=0,Qa=0,ja=!1;const pg=new O;class cu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=pg}=s;Ka=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ka,Ja,Qa),this._renderer.xr.enabled=ja,e.scissorTest=!1,sr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Li||e.mapping===xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ka=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:qn,format:pn,colorSpace:Qs,depthBuffer:!1},r=lu(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lu(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=mg(s)),this._blurMaterial=xg(s,e,n),this._ggxMaterial=gg(s,e,n)}return r}_compileMaterial(e){const n=new Jt(new rn,e);this._renderer.compile(n,Fr)}_sceneToCubeUV(e,n,i,r,s){const c=new fn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(ou),h.toneMapping=Ln,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Jt(new as,new br({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let m=!1;const S=e.background;S?S.isColor&&(g.color.copy(S),e.background=null,m=!0):(g.color.copy(ou),m=!0);for(let A=0;A<6;A++){const M=A%3;M===0?(c.up.set(0,l[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[A],s.y,s.z)):M===1?(c.up.set(0,0,l[A]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[A],s.z)):(c.up.set(0,l[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[A]));const E=this._cubeSize;sr(r,M*E,A>2?E:0,E,E),h.setRenderTarget(r),m&&h.render(x,c),h.render(e,c)}h.toneMapping=f,h.autoClear=d,e.background=S}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Li||e.mapping===xr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=du()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;sr(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,Fr)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=0+l*1.25,f=h*d,{_lodMax:p}=this,x=this._sizeLods[i],g=3*x*(i>p-ui?i-p+ui:0),m=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=p-n,sr(s,g,m,3*x,2*x),r.setRenderTarget(s),r.render(o,Fr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=p-i,sr(e,g,m,3*x,2*x),r.setRenderTarget(e),r.render(o,Fr)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&je("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=l;const d=l.uniforms,f=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ti-1),x=s/p,g=isFinite(s)?1+Math.floor(u*x):Ti;g>Ti&&Ne(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ti}`);const m=[];let S=0;for(let C=0;C<Ti;++C){const v=C/x,b=Math.exp(-v*v/2);m.push(b),C===0?S+=b:C<g&&(S+=2*b)}for(let C=0;C<m.length;C++)m[C]=m[C]/S;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:A}=this;d.dTheta.value=p,d.mipInt.value=A-i;const M=this._sizeLods[r],E=3*M*(r>A-ui?r-A+ui:0),T=4*(this._cubeSize-M);sr(n,E,T,3*M,2*M),c.setRenderTarget(n),c.render(h,Fr)}}function mg(t){const e=[],n=[],i=[];let r=t;const s=t-ui+1+au.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>t-ui?c=au[a-t+ui-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,x=3,g=2,m=1,S=new Float32Array(x*p*f),A=new Float32Array(g*p*f),M=new Float32Array(m*p*f);for(let T=0;T<f;T++){const C=T%3*2/3-1,v=T>2?0:-1,b=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];S.set(b,x*p*T),A.set(d,g*p*T);const R=[T,T,T,T,T,T];M.set(R,m*p*T)}const E=new rn;E.setAttribute("position",new Kt(S,x)),E.setAttribute("uv",new Kt(A,g)),E.setAttribute("faceIndex",new Kt(M,m)),i.push(new Jt(E,null)),r>ui&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function lu(t,e,n){const i=new Fn(t,e,n);return i.texture.mapping=ua,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sr(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function gg(t,e,n){return new _t({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:da(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function xg(t,e,n){const i=new Float32Array(Ti),r=new O(0,1,0);return new _t({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function uu(){return new _t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function du(){return new _t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function da(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class kd extends Fn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Nd(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new as(5,5,5),s=new _t({name:"CubemapFromEquirect",uniforms:_r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:Dn});s.uniforms.tEquirect.value=n;const a=new Jt(r,s),o=n.minFilter;return n.minFilter===li&&(n.minFilter=Bt),new yp(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function vg(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,f=!1){return d==null?null:f?a(d):s(d)}function s(d){if(d&&d.isTexture){const f=d.mapping;if(f===Sa||f===ya)if(e.has(d)){const p=e.get(d).texture;return o(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const x=new kd(p.height);return x.fromEquirectangularTexture(t,d),e.set(d,x),d.addEventListener("dispose",l),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const f=d.mapping,p=f===Sa||f===ya,x=f===Li||f===xr;if(p||x){let g=n.get(d);const m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new cu(t)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return p&&S&&S.height>0||x&&S&&c(S)?(i===null&&(i=new cu(t)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function o(d,f){return f===Sa?d.mapping=Li:f===ya&&(d.mapping=xr),d}function c(d){let f=0;const p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function l(d){const f=d.target;f.removeEventListener("dispose",l);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(d){const f=d.target;f.removeEventListener("dispose",u);const p=n.get(f);p!==void 0&&(n.delete(f),p.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function _g(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&dr("WebGLRenderer: "+i+" extension not supported."),r}}}function Mg(t,e,n,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",a),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function c(h){const d=h.attributes;for(const f in d)e.update(d[f],t.ARRAY_BUFFER)}function l(h){const d=[],f=h.index,p=h.attributes.position;let x=0;if(p===void 0)return;if(f!==null){const S=f.array;x=f.version;for(let A=0,M=S.length;A<M;A+=3){const E=S[A+0],T=S[A+1],C=S[A+2];d.push(E,T,T,C,C,E)}}else{const S=p.array;x=p.version;for(let A=0,M=S.length/3-1;A<M;A+=3){const E=A+0,T=A+1,C=A+2;d.push(E,T,T,C,C,E)}}const g=new(p.count>=65535?Id:Dd)(d,1);g.version=x;const m=s.get(h);m&&e.remove(m),s.set(h,g)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Sg(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,d){t.drawElements(i,d,s,h*a),n.update(d,i,1)}function l(h,d,f){f!==0&&(t.drawElementsInstanced(i,d,s,h*a,f),n.update(d,i,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,f);let x=0;for(let g=0;g<f;g++)x+=d[g];n.update(x,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function yg(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:je("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Eg(t,e,n){const i=new WeakMap,r=new ft;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let R=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",R)};var f=R;d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let M=0;p===!0&&(M=1),x===!0&&(M=2),g===!0&&(M=3);let E=o.attributes.position.count*M,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const C=new Float32Array(E*T*4*h),v=new Cd(C,E,T,h);v.type=_n,v.needsUpdate=!0;const b=M*4;for(let P=0;P<h;P++){const D=m[P],L=S[P],H=A[P],N=E*T*4*P;for(let q=0;q<D.count;q++){const B=q*b;p===!0&&(r.fromBufferAttribute(D,q),C[N+B+0]=r.x,C[N+B+1]=r.y,C[N+B+2]=r.z,C[N+B+3]=0),x===!0&&(r.fromBufferAttribute(L,q),C[N+B+4]=r.x,C[N+B+5]=r.y,C[N+B+6]=r.z,C[N+B+7]=0),g===!0&&(r.fromBufferAttribute(H,q),C[N+B+8]=r.x,C[N+B+9]=r.y,C[N+B+10]=r.z,C[N+B+11]=H.itemSize===4?r.w:1)}}d={count:h,texture:v,size:new Je(E,T)},i.set(o,d),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];const x=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(t,"morphTargetBaseInfluence",x),c.getUniforms().setValue(t,"morphTargetInfluences",l)}c.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function bg(t,e,n,i,r){let s=new WeakMap;function a(l){const u=r.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return d}function o(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}const Tg={[fd]:"LINEAR_TONE_MAPPING",[pd]:"REINHARD_TONE_MAPPING",[md]:"CINEON_TONE_MAPPING",[gd]:"ACES_FILMIC_TONE_MAPPING",[vd]:"AGX_TONE_MAPPING",[_d]:"NEUTRAL_TONE_MAPPING",[xd]:"CUSTOM_TONE_MAPPING"};function Ag(t,e,n,i,r,s){const a=new Fn(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new vr(e,n):void 0}),o=new Fn(e,n,{type:qn,depthBuffer:!1,stencilBuffer:!1}),c=new rn;c.setAttribute("position",new Pt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Pt([0,2,0,0,2,0],2));const l=new mp({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Jt(c,l),h=new Jc(-1,1,1,-1,0,1);let d=null,f=null,p=!1,x,g=null,m=[],S=!1;this.setSize=function(A,M){a.setSize(A,M),o.setSize(A,M);for(let E=0;E<m.length;E++){const T=m[E];T.setSize&&T.setSize(A,M)}},this.setEffects=function(A){m=A,S=m.length>0&&m[0].isRenderPass===!0;const M=a.width,E=a.height;for(let T=0;T<m.length;T++){const C=m[T];C.setSize&&C.setSize(M,E)}},this.begin=function(A,M){if(p||A.toneMapping===Ln&&m.length===0)return!1;if(g=M,M!==null){const E=M.width,T=M.height;(a.width!==E||a.height!==T)&&this.setSize(E,T)}return S===!1&&A.setRenderTarget(a),x=A.toneMapping,A.toneMapping=Ln,!0},this.hasRenderPass=function(){return S},this.end=function(A,M){A.toneMapping=x,p=!0;let E=a,T=o;for(let C=0;C<m.length;C++){const v=m[C];if(v.enabled!==!1&&(v.render(A,T,E,M),v.needsSwap!==!1)){const b=E;E=T,T=b}}if(d!==A.outputColorSpace||f!==A.toneMapping){d=A.outputColorSpace,f=A.toneMapping,l.defines={},Ze.getTransfer(d)===st&&(l.defines.SRGB_TRANSFER="");const C=Tg[f];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,A.setRenderTarget(g),A.render(u,h),g=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}const Wd=new Vt,_c=new vr(1,1),Xd=new Cd,$d=new Wf,qd=new Nd,hu=[],fu=[],pu=new Float32Array(16),mu=new Float32Array(9),gu=new Float32Array(4);function Tr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=hu[r];if(s===void 0&&(s=new Float32Array(r),hu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ha(t,e){let n=fu[e];n===void 0&&(n=new Int32Array(e),fu[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function wg(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Cg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function Rg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function Pg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function Dg(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;gu.set(i),t.uniformMatrix2fv(this.addr,!1,gu),It(n,i)}}function Ig(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;mu.set(i),t.uniformMatrix3fv(this.addr,!1,mu),It(n,i)}}function Lg(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;pu.set(i),t.uniformMatrix4fv(this.addr,!1,pu),It(n,i)}}function Fg(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Ng(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function Ug(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function Og(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function Bg(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Vg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function zg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function Gg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function Hg(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(_c.compareFunction=n.isReversedDepthBuffer()?kc:Hc,s=_c):s=Wd,n.setTexture2D(e||s,r)}function kg(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||$d,r)}function Wg(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||qd,r)}function Xg(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Xd,r)}function $g(t){switch(t){case 5126:return wg;case 35664:return Cg;case 35665:return Rg;case 35666:return Pg;case 35674:return Dg;case 35675:return Ig;case 35676:return Lg;case 5124:case 35670:return Fg;case 35667:case 35671:return Ng;case 35668:case 35672:return Ug;case 35669:case 35673:return Og;case 5125:return Bg;case 36294:return Vg;case 36295:return zg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Wg;case 36289:case 36303:case 36311:case 36292:return Xg}}function qg(t,e){t.uniform1fv(this.addr,e)}function Yg(t,e){const n=Tr(e,this.size,2);t.uniform2fv(this.addr,n)}function Zg(t,e){const n=Tr(e,this.size,3);t.uniform3fv(this.addr,n)}function Kg(t,e){const n=Tr(e,this.size,4);t.uniform4fv(this.addr,n)}function Jg(t,e){const n=Tr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Qg(t,e){const n=Tr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function jg(t,e){const n=Tr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ex(t,e){t.uniform1iv(this.addr,e)}function tx(t,e){t.uniform2iv(this.addr,e)}function nx(t,e){t.uniform3iv(this.addr,e)}function ix(t,e){t.uniform4iv(this.addr,e)}function rx(t,e){t.uniform1uiv(this.addr,e)}function sx(t,e){t.uniform2uiv(this.addr,e)}function ax(t,e){t.uniform3uiv(this.addr,e)}function ox(t,e){t.uniform4uiv(this.addr,e)}function cx(t,e,n){const i=this.cache,r=e.length,s=ha(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=_c:a=Wd;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function lx(t,e,n){const i=this.cache,r=e.length,s=ha(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||$d,s[a])}function ux(t,e,n){const i=this.cache,r=e.length,s=ha(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||qd,s[a])}function dx(t,e,n){const i=this.cache,r=e.length,s=ha(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Xd,s[a])}function hx(t){switch(t){case 5126:return qg;case 35664:return Yg;case 35665:return Zg;case 35666:return Kg;case 35674:return Jg;case 35675:return Qg;case 35676:return jg;case 5124:case 35670:return ex;case 35667:case 35671:return tx;case 35668:case 35672:return nx;case 35669:case 35673:return ix;case 5125:return rx;case 36294:return sx;case 36295:return ax;case 36296:return ox;case 35678:case 36198:case 36298:case 36306:case 35682:return cx;case 35679:case 36299:case 36307:return lx;case 35680:case 36300:case 36308:case 36293:return ux;case 36289:case 36303:case 36311:case 36292:return dx}}class fx{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=$g(n.type)}}class px{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=hx(n.type)}}class mx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const eo=/(\w+)(\])?(\[|\.)?/g;function xu(t,e){t.seq.push(e),t.map[e.id]=e}function gx(t,e,n){const i=t.name,r=i.length;for(eo.lastIndex=0;;){const s=eo.exec(i),a=eo.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){xu(n,l===void 0?new fx(o,t,e):new px(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new mx(o),xu(n,h)),n=h}}}class Ys{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),c=e.getUniformLocation(n,o.name);gx(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function vu(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const xx=37297;let vx=0;function _x(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const _u=new Be;function Mx(t){Ze._getMatrix(_u,Ze.workingColorSpace,t);const e=`mat3( ${_u.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case js:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Mu(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+_x(t.getShaderSource(e),o)}else return s}function Sx(t,e){const n=Mx(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const yx={[fd]:"Linear",[pd]:"Reinhard",[md]:"Cineon",[gd]:"ACESFilmic",[vd]:"AgX",[_d]:"Neutral",[xd]:"Custom"};function Ex(t,e){const n=yx[e];return n===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Os=new O;function bx(){Ze.getLuminanceCoefficients(Os);const t=Os.x.toFixed(4),e=Os.y.toFixed(4),n=Os.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tx(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kr).join(`
`)}function Ax(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function wx(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function kr(t){return t!==""}function Su(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yu(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mc(t){return t.replace(Cx,Px)}const Rx=new Map;function Px(t,e){let n=ke[e];if(n===void 0){const i=Rx.get(e);if(i!==void 0)n=ke[i],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Mc(n)}const Dx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eu(t){return t.replace(Dx,Ix)}function Ix(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bu(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Lx={[ks]:"SHADOWMAP_TYPE_PCF",[Hr]:"SHADOWMAP_TYPE_VSM"};function Fx(t){return Lx[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Nx={[Li]:"ENVMAP_TYPE_CUBE",[xr]:"ENVMAP_TYPE_CUBE",[ua]:"ENVMAP_TYPE_CUBE_UV"};function Ux(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":Nx[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const Ox={[xr]:"ENVMAP_MODE_REFRACTION"};function Bx(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":Ox[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Vx={[hd]:"ENVMAP_BLENDING_MULTIPLY",[Ef]:"ENVMAP_BLENDING_MIX",[bf]:"ENVMAP_BLENDING_ADD"};function zx(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Vx[t.combine]||"ENVMAP_BLENDING_NONE"}function Gx(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function Hx(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=Fx(n),l=Ux(n),u=Bx(n),h=zx(n),d=Gx(n),f=Tx(n),p=Ax(s),x=r.createProgram();let g,m,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(kr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(kr).join(`
`),m.length>0&&(m+=`
`)):(g=[bu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),m=[bu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ln?"#define TONE_MAPPING":"",n.toneMapping!==Ln?ke.tonemapping_pars_fragment:"",n.toneMapping!==Ln?Ex("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Sx("linearToOutputTexel",n.outputColorSpace),bx(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(kr).join(`
`)),a=Mc(a),a=Su(a,n),a=yu(a,n),o=Mc(o),o=Su(o,n),o=yu(o,n),a=Eu(a),o=Eu(o),n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",n.glslVersion===Pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const A=S+g+a,M=S+m+o,E=vu(r,r.VERTEX_SHADER,A),T=vu(r,r.FRAGMENT_SHADER,M);r.attachShader(x,E),r.attachShader(x,T),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(P){if(t.debug.checkShaderErrors){const D=r.getProgramInfoLog(x)||"",L=r.getShaderInfoLog(E)||"",H=r.getShaderInfoLog(T)||"",N=D.trim(),q=L.trim(),B=H.trim();let G=!0,Q=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,E,T);else{const ne=Mu(r,E,"vertex"),j=Mu(r,T,"fragment");je("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+ne+`
`+j)}else N!==""?Ne("WebGLProgram: Program Info Log:",N):(q===""||B==="")&&(Q=!1);Q&&(P.diagnostics={runnable:G,programLog:N,vertexShader:{log:q,prefix:g},fragmentShader:{log:B,prefix:m}})}r.deleteShader(E),r.deleteShader(T),v=new Ys(r,x),b=wx(r,x)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(x,xx)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=vx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=T,this}let kx=0;class Wx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Xx(e),n.set(e,i)),i}}class Xx{constructor(e){this.id=kx++,this.code=e,this.usedTimes=0}}function $x(t){return t===Fi||t===Ks||t===Js}function qx(t,e,n,i,r,s){const a=new Rd,o=new Wx,c=new Set,l=[],u=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function x(v,b,R,P,D,L){const H=P.fog,N=D.geometry,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,G=e.get(v.envMap||q,B),Q=G&&G.mapping===ua?G.image.height:null,ne=f[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&Ne("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const j=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,re=j!==void 0?j.length:0;let Oe=0;N.morphAttributes.position!==void 0&&(Oe=1),N.morphAttributes.normal!==void 0&&(Oe=2),N.morphAttributes.color!==void 0&&(Oe=3);let We,Fe,Z,se;if(ne){const Te=wn[ne];We=Te.vertexShader,Fe=Te.fragmentShader}else{We=v.vertexShader,Fe=v.fragmentShader;const Te=o.getVertexShaderStage(v),Et=o.getFragmentShaderStage(v);o.update(v,Te,Et),Z=Te.id,se=Et.id}const V=t.getRenderTarget(),ge=t.state.buffers.depth.getReversed(),Ee=D.isInstancedMesh===!0,Se=D.isBatchedMesh===!0,tt=!!v.map,Ge=!!v.matcap,nt=!!G,Ye=!!v.aoMap,$e=!!v.lightMap,Mt=!!v.bumpMap&&v.wireframe===!1,St=!!v.normalMap,wt=!!v.displacementMap,Nt=!!v.emissiveMap,yt=!!v.metalnessMap,Ct=!!v.roughnessMap,F=v.anisotropy>0,Qt=v.clearcoat>0,rt=v.dispersion>0,w=v.iridescence>0,_=v.sheen>0,z=v.transmission>0,X=F&&!!v.anisotropyMap,K=Qt&&!!v.clearcoatMap,oe=Qt&&!!v.clearcoatNormalMap,le=Qt&&!!v.clearcoatRoughnessMap,J=w&&!!v.iridescenceMap,te=w&&!!v.iridescenceThicknessMap,ue=_&&!!v.sheenColorMap,Re=_&&!!v.sheenRoughnessMap,pe=!!v.specularMap,de=!!v.specularColorMap,Ie=!!v.specularIntensityMap,Le=z&&!!v.transmissionMap,Ve=z&&!!v.thicknessMap,I=!!v.gradientMap,ce=!!v.alphaMap,ee=v.alphaTest>0,he=!!v.alphaHash,_e=!!v.extensions;let ie=Ln;v.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(ie=t.toneMapping);const Ce={shaderID:ne,shaderType:v.type,shaderName:v.name,vertexShader:We,fragmentShader:Fe,defines:v.defines,customVertexShaderID:Z,customFragmentShaderID:se,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Se,batchingColor:Se&&D._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&D.instanceColor!==null,instancingMorph:Ee&&D.morphTexture!==null,outputColorSpace:V===null?t.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:tt,matcap:Ge,envMap:nt,envMapMode:nt&&G.mapping,envMapCubeUVHeight:Q,aoMap:Ye,lightMap:$e,bumpMap:Mt,normalMap:St,displacementMap:wt,emissiveMap:Nt,normalMapObjectSpace:St&&v.normalMapType===wf,normalMapTangentSpace:St&&v.normalMapType===xc,packedNormalMap:St&&v.normalMapType===xc&&$x(v.normalMap.format),metalnessMap:yt,roughnessMap:Ct,anisotropy:F,anisotropyMap:X,clearcoat:Qt,clearcoatMap:K,clearcoatNormalMap:oe,clearcoatRoughnessMap:le,dispersion:rt,iridescence:w,iridescenceMap:J,iridescenceThicknessMap:te,sheen:_,sheenColorMap:ue,sheenRoughnessMap:Re,specularMap:pe,specularColorMap:de,specularIntensityMap:Ie,transmission:z,transmissionMap:Le,thicknessMap:Ve,gradientMap:I,opaque:v.transparent===!1&&v.blending===In&&v.alphaToCoverage===!1,alphaMap:ce,alphaTest:ee,alphaHash:he,combine:v.combine,mapUv:tt&&p(v.map.channel),aoMapUv:Ye&&p(v.aoMap.channel),lightMapUv:$e&&p(v.lightMap.channel),bumpMapUv:Mt&&p(v.bumpMap.channel),normalMapUv:St&&p(v.normalMap.channel),displacementMapUv:wt&&p(v.displacementMap.channel),emissiveMapUv:Nt&&p(v.emissiveMap.channel),metalnessMapUv:yt&&p(v.metalnessMap.channel),roughnessMapUv:Ct&&p(v.roughnessMap.channel),anisotropyMapUv:X&&p(v.anisotropyMap.channel),clearcoatMapUv:K&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:oe&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:te&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Re&&p(v.sheenRoughnessMap.channel),specularMapUv:pe&&p(v.specularMap.channel),specularColorMapUv:de&&p(v.specularColorMap.channel),specularIntensityMapUv:Ie&&p(v.specularIntensityMap.channel),transmissionMapUv:Le&&p(v.transmissionMap.channel),thicknessMapUv:Ve&&p(v.thicknessMap.channel),alphaMapUv:ce&&p(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(St||F),vertexNormals:!!N.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!N.attributes.uv&&(tt||ce),fog:!!H,useFog:v.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||N.attributes.normal===void 0&&St===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ge,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Oe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:ie,decodeVideoTexture:tt&&v.map.isVideoTexture===!0&&Ze.getTransfer(v.map.colorSpace)===st,decodeVideoTextureEmissive:Nt&&v.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(v.emissiveMap.colorSpace)===st,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===cn,flipSided:v.side===Zt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:_e&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&v.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ce.vertexUv1s=c.has(1),Ce.vertexUv2s=c.has(2),Ce.vertexUv3s=c.has(3),c.clear(),Ce}function g(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)b.push(R),b.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(m(b,v),S(b,v),b.push(t.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function m(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function S(v,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function A(v){const b=f[v.type];let R;if(b){const P=wn[b];R=Bd.clone(P.uniforms)}else R=v.uniforms;return R}function M(v,b){let R=u.get(b);return R!==void 0?++R.usedTimes:(R=new Hx(t,b,v,r),l.push(R),u.set(b,R)),R}function E(v){if(--v.usedTimes===0){const b=l.indexOf(v);l[b]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function C(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:A,acquireProgram:M,releaseProgram:E,releaseShaderCache:T,programs:l,dispose:C}}function Yx(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,c){t.get(a)[o]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Zx(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Tu(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Au(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,x,g,m){let S=t[e];return S===void 0?(S={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:m},t[e]=S):(S.id=d.id,S.object=d,S.geometry=f,S.material=p,S.materialVariant=a(d),S.groupOrder=x,S.renderOrder=d.renderOrder,S.z=g,S.group=m),e++,S}function c(d,f,p,x,g,m){const S=o(d,f,p,x,g,m);p.transmission>0?i.push(S):p.transparent===!0?r.push(S):n.push(S)}function l(d,f,p,x,g,m){const S=o(d,f,p,x,g,m);p.transmission>0?i.unshift(S):p.transparent===!0?r.unshift(S):n.unshift(S)}function u(d,f,p){n.length>1&&n.sort(d||Zx),i.length>1&&i.sort(f||Tu),r.length>1&&r.sort(f||Tu),p&&(n.reverse(),i.reverse(),r.reverse())}function h(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:h,sort:u}}function Kx(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Au,t.set(i,[a])):r>=s.length?(a=new Au,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Jx(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new He};break;case"SpotLight":n={position:new O,direction:new O,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new He,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new He,groundColor:new He};break;case"RectAreaLight":n={color:new He,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function Qx(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let jx=0;function ev(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function tv(t){const e=new Jx,n=Qx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new O);const r=new O,s=new at,a=new at;function o(l){let u=0,h=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,S=0,A=0,M=0,E=0,T=0,C=0;l.sort(ev);for(let b=0,R=l.length;b<R;b++){const P=l[b],D=P.color,L=P.intensity,H=P.distance;let N=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Fi?N=P.shadow.map.texture:N=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=D.r*L,h+=D.g*L,d+=D.b*L;else if(P.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(P.sh.coefficients[q],L);C++}else if(P.isDirectionalLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const B=P.shadow,G=n.get(P);G.shadowIntensity=B.intensity,G.shadowBias=B.bias,G.shadowNormalBias=B.normalBias,G.shadowRadius=B.radius,G.shadowMapSize=B.mapSize,i.directionalShadow[f]=G,i.directionalShadowMap[f]=N,i.directionalShadowMatrix[f]=P.shadow.matrix,S++}i.directional[f]=q,f++}else if(P.isSpotLight){const q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(D).multiplyScalar(L),q.distance=H,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,i.spot[x]=q;const B=P.shadow;if(P.map&&(i.spotLightMap[E]=P.map,E++,B.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[x]=B.matrix,P.castShadow){const G=n.get(P);G.shadowIntensity=B.intensity,G.shadowBias=B.bias,G.shadowNormalBias=B.normalBias,G.shadowRadius=B.radius,G.shadowMapSize=B.mapSize,i.spotShadow[x]=G,i.spotShadowMap[x]=N,M++}x++}else if(P.isRectAreaLight){const q=e.get(P);q.color.copy(D).multiplyScalar(L),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=q,g++}else if(P.isPointLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const B=P.shadow,G=n.get(P);G.shadowIntensity=B.intensity,G.shadowBias=B.bias,G.shadowNormalBias=B.normalBias,G.shadowRadius=B.radius,G.shadowMapSize=B.mapSize,G.shadowCameraNear=B.camera.near,G.shadowCameraFar=B.camera.far,i.pointShadow[p]=G,i.pointShadowMap[p]=N,i.pointShadowMatrix[p]=P.shadow.matrix,A++}i.point[p]=q,p++}else if(P.isHemisphereLight){const q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(L),q.groundColor.copy(P.groundColor).multiplyScalar(L),i.hemi[m]=q,m++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const v=i.hash;(v.directionalLength!==f||v.pointLength!==p||v.spotLength!==x||v.rectAreaLength!==g||v.hemiLength!==m||v.numDirectionalShadows!==S||v.numPointShadows!==A||v.numSpotShadows!==M||v.numSpotMaps!==E||v.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=M+E-T,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,v.directionalLength=f,v.pointLength=p,v.spotLength=x,v.rectAreaLength=g,v.hemiLength=m,v.numDirectionalShadows=S,v.numPointShadows=A,v.numSpotShadows=M,v.numSpotMaps=E,v.numLightProbes=C,i.version=jx++)}function c(l,u){let h=0,d=0,f=0,p=0,x=0;const g=u.matrixWorldInverse;for(let m=0,S=l.length;m<S;m++){const A=l[m];if(A.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),h++}else if(A.isSpotLight){const M=i.spot[f];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),f++}else if(A.isRectAreaLight){const M=i.rectArea[p];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(g),a.identity(),s.copy(A.matrixWorld),s.premultiply(g),a.extractRotation(s),M.halfWidth.set(A.width*.5,0,0),M.halfHeight.set(0,A.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),p++}else if(A.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(g),d++}else if(A.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(A.matrixWorld),M.direction.transformDirection(g),x++}}}return{setup:o,setupView:c,state:i}}function wu(t){const e=new tv(t),n=[],i=[],r=[];function s(d){h.camera=d,n.length=0,i.length=0,r.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function c(d){r.push(d)}function l(){e.setup(n)}function u(d){e.setupView(n,d)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function nv(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new wu(t),e.set(r,[o])):s>=a.length?(o=new wu(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const iv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,sv=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],av=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Cu=new at,Nr=new O,to=new O;function ov(t,e,n){let i=new $c;const r=new Je,s=new Je,a=new ft,o=new gp,c=new xp,l={},u=n.maxTextureSize,h={[$n]:Zt,[Zt]:$n,[cn]:cn},d=new _t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:iv,fragmentShader:rv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new rn;p.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Jt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ks;let m=this.type;this.render=function(T,C,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===rf&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ks);const b=t.getRenderTarget(),R=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),D=t.state;D.setBlending(Dn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const L=m!==this.type;L&&C.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(N=>N.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,N=T.length;H<N;H++){const q=T[H],B=q.shadow;if(B===void 0){Ne("WebGLShadowMap:",q,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const G=B.getFrameExtents();r.multiply(G),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/G.x),r.x=s.x*G.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/G.y),r.y=s.y*G.y,B.mapSize.y=s.y));const Q=t.state.buffers.depth.getReversed();if(B.camera._reversedDepth=Q,B.map===null||L===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Hr){if(q.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Fn(r.x,r.y,{format:Fi,type:qn,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),B.map.texture.name=q.name+".shadowMap",B.map.depthTexture=new vr(r.x,r.y,_n),B.map.depthTexture.name=q.name+".shadowMapDepth",B.map.depthTexture.format=Yn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ot,B.map.depthTexture.magFilter=Ot}else q.isPointLight?(B.map=new kd(r.x),B.map.depthTexture=new dp(r.x,Nn)):(B.map=new Fn(r.x,r.y),B.map.depthTexture=new vr(r.x,r.y,Nn)),B.map.depthTexture.name=q.name+".shadowMap",B.map.depthTexture.format=Yn,this.type===ks?(B.map.depthTexture.compareFunction=Q?kc:Hc,B.map.depthTexture.minFilter=Bt,B.map.depthTexture.magFilter=Bt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ot,B.map.depthTexture.magFilter=Ot);B.camera.updateProjectionMatrix()}const ne=B.map.isWebGLCubeRenderTarget?6:1;for(let j=0;j<ne;j++){if(B.map.isWebGLCubeRenderTarget)t.setRenderTarget(B.map,j),t.clear();else{j===0&&(t.setRenderTarget(B.map),t.clear());const re=B.getViewport(j);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),D.viewport(a)}if(q.isPointLight){const re=B.camera,Oe=B.matrix,We=q.distance||re.far;We!==re.far&&(re.far=We,re.updateProjectionMatrix()),Nr.setFromMatrixPosition(q.matrixWorld),re.position.copy(Nr),to.copy(re.position),to.add(sv[j]),re.up.copy(av[j]),re.lookAt(to),re.updateMatrixWorld(),Oe.makeTranslation(-Nr.x,-Nr.y,-Nr.z),Cu.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Cu,re.coordinateSystem,re.reversedDepth)}else B.updateMatrices(q);i=B.getFrustum(),M(C,v,B.camera,q,this.type)}B.isPointLightShadow!==!0&&this.type===Hr&&S(B,v),B.needsUpdate=!1}m=this.type,g.needsUpdate=!1,t.setRenderTarget(b,R,P)};function S(T,C){const v=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Fn(r.x,r.y,{format:Fi,type:qn})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,v,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,v,f,x,null)}function A(T,C,v,b){let R=null;const P=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)R=P;else if(R=v.isPointLight===!0?c:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const D=R.uuid,L=C.uuid;let H=l[D];H===void 0&&(H={},l[D]=H);let N=H[L];N===void 0&&(N=R.clone(),H[L]=N,C.addEventListener("dispose",E)),R=N}if(R.visible=C.visible,R.wireframe=C.wireframe,b===Hr?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:h[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const D=t.properties.get(R);D.light=v}return R}function M(T,C,v,b,R){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===Hr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const L=e.update(T),H=T.material;if(Array.isArray(H)){const N=L.groups;for(let q=0,B=N.length;q<B;q++){const G=N[q],Q=H[G.materialIndex];if(Q&&Q.visible){const ne=A(T,Q,b,R);T.onBeforeShadow(t,T,C,v,L,ne,G),t.renderBufferDirect(v,null,L,ne,T,G),T.onAfterShadow(t,T,C,v,L,ne,G)}}}else if(H.visible){const N=A(T,H,b,R);T.onBeforeShadow(t,T,C,v,L,N,null),t.renderBufferDirect(v,null,L,N,T,null),T.onAfterShadow(t,T,C,v,L,N,null)}}const D=T.children;for(let L=0,H=D.length;L<H;L++)M(D[L],C,v,b,R)}function E(T){T.target.removeEventListener("dispose",E);for(const v in l){const b=l[v],R=T.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}function cv(t,e){function n(){let I=!1;const ce=new ft;let ee=null;const he=new ft(0,0,0,0);return{setMask:function(_e){ee!==_e&&!I&&(t.colorMask(_e,_e,_e,_e),ee=_e)},setLocked:function(_e){I=_e},setClear:function(_e,ie,Ce,Te,Et){Et===!0&&(_e*=Te,ie*=Te,Ce*=Te),ce.set(_e,ie,Ce,Te),he.equals(ce)===!1&&(t.clearColor(_e,ie,Ce,Te),he.copy(ce))},reset:function(){I=!1,ee=null,he.set(-1,0,0,0)}}}function i(){let I=!1,ce=!1,ee=null,he=null,_e=null;return{setReversed:function(ie){if(ce!==ie){const Ce=e.get("EXT_clip_control");ie?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),ce=ie;const Te=_e;_e=null,this.setClear(Te)}},getReversed:function(){return ce},setTest:function(ie){ie?V(t.DEPTH_TEST):ge(t.DEPTH_TEST)},setMask:function(ie){ee!==ie&&!I&&(t.depthMask(ie),ee=ie)},setFunc:function(ie){if(ce&&(ie=Of[ie]),he!==ie){switch(ie){case Lo:t.depthFunc(t.NEVER);break;case Fo:t.depthFunc(t.ALWAYS);break;case No:t.depthFunc(t.LESS);break;case gr:t.depthFunc(t.LEQUAL);break;case Uo:t.depthFunc(t.EQUAL);break;case Oo:t.depthFunc(t.GEQUAL);break;case Bo:t.depthFunc(t.GREATER);break;case Vo:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=ie}},setLocked:function(ie){I=ie},setClear:function(ie){_e!==ie&&(_e=ie,ce&&(ie=1-ie),t.clearDepth(ie))},reset:function(){I=!1,ee=null,he=null,_e=null,ce=!1}}}function r(){let I=!1,ce=null,ee=null,he=null,_e=null,ie=null,Ce=null,Te=null,Et=null;return{setTest:function(pt){I||(pt?V(t.STENCIL_TEST):ge(t.STENCIL_TEST))},setMask:function(pt){ce!==pt&&!I&&(t.stencilMask(pt),ce=pt)},setFunc:function(pt,Sn,yn){(ee!==pt||he!==Sn||_e!==yn)&&(t.stencilFunc(pt,Sn,yn),ee=pt,he=Sn,_e=yn)},setOp:function(pt,Sn,yn){(ie!==pt||Ce!==Sn||Te!==yn)&&(t.stencilOp(pt,Sn,yn),ie=pt,Ce=Sn,Te=yn)},setLocked:function(pt){I=pt},setClear:function(pt){Et!==pt&&(t.clearStencil(pt),Et=pt)},reset:function(){I=!1,ce=null,ee=null,he=null,_e=null,ie=null,Ce=null,Te=null,Et=null}}}const s=new n,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},h={},d={},f=new WeakMap,p=[],x=null,g=!1,m=null,S=null,A=null,M=null,E=null,T=null,C=null,v=new He(0,0,0),b=0,R=!1,P=null,D=null,L=null,H=null,N=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,G=0;const Q=t.getParameter(t.VERSION);Q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Q)[1]),B=G>=1):Q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),B=G>=2);let ne=null,j={};const re=t.getParameter(t.SCISSOR_BOX),Oe=t.getParameter(t.VIEWPORT),We=new ft().fromArray(re),Fe=new ft().fromArray(Oe);function Z(I,ce,ee,he){const _e=new Uint8Array(4),ie=t.createTexture();t.bindTexture(I,ie),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ce=0;Ce<ee;Ce++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,_e):t.texImage2D(ce+Ce,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,_e);return ie}const se={};se[t.TEXTURE_2D]=Z(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=Z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[t.TEXTURE_2D_ARRAY]=Z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=Z(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),V(t.DEPTH_TEST),a.setFunc(gr),Mt(!1),St(Tl),V(t.CULL_FACE),Ye(Dn);function V(I){u[I]!==!0&&(t.enable(I),u[I]=!0)}function ge(I){u[I]!==!1&&(t.disable(I),u[I]=!1)}function Ee(I,ce){return d[I]!==ce?(t.bindFramebuffer(I,ce),d[I]=ce,I===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ce),I===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function Se(I,ce){let ee=p,he=!1;if(I){ee=f.get(ce),ee===void 0&&(ee=[],f.set(ce,ee));const _e=I.textures;if(ee.length!==_e.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let ie=0,Ce=_e.length;ie<Ce;ie++)ee[ie]=t.COLOR_ATTACHMENT0+ie;ee.length=_e.length,he=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,he=!0);he&&t.drawBuffers(ee)}function tt(I){return x!==I?(t.useProgram(I),x=I,!0):!1}const Ge={[bi]:t.FUNC_ADD,[af]:t.FUNC_SUBTRACT,[of]:t.FUNC_REVERSE_SUBTRACT};Ge[cf]=t.MIN,Ge[lf]=t.MAX;const nt={[uf]:t.ZERO,[df]:t.ONE,[hf]:t.SRC_COLOR,[Do]:t.SRC_ALPHA,[vf]:t.SRC_ALPHA_SATURATE,[gf]:t.DST_COLOR,[pf]:t.DST_ALPHA,[ff]:t.ONE_MINUS_SRC_COLOR,[Io]:t.ONE_MINUS_SRC_ALPHA,[xf]:t.ONE_MINUS_DST_COLOR,[mf]:t.ONE_MINUS_DST_ALPHA,[_f]:t.CONSTANT_COLOR,[Mf]:t.ONE_MINUS_CONSTANT_COLOR,[Sf]:t.CONSTANT_ALPHA,[yf]:t.ONE_MINUS_CONSTANT_ALPHA};function Ye(I,ce,ee,he,_e,ie,Ce,Te,Et,pt){if(I===Dn){g===!0&&(ge(t.BLEND),g=!1);return}if(g===!1&&(V(t.BLEND),g=!0),I!==sf){if(I!==m||pt!==R){if((S!==bi||E!==bi)&&(t.blendEquation(t.FUNC_ADD),S=bi,E=bi),pt)switch(I){case In:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case mr:t.blendFunc(t.ONE,t.ONE);break;case Al:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case wl:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:je("WebGLState: Invalid blending: ",I);break}else switch(I){case In:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case mr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Al:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wl:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",I);break}A=null,M=null,T=null,C=null,v.set(0,0,0),b=0,m=I,R=pt}return}_e=_e||ce,ie=ie||ee,Ce=Ce||he,(ce!==S||_e!==E)&&(t.blendEquationSeparate(Ge[ce],Ge[_e]),S=ce,E=_e),(ee!==A||he!==M||ie!==T||Ce!==C)&&(t.blendFuncSeparate(nt[ee],nt[he],nt[ie],nt[Ce]),A=ee,M=he,T=ie,C=Ce),(Te.equals(v)===!1||Et!==b)&&(t.blendColor(Te.r,Te.g,Te.b,Et),v.copy(Te),b=Et),m=I,R=!1}function $e(I,ce){I.side===cn?ge(t.CULL_FACE):V(t.CULL_FACE);let ee=I.side===Zt;ce&&(ee=!ee),Mt(ee),I.blending===In&&I.transparent===!1?Ye(Dn):Ye(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const he=I.stencilWrite;o.setTest(he),he&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Nt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?V(t.SAMPLE_ALPHA_TO_COVERAGE):ge(t.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(I){P!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),P=I)}function St(I){I!==tf?(V(t.CULL_FACE),I!==D&&(I===Tl?t.cullFace(t.BACK):I===nf?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ge(t.CULL_FACE),D=I}function wt(I){I!==L&&(B&&t.lineWidth(I),L=I)}function Nt(I,ce,ee){I?(V(t.POLYGON_OFFSET_FILL),(H!==ce||N!==ee)&&(H=ce,N=ee,a.getReversed()&&(ce=-ce),t.polygonOffset(ce,ee))):ge(t.POLYGON_OFFSET_FILL)}function yt(I){I?V(t.SCISSOR_TEST):ge(t.SCISSOR_TEST)}function Ct(I){I===void 0&&(I=t.TEXTURE0+q-1),ne!==I&&(t.activeTexture(I),ne=I)}function F(I,ce,ee){ee===void 0&&(ne===null?ee=t.TEXTURE0+q-1:ee=ne);let he=j[ee];he===void 0&&(he={type:void 0,texture:void 0},j[ee]=he),(he.type!==I||he.texture!==ce)&&(ne!==ee&&(t.activeTexture(ee),ne=ee),t.bindTexture(I,ce||se[I]),he.type=I,he.texture=ce)}function Qt(){const I=j[ne];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function rt(){try{t.compressedTexImage2D(...arguments)}catch(I){je("WebGLState:",I)}}function w(){try{t.compressedTexImage3D(...arguments)}catch(I){je("WebGLState:",I)}}function _(){try{t.texSubImage2D(...arguments)}catch(I){je("WebGLState:",I)}}function z(){try{t.texSubImage3D(...arguments)}catch(I){je("WebGLState:",I)}}function X(){try{t.compressedTexSubImage2D(...arguments)}catch(I){je("WebGLState:",I)}}function K(){try{t.compressedTexSubImage3D(...arguments)}catch(I){je("WebGLState:",I)}}function oe(){try{t.texStorage2D(...arguments)}catch(I){je("WebGLState:",I)}}function le(){try{t.texStorage3D(...arguments)}catch(I){je("WebGLState:",I)}}function J(){try{t.texImage2D(...arguments)}catch(I){je("WebGLState:",I)}}function te(){try{t.texImage3D(...arguments)}catch(I){je("WebGLState:",I)}}function ue(I){return h[I]!==void 0?h[I]:t.getParameter(I)}function Re(I,ce){h[I]!==ce&&(t.pixelStorei(I,ce),h[I]=ce)}function pe(I){We.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),We.copy(I))}function de(I){Fe.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),Fe.copy(I))}function Ie(I,ce){let ee=l.get(ce);ee===void 0&&(ee=new WeakMap,l.set(ce,ee));let he=ee.get(I);he===void 0&&(he=t.getUniformBlockIndex(ce,I.name),ee.set(I,he))}function Le(I,ce){const he=l.get(ce).get(I);c.get(ce)!==he&&(t.uniformBlockBinding(ce,he,I.__bindingPointIndex),c.set(ce,he))}function Ve(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},h={},ne=null,j={},d={},f=new WeakMap,p=[],x=null,g=!1,m=null,S=null,A=null,M=null,E=null,T=null,C=null,v=new He(0,0,0),b=0,R=!1,P=null,D=null,L=null,H=null,N=null,We.set(0,0,t.canvas.width,t.canvas.height),Fe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:V,disable:ge,bindFramebuffer:Ee,drawBuffers:Se,useProgram:tt,setBlending:Ye,setMaterial:$e,setFlipSided:Mt,setCullFace:St,setLineWidth:wt,setPolygonOffset:Nt,setScissorTest:yt,activeTexture:Ct,bindTexture:F,unbindTexture:Qt,compressedTexImage2D:rt,compressedTexImage3D:w,texImage2D:J,texImage3D:te,pixelStorei:Re,getParameter:ue,updateUBOMapping:Ie,uniformBlockBinding:Le,texStorage2D:oe,texStorage3D:le,texSubImage2D:_,texSubImage3D:z,compressedTexSubImage2D:X,compressedTexSubImage3D:K,scissor:pe,viewport:de,reset:Ve}}function lv(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Je,u=new WeakMap,h=new Set;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,_){return p?new OffscreenCanvas(w,_):ea("canvas")}function g(w,_,z){let X=1;const K=rt(w);if((K.width>z||K.height>z)&&(X=z/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const oe=Math.floor(X*K.width),le=Math.floor(X*K.height);d===void 0&&(d=x(oe,le));const J=_?x(oe,le):d;return J.width=oe,J.height=le,J.getContext("2d").drawImage(w,0,0,oe,le),Ne("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+oe+"x"+le+")."),J}else return"data"in w&&Ne("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function m(w){return w.generateMipmaps}function S(w){t.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(w,_,z,X,K,oe=!1){if(w!==null){if(t[w]!==void 0)return t[w];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let le;X&&(le=e.get("EXT_texture_norm16"),le||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=_;if(_===t.RED&&(z===t.FLOAT&&(J=t.R32F),z===t.HALF_FLOAT&&(J=t.R16F),z===t.UNSIGNED_BYTE&&(J=t.R8),z===t.UNSIGNED_SHORT&&le&&(J=le.R16_EXT),z===t.SHORT&&le&&(J=le.R16_SNORM_EXT)),_===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(J=t.R8UI),z===t.UNSIGNED_SHORT&&(J=t.R16UI),z===t.UNSIGNED_INT&&(J=t.R32UI),z===t.BYTE&&(J=t.R8I),z===t.SHORT&&(J=t.R16I),z===t.INT&&(J=t.R32I)),_===t.RG&&(z===t.FLOAT&&(J=t.RG32F),z===t.HALF_FLOAT&&(J=t.RG16F),z===t.UNSIGNED_BYTE&&(J=t.RG8),z===t.UNSIGNED_SHORT&&le&&(J=le.RG16_EXT),z===t.SHORT&&le&&(J=le.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(J=t.RG8UI),z===t.UNSIGNED_SHORT&&(J=t.RG16UI),z===t.UNSIGNED_INT&&(J=t.RG32UI),z===t.BYTE&&(J=t.RG8I),z===t.SHORT&&(J=t.RG16I),z===t.INT&&(J=t.RG32I)),_===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(J=t.RGB8UI),z===t.UNSIGNED_SHORT&&(J=t.RGB16UI),z===t.UNSIGNED_INT&&(J=t.RGB32UI),z===t.BYTE&&(J=t.RGB8I),z===t.SHORT&&(J=t.RGB16I),z===t.INT&&(J=t.RGB32I)),_===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),z===t.UNSIGNED_INT&&(J=t.RGBA32UI),z===t.BYTE&&(J=t.RGBA8I),z===t.SHORT&&(J=t.RGBA16I),z===t.INT&&(J=t.RGBA32I)),_===t.RGB&&(z===t.UNSIGNED_SHORT&&le&&(J=le.RGB16_EXT),z===t.SHORT&&le&&(J=le.RGB16_SNORM_EXT),z===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),z===t.UNSIGNED_INT_10F_11F_11F_REV&&(J=t.R11F_G11F_B10F)),_===t.RGBA){const te=oe?js:Ze.getTransfer(K);z===t.FLOAT&&(J=t.RGBA32F),z===t.HALF_FLOAT&&(J=t.RGBA16F),z===t.UNSIGNED_BYTE&&(J=te===st?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT&&le&&(J=le.RGBA16_EXT),z===t.SHORT&&le&&(J=le.RGBA16_SNORM_EXT),z===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function E(w,_){let z;return w?_===null||_===Nn||_===Qr?z=t.DEPTH24_STENCIL8:_===_n?z=t.DEPTH32F_STENCIL8:_===Jr&&(z=t.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Nn||_===Qr?z=t.DEPTH_COMPONENT24:_===_n?z=t.DEPTH_COMPONENT32F:_===Jr&&(z=t.DEPTH_COMPONENT16),z}function T(w,_){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ot&&w.minFilter!==Bt?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function C(w){const _=w.target;_.removeEventListener("dispose",C),b(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&h.delete(_)}function v(w){const _=w.target;_.removeEventListener("dispose",v),P(_)}function b(w){const _=i.get(w);if(_.__webglInit===void 0)return;const z=w.source,X=f.get(z);if(X){const K=X[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&R(w),Object.keys(X).length===0&&f.delete(z)}i.remove(w)}function R(w){const _=i.get(w);t.deleteTexture(_.__webglTexture);const z=w.source,X=f.get(z);delete X[_.__cacheKey],a.memory.textures--}function P(w){const _=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let K=0;K<_.__webglFramebuffer[X].length;K++)t.deleteFramebuffer(_.__webglFramebuffer[X][K]);else t.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)t.deleteFramebuffer(_.__webglFramebuffer[X]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=w.textures;for(let X=0,K=z.length;X<K;X++){const oe=i.get(z[X]);oe.__webglTexture&&(t.deleteTexture(oe.__webglTexture),a.memory.textures--),i.remove(z[X])}i.remove(w)}let D=0;function L(){D=0}function H(){return D}function N(w){D=w}function q(){const w=D;return w>=r.maxTextures&&Ne("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),D+=1,w}function B(w){const _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function G(w,_){const z=i.get(w);if(w.isVideoTexture&&F(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&z.__version!==w.version){const X=w.image;if(X===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(z,w,_);return}}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+_)}function Q(w,_){const z=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){ge(z,w,_);return}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+_)}function ne(w,_){const z=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){ge(z,w,_);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+_)}function j(w,_){const z=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&z.__version!==w.version){Ee(z,w,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+_)}const re={[Kr]:t.REPEAT,[Wn]:t.CLAMP_TO_EDGE,[zo]:t.MIRRORED_REPEAT},Oe={[Ot]:t.NEAREST,[Tf]:t.NEAREST_MIPMAP_NEAREST,[fs]:t.NEAREST_MIPMAP_LINEAR,[Bt]:t.LINEAR,[Ea]:t.LINEAR_MIPMAP_NEAREST,[li]:t.LINEAR_MIPMAP_LINEAR},We={[Cf]:t.NEVER,[Lf]:t.ALWAYS,[Rf]:t.LESS,[Hc]:t.LEQUAL,[Pf]:t.EQUAL,[kc]:t.GEQUAL,[Df]:t.GREATER,[If]:t.NOTEQUAL};function Fe(w,_){if(_.type===_n&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Bt||_.magFilter===Ea||_.magFilter===fs||_.magFilter===li||_.minFilter===Bt||_.minFilter===Ea||_.minFilter===fs||_.minFilter===li)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,re[_.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,re[_.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,re[_.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,Oe[_.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,Oe[_.minFilter]),_.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,We[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ot||_.minFilter!==fs&&_.minFilter!==li||_.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Z(w,_){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",C));const X=_.source;let K=f.get(X);K===void 0&&(K={},f.set(X,K));const oe=B(_);if(oe!==w.__cacheKey){K[oe]===void 0&&(K[oe]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,z=!0),K[oe].usedTimes++;const le=K[w.__cacheKey];le!==void 0&&(K[w.__cacheKey].usedTimes--,le.usedTimes===0&&R(_)),w.__cacheKey=oe,w.__webglTexture=K[oe].texture}return z}function se(w,_,z){return Math.floor(Math.floor(w/z)/_)}function V(w,_,z,X){const oe=w.updateRanges;if(oe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,z,X,_.data);else{oe.sort((Re,pe)=>Re.start-pe.start);let le=0;for(let Re=1;Re<oe.length;Re++){const pe=oe[le],de=oe[Re],Ie=pe.start+pe.count,Le=se(de.start,_.width,4),Ve=se(pe.start,_.width,4);de.start<=Ie+1&&Le===Ve&&se(de.start+de.count-1,_.width,4)===Le?pe.count=Math.max(pe.count,de.start+de.count-pe.start):(++le,oe[le]=de)}oe.length=le+1;const J=n.getParameter(t.UNPACK_ROW_LENGTH),te=n.getParameter(t.UNPACK_SKIP_PIXELS),ue=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let Re=0,pe=oe.length;Re<pe;Re++){const de=oe[Re],Ie=Math.floor(de.start/4),Le=Math.ceil(de.count/4),Ve=Ie%_.width,I=Math.floor(Ie/_.width),ce=Le,ee=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ve),n.pixelStorei(t.UNPACK_SKIP_ROWS,I),n.texSubImage2D(t.TEXTURE_2D,0,Ve,I,ce,ee,z,X,_.data)}w.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,J),n.pixelStorei(t.UNPACK_SKIP_PIXELS,te),n.pixelStorei(t.UNPACK_SKIP_ROWS,ue)}}function ge(w,_,z){let X=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=t.TEXTURE_3D);const K=Z(w,_),oe=_.source;n.bindTexture(X,w.__webglTexture,t.TEXTURE0+z);const le=i.get(oe);if(oe.version!==le.__version||K===!0){if(n.activeTexture(t.TEXTURE0+z),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const ee=Ze.getPrimaries(Ze.workingColorSpace),he=_.colorSpace===Rn?null:Ze.getPrimaries(_.colorSpace),_e=_.colorSpace===Rn||ee===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let te=g(_.image,!1,r.maxTextureSize);te=Qt(_,te);const ue=s.convert(_.format,_.colorSpace),Re=s.convert(_.type);let pe=M(_.internalFormat,ue,Re,_.normalized,_.colorSpace,_.isVideoTexture);Fe(X,_);let de;const Ie=_.mipmaps,Le=_.isVideoTexture!==!0,Ve=le.__version===void 0||K===!0,I=oe.dataReady,ce=T(_,te);if(_.isDepthTexture)pe=E(_.format===wi,_.type),Ve&&(Le?n.texStorage2D(t.TEXTURE_2D,1,pe,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,pe,te.width,te.height,0,ue,Re,null));else if(_.isDataTexture)if(Ie.length>0){Le&&Ve&&n.texStorage2D(t.TEXTURE_2D,ce,pe,Ie[0].width,Ie[0].height);for(let ee=0,he=Ie.length;ee<he;ee++)de=Ie[ee],Le?I&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,de.width,de.height,ue,Re,de.data):n.texImage2D(t.TEXTURE_2D,ee,pe,de.width,de.height,0,ue,Re,de.data);_.generateMipmaps=!1}else Le?(Ve&&n.texStorage2D(t.TEXTURE_2D,ce,pe,te.width,te.height),I&&V(_,te,ue,Re)):n.texImage2D(t.TEXTURE_2D,0,pe,te.width,te.height,0,ue,Re,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Le&&Ve&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,pe,Ie[0].width,Ie[0].height,te.depth);for(let ee=0,he=Ie.length;ee<he;ee++)if(de=Ie[ee],_.format!==pn)if(ue!==null)if(Le){if(I)if(_.layerUpdates.size>0){const _e=su(de.width,de.height,_.format,_.type);for(const ie of _.layerUpdates){const Ce=de.data.subarray(ie*_e/de.data.BYTES_PER_ELEMENT,(ie+1)*_e/de.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,ie,de.width,de.height,1,ue,Ce)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,de.width,de.height,te.depth,ue,de.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,pe,de.width,de.height,te.depth,0,de.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,de.width,de.height,te.depth,ue,Re,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ee,pe,de.width,de.height,te.depth,0,ue,Re,de.data)}else{Le&&Ve&&n.texStorage2D(t.TEXTURE_2D,ce,pe,Ie[0].width,Ie[0].height);for(let ee=0,he=Ie.length;ee<he;ee++)de=Ie[ee],_.format!==pn?ue!==null?Le?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,de.width,de.height,ue,de.data):n.compressedTexImage2D(t.TEXTURE_2D,ee,pe,de.width,de.height,0,de.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?I&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,de.width,de.height,ue,Re,de.data):n.texImage2D(t.TEXTURE_2D,ee,pe,de.width,de.height,0,ue,Re,de.data)}else if(_.isDataArrayTexture)if(Le){if(Ve&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,pe,te.width,te.height,te.depth),I)if(_.layerUpdates.size>0){const ee=su(te.width,te.height,_.format,_.type);for(const he of _.layerUpdates){const _e=te.data.subarray(he*ee/te.data.BYTES_PER_ELEMENT,(he+1)*ee/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,te.width,te.height,1,ue,Re,_e)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ue,Re,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,te.width,te.height,te.depth,0,ue,Re,te.data);else if(_.isData3DTexture)Le?(Ve&&n.texStorage3D(t.TEXTURE_3D,ce,pe,te.width,te.height,te.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ue,Re,te.data)):n.texImage3D(t.TEXTURE_3D,0,pe,te.width,te.height,te.depth,0,ue,Re,te.data);else if(_.isFramebufferTexture){if(Ve)if(Le)n.texStorage2D(t.TEXTURE_2D,ce,pe,te.width,te.height);else{let ee=te.width,he=te.height;for(let _e=0;_e<ce;_e++)n.texImage2D(t.TEXTURE_2D,_e,pe,ee,he,0,ue,Re,null),ee>>=1,he>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){const ee=t.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),te.parentNode!==ee){ee.appendChild(te),h.add(_),ee.onpaint=he=>{const _e=he.changedElements;for(const ie of h)_e.includes(ie.image)&&(ie.needsUpdate=!0)},ee.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,te);else{const _e=t.RGBA,ie=t.RGBA,Ce=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,_e,ie,Ce,te)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Le&&Ve){const ee=rt(Ie[0]);n.texStorage2D(t.TEXTURE_2D,ce,pe,ee.width,ee.height)}for(let ee=0,he=Ie.length;ee<he;ee++)de=Ie[ee],Le?I&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,ue,Re,de):n.texImage2D(t.TEXTURE_2D,ee,pe,ue,Re,de);_.generateMipmaps=!1}else if(Le){if(Ve){const ee=rt(te);n.texStorage2D(t.TEXTURE_2D,ce,pe,ee.width,ee.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,Re,te)}else n.texImage2D(t.TEXTURE_2D,0,pe,ue,Re,te);m(_)&&S(X),le.__version=oe.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Ee(w,_,z){if(_.image.length!==6)return;const X=Z(w,_),K=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+z);const oe=i.get(K);if(K.version!==oe.__version||X===!0){n.activeTexture(t.TEXTURE0+z);const le=Ze.getPrimaries(Ze.workingColorSpace),J=_.colorSpace===Rn?null:Ze.getPrimaries(_.colorSpace),te=_.colorSpace===Rn||le===J?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const ue=_.isCompressedTexture||_.image[0].isCompressedTexture,Re=_.image[0]&&_.image[0].isDataTexture,pe=[];for(let ie=0;ie<6;ie++)!ue&&!Re?pe[ie]=g(_.image[ie],!0,r.maxCubemapSize):pe[ie]=Re?_.image[ie].image:_.image[ie],pe[ie]=Qt(_,pe[ie]);const de=pe[0],Ie=s.convert(_.format,_.colorSpace),Le=s.convert(_.type),Ve=M(_.internalFormat,Ie,Le,_.normalized,_.colorSpace),I=_.isVideoTexture!==!0,ce=oe.__version===void 0||X===!0,ee=K.dataReady;let he=T(_,de);Fe(t.TEXTURE_CUBE_MAP,_);let _e;if(ue){I&&ce&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Ve,de.width,de.height);for(let ie=0;ie<6;ie++){_e=pe[ie].mipmaps;for(let Ce=0;Ce<_e.length;Ce++){const Te=_e[Ce];_.format!==pn?Ie!==null?I?ee&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,0,0,Te.width,Te.height,Ie,Te.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,Ve,Te.width,Te.height,0,Te.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,0,0,Te.width,Te.height,Ie,Le,Te.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,Ve,Te.width,Te.height,0,Ie,Le,Te.data)}}}else{if(_e=_.mipmaps,I&&ce){_e.length>0&&he++;const ie=rt(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Ve,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Re){I?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,pe[ie].width,pe[ie].height,Ie,Le,pe[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ve,pe[ie].width,pe[ie].height,0,Ie,Le,pe[ie].data);for(let Ce=0;Ce<_e.length;Ce++){const Et=_e[Ce].image[ie].image;I?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,0,0,Et.width,Et.height,Ie,Le,Et.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,Ve,Et.width,Et.height,0,Ie,Le,Et.data)}}else{I?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ie,Le,pe[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ve,Ie,Le,pe[ie]);for(let Ce=0;Ce<_e.length;Ce++){const Te=_e[Ce];I?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,0,0,Ie,Le,Te.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,Ve,Ie,Le,Te.image[ie])}}}m(_)&&S(t.TEXTURE_CUBE_MAP),oe.__version=K.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Se(w,_,z,X,K,oe){const le=s.convert(z.format,z.colorSpace),J=s.convert(z.type),te=M(z.internalFormat,le,J,z.normalized,z.colorSpace),ue=i.get(_),Re=i.get(z);if(Re.__renderTarget=_,!ue.__hasExternalTextures){const pe=Math.max(1,_.width>>oe),de=Math.max(1,_.height>>oe);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,oe,te,pe,de,_.depth,0,le,J,null):n.texImage2D(K,oe,te,pe,de,0,le,J,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),Ct(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,K,Re.__webglTexture,0,yt(_)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,X,K,Re.__webglTexture,oe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function tt(w,_,z){if(t.bindRenderbuffer(t.RENDERBUFFER,w),_.depthBuffer){const X=_.depthTexture,K=X&&X.isDepthTexture?X.type:null,oe=E(_.stencilBuffer,K),le=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ct(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,yt(_),oe,_.width,_.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,yt(_),oe,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,oe,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,w)}else{const X=_.textures;for(let K=0;K<X.length;K++){const oe=X[K],le=s.convert(oe.format,oe.colorSpace),J=s.convert(oe.type),te=M(oe.internalFormat,le,J,oe.normalized,oe.colorSpace);Ct(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,yt(_),te,_.width,_.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,yt(_),te,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,te,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ge(w,_,z){const X=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=i.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),K.__webglTexture===void 0){K.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),Fe(t.TEXTURE_CUBE_MAP,_.depthTexture);const ue=s.convert(_.depthTexture.format),Re=s.convert(_.depthTexture.type);let pe;_.depthTexture.format===Yn?pe=t.DEPTH_COMPONENT24:_.depthTexture.format===wi&&(pe=t.DEPTH24_STENCIL8);for(let de=0;de<6;de++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,pe,_.width,_.height,0,ue,Re,null)}}else G(_.depthTexture,0);const oe=K.__webglTexture,le=yt(_),J=X?t.TEXTURE_CUBE_MAP_POSITIVE_X+z:t.TEXTURE_2D,te=_.depthTexture.format===wi?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===Yn)Ct(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,J,oe,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,te,J,oe,0);else if(_.depthTexture.format===wi)Ct(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,J,oe,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,te,J,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(w){const _=i.get(w),z=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){const X=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=X}if(w.depthTexture&&!_.__autoAllocateDepthBuffer)if(z)for(let X=0;X<6;X++)Ge(_.__webglFramebuffer[X],w,X);else{const X=w.texture.mipmaps;X&&X.length>0?Ge(_.__webglFramebuffer[0],w,0):Ge(_.__webglFramebuffer,w,0)}else if(z){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=t.createRenderbuffer(),tt(_.__webglDepthbuffer[X],w,!1);else{const K=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer[X];t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,oe)}}else{const X=w.texture.mipmaps;if(X&&X.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),tt(_.__webglDepthbuffer,w,!1);else{const K=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,oe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ye(w,_,z){const X=i.get(w);_!==void 0&&Se(X.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&nt(w)}function $e(w){const _=w.texture,z=i.get(w),X=i.get(_);w.addEventListener("dispose",v);const K=w.textures,oe=w.isWebGLCubeRenderTarget===!0,le=K.length>1;if(le||(X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture()),X.__version=_.version,a.memory.textures++),oe){z.__webglFramebuffer=[];for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[J]=[];for(let te=0;te<_.mipmaps.length;te++)z.__webglFramebuffer[J][te]=t.createFramebuffer()}else z.__webglFramebuffer[J]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let J=0;J<_.mipmaps.length;J++)z.__webglFramebuffer[J]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(le)for(let J=0,te=K.length;J<te;J++){const ue=i.get(K[J]);ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture(),a.memory.textures++)}if(w.samples>0&&Ct(w)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let J=0;J<K.length;J++){const te=K[J];z.__webglColorRenderbuffer[J]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[J]);const ue=s.convert(te.format,te.colorSpace),Re=s.convert(te.type),pe=M(te.internalFormat,ue,Re,te.normalized,te.colorSpace,w.isXRRenderTarget===!0),de=yt(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,de,pe,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+J,t.RENDERBUFFER,z.__webglColorRenderbuffer[J])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),tt(z.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),Fe(t.TEXTURE_CUBE_MAP,_);for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0)for(let te=0;te<_.mipmaps.length;te++)Se(z.__webglFramebuffer[J][te],w,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,te);else Se(z.__webglFramebuffer[J],w,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);m(_)&&S(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){for(let J=0,te=K.length;J<te;J++){const ue=K[J],Re=i.get(ue);let pe=t.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(pe=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,Re.__webglTexture),Fe(pe,ue),Se(z.__webglFramebuffer,w,ue,t.COLOR_ATTACHMENT0+J,pe,0),m(ue)&&S(pe)}n.unbindTexture()}else{let J=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(J=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(J,X.__webglTexture),Fe(J,_),_.mipmaps&&_.mipmaps.length>0)for(let te=0;te<_.mipmaps.length;te++)Se(z.__webglFramebuffer[te],w,_,t.COLOR_ATTACHMENT0,J,te);else Se(z.__webglFramebuffer,w,_,t.COLOR_ATTACHMENT0,J,0);m(_)&&S(J),n.unbindTexture()}w.depthBuffer&&nt(w)}function Mt(w){const _=w.textures;for(let z=0,X=_.length;z<X;z++){const K=_[z];if(m(K)){const oe=A(w),le=i.get(K).__webglTexture;n.bindTexture(oe,le),S(oe),n.unbindTexture()}}}const St=[],wt=[];function Nt(w){if(w.samples>0){if(Ct(w)===!1){const _=w.textures,z=w.width,X=w.height;let K=t.COLOR_BUFFER_BIT;const oe=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(w),J=_.length>1;if(J)for(let ue=0;ue<_.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const te=w.texture.mipmaps;te&&te.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ue=0;ue<_.length;ue++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),J){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[ue]);const Re=i.get(_[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Re,0)}t.blitFramebuffer(0,0,z,X,0,0,z,X,K,t.NEAREST),c===!0&&(St.length=0,wt.length=0,St.push(t.COLOR_ATTACHMENT0+ue),w.depthBuffer&&w.resolveDepthBuffer===!1&&(St.push(oe),wt.push(oe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,wt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,St))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),J)for(let ue=0;ue<_.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,le.__webglColorRenderbuffer[ue]);const Re=i.get(_[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,Re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const _=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function yt(w){return Math.min(r.maxSamples,w.samples)}function Ct(w){const _=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function F(w){const _=a.render.frame;u.get(w)!==_&&(u.set(w,_),w.update())}function Qt(w,_){const z=w.colorSpace,X=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==Qs&&z!==Rn&&(Ze.getTransfer(z)===st?(X!==pn||K!==ln)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",z)),_}function rt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=L,this.getTextureUnits=H,this.setTextureUnits=N,this.setTexture2D=G,this.setTexture2DArray=Q,this.setTexture3D=ne,this.setTextureCube=j,this.rebindTextures=Ye,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ct,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function uv(t,e){function n(i,r=Rn){let s;const a=Ze.getTransfer(r);if(i===ln)return t.UNSIGNED_BYTE;if(i===Uc)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Oc)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Ed)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===bd)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Sd)return t.BYTE;if(i===yd)return t.SHORT;if(i===Jr)return t.UNSIGNED_SHORT;if(i===Nc)return t.INT;if(i===Nn)return t.UNSIGNED_INT;if(i===_n)return t.FLOAT;if(i===qn)return t.HALF_FLOAT;if(i===Td)return t.ALPHA;if(i===Ad)return t.RGB;if(i===pn)return t.RGBA;if(i===Yn)return t.DEPTH_COMPONENT;if(i===wi)return t.DEPTH_STENCIL;if(i===Bc)return t.RED;if(i===Vc)return t.RED_INTEGER;if(i===Fi)return t.RG;if(i===zc)return t.RG_INTEGER;if(i===Gc)return t.RGBA_INTEGER;if(i===Ws||i===Xs||i===$s||i===qs)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ws)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ws)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$s)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Go||i===Ho||i===ko||i===Wo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Go)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ho)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ko)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xo||i===$o||i===qo||i===Yo||i===Zo||i===Ks||i===Ko)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Xo||i===$o)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===qo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Yo)return s.COMPRESSED_R11_EAC;if(i===Zo)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ks)return s.COMPRESSED_RG11_EAC;if(i===Ko)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Jo||i===Qo||i===jo||i===ec||i===tc||i===nc||i===ic||i===rc||i===sc||i===ac||i===oc||i===cc||i===lc||i===uc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Jo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ec)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===tc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ic)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===rc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ac)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===oc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===cc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===lc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===uc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dc||i===hc||i===fc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===dc)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pc||i===mc||i===Js||i===gc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===pc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===mc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Js)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qr?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const dv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Ud(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new _t({vertexShader:dv,fragmentShader:hv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Jt(new os(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pv extends Vi{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,p=null;const x=typeof XRWebGLBinding<"u",g=new fv,m={},S=n.getContextAttributes();let A=null,M=null;const E=[],T=[],C=new Je;let v=null;const b=new fn;b.viewport=new ft;const R=new fn;R.viewport=new ft;const P=[b,R],D=new Ep;let L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let se=E[Z];return se===void 0&&(se=new Da,E[Z]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Z){let se=E[Z];return se===void 0&&(se=new Da,E[Z]=se),se.getGripSpace()},this.getHand=function(Z){let se=E[Z];return se===void 0&&(se=new Da,E[Z]=se),se.getHandSpace()};function N(Z){const se=T.indexOf(Z.inputSource);if(se===-1)return;const V=E[se];V!==void 0&&(V.update(Z.inputSource,Z.frame,l||a),V.dispatchEvent({type:Z.type,data:Z.inputSource}))}function q(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",B);for(let Z=0;Z<E.length;Z++){const se=T[Z];se!==null&&(T[Z]=null,E[Z].disconnect(se))}L=null,H=null,g.reset();for(const Z in m)delete m[Z];e.setRenderTarget(A),f=null,d=null,h=null,r=null,M=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",q),r.addEventListener("inputsourceschange",B),S.xrCompatible!==!0&&await n.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let V=null,ge=null,Ee=null;S.depth&&(Ee=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,V=S.stencil?wi:Yn,ge=S.stencil?Qr:Nn);const Se={colorFormat:n.RGBA8,depthFormat:Ee,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Se),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Fn(d.textureWidth,d.textureHeight,{format:pn,type:ln,depthTexture:new vr(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const V={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,n,V),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Fn(f.framebufferWidth,f.framebufferHeight,{format:pn,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function B(Z){for(let se=0;se<Z.removed.length;se++){const V=Z.removed[se],ge=T.indexOf(V);ge>=0&&(T[ge]=null,E[ge].disconnect(V))}for(let se=0;se<Z.added.length;se++){const V=Z.added[se];let ge=T.indexOf(V);if(ge===-1){for(let Se=0;Se<E.length;Se++)if(Se>=T.length){T.push(V),ge=Se;break}else if(T[Se]===null){T[Se]=V,ge=Se;break}if(ge===-1)break}const Ee=E[ge];Ee&&Ee.connect(V)}}const G=new O,Q=new O;function ne(Z,se,V){G.setFromMatrixPosition(se.matrixWorld),Q.setFromMatrixPosition(V.matrixWorld);const ge=G.distanceTo(Q),Ee=se.projectionMatrix.elements,Se=V.projectionMatrix.elements,tt=Ee[14]/(Ee[10]-1),Ge=Ee[14]/(Ee[10]+1),nt=(Ee[9]+1)/Ee[5],Ye=(Ee[9]-1)/Ee[5],$e=(Ee[8]-1)/Ee[0],Mt=(Se[8]+1)/Se[0],St=tt*$e,wt=tt*Mt,Nt=ge/(-$e+Mt),yt=Nt*-$e;if(se.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(yt),Z.translateZ(Nt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ee[10]===-1)Z.projectionMatrix.copy(se.projectionMatrix),Z.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Ct=tt+Nt,F=Ge+Nt,Qt=St-yt,rt=wt+(ge-yt),w=nt*Ge/F*Ct,_=Ye*Ge/F*Ct;Z.projectionMatrix.makePerspective(Qt,rt,w,_,Ct,F),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function j(Z,se){se===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(se.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let se=Z.near,V=Z.far;g.texture!==null&&(g.depthNear>0&&(se=g.depthNear),g.depthFar>0&&(V=g.depthFar)),D.near=R.near=b.near=se,D.far=R.far=b.far=V,(L!==D.near||H!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),L=D.near,H=D.far),D.layers.mask=Z.layers.mask|6,b.layers.mask=D.layers.mask&-5,R.layers.mask=D.layers.mask&-3;const ge=Z.parent,Ee=D.cameras;j(D,ge);for(let Se=0;Se<Ee.length;Se++)j(Ee[Se],ge);Ee.length===2?ne(D,b,R):D.projectionMatrix.copy(b.projectionMatrix),re(Z,D,ge)};function re(Z,se,V){V===null?Z.matrix.copy(se.matrixWorld):(Z.matrix.copy(V.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(se.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(se.projectionMatrix),Z.projectionMatrixInverse.copy(se.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=vc*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(Z){return m[Z]};let Oe=null;function We(Z,se){if(u=se.getViewerPose(l||a),p=se,u!==null){const V=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let ge=!1;V.length!==D.cameras.length&&(D.cameras.length=0,ge=!0);for(let Ge=0;Ge<V.length;Ge++){const nt=V[Ge];let Ye=null;if(f!==null)Ye=f.getViewport(nt);else{const Mt=h.getViewSubImage(d,nt);Ye=Mt.viewport,Ge===0&&(e.setRenderTargetTextures(M,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(M))}let $e=P[Ge];$e===void 0&&($e=new fn,$e.layers.enable(Ge),$e.viewport=new ft,P[Ge]=$e),$e.matrix.fromArray(nt.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(nt.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Ge===0&&(D.matrix.copy($e.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),ge===!0&&D.cameras.push($e)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=i.getBinding();const Ge=h.getDepthInformation(V[0]);Ge&&Ge.isValid&&Ge.texture&&g.init(Ge,r.renderState)}if(Ee&&Ee.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let Ge=0;Ge<V.length;Ge++){const nt=V[Ge].camera;if(nt){let Ye=m[nt];Ye||(Ye=new Ud,m[nt]=Ye);const $e=h.getCameraImage(nt);Ye.sourceTexture=$e}}}}for(let V=0;V<E.length;V++){const ge=T[V],Ee=E[V];ge!==null&&Ee!==void 0&&Ee.update(ge,se,l||a)}Oe&&Oe(Z,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),p=null}const Fe=new Gd;Fe.setAnimationLoop(We),this.setAnimationLoop=function(Z){Oe=Z},this.dispose=function(){}}}const mv=new at,Yd=new Be;Yd.set(-1,0,0,0,1,0,0,0,1);function gv(t,e){function n(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Od(t)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,S,A,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),h(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,M)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),x(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,S,A):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,n(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,n(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Zt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,n(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Zt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,n(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,n(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const S=e.get(m),A=S.envMap,M=S.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(mv.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Yd),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,n(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,S,A){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=A*.5,m.map&&(g.map.value=m.map,n(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,n(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,S){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Zt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){const S=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function xv(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,E){const T=E.program;i.uniformBlockBinding(M,T)}function l(M,E){let T=r[M.id];T===void 0&&(g(M),T=u(M),r[M.id]=T,M.addEventListener("dispose",S));const C=E.program;i.updateUBOMapping(M,C);const v=e.render.frame;s[M.id]!==v&&(d(M),s[M.id]=v)}function u(M){const E=h();M.__bindingPointIndex=E;const T=t.createBuffer(),C=M.__size,v=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,C,v),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,T),T}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const E=r[M.id],T=M.uniforms,C=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let v=0,b=T.length;v<b;v++){const R=T[v];if(Array.isArray(R))for(let P=0,D=R.length;P<D;P++)f(R[P],v,P,C);else f(R,v,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(M,E,T,C){if(x(M,E,T,C)===!0){const v=M.__offset,b=M.value;if(Array.isArray(b)){let R=0;for(let P=0;P<b.length;P++){const D=b[P],L=m(D);p(D,M.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(b,M.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,v,M.__data)}}function p(M,E,T){typeof M=="number"||typeof M=="boolean"?E[0]=M:M.isMatrix3?(E[0]=M.elements[0],E[1]=M.elements[1],E[2]=M.elements[2],E[3]=0,E[4]=M.elements[3],E[5]=M.elements[4],E[6]=M.elements[5],E[7]=0,E[8]=M.elements[6],E[9]=M.elements[7],E[10]=M.elements[8],E[11]=0):ArrayBuffer.isView(M)?E.set(new M.constructor(M.buffer,M.byteOffset,E.length)):M.toArray(E,T)}function x(M,E,T,C){const v=M.value,b=E+"_"+T;if(C[b]===void 0)return typeof v=="number"||typeof v=="boolean"?C[b]=v:ArrayBuffer.isView(v)?C[b]=v.slice():C[b]=v.clone(),!0;{const R=C[b];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return C[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function g(M){const E=M.uniforms;let T=0;const C=16;for(let b=0,R=E.length;b<R;b++){const P=Array.isArray(E[b])?E[b]:[E[b]];for(let D=0,L=P.length;D<L;D++){const H=P[D],N=Array.isArray(H.value)?H.value:[H.value];for(let q=0,B=N.length;q<B;q++){const G=N[q],Q=m(G),ne=T%C,j=ne%Q.boundary,re=ne+j;T+=j,re!==0&&C-re<Q.storage&&(T+=C-re),H.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=T,T+=Q.storage}}}const v=T%C;return v>0&&(T+=C-v),M.__size=T,M.__cache={},this}function m(M){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(E.boundary=16,E.storage=M.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",M),E}function S(M){const E=M.target;E.removeEventListener("dispose",S);const T=a.indexOf(E.__bindingPointIndex);a.splice(T,1),t.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function A(){for(const M in r)t.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:c,update:l,dispose:A}}const vv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Tn=null;function _v(){return Tn===null&&(Tn=new Xc(vv,16,16,Fi,qn),Tn.name="DFG_LUT",Tn.minFilter=Bt,Tn.magFilter=Bt,Tn.wrapS=Wn,Tn.wrapT=Wn,Tn.generateMipmaps=!1,Tn.needsUpdate=!0),Tn}class Mv{constructor(e={}){const{canvas:n=Nf(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=ln}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const x=f,g=new Set([Gc,zc,Vc]),m=new Set([ln,Nn,Jr,Qr,Uc,Oc]),S=new Uint32Array(4),A=new Int32Array(4),M=new O;let E=null,T=null;const C=[],v=[];let b=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let P=!1,D=null,L=null,H=null,N=null;this._outputColorSpace=Ut;let q=0,B=0,G=null,Q=-1,ne=null;const j=new ft,re=new ft;let Oe=null;const We=new He(0);let Fe=0,Z=n.width,se=n.height,V=1,ge=null,Ee=null;const Se=new ft(0,0,Z,se),tt=new ft(0,0,Z,se);let Ge=!1;const nt=new $c;let Ye=!1,$e=!1;const Mt=new at,St=new O,wt=new ft,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function Ct(){return G===null?V:1}let F=i;function Qt(y,U){return n.getContext(y,U)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Fc}`),n.addEventListener("webglcontextlost",Et,!1),n.addEventListener("webglcontextrestored",pt,!1),n.addEventListener("webglcontextcreationerror",Sn,!1),F===null){const U="webgl2";if(F=Qt(U,y),F===null)throw Qt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(y){throw je("WebGLRenderer: "+y.message),y}let rt,w,_,z,X,K,oe,le,J,te,ue,Re,pe,de,Ie,Le,Ve,I,ce,ee,he,_e,ie;function Ce(){rt=new _g(F),rt.init(),he=new uv(F,rt),w=new dg(F,rt,e,he),_=new cv(F,rt),w.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),L=F.createFramebuffer(),H=F.createFramebuffer(),N=F.createFramebuffer(),z=new yg(F),X=new Yx,K=new lv(F,rt,_,X,w,he,z),oe=new vg(R),le=new Ap(F),_e=new lg(F,le),J=new Mg(F,le,z,_e),te=new bg(F,J,le,_e,z),I=new Eg(F,w,K),Ie=new hg(X),ue=new qx(R,oe,rt,w,_e,Ie),Re=new gv(R,X),pe=new Kx,de=new nv(rt),Ve=new cg(R,oe,_,te,p,c),Le=new ov(R,te,w),ie=new xv(F,z,w,_),ce=new ug(F,rt,z),ee=new Sg(F,rt,z),z.programs=ue.programs,R.capabilities=w,R.extensions=rt,R.properties=X,R.renderLists=pe,R.shadowMap=Le,R.state=_,R.info=z}Ce(),x!==ln&&(b=new Ag(x,n.width,n.height,o,r,s));const Te=new pv(R,F);this.xr=Te,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const y=rt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=rt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize(Z,se,!1))},this.getSize=function(y){return y.set(Z,se)},this.setSize=function(y,U,$=!0){if(Te.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=y,se=U,n.width=Math.floor(y*V),n.height=Math.floor(U*V),$===!0&&(n.style.width=y+"px",n.style.height=U+"px"),b!==null&&b.setSize(n.width,n.height),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(Z*V,se*V).floor()},this.setDrawingBufferSize=function(y,U,$){Z=y,se=U,V=$,n.width=Math.floor(y*$),n.height=Math.floor(U*$),this.setViewport(0,0,y,U)},this.setEffects=function(y){if(x===ln){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let U=0;U<y.length;U++)if(y[U].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(j)},this.getViewport=function(y){return y.copy(Se)},this.setViewport=function(y,U,$,k){y.isVector4?Se.set(y.x,y.y,y.z,y.w):Se.set(y,U,$,k),_.viewport(j.copy(Se).multiplyScalar(V).round())},this.getScissor=function(y){return y.copy(tt)},this.setScissor=function(y,U,$,k){y.isVector4?tt.set(y.x,y.y,y.z,y.w):tt.set(y,U,$,k),_.scissor(re.copy(tt).multiplyScalar(V).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(y){_.setScissorTest(Ge=y)},this.setOpaqueSort=function(y){ge=y},this.setTransparentSort=function(y){Ee=y},this.getClearColor=function(y){return y.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,$=!0){let k=0;if(y){let W=!1;if(G!==null){const xe=G.texture.format;W=g.has(xe)}if(W){const xe=G.texture.type,be=m.has(xe),me=Ve.getClearColor(),Ae=Ve.getClearAlpha(),Pe=me.r,ze=me.g,Xe=me.b;be?(S[0]=Pe,S[1]=ze,S[2]=Xe,S[3]=Ae,F.clearBufferuiv(F.COLOR,0,S)):(A[0]=Pe,A[1]=ze,A[2]=Xe,A[3]=Ae,F.clearBufferiv(F.COLOR,0,A))}else k|=F.COLOR_BUFFER_BIT}U&&(k|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(k|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&F.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),D=y},this.dispose=function(){n.removeEventListener("webglcontextlost",Et,!1),n.removeEventListener("webglcontextrestored",pt,!1),n.removeEventListener("webglcontextcreationerror",Sn,!1),Ve.dispose(),pe.dispose(),de.dispose(),X.dispose(),oe.dispose(),te.dispose(),_e.dispose(),ie.dispose(),ue.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",xl),Te.removeEventListener("sessionend",vl),gi.stop()};function Et(y){y.preventDefault(),Il("WebGLRenderer: Context Lost."),P=!0}function pt(){Il("WebGLRenderer: Context Restored."),P=!1;const y=z.autoReset,U=Le.enabled,$=Le.autoUpdate,k=Le.needsUpdate,W=Le.type;Ce(),z.autoReset=y,Le.enabled=U,Le.autoUpdate=$,Le.needsUpdate=k,Le.type=W}function Sn(y){je("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function yn(y){const U=y.target;U.removeEventListener("dispose",yn),Yh(U)}function Yh(y){Zh(y),X.remove(y)}function Zh(y){const U=X.get(y).programs;U!==void 0&&(U.forEach(function($){ue.releaseProgram($)}),y.isShaderMaterial&&ue.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,$,k,W,xe){U===null&&(U=Nt);const be=W.isMesh&&W.matrixWorld.determinantAffine()<0,me=Qh(y,U,$,k,W);_.setMaterial(k,be);let Ae=$.index,Pe=1;if(k.wireframe===!0){if(Ae=J.getWireframeAttribute($),Ae===void 0)return;Pe=2}const ze=$.drawRange,Xe=$.attributes.position;let De=ze.start*Pe,ot=(ze.start+ze.count)*Pe;xe!==null&&(De=Math.max(De,xe.start*Pe),ot=Math.min(ot,(xe.start+xe.count)*Pe)),Ae!==null?(De=Math.max(De,0),ot=Math.min(ot,Ae.count)):Xe!=null&&(De=Math.max(De,0),ot=Math.min(ot,Xe.count));const Tt=ot-De;if(Tt<0||Tt===1/0)return;_e.setup(W,k,me,$,Ae);let bt,ut=ce;if(Ae!==null&&(bt=le.get(Ae),ut=ee,ut.setIndex(bt)),W.isMesh)k.wireframe===!0?(_.setLineWidth(k.wireframeLinewidth*Ct()),ut.setMode(F.LINES)):ut.setMode(F.TRIANGLES);else if(W.isLine){let zt=k.linewidth;zt===void 0&&(zt=1),_.setLineWidth(zt*Ct()),W.isLineSegments?ut.setMode(F.LINES):W.isLineLoop?ut.setMode(F.LINE_LOOP):ut.setMode(F.LINE_STRIP)}else W.isPoints?ut.setMode(F.POINTS):W.isSprite&&ut.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))ut.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const zt=W._multiDrawStarts,ye=W._multiDrawCounts,sn=W._multiDrawCount,Qe=Ae?le.get(Ae).bytesPerElement:1,dn=X.get(k).currentProgram.getUniforms();for(let En=0;En<sn;En++)dn.setValue(F,"_gl_DrawID",En),ut.render(zt[En]/Qe,ye[En])}else if(W.isInstancedMesh)ut.renderInstances(De,Tt,W.count);else if($.isInstancedBufferGeometry){const zt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ye=Math.min($.instanceCount,zt);ut.renderInstances(De,Tt,ye)}else ut.render(De,Tt)};function gl(y,U,$){y.transparent===!0&&y.side===cn&&y.forceSinglePass===!1?(y.side=Zt,y.needsUpdate=!0,hs(y,U,$),y.side=$n,y.needsUpdate=!0,hs(y,U,$),y.side=cn):hs(y,U,$)}this.compile=function(y,U,$=null){$===null&&($=y),T=de.get($),T.init(U),v.push(T),$.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),y!==$&&y.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights();const k=new Set;return y.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const xe=W.material;if(xe)if(Array.isArray(xe))for(let be=0;be<xe.length;be++){const me=xe[be];gl(me,$,W),k.add(me)}else gl(xe,$,W),k.add(xe)}),T=v.pop(),k},this.compileAsync=function(y,U,$=null){const k=this.compile(y,U,$);return new Promise(W=>{function xe(){if(k.forEach(function(be){X.get(be).currentProgram.isReady()&&k.delete(be)}),k.size===0){W(y);return}setTimeout(xe,10)}rt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let _a=null;function Kh(y){_a&&_a(y)}function xl(){gi.stop()}function vl(){gi.start()}const gi=new Gd;gi.setAnimationLoop(Kh),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(y){_a=y,Te.setAnimationLoop(y),y===null?gi.stop():gi.start()},Te.addEventListener("sessionstart",xl),Te.addEventListener("sessionend",vl),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D!==null&&D.renderStart(y,U);const $=Te.enabled===!0&&Te.isPresenting===!0,k=b!==null&&(G===null||$)&&b.begin(R,G);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(U),U=Te.getCamera()),y.isScene===!0&&y.onBeforeRender(R,y,U,G),T=de.get(y,v.length),T.init(U),T.state.textureUnits=K.getTextureUnits(),v.push(T),Mt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),nt.setFromProjectionMatrix(Mt,Pn,U.reversedDepth),$e=this.localClippingEnabled,Ye=Ie.init(this.clippingPlanes,$e),E=pe.get(y,C.length),E.init(),C.push(E),Te.enabled===!0&&Te.isPresenting===!0){const be=R.xr.getDepthSensingMesh();be!==null&&Ma(be,U,-1/0,R.sortObjects)}Ma(y,U,0,R.sortObjects),E.finish(),R.sortObjects===!0&&E.sort(ge,Ee,U.reversedDepth),yt=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,yt&&Ve.addToRenderList(E,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ye===!0&&Ie.beginShadows();const W=T.state.shadowsArray;if(Le.render(W,y,U),Ye===!0&&Ie.endShadows(),(k&&b.hasRenderPass())===!1){const be=E.opaque,me=E.transmissive;if(T.setupLights(),U.isArrayCamera){const Ae=U.cameras;if(me.length>0)for(let Pe=0,ze=Ae.length;Pe<ze;Pe++){const Xe=Ae[Pe];Ml(be,me,y,Xe)}yt&&Ve.render(y);for(let Pe=0,ze=Ae.length;Pe<ze;Pe++){const Xe=Ae[Pe];_l(E,y,Xe,Xe.viewport)}}else me.length>0&&Ml(be,me,y,U),yt&&Ve.render(y),_l(E,y,U)}G!==null&&B===0&&(K.updateMultisampleRenderTarget(G),K.updateRenderTargetMipmap(G)),k&&b.end(R),y.isScene===!0&&y.onAfterRender(R,y,U),_e.resetDefaultState(),Q=-1,ne=null,v.pop(),v.length>0?(T=v[v.length-1],K.setTextureUnits(T.state.textureUnits),Ye===!0&&Ie.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?E=C[C.length-1]:E=null,D!==null&&D.renderEnd()};function Ma(y,U,$,k){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)$=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLightProbeGrid)T.pushLightProbeGrid(y);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||nt.intersectsSprite(y)){k&&wt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Mt);const be=te.update(y),me=y.material;me.visible&&E.push(y,be,me,$,wt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||nt.intersectsObject(y))){const be=te.update(y),me=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),wt.copy(y.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),wt.copy(be.boundingSphere.center)),wt.applyMatrix4(y.matrixWorld).applyMatrix4(Mt)),Array.isArray(me)){const Ae=be.groups;for(let Pe=0,ze=Ae.length;Pe<ze;Pe++){const Xe=Ae[Pe],De=me[Xe.materialIndex];De&&De.visible&&E.push(y,be,De,$,wt.z,Xe)}}else me.visible&&E.push(y,be,me,$,wt.z,null)}}const xe=y.children;for(let be=0,me=xe.length;be<me;be++)Ma(xe[be],U,$,k)}function _l(y,U,$,k){const{opaque:W,transmissive:xe,transparent:be}=y;T.setupLightsView($),Ye===!0&&Ie.setGlobalState(R.clippingPlanes,$),k&&_.viewport(j.copy(k)),W.length>0&&ds(W,U,$),xe.length>0&&ds(xe,U,$),be.length>0&&ds(be,U,$),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Ml(y,U,$,k){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){const De=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new Fn(1,1,{generateMipmaps:!0,type:De?qn:ln,minFilter:li,samples:Math.max(4,w.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const xe=T.state.transmissionRenderTarget[k.id],be=k.viewport||j;xe.setSize(be.z*R.transmissionResolutionScale,be.w*R.transmissionResolutionScale);const me=R.getRenderTarget(),Ae=R.getActiveCubeFace(),Pe=R.getActiveMipmapLevel();R.setRenderTarget(xe),R.getClearColor(We),Fe=R.getClearAlpha(),Fe<1&&R.setClearColor(16777215,.5),R.clear(),yt&&Ve.render($);const ze=R.toneMapping;R.toneMapping=Ln;const Xe=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),Ye===!0&&Ie.setGlobalState(R.clippingPlanes,k),ds(y,$,k),K.updateMultisampleRenderTarget(xe),K.updateRenderTargetMipmap(xe),rt.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let ot=0,Tt=U.length;ot<Tt;ot++){const bt=U[ot],{object:ut,geometry:zt,material:ye,group:sn}=bt;if(ye.side===cn&&ut.layers.test(k.layers)){const Qe=ye.side;ye.side=Zt,ye.needsUpdate=!0,Sl(ut,$,k,zt,ye,sn),ye.side=Qe,ye.needsUpdate=!0,De=!0}}De===!0&&(K.updateMultisampleRenderTarget(xe),K.updateRenderTargetMipmap(xe))}R.setRenderTarget(me,Ae,Pe),R.setClearColor(We,Fe),Xe!==void 0&&(k.viewport=Xe),R.toneMapping=ze}function ds(y,U,$){const k=U.isScene===!0?U.overrideMaterial:null;for(let W=0,xe=y.length;W<xe;W++){const be=y[W],{object:me,geometry:Ae,group:Pe}=be;let ze=be.material;ze.allowOverride===!0&&k!==null&&(ze=k),me.layers.test($.layers)&&Sl(me,U,$,Ae,ze,Pe)}}function Sl(y,U,$,k,W,xe){y.onBeforeRender(R,U,$,k,W,xe),y.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),W.onBeforeRender(R,U,$,k,y,xe),W.transparent===!0&&W.side===cn&&W.forceSinglePass===!1?(W.side=Zt,W.needsUpdate=!0,R.renderBufferDirect($,U,k,W,y,xe),W.side=$n,W.needsUpdate=!0,R.renderBufferDirect($,U,k,W,y,xe),W.side=cn):R.renderBufferDirect($,U,k,W,y,xe),y.onAfterRender(R,U,$,k,W,xe)}function hs(y,U,$){U.isScene!==!0&&(U=Nt);const k=X.get(y),W=T.state.lights,xe=T.state.shadowsArray,be=W.state.version,me=ue.getParameters(y,W.state,xe,U,$,T.state.lightProbeGridArray),Ae=ue.getProgramCacheKey(me);let Pe=k.programs;k.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;const ze=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;k.envMap=oe.get(y.envMap||k.environment,ze),k.envMapRotation=k.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Pe===void 0&&(y.addEventListener("dispose",yn),Pe=new Map,k.programs=Pe);let Xe=Pe.get(Ae);if(Xe!==void 0){if(k.currentProgram===Xe&&k.lightsStateVersion===be)return El(y,me),Xe}else me.uniforms=ue.getUniforms(y),D!==null&&y.isNodeMaterial&&D.build(y,$,me),y.onBeforeCompile(me,R),Xe=ue.acquireProgram(me,Ae),Pe.set(Ae,Xe),k.uniforms=me.uniforms;const De=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(De.clippingPlanes=Ie.uniform),El(y,me),k.needsLights=ef(y),k.lightsStateVersion=be,k.needsLights&&(De.ambientLightColor.value=W.state.ambient,De.lightProbe.value=W.state.probe,De.directionalLights.value=W.state.directional,De.directionalLightShadows.value=W.state.directionalShadow,De.spotLights.value=W.state.spot,De.spotLightShadows.value=W.state.spotShadow,De.rectAreaLights.value=W.state.rectArea,De.ltc_1.value=W.state.rectAreaLTC1,De.ltc_2.value=W.state.rectAreaLTC2,De.pointLights.value=W.state.point,De.pointLightShadows.value=W.state.pointShadow,De.hemisphereLights.value=W.state.hemi,De.directionalShadowMatrix.value=W.state.directionalShadowMatrix,De.spotLightMatrix.value=W.state.spotLightMatrix,De.spotLightMap.value=W.state.spotLightMap,De.pointShadowMatrix.value=W.state.pointShadowMatrix),k.lightProbeGrid=T.state.lightProbeGridArray.length>0,k.currentProgram=Xe,k.uniformsList=null,Xe}function yl(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=Ys.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function El(y,U){const $=X.get(y);$.outputColorSpace=U.outputColorSpace,$.batching=U.batching,$.batchingColor=U.batchingColor,$.instancing=U.instancing,$.instancingColor=U.instancingColor,$.instancingMorph=U.instancingMorph,$.skinning=U.skinning,$.morphTargets=U.morphTargets,$.morphNormals=U.morphNormals,$.morphColors=U.morphColors,$.morphTargetsCount=U.morphTargetsCount,$.numClippingPlanes=U.numClippingPlanes,$.numIntersection=U.numClipIntersection,$.vertexAlphas=U.vertexAlphas,$.vertexTangents=U.vertexTangents,$.toneMapping=U.toneMapping}function Jh(y,U){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;M.setFromMatrixPosition(U.matrixWorld);for(let $=0,k=y.length;$<k;$++){const W=y[$];if(W.texture!==null&&W.boundingBox.containsPoint(M))return W}return null}function Qh(y,U,$,k,W){U.isScene!==!0&&(U=Nt),K.resetTextureUnits();const xe=U.fog,be=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,me=G===null?R.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Ze.workingColorSpace,Ae=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Pe=oe.get(k.envMap||be,Ae),ze=k.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Xe=!!$.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),De=!!$.morphAttributes.position,ot=!!$.morphAttributes.normal,Tt=!!$.morphAttributes.color;let bt=Ln;k.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(bt=R.toneMapping);const ut=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,zt=ut!==void 0?ut.length:0,ye=X.get(k),sn=T.state.lights;if(Ye===!0&&($e===!0||y!==ne)){const mt=y===ne&&k.id===Q;Ie.setState(k,y,mt)}let Qe=!1;k.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==sn.state.version||ye.outputColorSpace!==me||W.isBatchedMesh&&ye.batching===!1||!W.isBatchedMesh&&ye.batching===!0||W.isBatchedMesh&&ye.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&ye.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&ye.instancing===!1||!W.isInstancedMesh&&ye.instancing===!0||W.isSkinnedMesh&&ye.skinning===!1||!W.isSkinnedMesh&&ye.skinning===!0||W.isInstancedMesh&&ye.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&ye.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&ye.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&ye.instancingMorph===!1&&W.morphTexture!==null||ye.envMap!==Pe||k.fog===!0&&ye.fog!==xe||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Ie.numPlanes||ye.numIntersection!==Ie.numIntersection)||ye.vertexAlphas!==ze||ye.vertexTangents!==Xe||ye.morphTargets!==De||ye.morphNormals!==ot||ye.morphColors!==Tt||ye.toneMapping!==bt||ye.morphTargetsCount!==zt||!!ye.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,ye.__version=k.version);let dn=ye.currentProgram;Qe===!0&&(dn=hs(k,U,W),D&&k.isNodeMaterial&&D.onUpdateProgram(k,dn,ye));let En=!1,Kn=!1,ki=!1;const dt=dn.getUniforms(),At=ye.uniforms;if(_.useProgram(dn.program)&&(En=!0,Kn=!0,ki=!0),k.id!==Q&&(Q=k.id,Kn=!0),ye.needsLights){const mt=Jh(T.state.lightProbeGridArray,W);ye.lightProbeGrid!==mt&&(ye.lightProbeGrid=mt,Kn=!0)}if(En||ne!==y){_.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),dt.setValue(F,"projectionMatrix",y.projectionMatrix),dt.setValue(F,"viewMatrix",y.matrixWorldInverse);const Qn=dt.map.cameraPosition;Qn!==void 0&&Qn.setValue(F,St.setFromMatrixPosition(y.matrixWorld)),w.logarithmicDepthBuffer&&dt.setValue(F,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&dt.setValue(F,"isOrthographic",y.isOrthographicCamera===!0),ne!==y&&(ne=y,Kn=!0,ki=!0)}if(ye.needsLights&&(sn.state.directionalShadowMap.length>0&&dt.setValue(F,"directionalShadowMap",sn.state.directionalShadowMap,K),sn.state.spotShadowMap.length>0&&dt.setValue(F,"spotShadowMap",sn.state.spotShadowMap,K),sn.state.pointShadowMap.length>0&&dt.setValue(F,"pointShadowMap",sn.state.pointShadowMap,K)),W.isSkinnedMesh){dt.setOptional(F,W,"bindMatrix"),dt.setOptional(F,W,"bindMatrixInverse");const mt=W.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),dt.setValue(F,"boneTexture",mt.boneTexture,K))}W.isBatchedMesh&&(dt.setOptional(F,W,"batchingTexture"),dt.setValue(F,"batchingTexture",W._matricesTexture,K),dt.setOptional(F,W,"batchingIdTexture"),dt.setValue(F,"batchingIdTexture",W._indirectTexture,K),dt.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&dt.setValue(F,"batchingColorTexture",W._colorsTexture,K));const Jn=$.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&I.update(W,$,dn),(Kn||ye.receiveShadow!==W.receiveShadow)&&(ye.receiveShadow=W.receiveShadow,dt.setValue(F,"receiveShadow",W.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(At.envMapIntensity.value=U.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=_v()),Kn){if(dt.setValue(F,"toneMappingExposure",R.toneMappingExposure),ye.needsLights&&jh(At,ki),xe&&k.fog===!0&&Re.refreshFogUniforms(At,xe),Re.refreshMaterialUniforms(At,k,V,se,T.state.transmissionRenderTarget[y.id]),ye.needsLights&&ye.lightProbeGrid){const mt=ye.lightProbeGrid;At.probesSH.value=mt.texture,At.probesMin.value.copy(mt.boundingBox.min),At.probesMax.value.copy(mt.boundingBox.max),At.probesResolution.value.copy(mt.resolution)}Ys.upload(F,yl(ye),At,K)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ys.upload(F,yl(ye),At,K),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&dt.setValue(F,"center",W.center),dt.setValue(F,"modelViewMatrix",W.modelViewMatrix),dt.setValue(F,"normalMatrix",W.normalMatrix),dt.setValue(F,"modelMatrix",W.matrixWorld),k.uniformsGroups!==void 0){const mt=k.uniformsGroups;for(let Qn=0,Wi=mt.length;Qn<Wi;Qn++){const bl=mt[Qn];ie.update(bl,dn),ie.bind(bl,dn)}}return dn}function jh(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function ef(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(y,U,$){const k=X.get(y);k.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),X.get(y.texture).__webglTexture=U,X.get(y.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:$,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){const $=X.get(y);$.__webglFramebuffer=U,$.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,$=0){G=y,q=U,B=$;let k=null,W=!1,xe=!1;if(y){const me=X.get(y);if(me.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(F.FRAMEBUFFER,me.__webglFramebuffer),j.copy(y.viewport),re.copy(y.scissor),Oe=y.scissorTest,_.viewport(j),_.scissor(re),_.setScissorTest(Oe),Q=-1;return}else if(me.__webglFramebuffer===void 0)K.setupRenderTarget(y);else if(me.__hasExternalTextures)K.rebindTextures(y,X.get(y.texture).__webglTexture,X.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const ze=y.depthTexture;if(me.__boundDepthTexture!==ze){if(ze!==null&&X.has(ze)&&(y.width!==ze.image.width||y.height!==ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(y)}}const Ae=y.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(xe=!0);const Pe=X.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Pe[U])?k=Pe[U][$]:k=Pe[U],W=!0):y.samples>0&&K.useMultisampledRTT(y)===!1?k=X.get(y).__webglMultisampledFramebuffer:Array.isArray(Pe)?k=Pe[$]:k=Pe,j.copy(y.viewport),re.copy(y.scissor),Oe=y.scissorTest}else j.copy(Se).multiplyScalar(V).floor(),re.copy(tt).multiplyScalar(V).floor(),Oe=Ge;if($!==0&&(k=L),_.bindFramebuffer(F.FRAMEBUFFER,k)&&_.drawBuffers(y,k),_.viewport(j),_.scissor(re),_.setScissorTest(Oe),W){const me=X.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,me.__webglTexture,$)}else if(xe){const me=U;for(let Ae=0;Ae<y.textures.length;Ae++){const Pe=X.get(y.textures[Ae]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ae,Pe.__webglTexture,$,me)}}else if(y!==null&&$!==0){const me=X.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,me.__webglTexture,$)}Q=-1},this.readRenderTargetPixels=function(y,U,$,k,W,xe,be,me=0){if(!(y&&y.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=X.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&be!==void 0&&(Ae=Ae[be]),Ae){_.bindFramebuffer(F.FRAMEBUFFER,Ae);try{const Pe=y.textures[me],ze=Pe.format,Xe=Pe.type;if(y.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+me),!w.textureFormatReadable(ze)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(Xe)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-k&&$>=0&&$<=y.height-W&&F.readPixels(U,$,k,W,he.convert(ze),he.convert(Xe),xe)}finally{const Pe=G!==null?X.get(G).__webglFramebuffer:null;_.bindFramebuffer(F.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(y,U,$,k,W,xe,be,me=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=X.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&be!==void 0&&(Ae=Ae[be]),Ae)if(U>=0&&U<=y.width-k&&$>=0&&$<=y.height-W){_.bindFramebuffer(F.FRAMEBUFFER,Ae);const Pe=y.textures[me],ze=Pe.format,Xe=Pe.type;if(y.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+me),!w.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!w.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const De=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,De),F.bufferData(F.PIXEL_PACK_BUFFER,xe.byteLength,F.STREAM_READ),F.readPixels(U,$,k,W,he.convert(ze),he.convert(Xe),0);const ot=G!==null?X.get(G).__webglFramebuffer:null;_.bindFramebuffer(F.FRAMEBUFFER,ot);const Tt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Uf(F,Tt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,De),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,xe),F.deleteBuffer(De),F.deleteSync(Tt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,$=0){const k=Math.pow(2,-$),W=Math.floor(y.image.width*k),xe=Math.floor(y.image.height*k),be=U!==null?U.x:0,me=U!==null?U.y:0;K.setTexture2D(y,0),F.copyTexSubImage2D(F.TEXTURE_2D,$,0,0,be,me,W,xe),_.unbindTexture()},this.copyTextureToTexture=function(y,U,$=null,k=null,W=0,xe=0){let be,me,Ae,Pe,ze,Xe,De,ot,Tt;const bt=y.isCompressedTexture?y.mipmaps[xe]:y.image;if($!==null)be=$.max.x-$.min.x,me=$.max.y-$.min.y,Ae=$.isBox3?$.max.z-$.min.z:1,Pe=$.min.x,ze=$.min.y,Xe=$.isBox3?$.min.z:0;else{const At=Math.pow(2,-W);be=Math.floor(bt.width*At),me=Math.floor(bt.height*At),y.isDataArrayTexture?Ae=bt.depth:y.isData3DTexture?Ae=Math.floor(bt.depth*At):Ae=1,Pe=0,ze=0,Xe=0}k!==null?(De=k.x,ot=k.y,Tt=k.z):(De=0,ot=0,Tt=0);const ut=he.convert(U.format),zt=he.convert(U.type);let ye;U.isData3DTexture?(K.setTexture3D(U,0),ye=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(K.setTexture2DArray(U,0),ye=F.TEXTURE_2D_ARRAY):(K.setTexture2D(U,0),ye=F.TEXTURE_2D),_.activeTexture(F.TEXTURE0),_.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),_.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),_.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);const sn=_.getParameter(F.UNPACK_ROW_LENGTH),Qe=_.getParameter(F.UNPACK_IMAGE_HEIGHT),dn=_.getParameter(F.UNPACK_SKIP_PIXELS),En=_.getParameter(F.UNPACK_SKIP_ROWS),Kn=_.getParameter(F.UNPACK_SKIP_IMAGES);_.pixelStorei(F.UNPACK_ROW_LENGTH,bt.width),_.pixelStorei(F.UNPACK_IMAGE_HEIGHT,bt.height),_.pixelStorei(F.UNPACK_SKIP_PIXELS,Pe),_.pixelStorei(F.UNPACK_SKIP_ROWS,ze),_.pixelStorei(F.UNPACK_SKIP_IMAGES,Xe);const ki=y.isDataArrayTexture||y.isData3DTexture,dt=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){const At=X.get(y),Jn=X.get(U),mt=X.get(At.__renderTarget),Qn=X.get(Jn.__renderTarget);_.bindFramebuffer(F.READ_FRAMEBUFFER,mt.__webglFramebuffer),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let Wi=0;Wi<Ae;Wi++)ki&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,X.get(y).__webglTexture,W,Xe+Wi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,X.get(U).__webglTexture,xe,Tt+Wi)),F.blitFramebuffer(Pe,ze,be,me,De,ot,be,me,F.DEPTH_BUFFER_BIT,F.NEAREST);_.bindFramebuffer(F.READ_FRAMEBUFFER,null),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||y.isRenderTargetTexture||X.has(y)){const At=X.get(y),Jn=X.get(U);_.bindFramebuffer(F.READ_FRAMEBUFFER,H),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,N);for(let mt=0;mt<Ae;mt++)ki?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,At.__webglTexture,W,Xe+mt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,At.__webglTexture,W),dt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Jn.__webglTexture,xe,Tt+mt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Jn.__webglTexture,xe),W!==0?F.blitFramebuffer(Pe,ze,be,me,De,ot,be,me,F.COLOR_BUFFER_BIT,F.NEAREST):dt?F.copyTexSubImage3D(ye,xe,De,ot,Tt+mt,Pe,ze,be,me):F.copyTexSubImage2D(ye,xe,De,ot,Pe,ze,be,me);_.bindFramebuffer(F.READ_FRAMEBUFFER,null),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else dt?y.isDataTexture||y.isData3DTexture?F.texSubImage3D(ye,xe,De,ot,Tt,be,me,Ae,ut,zt,bt.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(ye,xe,De,ot,Tt,be,me,Ae,ut,bt.data):F.texSubImage3D(ye,xe,De,ot,Tt,be,me,Ae,ut,zt,bt):y.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,xe,De,ot,be,me,ut,zt,bt.data):y.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,xe,De,ot,bt.width,bt.height,ut,bt.data):F.texSubImage2D(F.TEXTURE_2D,xe,De,ot,be,me,ut,zt,bt);_.pixelStorei(F.UNPACK_ROW_LENGTH,sn),_.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Qe),_.pixelStorei(F.UNPACK_SKIP_PIXELS,dn),_.pixelStorei(F.UNPACK_SKIP_ROWS,En),_.pixelStorei(F.UNPACK_SKIP_IMAGES,Kn),xe===0&&U.generateMipmaps&&F.generateMipmap(ye),_.unbindTexture()},this.initRenderTarget=function(y){X.get(y).__webglFramebuffer===void 0&&K.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?K.setTextureCube(y,0):y.isData3DTexture?K.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?K.setTexture2DArray(y,0):K.setTexture2D(y,0),_.unbindTexture()},this.resetState=function(){q=0,B=0,G=null,_.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}}var Sv=Object.defineProperty,yv=(t,e,n)=>e in t?Sv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Y=(t,e,n)=>yv(t,typeof e!="symbol"?e+"":e,n);function Yt(t,e,n){const i=lt(t)?t:e,r=n(i,e.value,e.editorMin,e.editorMax,e.curve);return lt(t)?r:{...r,mode:e.mode,value:e.value,min:e.min,max:e.max}}function ht(t,e,n){return{mode:"constant",value:t,min:t,max:t,curve:[{x:0,y:t},{x:1,y:t}],curveB:[{x:0,y:t},{x:1,y:t}],editorMin:e,editorMax:n}}function Hn(t,e,n,i){return{mode:"curve",value:t,min:Math.min(t,e),max:Math.max(t,e),curve:[{x:0,y:t},{x:1,y:e}],curveB:[{x:0,y:t},{x:1,y:e}],editorMin:n,editorMax:i}}function no(t,e){return{mode:"blend",colorStops:[{position:0,color:[t[0],t[1],t[2]]},{position:1,color:[e[0],e[1],e[2]]}],alphaStops:[{position:0,alpha:t[3]},{position:1,alpha:e[3]}]}}function fa(t,e,n,i){const r=lt(t)?t:{},s=et(ae(r.min,e.min),n,i),a=et(ae(r.max,e.max),n,i);return{min:Math.min(s,a),max:Math.max(s,a)}}function Ev(t,e,n,i,r=!1){if(!Array.isArray(t))return[...e];const s=et(ae(t[0],e[0]),n,i),a=et(ae(t[1],e[1]),n,i);return r?[Math.round(s),Math.round(a)]:[s,a]}function es(t,e,n,i){return Array.isArray(t)?[et(ae(t[0],e[0]),n,i),et(ae(t[1],e[1]),n,i),et(ae(t[2],e[2]),n,i)]:[...e]}function Zd(t,e,n,i){return Array.isArray(t)?[et(ae(t[0],e[0]),n,i),et(ae(t[1],e[1]),n,i),et(ae(t[2],e[2]),n,i),et(ae(t[3],e[3]),n,i)]:[...e]}function mi(t,e){return typeof t=="string"?t:e}function ae(t,e){return typeof t=="number"&&Number.isFinite(t)?t:e}function et(t,e,n){return Math.min(n,Math.max(e,t))}function lt(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}var di="sprite-master";function bv(t){if(!lt(t))return null;const e=mi(t.path,"");return e?{type:"texture",id:mi(t.id,e),path:e}:null}function Tv(t){const e=lt(t)?t:{},n=lt(e.paramOverrides)?e.paramOverrides:{},i={};for(const[r,s]of Object.entries(n))if(typeof s=="number"||typeof s=="boolean")i[r]=s;else if(typeof s=="string")i[r]=s;else if(Array.isArray(s)&&s.every(a=>typeof a=="number")){const a=s;i[r]=[a[0]??0,a[1]??0,a[2]??0,a[3]??0]}return{id:mi(e.id,"material-instance"),shaderId:mi(e.shaderId,di),paramOverrides:i,mainTex:bv(e.mainTex)}}function Kd(t){return lt(t)?Tv(t):null}function Av(t){const e={id:t.id,shaderId:t.shaderId};if(Object.keys(t.paramOverrides).length>0){const n={};for(const i of Object.keys(t.paramOverrides).sort())n[i]=t.paramOverrides[i];e.paramOverrides=n}return t.mainTex&&(e.mainTex=t.mainTex),e}var wv=["velocity","velocityOverLifetime","limitVelocityOverLifetime","inheritVelocity","color","size","rotation","lifetimeByEmitterSpeed","forceOverLifetime","colorBySpeed","sizeBySpeed","rotationBySpeed","externalForces","noise","collision","triggers","subEmitters","textureSheetAnimation","lights","trails","customData"],Cv=new Set(["velocity","color","size","rotation"]);function Rv(){return jc(t=>Cv.has(t))}function Pv(){return jc(()=>!1)}function Dv(t,e){const n=lt(t)?t:{};return jc(i=>typeof n[i]=="boolean"?n[i]:e[i])}function Qc(){return{velocityOverLifetime:{space:"local",linear:{x:ht(0,-32,32),y:ht(0,-32,32),z:ht(0,-32,32)},orbital:{x:ht(0,-32,32),y:ht(0,-32,32),z:ht(0,-32,32)},orbitalOffset:{x:ht(0,-32,32),y:ht(0,-32,32),z:ht(0,-32,32)},radial:ht(0,-32,32),speedModifier:ht(1,0,4)},limitVelocityOverLifetime:{separateAxes:!1,speed:Hn(16,16,0,120),x:Hn(16,16,0,120),y:Hn(16,16,0,120),z:Hn(16,16,0,120),dampen:.5,drag:ht(0,0,12),multiplyBySize:!1,space:"local"},inheritVelocity:{mode:"initial",multiplier:Hn(0,0,-4,4)},lifetimeByEmitterSpeed:{speedRange:{min:0,max:16},multiplier:Hn(1,1,0,3)},forceOverLifetime:{force:[0,0,0],randomized:[0,0,0],multiplier:ht(1,-10,10)},colorBySpeed:{speedRange:{min:0,max:16},gradient:no([1,1,1,1],[1,.65,.2,1]),blend:0},sizeBySpeed:{speedRange:{min:0,max:16},multiplier:Hn(1,1,0,4),blend:1},rotationBySpeed:{speedRange:{min:0,max:16},angularVelocity:Hn(0,0,-24,24),blend:1},externalForces:{wind:[0,0,0],gravityMultiplier:ht(1,-4,4),drag:ht(0,0,12),vortexStrength:0},noise:{mode:"sine",strength:ht(0,0,8),frequency:1.5,speed:1,scroll:[1,0,0],octaves:2,damping:.5},collision:{mode:"none",planeY:0,radius:0,bounce:.35,dampen:.45,killBelow:20},triggers:{birthEvent:"",deathEvent:"",normalizedTime:1,oneShot:!0},subEmitters:{birth:so(),collision:so(),death:so()},textureSheetAnimation:{tiles:[1,1],startFrame:0,endFrame:255,frameOverTime:Hn(0,0,0,64),cycles:1,randomStartFrame:!1},lights:{color:[1,.85,.55],intensity:ht(0,0,5),radius:ht(1,0,32),additive:!0},trails:{material:null,depthTest:!0,depthWrite:!1,mode:"particleHistory",ratio:1,lifetime:ht(.5,0,8),length:ht(0,0,12),width:ht(1,.01,4),widthOverTrail:ht(1,0,1),color:null,colorOverLifetime:no([1,1,1,1],[1,1,1,1]),colorOverTrail:no([1,1,1,1],[1,1,1,1]),inheritColor:!0,textureMode:"stretch",texture:null,minVertexDistance:.02,worldSpace:!0},customData:{label:"",channels:Jd()}}}function Iv(t,e,n){const i=lt(t)?t:{},r=Qc();return{velocityOverLifetime:Lv(i.velocityOverLifetime,r.velocityOverLifetime,e),limitVelocityOverLifetime:Fv(i.limitVelocityOverLifetime,r.limitVelocityOverLifetime,e),inheritVelocity:Nv(i.inheritVelocity,r.inheritVelocity,e),lifetimeByEmitterSpeed:Uv(i.lifetimeByEmitterSpeed,r.lifetimeByEmitterSpeed,e),forceOverLifetime:Ov(i.forceOverLifetime,r.forceOverLifetime,e),colorBySpeed:Bv(i.colorBySpeed,r.colorBySpeed,n),sizeBySpeed:Vv(i.sizeBySpeed,r.sizeBySpeed,e),rotationBySpeed:zv(i.rotationBySpeed,r.rotationBySpeed,e),externalForces:Gv(i.externalForces,r.externalForces,e),noise:Hv(i.noise,r.noise,e),collision:kv(i.collision,r.collision),triggers:Wv(i.triggers,r.triggers),subEmitters:Xv(i.subEmitters,r.subEmitters),textureSheetAnimation:$v(i.textureSheetAnimation,r.textureSheetAnimation,e),lights:qv(i.lights,r.lights,e),trails:Yv(i.trails,r.trails,e,n),customData:Zv(i.customData,r.customData,e)}}function pa(t,e){return et((e-t.min)/Math.max(1e-6,t.max-t.min),0,1)}function io(t,e,n){const i=lt(t)?t:{};return{x:Yt(i.x,e.x,n),y:Yt(i.y,e.y,n),z:Yt(i.z,e.z,n)}}function Lv(t,e,n){const i=lt(t)?t:{};return{space:i.space==="world"?"world":"local",linear:io(i.linear,e.linear,n),orbital:io(i.orbital,e.orbital,n),orbitalOffset:io(i.orbitalOffset,e.orbitalOffset,n),radial:Yt(i.radial,e.radial,n),speedModifier:Yt(i.speedModifier,e.speedModifier,n)}}function Fv(t,e,n){const i=lt(t)?t:{};return{separateAxes:typeof i.separateAxes=="boolean"?i.separateAxes:e.separateAxes,speed:Yt(i.speed,e.speed,n),x:Yt(i.x,e.x,n),y:Yt(i.y,e.y,n),z:Yt(i.z,e.z,n),dampen:et(ae(i.dampen,e.dampen),0,1),drag:n(i.drag,0,0,12),multiplyBySize:typeof i.multiplyBySize=="boolean"?i.multiplyBySize:e.multiplyBySize,space:i.space==="world"?"world":"local"}}function Nv(t,e,n){const i=lt(t)?t:{};return{mode:i.mode==="current"?"current":"initial",multiplier:Yt(i.multiplier,e.multiplier,n)}}function Uv(t,e,n){const i=lt(t)?t:{};return{speedRange:fa(i.speedRange,e.speedRange,0,80),multiplier:Yt(i.multiplier,e.multiplier,n)}}function Ov(t,e,n){const i=lt(t)?t:{};return{force:es(i.force,e.force,-160,160),randomized:es(i.randomized,e.randomized,0,160),multiplier:n(i.multiplier,1,-10,10)}}function Bv(t,e,n){const i=lt(t)?t:{};return{speedRange:fa(i.speedRange,e.speedRange,0,80),gradient:n(i.gradient,[1,1,1,1],[1,.65,.2,1]),blend:et(ae(i.blend,e.blend),0,1)}}function Vv(t,e,n){const i=lt(t)?t:{};return{speedRange:fa(i.speedRange,e.speedRange,0,80),multiplier:Yt(i.multiplier,e.multiplier,n),blend:et(ae(i.blend,e.blend),0,1)}}function zv(t,e,n){const i=lt(t)?t:{};return{speedRange:fa(i.speedRange,e.speedRange,0,80),angularVelocity:Yt(i.angularVelocity,e.angularVelocity,n),blend:et(ae(i.blend,e.blend),0,1)}}function Gv(t,e,n){const i=lt(t)?t:{};return{wind:es(i.wind,e.wind,-160,160),gravityMultiplier:n(i.gravityMultiplier,1,-4,4),drag:n(i.drag,0,0,12),vortexStrength:et(ae(i.vortexStrength,e.vortexStrength),-80,80)}}function Hv(t,e,n){const i=lt(t)?t:{};return{mode:i.mode==="curl"?"curl":"sine",strength:n(i.strength,0,0,8),frequency:et(ae(i.frequency,e.frequency),0,32),speed:et(ae(i.speed,e.speed),-16,16),scroll:es(i.scroll,e.scroll,-16,16),octaves:Math.round(et(ae(i.octaves,e.octaves),1,6)),damping:et(ae(i.damping,e.damping),0,1)}}function kv(t,e){const n=lt(t)?t:{};return{mode:n.mode==="plane"?"plane":"none",planeY:et(ae(n.planeY,e.planeY),-100,100),radius:et(ae(n.radius,e.radius),0,16),bounce:et(ae(n.bounce,e.bounce),0,1),dampen:et(ae(n.dampen,e.dampen),0,1),killBelow:et(ae(n.killBelow,e.killBelow),0,200)}}function Wv(t,e){const n=lt(t)?t:{};return{birthEvent:mi(n.birthEvent,e.birthEvent),deathEvent:mi(n.deathEvent,e.deathEvent),normalizedTime:et(ae(n.normalizedTime,e.normalizedTime),0,1),oneShot:typeof n.oneShot=="boolean"?n.oneShot:e.oneShot}}function Xv(t,e){const n=lt(t)?t:{};return{birth:ro(n.birth,e.birth),collision:ro(n.collision,e.collision),death:ro(n.death,e.death)}}function ro(t,e){const n=lt(t)?t:{};return{effectFile:mi(n.effectFile,e.effectFile),probability:et(ae(n.probability,e.probability),0,1),inheritColor:typeof n.inheritColor=="boolean"?n.inheritColor:e.inheritColor,inheritSize:typeof n.inheritSize=="boolean"?n.inheritSize:e.inheritSize}}function $v(t,e,n){const i=lt(t)?t:{};return{tiles:Ev(i.tiles,e.tiles,1,16,!0),startFrame:Math.round(et(ae(i.startFrame,e.startFrame),0,255)),endFrame:Math.round(et(ae(i.endFrame,e.endFrame),0,255)),frameOverTime:Yt(i.frameOverTime,e.frameOverTime,n),cycles:et(ae(i.cycles,e.cycles),0,32),randomStartFrame:typeof i.randomStartFrame=="boolean"?i.randomStartFrame:e.randomStartFrame}}function qv(t,e,n){const i=lt(t)?t:{};return{color:es(i.color,e.color,0,1),intensity:n(i.intensity,0,0,5),radius:n(i.radius,1,0,32),additive:typeof i.additive=="boolean"?i.additive:e.additive}}function Yv(t,e,n,i){const r=lt(t)?t:{},s=r.color===null||r.color===void 0?null:i(r.color,[1,1,1,1],[1,1,1,0]);return{material:Kd(r.material),depthTest:typeof r.depthTest=="boolean"?r.depthTest:!0,depthWrite:typeof r.depthWrite=="boolean"?r.depthWrite:!1,mode:r.mode==="ribbon"?"ribbon":"particleHistory",ratio:et(ae(r.ratio,e.ratio),0,1),lifetime:n(r.lifetime,.5,0,8),length:n(r.length,0,0,12),width:n(r.width,1,.01,4),widthOverTrail:n(r.widthOverTrail,1,0,1),color:s,colorOverLifetime:i(r.colorOverLifetime,[1,1,1,1],[1,1,1,1]),colorOverTrail:i(r.colorOverTrail??s,[1,1,1,1],[1,1,1,1]),inheritColor:typeof r.inheritColor=="boolean"?r.inheritColor:e.inheritColor,textureMode:r.textureMode==="tile"?"tile":"stretch",texture:typeof r.texture=="string"&&r.texture.trim()?r.texture.trim():null,minVertexDistance:et(ae(r.minVertexDistance,e.minVertexDistance),0,1),worldSpace:typeof r.worldSpace=="boolean"?r.worldSpace:e.worldSpace}}function Zv(t,e,n){const i=lt(t)?t:{},r=Array.isArray(i.channels)?i.channels:null,s=r?null:Zd(i.vector1,[0,0,0,0],-1e5,1e5),a=e.channels??Jd(),o=[0,1,2,3].map(c=>{const l=r?a[c]:ht((s==null?void 0:s[c])??0,-1,1);return Yt(r==null?void 0:r[c],l,n)});return{label:mi(i.label,e.label),channels:o}}function Jd(){return[ht(0,-1,1),ht(0,-1,1),ht(0,-1,1),ht(0,-1,1)]}function jc(t){return wv.reduce((e,n)=>(e[n]=t(n),e),{})}function so(){return{effectFile:"",probability:1,inheritColor:!0,inheritSize:!0}}var Mr=1e5,ra=1/3,oi=1e3,Qd=1,Kv=8,Ru=new WeakMap;function el(t){const e=Ru.get(t);if(e)return e;const n=r_(t)?t:yc(t,[{x:0,y:0},{x:1,y:0}]),i=s_(n),r=[];for(let a=0;a<n.length-1;a++){const o=n[a],c=n[a+1],l=Math.max(1e-6,c.x-o.x),u=e_(o),h=jv(c),d=o.y+Qv(o,i[a])*l*u,f=c.y-Jv(c,i[a+1])*l*h;r.push({start:o.x,end:c.x,dx:l,x1:o.x+l*u,x2:c.x-l*h,y0:o.y,y1:d,y2:f,y3:c.y,linearX:u===ra&&h===ra,c1:3*(d-o.y),c2:3*(o.y-2*d+f),c3:-o.y+3*d-3*f+c.y})}const s={firstY:n[0].y,lastY:n[n.length-1].y,segments:r};return Object.isFrozen(t)&&t.every(a=>Object.isFrozen(a))&&Ru.set(t,s),s}function Sc(t,e){const n=cs((e-t.start)/t.dx,0,1),i=t.linearX?n:t_(t.start,t.x1,t.x2,t.end,e,n);return cr(t.y0,t.y1,t.y2,t.y3,i)}function jd(t,e){if(e<=0)return t.firstY;if(e>=1)return t.lastY;const n=t.segments;if(n.length<=Kv){for(const a of n)if(e<=a.end)return Sc(a,e);return t.lastY}let i=0,r=n.length;for(;i<r;){const a=i+r>>>1;n[a].end<e?i=a+1:r=a}const s=n[i];return s?Sc(s,e):t.lastY}function fi(t,e){return jd(el(t),cs(e,0,1))}function Jv(t,e){return t.slopeIn??t.slope??e}function Qv(t,e){return t.slopeOut??t.slope??e}function jv(t){return t.weightIn??ra}function e_(t){return t.weightOut??ra}function t_(t,e,n,i,r,s){let a=cs(s,0,1);for(let p=0;p<6;p++){const x=cr(t,e,n,i,a)-r,g=n_(t,e,n,i,a);if(Math.abs(x)<1e-6)return a;if(Math.abs(g)<1e-6)break;const m=a-x/g;if(m<0||m>1)break;a=m}let o=0,c=1,l=1/0,u=0,h=cr(t,e,n,i,u)-r;for(let p=1;p<=24;p++){const x=p/24,g=cr(t,e,n,i,x)-r,m=Math.abs(g);if(m<l&&(l=m,o=u,c=x),h===0||g===0||h<0&&g>0||h>0&&g<0){o=u,c=x;break}u=x,h=g}let d=o,f=c;for(let p=0;p<24;p++){const x=(d+f)*.5,g=cr(t,e,n,i,x)-r,m=cr(t,e,n,i,d)-r;if(Math.abs(g)<1e-6)return x;m<=0&&g>=0||m>=0&&g<=0?f=x:d=x}return(d+f)*.5}function cr(t,e,n,i,r){const s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function n_(t,e,n,i,r){const s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function Pu(t,e,n=Mr){return{...t,y:Ci(t.y*e,-n,n),...typeof t.slope=="number"?{slope:Ci(t.slope*e,-oi,oi)}:{},...typeof t.slopeIn=="number"?{slopeIn:Ci(t.slopeIn*e,-oi,oi)}:{},...typeof t.slopeOut=="number"?{slopeOut:Ci(t.slopeOut*e,-oi,oi)}:{}}}function i_(t,e=Mr){if(!o_(t))return;const n={x:cs(Fu(t.x,0),0,1),y:Ci(Fu(t.y,0),-e,e)},i=ao(t.slope),r=ao(t.slopeIn),s=ao(t.slopeOut),a=Du(t.weightIn),o=Du(t.weightOut);return i!==void 0&&(n.slope=i),r!==void 0&&(n.slopeIn=r),s!==void 0&&(n.slopeOut=s),a!==void 0&&(n.weightIn=a),o!==void 0&&(n.weightOut=o),n}function ao(t){return typeof t=="number"&&Number.isFinite(t)?Ci(t,-oi,oi):void 0}function Du(t){return typeof t=="number"&&Number.isFinite(t)?Ci(t,0,Qd):void 0}function yc(t,e,n=Mr){const r=(Array.isArray(t)&&t.length>0?t:e).map(s=>i_(s,n)).filter(s=>!!s).sort((s,a)=>s.x-a.x);if(r.length===0)return[{x:0,y:0},{x:1,y:0}];if(r.length===1){const s=r[0];return[{...s,x:0},{...s,x:1}]}return r[0].x=0,r[r.length-1].x=1,r}function r_(t){if(t.length<2)return!1;const e=t[0],n=t[t.length-1];if(e.x!==0||n.x!==1)return!1;let i=-1/0;for(const r of t){if(!Number.isFinite(r.x)||!Number.isFinite(r.y)||!oo(r.slope)||!oo(r.slopeIn)||!oo(r.slopeOut)||!Iu(r.weightIn)||!Iu(r.weightOut)||r.x<i||r.x<0||r.x>1)return!1;i=r.x}return!0}function oo(t){return t===void 0||typeof t=="number"&&Number.isFinite(t)}function Iu(t){return t===void 0||typeof t=="number"&&Number.isFinite(t)&&t>=0&&t<=Qd}var Lu=new WeakMap;function s_(t){let e=Lu.get(t);return e||(e=a_(t),Lu.set(t,e)),e}function a_(t){const e=t.length;if(e===0)return[];if(e===1){const s=t[0];return[typeof s.slope=="number"&&Number.isFinite(s.slope)?s.slope:0]}const n=t.map(s=>typeof s.slope=="number"&&Number.isFinite(s.slope)),i=new Array(e-1);for(let s=0;s<e-1;s++){const a=t[s],o=t[s+1];i[s]=(o.y-a.y)/Math.max(1e-6,o.x-a.x)}const r=new Array(e);for(let s=0;s<e;s++){if(n[s]){r[s]=t[s].slope;continue}if(s===0)r[s]=i[0];else if(s===e-1)r[s]=i[e-2];else{const a=i[s-1],o=i[s];r[s]=a*o<=0?0:(a+o)*.5}}for(let s=0;s<e-1;s++){const a=i[s];if(a===0){n[s]||(r[s]=0),n[s+1]||(r[s+1]=0);continue}const o=r[s]/a,c=r[s+1]/a,l=o*o+c*c;if(l>9){const u=3/Math.sqrt(l);n[s]||(r[s]=u*o*a),n[s+1]||(r[s+1]=u*c*a)}}return r}function Fu(t,e){return typeof t=="number"&&Number.isFinite(t)?t:e}function Ci(t,e,n){return cs(Number.isFinite(t)?t:e,e,n)}function cs(t,e,n){return Math.min(n,Math.max(e,t))}function o_(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}var c_=64;function Nu(t,e){const n=el(t),i=Math.max(1,Math.ceil(e*c_)),r=e/i;let s=(n.firstY+jd(n,e))*.5,a=1;for(const o of n.segments){if(a>=i)break;let c=Math.min(i-1,Math.floor(o.end/r));if(c>=a&&e*c/i>o.end&&c--,c+1<i&&e*(c+1)/i<=o.end&&c++,!(c<a)){if(o.linearX&&o.end-o.start>=1e-6)s+=l_(o,e*a/i,r,c-a+1);else for(let l=a;l<=c;l++)s+=Sc(o,e*l/i);a=c+1}}return s*r}function l_(t,e,n,i){const r=(e-t.start)/t.dx,s=n/t.dx,a=t.y0+r*(t.c1+r*(t.c2+r*t.c3)),o=s*(t.c1+r*(2*t.c2+3*r*t.c3)),c=s*s*(t.c2+3*r*t.c3),l=s*s*s*t.c3,u=i-1,h=u*i/2,d=u*i*(2*u+1)/6;return i*a+o*h+c*d+l*h*h}function u_(t,e,n){if(t.mode==="random")return t.min+(t.max-t.min)*n;const i=t.multiplier??1;if(t.mode==="curve")return fi(t.curve,e)*i;if(t.mode==="randomCurve"){const r=fi(t.curve,e),s=fi(t.curveB,e);return(r+(s-r)*n)*i}return t.value}function Me(t,e,n,i){const r=t.xAxis==="loopAge"&&i!==void 0?i:e,s=ts(r,0,1),a=ts(n,0,1);return u_(t,s,a)}function d_(t,e,n,i){const r=t.xAxis==="loopAge"&&i!==void 0?i:e,s=ts(r,0,1),a=ts(n,0,1);if(s<=0)return 0;if(t.mode==="random")return(t.min+(t.max-t.min)*a)*s;if(t.mode==="constant")return t.value*s;const o=Nu(t.curve,s),c=t.mode==="randomCurve"?Nu(t.curveB,s):o;return(o+(c-o)*a)*(t.multiplier??1)}function h_(t,e,n,i){const r=t.xAxis==="loopAge"&&i!==void 0?i:e,s=ts(r,0,1);return s<=0?Me(t,e,n,i):d_(t,e,n,i)/s}function ts(t,e,n){return Math.min(n,Math.max(e,t))}var f_=new WeakSet;function Uu(t){return typeof t=="object"&&t!==null&&f_.has(t)}var p_=class{constructor(t,e){Y(this,"clone",e),Y(this,"value"),this.value=this.acquire(t)}replace(t){this.value=this.acquire(t)}mutable(){return Uu(this.value)&&(this.value=this.clone(this.value)),this.value}acquire(t){if(Uu(t))return t;const e=this.clone(t);return eh(e),e}};function eh(t){for(const[e,n]of Object.entries(t))if(!(!n||typeof n!="object"))if((e==="curve"||e==="curveB")&&Array.isArray(n)){for(const i of n)Object.freeze(i);Object.freeze(n),el(n)}else eh(n)}var m_=50,g_=2**m_;function x_(t){const e=vt(t)&&t.version===1?t:{};return{version:1,enabled:e.enabled!==!1&&(e.mode==="emitter"||e.mode==="particles"),useParticleColor:e.useParticleColor===!0,mode:e.mode==="emitter"||e.mode==="particles"?e.mode:"disabled",color:Ni(e.color,[1,.45,.08,1],[1,.08,.01,0]),intensity:xt(e.intensity,8,0,1e4),radius:xt(e.radius,3,.001,1e4),maxLights:typeof e.maxLights=="number"&&Number.isFinite(e.maxLights)?Math.max(0,Math.min(4096,Math.floor(e.maxLights))):null}}var Wt=18,en=3,th=1,v_=2,nh=8,__=16,ct=Math.PI*2,M_=256,qr=1e-6,Ur=1,Ou=2,S_=4096,y_=512,E_=4,b_=30,T_=2,A_=1.15,ma=1e5,ih=Rv(),w_=Pv(),it={maxParticles:256,duration:1.2,modules:{...ih},spawn:{rate:80,rateValue:Ue(80,0,3e3),rateOverDistance:0,rateOverDistanceValue:Ue(0,0,1e3),bursts:[{time:0,count:18,cycles:1,interval:.1,probability:1}],shape:"circle",radius:.35,radiusValue:Ue(.35,0,24),box:[.6,.2,.6],angle:25,radiusThickness:1,arc:360,arcSpread:0,arcSpeedValue:Ue(0,-360,360),length:5,position:[0,0,0],rotation:[0,0,0],scale:[1,1,1],randomDirectionAmount:0,sphericalDirectionAmount:0,randomPositionAmount:0},initializeParticle:{lifetime:Or(.45,.85,.02,30),color:rh(),size:Ue(1,0,24),size3D:{x:Ue(1,0,24),y:Ue(1,0,24),z:Ue(1,0,24)},startSizeSeparateAxes:!1,rotation:Or(0,ct,-ct,ct),rotation3D:{x:Ue(0,-ct,ct),y:Ue(0,-ct,ct),z:Or(0,ct,-ct,ct)},startRotationSeparateAxes:!1,angularVelocitySeparateAxes:!1,angularVelocity:Or(-9,9,-24,24),angularVelocity3D:{x:Ue(0,-24,24),y:Ue(0,-24,24),z:Or(-9,9,-24,24)},velocity:{mode:"shapeDirection",min:[-.7,2.2,-.7],max:[.7,3.4,.7],speed:Ue(0,0,80)}},forces:{gravity:4.8,gravityValue:Ue(4.8,-80,80),drag:.05,dragValue:Ue(.05,0,12)},billboard:{sizeStart:.28,sizeEnd:.05,sizeValue:Br(.28,.05,.001,24),sizeValueY:Br(.28,.05,.001,24),softness:.4,pivot:[0,0]},mesh:{template:"triangleShard",sizeStart:.28,sizeEnd:.08,sizeValue:Br(.28,.08,.001,24),sizeValueY:Br(.28,.08,.001,24),sizeValueZ:Br(.28,.08,.001,24),thickness:.5,pivot:[0,0,0]},color:{start:[.75,1,.48,.95],end:[.35,.75,.28,0],gradient:sa([.75,1,.48,.95],[.35,.75,.28,0])},advanced:Qc()};({...w_},Ue(24,0,3e3),Ue(0,0,1e3),Ue(0,0,24),Ue(0,-360,360)),Ue(1,.02,30),rh(),Ue(1,0,24),Ue(1,0,24),Ue(1,0,24),Ue(1,0,24),Ue(0,-ct,ct),Ue(0,-ct,ct),Ue(0,-ct,ct),Ue(0,-ct,ct),Ue(0,-24,24),Ue(0,-24,24),Ue(0,-24,24),Ue(0,-24,24),Ue(0,0,80),Ue(0,-80,80),Ue(0,0,12),Ue(.28,.001,24),Ue(.28,.001,24),Ue(.28,.001,24),Ue(.28,.001,24),Ue(.28,.001,24),sa([1,1,1,1],[1,1,1,1]),Qc();function Ue(t,e,n){return xt({mode:"constant",value:t},t,e,n)}function Or(t,e,n,i){return xt({mode:"random",min:t,max:e,value:(t+e)*.5},(t+e)*.5,n,i)}function Br(t,e,n,i){return xt({mode:"curve",value:t,min:Math.min(t,e),max:Math.max(t,e),curve:[{x:0,y:t},{x:1,y:e}]},t,n,i)}function sa(t,e){return Ni({mode:"blend",colorStops:[{position:0,color:[t[0],t[1],t[2]]},{position:1,color:[e[0],e[1],e[2]]}],alphaStops:[{position:0,alpha:t[3]},{position:1,alpha:e[3]}]},t,e)}function rh(){const t=[1,1,1,1];return{mode:"constant",color:[...t],colorB:[...t],gradient:sa([...t],[...t]),gradientB:sa([...t],[...t]),alpha:Ue(1,0,1),intensity:Ue(1,0,16)}}function C_(t,e,n,i,r,s){const a=ve(e,0,1),o=ve(Me(t.alpha,n,e,i),0,1);return t.mode==="random"?(r[0]=t.color[0]+(t.colorB[0]-t.color[0])*a,r[1]=t.color[1]+(t.colorB[1]-t.color[1])*a,r[2]=t.color[2]+(t.colorB[2]-t.color[2])*a,r[3]=o,r):t.mode==="gradient"?(tn(t.gradient,a,r),r[3]=nn(t.gradient,a)*o,r):t.mode==="randomGradient"?(tn(t.gradient,a,r),r[3]=nn(t.gradient,a),tn(t.gradientB,a,s),s[3]=nn(t.gradientB,a),r[0]+=(s[0]-r[0])*a,r[1]+=(s[1]-r[1])*a,r[2]+=(s[2]-r[2])*a,r[3]=(r[3]+(s[3]-r[3])*a)*o,r):(r[0]=t.color[0],r[1]=t.color[1],r[2]=t.color[2],r[3]=o,r)}function Ec(t){const e=vt(t)?t:{},i=(Array.isArray(e.emitters)?e.emitters:[]).map((s,a)=>O_(s,a)),r=I_(e.timeline,i);return D_(e.timeline,i,r),{app:"vfx-editor",kind:"particle-effect",version:1,targetProfile:R_(e.targetProfile),id:ns(e.id,"particle-effect"),name:Sr(e.name,"Particle Effect"),timeline:r,emitters:i}}function R_(t){return t==="three-world-3d"||t==="portable"?t:"pixi-ui-2d"}function P_(t){return Ec(t)}function D_(t,e,n){if(n.groups.length>0||e.length<=3||vt(t)&&Array.isArray(t.groups)||e.some(r=>r.timeline.groupId))return;const i="track-group";n.groups.push({id:i,name:"Track Group",collapsed:!1,hidden:!1,locked:!1});for(let r=3;r<e.length;r++){const s=e[r];s&&(s.timeline={...s.timeline,groupId:i})}}function I_(t,e){const n=vt(t)?t:{},i=ve(we(n.frameRate,b_),1,240),r=L_(e),s=ve(we(n.duration,r),.05,ma);return{frameRate:i,duration:s,loop:F_(n.loop,s),groups:N_(n.groups)}}function L_(t){let e=0;for(const i of t)e=Math.max(e,i.timeline.start+Math.max(.05,i.duration));const n=Math.max(e,T_)*A_;return ve(n,.05,ma)}function F_(t,e){const n=vt(t)?t:{},i=e*.12,r=e*.62;let s=ve(we(n.start,i),0,e),a=ve(we(n.end,r),0,e);return a<=s&&(a=Math.min(e,s+.05),a<=s&&(s=Math.max(0,a-.05))),{enabled:n.enabled===!0,start:s,end:a}}function N_(t){if(!Array.isArray(t))return[];const e=[],n=new Set;for(let i=0;i<t.length;i++){const r=t[i];if(!vt(r))continue;const s=`track-group-${i+1}`;let a=ns(r.id,s),o=2;for(;n.has(a);)a=`${ns(r.id,s)}-${o}`,o++;n.add(a),e.push({id:a,name:Sr(r.name,`Track Group ${i+1}`),collapsed:r.collapsed===!0,hidden:r.hidden===!0,locked:r.locked===!0})}return e}function U_(t){const e=vt(t)?t:{},n=typeof e.groupId=="string"&&e.groupId.trim()?ns(e.groupId,"track-group"):null;return{start:ve(we(e.start,0),0,ma),groupId:n,locked:e.locked===!0}}function O_(t,e){const n=vt(t)?t:{},i=it,r=B_(n.spawn);return{id:ns(n.id,`emitter-${e+1}`),name:Sr(n.name,`Emitter ${e+1}`),enabled:n.enabled!==!1,mode:n.mode==="mesh"?"mesh":"billboard",maxParticles:Math.round(ve(we(n.maxParticles,i.maxParticles),1,4096)),duration:ve(we(n.duration,i.duration),.05,ma),loop:n.loop!==!1,timeline:U_(n.timeline),modules:Dv(n.modules,ih),...vt(n.lightEmission)&&n.lightEmission.version===1?{lightEmission:x_(n.lightEmission)}:{},spawn:r,initializeParticle:k_(n.initializeParticle,i.initializeParticle),forces:z_(n.forces),render:X_(n.render,r.alignToDirection),billboard:nM(n.billboard),mesh:iM(n.mesh),color:aM(n.color),advanced:Iv(n.advanced,xt,Ni)}}function B_(t){const e=vt(t)?t:{},n=ve(we(e.rate,it.spawn.rate),0,3e3),i=ve(we(e.rateOverDistance,it.spawn.rateOverDistance),0,1e3),r=ve(we(e.radius,it.spawn.radius),0,24),s=e.shape==="point"||e.shape==="box"||e.shape==="cone"||e.shape==="sphere"||e.shape==="hemisphere"||e.shape==="mesh"?e.shape:e.shape==="circle"?"circle":it.spawn.shape;return{rate:n,rateValue:xt(e.rateValue,n,0,3e3),rateOverDistance:i,rateOverDistanceValue:xt(e.rateOverDistanceValue,i,0,1e3),bursts:V_(e,it.spawn.bursts),shape:s,radius:r,radiusValue:xt(e.radiusValue,r,0,24),box:Mn(e.box,it.spawn.box,0,48),angle:ve(we(e.angle,it.spawn.angle),0,90),radiusThickness:ve(we(e.radiusThickness,it.spawn.radiusThickness),0,1),arc:ve(we(e.arc,it.spawn.arc),0,360),arcMode:fM(e.arcMode),arcSpread:ve(we(e.arcSpread,it.spawn.arcSpread),0,1),arcSpeedValue:xt(e.arcSpeedValue,0,-360,360),length:ve(we(e.length,it.spawn.length),0,48),emitFrom:e.emitFrom==="volume"?"volume":"base",meshAsset:ah(e.meshAsset),meshEmitFrom:e.meshEmitFrom==="vertices"?"vertices":"surface",position:Mn(e.position,it.spawn.position,-100,100),rotation:Mn(e.rotation,it.spawn.rotation,-360,360),scale:Mn(e.scale,it.spawn.scale,0,100),simulationSpace:e.simulationSpace==="local"?"local":"world",alignToDirection:e.alignToDirection===!0,randomDirectionAmount:ve(we(e.randomDirectionAmount,it.spawn.randomDirectionAmount),0,1),sphericalDirectionAmount:ve(we(e.sphericalDirectionAmount,it.spawn.sphericalDirectionAmount),0,1),randomPositionAmount:ve(we(e.randomPositionAmount,it.spawn.randomPositionAmount),0,24)}}function V_(t,e=[]){return(Array.isArray(t.bursts)?t.bursts:Array.isArray(t.burstSchedules)&&t.burstSchedules.length>0?t.burstSchedules:Array.isArray(t.burstSchedule)?t.burstSchedule:e).map(i=>{if(!vt(i))return;const r=Math.round(ve(we(i.count,0),0,4096)),s=Math.round(ve(we(i.cycles,we(i.cycleCount,1)),1,256));if(!(r<=0||s<=0))return{time:ve(we(i.time,0),0,60),count:r,cycles:s,interval:ve(we(i.interval,we(i.repeatInterval,0)),0,60),probability:ve(we(i.probability,1),0,1)}}).filter(i=>!!i).slice(0,__).sort((i,r)=>i.time-r.time||i.interval-r.interval)}function z_(t){const e=vt(t)?t:{},n=ve(we(e.gravity,it.forces.gravity),-80,80),i=ve(we(e.drag,it.forces.drag),0,12);return{gravity:n,gravityValue:xt(e.gravityValue,n,-80,80),drag:i,dragValue:xt(e.dragValue,i,0,12)}}var G_=new Set(["constant","random","gradient","randomGradient"]);function H_(t,e){const n=vt(t)?t:{},i=typeof n.mode=="string"&&G_.has(n.mode)?n.mode:e.mode,r=aa(n.color,e.color,0,16),s=aa(n.colorB,e.colorB,0,16),a=e.alpha??Ue((e.mode==="random",e.color[3]),0,1),o=i==="random"?{mode:"random",value:r[3],min:r[3],max:s[3],editorMin:0,editorMax:1,curve:[{x:0,y:r[3]},{x:1,y:r[3]}],curveB:[{x:0,y:s[3]},{x:1,y:s[3]}]}:{mode:"constant",value:i==="constant"?r[3]:1,min:i==="constant"?r[3]:1,max:i==="constant"?r[3]:1,editorMin:0,editorMax:1,curve:[{x:0,y:i==="constant"?r[3]:1},{x:1,y:i==="constant"?r[3]:1}],curveB:[{x:0,y:i==="constant"?r[3]:1},{x:1,y:i==="constant"?r[3]:1}]};return{mode:i,color:r,colorB:s,gradient:Ni(n.gradient,[r[0],r[1],r[2],r[3]],[s[0],s[1],s[2],s[3]]),gradientB:Ni(n.gradientB,[s[0],s[1],s[2],s[3]],[r[0],r[1],r[2],r[3]]),alpha:xt(n.alpha??o,hi(a),0,1),intensity:xt(n.intensity,hi(e.intensity),0,16,void 0,g_)}}function k_(t,e){const n=vt(t)?t:{},i=xt(n.size,hi(e.size),0,24),r=xt(n.rotation,hi(e.rotation),-ct,ct),s=xt(n.angularVelocity,hi(e.angularVelocity),-24,24);return{lifetime:xt(n.lifetime,hi(e.lifetime),.02,30),color:H_(n.color,e.color),size:i,size3D:lo(n.size3D,co(i,i,i),0,24),startSizeSeparateAxes:typeof n.startSizeSeparateAxes=="boolean"?n.startSizeSeparateAxes:e.startSizeSeparateAxes??!1,rotation:r,rotation3D:lo(n.rotation3D,co(Ue(0,-ct,ct),Ue(0,-ct,ct),r),-ct,ct),startRotationSeparateAxes:typeof n.startRotationSeparateAxes=="boolean"?n.startRotationSeparateAxes:e.startRotationSeparateAxes??!1,angularVelocitySeparateAxes:typeof n.angularVelocitySeparateAxes=="boolean"?n.angularVelocitySeparateAxes:e.angularVelocitySeparateAxes??!1,angularVelocity:s,angularVelocity3D:lo(n.angularVelocity3D,co(Ue(0,-24,24),Ue(0,-24,24),s),-24,24),velocity:W_(n.velocity,e.velocity)}}function co(t,e,n){return{x:t,y:e,z:n}}function lo(t,e,n,i){const r=vt(t)?t:{};return{x:uo(r.x,e.x,n,i),y:uo(r.y,e.y,n,i),z:uo(r.z,e.z,n,i)}}function uo(t,e,n,i){return xt(t===void 0?e:t,hi(e),n,i,e.curve)}function W_(t,e){const n=vt(t)?t:{};return{mode:n.mode==="vector"||n.mode==="shapeDirection"?n.mode:e.mode,min:Mn(n.min,e.min,-1e5,1e5),max:Mn(n.max,e.max,-1e5,1e5),speed:xt(n.speed,hi(e.speed),0,80)}}function X_(t,e=!1){const n=vt(t)?t:{},i=Z_(n.alignment,e),r=typeof n.alignAxis=="string"&&sh.has(n.alignAxis),s=K_(n.alignAxis,i),a=Q_(n.facing,i,r);return{blend:typeof n.blend=="string"&&$_.has(n.blend)?n.blend:"alpha",shading:n.shading==="lit"?"lit":"unlit",depthTest:n.depthTest!==!1,depthWrite:n.depthWrite===!0,depthInk:n.depthInk!==!1,orderInLayer:Math.round(ve(we(n.orderInLayer,0),-1024,1024)),sortMode:Y_(n.sortMode),alignment:j_(s),alignAxis:s,facing:a,alignmentVector:Mn(n.alignmentVector,[0,1,0],-1,1),opacitySource:tM(n.opacitySource),opacityInvert:n.opacityInvert===!0,texture:typeof n.texture=="string"&&n.texture.trim()?n.texture.trim():null,material:Kd(n.material)}}function Un(t,e=1){return t.depthWrite===!0&&t.blend!=="additive"&&t.blend!=="premultiplied"&&e>=.999}var $_=new Set(["alpha","additive","premultiplied"]),q_=new Set(["none","distanceFarFirst","distanceNearFirst","oldestFirst","youngestFirst"]);function Y_(t){return typeof t=="string"&&q_.has(t)?t:"distanceFarFirst"}function Z_(t,e){return t==="faceCamera"||t==="spawnDirection"||t==="velocity"||t==="vector"?t:e?"spawnDirection":"faceCamera"}var sh=new Set(["screen","spawnDirection","velocity","vector"]);function K_(t,e){return typeof t=="string"&&sh.has(t)?t:e==="faceCamera"?"screen":e}var J_=new Set(["cameraPlane","cameraPosition","off"]);function Q_(t,e,n){return typeof t=="string"&&J_.has(t)?t:n||e==="faceCamera"?"cameraPlane":"off"}function j_(t){return t==="screen"?"faceCamera":t}var eM=new Set(["textureAlpha","red","green","blue","luminance","inverseLuminance","constant"]);function tM(t){return typeof t=="string"&&eM.has(t)?t:"textureAlpha"}function nM(t){const e=vt(t)?t:{},n=ve(we(e.sizeStart,it.billboard.sizeStart),.001,24),i=ve(we(e.sizeEnd,it.billboard.sizeEnd),.001,24),r=ve(we(e.sizeStartY,n),.001,24),s=ve(we(e.sizeEndY,i),.001,24),a=xt(e.sizeValue,n,.001,24,[{x:0,y:n},{x:1,y:i}]);return{shape:e.shape==="square"?"square":"circle",sizeStart:n,sizeEnd:i,sizeValue:a,separateAxes:e.separateAxes===!0,sizeStartY:r,sizeEndY:s,sizeValueY:xt(e.sizeValueY===void 0?a:e.sizeValueY,r,.001,24,[{x:0,y:r},{x:1,y:s}]),softness:ve(we(e.softness,it.billboard.softness),0,1),pivot:vM(e.pivot,it.billboard.pivot,-10,10)}}function iM(t){const e=vt(t)?t:{},n=ah(e.asset),i=e.renderMode==="meshAsset"?"meshAsset":"pixiShard",r=e.template==="grassShard"||e.template==="quadShard"||e.template==="triangleShard"?e.template:it.mesh.template,s=ve(we(e.sizeStart,it.mesh.sizeStart),.001,24),a=ve(we(e.sizeEnd,it.mesh.sizeEnd),.001,24),o=rM(e,s,a);return{renderMode:i,template:r,asset:n,sizeStart:s,sizeEnd:a,sizeValue:o,separateAxes:e.separateAxes===!0,sizeValueY:xt(e.sizeValueY===void 0?o:e.sizeValueY,s,.001,24,[{x:0,y:s},{x:1,y:a}]),sizeValueZ:xt(e.sizeValueZ===void 0?o:e.sizeValueZ,s,.001,24,[{x:0,y:s},{x:1,y:a}]),thickness:ve(we(e.thickness,it.mesh.thickness),.02,4),pivot:Mn(e.pivot,it.mesh.pivot,-10,10),flipWinding:e.flipWinding===!0,recomputeNormals:e.recomputeNormals===!0}}function rM(t,e,n){return xt(t.sizeValue,e,.001,24,[{x:0,y:e},{x:1,y:n}])}function ah(t){if(!vt(t))return null;const e=Sr(t.path,"");if(!e)return null;const n=sM(t.bounds);return{type:"mesh",id:Sr(t.id,e),path:e,...typeof t.name=="string"&&t.name.trim()?{name:t.name.trim()}:{},...n?{bounds:n}:{}}}function sM(t){return vt(t)?{min:Mn(t.min,[0,0,0],-1e5,1e5),max:Mn(t.max,[0,0,0],-1e5,1e5)}:null}function aM(t){const e=vt(t)?t:{},n=aa(e.start,it.color.start,0,1),i=aa(e.end,it.color.end,0,1),r=Ni(e.gradient,n,i),s=lM(r);return{start:s.start,end:s.end,gradient:r}}function xt(t,e,n,i,r,s=Mr){const a=vt(t)?t:{},o=Math.min(n,i),c=Math.max(n,i),l=o<0?0:o,u=Number.isFinite(s)&&s>0?s:Mr,h=Ei(we(a.editorMin,l),-u,u),d=Ei(we(a.editorMax,c),-u,u),f=Math.max(h+1e-6,d),p=dM(a.mode),x=Ei(we(t,we(a.value,e)),-u,u),g=Ei(we(a.min,x),-u,u),m=Ei(we(a.max,x),-u,u),S=yc(a.curve,r??[{x:0,y:x},{x:1,y:x}],u),A=yc(a.curveB,r??[{x:0,y:g},{x:1,y:m}],u),M=Ei(we(a.multiplier,1),-u,u),E=a.multiplier===1,v=(p==="curve"||p==="randomCurve")&&!E&&!(d===1)?pM(S,A,p,M,h,u):{curve:S,curveB:A,multiplier:M,editorMin:h,editorMax:f},b=hM(a.xAxis);return{mode:p,value:x,min:Math.min(g,m),max:Math.max(g,m),curve:v.curve,curveB:v.curveB,editorMin:v.editorMin,editorMax:v.editorMax,...v.multiplier!==1?{multiplier:v.multiplier}:{},...b!=="lifetime"?{xAxis:b}:{}}}function oM(t,e=64){const n=xM(e),i=new Float32Array(n),r=new Float32Array(n);for(let s=0;s<n;s++){const a=n<=1?0:s/(n-1);i[s]=fi(t.curve,a),r[s]=fi(t.curveB,a)}return{mode:t.mode,value:t.value,min:t.min,max:t.max,multiplier:t.multiplier??1,samples:n,curve:i,curveB:r}}function cM(t,e,n){const i=ve(n,0,1);if(t.mode==="random")return t.min+(t.max-t.min)*i;if(t.mode==="curve")return fo(t.curve,e)*t.multiplier;if(t.mode==="randomCurve"){const r=fo(t.curve,e),s=fo(t.curveB,e);return(r+(s-r)*i)*t.multiplier}return t.value}function hi(t){if(t.mode==="random")return(t.min+t.max)*.5;const e=t.multiplier??1;return t.mode==="curve"?fi(t.curve,0)*e:t.mode==="randomCurve"?(fi(t.curve,0)*.5+fi(t.curveB,0)*.5)*e:t.value}function Ni(t,e,n){const i=vt(t)?t:{},r=i.mode==="fixed"?"fixed":"blend",s=mM(i.colorStops,e,n),a=gM(i.alphaStops,e,n);return{mode:r,colorStops:s,alphaStops:a}}function lM(t){return{start:[...tn(t,0),nn(t,0)],end:[...tn(t,1),nn(t,1)]}}function tn(t,e,n=[1,1,1]){const i=t.colorStops;if(i.length===0)return n[0]=1,n[1]=1,n[2]=1,n;const r=ve(e,0,1);let s=i[0],a=i[0];for(let d=1;d<i.length;d++){const f=i[d];f.position<s.position&&(s=f),f.position>a.position&&(a=f)}let o=s,c=a;for(let d=0;d<i.length;d++){const f=i[d];f.position<=r&&f.position>=o.position&&(o=f),f.position>=r&&f.position<=c.position&&(c=f)}let l,u,h;if(t.mode==="fixed"||r<=s.position){const d=t.mode==="fixed"?o:s;l=d.color[0],u=d.color[1],h=d.color[2]}else if(r>=a.position)l=a.color[0],u=a.color[1],h=a.color[2];else{const d=(r-o.position)/Math.max(1e-6,c.position-o.position);l=fr(o.color[0],c.color[0],d),u=fr(o.color[1],c.color[1],d),h=fr(o.color[2],c.color[2],d)}return n[0]=l,n[1]=u,n[2]=h,n}function ho(t){const e=ve(t,0,1);return e<=.04045?e/12.92:((e+.055)/1.055)**2.4}function uM(t){const e=ve(t,0,1);return e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055}function fr(t,e,n){const i=ve(n,0,1);return uM(ho(t)+(ho(e)-ho(t))*i)}function oh(t,e,n){const i=ve(n,0,1);return[fr(t[0],e[0],i),fr(t[1],e[1],i),fr(t[2],e[2],i),t[3]+(e[3]-t[3])*i]}function nn(t,e){const n=t.alphaStops;if(n.length===0)return 1;const i=ve(e,0,1);let r=n[0],s=n[0];for(let l=1;l<n.length;l++){const u=n[l];u.position<r.position&&(r=u),u.position>s.position&&(s=u)}let a=r,o=s;for(let l=0;l<n.length;l++){const u=n[l];u.position<=i&&u.position>=a.position&&(a=u),u.position>=i&&u.position<=o.position&&(o=u)}if(t.mode==="fixed"||i<=r.position)return t.mode==="fixed"?a.alpha:r.alpha;if(i>=s.position)return s.alpha;const c=(i-a.position)/Math.max(1e-6,o.position-a.position);return a.alpha+(o.alpha-a.alpha)*c}function dM(t){return t==="random"||t==="curve"||t==="randomCurve"?t:"constant"}function hM(t){return t==="loopAge"?"loopAge":"lifetime"}function fM(t){return t==="loop"||t==="pingPong"||t==="burstSpread"?t:"random"}function pM(t,e,n,i,r,s=Mr){const a=n==="randomCurve"?[...t,...e]:t;let o=1/0,c=-1/0;for(const p of a)o=Math.min(o,p.y),c=Math.max(c,p.y);if(!Number.isFinite(o)||!Number.isFinite(c))return{curve:t,curveB:e,multiplier:i,editorMin:0,editorMax:1};let l=1,u=0;const h=1;o>=0?l=Math.max(1,c):c<=0?l=-Math.max(1,Math.abs(o)):(l=Math.max(1,Math.abs(o),Math.abs(c)),u=-1),u=Math.min(u,r/Math.abs(l||1));const d=Ei(i*l,-s,s),f=Math.abs(l)>1e-6&&l!==1;return{curve:f?t.map(p=>Pu(p,1/l,s)):t,curveB:f&&n==="randomCurve"?e.map(p=>Pu(p,1/l,s)):e,multiplier:d,editorMin:u,editorMax:h}}function mM(t,e,n){const i=[{position:0,color:[e[0],e[1],e[2]]},{position:1,color:[n[0],n[1],n[2]]}],s=(Array.isArray(t)&&t.length>0?t:i).map(a=>{if(vt(a))return{position:ve(we(a.position,0),0,1),color:Mn(a.color,i[0].color,0,1)}}).filter(a=>!!a).sort((a,o)=>a.position-o.position).slice(0,nh);return s.length===0?i:s}function gM(t,e,n){const i=[{position:0,alpha:e[3]},{position:1,alpha:n[3]}],s=(Array.isArray(t)&&t.length>0?t:i).map(a=>{if(vt(a))return{position:ve(we(a.position,0),0,1),alpha:ve(we(a.alpha,1),0,1)}}).filter(a=>!!a).sort((a,o)=>a.position-o.position).slice(0,nh);return s.length===0?i:s}function fo(t,e){if(t.length===0)return 0;if(t.length===1)return t[0]??0;const n=ve(e,0,1)*(t.length-1),i=Math.floor(n),r=Math.min(t.length-1,i+1),s=n-i,a=t[i]??0,o=t[r]??a;return a+(o-a)*s}function xM(t){return Math.round(ve(t,2,1024))}function vM(t,e,n,i){return Array.isArray(t)?[ve(we(t[0],e[0]),n,i),ve(we(t[1],e[1]),n,i)]:[...e]}function Mn(t,e,n,i){return Array.isArray(t)?[ve(we(t[0],e[0]),n,i),ve(we(t[1],e[1]),n,i),ve(we(t[2],e[2]),n,i)]:[...e]}function aa(t,e,n,i){return Array.isArray(t)?[ve(we(t[0],e[0]),n,i),ve(we(t[1],e[1]),n,i),ve(we(t[2],e[2]),n,i),ve(we(t[3],e[3]),n,i)]:[...e]}function ns(t,e){return Sr(t,e).trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||e}function Sr(t,e){return typeof t=="string"&&t.trim()?t.trim():e}function we(t,e){return typeof t=="number"&&Number.isFinite(t)?t:e}function Ei(t,e,n){return ve(Number.isFinite(t)?t:e,e,n)}function Wr(t){return Number.isFinite(t)?Math.max(0,t):0}function ve(t,e,n){return Math.min(n,Math.max(e,t))}function vt(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}var _M=class{constructor(t){Y(this,"state",t)}reset(t){this.state=t>>>0||2135587861}next(){return this.state=this.state*1664525+1013904223>>>0,this.state/4294967296}},Bu=class ch{constructor(e){Y(this,"capacity",e),Y(this,"instanceData"),Y(this,"particleIds"),Y(this,"nextParticleId",0),Y(this,"spawnLocalPositionData"),Y(this,"spawnDirectionData"),Y(this,"spawnOriginData"),Y(this,"runtimeFlagsData"),Y(this,"triggerFlagsData"),Y(this,"lastPosition",[0,0,0]),Y(this,"lastMoveVelocity",[0,0,0]),Y(this,"activeCount",0),Y(this,"emittedLastFrame",0),Y(this,"uploadBytesLastFrame",0),Y(this,"age",0),Y(this,"loopIndex",-1),Y(this,"loopRandom",.5),Y(this,"accumulator",0),Y(this,"distanceAccumulator",0),Y(this,"hasLastPosition",!1),Y(this,"hasPreviousEffectAge",!1),Y(this,"previousEffectAge",0),this.instanceData=new Float32Array(e*Wt),this.particleIds=new Float64Array(e),this.spawnLocalPositionData=new Float32Array(e*en),this.spawnDirectionData=new Float32Array(e*en),this.spawnOriginData=new Float32Array(e*en),this.runtimeFlagsData=new Uint8Array(e),this.triggerFlagsData=new Uint8Array(e)}reset(){this.nextParticleId=0,this.activeCount=0,this.emittedLastFrame=0,this.uploadBytesLastFrame=0,this.age=0,this.loopIndex=-1,this.loopRandom=.5,this.accumulator=0,this.distanceAccumulator=0,this.hasLastPosition=!1,this.lastMoveVelocity[0]=0,this.lastMoveVelocity[1]=0,this.lastMoveVelocity[2]=0,this.hasPreviousEffectAge=!1,this.previousEffectAge=0}cloneWithCapacity(e){const n=new ch(e),i=Math.min(this.activeCount,n.capacity);return n.instanceData.set(this.instanceData.subarray(0,i*Wt)),n.spawnLocalPositionData.set(this.spawnLocalPositionData.subarray(0,i*en)),n.spawnDirectionData.set(this.spawnDirectionData.subarray(0,i*en)),n.spawnOriginData.set(this.spawnOriginData.subarray(0,i*en)),n.runtimeFlagsData.set(this.runtimeFlagsData.subarray(0,i)),n.triggerFlagsData.set(this.triggerFlagsData.subarray(0,i)),n.particleIds.set(this.particleIds.subarray(0,i)),n.nextParticleId=this.nextParticleId,n.activeCount=i,n.emittedLastFrame=this.emittedLastFrame,n.uploadBytesLastFrame=this.uploadBytesLastFrame,n.age=this.age,n.loopIndex=this.loopIndex,n.loopRandom=this.loopRandom,n.accumulator=this.accumulator,n.distanceAccumulator=this.distanceAccumulator,n.hasLastPosition=this.hasLastPosition,n.lastPosition[0]=this.lastPosition[0],n.lastPosition[1]=this.lastPosition[1],n.lastPosition[2]=this.lastPosition[2],n.lastMoveVelocity[0]=this.lastMoveVelocity[0],n.lastMoveVelocity[1]=this.lastMoveVelocity[1],n.lastMoveVelocity[2]=this.lastMoveVelocity[2],n.hasPreviousEffectAge=this.hasPreviousEffectAge,n.previousEffectAge=this.previousEffectAge,n}compact(e,n){let i=0;for(;i<this.activeCount;){const r=i*Wt,s=this.instanceData[r+3]??0,a=this.instanceData[r+7]??0;if(e<=s+a){i++;continue}n==null||n(i,s+a),this.activeCount--,i!==this.activeCount&&(this.instanceData.copyWithin(r,this.activeCount*Wt,(this.activeCount+1)*Wt),this.copyRuntimeSidecars(this.activeCount,i))}}assignParticleId(e){this.particleIds[e]=++this.nextParticleId}copyRuntimeSidecars(e,n){this.particleIds[n]=this.particleIds[e];const i=e*en,r=n*en;this.spawnLocalPositionData[r+0]=this.spawnLocalPositionData[i+0],this.spawnLocalPositionData[r+1]=this.spawnLocalPositionData[i+1],this.spawnLocalPositionData[r+2]=this.spawnLocalPositionData[i+2],this.spawnDirectionData[r+0]=this.spawnDirectionData[i+0],this.spawnDirectionData[r+1]=this.spawnDirectionData[i+1],this.spawnDirectionData[r+2]=this.spawnDirectionData[i+2],this.spawnOriginData[r+0]=this.spawnOriginData[i+0],this.spawnOriginData[r+1]=this.spawnOriginData[i+1],this.spawnOriginData[r+2]=this.spawnOriginData[i+2],this.runtimeFlagsData[n]=this.runtimeFlagsData[e]??0,this.triggerFlagsData[n]=this.triggerFlagsData[e]??0}},MM=class{constructor(t,e={}){Y(this,"states"),Y(this,"events",[]),Y(this,"subEmitterRequests",[]),Y(this,"stats",{activeParticles:0,capacity:0,emittedLastFrame:0,uploadBytesLastFrame:0}),Y(this,"subEmitterDepth"),Y(this,"maxSubEmitterDepth"),Y(this,"maxEventsPerFrame"),Y(this,"maxSubEmitterRequestsPerFrame"),Y(this,"rng",new _M(2135587861)),Y(this,"effectDefinition"),Y(this,"position",[0,0,0]),Y(this,"spawnSample",DM()),Y(this,"emissionGeometries",new Map),Y(this,"runtimeParameterValues",{emissionRateMultiplier:1,initialVelocityMultiplier:1}),Y(this,"emitterRuntimeParameterValues",new Map),Y(this,"lastTimeSeconds",0),Y(this,"startedAt",0),Y(this,"active",!1),Y(this,"emissionAllowed",!0),this.subEmitterDepth=Math.max(0,Math.floor(we(e.subEmitterDepth,0))),this.maxSubEmitterDepth=Math.max(0,Math.floor(we(e.maxSubEmitterDepth,E_))),this.maxEventsPerFrame=Math.max(0,Math.floor(we(e.maxEventsPerFrame,S_))),this.maxSubEmitterRequestsPerFrame=Math.max(0,Math.floor(we(e.maxSubEmitterRequestsPerFrame,y_))),this.effectDefinition=new p_(t,P_),this.states=this.effect.emitters.map(n=>new Bu(n.maxParticles)),this.refreshCapacity()}get effect(){return this.effectDefinition.value}get definition(){return this.effect}get isActive(){return this.active}get runtimeParameters(){return this.runtimeParameterValues}reset(t,e,n,i=2135587861){this.effectDefinition.replace(t),this.position[0]=e[0],this.position[1]=e[1],this.position[2]=e[2],this.startedAt=n,this.lastTimeSeconds=n,this.active=!0,this.emissionAllowed=!0,this.clearFrameEvents(),this.rng.reset(i^dh(this.effect.id)),this.resizeStates();for(const r of this.states)r.reset();this.refreshCapacity()}setPosition(t){this.position[0]=t[0],this.position[1]=t[1],this.position[2]=t[2]}updateDefinition(t){this.effectDefinition.replace(t),this.resizeStates(),this.refreshCapacity()}allowCompletion(){this.emissionAllowed=!1}resumeEmission(){this.active&&(this.emissionAllowed=!0)}setEmissionGeometry(t,e){if(!e)return this.emissionGeometries.delete(t),!1;const n=RM(e);return n?(this.emissionGeometries.set(t,n),!0):(this.emissionGeometries.delete(t),!1)}getEmissionGeometry(t){return this.emissionGeometries.get(t)??null}setRuntimeParameters(t){t.emissionRateMultiplier!==void 0&&(this.runtimeParameterValues.emissionRateMultiplier=Wr(t.emissionRateMultiplier)),t.initialVelocityMultiplier!==void 0&&(this.runtimeParameterValues.initialVelocityMultiplier=Wr(t.initialVelocityMultiplier))}setEmitterRuntimeParameters(t,e){const n=this.emitterRuntimeParameterValues.get(t)??{emissionRateMultiplier:1,initialVelocityMultiplier:1};e.emissionRateMultiplier!==void 0&&(n.emissionRateMultiplier=Wr(e.emissionRateMultiplier)),e.initialVelocityMultiplier!==void 0&&(n.initialVelocityMultiplier=Wr(e.initialVelocityMultiplier)),this.emitterRuntimeParameterValues.set(t,n)}getEmitterRuntimeParameters(t){return this.emitterRuntimeParameterValues.get(t)??null}effectiveEmissionRateMultiplier(t){var e;return this.runtimeParameterValues.emissionRateMultiplier*(((e=this.emitterRuntimeParameterValues.get(t))==null?void 0:e.emissionRateMultiplier)??1)}effectiveInitialVelocityMultiplier(t){var e;return this.runtimeParameterValues.initialVelocityMultiplier*(((e=this.emitterRuntimeParameterValues.get(t))==null?void 0:e.initialVelocityMultiplier)??1)}emitBurst(t,e={}){if(!this.active)return 0;const n=this.effect.emitters.findIndex(u=>u.id===t);if(n<0)return 0;const i=this.effect.emitters[n],r=this.states[n];if(!i||!r||!i.enabled)return 0;const s=Math.max(1,Math.floor(we(e.count,1))),a=r.activeCount,o=this.position[0],c=this.position[1],l=this.position[2];return e.position&&(this.position[0]=e.position[0],this.position[1]=e.position[1],this.position[2]=e.position[2]),this.emitParticles(i,r,s,this.lastTimeSeconds),this.position[0]=o,this.position[1]=c,this.position[2]=l,r.activeCount-a}stop(){this.active=!1,this.clearFrameEvents();for(const t of this.states)t.reset();this.refreshStats()}update(t,e){if(this.clearFrameEvents(),this.lastTimeSeconds=e,!this.active)return!1;let n=!1,i=!0;for(let r=0;r<this.effect.emitters.length;r++){const s=this.effect.emitters[r],a=this.states[r];if(a.emittedLastFrame=0,a.uploadBytesLastFrame=0,this.recordParticleFrameEvents(s,a,r,t,e),a.compact(e,(l,u)=>this.recordParticleDeathEvent(s,a,r,l,u)),!s.enabled){n=n||a.activeCount>0;continue}const o=e-this.startedAt-Math.max(0,s.timeline.start);if(a.age=o,o<0){this.emissionAllowed&&(i=!1),n=n||a.activeCount>0;continue}const c=s.loop||a.age<=Math.max(.001,s.duration);c&&this.emissionAllowed?(i=!1,this.updateEmitter(s,a,t,e)):c&&this.advanceEmitterWithoutEmission(s,a,o),n=n||a.activeCount>0}return this.refreshStats(),i&&!n?(this.active=!1,!1):!0}advanceEmitterWithoutEmission(t,e,n){const i=Math.max(.001,t.duration);e.age=t.loop?n%i:n,e.previousEffectAge=Math.max(0,n),e.hasPreviousEffectAge=!0,e.lastPosition[0]=this.position[0],e.lastPosition[1]=this.position[1],e.lastPosition[2]=this.position[2],e.lastMoveVelocity[0]=0,e.lastMoveVelocity[1]=0,e.lastMoveVelocity[2]=0,e.hasLastPosition=!0}updateEmitter(t,e,n,i){const r=Math.max(.001,t.duration),s=Math.max(0,e.age),a=e.hasPreviousEffectAge?e.previousEffectAge:0,o=t.loop?Math.floor(s/r):0;o!==e.loopIndex&&(e.loopIndex=o,e.loopRandom=this.rng.next()),t.loop&&(e.age=s%r),this.emitDueBursts(t,e,a,s,i,r);const c=ve(e.age/r,0,1),l=this.effectiveEmissionRateMultiplier(t.id),u=Me(t.spawn.rateValue,c,e.loopRandom)*l,h=Me(t.spawn.rateOverDistanceValue,c,e.loopRandom)*l,d=e.hasLastPosition?this.position[0]-e.lastPosition[0]:0,f=e.hasLastPosition?this.position[1]-e.lastPosition[1]:0,p=e.hasLastPosition?this.position[2]-e.lastPosition[2]:0,x=Math.hypot(d,f,p),g=n>0?1/n:0;e.lastMoveVelocity[0]=d*g,e.lastMoveVelocity[1]=f*g,e.lastMoveVelocity[2]=p*g,e.lastPosition[0]=this.position[0],e.lastPosition[1]=this.position[1],e.lastPosition[2]=this.position[2],e.hasLastPosition=!0,e.accumulator+=Math.max(0,u)*Math.max(0,n),e.distanceAccumulator+=Math.max(0,h)*Math.max(0,x),e.distanceAccumulator>=1&&(e.accumulator+=Math.floor(e.distanceAccumulator),e.distanceAccumulator%=1);const m=Math.floor(e.accumulator);m>0&&(e.accumulator-=m,this.emitParticles(t,e,m,i)),e.previousEffectAge=s,e.hasPreviousEffectAge=!0}emitDueBursts(t,e,n,i,r,s){if(i<n)return;const a=t.loop?Math.max(0,Math.floor(n/s)):0,o=t.loop?Math.max(0,Math.floor(i/s)):0,c=Math.max(a,o-M_+1);for(let l=c;l<=o;l++){for(const u of t.spawn.bursts)this.emitScheduleIfDue(t,e,u,n,i,r,s,l);if(!t.loop)break}}emitScheduleIfDue(t,e,n,i,r,s,a,o){const c=t.loop?o*a:0;for(let l=0;l<n.cycles;l++){const u=n.time+n.interval*l;if(u>a&&!t.loop)break;if(u>a)continue;const h=c+u;wM(h,i,r,e)&&(n.probability<=0||n.probability<1&&this.rng.next()>n.probability||this.emitParticles(t,e,n.count,s))}}emitParticles(t,e,n,i){const r=Math.min(n,e.capacity-e.activeCount);for(let s=0;s<r;s++)this.emitParticle(t,e,i,s,r);e.emittedLastFrame+=r}emitParticle(t,e,n,i,r){const s=e.activeCount*Wt,a=t.spawn,o=ve(e.age/Math.max(.001,t.duration),0,1),c=this.spawnSample;IM(a,this.rng,o,i,r,c,a.shape==="mesh"?this.emissionGeometries.get(t.id)??null:null);const l=a.simulationSpace==="local",u=(l?0:this.position[0])+c.position[0],h=(l?0:this.position[1])+c.position[1],d=(l?0:this.position[2])+c.position[2],f=t.initializeParticle;let p=Math.max(.001,Me(f.lifetime,o,this.rng.next()));const x=f.velocity;let g=0,m=0,S=0;if(x.mode==="vector")g=mo(this.rng,x.min[0],x.max[0]),m=mo(this.rng,x.min[1],x.max[1]),S=mo(this.rng,x.min[2],x.max[2]);else{const H=Math.max(0,Me(x.speed,o,ai(x.speed,this.rng)));g=c.direction[0]*H,m=c.direction[1]*H,S=c.direction[2]*H}if(t.modules.inheritVelocity){const H=Me(t.advanced.inheritVelocity.multiplier,o,this.rng.next()),N=[...e.lastMoveVelocity];l&&bc(a,N),g+=N[0]*H,m+=N[1]*H,S+=N[2]*H}if(t.modules.limitVelocityOverLifetime){const H=t.advanced.limitVelocityOverLifetime,N=H.dampen,q=Me(H.drag,o,this.rng.next()),B=H.multiplyBySize&&t.modules.size?Math.max(.001,Me(t.mode==="billboard"?t.billboard.sizeValue:t.mesh.sizeValue,o,this.rng.next())):1;if(H.separateAxes)g=go(g,Me(H.x,o,this.rng.next())*B,N),m=go(m,Me(H.y,o,this.rng.next())*B,N),S=go(S,Me(H.z,o,this.rng.next())*B,N);else{const G=Me(H.speed,o,this.rng.next())*B,Q=Math.hypot(g,m,S);if(Q>Math.max(0,G)){const j=(Math.max(0,G)+(Q-Math.max(0,G))*(1-N))/Math.max(1e-6,Q);g*=j,m*=j,S*=j}}if(q>0){const G=Math.max(0,1-q*.05);g*=G,m*=G,S*=G}}if(t.modules.lifetimeByEmitterSpeed){const H=pa(t.advanced.lifetimeByEmitterSpeed.speedRange,Math.hypot(g,m,S));p=Math.max(.001,p*Me(t.advanced.lifetimeByEmitterSpeed.multiplier,H,this.rng.next()))}const A=e.activeCount,M=A*en;e.spawnLocalPositionData[M+0]=c.position[0],e.spawnLocalPositionData[M+1]=c.position[1],e.spawnLocalPositionData[M+2]=c.position[2],e.spawnOriginData[M+0]=this.position[0],e.spawnOriginData[M+1]=this.position[1],e.spawnOriginData[M+2]=this.position[2],CM(e.spawnDirectionData,M,g,m,S,c.direction),e.runtimeFlagsData[A]=(a.simulationSpace==="local"?th:0)|(a.alignToDirection||t.render.alignAxis==="spawnDirection"?v_:0),e.instanceData[s+0]=u,e.instanceData[s+1]=h,e.instanceData[s+2]=d,e.instanceData[s+3]=n,e.instanceData[s+4]=g,e.instanceData[s+5]=m,e.instanceData[s+6]=S,e.instanceData[s+7]=p,e.instanceData[s+8]=this.rng.next();const E=this.rng.next(),T=t.mode==="mesh"||f.startRotationSeparateAxes,C=T?Me(f.rotation3D.x,o,E):0,v=T?Me(f.rotation3D.y,o,E):0,b=Me(T?f.rotation3D.z:f.rotation,o,E);e.instanceData[s+9]=b,e.instanceData[s+13]=C,e.instanceData[s+14]=v;const R=this.rng.next(),P=f.angularVelocitySeparateAxes?Me(f.angularVelocity3D.x,o,R):0,D=f.angularVelocitySeparateAxes?Me(f.angularVelocity3D.y,o,R):0,L=f.angularVelocitySeparateAxes?Me(f.angularVelocity3D.z,o,R):Me(f.angularVelocity,o,R);if(e.instanceData[s+10]=t.modules.rotation?L:0,e.instanceData[s+15]=t.modules.rotation?P:0,e.instanceData[s+16]=t.modules.rotation?D:0,t.mode==="mesh"){const H=ai(f.size3D.x,this.rng),N=ai(f.size3D.y,this.rng),q=ai(f.size3D.z,this.rng);e.instanceData[s+11]=Math.max(0,Me(f.size3D.x,o,H)),e.instanceData[s+12]=Math.max(0,Me(f.size3D.y,o,N)),e.instanceData[s+17]=Math.max(0,Me(f.size3D.z,o,q))}else if(f.startSizeSeparateAxes){const H=ai(f.size3D.x,this.rng),N=ai(f.size3D.y,this.rng);e.instanceData[s+11]=Math.max(0,Me(f.size3D.x,o,H)),e.instanceData[s+12]=Math.max(0,Me(f.size3D.y,o,N)),e.instanceData[s+17]=e.instanceData[s+11]}else{const H=Math.max(0,Me(f.size,o,ai(f.size,this.rng)));e.instanceData[s+11]=H,e.instanceData[s+12]=H,e.instanceData[s+17]=H}e.assignParticleId(A),e.activeCount++,this.recordParticleBirthEvent(t,e,Math.max(0,this.effect.emitters.indexOf(t)),A,n)}clearFrameEvents(){this.events.length=0,this.subEmitterRequests.length=0}recordParticleFrameEvents(t,e,n,i,r){if(e.activeCount<=0||!t.modules.triggers&&!t.modules.subEmitters&&!t.modules.collision)return;const s=r-Math.max(0,i);for(let a=0;a<e.activeCount;a++)this.recordNormalizedTimeEventIfDue(t,e,n,a,s,r),this.recordCollisionEventIfDue(t,e,n,a,s,r)}recordParticleBirthEvent(t,e,n,i,r){const s=this.createParticleEvent("birth",t,e,n,i,r,0,0,t.advanced.triggers.birthEvent);if(t.modules.triggers&&s.eventName&&this.pushParticleEvent(s),this.queueSubEmitterRequest(s,e,t.advanced.subEmitters.birth),t.modules.triggers&&t.advanced.triggers.normalizedTime<=0){e.triggerFlagsData[i]|=Ur;const a={...s,kind:"normalizedTime",eventName:"normalized-time"};this.pushParticleEvent(a)}}recordParticleDeathEvent(t,e,n,i,r){const s=i*Wt,a=e.instanceData[s+3]??r,o=Math.max(.001,e.instanceData[s+7]??.001),c=this.createParticleEvent("death",t,e,n,i,r,Math.max(0,r-a),1,t.advanced.triggers.deathEvent);t.modules.triggers&&c.eventName&&this.pushParticleEvent(c),t.modules.triggers&&t.advanced.triggers.normalizedTime>=1&&(e.triggerFlagsData[i]&Ur)===0&&(e.triggerFlagsData[i]|=Ur,this.pushParticleEvent({...c,kind:"normalizedTime",eventName:"normalized-time",particleAge:o,normalizedAge:1})),this.queueSubEmitterRequest(c,e,t.advanced.subEmitters.death)}recordNormalizedTimeEventIfDue(t,e,n,i,r,s){if(!t.modules.triggers)return;const a=t.advanced.triggers.normalizedTime;if(a<=0||a>=1)return;const o=e.triggerFlagsData[i]??0;if(t.advanced.triggers.oneShot&&o&Ur)return;const c=i*Wt,l=e.instanceData[c+3]??0,u=Math.max(.001,e.instanceData[c+7]??.001),h=ve((r-l)/u,0,1),d=ve((s-l)/u,0,1);if(!(t.advanced.triggers.oneShot||h<a?h<a-qr&&d+qr>=a:d+qr>=a))return;e.triggerFlagsData[i]|=Ur;const p=l+u*a,x=this.createParticleEvent("normalizedTime",t,e,n,i,p,u*a,a,"normalized-time");this.pushParticleEvent(x)}recordCollisionEventIfDue(t,e,n,i,r,s){if(!t.modules.collision)return;const a=t.advanced.collision;if(a.mode!=="plane")return;const o=t.modules.subEmitters&&!!t.advanced.subEmitters.collision.effectFile;if(!t.modules.triggers&&!o||(e.triggerFlagsData[i]??0)&Ou)return;const c=i*Wt,l=e.instanceData[c+3]??0,u=Math.max(.001,e.instanceData[c+7]??.001),h=ve(r-l,0,u),d=ve(s-l,0,u);if(d<=0)return;const f=po(t,e,i,h,h/u,this.position),p=po(t,e,i,d,d/u,this.position),x=a.planeY+a.radius;if(!(f[1]>=x&&p[1]<x))return;e.triggerFlagsData[i]|=Ou;const g=this.createParticleEvent("collision",t,e,n,i,s,d,d/u,"collision");t.modules.triggers&&this.pushParticleEvent(g),this.queueSubEmitterRequest(g,e,t.advanced.subEmitters.collision)}createParticleEvent(t,e,n,i,r,s,a,o,c){const l=r*Wt,u=n.instanceData[l+8]??0;return{kind:t,eventName:c,effectId:this.effect.id,emitterId:e.id,emitterIndex:i,particleIndex:r,particleSeed:u,timeSeconds:s,effectAge:Math.max(0,s-this.startedAt),particleAge:a,normalizedAge:ve(o,0,1),position:po(e,n,r,a,o,this.position),velocity:EM(e,n,r,a,o,this.position)}}pushParticleEvent(t){this.events.length>=this.maxEventsPerFrame||this.events.push(t)}queueSubEmitterRequest(t,e,n){const i=this.effect.emitters[t.emitterIndex];i!=null&&i.modules.subEmitters&&(!n.effectFile||this.subEmitterDepth>=this.maxSubEmitterDepth||this.subEmitterRequests.length>=this.maxSubEmitterRequestsPerFrame||n.probability<=0||AM(t,n.effectFile)>n.probability||this.subEmitterRequests.push({hook:t.kind,effectFile:n.effectFile,sourceEffectId:t.effectId,sourceEmitterId:t.emitterId,sourceEmitterIndex:t.emitterIndex,sourceParticleIndex:t.particleIndex,sourceParticleSeed:t.particleSeed,timeSeconds:t.timeSeconds,position:[...t.position],velocity:[...t.velocity],normalizedAge:t.normalizedAge,inheritColor:n.inheritColor,inheritSize:n.inheritSize,inheritedColor:n.inheritColor?bM(i,t.normalizedAge):null,inheritedSize:n.inheritSize?TM(i,e,t.particleIndex,t.normalizedAge):null,depth:this.subEmitterDepth,nextDepth:this.subEmitterDepth+1,maxDepth:this.maxSubEmitterDepth}))}resizeStates(){for(;this.states.length<this.effect.emitters.length;){const t=this.effect.emitters[this.states.length];this.states.push(new Bu(t.maxParticles))}for(let t=0;t<this.effect.emitters.length;t++){const e=this.effect.emitters[t],n=this.states[t];n.capacity!==e.maxParticles&&(this.states[t]=n.cloneWithCapacity(e.maxParticles))}this.states.length=this.effect.emitters.length}refreshStats(){let t=0,e=0,n=0;for(const i of this.states)t+=i.activeCount,e+=i.emittedLastFrame,n+=i.uploadBytesLastFrame;this.stats.activeParticles=t,this.stats.emittedLastFrame=e,this.stats.uploadBytesLastFrame=n}refreshCapacity(){let t=0;for(const e of this.states)t+=e.capacity;this.stats.capacity=t}};function SM(t,e){return ve(e.age/Math.max(.001,t.duration),0,1)}function lh(t,e,n,i,r,s,a={position:[0,0,0],velocity:[0,0,0]},o=1){return tl(t,e,n,i,r,s,a,o),ga(t,e,n,a.position,a.velocity,s),a}function tl(t,e,n,i,r,s,a={position:[0,0,0],velocity:[0,0,0]},o=1){const c=n*Wt,l=SM(t,e),u=e.instanceData[c+8]??.5,h=t.modules.velocity?Me(t.forces.dragValue,r,u,l):0,d=t.modules.velocity?Me(t.forces.gravityValue,r,u,l):0,f=Math.max(0,1-Math.max(0,h)*i),p=Wr(o),x=(e.instanceData[c+4]??0)*p,g=(e.instanceData[c+5]??0)*p,m=(e.instanceData[c+6]??0)*p,S=t.advanced.velocityOverLifetime.speedModifier,A=t.modules.velocityOverLifetime?Me(S,r,u,l):1,M=t.modules.velocityOverLifetime?h_(S,r,u,l):1,E=a.velocity;E[0]=x*A,E[1]=g*A-d*i*2,E[2]=m*A;const T=a.position;return T[0]=(e.instanceData[c+0]??0)+x*i*f*M,T[1]=(e.instanceData[c+1]??0)+g*i*f*M-d*i*i,T[2]=(e.instanceData[c+2]??0)+m*i*f*M,t.modules.velocityOverLifetime&&yM(t,e,n,i,r,l,u,A,M,T,E,s,a.scratchA??[0,0,0],a.scratchB??[0,0,0]),a}function is(t,e){return((t.runtimeFlagsData[e]??0)&th)!==0}function Yr(t,e,n,i){if(!is(e,n))return;const{scale:r,rotation:s}=t.spawn;ci(i[0]*r[0],i[1]*r[1],i[2]*r[2],s,i)}function bc(t,e){uh(e,t.rotation,e);for(let n=0;n<3;n++)e[n]=t.scale[n]>1e-6?e[n]/t.scale[n]:0}function uh(t,e,n){const[i,r,s]=e.map(pr),a=Math.cos(s),o=Math.sin(s),c=t[0]*a+t[1]*o,l=-t[0]*o+t[1]*a,u=Math.cos(r),h=Math.sin(r),d=c*u+t[2]*h,f=-c*h+t[2]*u,p=Math.cos(i),x=Math.sin(i);n[0]=d,n[1]=l*p+f*x,n[2]=-l*x+f*p}function ga(t,e,n,i,r,s){if(!is(e,n))return;Yr(t,e,n,i),Yr(t,e,n,r);const a=n*en;for(let o=0;o<3;o++)i[o]+=t.spawn.position[o]+((s==null?void 0:s[o])??e.spawnOriginData[a+o]??0)}function yM(t,e,n,i,r,s,a,o,c,l,u,h,d=[0,0,0],f=[0,0,0]){const p=t.advanced.velocityOverLifetime,x=is(e,n)&&p.space==="world";x&&ga(t,e,n,l,u,h);const g=is(e,n)&&!x,m=p.space==="local"&&!g,S=d;S[0]=Me(p.linear.x,r,a,s),S[1]=Me(p.linear.y,r,a,s),S[2]=Me(p.linear.z,r,a,s);const A=f;m?ci(S[0],S[1],S[2],t.spawn.rotation,A):(A[0]=S[0],A[1]=S[1],A[2]=S[2]),u[0]+=A[0]*o,u[1]+=A[1]*o,u[2]+=A[2]*o,l[0]+=A[0]*i*c,l[1]+=A[1]*i*c,l[2]+=A[2]*i*c;const M=n*en,E=g?0:m?(h==null?void 0:h[0])??e.spawnOriginData[M+0]??0:e.spawnOriginData[M+0]??0,T=g?0:m?(h==null?void 0:h[1])??e.spawnOriginData[M+1]??0:e.spawnOriginData[M+1]??0,C=g?0:m?(h==null?void 0:h[2])??e.spawnOriginData[M+2]??0:e.spawnOriginData[M+2]??0,v=d;v[0]=Me(p.orbitalOffset.x,r,a,s),v[1]=Me(p.orbitalOffset.y,r,a,s),v[2]=Me(p.orbitalOffset.z,r,a,s);const b=f;m?ci(v[0],v[1],v[2],t.spawn.rotation,b):(b[0]=v[0],b[1]=v[1],b[2]=v[2]);const R=E+b[0],P=T+b[1],D=C+b[2],L=Me(p.orbital.x,r,a,s),H=Me(p.orbital.y,r,a,s),N=Me(p.orbital.z,r,a,s);if(L!==0||H!==0||N!==0){g||ci(v[0]*t.spawn.scale[0],v[1]*t.spawn.scale[1],v[2]*t.spawn.scale[2],t.spawn.rotation,b);const B=g?b[0]:((h==null?void 0:h[0])??e.spawnOriginData[M]??0)+t.spawn.position[0]+b[0],G=g?b[1]:((h==null?void 0:h[1])??e.spawnOriginData[M+1]??0)+t.spawn.position[1]+b[1],Q=g?b[2]:((h==null?void 0:h[2])??e.spawnOriginData[M+2]??0)+t.spawn.position[2]+b[2];d[0]=l[0]-B,d[1]=l[1]-G,d[2]=l[2]-Q,m&&uh(d,t.spawn.rotation,d);let[ne,j,re]=d,Oe=H*re-N*j,We=N*ne-L*re,Fe=L*j-H*ne;const Z=L*i*c,se=Math.cos(Z),V=Math.sin(Z);let ge=j*se-re*V;const Ee=j*V+re*se;j=ge,re=Ee;const Se=H*i*c,tt=Math.cos(Se),Ge=Math.sin(Se),nt=ne*tt+re*Ge,Ye=-ne*Ge+re*tt;ne=nt,re=Ye;const $e=N*i*c,Mt=Math.cos($e),St=Math.sin($e),wt=ne*Mt-j*St;ge=ne*St+j*Mt,ne=wt,j=ge,m&&(ci(ne,j,re,t.spawn.rotation,d),[ne,j,re]=d,ci(Oe,We,Fe,t.spawn.rotation,f),[Oe,We,Fe]=f),l[0]=B+ne,l[1]=G+j,l[2]=Q+re,u[0]+=Oe*o,u[1]+=We*o,u[2]+=Fe*o}const q=Me(p.radial,r,a,s);if(q!==0){const B=l[0]-R,G=l[1]-P,Q=l[2]-D,ne=Math.hypot(B,G,Q);if(ne>1e-6){const j=1/ne,re=B*j,Oe=G*j,We=Q*j;l[0]+=re*q*i*c,l[1]+=Oe*q*i*c,l[2]+=We*q*i*c,u[0]+=re*q*o,u[1]+=Oe*q*o,u[2]+=We*q*o}}if(x){const B=n*en;for(let G=0;G<3;G++)l[G]-=t.spawn.position[G]+((h==null?void 0:h[G])??e.spawnOriginData[B+G]??0);bc(t.spawn,l),bc(t.spawn,u)}}function po(t,e,n,i,r,s){return lh(t,e,n,i,r,s).position}function EM(t,e,n,i,r,s){return lh(t,e,n,i,r,s).velocity}function bM(t,e){return t.modules.color?[...tn(t.color.gradient,e),nn(t.color.gradient,e)]:[1,1,1,1]}function TM(t,e,n,i){const r=n*Wt,s=Math.max(0,e.instanceData[r+11]??1);if(!t.modules.size)return s;const a=t.mode==="billboard"?t.billboard.sizeValue:t.mesh.sizeValue;return s*Math.max(0,Me(a,i,.5))}function AM(t,e){const n=Math.floor(t.particleSeed*4294967295)^dh(`${t.kind}:${e}:${t.effectId}:${t.emitterId}:${t.particleIndex}`);return(Math.imul(n>>>0,1664525)+1013904223>>>0)/4294967296}function mo(t,e,n){return e+(n-e)*t.next()}function go(t,e,n){const i=Math.max(0,e),r=Math.abs(t);if(r<=i)return t;const s=i+(r-i)*(1-n);return Math.sign(t)*s}function wM(t,e,n,i){return Number.isFinite(t)?!i.hasPreviousEffectAge&&t===0?n>=0:t>e+qr&&t<=n+qr:!1}function CM(t,e,n,i,r,s){let a=n,o=i,c=r;Math.hypot(a,o,c)<=1e-6&&(a=s[0],o=s[1],c=s[2]);const u=Math.hypot(a,o,c);if(u<=1e-6){t[e+0]=0,t[e+1]=1,t[e+2]=0;return}const h=1/u;t[e+0]=a*h,t[e+1]=o*h,t[e+2]=c*h}function RM(t){const e=t.positions,n=Math.floor(e.length/3);if(n<1)return null;const i=new Float32Array(n*3);for(let u=0;u<i.length;u++)i[u]=e[u];let r=null;if(t.normals&&t.normals.length>=n*3){r=new Float32Array(n*3);for(let u=0;u<r.length;u++)r[u]=t.normals[u]}let s=null;if(t.indices&&t.indices.length>=3){const u=t.indices.length-t.indices.length%3;s=new Uint32Array(u);for(let h=0;h<u;h++){const d=Math.floor(t.indices[h]);if(d<0||d>=n)return null;s[h]=d}}else if(n>=3){const u=n-n%3;s=new Uint32Array(u);for(let h=0;h<u;h++)s[h]=h}const a=s?s.length/3:0,o=new Float32Array(a),c=a>0&&!r?new Float32Array(a*3):null;let l=0;for(let u=0;u<a;u++){const h=s[u*3+0]*3,d=s[u*3+1]*3,f=s[u*3+2]*3,p=i[d+0]-i[h+0],x=i[d+1]-i[h+1],g=i[d+2]-i[h+2],m=i[f+0]-i[h+0],S=i[f+1]-i[h+1],A=i[f+2]-i[h+2],M=x*A-g*S,E=g*m-p*A,T=p*S-x*m,C=Math.hypot(M,E,T);if(l+=C*.5,o[u]=l,c){const v=C>1e-6?1/C:0;c[u*3+0]=M*v,c[u*3+1]=E*v,c[u*3+2]=T*v}}return{positions:i,normals:r,indices:s,faceNormals:c,triangleCdf:o,totalArea:l,vertexCount:n,triangleCount:a}}function PM(t,e,n,i,r){if(!(e==="surface"&&t.triangleCount>0&&t.totalArea>1e-6)){const S=Math.min(t.vertexCount-1,Math.floor(n.next()*t.vertexCount));i[0]=t.positions[S*3+0],i[1]=t.positions[S*3+1],i[2]=t.positions[S*3+2],t.normals&&(r[0]=t.normals[S*3+0],r[1]=t.normals[S*3+1],r[2]=t.normals[S*3+2]);return}const a=n.next()*t.totalArea;let o=0,c=t.triangleCount-1;for(;o<c;){const S=o+c>>1;t.triangleCdf[S]<a?o=S+1:c=S}const l=o,u=t.indices[l*3+0]*3,h=t.indices[l*3+1]*3,d=t.indices[l*3+2]*3;let f=n.next(),p=n.next();f+p>1&&(f=1-f,p=1-p);const x=1-f-p,g=t.positions;i[0]=g[u]*x+g[h]*f+g[d]*p,i[1]=g[u+1]*x+g[h+1]*f+g[d+1]*p,i[2]=g[u+2]*x+g[h+2]*f+g[d+2]*p;const m=t.normals;m?(r[0]=m[u]*x+m[h]*f+m[d]*p,r[1]=m[u+1]*x+m[h+1]*f+m[d+1]*p,r[2]=m[u+2]*x+m[h+2]*f+m[d+2]*p):t.faceNormals&&(r[0]=t.faceNormals[l*3+0],r[1]=t.faceNormals[l*3+1],r[2]=t.faceNormals[l*3+2])}function DM(){return{position:[0,0,0],direction:[0,1,0]}}var Si=[0,0,0],An=[0,1,0];function IM(t,e,n,i,r,s,a=null){const o=Math.max(0,Me(t.radiusValue,n,ai(t.radiusValue,e))),c=LM(t,e,n,i,r),l=Math.cos(c),u=Math.sin(c);let h=0,d=0,f=0,p=0,x=1,g=0;if(t.shape==="circle"){const M=xo(o,t.radiusThickness,e);h=l*M,f=u*M}else if(t.shape==="box")h=(e.next()-.5)*t.box[0],d=(e.next()-.5)*t.box[1],f=(e.next()-.5)*t.box[2];else if(t.shape==="cone"){const M=Math.max(0,t.length),E=t.emitFrom==="volume"&&M>0?e.next():0;d=M*E;const T=o*(1-E),C=xo(T,t.radiusThickness,e),v=T>1e-6?C/T:0,b=pr(t.angle)*v,R=Math.sin(b);h=l*C,f=u*C,p=l*R,x=Math.cos(b),g=u*R}else if(t.shape==="mesh"){if(a&&a.vertexCount>0){Si[0]=0,Si[1]=0,Si[2]=0,An[0]=0,An[1]=1,An[2]=0,PM(a,t.meshEmitFrom,e,Si,An),h=Si[0],d=Si[1],f=Si[2];const M=Math.hypot(An[0],An[1],An[2]);if(M>1e-6){const E=1/M;p=An[0]*E,x=An[1]*E,g=An[2]*E}}}else if(t.shape==="sphere"||t.shape==="hemisphere"){const M=t.shape==="hemisphere"?e.next():e.next()*2-1,E=Math.sqrt(Math.max(0,1-M*M)),T=l*E,C=M,v=u*E,b=xo(o,t.radiusThickness,e);h=T*b,d=C*b,f=v*b,p=T,x=C,g=v}const m=ve(t.sphericalDirectionAmount,0,1);if(m>0){let M=p,E=x,T=g;const C=Math.hypot(h,d,f);if(C>1e-6){const D=1/C;M=h*D,E=d*D,T=f*D}const v=p+(M-p)*m,b=x+(E-x)*m,R=g+(T-g)*m,P=Math.hypot(v,b,R);if(P>1e-6){const D=1/P;p=v*D,x=b*D,g=R*D}}const S=ve(t.randomDirectionAmount,0,1);if(S>0){const M=e.next()*2-1,E=e.next()*ct,T=Math.sqrt(Math.max(0,1-M*M)),C=Math.cos(E)*T,v=Math.sin(E)*T,b=p+(C-p)*S,R=x+(M-x)*S,P=g+(v-g)*S,D=Math.hypot(b,R,P);if(D>1e-6){const L=1/D;p=b*L,x=R*L,g=P*L}}const A=Math.max(0,t.randomPositionAmount);if(A>0){const M=e.next()*2-1,E=e.next()*ct,T=Math.sqrt(Math.max(0,1-M*M)),C=Math.cbrt(e.next())*A;h+=Math.cos(E)*T*C,d+=M*C,f+=Math.sin(E)*T*C}if(t.simulationSpace==="local"){s.position[0]=h,s.position[1]=d,s.position[2]=f,s.direction[0]=p,s.direction[1]=x,s.direction[2]=g,Vu(s.direction,0,1,0);return}ci(h*t.scale[0],d*t.scale[1],f*t.scale[2],t.rotation,s.position),s.position[0]+=t.position[0],s.position[1]+=t.position[1],s.position[2]+=t.position[2],ci(p,x,g,t.rotation,s.direction),Vu(s.direction,0,1,0)}function LM(t,e,n,i,r){const s=ve(t.arc,0,360),a=s>=359.999,o=Me(t.arcSpeedValue,n,.5)*n,c=s>1e-6?o/s:0;let l;if(t.arcMode==="loop")l=Tc(n+c,1);else if(t.arcMode==="pingPong")l=FM(n+c);else if(t.arcMode==="burstSpread")if(r<=1)l=.5;else{const d=a?r:r-1;l=i/Math.max(1,d)}else l=e.next();const u=ve(t.arcSpread,0,1);if(u>0){const d=Math.max(1,Math.round(1/u));l=Math.round(l*d)/d}const h=t.arcMode==="random"||t.arcMode==="burstSpread"?o:0;return pr(Tc(s*ve(l,0,1)+h,360))}function xo(t,e,n){const i=Math.max(0,t),r=ve(e,0,1);if(i<=0||r<=0)return i;const s=i*(1-r);return Math.sqrt(s*s+(i*i-s*s)*n.next())}function ai(t,e){return t.mode==="random"||t.mode==="randomCurve"?e.next():.5}function ci(t,e,n,i,r){const s=pr(i[0]),a=Math.cos(s),o=Math.sin(s),c=e*a-n*o,l=e*o+n*a,u=pr(i[1]),h=Math.cos(u),d=Math.sin(u),f=t*h-l*d,p=t*d+l*h,x=pr(i[2]),g=Math.cos(x),m=Math.sin(x);r[0]=f*g-c*m,r[1]=f*m+c*g,r[2]=p}function Vu(t,e,n,i){const r=Math.hypot(t[0],t[1],t[2]);if(r<=1e-6){t[0]=e,t[1]=n,t[2]=i;return}const s=1/r;t[0]*=s,t[1]*=s,t[2]*=s}function pr(t){return t*Math.PI/180}function Tc(t,e){return(t%e+e)%e}function FM(t){const e=Tc(t*2,2);return e<=1?e:2-e}function dh(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}var NM="MainTex",hh=["normal","roughness","metallic"],UM=.62,OM=0,BM=["Param1","Param2","Param3","Param4"],VM=["param","constant","time","textureSample","particleSubUV","uv","tilingOffset","polarCoordinates","rotateUV","panner","multiply","add","subtract","divide","lerp","oneMinus","clamp","step","smoothstep","power","min","max","remap","split","combine","swizzle","desaturate","fresnel","fresnelTrue","sphereMask","twoSidedSign","abs","frac","floor","ceil","round","sign","sqrt","length","normalize","dot","sine","cosine","if","noise","vectorNoise","particleMacroUV","antialiasedTextureMask","sphericalParticleOpacity","gradientRamp","dynamicParameter","particleColor","particleRelativeTime","particleSpeed","particleRandom","particleSize","particleDirection","particlePosition","sceneWorldNormal","sceneWorldPosition","sceneViewDirection","mainLightDirection","mainLightColor","sceneAmbientColor","sceneDiffuseLighting","unpackNormal","subgraph","output"],nl=new Set(["fresnelTrue","sceneWorldNormal","sceneWorldPosition","sceneViewDirection","mainLightDirection","mainLightColor","sceneAmbientColor","sceneDiffuseLighting"]);new Set(VM);var fh=.333;function zM(t){switch(t){case"float":return 0;case"vec2":return[0,0,0,0];case"vec3":return[0,0,0,0];case"color":return[1,1,1,1];case"texture":return"";case"bool":return!1}}function GM(t,e,n){switch(t){case"float":return ae(e,n);case"vec2":case"vec3":case"color":{const i=Array.isArray(n)?n:zM(t),[r,s]=t==="color"?[0,1]:[-1e5,1e5];return Zd(e,i,r,s)}case"texture":return typeof e=="string"?e:n;case"bool":return typeof e=="boolean"?e:n}}function yr(t){return t==="masked"||t==="opaque"}function ls(t,e){return e==="normal"?"alpha":e==="add"?"additive":e??t}function HM(t){return BM.every((e,n)=>(t==null?void 0:t[n])===e)}function Hi(t,e,n){var r;const i=t.params.find(s=>s.name===n);if(i)return il(i)&&((r=e.mainTex)!=null&&r.path)?e.mainTex.path:Object.prototype.hasOwnProperty.call(e.paramOverrides,n)?GM(i.type,e.paramOverrides[n],i.default):i.default}function il(t){return t.type==="texture"&&(t.builtinRole==="mainTex"||t.name===NM)}function kM(t,e){var i;if(!e)return"";if((i=e.mainTex)!=null&&i.path)return e.mainTex.path;const n=t==null?void 0:t.params.find(il);return typeof(n==null?void 0:n.default)=="string"?n.default:""}function rl(t,e,n,i,r){const s=n.inputs.tex;if(s){const o=r.get(s),c=o?i.get(o.source):void 0;if((c==null?void 0:c.type)==="param"){const l=typeof c.params.name=="string"?c.params.name:"",u=t.params.find(h=>h.name===l);if((u==null?void 0:u.type)==="texture"){const h=il(u),d=Hi(t,e,l);return{path:typeof d=="string"?d:"",isMainTex:h}}}}const a=n.params.tex;return{path:typeof a=="string"?a:"",isMainTex:!1}}function WM(t){const e={name:t.name,type:t.type,group:t.group,default:t.default};return t.inputId!==void 0&&(e.inputId=t.inputId),t.scope!=="per-material"&&(e.scope=t.scope),t.sliderMin!==void 0&&(e.sliderMin=t.sliderMin),t.sliderMax!==void 0&&(e.sliderMax=t.sliderMax),t.clampMin!==void 0&&(e.clampMin=t.clampMin),t.clampMax!==void 0&&(e.clampMax=t.clampMax),t.perParticle&&(e.perParticle=!0),t.perParticleFeed&&(e.perParticleFeed=t.perParticleFeed),t.builtinRole&&(e.builtinRole=t.builtinRole),e}function ph(t){const e={id:t.id,name:t.name,blend:t.blend,nodes:t.nodes,edges:t.edges,params:t.params.map(WM),outputs:t.outputs};return HM(t.dynamicChannelLabels)||(e.dynamicChannelLabels=t.dynamicChannelLabels),t.opacityMaskClipValue!==void 0&&t.opacityMaskClipValue!==fh&&(e.opacityMaskClipValue=t.opacityMaskClipValue),t.side!==void 0&&(e.side=t.side),t.colorVersion===1&&(e.colorVersion=1),t.shadingModel==="lit"&&(e.shadingModel="lit"),t.subgraph&&(e.subgraph=t.subgraph),t.builtin&&(e.builtin=t.builtin),e}function sl(t){return t.builtin==="sprite-master"||t.id===di}function al(t){return{type:"texture",id:XM(t),path:t}}function XM(t){return(t.split("/").pop()??t).replace(/\.[^.]+$/,"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"texture"}var mh={backend:"three3d",label:"Three World / 3D",coordinateSpace:"world-3d",supportsTrue3dQuads:!0,supportsMeshParticles:!0,supportsGpuDepth:!0,supportsProjectedDepthSort:!1,supportsParticleContainerTier2:!1,supportsInstancedMaterialStreams:!0,supportsRuntimeSamplerBindings:!0};function $M(t,e){return e.length>0?"blocked":t.length>0?"partial":"supported"}var qM=new Set(["subEmitters","lights"]);function gh(t,e){const n=YM(e,"three3d"),i=JM();return t.emitters.forEach((r,s)=>{const a=`emitters.${s}`;r.mode==="mesh"&&r.mesh.renderMode==="pixiShard"&&n.push({code:"mode.mesh.pixiShard",path:`${a}.mesh.renderMode`,message:"Old mesh mode is Pixi shard geometry; Three renders true mesh particles only when mesh.renderMode is meshAsset.",emitterId:r.id,emitterIndex:s}),r.mode==="mesh"&&r.mesh.renderMode==="meshAsset"&&(r.mesh.asset||i.push({code:"mode.meshAsset.missing",path:`${a}.mesh.asset`,message:"Three mesh particles require a prepared mesh asset ref.",emitterId:r.id,emitterIndex:s}));for(const[o,c]of Object.entries(r.modules))!c||!qM.has(o)||i.push({code:`module.${o}`,path:`${a}.modules.${o}`,message:`${o} is not implemented in the Three renderer MVP yet; keep it backend-gated until the Three draw path owns it.`,emitterId:r.id,emitterIndex:s});r.render.material&&r.render.material.shaderId!=="sprite-master"&&n.push({code:"material.threeAdapter",path:`${a}.render.material`,message:"Three MVP uses the fixed-function particle material adapter; custom graph lowering is backend-gated until the Three material compiler lands.",emitterId:r.id,emitterIndex:s})}),{backend:mh.backend,status:$M(n,i),warnings:Ac(n),blockers:Ac(i),...ZM(e,"three3d")}}function YM(t,e){return[].filter(n=>!n.backend||n.backend===e).map(n=>({code:n.code,path:n.path,message:n.message}))}function ZM(t,e){const n=Ac(KM(t,e));return n.length>0?{notes:n}:{}}function KM(t,e){return[].filter(n=>!n.backend||n.backend===e).map(n=>({code:n.code,path:n.path,message:n.message}))}function JM(t){return[]}function Ac(t){const e=new Set,n=[];for(const i of t){const r=`${i.code}:${i.path}:${i.message}`;e.has(r)||(e.add(r),n.push(i))}return n}function Ui(t,e=[]){if(!t.nodes.some(i=>i.type==="subgraph"))return t;if(e.length>=32||e.includes(t.id))throw new Error(`Recursive material subgraph: ${[...e,t.id].join(" → ")}`);let n={...t,nodes:[...t.nodes],edges:[...t.edges],params:[...t.params]};for(const i of t.nodes.filter(r=>r.type==="subgraph")){const r=i.params.graph;if(!(r!=null&&r.subgraph))throw new Error(`Missing subgraph definition for ${i.id}`);const s=Ui(r,[...e,t.id]),a=`${i.id}/`,o=p=>a+p,c=p=>a+p,l=new Map;for(const p of r.params){const x=n.edges.find(g=>g.id===i.inputs[p.inputId??p.name]);x&&l.set(p.name,x)}const u=(p,x)=>{const g=s.nodes.find(S=>S.id===p),m=(g==null?void 0:g.type)==="param"?l.get(String(g.params.name)):void 0;return m?{source:m.source,sourceHandle:m.sourceHandle}:{source:o(p),sourceHandle:x}},h=s.nodes.filter(p=>p.type!=="output").map(p=>({...p,id:o(p.id),inputs:Object.fromEntries(Object.entries(p.inputs).map(([x,g])=>[x,g?c(g):null])),params:p.type==="param"?{...p.params,name:a+String(p.params.name)}:{...p.params}})),d=s.edges.filter(p=>{var x;return((x=s.nodes.find(g=>g.id===p.target))==null?void 0:x.type)!=="output"}).map(p=>({...p,...u(p.source,p.sourceHandle),id:c(p.id),target:o(p.target)})),f=n.edges.filter(p=>p.target!==i.id).map(p=>{if(p.source!==i.id)return p;const x=s.subgraph.outputs.find(g=>g.id===p.sourceHandle);if(!x||!s.nodes.some(g=>g.id===x.nodeId))throw new Error(`Missing output ${p.sourceHandle} in subgraph ${r.name}`);return{...p,...u(x.nodeId,x.handle)}});n={...n,subgraph:n.subgraph?{outputs:n.subgraph.outputs.map(p=>{if(p.nodeId!==i.id)return p;const x=s.subgraph.outputs.find(m=>m.id===p.handle);if(!x)throw new Error(`Missing output ${p.handle} in subgraph ${r.name}`);const g=u(x.nodeId,x.handle);return{...p,nodeId:g.source,handle:g.sourceHandle}})}:void 0,nodes:[...n.nodes.filter(p=>p.id!==i.id),...h],edges:[...f,...d],params:[...n.params,...s.params.map(p=>({...p,name:a+p.name,builtinRole:void 0}))]}}return n}var zu=1;function QM(t){return`fnv1a32:${jM(wc(t))}`}function wc(t){if(t===null||typeof t!="object")return JSON.stringify(t)??"null";if(Array.isArray(t))return`[${t.map(n=>wc(n)).join(",")}]`;const e=t;return`{${Object.keys(e).sort().filter(n=>e[n]!==void 0).map(n=>`${JSON.stringify(n)}:${wc(e[n])}`).join(",")}}`}function jM(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619)>>>0;return e.toString(16).padStart(8,"0")}function eS(t,e={}){const n=tS(t.manifest);rS(n);const i=t.assetPaths?new Set([...t.assetPaths].map(ol)):null;if(e.requireEveryAsset&&!i)throw new Error("Official VFX export asset paths are required for this load operation.");const r=new Map,s=new Map,a=new Set,o=new Set,c=new Set,l=new Set;for(const h of n.assets)Bs(c,h.path,`duplicate asset path "${h.path}"`),Bs(l,`${h.type}:${h.id}`,`duplicate asset identity "${h.type}:${h.id}"`);for(const h of n.effects){if(Bs(a,h.id,`duplicate effect id "${h.id}"`),Bs(o,h.path,`duplicate effect path "${h.path}"`),sS(h,e.requiredBackend),!(h.path in t.effectsByPath))throw new Error(`Official VFX export is missing ${h.path}.`);const d=nS(t.effectsByPath[h.path]);aS(d,h,n.generatedAt);for(const f of d.assets)if(!oS(n.assets,f))throw new Error(`Effect "${d.id}" references asset absent from the manifest: ${f.path}.`);r.set(d.id,d),s.set(h.path,d)}const u=QM(n.effects.map(h=>({path:h.path,sourceHash:h.sourceHash})));if(n.sourceHash!==u)throw new Error(`Official VFX manifest source hash is stale: expected ${u}, received ${n.sourceHash}.`);for(const h of e.requiredEffectIds??[])if(!r.has(h))throw new Error(`Official VFX export is missing required effect "${h}".`);if(i){for(const h of n.assets)if(!i.has(h.path))throw new Error(`Official VFX export is missing asset ${h.path}.`)}return{manifest:n,effectsById:r,effectsByPath:s}}function tS(t){const e=Oi(t,"VFX export manifest");if(e.kind!=="vfx-manifest")throw new Error('VFX export manifest kind must be "vfx-manifest".');vh(e.version,"VFX export manifest"),un(e.generatedAt,"VFX export manifest generatedAt"),un(e.sourceHash,"VFX export manifest sourceHash");const n=Ai(e.effects,"VFX export manifest effects"),i=Ai(e.assets,"VFX export manifest assets"),r=Oi(e.validation,"VFX export manifest validation");if(typeof r.valid!="boolean")throw new Error("VFX export manifest validation.valid must be boolean.");Ai(r.errors,"VFX export manifest validation errors"),Ai(r.warnings,"VFX export manifest validation warnings"),Ai(r.blockers,"VFX export manifest validation blockers");for(const[s,a]of n.entries())iS(a,s);for(const[s,a]of i.entries())xh(a,s);return t}function nS(t){const e=Oi(t,"VFX exported effect");if(e.kind!=="vfx-effect")throw new Error('VFX exported effect kind must be "vfx-effect".');vh(e.version,"VFX exported effect"),un(e.generatedAt,"VFX exported effect generatedAt"),un(e.id,"VFX exported effect id"),un(e.sourceEffectId,"VFX exported effect sourceEffectId"),un(e.sourceHash,"VFX exported effect sourceHash"),Ai(e.emitters,"VFX exported effect emitters");const n=Ai(e.assets,"VFX exported effect assets");Oi(e.support,"VFX exported effect support");for(const[i,r]of n.entries())xh(r,i);return t}function iS(t,e){const n=Oi(t,`VFX manifest effect ${e}`);return un(n.id,`VFX manifest effect ${e} id`),un(n.name,`VFX manifest effect ${e} name`),ol(un(n.path,`VFX manifest effect ${e} path`)),un(n.sourceEffectId,`VFX manifest effect ${e} sourceEffectId`),un(n.sourceHash,`VFX manifest effect ${e} sourceHash`),Oi(n.support,`VFX manifest effect ${e} support`),t}function xh(t,e){const n=Oi(t,`VFX manifest asset ${e}`);if(un(n.id,`VFX manifest asset ${e} id`),n.type!=="texture"&&n.type!=="material"&&n.type!=="mesh")throw new Error(`VFX manifest asset ${e} has unsupported type.`);return ol(un(n.path,`VFX manifest asset ${e} path`)),t}function rS(t){if(!t.validation.valid||t.validation.blockers.length>0)throw new Error("Official VFX export is blocked by validation errors.")}function sS(t,e){if(!e)return;const n=t.support.backends[e];if(!n||n.status==="blocked"||n.blockers.length>0)throw new Error(`Effect "${t.id}" is blocked on required backend "${e}".`)}function aS(t,e,n){const i=[];if(t.id!==e.id&&i.push("id"),t.sourceEffectId!==e.sourceEffectId&&i.push("sourceEffectId"),t.sourceHash!==e.sourceHash&&i.push("sourceHash"),t.generatedAt!==n&&i.push("generatedAt"),i.length>0)throw new Error(`Official VFX effect ${e.path} does not match its manifest entry (${i.join(", ")}).`)}function oS(t,e){return t.some(n=>n.type===e.type&&n.id===e.id&&n.path===e.path)}function ol(t){const e=t.replace(/\\/g,"/");if(e.length===0||e.startsWith("/")||e==="."||e===".."||e.startsWith("../")||e.includes("/../")||e.includes("//"))throw new Error(`Unsafe VFX export path "${t}".`);return e.replace(/^\.\//,"")}function Bs(t,e,n){if(t.has(e))throw new Error(`Official VFX manifest has ${n}.`);t.add(e)}function vh(t,e){if(t!==zu)throw new Error(`${e} version must be ${zu}; received ${String(t)}.`)}function Oi(t,e){if(!t||typeof t!="object"||Array.isArray(t))throw new Error(`${e} must be an object.`);return t}function Ai(t,e){if(!Array.isArray(t))throw new Error(`${e} must be an array.`);return t}function un(t,e){if(typeof t!="string"||t.length===0)throw new Error(`${e} must be a non-empty string.`);return t}var cS=0;function lS(){return`vfx-${++cS}`}function Gu(t,e,n,i,r,s,a){if(t.version!==1||t.enabled===!1||t.mode==="disabled"||t.maxLights===0)return null;const o=t.useParticleColor&&t.mode==="particles"?a:void 0,c=o?[o[0],o[1],o[2]]:tn(t.color,i),l=Me(t.intensity,i,s,r)*(o?o[3]:nn(t.color,i)),u=Me(t.radius,i,s,r);return!Number.isFinite(l)||l<=0||!Number.isFinite(u)||u<=0||!n.every(Number.isFinite)||!c.every(Number.isFinite)?null:{id:e,position:[...n],color:[...c],intensity:l,radius:u}}function uS(t){return t!=="textureAlpha"}var Hu=.2126,ku=.7152,Wu=.0722;function dS(t,e,n){if(e==="textureAlpha"){if(!n)return;for(let i=3;i<t.length;i+=4)t[i]=255-t[i];return}for(let i=0;i+3<t.length;i+=4){const r=t[i],s=t[i+1],a=t[i+2];let o;switch(e){case"red":o=r;break;case"green":o=s;break;case"blue":o=a;break;case"luminance":o=Hu*r+ku*s+Wu*a;break;case"inverseLuminance":o=255-(Hu*r+ku*s+Wu*a);break;case"constant":o=255;break;default:o=t[i+3];break}t[i+3]=n?255-o:o}}function hS(t,e,n,i=[1,1,1,1]){const r=t.colorOverLifetime,s=t.colorOverTrail;tn(r,e,i);const a=i[0],o=i[1],c=i[2];return tn(s,n,i),i[0]*=a,i[1]*=o,i[2]*=c,i[3]=nn(r,e)*nn(s,n),i}var _h=[0,1,0],fS=[0,0,1];function pS(t,e,n,i){return t+e*n+i}function $t(t,e,n){return Math.max(e,Math.min(n,t))}function Ri(t,e,n){return t+(e-t)*n}function Vr(t,e,n){const i=$t((n-t)/Math.max(1e-6,e-t),0,1);return i*i*(3-2*i)}var mS=new Set(["value","fastGradient","perlinGradient","simplex","voronoi"]),gS=new Set(["cellnoise","perlin3d","perlinGradient","perlinCurl","voronoi"]);function Zr(t,e){return Math.round(ae(t,e))}function xS(t){return{kind:mS.has(t.function)?t.function:"perlinGradient",scale:Math.max(1e-4,ae(t.scale,16)),repeatSize:Math.max(1,Zr(t.repeatSize,256)),levels:Math.max(1,Math.min(8,Zr(t.levels,1))),levelScale:ae(t.levelScale,2),gain:ae(t.gain,.5),turbulence:t.turbulence===!0,tiling:t.tiling!==!1,seed:Zr(t.seed,0),outputMin:ae(t.outputMin,0),outputMax:ae(t.outputMax,1)}}function vS(t){return{kind:gS.has(t.function)?t.function:"perlinCurl",scale:Math.max(1e-4,ae(t.scale,8)),tileSize:Math.max(1,Zr(t.tileSize,256)),tiling:t.tiling!==!1,seed:Zr(t.seed,0),normalizeOutput:t.normalizeOutput!==!1}}function Mh(t){let e=t|0;return e=Math.imul(e^e>>>16,73244475),e=Math.imul(e^e>>>16,73244475),(e^e>>>16)>>>0}function qt(t,e,n){const i=Math.imul(t|0,522133279)^Math.imul(e|0,2246822507)^Math.imul(n|0,3266489909)|0;return Mh(i)/4294967296}function _S(t,e){return e<=0?t:(t%e+e)%e}function kt(t,e){return e>0?_S(t,e):t}function Di(t){return t*t*t*(t*(t*6-15)+10)}function qe(t,e,n){return t+(e-t)*n}function cl(t){return t<0?0:t>1?1:t}function MS(t,e,n,i){const r=Math.floor(t),s=Math.floor(e),a=t-r,o=e-s,c=Di(a),l=Di(o),u=qt(kt(r,i),kt(s,i),n),h=qt(kt(r+1,i),kt(s,i),n),d=qt(kt(r,i),kt(s+1,i),n),f=qt(kt(r+1,i),kt(s+1,i),n);return qe(qe(u,h,c),qe(d,f,c),l)}function Xr(t,e,n,i){const r=Math.floor(t),s=Math.floor(e),a=t-r,o=e-s,c=Di(a),l=Di(o),u=(m,S,A,M)=>{const E=qt(kt(m,i),kt(S,i),n)*Math.PI*2;return Math.cos(E)*A+Math.sin(E)*M},h=u(r,s,a,o),d=u(r+1,s,a-1,o),f=u(r,s+1,a,o-1),p=u(r+1,s+1,a-1,o-1),x=qe(h,d,c),g=qe(f,p,c);return cl(qe(x,g,l)*.7071+.5)}function SS(t,e,n,i){const r=Math.floor(t),s=Math.floor(e);let a=1/0;for(let o=-1;o<=1;o++)for(let c=-1;c<=1;c++){const l=r+c,u=s+o,h=kt(l,i),d=kt(u,i),f=qt(h,d,n),p=qt(h,d,n^2654435769|0),x=l+f-t,g=u+p-e,m=x*x+g*g;m<a&&(a=m)}return Math.min(1,Math.sqrt(a))}function yS(t){switch(t){case"value":return MS;case"voronoi":return SS;default:return Xr}}function ES(t,e,n){const i=t.scale,r=t.tiling?t.repeatSize:0,s=yS(t.kind);let a=1,o=1,c=0,l=0;for(let h=0;h<t.levels;h++){const d=i*o;let f=s(e*d,n*d,t.seed+h*101,r);t.turbulence&&(f=Math.abs(f*2-1)),c+=f*a,l+=a,a*=t.gain,o*=t.levelScale}const u=cl(l>0?c/l:c);return t.outputMin+u*(t.outputMax-t.outputMin)}function bS(t,e,n){const i=t.scale,r=t.tiling?t.tileSize:0;return TS(t,e,n,i,r)}function TS(t,e,n,i,r){const s=e*i,a=n*i,o=t.seed,c=l=>t.normalizeOutput?cl(l*.5+.5):l;switch(t.kind){case"cellnoise":{const l=Math.floor(s),u=Math.floor(a),h=kt(l,r),d=kt(u,r);return[qt(h,d,o),qt(h,d,o^1757159915|0),qt(h,d,o^461845907|0),1]}case"voronoi":{const l=Math.floor(s),u=Math.floor(a);let h=1/0,d=0,f=0;for(let p=-1;p<=1;p++)for(let x=-1;x<=1;x++){const g=l+x,m=u+p,S=kt(g,r),A=kt(m,r),M=g+qt(S,A,o),E=m+qt(S,A,o^2654435769|0),T=(M-s)*(M-s)+(E-a)*(E-a);T<h&&(h=T,d=S,f=A)}return[qt(d,f,o^74565|0),qt(d,f,o^424090|0),qt(d,f,o^773615|0),Math.min(1,Math.sqrt(h))]}case"perlinCurl":{const u=(g,m)=>Xr(g,m,o,r)*2-1,h=(u(s+.01,a)-u(s-.01,a))/.02;let f=(u(s,a+.01)-u(s,a-.01))/(2*.01),p=-h;const x=Math.hypot(f,p)||1;return f/=x,p/=x,[c(f),c(p),.5,1]}default:{const l=Xr(s,a,o,r)*2-1,u=Xr(s,a,o^1374496523|0,r)*2-1,h=Xr(s,a,o^625341585|0,r)*2-1;return[c(l),c(u),c(h),1]}}}function Xu(t,e,n,i){const r=Math.imul(t|0,522133279)^Math.imul(e|0,2246822507)^Math.imul(n|0,668265263)^Math.imul(i|0,3266489909)|0;return Mh(r)/4294967296}var vo=.4;function _o(t){const e=t*(t-1);return 30*e*e}var AS=[0,0,0];function si(t,e,n,i,r){const s=Xu(t,e,n,i)*Math.PI*2,a=Xu(t,e,n,i^2654435769|0)*2-1,o=Math.sqrt(Math.max(0,1-a*a));r[0]=Math.cos(s)*o,r[1]=Math.sin(s)*o,r[2]=a}function Mo(t,e,n,i,r){const s=Math.floor(t),a=Math.floor(e),o=Math.floor(n),c=t-s,l=e-a,u=n-o,h=Di(c),d=Di(l),f=Di(u),p=AS;si(s,a,o,i,p);const x=p[0],g=p[1],m=p[2],S=x*c+g*l+m*u;si(s+1,a,o,i,p);const A=p[0],M=p[1],E=p[2],T=A*(c-1)+M*l+E*u;si(s,a+1,o,i,p);const C=p[0],v=p[1],b=p[2],R=C*c+v*(l-1)+b*u;si(s+1,a+1,o,i,p);const P=p[0],D=p[1],L=p[2],H=P*(c-1)+D*(l-1)+L*u;si(s,a,o+1,i,p);const N=p[0],q=p[1],B=p[2],G=N*c+q*l+B*(u-1);si(s+1,a,o+1,i,p);const Q=p[0],ne=p[1],j=p[2],re=Q*(c-1)+ne*l+j*(u-1);si(s,a+1,o+1,i,p);const Oe=p[0],We=p[1],Fe=p[2],Z=Oe*c+We*(l-1)+Fe*(u-1);si(s+1,a+1,o+1,i,p);const se=p[0],V=p[1],ge=p[2],Ee=se*(c-1)+V*(l-1)+ge*(u-1),Se=qe(qe(qe(x,A,h),qe(C,P,h),d),qe(qe(N,Q,h),qe(Oe,se,h),d),f),tt=qe(qe(qe(g,M,h),qe(v,D,h),d),qe(qe(q,ne,h),qe(We,V,h),d),f),Ge=qe(qe(qe(m,E,h),qe(b,L,h),d),qe(qe(B,j,h),qe(Fe,ge,h),d),f),nt=qe(qe(T-S,H-R,d),qe(re-G,Ee-Z,d),f),Ye=qe(qe(R-S,H-T,h),qe(Z-G,Ee-re,h),f),$e=qe(qe(G-S,re-T,h),qe(Z-R,Ee-H,h),d);r[0]=(Se+_o(c)*nt)*1.155,r[1]=(tt+_o(l)*Ye)*1.155,r[2]=(Ge+_o(u)*$e)*1.155}var wS=[0,0,0];function CS(t,e,n,i,r){const s=i|0,a=i^1374496523|0,o=i^625341585|0,c=wS;Mo(t,e,n,s,c);const l=c[1],u=c[2];Mo(t,e,n,a,c);const h=c[0],d=c[2];Mo(t,e,n,o,c);const f=c[0],p=c[1];r[0]=(p-d)*vo,r[1]=(u-f)*vo,r[2]=(h-l)*vo}function Sh(t,e){t.modules.forceOverLifetime&&RS(t.advanced.forceOverLifetime,e),t.modules.externalForces&&PS(t.advanced.externalForces,e),t.modules.noise&&NS(t.advanced.noise,e)}function RS(t,{seed:e,normalizedAge:n,loopAge:i,ageSeconds:r,world:s}){const a=Me(t.multiplier,n,e,i),o=So(e,11)*t.randomized[0],c=So(e,23)*t.randomized[1],l=So(e,37)*t.randomized[2],u=.5*r*r*a;s[0]+=(t.force[0]+o)*u,s[1]+=(t.force[1]+c)*u,s[2]+=(t.force[2]+l)*u}function PS(t,{seed:e,normalizedAge:n,loopAge:i,ageSeconds:r,world:s,velocity:a}){const o=Me(t.gravityMultiplier,n,e,i),c=Me(t.drag,n,e,i),l=.5*r*r;if(s[0]+=t.wind[0]*l,s[1]+=t.wind[1]*l-a[1]*Math.max(0,o-1)*l,s[2]+=t.wind[2]*l,c>0){const u=Math.max(0,1-c*r*.15);s[0]*=u,s[2]*=u}if(Math.abs(t.vortexStrength)>1e-4){const u=t.vortexStrength*r*.03,h=s[0],d=s[2];s[0]+=-d*u,s[2]+=h*u}}var DS=.1,zr=1e-6,IS=64,LS=1/120,oa={position:[0,0,0],velocity:[0,0,0],scratchA:[0,0,0],scratchB:[0,0,0]},FS={seed:0,normalizedAge:0,loopAge:0,ageSeconds:0,timeSeconds:0,world:oa.position,velocity:oa.velocity},Vs=[0,0,0];function NS(t,{seed:e,normalizedAge:n,loopAge:i,timeSeconds:r,world:s}){const a=Me(t.strength,n,e,i);if(a<=0)return;const o=Math.max(1e-4,t.frequency);let c=a,l=0,u=0,h=0;if(t.mode==="curl"){const p=r*t.speed;for(let x=0;x<t.octaves;x++){const g=o*2**x;CS((s[0]+t.scroll[0]*p)*g+p*.35,(s[1]+t.scroll[1]*p)*g+p*.61,(s[2]+t.scroll[2]*p)*g+p*.83,x*101,Vs),l+=Vs[0]*c,u+=Vs[1]*c,h+=Vs[2]*c,c*=t.damping}}else{const p=r*t.speed+e*17.17;for(let x=0;x<t.octaves;x++){const g=o*2**x;l+=Math.sin((s[0]+t.scroll[0]*p+e)*g+x*5.31)*c,u+=Math.sin((s[1]+t.scroll[1]*p+e)*g+x*7.13)*c,h+=Math.sin((s[2]+t.scroll[2]*p+e)*g+x*3.77)*c,c*=t.damping}}const d=Math.min(1,Math.max(0,n/DS)),f=d*d*(3-2*d);s[0]+=l*f,s[1]+=u*f,s[2]+=h*f}function US(t,e){const n=t.advanced.collision;if(n.mode!=="plane")return!0;const i=e.world,r=e.velocity,s=n.planeY+n.radius,a=i[1];if(a<s-n.killBelow)return!1;if(a>=s)return!0;const o=t.modules.velocity?Me(t.forces.gravityValue,e.normalizedAge,e.seed,e.loopAge):0,c=Math.max(0,o),l=r[1],u=s-a,h=l*l-4*c*u,d=1-n.dampen,f=r[0],p=r[2];if(h<=0||l>=0)return i[1]=s,r[0]=f*d,r[1]=0,r[2]=p*d,!0;const x=Math.sqrt(h),g=2*u/(x-l);i[0]=i[0]-f*n.dampen*g,i[2]=i[2]-p*n.dampen*g,r[0]=f*d,r[2]=p*d;let m=n.bounce*x,S=g;if(c>zr&&m>zr)for(let M=0;M<IS;M++){const E=m/c;if(S<=E)break;if(S-=E,m*=n.bounce,m<=zr){m=0;break}}const A=c<=zr||S<=m/c;return m>zr&&A?(i[1]=s+m*S-c*S*S,r[1]=m-2*c*S):(i[1]=s,r[1]=0),!0}function OS(t,e,n,i,r,s,a,o,c,l,u,h){const d=LS;BS(t,e,n,i+d,r,s+d,a,o,c,l,oa,FS);const f=1/d,p=oa.position;return h[0]=(p[0]-u[0])*f,h[1]=(p[1]-u[1])*f,h[2]=(p[2]-u[2])*f,h}function BS(t,e,n,i,r,s,a,o,c,l,u,h){const d=Math.max(0,i),f=Math.min(1,Math.max(0,d/Math.max(.001,r)));tl(t,e,n,d,f,c,u,l),h.seed=a,h.normalizedAge=f,h.loopAge=o,h.ageSeconds=d,h.timeSeconds=s,Sh(t,h),ga(t,e,n,u.position,u.velocity,c)}function VS(t,e,n,i,r,s){let a=t.modules.color?[...tn(t.color.gradient,e),nn(t.color.gradient,e)]:[1,1,1,1];if(t.modules.colorBySpeed){const o=t.advanced.colorBySpeed,c=pa(o.speedRange,n),l=[...tn(o.gradient,c),nn(o.gradient,c)];a=yh(a,l,o.blend)}return t.modules.lights&&(a=WS(t.advanced.lights,e,n,i,a,s)),[zs(a[0]),zs(a[1]),zs(a[2]),zs(a[3])]}function zS(t,e,n,i){if(!t.modules.sizeBySpeed)return 1;const r=t.advanced.sizeBySpeed,s=pa(r.speedRange,e),a=Me(r.multiplier,s,n,i);return 1+(Math.max(0,a)-1)*r.blend}function GS(t,e,n,i,r){if(!t.modules.rotationBySpeed)return 0;const s=t.advanced.rotationBySpeed,a=pa(s.speedRange,e);return Me(s.angularVelocity,a,i,r)*n*s.blend}function HS(t,e,n,i){const r=Math.max(1,Math.round(t.tiles[0])),s=Math.max(1,Math.round(t.tiles[1])),a=Math.max(1,r*s),o=Math.min(Math.max(0,Math.round(t.startFrame)),a-1),c=typeof t.endFrame=="number"&&Number.isFinite(t.endFrame)?Math.round(t.endFrame):a-1,u=Math.min(Math.max(o,c),a-1)-o+1,d=(t.randomStartFrame?Math.floor(Eh(n,71)*u):0)+Me(t.frameOverTime,e,n,i)*Math.max(0,t.cycles);return o+XS(Math.floor(d),u)}function kS(t,e,n,i){const r=Math.max(1,Math.round(t.tiles[0])),s=Math.max(1,Math.round(t.tiles[1])),a=Math.max(1,r*s),o=HS(t,e,n,i);return{frame:o,column:o%r,row:Math.floor(o/r),tilesX:r,tilesY:s,totalFrames:a}}function WS(t,e,n,i,r,s){const a=Me(t.intensity,e,i,s);if(a<=0)return r;const o=Math.max(0,Me(t.radius,e,i,s)),c=o>0?Math.min(1,o/(o+n)):1,l=a*c*.35;return t.additive?[r[0]+t.color[0]*l,r[1]+t.color[1]*l,r[2]+t.color[2]*l,r[3]]:yh(r,[...t.color,r[3]],l)}function yh(t,e,n){return oh(t,e,n)}function So(t,e){return Eh(t,e)*2-1}function Eh(t,e){const n=Math.sin(t*127.1+e*311.7)*43758.5453123;return n-Math.floor(n)}function zs(t){return Math.max(0,Math.min(1,t))}function XS(t,e){return(t%e+e)%e}var $S=new Set(["param","constant","textureSample","particleSubUV","uv","tilingOffset","multiply","add","subtract","divide","lerp","oneMinus","clamp","step","smoothstep","power","min","max","remap","split","combine","swizzle","desaturate","fresnel","sphereMask","gradientRamp","abs","frac","floor","ceil","round","sign","sqrt","length","normalize","dot","sine","cosine","if","noise","vectorNoise","antialiasedTextureMask","sphericalParticleOpacity","particleMacroUV","output"]);function bh(t,e){switch(e){case"R":case"Param1":return[t[0],t[0],t[0],t[0]];case"G":case"Param2":return[t[1],t[1],t[1],t[1]];case"B":case"Param3":return[t[2],t[2],t[2],t[2]];case"A":case"Param4":return[t[3],t[3],t[3],t[3]];default:return t}}var yo=[.2126,.7152,.0722,0];function gt(t){if(Array.isArray(t))return[t[0]??0,t[1]??0,t[2]??0,t[3]??0];if(typeof t=="number")return[t,t,t,t];if(typeof t=="boolean"){const e=t?1:0;return[e,e,e,e]}return[0,0,0,0]}function qS(t,e){return[t[0]*e[0],t[1]*e[1],t[2]*e[2],t[3]*e[3]]}function YS(t,e){return[t[0]+e[0],t[1]+e[1],t[2]+e[2],t[3]+e[3]]}function ZS(t,e){return[t[0]-e[0],t[1]-e[1],t[2]-e[2],t[3]-e[3]]}function KS(t,e){return[e[0]===0?0:t[0]/e[0],e[1]===0?0:t[1]/e[1],e[2]===0?0:t[2]/e[2],e[3]===0?0:t[3]/e[3]]}function JS(t,e,n){return[Ri(t[0],e[0],n[0]),Ri(t[1],e[1],n[1]),Ri(t[2],e[2],n[2]),Ri(t[3],e[3],n[3])]}function Gs(t){return t-Math.floor(t)}function ar(t,e){switch(e){case"g":return t[1];case"b":return t[2];case"a":return t[3];default:return t[0]}}function QS(t,e){if(t.length===0)return[1,1,1,1];const n=t[0];if(e<=n.position)return[...n.color];const i=t[t.length-1];if(e>=i.position)return[...i.color];for(let r=0;r<t.length-1;r++){const s=t[r],a=t[r+1];if(e>=s.position&&e<=a.position){const o=a.position-s.position,c=o<=0?0:(e-s.position)/o;return oh(s.color,a.color,c)}}return[...i.color]}function jS(t){if(!Array.isArray(t))return[];const e=[];for(const n of t)if(n&&typeof n=="object"){const i=n;e.push({position:$t(ae(i.position,0),0,1),color:gt(i.color)})}return e}function ey(t){return Array.isArray(t)?[t[0]??0,t[1]??0,t[2]??0,t[3]??0]:[1,1,1,1]}function ty(t,e,n,i){return t.params.find(s=>s.name===n&&s.type==="color")?ey(Hi(t,e,n)):i}function $u(t,e,n,i){if(!t.params.find(a=>a.name===n))return i;const s=Hi(t,e,n);return typeof s=="number"?s:i}function Th(t,e,n,i,r){if(r.has(t.id))return[0,0,0,0];r.add(t.id);const s=iy(t,e,n,i,r);return r.delete(t.id),s}function ny(t,e,n,i,r,s,a){const o=t.inputs[e];if(!o)return n;const c=s.get(o);if(!c)return n;const l=r.get(c.source);if(!l)return n;const u=Th(l,i,r,s,a);return bh(u,c.sourceHandle)}function qu(t,e,n,i){return rl(e.graph,e.instance,t,n,i)}function iy(t,e,n,i,r){const s=(c,l)=>ny(t,c,l,e,n,i,r),a=()=>{if(t.inputs.uv){const c=s("uv",[e.uv[0],e.uv[1],0,0]);return[c[0],c[1]]}return[e.uv[0],e.uv[1]]},o=t.params;switch(t.type){case"constant":return gt(o.value);case"param":{const c=typeof o.name=="string"?o.name:"",l=Hi(e.graph,e.instance,c);return gt(l)}case"textureSample":case"particleSubUV":{const[c,l]=a(),u=qu(t,e,n,i);if(u.path&&!u.isMainTex&&e.samplerForPath){const h=e.samplerForPath(u.path,[c,l],t);if(h)return h}return[...e.source]}case"uv":return[e.uv[0],e.uv[1],0,0];case"polarCoordinates":{const c=s("UV",[e.uv[0],e.uv[1],0,0]),l=s("Center",gt(o.center??[.5,.5,0,0])),u=s("Radial Scale",gt(ae(o.radialScale,1)))[0],h=s("Length Scale",gt(ae(o.lengthScale,1)))[0],d=c[0]-l[0],f=c[1]-l[1];return[Math.hypot(d,f)*2*u,Math.atan2(d,f)/6.28*h,0,0]}case"tilingOffset":{const c=s("uv",[e.uv[0],e.uv[1],0,0]),l=s("tile",gt(o.tile??[1,1,0,0])),u=s("offset",gt(o.offset));return[c[0]*l[0]+u[0],c[1]*l[1]+u[1],0,0]}case"multiply":return qS(s("a",gt(ae(o.a,1))),s("b",gt(ae(o.b,1))));case"add":return YS(s("a",gt(ae(o.a,0))),s("b",gt(ae(o.b,0))));case"subtract":return ZS(s("a",gt(ae(o.a,0))),s("b",gt(ae(o.b,0))));case"divide":return KS(s("a",gt(ae(o.a,0))),s("b",gt(ae(o.b,1))));case"min":{const c=s("a",[0,0,0,0]),l=s("b",[0,0,0,0]);return[Math.min(c[0],l[0]),Math.min(c[1],l[1]),Math.min(c[2],l[2]),Math.min(c[3],l[3])]}case"max":{const c=s("a",[0,0,0,0]),l=s("b",[0,0,0,0]);return[Math.max(c[0],l[0]),Math.max(c[1],l[1]),Math.max(c[2],l[2]),Math.max(c[3],l[3])]}case"lerp":{const c=s("a",gt(ae(o.a,0))),l=s("b",gt(ae(o.b,1))),u=t.inputs.t?s("t",[0,0,0,0]):gt(ae(o.t,.5));return JS(c,l,u)}case"oneMinus":{const c=s("in",[0,0,0,0]);return[1-c[0],1-c[1],1-c[2],1-c[3]]}case"clamp":{const c=s("in",[0,0,0,0]),l=t.inputs.min?s("min",[0,0,0,0])[0]:ae(o.min,0),u=t.inputs.max?s("max",[1,1,1,1])[0]:ae(o.max,1);return[$t(c[0],l,u),$t(c[1],l,u),$t(c[2],l,u),$t(c[3],l,u)]}case"step":{const c=s("in",[0,0,0,0]),l=t.inputs.edge?s("edge",[.5,0,0,0])[0]:ae(o.edge,.5);return[c[0]>=l?1:0,c[1]>=l?1:0,c[2]>=l?1:0,c[3]>=l?1:0]}case"smoothstep":{const c=s("in",[0,0,0,0]),l=t.inputs.edge0?s("edge0",[0,0,0,0])[0]:ae(o.edge0,0),u=t.inputs.edge1?s("edge1",[1,1,1,1])[0]:ae(o.edge1,1);return[Vr(l,u,c[0]),Vr(l,u,c[1]),Vr(l,u,c[2]),Vr(l,u,c[3])]}case"power":{const c=s("in",[0,0,0,0]),l=t.inputs.exp?s("exp",[1,1,1,1]):gt(ae(o.exponent,1));return[Math.pow(Math.max(0,c[0]),l[0]),Math.pow(Math.max(0,c[1]),l[1]),Math.pow(Math.max(0,c[2]),l[2]),Math.pow(Math.max(0,c[3]),l[3])]}case"remap":{const c=s("in",[0,0,0,0]),l=t.inputs.inMin?s("inMin",[0,0,0,0])[0]:ae(o.inMin,0),u=t.inputs.inMax?s("inMax",[1,1,1,1])[0]:ae(o.inMax,1),h=t.inputs.outMin?s("outMin",[0,0,0,0])[0]:ae(o.outMin,0),d=t.inputs.outMax?s("outMax",[1,1,1,1])[0]:ae(o.outMax,1),f=u-l,p=x=>{const g=f===0?0:(x-l)/f;return h+g*(d-h)};return[p(c[0]),p(c[1]),p(c[2]),p(c[3])]}case"desaturate":{const c=s("in",[0,0,0,0]),l=$t(ae(o.fraction,1),0,1),u=c[0]*yo[0]+c[1]*yo[1]+c[2]*yo[2];return[Ri(c[0],u,l),Ri(c[1],u,l),Ri(c[2],u,l),c[3]]}case"split":{const c=s("in",[0,0,0,0]),l=ar(c,typeof o.channel=="string"?o.channel:"r");return[l,l,l,l]}case"combine":return[s("r",[0,0,0,0])[0],s("g",[0,0,0,0])[0],s("b",[0,0,0,0])[0],t.inputs.a?s("a",[1,0,0,0])[0]:1];case"swizzle":{const c=s("in",[0,0,0,0]),l=typeof o.pattern=="string"&&o.pattern.length>=4?o.pattern:"rgba";return[ar(c,l[0]),ar(c,l[1]),ar(c,l[2]),ar(c,l[3])]}case"fresnel":{const c=gt(o.center),l=ae(o.power,1),u=Math.hypot(e.uv[0]-c[0],e.uv[1]-c[1])*2,h=Math.pow(Math.max(0,1-Math.min(1,u)),l);return[h,h,h,h]}case"sphereMask":{const c=gt(o.center),l=ae(o.radius,.5),u=$t(ae(o.hardness,.5),0,1),h=Math.hypot(e.uv[0]-c[0],e.uv[1]-c[1]),d=l*(1-u)+1e-4,f=$t(1-(h-(l-d))/d,0,1);return[f,f,f,f]}case"abs":{const c=s("in",[0,0,0,0]);return[Math.abs(c[0]),Math.abs(c[1]),Math.abs(c[2]),Math.abs(c[3])]}case"frac":{const c=s("in",[0,0,0,0]);return[Gs(c[0]),Gs(c[1]),Gs(c[2]),Gs(c[3])]}case"floor":{const c=s("in",[0,0,0,0]);return[Math.floor(c[0]),Math.floor(c[1]),Math.floor(c[2]),Math.floor(c[3])]}case"ceil":{const c=s("in",[0,0,0,0]);return[Math.ceil(c[0]),Math.ceil(c[1]),Math.ceil(c[2]),Math.ceil(c[3])]}case"round":{const c=s("in",[0,0,0,0]);return[Math.round(c[0]),Math.round(c[1]),Math.round(c[2]),Math.round(c[3])]}case"sign":{const c=s("in",[0,0,0,0]);return[Math.sign(c[0]),Math.sign(c[1]),Math.sign(c[2]),Math.sign(c[3])]}case"sqrt":{const c=s("in",[0,0,0,0]);return[Math.sqrt(Math.max(0,c[0])),Math.sqrt(Math.max(0,c[1])),Math.sqrt(Math.max(0,c[2])),Math.sqrt(Math.max(0,c[3]))]}case"length":{const c=s("in",[0,0,0,0]),l=Math.hypot(c[0],c[1],c[2]);return[l,l,l,l]}case"normalize":{const c=s("in",[0,0,0,0]),l=Math.hypot(c[0],c[1],c[2])||1;return[c[0]/l,c[1]/l,c[2]/l,c[3]]}case"dot":{const c=s("a",[0,0,0,0]),l=s("b",[0,0,0,0]),u=c[0]*l[0]+c[1]*l[1]+c[2]*l[2];return[u,u,u,u]}case"sine":case"cosine":{const c=s("in",[0,0,0,0]),l=ae(o.period,1)||1,u=t.type==="sine"?Math.sin:Math.cos,h=2*Math.PI/l;return[u(c[0]*h),u(c[1]*h),u(c[2]*h),u(c[3]*h)]}case"if":{const c=s("a",[0,0,0,0])[0],l=s("b",[0,0,0,0])[0],u=1e-6;return c>l+u?s("aGreater",[0,0,0,0]):c<l-u?s("aLess",[0,0,0,0]):t.inputs.aEqual?s("aEqual",[0,0,0,0]):s("aGreater",[0,0,0,0])}case"noise":{const c=s("Position",[e.uv[0],e.uv[1],0,0]),l=ES(xS(o),c[0],c[1]);return[l,l,l,l]}case"vectorNoise":{const c=s("Position",[e.uv[0],e.uv[1],0,0]);return bS(vS(o),c[0],c[1])}case"antialiasedTextureMask":{const c=typeof o.channel=="string"?o.channel:"a",[l,u]=a(),h=qu(t,e,n,i),d=h.path&&!h.isMainTex&&e.samplerForPath?e.samplerForPath(h.path,[l,u],t):null,f=ar(d??e.source,c),p=t.inputs.Threshold?s("Threshold",[.5,0,0,0])[0]:ae(o.threshold,.5),x=Math.max(ae(o.softness,.04),1e-4),g=Vr(p-x,p+x,f);return[g,g,g,g]}case"sphericalParticleOpacity":{const c=o.center===void 0?[.5,.5,0,0]:gt(o.center),l=Math.max(ae(o.radius,.5),1e-4),u=t.inputs.Density?s("Density",[1,0,0,0])[0]:ae(o.density,1),h=Math.hypot(e.uv[0]-c[0],e.uv[1]-c[1])/l,d=$t(Math.pow(Math.max(0,1-h),u),0,1);return[d,d,d,d]}case"particleMacroUV":{const c=s("Position",[e.uv[0],e.uv[1],0,0]),l=gt(o.center),u=ae(o.radius,512)||1,h=gt(o.tile),d=gt(o.offset);return[(c[0]-l[0])/u*(h[0]||1)+d[0],(c[1]-l[1])/u*(h[1]||1)+d[1],0,0]}case"gradientRamp":{const l=[...jS(o.stops)].sort((h,d)=>h.position-d.position),u=$t(s("t",[e.source[0],0,0,0])[0],0,1);return QS(l,u)}case"output":return[0,0,0,0];default:return[...e.source]}}function ry(t,e,n={}){t=Ui(t);const i=new Map;for(const x of t.nodes)i.set(x.id,x);const r=new Map;for(const x of t.edges)r.set(x.id,x);const s=x=>{const g=t.outputs[x];if(!g)return null;const m=r.get(g);if(!m)return null;const S=i.get(m.source);return S?{node:S,handle:m.sourceHandle}:null},a=s("baseColor"),o=s("opacity"),c=s("opacityMask"),l=s("emissive"),u=sl(t),h=u?ty(t,e,"Tint",[1,1,1,1]):[1,1,1,1],d=u?$u(t,e,"Emissive",0):0,f=u?$u(t,e,"Opacity",1):1,p=(x,g,m)=>bh(Th(x.node,g,i,r,m),x.handle);return(x,g)=>{const m={graph:t,instance:e,source:x,uv:g,samplerForPath:n.samplerForPath},S=new Set,A=a?p(a,m,S):[x[0],x[1],x[2],x[3]];let M=[A[0],A[1],A[2],0];if(l){const C=1+p(l,m,S)[0];M=[M[0]*C,M[1]*C,M[2]*C,0]}let E=A[3];if(o&&(E=p(o,m,S)[0]),c){const T=t.opacityMaskClipValue??.333;E=p(c,m,S)[0]<T?0:t.blend==="masked"?1:E}else if(t.blend==="masked"){const T=t.opacityMaskClipValue??.333;E=E<T?0:1}return[$t(M[0]*h[0]*(1+Math.max(0,d)),0,1),$t(M[1]*h[1]*(1+Math.max(0,d)),0,1),$t(M[2]*h[2]*(1+Math.max(0,d)),0,1),$t(E*h[3]*f,0,1)]}}function sy(t,e,n,i,r,s={}){const a=ry(i,r,s),o=Math.max(1,e),c=Math.max(1,n);for(let l=0;l+3<t.length;l+=4){const u=l/4,h=u%o,d=Math.floor(u/o),f=[t[l]/255,t[l+1]/255,t[l+2]/255,t[l+3]/255],p=[o<=1?0:h/(o-1),c<=1?0:d/(c-1)],x=a(f,p);t[l]=x[0]*255,t[l+1]=x[1]*255,t[l+2]=x[2]*255,t[l+3]=x[3]*255}}var ay=new Set(["sceneColor","sceneDepth","pixelDepth","depthFade","ddx","ddy","ddxy","parallax","parallaxOcclusion","triplanar","refraction","modulate","alphaHoldout","metallic","roughness","specular","anisotropy","tangent","normal","normalFromHeight","worldPositionOffset","tessellation","displacement","custom"]),ll=new Set(["particleColor","particleRelativeTime","particleSpeed","particleRandom","particleSize","particleDirection","particlePosition","particleMacroUV"]),oy=new Set(["particleColor","particleRelativeTime","particleRandom"]),Yu=new Set(["particleSpeed","particleSize","particleDirection","particlePosition","particleMacroUV"]),cy=new Set(["step","smoothstep","power","desaturate","fresnel","sphereMask","noise","vectorNoise","antialiasedTextureMask","sphericalParticleOpacity"]);function ly(t){return(t.type==="noise"||t.type==="vectorNoise")&&t.params.runtime===!0}var Ah=new Set(["panner","rotateUV","tilingOffset"]);function us(t){const e=new Map;for(const r of t.nodes)e.set(r.id,r);const n=new Map,i=new Map;for(const r of t.edges)n.set(r.id,r),i.set(r.id,r.source);return{nodeById:e,edgeById:n,edgeSource:i}}function wh(t){const e=Object.keys(t.outputs);return t.shadingModel==="lit"?e:e.filter(n=>!hh.includes(n))}function uy(t,e){return t.shadingModel!=="lit"?!1:hh.some(n=>{const i=t.outputs[n];return!!i&&e.edgeSource.has(i)})}function xa(t,e){const n=new Set,i=[];for(const r of wh(t)){const s=t.outputs[r];if(!s)continue;const a=e.edgeSource.get(s);a&&i.push(a)}for(;i.length>0;){const r=i.pop();if(n.has(r))continue;n.add(r);const s=e.nodeById.get(r);if(s)for(const a of Object.values(s.inputs)){if(!a)continue;const o=e.edgeSource.get(a);o&&!n.has(o)&&i.push(o)}}return n}function dy(t,e=us(t)){const n=new Set(t.nodes.filter(o=>o.type==="particleColor").map(o=>o.id)),i=xa(t,e);let r=!1,s=!1;const a=o=>{if(!o)return;const c=e.edgeById.get(o);if(!(!c||!n.has(c.source)))switch(c.sourceHandle){case"A":case"Param4":s=!0;break;case"R":case"G":case"B":case"RGB":r=!0;break;default:r=!0,s=!0;break}};for(const o of Object.values(t.outputs))a(o);for(const o of i){const c=e.nodeById.get(o);if(c){for(const l of Object.values(c.inputs))a(l);c.type==="particleRelativeTime"?s=!0:c.type==="particleRandom"&&(r=!0)}}return{rgb:r,alpha:s}}var hy={R:0,Param1:0,G:1,Param2:1,B:2,Param3:2,A:3,Param4:3};function fy(t,e=us(t)){const n=t.outputs.opacity;if(!n)return t.colorVersion!==1;const i=e.edgeById.get(n),r=i?e.nodeById.get(i.source):void 0;if(!i||!r)return t.colorVersion!==1;if(r.type!=="constant")return!1;const s=r.params.value,a=hy[i.sourceHandle]??0;return typeof s=="number"?s===1:typeof s=="boolean"?s:Array.isArray(s)?s[a]===1:!1}function Cc(t,e,n=new Set){if(n.has(t.id))return!1;if(n.add(t.id),t.type==="panner"&&gy(t.params.speed)||t.type==="rotateUV"&&ae(t.params.speed,0)!==0)return!0;for(const i of Object.values(t.inputs)){if(!i)continue;const r=e.edgeSource.get(i);if(!r)continue;const s=e.nodeById.get(r);if(s&&(s.type==="time"||Cc(s,e,n)))return!0}return!1}function Ch(t,e,n,i=new Set){if(i.has(t))return!0;i.add(t);let r=!1;for(const s of e.edges){if(s.source!==t)continue;r=!0;const a=n.nodeById.get(s.target);if(!a)return!1;if(!((a.type==="textureSample"||a.type==="particleSubUV")&&s.targetHandle==="uv")){if(Ah.has(a.type)){if(!Ch(a.id,e,n,i))return!1;continue}return!1}}return r}function py(t,e){for(const n of wh(t)){const i=t.outputs[n];if(!i)continue;const r=e.edgeSource.get(i);if(!r)continue;const s=e.nodeById.get(r);if(!s)return!1;if(!(s.type==="textureSample"||s.type==="particleSubUV"))return!1}return!0}function my(t){try{t=Ui(t)}catch{return{tier:"tier3-defer",deferredNodeIds:t.nodes.filter(d=>d.type==="subgraph").map(d=>d.id),vertexUvNodeIds:[],perParticleNodeIds:[]}}const e=Object.values(t.outputs).every(d=>!d)||t.nodes.length===0;if(sl(t)||e)return{tier:"tier1-fixed",deferredNodeIds:[],vertexUvNodeIds:[],perParticleNodeIds:[]};const n=us(t),i=xa(t,n),r=[];for(const d of i){const f=n.nodeById.get(d);f&&ay.has(f.type)&&r.push(d)}if(r.length>0)return{tier:"tier3-defer",deferredNodeIds:r,vertexUvNodeIds:[],perParticleNodeIds:[]};if([...i].some(d=>{const f=n.nodeById.get(d);return!!f&&nl.has(f.type)})||uy(t,n))return{tier:"tier2-shader",deferredNodeIds:[],vertexUvNodeIds:[],perParticleNodeIds:Zu(t,n,i)};const a=[];for(const d of i){const f=n.nodeById.get(d);f&&(f.type!=="panner"&&f.type!=="rotateUV"||Cc(f,n)&&Ch(f.id,t,n)&&a.push(f.id))}const o=new Set(a),c=Zu(t,n,i),l=c.length>0;if([...i].some(d=>{const f=n.nodeById.get(d);return(f==null?void 0:f.type)==="twoSidedSign"||(f==null?void 0:f.type)==="polarCoordinates"||(f==null?void 0:f.type)==="panner"&&!!f.inputs.speed&&n.edgeSource.has(f.inputs.speed)}))return{tier:"tier2-shader",deferredNodeIds:[],vertexUvNodeIds:[],perParticleNodeIds:c};let u=!1;for(const d of i){const f=n.nodeById.get(d);if(f){if(Ah.has(f.type)){if(Cc(f,n)&&!o.has(f.id)){u=!0;break}continue}if(f.type==="dynamicParameter"){u=!0;break}if(ly(f)){u=!0;break}if(cy.has(f.type)&&Rh(f,n)){u=!0;break}}}let h=!0;for(const d of i){const f=n.nodeById.get(d);if(f&&!$S.has(f.type)){h=!1;break}}return!l&&!u&&a.length===0&&h?{tier:"tier0-bake",deferredNodeIds:[],vertexUvNodeIds:[],perParticleNodeIds:[]}:py(t,n)?{tier:"tier1-fixed",deferredNodeIds:[],vertexUvNodeIds:a,perParticleNodeIds:c}:!l&&!u&&h?{tier:"tier0-bake",deferredNodeIds:[],vertexUvNodeIds:[],perParticleNodeIds:[]}:{tier:"tier2-shader",deferredNodeIds:[],vertexUvNodeIds:a,perParticleNodeIds:c}}function Zu(t,e,n){const i=[];for(const r of n){const s=e.nodeById.get(r);s&&(ll.has(s.type)||s.type==="dynamicParameter"||s.type==="param"&&xy(s,t))&&i.push(s.id)}return i}function gy(t){return typeof t=="number"?t!==0:Array.isArray(t)?t.some(e=>typeof e=="number"&&e!==0):!1}function xy(t,e){const n=typeof t.params.name=="string"?t.params.name:"",i=e.params.find(r=>r.name===n);return(i==null?void 0:i.perParticle)===!0}function Rh(t,e,n=new Set){if(n.has(t.id))return!1;n.add(t.id);for(const i of Object.values(t.inputs)){if(!i)continue;const r=e.edgeSource.get(i);if(!r)continue;const s=e.nodeById.get(r);if(s&&(s.type==="time"||s.type==="dynamicParameter"||ll.has(s.type)||Rh(s,e,n)))return!0}return!1}function vy(t){if(t.perParticleFeed)return t.perParticleFeed;if(!(t.sliderMin!==void 0&&t.sliderMax!==void 0))return"spawn-color";const n=t.clampMin??t.sliderMin??0,i=t.clampMax??t.sliderMax??1;return n===i?"spawn-color":n>=0&&i<=1?"smuggle-8bit":"mesh-attr"}function _y(t){return Array.isArray(t)?[t[0]??0,t[1]??0,t[2]??0,t[3]??0]:[1,1,1,1]}function Ku(t,e,n,i){const r=Hi(t,e,n);return typeof r=="number"?r:i}function Eo(t,e,n,i){const r=sl(t),a=r&&t.params.find(d=>d.name==="Tint"&&d.type==="color")?_y(Hi(t,e,"Tint")):[1,1,1,1],c=r&&t.params.some(d=>d.name==="Emissive")?Ku(t,e,"Emissive",0):0,u=r&&t.params.some(d=>d.name==="Opacity")?Ku(t,e,"Opacity",1):1,h={tint:a,emissive:c,opacity:u,blend:t.blend};for(const d of i){const f=n.nodeById.get(d);if(f){if(f.type==="panner"){const p=f.params.speed,x={speed:Array.isArray(p)?[ae(p[0],0),ae(p[1],0)]:[ae(f.params.speedX,0),ae(f.params.speedY,0)]};h.uvPan=x}else if(f.type==="rotateUV"){const p=f.params.center,x={speed:ae(f.params.speed,0),center:Array.isArray(p)?[ae(p[0],.5),ae(p[1],.5)]:[.5,.5]};h.uvRotate=x}}}return h}function Ph(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619)>>>0;return(e>>>0).toString(16).padStart(8,"0")}function My(t,e,n){const i=JSON.stringify({graph:ph(t),instance:Av(e),mainTex:n??null});return Ph(i)}function Sy(t,e,n={}){const i=yy(t,e,n);let r=!1;try{const s=Ui(t),a=us(s);for(const o of xa(s,a)){const c=a.nodeById.get(o);if(c&&nl.has(c.type)){r=!0;break}}}catch{r=!1}return{...i,shadingModel:t.shadingModel==="lit"?"lit":"unlit",usesSceneLighting:r}}function yy(t,e,n){try{t=Ui(t)}catch(u){return{tier:"tier3-defer",shaderId:di,blend:t.blend,perParticleFeeds:{},diagnostics:[u instanceof Error?u.message:String(u)],deferredNodeIds:t.nodes.filter(h=>h.type==="subgraph").map(h=>h.id),usesParticleColorRGB:!1,usesParticleColorAlpha:!1,opacityIsConstantOne:!1}}const i=n.mainTexUid??null,r=my(t),s=us(t);if(t.colorVersion===1&&r.tier!=="tier3-defer"&&(r.tier="tier2-shader",r.vertexUvNodeIds=[]),r.tier==="tier0-bake"||r.tier==="tier1-fixed")for(const u of xa(t,s)){const h=s.nodeById.get(u);if(!h||h.type!=="textureSample"&&h.type!=="particleSubUV"&&h.type!=="antialiasedTextureMask")continue;const d=rl(t,e,h,s.nodeById,s.edgeById);if(d.path&&!d.isMainTex){r.tier="tier2-shader",r.vertexUvNodeIds=[];break}}const a=dy(t,s),o=fy(t,s),c=[],l={};for(const u of t.params)u.perParticle&&(l[u.name]=vy(u));switch(r.tier){case"tier3-defer":{const u=r.deferredNodeIds.map(h=>{var d;return((d=s.nodeById.get(h))==null?void 0:d.type)??h}).join(", ");return c.push(`Tier 3: graph reaches deferred node(s) [${u}] — not rendered in preview, exported data-only (techspec §4.2).`),{tier:"tier3-defer",shaderId:di,blend:t.blend,perParticleFeeds:l,diagnostics:c,deferredNodeIds:r.deferredNodeIds,usesParticleColorRGB:a.rgb,usesParticleColorAlpha:a.alpha,opacityIsConstantOne:o}}case"tier0-bake":return{tier:"tier0-bake",shaderId:di,blend:t.blend,bakeHash:My(t,e,i),fixed:Eo(t,e,s,[]),perParticleFeeds:l,diagnostics:c,deferredNodeIds:[],usesParticleColorRGB:a.rgb,usesParticleColorAlpha:a.alpha,opacityIsConstantOne:o};case"tier1-fixed":return{tier:"tier1-fixed",shaderId:di,blend:t.blend,fixed:Eo(t,e,s,r.vertexUvNodeIds),perParticleFeeds:l,diagnostics:c,deferredNodeIds:[],usesParticleColorRGB:a.rgb,usesParticleColorAlpha:a.alpha,opacityIsConstantOne:o};case"tier2-shader":{const u=`mat-${Ph(JSON.stringify(ph(t)))}`;for(const[f,p]of Object.entries(l))p==="mesh-attr"&&c.push(`Tier 2 custom Mesh path required: DynamicParameter "${f}" needs an independent per-particle float attribute; ParticleContainer exposes only vertex/position/rotation/uvs/color.`);const h=r.perParticleNodeIds.map(f=>s.nodeById.get(f)).filter(f=>!!f&&Yu.has(f.type));for(const f of h)c.push(`Tier 2 custom Mesh path required: ${f.type} needs a per-particle attribute that ParticleContainer does not expose.`);const d=r.perParticleNodeIds.map(f=>s.nodeById.get(f)).filter(f=>!!f&&ll.has(f.type)&&!oy.has(f.type)&&!Yu.has(f.type));for(const f of d)c.push(`Tier 2 custom Mesh path required: ${f.type} is not available on the ParticleContainer shader path.`);return{tier:"tier2-shader",shaderId:u,blend:t.blend,fixed:Eo(t,e,s,r.vertexUvNodeIds),perParticleFeeds:l,diagnostics:c,deferredNodeIds:[],usesParticleColorRGB:a.rgb,usesParticleColorAlpha:a.alpha,opacityIsConstantOne:o}}}}function bo(t,e){return t.colorVersion!==1||e.params.samplerType==="linear"?!1:e.params.samplerType==="srgb"?!0:t.edges.some(n=>n.source===e.id&&!["R","G","B","A"].includes(n.sourceHandle))}var Ju=`
precision mediump float;

varying vec2 vUV;
varying vec4 vColor;

uniform sampler2D uTexture;
uniform float uTime;
uniform vec4 uFixedTint;
uniform float uFixedEmissive;
uniform float uFixedOpacity;
uniform float uClipValue;
uniform vec2 uSheetTiles;
uniform vec4 uSubUv;
uniform float uSubUvFromAttr;
uniform vec4 uDynamicParams;

float materialLuminance(vec3 c) {
  return dot(c, vec3(0.2126, 0.7152, 0.0722));
}

float materialHash(vec2 p, float seed) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031 + seed * 0.00317);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float materialValueNoise(vec2 p, float seed) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = materialHash(i, seed);
  float b = materialHash(i + vec2(1.0, 0.0), seed);
  float c = materialHash(i + vec2(0.0, 1.0), seed);
  float d = materialHash(i + vec2(1.0, 1.0), seed);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float materialGradientNoise(vec2 p, float seed) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a0 = materialHash(i, seed) * 6.2831853;
  float a1 = materialHash(i + vec2(1.0, 0.0), seed) * 6.2831853;
  float a2 = materialHash(i + vec2(0.0, 1.0), seed) * 6.2831853;
  float a3 = materialHash(i + vec2(1.0, 1.0), seed) * 6.2831853;
  float n00 = dot(vec2(cos(a0), sin(a0)), f);
  float n10 = dot(vec2(cos(a1), sin(a1)), f - vec2(1.0, 0.0));
  float n01 = dot(vec2(cos(a2), sin(a2)), f - vec2(0.0, 1.0));
  float n11 = dot(vec2(cos(a3), sin(a3)), f - vec2(1.0, 1.0));
  return clamp(mix(mix(n00, n10, u.x), mix(n01, n11, u.x), u.y) * 0.7071 + 0.5, 0.0, 1.0);
}

float materialVoronoiNoise(vec2 p, float seed) {
  vec2 i = floor(p);
  float minD = 100000.0;
  for (int oy = -1; oy <= 1; oy++) {
    for (int ox = -1; ox <= 1; ox++) {
      vec2 cell = i + vec2(float(ox), float(oy));
      vec2 feature = cell + vec2(
        materialHash(cell, seed),
        materialHash(cell, seed + 37.719)
      );
      vec2 diff = feature - p;
      minD = min(minD, dot(diff, diff));
    }
  }
  return min(1.0, sqrt(minD));
}

float materialScalarNoise(vec2 uv, float scale, float seed, float outputMin, float outputMax, float mode) {
  vec2 p = uv * max(scale, 0.0001);
  float n = mode > 1.5
    ? materialVoronoiNoise(p, seed)
    : (mode > 0.5 ? materialValueNoise(p, seed) : materialGradientNoise(p, seed));
  return mix(outputMin, outputMax, n);
}

vec4 materialSampleMain(vec2 uv) {
  return texture2D(uTexture, uSubUv.xy + fract(uv) * uSubUv.zw);
}

vec4 materialSampleSubUvBlend(vec2 uv) {
  vec4 current = materialSampleMain(uv);
  if (uSubUvFromAttr > 0.5) return current;
  vec2 tiles = max(floor(uSheetTiles + 0.5), vec2(1.0, 1.0));
  float total = max(1.0, tiles.x * tiles.y);
  if (total <= 1.0) return current;
  vec2 scaled = (uSubUv.xy + fract(uv) * uSubUv.zw) * tiles;
  vec2 cell = floor(scaled);
  vec2 local = fract(scaled);
  float frame = mod((tiles.y - 1.0 - cell.y) * tiles.x + cell.x, total);
  float nextFrame = mod(frame + 1.0, total);
  vec2 nextCell = vec2(
    mod(nextFrame, tiles.x),
    tiles.y - 1.0 - floor(nextFrame / tiles.x)
  );
  vec2 nextUv = (nextCell + local) / tiles;
  return mix(current, texture2D(uTexture, nextUv), clamp(vColor.a, 0.0, 1.0));
}
`,Ey=`
const float NFX_RECIPROCAL_PI = 0.3183098861837907;

#ifdef NFX_SCENE_LIGHTS
varying vec3 vNfxViewPosition;
varying vec3 vNfxViewNormal;
varying vec3 vNfxWorldPosition;

// Three draws transparent double-sided meshes as a BackSide pass, then a
// FrontSide pass. The BackSide pass flips the winding (FLIP_SIDED), so
// gl_FrontFacing is true there for the rear faces being drawn.
bool nfxIsFrontFace() {
#ifdef FLIP_SIDED
  return !gl_FrontFacing;
#else
  return gl_FrontFacing;
#endif
}
vec3 nfxGeometryViewNormal() {
  vec3 n = normalize(vNfxViewNormal);
  return nfxIsFrontFace() ? n : -n;
}
vec3 nfxViewPosition() { return -vNfxViewPosition; }
vec3 nfxViewDirectionView() {
  return isOrthographic ? vec3(0.0, 0.0, 1.0) : normalize(vNfxViewPosition);
}
vec3 nfxViewToWorld(vec3 v) { return normalize((vec4(v, 0.0) * viewMatrix).xyz); }
vec3 nfxWorldPosition() { return vNfxWorldPosition; }
vec3 nfxApplyTangentNormal(vec3 n, vec3 tangentNormal) {
  vec3 p = -vNfxViewPosition;
  vec3 dp1 = dFdx(p);
  vec3 dp2 = dFdy(p);
  vec2 duv1 = dFdx(vUV);
  vec2 duv2 = dFdy(vUV);
  vec3 dp2perp = cross(dp2, n);
  vec3 dp1perp = cross(n, dp1);
  vec3 t = dp2perp * duv1.x + dp1perp * duv2.x;
  vec3 b = dp2perp * duv1.y + dp1perp * duv2.y;
  float det = max(dot(t, t), dot(b, b));
  if (det <= 0.0) return n;
  float scale = inversesqrt(det) * (nfxIsFrontFace() ? 1.0 : -1.0);
  return normalize(mat3(t * scale, b * scale, n) * tangentNormal);
}
#else
vec3 nfxGeometryViewNormal() { return vec3(0.0, 0.0, 1.0); }
vec3 nfxViewPosition() { return vec3(vUV * 2.0 - 1.0, 0.0); }
vec3 nfxViewDirectionView() { return vec3(0.0, 0.0, 1.0); }
vec3 nfxViewToWorld(vec3 v) { return v; }
vec3 nfxWorldPosition() { return vec3(vUV - 0.5, 0.0); }
vec3 nfxApplyTangentNormal(vec3 n, vec3 tangentNormal) {
  return normalize(tangentNormal);
}
#endif

vec3 nfxMainLightDirectionView() {
#ifdef NFX_SCENE_LIGHTS
#if NUM_DIR_LIGHTS > 0
  return directionalLights[0].direction;
#else
  return normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
#endif
#elif defined(NFX_PREVIEW_LIGHTS)
  return normalize(vec3(3.0, 6.0, 5.0));
#else
  return vec3(0.0, 0.0, 1.0);
#endif
}

vec3 nfxMainLightColor() {
#ifdef NFX_SCENE_LIGHTS
#if NUM_DIR_LIGHTS > 0
  return directionalLights[0].color * NFX_RECIPROCAL_PI;
#else
  return vec3(0.0);
#endif
#elif defined(NFX_PREVIEW_LIGHTS)
  return vec3(2.2 * NFX_RECIPROCAL_PI);
#else
  return vec3(1.0);
#endif
}

vec3 nfxAmbientIrradiance(vec3 viewNormal) {
#ifdef NFX_SCENE_LIGHTS
  vec3 irradiance = ambientLightColor;
#if NUM_HEMI_LIGHTS > 0
  for (int i = 0; i < NUM_HEMI_LIGHTS; i++) {
    irradiance += getHemisphereLightIrradiance(hemisphereLights[i], viewNormal);
  }
#endif
  return irradiance;
#elif defined(NFX_PREVIEW_LIGHTS)
  float w = 0.5 * viewNormal.y + 0.5;
  return mix(vec3(0.0823, 0.1170, 0.1590), vec3(0.9301, 0.9473, 1.0), w) * 1.15;
#else
  return vec3(0.0);
#endif
}

vec3 nfxSpecularGGX(vec3 l, vec3 v, vec3 n, vec3 f0, float roughness) {
  float alpha = max(roughness * roughness, 0.0025);
  vec3 h = normalize(l + v);
  float dotNL = clamp(dot(n, l), 0.0, 1.0);
  float dotNV = clamp(dot(n, v), 0.0, 1.0);
  float dotNH = clamp(dot(n, h), 0.0, 1.0);
  float dotVH = clamp(dot(v, h), 0.0, 1.0);
  vec3 fresnel = f0 + (vec3(1.0) - f0) * pow(1.0 - dotVH, 5.0);
  float a2 = alpha * alpha;
  float visV = dotNL * sqrt(a2 + (1.0 - a2) * dotNV * dotNV);
  float visL = dotNV * sqrt(a2 + (1.0 - a2) * dotNL * dotNL);
  float visibility = 0.5 / max(visV + visL, 0.000001);
  float denom = dotNH * dotNH * (a2 - 1.0) + 1.0;
  float distribution = NFX_RECIPROCAL_PI * a2 / max(denom * denom, 0.000001);
  return fresnel * (visibility * distribution);
}

vec3 nfxLightContribution(vec3 l, vec3 color, vec3 n, vec3 v, vec3 diffuseColor, vec3 f0, float roughness, float specular) {
  float dotNL = clamp(dot(n, l), 0.0, 1.0);
  vec3 irradiance = dotNL * color;
  return irradiance * (diffuseColor * NFX_RECIPROCAL_PI + specular * nfxSpecularGGX(l, v, n, f0, roughness));
}

vec3 nfxShadeSurface(vec3 albedo, vec3 n, vec3 v, vec3 p, float roughness, float metallic, float specular) {
  vec3 diffuseColor = albedo * (1.0 - metallic);
  vec3 f0 = mix(vec3(0.04), albedo, metallic);
  vec3 color = vec3(0.0);
#ifdef NFX_SCENE_LIGHTS
  IncidentLight light;
#if NUM_DIR_LIGHTS > 0
  for (int i = 0; i < NUM_DIR_LIGHTS; i++) {
    getDirectionalLightInfo(directionalLights[i], light);
    color += nfxLightContribution(light.direction, light.color, n, v, diffuseColor, f0, roughness, specular);
  }
#endif
#if NUM_POINT_LIGHTS > 0
  for (int i = 0; i < NUM_POINT_LIGHTS; i++) {
    getPointLightInfo(pointLights[i], p, light);
    if (light.visible) color += nfxLightContribution(light.direction, light.color, n, v, diffuseColor, f0, roughness, specular);
  }
#endif
#if NUM_SPOT_LIGHTS > 0
  for (int i = 0; i < NUM_SPOT_LIGHTS; i++) {
    getSpotLightInfo(spotLights[i], p, light);
    if (light.visible) color += nfxLightContribution(light.direction, light.color, n, v, diffuseColor, f0, roughness, specular);
  }
#endif
#elif defined(NFX_PREVIEW_LIGHTS)
  color += nfxLightContribution(normalize(vec3(3.0, 6.0, 5.0)), vec3(2.2), n, v, diffuseColor, f0, roughness, specular);
  color += nfxLightContribution(normalize(vec3(-4.0, 2.5, -3.0)), vec3(0.3467, 0.4851, 1.0) * 0.55, n, v, diffuseColor, f0, roughness, specular);
#endif
  color += nfxAmbientIrradiance(n) * diffuseColor * NFX_RECIPROCAL_PI;
  return color;
}

/** Lit shading model: BaseColor lit by the scene (unlit passthrough on Pixi). */
vec3 nfxShadeLit(vec3 albedo, vec3 tangentNormal, float roughness, float metallic) {
#if defined(NFX_SCENE_LIGHTS) || defined(NFX_PREVIEW_LIGHTS)
  vec3 n = nfxApplyTangentNormal(nfxGeometryViewNormal(), tangentNormal);
  return nfxShadeSurface(albedo, n, nfxViewDirectionView(), nfxViewPosition(), clamp(roughness, 0.0, 1.0), clamp(metallic, 0.0, 1.0), 1.0);
#else
  return albedo;
#endif
}

/** Diffuse irradiance (direct + ambient) at the surface, multiply-ready. */
vec3 nfxDiffuseLighting() {
#if defined(NFX_SCENE_LIGHTS) || defined(NFX_PREVIEW_LIGHTS)
  vec3 n = nfxGeometryViewNormal();
  return nfxShadeSurface(vec3(1.0), n, nfxViewDirectionView(), nfxViewPosition(), 1.0, 0.0, 0.0);
#else
  return vec3(1.0);
#endif
}

/** Normal-map texel (0..1) to a tangent-space normal, Unity "Normal Unpack". */
vec4 nfxUnpackNormal(vec4 texel, float strength) {
  vec3 n = texel.xyz * 2.0 - 1.0;
  n.xy *= strength;
  return vec4(normalize(vec3(n.xy, max(n.z, 0.0001))), 1.0);
}

vec3 nfxAmbientColor() {
  return nfxAmbientIrradiance(nfxGeometryViewNormal()) * NFX_RECIPROCAL_PI;
}
`,Qu=7;function by(t){return t.tier!=="tier2-shader"?!1:!t.diagnostics.some(e=>e.includes("custom Mesh path required"))}function Ty({artifact:t,graph:e,instance:n}){if(t.tier==="tier3-defer")return null;const i=new Ay(e,n);return{fragment:i.fragmentSource(t.fixed),samplers:i.samplerBindings(),diagnostics:i.samplerDiagnostics()}}var Ay=class Dh{constructor(e,n){Y(this,"graph",e),Y(this,"instance",n),Y(this,"authoredGraph"),Y(this,"readsParticleColor",!1),Y(this,"nodeById",new Map),Y(this,"edgeById",new Map),Y(this,"nodeSamplerUniform",new Map),Y(this,"samplers",[]),Y(this,"samplerDiagnosticMessages",[]),this.authoredGraph=e,e=Ui(e),this.graph=e;for(const i of e.nodes)this.nodeById.set(i.id,i);for(const i of e.edges)this.edgeById.set(i.id,i);this.collectSamplers()}samplerBindings(){return this.samplers.map(e=>({...e}))}samplerDiagnostics(){return[...this.samplerDiagnosticMessages]}collectSamplers(){const e=this.graph.nodes.filter(i=>i.type==="textureSample"||i.type==="particleSubUV"||i.type==="antialiasedTextureMask").filter(i=>{const r=this.resolveNodeTexBinding(i);return r.path!==""&&!r.isMainTex}).sort((i,r)=>i.id<r.id?-1:i.id>r.id?1:0);let n=0;for(const i of e){if(n>=Qu){this.samplerDiagnosticMessages.push(`Material uses more than ${Qu} per-node textures; node "${i.id}" falls back to MainTex.`);continue}const r=`uTex${n}`;n+=1,this.nodeSamplerUniform.set(i.id,r),this.samplers.push({nodeId:i.id,uniform:r,path:this.resolveNodeTexBinding(i).path})}}resolveNodeTexBinding(e){return rl(this.graph,this.instance,e,this.nodeById,this.edgeById)}header(){let n=this.graph.shadingModel==="lit"||this.graph.nodes.some(i=>nl.has(i.type)||i.type==="unpackNormal")?`${Ju}${Ey}`:Ju;return this.graph.colorVersion===1&&(n+=Cy),this.graph.nodes.some(i=>i.type==="twoSidedSign")?`${n}
float materialTwoSidedSign() {
#ifdef FLIP_SIDED
  return gl_FrontFacing ? -1.0 : 1.0;
#else
  return gl_FrontFacing ? 1.0 : -1.0;
#endif
}
`:n}surfaceColorLine(){if(this.graph.shadingModel!=="lit")return"outColor.rgb = outColor.rgb * uFixedTint.rgb + emissiveColor.rgb;";const e=this.slotExpr("normal"),n=this.slotScalarExpr("roughness")??UM.toFixed(8),i=this.slotScalarExpr("metallic")??OM.toFixed(8);return`outColor.rgb = nfxShadeLit(outColor.rgb * uFixedTint.rgb, ${e?`(${e}).xyz`:"vec3(0.0, 0.0, 1.0)"}, ${n}, ${i}) + emissiveColor.rgb;`}samplerUniformDeclarations(){return this.samplers.length===0?"":`${this.samplers.map(e=>`uniform sampler2D ${e.uniform};`).join(`
`)}
`}fragmentSource(e){this.readsParticleColor=!1;const n=this.slotExpr("baseColor"),i=this.slotExpr("emissive"),r=this.slotScalarExpr("opacity"),s=this.slotExpr("opacityMask"),a=n!==null,o=i!==null,c=n??this.colorExpr("materialSampleMain(vUV)"),l=i??"vec4(0.0)",u=r??(a?`(${c}).a`:o?`materialLuminance((${l}).rgb)`:"materialSampleMain(vUV).a"),h=s??"vec4(1.0)",d=e?"uFixedEmissive":"0.0",f=this.graph.colorVersion===1?this.surfaceColorLine():null;if(this.graph.blend==="opaque")return`${this.header()}${this.samplerUniformDeclarations()}
void main(void) {
  vec4 baseColor = ${c};
  vec4 emissiveColor = ${l};
  vec4 outColor = baseColor;
  ${f??this.surfaceColorLine()}
  outColor.rgb *= (1.0 + max(0.0, ${d}));
  ${this.particleMultiply()}
  outColor.a = 1.0;
  ${this.outputLine()}
}
`;const p=this.graph.blend==="masked"&&s===null?"opacityValue":`(${h}).r`,x=this.graph.blend==="masked"?`${this.particleMultiply()}
  outColor.a = 1.0;`:`outColor.a = opacityValue * uFixedTint.a * uFixedOpacity;
  ${this.particleMultiply()}`;return`${this.header()}${this.samplerUniformDeclarations()}
void main(void) {
  vec4 baseColor = ${c};
  vec4 emissiveColor = ${l};
  float opacityValue = clamp((${u}), 0.0, 1.0);
  float maskValue = ${p};
  if (maskValue < uClipValue) discard;
  vec4 outColor = baseColor;
  ${f??this.surfaceColorLine()}
  outColor.rgb *= (1.0 + max(0.0, ${d}));
  ${x}
  ${this.outputLine()}
}
`}particleMultiply(){return this.graph.colorVersion!==1?"outColor *= vColor;":this.readsParticleColor?"":"outColor *= materialSrgbToLinear(vColor);"}outputLine(){return this.graph.colorVersion===1?"gl_FragColor = materialEncodeOutput(outColor);":"gl_FragColor = outColor;"}colorExpr(e){return this.graph.colorVersion===1?`materialSrgbToLinear(${e})`:e}nodePreviewFragmentSource(e,n="out"){var o,c;const i=this.authoredGraph.nodes.find(l=>l.id===e);if((i==null?void 0:i.type)==="subgraph"){const l=i.params.graph,u=n==="out"?(c=(o=l.subgraph)==null?void 0:o.outputs[0])==null?void 0:c.id:n;if(!u)return null;const h=`preview:${e}`,d=Ui({...this.authoredGraph,edges:[...this.authoredGraph.edges,{id:h,source:e,sourceHandle:u,target:"preview-output",targetHandle:"baseColor"}],outputs:{baseColor:h}}),f=d.edges.find(p=>p.id===h);return new Dh(d,this.instance).nodePreviewFragmentSource(f.source,f.sourceHandle)}const r=this.nodeById.get(e);if(!r)return null;const s=this.evalNode(r,new Set),a=this.select(s,wy(r,n));return`${this.header()}${this.samplerUniformDeclarations()}
void main(void) {
  vec4 value = ${a};
  gl_FragColor = ${this.graph.colorVersion===1?"materialEncodeOutput(":""}vec4(clamp(value.rgb, 0.0, 1.0), ${r.type==="polarCoordinates"?"1.0":"clamp(value.a, 0.0, 1.0)"})${this.graph.colorVersion===1?")":""};
}
`}slotExpr(e){const n=this.graph.outputs[e];if(!n)return null;const i=this.edgeById.get(n),r=i?this.nodeById.get(i.source):void 0;return!i||!r?null:this.select(this.evalNode(r,new Set),i.sourceHandle)}slotScalarExpr(e){const n=this.slotExpr(e);return n?`((${n}).r)`:null}evalNode(e,n){if(n.has(e.id))return"vec4(0.0)";n.add(e.id);const i=this.evalInner(e,n);return n.delete(e.id),i}evalInner(e,n){var o;const i=e.params,r=(c,l)=>{const u=e.inputs[c];if(!u)return l;const h=this.edgeById.get(u),d=h?this.nodeById.get(h.source):void 0;return!h||!d?l:this.select(this.evalNode(d,n),h.sourceHandle)},s=(c,l)=>`(${r(c,this.scalar(l))}).r`,a=()=>e.inputs.uv?`(${r("uv","vec4(vUV, 0.0, 0.0)")}).xy`:"vUV";switch(e.type){case"constant":return i.kind==="color"||i.kind===void 0&&Array.isArray(i.value)?this.colorExpr(this.constVec4(i.value)):this.constVec4(i.value);case"time":return"vec4(uTime)";case"twoSidedSign":return"vec4(materialTwoSidedSign())";case"param":{const c=typeof i.name=="string"?i.name:"",l=this.constVec4(Hi(this.graph,this.instance,c));return((o=this.graph.params.find(u=>u.name===c))==null?void 0:o.type)==="color"?this.colorExpr(l):l}case"textureSample":{const c=this.sampleTexture(e,a());return bo(this.graph,e)?this.colorExpr(c):c}case"particleSubUV":{const c=this.nodeSamplerUniform.get(e.id);if(c){const u=`texture2D(${c}, fract(${a()}))`;return bo(this.graph,e)?this.colorExpr(u):u}const l=i.blend===!0?`materialSampleSubUvBlend(${a()})`:`materialSampleMain(${a()})`;return bo(this.graph,e)?this.colorExpr(l):l}case"uv":return"vec4(vUV, 0.0, 0.0)";case"tilingOffset":{const c=r("uv","vec4(vUV, 0.0, 0.0)"),l=r("tile",this.constVec4(i.tile,[1,1,0,0])),u=r("offset",this.constVec4(i.offset));return`vec4((${c}).xy * (${l}).xy + (${u}).xy, 0.0, 0.0)`}case"panner":{const c=r("uv","vec4(vUV, 0.0, 0.0)"),l=e.inputs.time?s("time",0):"uTime",u=r("speed",this.constVec4(i.speed));return`vec4((${c}).xy + (${l}) * (${u}).xy, 0.0, 0.0)`}case"polarCoordinates":{const c=r("UV","vec4(vUV, 0.0, 0.0)"),l=r("Center",this.constVec4(i.center,[.5,.5,0,0])),u=s("Radial Scale",this.number(i.radialScale,1)),h=s("Length Scale",this.number(i.lengthScale,1)),d=`((${c}).xy - (${l}).xy)`,f=`(dot(${d}, ${d}) == 0.0 ? 0.0 : atan((${d}).x, (${d}).y))`;return`vec4(length(${d}) * 2.0 * (${u}), ${f} / 6.28 * (${h}), 0.0, 0.0)`}case"rotateUV":{const c=r("uv","vec4(vUV, 0.0, 0.0)"),l=this.constVec4(i.center,[.5,.5,0,0]),u=this.number(i.speed,0);return`(vec4(((${l}).xy) + mat2(cos(${u.toFixed(8)} * uTime * 6.2831853), sin(${u.toFixed(8)} * uTime * 6.2831853), -sin(${u.toFixed(8)} * uTime * 6.2831853), cos(${u.toFixed(8)} * uTime * 6.2831853)) * ((${c}).xy - (${l}).xy), 0.0, 0.0))`}case"fresnelTrue":{const c=r("normal","vec4(nfxViewToWorld(nfxGeometryViewNormal()), 0.0)"),l=r("viewDir","vec4(nfxViewToWorld(nfxViewDirectionView()), 0.0)"),u=s("power",this.number(i.power,1));return`vec4(pow(1.0 - clamp(dot(normalize((${c}).xyz), normalize((${l}).xyz)), 0.0, 1.0), ${u}))`}case"fresnel":{const c=this.constVec4(i.center,[.5,.5,0,0]),l=Math.max(0,this.number(i.power,1));return`vec4(pow(max(0.0, 1.0 - clamp(length(vUV - (${c}).xy) * 2.0, 0.0, 1.0)), ${l.toFixed(8)}))`}case"sphereMask":{const c=this.constVec4(i.center,[.5,.5,0,0]),l=Math.max(1e-4,this.number(i.radius,.5)),u=Math.max(0,Math.min(1,this.number(i.hardness,.5))),h=l*(1-u)+1e-4;return`vec4(clamp(1.0 - ((length(vUV - (${c}).xy) - ${(l-h).toFixed(8)}) / ${h.toFixed(8)}), 0.0, 1.0))`}case"particleColor":return this.readsParticleColor=!0,this.colorExpr("vColor");case"particleRelativeTime":return"vec4(clamp(vColor.a, 0.0, 1.0))";case"particleRandom":return"vec4(fract(vColor.r + vColor.g * 13.17 + vColor.b * 7.31))";case"particleSpeed":case"particleSize":case"particleDirection":case"particlePosition":case"particleMacroUV":return"vec4(0.0)";case"dynamicParameter":return"uDynamicParams";case"sceneWorldNormal":return"vec4(nfxViewToWorld(nfxGeometryViewNormal()), 0.0)";case"sceneWorldPosition":return"vec4(nfxWorldPosition(), 1.0)";case"sceneViewDirection":return"vec4(nfxViewToWorld(nfxViewDirectionView()), 0.0)";case"mainLightDirection":return"vec4(nfxViewToWorld(nfxMainLightDirectionView()), 0.0)";case"mainLightColor":return"vec4(nfxMainLightColor(), 1.0)";case"sceneAmbientColor":return"vec4(nfxAmbientColor(), 1.0)";case"sceneDiffuseLighting":return"vec4(nfxDiffuseLighting(), 1.0)";case"unpackNormal":{const c=e.inputs.strength?s("strength",1):this.number(i.strength,1).toFixed(8);return`nfxUnpackNormal(${r("in","vec4(0.5, 0.5, 1.0, 1.0)")}, ${c})`}case"multiply":return`((${r("a",this.scalar(this.number(i.a,1)))}) * (${r("b",this.scalar(this.number(i.b,1)))}))`;case"add":return`((${r("a",this.scalar(this.number(i.a,0)))}) + (${r("b",this.scalar(this.number(i.b,0)))}))`;case"subtract":return`((${r("a",this.scalar(this.number(i.a,0)))}) - (${r("b",this.scalar(this.number(i.b,0)))}))`;case"divide":return`((${r("a",this.scalar(this.number(i.a,0)))}) / max(abs(${r("b",this.scalar(this.number(i.b,1)))}), vec4(0.000001)))`;case"min":return`min(${r("a","vec4(0.0)")}, ${r("b","vec4(0.0)")})`;case"max":return`max(${r("a","vec4(0.0)")}, ${r("b","vec4(0.0)")})`;case"lerp":{const c=e.inputs.t?r("t","vec4(0.5)"):this.scalar(this.number(i.t,.5));return`mix(${r("a",this.scalar(this.number(i.a,0)))}, ${r("b",this.scalar(this.number(i.b,1)))}, ${c})`}case"oneMinus":return`(vec4(1.0) - (${r("in","vec4(0.0)")}))`;case"clamp":{const c=e.inputs.min?s("min",0):this.number(i.min,0).toFixed(8),l=e.inputs.max?s("max",1):this.number(i.max,1).toFixed(8);return`clamp(${r("in","vec4(0.0)")}, vec4(${c}), vec4(${l}))`}case"step":return`step(vec4(${e.inputs.edge?s("edge",.5):this.number(i.edge,.5).toFixed(8)}), ${r("in","vec4(0.0)")})`;case"smoothstep":{const c=e.inputs.edge0?s("edge0",0):this.number(i.edge0,0).toFixed(8),l=e.inputs.edge1?s("edge1",1):this.number(i.edge1,1).toFixed(8);return`smoothstep(vec4(${c}), vec4(${l}), ${r("in","vec4(0.0)")})`}case"power":{const c=e.inputs.exp?r("exp","vec4(1.0)"):this.scalar(this.number(i.exponent,1));return`pow(max(${r("in","vec4(0.0)")}, vec4(0.0)), ${c})`}case"remap":{const c=r("in","vec4(0.0)"),l=e.inputs.inMin?s("inMin",0):this.number(i.inMin,0).toFixed(8),u=e.inputs.inMax?s("inMax",1):this.number(i.inMax,1).toFixed(8),h=e.inputs.outMin?s("outMin",0):this.number(i.outMin,0).toFixed(8),d=e.inputs.outMax?s("outMax",1):this.number(i.outMax,1).toFixed(8);return`(vec4(${h}) + (((${c}) - vec4(${l})) / max(vec4(${u}) - vec4(${l}), vec4(0.000001))) * (vec4(${d}) - vec4(${h})))`}case"desaturate":{const c=r("in","vec4(0.0)"),l=Math.max(0,Math.min(1,this.number(i.fraction,1)));return`vec4(mix((${c}).rgb, vec3(materialLuminance((${c}).rgb)), ${l.toFixed(8)}), (${c}).a)`}case"split":{const c=this.channel(i.channel);return`((${r("in","vec4(0.0)")}).${c}${c}${c}${c})`}case"combine":return`vec4((${r("r","vec4(0.0)")}).r, (${r("g","vec4(0.0)")}).r, (${r("b","vec4(0.0)")}).r, (${e.inputs.a?r("a","vec4(1.0)"):"vec4(1.0)"}).r)`;case"swizzle":{const c=String(i.pattern??"rgba").toLowerCase().replace(/[^rgba]/g,"").padEnd(4,"a").slice(0,4);return`((${r("in","vec4(0.0)")}).${c})`}case"abs":return`abs(${r("in","vec4(0.0)")})`;case"frac":return`fract(${r("in","vec4(0.0)")})`;case"floor":return`floor(${r("in","vec4(0.0)")})`;case"ceil":return`ceil(${r("in","vec4(0.0)")})`;case"round":return`floor(${r("in","vec4(0.0)")} + vec4(0.5))`;case"sign":return`sign(${r("in","vec4(0.0)")})`;case"sqrt":return`sqrt(max(${r("in","vec4(0.0)")}, vec4(0.0)))`;case"length":return`vec4(length((${r("in","vec4(0.0)")}).xyz))`;case"normalize":return`vec4(normalize((${r("in","vec4(0.0)")}).xyz), (${r("in","vec4(0.0)")}).a)`;case"dot":return`vec4(dot((${r("a","vec4(0.0)")}).xyz, (${r("b","vec4(0.0)")}).xyz))`;case"sine":{const c=Math.max(1e-4,this.number(i.period,1));return`sin((${r("in","vec4(0.0)")}) * ${(Math.PI*2/c).toFixed(8)})`}case"cosine":{const c=Math.max(1e-4,this.number(i.period,1));return`cos((${r("in","vec4(0.0)")}) * ${(Math.PI*2/c).toFixed(8)})`}case"if":{const c=s("a",0),l=s("b",0);return`((${c}) > (${l}) + 0.000001 ? ${r("aGreater","vec4(0.0)")} : ((${c}) < (${l}) - 0.000001 ? ${r("aLess","vec4(0.0)")} : ${r("aEqual",r("aGreater","vec4(0.0)"))}))`}case"noise":{const c=r("Position","vec4(vUV, 0.0, 0.0)"),l=Math.max(1e-4,this.number(i.scale,16)),u=this.number(i.seed,0),h=this.number(i.outputMin,0),d=this.number(i.outputMax,1),f=i.function==="value"?1:i.function==="voronoi"?2:0;return`vec4(materialScalarNoise((${c}).xy, ${l.toFixed(8)}, ${u.toFixed(8)}, ${h.toFixed(8)}, ${d.toFixed(8)}, ${f.toFixed(1)}))`}case"vectorNoise":{const c=r("Position","vec4(vUV, 0.0, 0.0)"),l=Math.max(1e-4,this.number(i.scale,8)),u=this.number(i.seed,0),h=i.function==="cellnoise"?1:i.function==="voronoi"?2:0;return`vec4(materialScalarNoise((${c}).xy + vec2(17.0, 31.0), ${l.toFixed(8)}, ${u.toFixed(8)}, 0.0, 1.0, ${h.toFixed(1)}), materialScalarNoise((${c}).xy + vec2(73.0, 11.0), ${l.toFixed(8)}, ${(u+1).toFixed(8)}, 0.0, 1.0, ${h.toFixed(1)}), materialScalarNoise((${c}).xy + vec2(5.0, 47.0), ${l.toFixed(8)}, ${(u+2).toFixed(8)}, 0.0, 1.0, ${h.toFixed(1)}), 1.0)`}case"antialiasedTextureMask":{const c=this.sampleTexture(e,a()),l=this.channel(i.channel??"a"),u=e.inputs.Threshold?s("Threshold",.5):this.number(i.threshold,.5).toFixed(8),h=Math.max(1e-4,this.number(i.softness,.04));return`vec4(smoothstep((${u}) - ${h.toFixed(8)}, (${u}) + ${h.toFixed(8)}, (${c}).${l}))`}case"sphericalParticleOpacity":{const c=this.constVec4(i.center,[.5,.5,0,0]),l=Math.max(1e-4,this.number(i.radius,.5)),u=e.inputs.Density?s("Density",1):this.number(i.density,1).toFixed(8);return`vec4(clamp(pow(max(0.0, 1.0 - length((vUV - (${c}).xy) / ${l.toFixed(8)})), ${u}), 0.0, 1.0))`}case"gradientRamp":{const c=e.inputs.t?s("t",0):"vUV.x";return this.gradientExpr(i.stops,c)}default:return"materialSampleMain(vUV)"}}sampleTexture(e,n){const i=this.nodeSamplerUniform.get(e.id);return i?`texture2D(${i}, fract(${n}))`:`materialSampleMain(${n})`}select(e,n){switch(n){case"R":case"Param1":return`((${e}).rrrr)`;case"G":case"Param2":return`((${e}).gggg)`;case"B":case"Param3":return`((${e}).bbbb)`;case"A":case"Param4":return`((${e}).aaaa)`;default:return`(${e})`}}constVec4(e,n=[0,0,0,0]){return`vec4(${ju(e,n).map(r=>this.number(r,0).toFixed(8)).join(", ")})`}scalar(e){return`vec4(${this.number(e,0).toFixed(8)})`}number(e,n){return ae(e,n)}channel(e){const n=typeof e=="string"?e.toLowerCase():"r";return n==="g"||n==="b"||n==="a"?n:"r"}gradientExpr(e,n){const i=(Array.isArray(e)?e:[]).map(s=>{const a=typeof s=="object"&&s!==null?s:{};return{position:Math.max(0,Math.min(1,this.number(a.position,0))),color:ju(a.color,[1,1,1,1])}}).sort((s,a)=>s.position-a.position);if(i.length===0)return`vec4(${n})`;let r=this.colorExpr(this.constVec4(i[0].color));for(let s=1;s<i.length;s++){const a=i[s-1],o=i[s],c=Math.max(1e-4,o.position-a.position),l=`clamp(((${n}) - ${a.position.toFixed(8)}) / ${c.toFixed(8)}, 0.0, 1.0)`;r=`mix(${r}, ${this.colorExpr(this.constVec4(o.color))}, ${l})`}return r}};function wy(t,e){return e!=="out"?e:t.type==="dynamicParameter"?"Param1":e}function ju(t,e){if(typeof t=="number")return[t,t,t,t];if(typeof t=="boolean"){const n=t?1:0;return[n,n,n,n]}return Array.isArray(t)?[ae(t[0],e[0]),ae(t[1],e[1]),ae(t[2],e[2]),ae(t[3],e[3])]:[...e]}var Cy=`
vec4 materialSrgbToLinear(vec4 value) {
  vec3 rgb = max(value.rgb, vec3(0.0));
  return vec4(mix(rgb / 12.92, pow((rgb + 0.055) / 1.055, vec3(2.4)), step(vec3(0.04045), rgb)), value.a);
}
vec4 materialEncodeOutput(vec4 value) {
#ifdef NFX_THREE_OUTPUT
  value = linearToOutputTexel(value);
#else
  vec3 rgb = max(value.rgb, vec3(0.0));
  value.rgb = mix(rgb * 12.92, 1.055 * pow(rgb, vec3(1.0 / 2.4)) - 0.055, step(vec3(0.0031308), rgb));
#endif
#ifdef PREMULTIPLIED_ALPHA
  value.rgb *= value.a;
#endif
  return value;
}
`;function Ry(t){const e=t.getAttribute("position");if(!e||e.itemSize!==3||e.count===0)return null;const n=e.count,i=new Float32Array(n*3);for(let c=0;c<n;c++)i[c*3+0]=e.getX(c),i[c*3+1]=e.getY(c),i[c*3+2]=e.getZ(c);let r=null;const s=t.getAttribute("normal");if(s&&s.itemSize===3&&s.count>=n){r=new Float32Array(n*3);for(let c=0;c<n;c++)r[c*3+0]=s.getX(c),r[c*3+1]=s.getY(c),r[c*3+2]=s.getZ(c)}const a=t.getIndex();let o=null;if(a&&a.count>=3){o=new Uint32Array(a.count);for(let c=0;c<a.count;c++)o[c]=a.getX(c)}return{positions:i,indices:o,normals:r}}function ul(t){const e=t.source.version,n=t.clone();return n.source.version=e,n}var To=new WeakMap;function Py(t){if(t.colorSpace===Rn)return t;const e=To.get(t);if(e)return e;const n=ul(t);return n.colorSpace=Rn,To.set(t,n),t.addEventListener("dispose",()=>{To.delete(t),n.dispose()}),n}function Dy(t){const e=[];for(const i in t.uniforms){const r=t.uniforms[i].value;r!=null&&r.isTexture&&(e.push([i,r]),t.uniforms[i].value=null)}let n;try{n=t.clone()}finally{for(const[i,r]of e)t.uniforms[i].value=r}for(const[i,r]of e)n.uniforms[i].value=r;return n}function ed(t,e,n,i){const r=Fy(i);if(!n.modules.textureSheetAnimation){const h=[ur(t,r)],d=[ur(e,r)];return{mapFrames:h,alphaMapFrames:d,shaderMap:t,ownedTextures:r?[...or(h),...or(d)]:[]}}const s=n.advanced.textureSheetAnimation,a=Math.max(1,Math.round(s.tiles[0])),o=Math.max(1,Math.round(s.tiles[1]));if(a*o<=1){const h=[ur(t,r)],d=[ur(e,r)];return{mapFrames:h,alphaMapFrames:d,shaderMap:t,ownedTextures:r?[...or(h),...or(d)]:[]}}const l=td(t,a,o),u=td(e,a,o);return{mapFrames:l,alphaMapFrames:u,shaderMap:t,ownedTextures:[...or(l),...or(u)]}}function Iy(t,e,n,i){return t.modules.textureSheetAnimation?kS(t.advanced.textureSheetAnimation,e,n,i).frame:0}function Ih(t,e,n,i,r){const s=Rc(e.mapFrames,n),a=Rc(e.alphaMapFrames,n),o=s.texture,c=a.texture;Pc(s,i,r),Pc(a,i,r),t.map!==o&&(t.map=o,t.needsUpdate=!0),t.alphaMap!==c&&(t.alphaMap=c,t.alphaTest=c?.001:0,t.needsUpdate=!0)}function Ly(t,e,n,i,r){var u;const s=Rc(e.mapFrames,n);Pc(s,i,r);const a=(u=t.uniforms.uSubUv)==null?void 0:u.value,o=s.texture;a&&(a.set((o==null?void 0:o.offset.x)??s.offsetX,(o==null?void 0:o.offset.y)??s.offsetY,(o==null?void 0:o.repeat.x)??s.repeatX,(o==null?void 0:o.repeat.y)??s.repeatY),t.uniformsNeedUpdate=!0);const c=t.uniforms.uTexture,l=e.shaderMap??s.texture;c&&c.value!==l&&(c.value=l,t.uniformsNeedUpdate=!0)}function td(t,e,n){if(!t)return[ur(null,!1)];const i=[];for(let r=0;r<e*n;r++){const s=r%e,a=Math.floor(r/e);i.push(ur(t,!0,{offsetX:t.offset.x+s*t.repeat.x/e,offsetY:t.offset.y+(n-a-1)*t.repeat.y/n,repeatX:t.repeat.x/e,repeatY:t.repeat.y/n}))}return i}function ur(t,e,n){const i=e&&t?ul(t):t;return{texture:i,offsetX:(n==null?void 0:n.offsetX)??(i==null?void 0:i.offset.x)??0,offsetY:(n==null?void 0:n.offsetY)??(i==null?void 0:i.offset.y)??0,repeatX:(n==null?void 0:n.repeatX)??(i==null?void 0:i.repeat.x)??1,repeatY:(n==null?void 0:n.repeatY)??(i==null?void 0:i.repeat.y)??1,centerX:(i==null?void 0:i.center.x)??0,centerY:(i==null?void 0:i.center.y)??0,rotation:(i==null?void 0:i.rotation)??0}}function or(t){return t.map(e=>e.texture).filter(e=>!!e)}function Rc(t,e){return t[Ny(e,t.length)]??t[0]}function Pc(t,e,n){const i=t.texture;if(!i)return;const r=e==null?void 0:e.uvPan,s=e==null?void 0:e.uvRotate;i.repeat.set(t.repeatX,t.repeatY),i.offset.set(t.offsetX+((r==null?void 0:r.speed[0])??0)*n*t.repeatX,t.offsetY+((r==null?void 0:r.speed[1])??0)*n*t.repeatY),s?(i.center.set(t.offsetX+s.center[0]*t.repeatX,t.offsetY+s.center[1]*t.repeatY),i.rotation=s.speed*n*Math.PI*2):(i.center.set(t.centerX,t.centerY),i.rotation=t.rotation)}function Fy(t){const e=t==null?void 0:t.uvPan,n=t==null?void 0:t.uvRotate;return!!(e&&(Math.abs(e.speed[0])>1e-6||Math.abs(e.speed[1])>1e-6)||n&&Math.abs(n.speed)>1e-6)}function Ny(t,e){return e<=0?0:(t%e+e)%e}var Uy=new O(..._h),nd=(t,e,n)=>Math.min(n,Math.max(e,t));function Oy(t,e,n,i,r){var E,T;if(!e.modules.trails){rs(t);return}const s=t.trailPointPool??(t.trailPointPool=[]);let a=0;for(const[C,v]of t.trailHistories)Lh(v.points,void 0,i,s),v.points.length===0?t.trailHistories.delete(C):v.points.length>=2&&(a+=v.points.length*2);if(a===0){Dc(t);return}const o=Vy(t,a),c=o.position.array,l=o.color.array,u=o.uv.array,h=o.normal.array,d=o.dynamicParams.array,f=o.index.array;let p=0,x=0;const g=e.advanced.trails,m=o.trailColor,S=t.trailResolution,A=t.trailMaterial instanceof _t;t.trailMaterial instanceof _t&&t.trailMaterial.uniforms.uTime&&(t.trailMaterial.uniforms.uTime.value=i),t.trailTextureFrames&&!(t.trailMaterial instanceof _t)&&Ih(t.trailMaterial,t.trailTextureFrames,0,(S==null?void 0:S.fixed)??null,i);const M=o.srgbColor;for(const C of t.trailHistories.values()){if(C.points.length<2)continue;const v=C.points,b=Math.max(((E=v[0])==null?void 0:E.distanceFromHead)??1,1),R=p;for(let D=0;D<v.length;D++){const L=v[D],H=v[Math.min(D+1,v.length-1)]??L,N=v[Math.max(D-1,0)]??L,q=L.maxLength;if(q!==void 0&&L.distanceFromHead>q)continue;const B=nd(L.distanceFromHead/(q??b),0,1),G=1-nd((i-L.timeSeconds)/L.lifetimeSeconds,0,1);let Q=L.color[0],ne=L.color[1],j=L.color[2],re=L.alpha;if(g.inheritColor){if(g.color){const V=tn(g.color,B,m);M.setRGB(V[0],V[1],V[2],S?void 0:Ut),Q=M.r,ne=M.g,j=M.b,re=nn(g.color,B)}}else{const V=hS(g,1-G,B,m);M.setRGB(V[0],V[1],V[2],S?void 0:Ut),Q=M.r,ne=M.g,j=M.b,re=V[3]}if(S&&(S.particleColorUsage.rgb||(Q=1,ne=1,j=1),S.particleColorUsage.alpha||(re=1)),S&&!A){const V=S.particleColorUsage,ge=S.fixed,Ee=(ge==null?void 0:ge.tint)??By,Se=1+Math.max(0,(ge==null?void 0:ge.emissive)??0);M.setRGB((V.rgb?Q:1)*Ee[0]*Se,(V.rgb?ne:1)*Ee[1]*Se,(V.rgb?j:1)*Ee[2]*Se,Ut),Q=M.r,ne=M.g,j=M.b,re=(V.alpha?re:1)*Ee[3]*((ge==null?void 0:ge.opacity)??1)}re*=(1-B)*G;const Oe=L.width*Math.max(0,Me(g.widthOverTrail,B,L.seed));if(re<=.01||Oe<=1e-4)continue;const We=o.direction.subVectors(H.position,N.position);We.lengthSq()<=1e-7&&We.set(0,1,0),We.normalize();const Fe=o.viewDirection.subVectors(n.position,L.position);Fe.lengthSq()<=1e-7&&Fe.set(0,0,1),Fe.normalize();const Z=o.side.crossVectors(We,Fe);Z.lengthSq()<=1e-7&&Z.copy(Uy),Z.normalize().multiplyScalar(Oe*.5);const se=p*3;c[se]=L.position.x-Z.x-r[0],c[se+1]=L.position.y-Z.y-r[1],c[se+2]=L.position.z-Z.z-r[2],c[se+3]=L.position.x+Z.x-r[0],c[se+4]=L.position.y+Z.y-r[1],c[se+5]=L.position.z+Z.z-r[2];for(let V=p;V<p+2;V++)if(l[V*4]=Q,l[V*4+1]=ne,l[V*4+2]=j,l[V*4+3]=re,S){u[V*2]=g.textureMode==="tile"?L.distanceFromHead:L.distanceFromHead/Math.max(v[0].distanceFromHead,1e-6),u[V*2+1]=V-p;for(let ge=0;ge<4;ge++)d[V*4+ge]=((T=L.dynamicParams)==null?void 0:T[ge])??0;h[V*3]=Fe.x,h[V*3+1]=Fe.y,h[V*3+2]=Fe.z}p+=2}const P=p-R;for(let D=0;D<P/2-1;D++){const L=R+D*2;f[x++]=L,f[x++]=L+1,f[x++]=L+2,f[x++]=L+1,f[x++]=L+3,f[x++]=L+2}}if(t.trailGeometry.setDrawRange(0,x),x===0){Dc(t);return}o.position.needsUpdate=!0,o.color.needsUpdate=!0,o.index.needsUpdate=!0,S&&(o.dynamicParams.needsUpdate=!0,o.uv.needsUpdate=!0,o.normal.needsUpdate=!0),zy(t.trailGeometry,o,p),t.trailMesh.visible=!0}function rs(t){const e=t.trailPointPool??(t.trailPointPool=[]);for(const n of t.trailHistories.values())for(const i of n.points)e.push(i);t.trailHistories.clear(),Dc(t)}function Dc(t){t.trailMesh.visible=!1,t.trailGeometry.setDrawRange(0,0)}function Lh(t,e,n,i){let r=0;for(let a=t.length-1;a>=0;a--){const o=t[a],c=t[a+1];c&&(r+=o.position.distanceTo(c.position)),o.distanceFromHead=r}let s=0;for(;s<t.length&&(e!==void 0&&t[s].distanceFromHead>e&&t.length-s>1||n-t[s].timeSeconds>t[s].lifetimeSeconds);)i==null||i.push(t[s]),s++;if(s>0){for(let a=s;a<t.length;a++)t[a-s]=t[a];t.length-=s}}var By=[1,1,1,1];function Gr(t,e){return new Kt(new Float32Array(t*e),e).setUsage($r)}function Vy(t,e){const n=t.trailBuffers;if(n&&n.capacity>=e)return n;const i=Math.max(64,2**Math.ceil(Math.log2(e)));n&&t.trailGeometry.dispose();const r={capacity:i,position:Gr(i,3),color:Gr(i,4),uv:Gr(i,2),normal:Gr(i,3),dynamicParams:Gr(i,4),index:new Kt(new Uint32Array(i*3),1).setUsage($r),srgbColor:(n==null?void 0:n.srgbColor)??new He,trailColor:(n==null?void 0:n.trailColor)??[1,1,1,1],direction:(n==null?void 0:n.direction)??new O,viewDirection:(n==null?void 0:n.viewDirection)??new O,side:(n==null?void 0:n.side)??new O};return t.trailGeometry.setAttribute("position",r.position),t.trailGeometry.setAttribute("color",r.color),t.trailGeometry.setAttribute("uv",r.uv),t.trailGeometry.setAttribute("normal",r.normal),t.trailGeometry.setAttribute("trailDynamicParams",r.dynamicParams),t.trailGeometry.setIndex(r.index),t.trailBuffers=r,r}function zy(t,e,n){const i=t.boundingSphere??(t.boundingSphere=new Gi),r=e.position.array;let s=1/0,a=1/0,o=1/0,c=-1/0,l=-1/0,u=-1/0;for(let d=0;d<n*3;d+=3)s=Math.min(s,r[d]),c=Math.max(c,r[d]),a=Math.min(a,r[d+1]),l=Math.max(l,r[d+1]),o=Math.min(o,r[d+2]),u=Math.max(u,r[d+2]);i.center.set((s+c)/2,(a+l)/2,(o+u)/2);let h=0;for(let d=0;d<n*3;d+=3){const f=r[d]-i.center.x,p=r[d+1]-i.center.y,x=r[d+2]-i.center.z;h=Math.max(h,f*f+p*p+x*x)}i.radius=Math.sqrt(h)}function Gy(t,e,n,i){if(!uS(e))return{texture:null,owned:!1};if(e!=="constant"){const r=Hy(t,e,n);if(r)return{texture:r,owned:!0}}return e==="constant"?{texture:null,owned:!1}:n?{texture:null,owned:!1}:{texture:t,owned:!1}}function Hy(t,e,n,i){const r=typeof document<"u"?document:void 0;if(!r)return null;const s=t.image,a=ky(s),o=Wy(s);if(!s||a<=0||o<=0)return null;const c=r.createElement("canvas");c.width=a,c.height=o;const l=c.getContext("2d",{willReadFrequently:!0});if(!l)return null;try{l.drawImage(s,0,0,a,o);const h=l.getImageData(0,0,a,o);dS(h.data,e,n),l.putImageData(h,0,0)}catch{return null}const u=new qc(c);return u.colorSpace=t.colorSpace,u.flipY=t.flipY,u.wrapS=t.wrapS,u.wrapT=t.wrapT,u.minFilter=t.minFilter,u.magFilter=t.magFilter,u.generateMipmaps=t.generateMipmaps,u.needsUpdate=!0,u}function ky(t){return t?"naturalWidth"in t&&typeof t.naturalWidth=="number"?t.naturalWidth:"videoWidth"in t&&typeof t.videoWidth=="number"?t.videoWidth:"width"in t&&typeof t.width=="number"?t.width:0:0}function Wy(t){return t?"naturalHeight"in t&&typeof t.naturalHeight=="number"?t.naturalHeight:"videoHeight"in t&&typeof t.videoHeight=="number"?t.videoHeight:"height"in t&&typeof t.height=="number"?t.height:0:0}var Fh=64,Nh=1.25,Xy=.44,$y=.42,id=new Map;function Uh(t,e,n=Fh){return`proc:${t}:${Bh(e).toFixed(3)}:${n}`}function qy(t,e,n=Fh){const i=Uh(t,e,n),r=id.get(i);if(r)return r;const s=Yy(t,e,n);return id.set(i,s),s}function Yy(t,e,n){const i=Math.max(4,Math.round(n)),r=new Uint8Array(i*i*4),s=i/2,a=Bh(e);for(let c=0;c<i;c++)for(let l=0;l<i;l++){const u=l+.5-s,h=c+.5-s,d=t==="square"?Ky(u,h,i,a):Zy(u,h,i,a),f=(c*i+l)*4;r[f+0]=255,r[f+1]=255,r[f+2]=255,r[f+3]=Math.round(d*255)}const o=new Xc(r,i,i,pn);return o.colorSpace=Ut,o.magFilter=Bt,o.minFilter=li,o.generateMipmaps=!0,o.needsUpdate=!0,o}function Zy(t,e,n,i){const r=n*Xy,s=Math.max(i*r,Nh);return Oh(Math.hypot(t,e),r,s)}function Ky(t,e,n,i){const r=n*$y,s=Math.max(i*r,Nh);return Oh(Math.max(Math.abs(t),Math.abs(e)),r,s)}function Oh(t,e,n){const i=Math.min(1,Math.max(0,(t-(e-n))/n));return 1-i*i*(3-2*i)}function Bh(t){const e=Number.isFinite(t)?Math.min(1,Math.max(0,t)):0;return Math.round(e*1e3)/1e3}function Bi(t){return t==="opaque"?Dn:t==="additive"?mr:In}function Jy(t,e){var s,a;const n=t.advanced.trails;if(!n.material)return null;const i=Vh({...t,modules:{...t.modules,textureSheetAnimation:!1},render:{...t.render,material:n.material,texture:n.texture,blend:"alpha",shading:"unlit",depthTest:n.depthTest,depthWrite:n.depthWrite,opacitySource:"textureAlpha",opacityInvert:!1}},e),r=i.material;if(r.vertexColors=!0,!(r instanceof _t)&&r.map&&(n.textureMode==="tile"||(s=i.fixed)!=null&&s.uvPan||(a=i.fixed)!=null&&a.uvRotate)){const o=ul(r.map);o.wrapS=Kr,o.wrapT=Kr,r.map=o,i.ownedTextures.push(o)}return r instanceof _t&&(r.vertexShader=r.vertexShader.replace("uniform vec4 uDynamicParams;",`attribute vec4 trailDynamicParams;
varying vec4 uDynamicParams;`).replace("void main() {",`void main() {
  uDynamicParams = trailDynamicParams;`).replace("vColor = uParticleColor;","vColor = color;").replace("vColor = vec4(uParticleColor.rgb * uParticleColor.a, uParticleColor.a);","vColor = vec4(color.rgb * color.a, color.a);"),r.fragmentShader=r.fragmentShader.replace("uniform vec4 uDynamicParams;","varying vec4 uDynamicParams;")),i.unsupportedFeatures=i.unsupportedFeatures.map(o=>o.replace(".render.material",".advanced.trails.material")),i}function Vh(t,e){var C;const n=t.render.material,i=n?(C=e.materialGraphProvider)==null?void 0:C.call(e,n.shaderId):void 0,r=Qy(t,i),s=jy(t,e,i),a=s.texture,o=[];let c=null,l=null,u={rgb:!0,alpha:!0},h=!0,d=null,f=!1,p=a;const x=[...s.ownedTextures];let g=[va(t)??Gh(t)??"",t.render.opacitySource,Number(t.render.opacityInvert),r?"lit":"unlit"].join(":");if(n)if(g=`${g}:${n.shaderId}`,!i)c=n.shaderId;else{const v=Sy(i,n,{mainTexUid:a?a.id:null});if(h=v.opacityIsConstantOne,d=n.shaderId!==di||yr(v.blend)?v.blend:null,n.shaderId!==di&&i.colorVersion!==1&&(u={rgb:v.usesParticleColorRGB,alpha:v.usesParticleColorAlpha}),g=`${g}:${i.side??"double"}:${v.blend}:${v.tier}:${v.bakeHash??v.shaderId}`,v.tier==="tier0-bake"&&a){const b=e1(a,i,n,e);b?(p=b,x.push(b),l=null,f=!0):(l=v.fixed??null,o.push(`${t.id}.render.material: Three could not bake the material texture yet.`))}else l=v.fixed??null;if(v.tier==="tier2-shader"){const b=t1(t,a,i,n,v,e);if(b)return p=null,l=null,x.push(...b.ownedTextures),{material:b.material,ownedTextures:x,fixed:l,particleColorUsage:u,opacityIsConstantOne:h,materialBlend:d,missingMaterialRef:c,unsupportedFeatures:o,key:g};o.push(`${t.id}.render.material: Three preview uses fixed-function material fallback for unsupported Tier-2 shader graphs.`)}v.tier==="tier3-defer"&&o.push(...v.diagnostics)}const m=n||!p?{texture:null,owned:!1}:Gy(p,t.render.opacitySource,t.render.opacityInvert);m.owned&&m.texture&&x.push(m.texture);const S=ls(t.render.blend,d),A=yr(S),M=f?.001:Math.max(.001,(i==null?void 0:i.opacityMaskClipValue)??fh),E={color:16777215,map:p??null,alphaMap:m.texture,opacity:1,transparent:!A,alphaTest:S==="masked"?M:m.texture?.001:0,depthTest:t.render.depthTest,depthWrite:A?!0:Un({...t.render,blend:S==="additive"?"additive":S==="premultiplied"?"premultiplied":"alpha"}),blending:Bi(S),premultipliedAlpha:S==="premultiplied",side:Ic(i)};return{material:r?new Kc({...E,metalness:0,roughness:.62}):new br(E),ownedTextures:x,fixed:l,particleColorUsage:u,opacityIsConstantOne:h,materialBlend:d,missingMaterialRef:c,unsupportedFeatures:o,key:g}}function Qy(t,e){return t.render.shading==="lit"||!!t.render.material&&(e==null?void 0:e.shadingModel)==="lit"}function zh(t){return t instanceof br||t instanceof Kc||t instanceof _t}function va(t,e){const n=t.render.material;return n&&kM(e,n)||t.render.texture}function Gh(t,e){return t.mode!=="billboard"||t.render.material||va(t,e)?null:Uh(t.billboard.shape,t.billboard.softness)}function jy(t,e,n){var r;const i=va(t,n);if(!i){if(t.render.material){const s=r1();return{texture:s,ownedTextures:s?[s]:[]}}return t.mode==="billboard"?{texture:qy(t.billboard.shape,t.billboard.softness),ownedTextures:[]}:{texture:null,ownedTextures:[]}}return{texture:((r=e.textureProvider)==null?void 0:r.getTexture(al(i)))??null,ownedTextures:[]}}function e1(t,e,n,i){const r=Hh(t);if(!r)return null;const s=r.getContext("2d",{willReadFrequently:!0});if(!s)return null;const a=s.getImageData(0,0,r.width,r.height);sy(a.data,r.width,r.height,e,n,{samplerForPath:(c,l)=>s1(c,l,i)??null}),s.putImageData(a,0,0);const o=new qc(r);return o.colorSpace=t.colorSpace,o.flipY=t.flipY,o.wrapS=t.wrapS,o.wrapT=t.wrapT,o.minFilter=t.minFilter,o.magFilter=t.magFilter,o.generateMipmaps=t.generateMipmaps,o.needsUpdate=!0,o}function t1(t,e,n,i,r,s){var g;if(!by(r))return null;const a=Ty({artifact:r,graph:n,instance:i});if(!a)return null;const o=r.fixed??{tint:[1,1,1,1],emissive:0,opacity:1,blend:n.blend},c=m=>m?Py(m):null,l={};for(const m of a.samplers)l[m.uniform]={value:c(((g=s.textureProvider)==null?void 0:g.getTexture(al(m.path)))??e)};const u=ls(t.render.blend,r.blend),h=yr(u),d=n.shadingModel==="lit"||!!r.usesSceneLighting,f=d?sd:rd,p=n.colorVersion===1?`#define NFX_THREE_OUTPUT
`:"",x=new _t({vertexShader:n.colorVersion===1?f.replace("vec4(uParticleColor.rgb * uParticleColor.a, uParticleColor.a)","uParticleColor"):d?sd:rd,fragmentShader:d?`${p}${n1}${a.fragment}`:`${p}${a.fragment}`,lights:d,uniforms:{...d?Bd.clone(fe.lights):{},uTexture:{value:c(e)},uTime:{value:0},uFixedTint:{value:new ft(...o.tint)},uFixedEmissive:{value:Math.max(0,o.emissive)},uFixedOpacity:{value:o.opacity},uClipValue:{value:n.opacityMaskClipValue??.333},uSheetTiles:{value:new Je(...i1(t))},uSubUv:{value:new ft(0,0,1,1)},uSubUvFromAttr:{value:0},uParticleColor:{value:new ft(1,1,1,1)},uDynamicParams:{value:new ft(0,0,0,0)},...l},transparent:!h,depthTest:t.render.depthTest,depthWrite:h?!0:r.opacityIsConstantOne?Un({...t.render,blend:u==="additive"?"additive":u==="premultiplied"?"premultiplied":"alpha"}):!1,blending:Bi(u),premultipliedAlpha:u==="premultiplied",side:Ic(n),forceSinglePass:!(t.mode==="mesh"&&t.mesh.renderMode==="meshAsset"&&!h&&u!=="additive"&&Ic(n)===cn)});return x.userData.nixieSurfaceGraph=!d,{material:x,ownedTextures:[]}}function Ic(t){return(t==null?void 0:t.side)==="front"?$n:(t==null?void 0:t.side)==="back"?Zt:cn}var rd=`
varying vec2 vUV;
varying vec4 vColor;
uniform vec4 uParticleColor;
uniform vec4 uDynamicParams;

void main() {
  vUV = uv;
  vColor = vec4(uParticleColor.rgb * uParticleColor.a, uParticleColor.a);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,sd=`
varying vec2 vUV;
varying vec4 vColor;
varying vec3 vNfxViewPosition;
varying vec3 vNfxViewNormal;
varying vec3 vNfxWorldPosition;
uniform vec4 uParticleColor;
uniform vec4 uDynamicParams;

void main() {
  vUV = uv;
  vColor = vec4(uParticleColor.rgb * uParticleColor.a, uParticleColor.a);
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vNfxViewPosition = -mvPosition.xyz;
  vNfxViewNormal = normalize(normalMatrix * normal);
  vNfxWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  gl_Position = projectionMatrix * mvPosition;
}
`,n1=`#define NFX_SCENE_LIGHTS
#include <common>
#include <lights_pars_begin>
`;function i1(t){if(!t.modules.textureSheetAnimation)return[1,1];const e=t.advanced.textureSheetAnimation;return[Math.max(1,Math.round(e.tiles[0])),Math.max(1,Math.round(e.tiles[1]))]}function r1(){if(typeof document>"u")return null;const t=document.createElement("canvas");t.width=1,t.height=1;const e=t.getContext("2d");if(!e)return null;e.fillStyle="#ffffff",e.fillRect(0,0,1,1);const n=new qc(t);return n.needsUpdate=!0,n}function s1(t,e,n){var l;const i=(l=n.textureProvider)==null?void 0:l.getTexture(al(t)),r=i?Hh(i):null;if(!r)return null;const s=r.getContext("2d",{willReadFrequently:!0});if(!s)return null;const a=Math.min(r.width-1,Math.max(0,Math.round(e[0]*(r.width-1)))),o=Math.min(r.height-1,Math.max(0,Math.round(e[1]*(r.height-1)))),c=s.getImageData(a,o,1,1).data;return[(c[0]??0)/255,(c[1]??0)/255,(c[2]??0)/255,(c[3]??0)/255]}function Hh(t){if(typeof document>"u")return null;const e=t.image,n=a1(e),i=o1(e);if(!e||n<=0||i<=0)return null;const r=document.createElement("canvas");r.width=n,r.height=i;const s=r.getContext("2d",{willReadFrequently:!0});return s?(s.drawImage(e,0,0,n,i),r):null}function a1(t){return t?"naturalWidth"in t?t.naturalWidth:"videoWidth"in t?t.videoWidth:"displayWidth"in t?t.displayWidth:"width"in t?kh(t.width):0:0}function o1(t){return t?"naturalHeight"in t?t.naturalHeight:"videoHeight"in t?t.videoHeight:"displayHeight"in t?t.displayHeight:"height"in t?kh(t.height):0:0}function kh(t){var e;return typeof t=="number"?t:t&&typeof t=="object"&&"baseVal"in t&&typeof((e=t.baseVal)==null?void 0:e.value)=="number"?t.baseVal.value:0}function c1(t){const e=t.getIndex();if(e){for(let n=0;n<e.count-2;n+=3){const i=e.getX(n+1);e.setX(n+1,e.getX(n+2)),e.setX(n+2,i)}e.needsUpdate=!0}else for(const n of Object.values(t.attributes))l1(n,1,2);ad(t.getAttribute("normal"),3),ad(t.getAttribute("tangent"),3)}function l1(t,e,n){if(!(t instanceof Kt))return;const i=t.itemSize,r=t.array;for(let s=0;s<t.count-2;s+=3){const a=(s+e)*i,o=(s+n)*i;for(let c=0;c<i;c++){const l=r[a+c];r[a+c]=r[o+c],r[o+c]=l}}t.needsUpdate=!0}function ad(t,e){if(!(t instanceof Kt))return;const n=t.itemSize,i=t.array,r=Math.min(n,e);for(let s=0;s<t.count;s++){const a=s*n;for(let o=0;o<r;o++)i[a+o]=-(i[a+o]??0)}t.needsUpdate=!0}var u1=new WeakSet;function d1(t){u1.add(t)}var h1=`
attribute vec3 aInstanceColor;
attribute float aInstanceAlpha;

varying vec2 vUv;
varying vec4 vInstanceColor;

void main() {
  vUv = uv;
  vInstanceColor = vec4(aInstanceColor, aInstanceAlpha);
  gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
}
`,f1=`
uniform sampler2D uTexture;

varying vec2 vUv;
varying vec4 vInstanceColor;

void main() {
  vec4 sampled = texture2D(uTexture, vUv);
  vec4 color = sampled * vInstanceColor;
  if (color.a <= 0.001) discard;
  gl_FragColor = color;
  #include <colorspace_fragment>
}
`;function p1(t,e){return!!(e&&t.mode==="billboard"&&t.render.shading==="unlit"&&!t.render.material&&!t.modules.trails&&!t.modules.textureSheetAnimation&&t.render.opacitySource==="textureAlpha"&&!t.render.opacityInvert&&(t.render.blend==="alpha"||t.render.blend==="additive"))}var m1=class{constructor(t,e,n,i){Y(this,"mesh"),Y(this,"geometry"),Y(this,"material"),Y(this,"colors"),Y(this,"alphas"),Y(this,"depths"),Y(this,"colorAttribute"),Y(this,"alphaAttribute"),Y(this,"sortScratch",null),Y(this,"depthWriteAuthored");const r=Math.max(1,Math.floor(n));this.geometry=t.clone(),this.colors=new Float32Array(r*3),this.alphas=new Float32Array(r),this.depths=new Float32Array(r),this.colorAttribute=new ta(this.colors,3),this.alphaAttribute=new ta(this.alphas,1),this.colorAttribute.setUsage($r),this.alphaAttribute.setUsage($r),this.geometry.setAttribute("aInstanceColor",this.colorAttribute),this.geometry.setAttribute("aInstanceAlpha",this.alphaAttribute),this.depthWriteAuthored=Un(i.render),this.material=new _t({vertexShader:h1,fragmentShader:f1,uniforms:{uTexture:{value:e}},transparent:!0,depthTest:i.render.depthTest,depthWrite:this.depthWriteAuthored,blending:i.render.blend==="additive"?mr:In,side:cn,toneMapped:!1}),this.mesh=new sp(this.geometry,this.material,r),this.mesh.instanceMatrix.setUsage($r),this.mesh.count=0,this.mesh.visible=!1,this.mesh.frustumCulled=!1,d1(this.mesh)}setRenderState(t){this.material.depthTest=t.render.depthTest,this.depthWriteAuthored=Un(t.render),this.material.depthWrite=this.depthWriteAuthored,this.material.blending=t.render.blend==="additive"?mr:In}write(t,e,n,i,r=0){this.mesh.setMatrixAt(t,e);const s=t*3;this.colors[s+0]=n.r,this.colors[s+1]=n.g,this.colors[s+2]=n.b,this.alphas[t]=i,this.depths[t]=r}sortByCameraDistance(t,e){if(t<=1)return;const n=this.ensureSortScratch(),i=n.order;for(let o=0;o<t;o++)i[o]=o;const r=this.depths;i.subarray(0,t).sort(e?(o,c)=>(r[c]??0)-(r[o]??0):(o,c)=>(r[o]??0)-(r[c]??0));let s=!0;for(let o=0;o<t;o++)if(i[o]!==o){s=!1;break}if(s)return;const a=this.mesh.instanceMatrix.array;n.matrices.set(a.subarray(0,t*16)),n.colors.set(this.colors.subarray(0,t*3)),n.alphas.set(this.alphas.subarray(0,t));for(let o=0;o<t;o++){const c=i[o]??o,l=c*16,u=o*16;for(let f=0;f<16;f++)a[u+f]=n.matrices[l+f]??0;const h=c*3,d=o*3;this.colors[d+0]=n.colors[h+0]??0,this.colors[d+1]=n.colors[h+1]??0,this.colors[d+2]=n.colors[h+2]??0,this.alphas[o]=n.alphas[c]??0}}ensureSortScratch(){if(!this.sortScratch){const t=this.alphas.length;this.sortScratch={order:new Uint32Array(t),matrices:new Float32Array(t*16),colors:new Float32Array(t*3),alphas:new Float32Array(t)}}return this.sortScratch}commit(t){if(this.mesh.count=t,this.mesh.visible=t>0,!(t<=0)){if(this.depthWriteAuthored){let e=!0;for(let n=0;n<t;n++)if((this.alphas[n]??0)<.999){e=!1;break}this.material.depthWrite=e}this.mesh.instanceMatrix.needsUpdate=!0,this.colorAttribute.needsUpdate=!0,this.alphaAttribute.needsUpdate=!0}}setRenderOrder(t){this.mesh.renderOrder=t}dispose(){this.mesh.removeFromParent(),this.geometry.dispose(),this.material.dispose()}},g1=new os(1,1);function x1(t,e,n){var C,v,b,R;const i=t.mode==="mesh"&&t.mesh.renderMode==="meshAsset",r=i?t.mesh.asset:null,a=(i?((C=n.renderGeometryOverride)==null?void 0:C.geometry)??(r?(v=e.meshProvider)==null?void 0:v.getMeshGeometry(r):null):null)??g1,o=i&&(t.mesh.flipWinding||t.mesh.recomputeNormals)?a.clone():null,c=o??a;o&&t.mesh.flipWinding&&c1(o),o&&t.mesh.recomputeNormals&&o.computeVertexNormals();const l=_1(c),u=M1(c),h=((R=(b=e.materialProvider)==null?void 0:b.getParticleMaterial)==null?void 0:R.call(b,n.effect,t.id))??null,d=h&&zh(h)?h:null,f=Vh(t,e);d&&f.material.dispose();const p=d?null:f.material instanceof _t?v1(f.material,"uTexture"):f.material.map,x=d||f.material instanceof _t?null:f.material.alphaMap,g=ed(p,x,t,d?null:f.fixed),m=!d&&p1(t,p)?new m1(c,p,t.maxParticles,t):null,S=new rn,A=Jy(t,e),M=(A==null?void 0:A.material)??new br({transparent:!0,vertexColors:!0,depthTest:t.render.depthTest,depthWrite:Un(t.render),blending:t.render.blend==="additive"?mr:In,premultipliedAlpha:t.render.blend==="premultiplied",side:cn}),E=A&&!(M instanceof _t)?ed(M.map,M.alphaMap,{...t,modules:{...t.modules,textureSheetAnimation:!1}},A.fixed):null,T=new Jt(S,M);return T.frustumCulled=!1,T.visible=!1,{key:b1(t,d?"host":f.key),staticKey:Wh(t,e,n),meshes:[],instanced:m,particleOrder:new Uint32Array(Math.max(1,t.maxParticles)),geometry:c,ownedGeometry:o,pivotBoundsSize:l,debugBounds:u,trailMesh:T,trailGeometry:S,trailMaterial:M,trailResolution:A,trailTextureFrames:E,trailHistories:new Map,trailEmitterPosition:[0,0,0],material:d??f.material,ownedTextures:[...f.ownedTextures,...g.ownedTextures,...(A==null?void 0:A.ownedTextures)??[],...(E==null?void 0:E.ownedTextures)??[]],textureFrames:g,materialFixed:d?null:f.fixed,materialParticleColorUsage:d?{rgb:!0,alpha:!0}:f.particleColorUsage,materialOpacityIsConstantOne:d?!1:f.opacityIsConstantOne,materialBlend:d?null:f.materialBlend,missingMaterialRef:d?null:f.missingMaterialRef,unsupportedFeatures:[...f.unsupportedFeatures,...(A==null?void 0:A.unsupportedFeatures)??[]],hostMaterial:d!==null}}function v1(t,e){var i;const n=(i=t.uniforms[e])==null?void 0:i.value;return n&&n instanceof Vt?n:null}function _1(t){t.boundingBox||t.computeBoundingBox();const e=t.boundingBox;return e?[Math.max(0,e.max.x-e.min.x),Math.max(0,e.max.y-e.min.y),Math.max(0,e.max.z-e.min.z)]:[1,1,0]}function M1(t){t.boundingBox||t.computeBoundingBox();const e=t.boundingBox;return e?{min:[e.min.x,e.min.y,e.min.z],max:[e.max.x,e.max.y,e.max.z]}:{min:[-.5,-.5,0],max:[.5,.5,0]}}var od=new WeakMap;function S1(t){if(!t)return"";let e=od.get(t);return e===void 0&&(e=JSON.stringify(t),od.set(t,e)),e}var cd=new WeakMap,y1=1;function E1(t){if(!t)return 0;let e=cd.get(t);return e===void 0&&(e=y1++,cd.set(t,e)),e}function Wh(t,e,n){var s,a,o,c,l,u;const i=t.render.material?(s=e.materialGraphProvider)==null?void 0:s.call(e,t.render.material.shaderId):void 0,r=(o=(a=e.materialProvider)==null?void 0:a.getParticleMaterial)==null?void 0:o.call(a,n.effect,t.id);return[t.mode,t.maxParticles,t.mesh.renderMode,((c=t.mesh.asset)==null?void 0:c.path)??"",n.renderGeometryOverride?`hostgeo:${n.renderGeometryOverride.generation}`:"",r?`hostmat:${r.uuid}`:"",Number(t.mesh.flipWinding),Number(t.mesh.recomputeNormals),va(t)??Gh(t)??"",((l=t.render.material)==null?void 0:l.shaderId)??"",S1(t.advanced.trails.material),t.advanced.trails.material?JSON.stringify([t.advanced.trails.texture,t.advanced.trails.textureMode,t.advanced.trails.depthTest,t.advanced.trails.depthWrite,E1((u=e.materialGraphProvider)==null?void 0:u.call(e,t.advanced.trails.material.shaderId))]):"",(i==null?void 0:i.side)??"double",(i==null?void 0:i.blend)??"normal",t.render.shading,t.render.blend,Number(t.render.depthTest),Number(Un(t.render))].join("|")}function b1(t,e){var n;return[t.mode,t.maxParticles,t.mesh.renderMode,((n=t.mesh.asset)==null?void 0:n.path)??"",Number(t.mesh.flipWinding),Number(t.mesh.recomputeNormals),e,t.render.shading,t.render.blend,Number(t.render.depthTest),Number(Un(t.render))].join("|")}function ca(t,e){for(let n=e;n<t.meshes.length;n++){const i=t.meshes[n];i&&(i.visible=!1)}}function Ao(t){var e,n;for(const i of t.meshes)if(i.removeFromParent(),Array.isArray(i.material))for(const r of i.material)r.dispose();else i.material.dispose();t.meshes.length=0,(e=t.instanced)==null||e.dispose(),t.trailMesh.removeFromParent(),t.trailGeometry.dispose(),t.trailMaterial.dispose(),t.trailHistories.clear(),t.hostMaterial||t.material.dispose(),(n=t.ownedGeometry)==null||n.dispose();for(const i of t.ownedTextures)i.dispose();t.ownedTextures.length=0}function T1(t,e){return t.alphaMap!==null||t.map!==null&&e.render.opacitySource==="textureAlpha"}function A1(t,e,n,i,r,s,a,o,c){var f,p;Ly(t,n,r,s,c);const l=(f=t.uniforms.uParticleColor)==null?void 0:f.value;l==null||l.set(i.shaderColor[0],i.shaderColor[1],i.shaderColor[2],i.alpha);const u=ls(e.render.blend,a);t.depthTest=e.render.depthTest,yr(u)?(t.transparent=!1,t.depthWrite=!0,t.blending=Bi(u)):(t.transparent=!o||i.alpha<1||u==="additive"||u==="premultiplied",t.depthWrite=Un({...e.render,blend:u==="additive"?"additive":u==="premultiplied"?"premultiplied":"alpha"},o?i.alpha:0),t.blending=Bi(u),t.premultipliedAlpha=u==="premultiplied"),t.needsUpdate=!0;const h=(p=t.uniforms.uDynamicParams)==null?void 0:p.value,d=w1(e,i);h==null||h.set(d[0],d[1],d[2],d[3]),t.uniforms.uTime&&(t.uniforms.uTime.value=c),t.uniformsNeedUpdate=!0}function w1(t,e){if(!t.modules.customData)return[0,0,0,0];const n=t.advanced.customData.channels;return[Me(n[0],e.normalizedAge,e.seed,e.loopAge),Me(n[1],e.normalizedAge,e.seed,e.loopAge),Me(n[2],e.normalizedAge,e.seed,e.loopAge),Me(n[3],e.normalizedAge,e.seed,e.loopAge)]}var C1=2135587861,Pi=new O(...fS),Zs=new O(..._h);function Lc(){return{activeParticles:0,visibleParticles:0,capacity:0,emittedLastFrame:0,bloomSourceParticles:0,drawCalls:0,instancedDrawCalls:0,legacyParticleDrawCalls:0,missingMeshRefs:[],missingMaterialRefs:[],unsupportedFeatures:[]}}function R1(){return{visibleParticles:0,bloomSourceParticles:0,drawCalls:0,instancedDrawCalls:0,legacyParticleDrawCalls:0}}function kn(t,e){return t.lengthSq()>1e-6?t.normalize():t.copy(e)}function P1(t,e){return Math.abs(t.y)<.9?e.set(0,1,0):e.set(1,0,0),e.cross(t).normalize()}function D1(t){return[t[0],t[1],t[2]]}function Hs(t){return Number.isFinite(t)?Math.min(8,Math.max(0,t)):1}function Ii(t,e,n){return Math.min(n,Math.max(e,t))}function I1(t){return Number.isFinite(t)?Math.floor(t):C1}function L1(t,e){e.length=t.length;const n=t.map((s,a)=>({index:a,orderInLayer:s.render.orderInLayer}));n.sort((s,a)=>s.orderInLayer-a.orderInLayer||s.index-a.index);let i=-1,r=null;for(const s of n)(r===null||s.orderInLayer!==r)&&(i+=1,r=s.orderInLayer),e[s.index]=i}function Xh(t,e,n,i){const r=t;switch(e){case"distanceNearFirst":return r+Math.min(.999999,Math.max(0,n)/(1+Math.max(0,n)));case"oldestFirst":return r+.5-.499999*Math.tanh(i);case"youngestFirst":return r+.5+.499999*Math.tanh(i);case"none":case"distanceFarFirst":default:return r}}function F1(t,e,n){const i=Math.min(t.activeCount,n.length);for(let a=0;a<i;a++)n[a]=a;if(e!=="oldestFirst"&&e!=="youngestFirst")return;const r=e==="oldestFirst"?(a,o)=>a>o:(a,o)=>a<o,s=t.instanceData;for(let a=1;a<i;a++){const o=n[a]??a,c=s[o*Wt+3]??0;let l=a;for(;l>0;){const u=n[l-1]??l-1,h=s[u*Wt+3]??0;if(!r(h,c))break;n[l]=u,l-=1}n[l]=o}}var N1=class{constructor(t){Y(this,"context",t),Y(this,"scratchWorld",new O),Y(this,"scratchAlignmentAxis",new O),Y(this,"scratchRight",new O),Y(this,"scratchForward",new O),Y(this,"scratchQuaternion",new pi),Y(this,"scratchRollQuaternion",new pi),Y(this,"scratchEuler",new Zn),Y(this,"scratchMatrix",new at),Y(this,"scratchBasisMatrix",new at),Y(this,"scratchPivotMatrix",new at),Y(this,"scratchScale",new O)}applySampleOrientation(t,e){if(e.render.alignAxis==="screen"&&e.render.facing==="cameraPlane"){this.scratchQuaternion.copy(this.context.camera.quaternion),this.context.camera.getWorldDirection(this.scratchForward),this.scratchForward.multiplyScalar(-1),t.normal.copy(kn(this.scratchForward,Pi));return}const n=kn(this.scratchAlignmentAxis.copy(t.alignmentAxis),Zs);if(e.render.facing==="off"){this.scratchQuaternion.setFromUnitVectors(Pi,n),t.normal.copy(n);return}e.render.facing==="cameraPosition"?this.scratchForward.set(this.context.camera.position.x-t.position[0],this.context.camera.position.y-t.position[1],this.context.camera.position.z-t.position[2]):(this.context.camera.getWorldDirection(this.scratchForward),this.scratchForward.multiplyScalar(-1));const i=kn(this.scratchForward,Pi),r=this.scratchRight.crossVectors(n,i);r.lengthSq()<=1e-6?(P1(n,r),i.crossVectors(r,n)):(r.normalize(),i.crossVectors(r,n)),kn(i,Pi),this.scratchBasisMatrix.makeBasis(r,n,i),this.scratchQuaternion.setFromRotationMatrix(this.scratchBasisMatrix),t.normal.copy(i)}applySampleToMesh(t,e,n,i,r,s,a){const o=Array.isArray(t.material)?t.material[0]:t.material;if(!o||!zh(o))return;if(o instanceof _t)A1(o,i,n.textureFrames,e,e.textureFrameIndex,n.materialFixed,n.materialBlend,n.materialOpacityIsConstantOne,a);else{Ih(o,n.textureFrames,e.textureFrameIndex,n.materialFixed,a);const l=ls(i.render.blend,n.materialBlend);o.depthTest=i.render.depthTest,o.color.copy(e.color),yr(l)?(o.depthWrite=!0,o.blending=Bi(l),o.opacity=l==="opaque"?1:e.alpha,o.transparent=!1):(o.depthWrite=Un({...i.render,blend:l==="additive"?"additive":l==="premultiplied"?"premultiplied":"alpha"},e.alpha),o.blending=Bi(l),o.premultipliedAlpha=l==="premultiplied",o.opacity=e.alpha,o.transparent=e.alpha<1||l==="additive"||l==="premultiplied"||T1(o,i)),"emissive"in o&&(o.emissive.copy(e.color),o.emissiveIntensity=Math.max(0,e.emissiveStrength-1)),o.needsUpdate=!0}this.scratchWorld.set(e.position[0],e.position[1],e.position[2]),t.renderOrder=Xh(this.context.renderOrder+(this.context.emitterLayerRanks[r]??r),i.render.sortMode,this.scratchWorld.distanceToSquared(this.context.camera.position),e.start);const c=this.writeSampleMatrix(e,n,i,r,s);t.matrixAutoUpdate=!1,t.matrix.copy(c),t.matrixWorldNeedsUpdate=!0,t.visible=!0}applySampleToInstanced(t,e,n,i,r,s,a){const o=this.writeSampleMatrix(e,n,i,r,s),c=e.position[0]-this.context.camera.position.x,l=e.position[1]-this.context.camera.position.y,u=e.position[2]-this.context.camera.position.z,h=c*c+l*l+u*u;return t.write(a,o,e.color,e.alpha,h),h}writeSampleMatrix(t,e,n,i,r){this.applySampleOrientation(t,n),this.scratchEuler.set(t.rotation[0],t.rotation[1],t.rotation[2]),this.scratchRollQuaternion.setFromEuler(this.scratchEuler),this.scratchQuaternion.multiply(this.scratchRollQuaternion),this.scratchScale.set(t.width,t.height,n.mode==="mesh"&&n.mesh.renderMode==="meshAsset"?t.depthScale:1),this.scratchWorld.set(t.position[0]-this.context.position[0],t.position[1]-this.context.position[1],t.position[2]-this.context.position[2]),this.scratchMatrix.compose(this.scratchWorld,this.scratchQuaternion,this.scratchScale);const s=n.mode==="mesh"?n.mesh.pivot[0]*e.pivotBoundsSize[0]:n.billboard.pivot[0]*e.pivotBoundsSize[0],a=n.mode==="mesh"?n.mesh.pivot[1]*e.pivotBoundsSize[1]:n.billboard.pivot[1]*e.pivotBoundsSize[1],o=n.mode==="mesh"?n.mesh.pivot[2]*e.pivotBoundsSize[2]:0;return(s!==0||a!==0||o!==0)&&(this.scratchPivotMatrix.makeTranslation(-s,-a,-o),this.scratchMatrix.multiply(this.scratchPivotMatrix)),this.context.captureDebugTransforms&&this.context.debugTransforms.push({emitterId:n.id,emitterIndex:i,particleIndex:r,mode:n.mode==="billboard"?"billboard":n.mesh.renderMode==="meshAsset"?"meshAsset":"pixiShard",position:[...t.position],normal:[t.normal.x,t.normal.y,t.normal.z],width:t.width,height:t.height,depth:t.depth,localBounds:e.debugBounds,matrix:this.scratchMatrix.toArray()}),this.scratchMatrix}acquireMesh(t,e){let n=t.meshes[e];if(n)return n;const i=t.material instanceof _t?Dy(t.material):t.material.clone();return n=new Jt(t.geometry,i),n.frustumCulled=!1,t.meshes[e]=n,this.context.root.add(n),n}},$h=65472,ld=Math.log2(1+$h),U1=1.6,O1=.65;function B1(t,e){return qh(t,e,[0,0,0])}function qh(t,e,n){const i=2**Cn(e,-2,2),r=t[0]*i,s=t[1]*i,a=t[2]*i,o=Math.max(r,s,a);if(o<=1)return n[0]=r,n[1]=s,n[2]=a,n;const c=r*.59719+s*.35458+a*.04823,l=r*.076+s*.90834+a*.01566,u=r*.0284+s*.13383+a*.83777,h=wo(c),d=wo(l),f=wo(u);let p=Cn(h*1.60475+d*-.53108+f*-.07367,0,1),x=Cn(h*-.10208+d*1.10813+f*-.00605,0,1),g=Cn(h*-.00327+d*-.07276+f*1.07602,0,1);if(r>=o){const m=Math.max(s,a),S=Cn((r-m)/r,0,1),A=Math.log2(Math.max(1,o)),M=S*Cn((A-1)/8,0,1);M>0&&(p=Co(p,1,M),x=Co(x,.92*(1-Math.exp(-A/10)),M),g=Co(g,.62*(1-Math.exp(-A/16)),M))}return n[0]=p,n[1]=x,n[2]=g,n}function V1(t,e,n,i=.5){const r=B1(t,n),s=z1(t,e,i),a=Math.max(s[0],s[1],s[2]);if(a<=0)return r;const c=Math.max(t[0],t[1],t[2])>1?1/a:1,u=1+H1(a)*O1;return[Math.max(r[0],s[0]*c*u),Math.max(r[1],s[1]*c*u),Math.max(r[2],s[2]*c*u)]}function wo(t){const e=Math.max(0,t),n=e*(e+.0245786)-90537e-9,i=e*(.983729*e+.432951)+.238081;return i>0?n/i:0}function Co(t,e,n){return t+(e-t)*n}function z1(t,e,n){const i=Math.max(t[0],t[1],t[2]);if(i<=0)return[0,0,0];const r=G1(i,e,n);return[t[0]*r,t[1]*r,t[2]*r]}function G1(t,e,n){if(e<=0)return 1;const i=Math.max(0,e*n),r=Math.max(t-e,0);if(i<=0)return Cn(r/t,0,1);const s=Cn(t-e+i,0,i*2),a=s*s/(4*i);return Cn(Math.max(r,a)/t,0,1)}function H1(t){const e=Cn(Math.max(0,t),0,$h);return ld>0?Math.pow(Math.log2(1+e)/ld,U1):0}function Cn(t,e,n){return Math.min(n,Math.max(e,t))}var k1=class{constructor(t){Y(this,"context",t),Y(this,"motionScratch",{position:[0,0,0],velocity:[0,0,0],scratchA:[0,0,0],scratchB:[0,0,0]}),Y(this,"motionModuleScratch",{seed:0,normalizedAge:0,loopAge:0,ageSeconds:0,timeSeconds:0,world:this.motionScratch.position,velocity:this.motionScratch.velocity}),Y(this,"sampleSizeScratch",{x:1,y:1,z:1}),Y(this,"initialColorScratch",[1,1,1,1]),Y(this,"secondaryColorScratch",[1,1,1,1]),Y(this,"moduleColorScratch",[1,1,1,1]),Y(this,"hdrColorScratch",[1,1,1]),Y(this,"renderColorScratch",[1,1,1]),Y(this,"analyticVelocityScratch",[0,0,0]),Y(this,"preCollisionWorldScratch",[0,0,0]),Y(this,"effectiveAlignmentVelocity",[0,0,0]),Y(this,"sampleScratch",{visible:!0,position:[0,0,0],velocity:[0,0,0],speed:0,normalizedAge:0,loopAge:0,start:0,seed:0,width:1,height:1,depthScale:1,depth:0,rotation:[0,0,0],color:new He,shaderColor:[1,1,1],lightColor:[1,1,1,1],trailColor:[1,1,1,1],alpha:1,alignmentAxis:new O,normal:new O,emissiveStrength:0,textureFrameIndex:0}),Y(this,"scratchColor",new He),Y(this,"scratchAlignmentAxis",new O)}sampleParticle(t,e,n,i,r,s){const a=e.instanceData,o=n*Wt,c=a[o+3]??0,l=Math.max(.001,a[o+7]??.001),u=i-c,h=u/l;if(h<-1e-6||h>1.000001)return;const d=Ii(h,0,1),f=Math.max(0,u),p=Ii(e.age/Math.max(.001,t.duration),0,1),x=a[o+8]??.5,g=tl(t,e,n,f,d,this.context.position,this.motionScratch,this.context.runner.effectiveInitialVelocityMultiplier(t.id)),m=g.velocity,S=g.position,A=Math.hypot(m[0],m[1],m[2]),M=t.render.alignAxis==="velocity";M&&(this.analyticVelocityScratch[0]=m[0],this.analyticVelocityScratch[1]=m[1],this.analyticVelocityScratch[2]=m[2]);const E=this.motionModuleScratch;if(E.seed=x,E.normalizedAge=d,E.loopAge=p,E.ageSeconds=f,E.timeSeconds=i,E.world=S,E.velocity=m,Sh(t,E),ga(t,e,n,S,m,this.context.position),M&&(Yr(t,e,n,this.analyticVelocityScratch),this.preCollisionWorldScratch[0]=S[0],this.preCollisionWorldScratch[1]=S[1],this.preCollisionWorldScratch[2]=S[2]),t.modules.collision&&!US(t,E))return;const T=W1(t,e,n,d,A,x,p,this.sampleSizeScratch),C=(a[o+13]??0)+f*(a[o+15]??0),v=(a[o+14]??0)+f*(a[o+16]??0),b=pS(a[o+9]??0,a[o+10]??0,f,GS(t,A,f,x,p)),R=C_(t.initializeParticle.color,x,d,p,this.initialColorScratch,this.secondaryColorScratch),P=Math.max(0,Me(t.initializeParticle.color.intensity,d,x,p)),D=this.context.emitterDrawParameters.get(t.id),L=D!=null&&D.colorOverLifetimeGradient?X1(D.colorOverLifetimeGradient,d,this.moduleColorScratch):!t.modules.colorBySpeed&&!t.modules.lights?$1(t,d,this.moduleColorScratch):VS(t,d,A,x,void 0,p),H=(r==null?void 0:r.tint)??[1,1,1,1],N=r?1+Math.max(0,r.emissive):1,q=(r==null?void 0:r.opacity)??1,B=s.rgb?R[0]*P*L[0]:1,G=s.rgb?R[1]*P*L[1]:1,Q=s.rgb?R[2]*P*L[2]:1,ne=s.alpha?R[3]*L[3]:1,j=this.hdrColorScratch;j[0]=Math.max(0,B*H[0]*N),j[1]=Math.max(0,G*H[1]*N),j[2]=Math.max(0,Q*H[2]*N);const re=this.context.previewBloomEnabled?V1(j,this.context.previewBloomThreshold,this.context.previewExposureStops):qh(j,this.context.previewExposureStops,this.renderColorScratch),Oe=this.scratchColor.setRGB(re[0],re[1],re[2],Ut),We=Ii(ne*H[3]*q,0,1);let Fe=m,Z=A;if(M){const Ee=OS(t,e,n,f,l,i,x,p,this.context.position,this.context.runner.effectiveInitialVelocityMultiplier(t.id),this.preCollisionWorldScratch,this.effectiveAlignmentVelocity);Ee[0]+=m[0]-this.analyticVelocityScratch[0],Ee[1]+=m[1]-this.analyticVelocityScratch[1],Ee[2]+=m[2]-this.analyticVelocityScratch[2],Fe=Ee,Z=Math.hypot(Ee[0],Ee[1],Ee[2])}const se=this.resolveParticleAlignmentAxis(t,e,n,Fe,Z),V=this.sampleScratch;V.visible=!0,V.position[0]=S[0],V.position[1]=S[1],V.position[2]=S[2],V.velocity[0]=m[0],V.velocity[1]=m[1],V.velocity[2]=m[2],V.speed=A,V.normalizedAge=d,V.loopAge=p,V.start=c,V.seed=x;const ge=is(e,n);if(V.width=T.x*(ge?t.spawn.scale[0]:1),V.height=T.y*(ge?t.spawn.scale[1]:1),V.depthScale=T.z*(ge?t.spawn.scale[2]:1),V.depth=S[2],V.rotation[0]=C,V.rotation[1]=v,V.rotation[2]=b+(ge&&t.render.alignAxis==="screen"?t.spawn.rotation[2]*Math.PI/180:0),V.lightColor[0]=R[0]*P*L[0],V.lightColor[1]=R[1]*P*L[1],V.lightColor[2]=R[2]*P*L[2],V.lightColor[3]=R[3]*L[3],V.color.copy(Oe),V.shaderColor[0]=re[0],V.shaderColor[1]=re[1],V.shaderColor[2]=re[2],V.alpha=We,t.modules.trails&&t.advanced.trails.material&&(V.trailColor[0]=R[0]*P*L[0],V.trailColor[1]=R[1]*P*L[1],V.trailColor[2]=R[2]*P*L[2],V.trailColor[3]=R[3]*L[3]),V.alignmentAxis.copy(se),V.normal.copy(se),V.emissiveStrength=Math.max(j[0],j[1],j[2]),V.textureFrameIndex=Iy(t,d,x,p),D){let Ee=D.sizeMultiplier;D.sizeMultiplierValue&&(Ee*=Math.max(0,cM(D.sizeMultiplierValue,d,x))),V.width*=Ee,V.height*=Ee,V.depthScale*=Ee;const Se=D.colorTint;V.color.r*=Se[0],V.color.g*=Se[1],V.color.b*=Se[2],V.shaderColor[0]*=Se[0],V.shaderColor[1]*=Se[1],V.shaderColor[2]*=Se[2],V.alpha*=Se[3];for(let tt=0;tt<4;tt++)V.trailColor[tt]*=Se[tt]}return V}resolveParticleAlignmentAxis(t,e,n,i,r){const s=this.scratchAlignmentAxis;if(t.render.alignAxis==="screen")return s.copy(Zs).applyQuaternion(this.context.camera.quaternion),kn(s,Zs);if(t.render.alignAxis==="velocity"){if(s.set(i[0],i[1],i[2]),r>1e-6)return kn(s,Pi);const a=n*en;s.set(e.spawnDirectionData[a+0]??0,e.spawnDirectionData[a+1]??1,e.spawnDirectionData[a+2]??0);const o=[s.x,s.y,s.z];return Yr(t,e,n,o),s.set(...o),kn(s,Pi)}if(t.render.alignAxis==="spawnDirection"){const a=n*en;s.set(e.spawnDirectionData[a+0]??0,e.spawnDirectionData[a+1]??1,e.spawnDirectionData[a+2]??0);const o=[s.x,s.y,s.z];return Yr(t,e,n,o),s.set(...o),kn(s,Pi)}return s.set(t.render.alignmentVector[0],t.render.alignmentVector[1],t.render.alignmentVector[2]),kn(s,Zs)}};function W1(t,e,n,i,r,s,a,o){const c=n*Wt,l=Math.max(0,e.instanceData[c+11]??1),u=Math.max(0,e.instanceData[c+12]??l),h=t.mode==="mesh"?Math.max(0,e.instanceData[c+17]??l):l,d=t.mode==="billboard"?t.billboard.sizeValue:t.mesh.sizeValue,f=t.mode==="billboard"?t.billboard.separateAxes?t.billboard.sizeValueY:d:t.mesh.separateAxes?t.mesh.sizeValueY:d,p=t.mode==="mesh"&&t.mesh.separateAxes?t.mesh.sizeValueZ:d,x=t.modules.size?Math.max(0,Me(d,i,s,a)):1,g=t.modules.size?Math.max(0,Me(f,i,s,a)):1,m=t.modules.size?Math.max(0,Me(p,i,s,a)):1,S=zS(t,r,s,a);return o.x=Math.max(1e-4,l*x*S),o.y=Math.max(1e-4,u*g*S),o.z=Math.max(1e-4,h*m*S),o}function X1(t,e,n){return tn(t,e,n),n[3]=nn(t,e),n}function $1(t,e,n){return t.modules.color?(tn(t.color.gradient,e,n),n[3]=nn(t.color.gradient,e),n):(n[0]=1,n[1]=1,n[2]=1,n[3]=1,n)}function q1(t,e,n,i){if(!e.modules.trails)return;const r=e.advanced.trails;if(n.seed>=r.ratio)return;const s=Math.max(.001,Me(r.lifetime,n.normalizedAge,n.seed,n.loopAge)),a=Math.max(0,Me(r.length,n.normalizedAge,n.seed,n.loopAge)),o=Math.max(.001,Me(r.width,n.normalizedAge,n.seed,n.loopAge)),c=`${n.start.toFixed(6)}:${n.seed.toFixed(6)}`;let l=t.trailHistories.get(c);l||(l={points:[],lastSeenFrame:i},t.trailHistories.set(c,l));const u=l.points,h=u[u.length-1],d=h?n.position[0]-h.position.x:0,f=h?n.position[1]-h.position.y:0,p=h?n.position[2]-h.position.z:0,x=!h||d*d+f*f+p*p>=r.minVertexDistance**2,g=t.trailPointPool??(t.trailPointPool=[]),m=x?g.pop()??{dynamicParams:null,position:new O,timeSeconds:0,lifetimeSeconds:0,distanceFromHead:0,color:[0,0,0],alpha:0,width:0,seed:0,maxLength:void 0}:h;if(t.trailResolution){const S=m.dynamicParams??(m.dynamicParams=[0,0,0,0]);for(let A=0;A<4;A++)S[A]=e.modules.customData?Me(e.advanced.customData.channels[A],n.normalizedAge,n.seed,n.loopAge):0;m.color[0]=n.trailColor[0],m.color[1]=n.trailColor[1],m.color[2]=n.trailColor[2],m.alpha=n.trailColor[3]}else m.dynamicParams=null,m.color[0]=n.color.r,m.color[1]=n.color.g,m.color[2]=n.color.b,m.alpha=n.alpha;m.position.set(n.position[0],n.position[1],n.position[2]),m.timeSeconds=i,m.lifetimeSeconds=s,m.width=o,m.maxLength=a>0?a:void 0,m.seed=n.seed,x&&u.push(m),l.lastSeenFrame=i,Lh(u,a>0?a:void 0,i,g)}function Y1(t,e,n){const i=t.trailEmitterPosition;if(e.modules.trails&&!e.advanced.trails.worldSpace&&t.trailHistories.size>0){const r=n[0]-i[0],s=n[1]-i[1],a=n[2]-i[2];if(r!==0||s!==0||a!==0)for(const o of t.trailHistories.values())for(const c of o.points)c.position.x+=r,c.position.y+=s,c.position.z+=a}i[0]=n[0],i[1]=n[1],i[2]=n[2]}var Z1=class{constructor(t){Y(this,"context",t),Y(this,"sampler"),Y(this,"presentation"),this.sampler=new k1(t),this.presentation=new N1(t)}drawEmitter(t,e,n,i,r){var x,g,m,S,A;if(e.mode==="mesh"&&e.mesh.renderMode==="meshAsset"&&!this.context.renderGeometryOverrides.has(e.id)&&(!e.mesh.asset||!((x=this.context.options.meshProvider)!=null&&x.getMeshGeometry(e.mesh.asset))))return ca(t,0),(g=t.instanced)==null||g.commit(0),rs(t),t.trailMesh.removeFromParent(),R1();const s=ls(e.render.blend,t.materialBlend),a=yr(s);t.material.depthTest=e.render.depthTest;const o=a?!0:Un({...e.render,blend:s==="additive"?"additive":s==="premultiplied"?"premultiplied":"alpha"}),c=Bi(s),l=s==="premultiplied";t.material.depthWrite=o,t.material.blending=c,t.material.premultipliedAlpha=l,(m=t.instanced)==null||m.setRenderState(e),t.trailResolution||(t.trailMaterial.depthTest=e.render.depthTest,t.trailMaterial.depthWrite=o,t.trailMaterial.blending=c,t.trailMaterial.premultipliedAlpha=l,a&&(t.trailMaterial.transparent=!1)),a&&(t.material.transparent=!1),Y1(t,e,this.context.position);let u=0,h=0,d=0,f=0;t.instanced&&F1(n,e.render.sortMode,t.particleOrder);for(let M=0;M<n.activeCount;M++){const E=t.instanced?t.particleOrder[M]??M:M,T=this.sampler.sampleParticle(e,n,E,r,t.materialFixed,t.materialParticleColorUsage);if(T&&this.context.lightCandidates.addParticle(e,n,E,T,this.context.position),!(!(T!=null&&T.visible)||(q1(t,e,T,r),!(T.alpha>0||t.material instanceof _t||a)))){if(t.instanced){const v=this.presentation.applySampleToInstanced(t.instanced,T,t,e,i,E,u);d+=v,f+=T.start}else{const v=this.presentation.acquireMesh(t,u);this.presentation.applySampleToMesh(v,T,t,e,i,E,r)}u++,T.emissiveStrength>this.context.previewBloomThreshold&&h++}}ca(t,u),t.instanced&&u>1&&(e.render.sortMode==="distanceFarFirst"?t.instanced.sortByCameraDistance(u,!0):e.render.sortMode==="distanceNearFirst"&&t.instanced.sortByCameraDistance(u,!1)),(S=t.instanced)==null||S.commit(u),(A=t.instanced)==null||A.setRenderOrder(Xh(this.context.renderOrder+(this.context.emitterLayerRanks[i]??i),e.render.sortMode,u>0?d/u:0,u>0?f/u:0));let p=0;return e.modules.trails?(t.trailMesh.parent||this.context.root.add(t.trailMesh),t.trailMesh.renderOrder=this.context.renderOrder+(this.context.emitterLayerRanks[i]??i),Oy(t,e,this.context.camera,r,this.context.position),p=t.trailMesh.visible?1:0):(rs(t),t.trailMesh.removeFromParent()),{visibleParticles:u,bloomSourceParticles:h,drawCalls:(u>0?t.instanced?1:u:0)+p,instancedDrawCalls:u>0&&t.instanced?1:0,legacyParticleDrawCalls:t.instanced?0:u}}};function ud(t){return K1(t)?Ec({app:"vfx-editor",kind:"particle-effect",version:1,targetProfile:t.targetProfile,id:t.id,name:t.name,timeline:t.timeline,emitters:t.emitters}):Ec(t)}function K1(t){return!!(t&&typeof t=="object"&&t.kind==="vfx-effect")}var J1=class{constructor(t){Y(this,"root",t),Y(this,"startedAt",0),Y(this,"instanceId",lS()),Y(this,"candidates",[]),Y(this,"worldCandidates",[]),Y(this,"scratchWorld",new O),Y(this,"particleCutoff",1/0)}clear(){this.candidates.length=0}getWorldCandidates(){if(this.worldCandidates.length=0,!this.root.parent)return this.worldCandidates;let t=!1;for(let e=this.root;e;e=e.parent){if(!e.visible)return this.worldCandidates;e.isScene&&(t=!0)}if(!t)return this.worldCandidates;this.root.updateWorldMatrix(!0,!1);for(const e of this.candidates)this.scratchWorld.fromArray(e.position).applyMatrix4(this.root.matrixWorld),this.worldCandidates.push({...e,position:this.scratchWorld.toArray()});return this.worldCandidates}beginEmitter(t,e,n,i){const r=t.lightEmission;if(this.particleCutoff=1/0,(r==null?void 0:r.enabled)!==!1&&(r==null?void 0:r.mode)==="particles"&&r.maxLights!==null){const s=Array.from(e.particleIds.subarray(0,e.activeCount)).sort((a,o)=>a-o);this.particleCutoff=r.maxLights>0?s[r.maxLights-1]??1/0:-1}if((r==null?void 0:r.enabled)!==!1&&(r==null?void 0:r.mode)==="emitter"&&n-this.startedAt>=t.timeline.start&&e.age>=0&&(t.loop||e.age<=t.duration)&&i){const s=Math.min(1,Math.max(0,e.age/t.duration)),a=Gu(r,`${this.instanceId}/${t.id}/origin`,t.spawn.position,s,s,e.loopRandom);a&&this.candidates.push(a)}}addParticle(t,e,n,i,r){var s,a;if(((s=t.lightEmission)==null?void 0:s.enabled)!==!1&&((a=t.lightEmission)==null?void 0:a.mode)==="particles"&&e.particleIds[n]<=this.particleCutoff){const o=Gu(t.lightEmission,`${this.instanceId}/${t.id}/${e.particleIds[n]}`,[i.position[0]-r[0],i.position[1]-r[1],i.position[2]-r[2]],i.normalizedAge,i.loopAge,i.seed,i.lightColor);o&&this.candidates.push(o)}}},Q1=1/60,j1=class{constructor(t){Y(this,"options",t),Y(this,"root",new lr),Y(this,"lightRevision",0),Y(this,"lightCandidates",new J1(this.root)),Y(this,"stats",Lc()),Y(this,"effect"),Y(this,"runner"),Y(this,"emitterViews",[]),Y(this,"debugTransforms",[]),Y(this,"emitterLayerRanks",[]),Y(this,"position"),Y(this,"seed"),Y(this,"timeSeconds"),Y(this,"paused",!1),Y(this,"destroyed",!1),Y(this,"visible",!0),Y(this,"captureDebugTransforms"),Y(this,"renderOrder",0),Y(this,"camera"),Y(this,"previewBloomEnabled"),Y(this,"previewBloomThreshold"),Y(this,"previewExposureStops"),Y(this,"emissionOverrides",new Map),Y(this,"renderGeometryOverrides",new Map),Y(this,"renderGeometryGeneration",0),Y(this,"emitterDrawParameters",new Map),Y(this,"emissionBoundSources",new Map),Y(this,"drawer");const e=this;this.drawer=new Z1({get lightCandidates(){return e.lightCandidates},get root(){return e.root},get runner(){return e.runner},get position(){return e.position},get camera(){return e.camera},get emitterDrawParameters(){return e.emitterDrawParameters},get renderOrder(){return e.renderOrder},get emitterLayerRanks(){return e.emitterLayerRanks},get captureDebugTransforms(){return e.captureDebugTransforms},get debugTransforms(){return e.debugTransforms},get previewBloomEnabled(){return e.previewBloomEnabled},get previewBloomThreshold(){return e.previewBloomThreshold},get previewExposureStops(){return e.previewExposureStops},get renderGeometryOverrides(){return e.renderGeometryOverrides},get options(){return e.options}}),this.effect=ud(t.effect),this.camera=t.camera,this.runner=new MM(this.effect),this.position=D1(t.position??[0,0,0]),this.captureDebugTransforms=t.captureDebugTransforms!==!1,this.seed=I1(t.seed),this.timeSeconds=Math.max(0,t.timeSeconds??0),this.previewBloomThreshold=Math.max(0,t.previewBloomThreshold??1),this.previewBloomEnabled=t.previewBloomEnabled===!0,this.previewExposureStops=Ii(t.previewExposureStops??0,-2,2),this.runner.setRuntimeParameters(t.runtimeParameters??{}),this.syncEmissionGeometries(),this.setTransform({position:this.position,rotation:t.rotation,scale:t.scale}),t.autoStart!==!1&&this.play()}get lightsPaused(){return this.paused}getLightCandidates(){return this.lightCandidates.getWorldCandidates()}get isActive(){return this.runner.isActive}play(){this.destroyed||(this.paused=!1,this.runner.isActive?this.runner.resumeEmission():(this.lightCandidates.startedAt=this.timeSeconds,this.runner.reset(this.effect,this.position,this.timeSeconds,this.seed)),this.draw(this.timeSeconds))}pause(){this.paused=!0}stop(){this.lightCandidates.clear(),this.lightRevision++,this.runner.stop(),this.clearViews(),this.syncStats(0,0,0,0,0)}allowCompletion(){this.runner.allowCompletion()}setRuntimeParameters(t){this.runner.setRuntimeParameters(t)}setRenderOrder(t){var e;this.renderOrder=Number.isFinite(t)?t:0,this.root.renderOrder=this.renderOrder;for(let n=0;n<this.emitterViews.length;n++){const i=this.emitterViews[n];if(!i)continue;const r=this.emitterLayerRanks[n]??n;(e=i.instanced)==null||e.setRenderOrder(this.renderOrder+r),i.trailMesh.renderOrder=this.renderOrder+r}}seek(t){if(this.destroyed)return;this.lightRevision++,this.lightCandidates.startedAt=0;const e=Math.max(0,Number.isFinite(t)?t:0);for(const i of this.emitterViews)i&&rs(i);this.timeSeconds=0,this.runner.reset(this.effect,this.position,0,this.seed);let n=0;for(;n<e;){const i=Math.min(Q1,e-n);n+=i,this.runner.update(i,n)}this.timeSeconds=e,this.draw(e)}update(t){if(this.destroyed||this.paused)return;const e=Math.max(0,Number.isFinite(t)?t:0);this.timeSeconds+=e,this.syncEmissionGeometries(),e>0&&this.runner.update(e,this.timeSeconds),this.draw(this.timeSeconds)}setEmitterRuntimeParameters(t,e){if(this.destroyed)return;const{sizeMultiplier:n,colorTint:i,sizeMultiplierValue:r,colorOverLifetimeGradient:s,...a}=e;if((a.emissionRateMultiplier!==void 0||a.initialVelocityMultiplier!==void 0)&&this.runner.setEmitterRuntimeParameters(t,a),n===void 0&&i===void 0&&r===void 0&&s===void 0)return;const o=this.emitterDrawParameters.get(t)??{sizeMultiplier:1,colorTint:[1,1,1,1],sizeMultiplierValue:null,colorOverLifetimeGradient:null};n!==void 0&&(o.sizeMultiplier=Number.isFinite(n)?Math.max(0,n):1),i!==void 0&&(o.colorTint=[Hs(i[0]),Hs(i[1]),Hs(i[2]),Hs(i[3])]),r!==void 0&&(o.sizeMultiplierValue=r?oM(xt(r,1,0,100)):null),s!==void 0&&(o.colorOverLifetimeGradient=s?Ni(s,[1,1,1,1],[1,1,1,1]):null),this.emitterDrawParameters.set(t,o)}emitBurst(t,e={}){return this.destroyed?0:(this.paused=!1,this.runner.isActive||this.play(),this.syncEmissionGeometries(),this.runner.emitBurst(t,e))}restart(){this.destroyed||(this.paused=!1,this.seek(0))}setRenderGeometry(t,e){if(!this.destroyed){if(e)this.renderGeometryOverrides.set(t,{geometry:e,generation:++this.renderGeometryGeneration});else{if(!this.renderGeometryOverrides.has(t))return;this.renderGeometryOverrides.delete(t)}this.ensureViews()}}setEmissionGeometry(t,e){this.destroyed||(e?this.emissionOverrides.set(t,e):this.emissionOverrides.delete(t),this.emissionBoundSources.delete(t),this.syncEmissionGeometries())}syncEmissionGeometries(){var t;for(const e of this.effect.emitters){if(e.spawn.shape!=="mesh")continue;const n=this.emissionOverrides.get(e.id),i=!n&&e.spawn.meshAsset?((t=this.options.meshProvider)==null?void 0:t.getMeshGeometry(e.spawn.meshAsset))??null:null,r=n??i;if(this.emissionBoundSources.get(e.id)===r&&this.emissionBoundSources.has(e.id))continue;const a=r?Ry(r):null;this.runner.setEmissionGeometry(e.id,a),this.emissionBoundSources.set(e.id,r)}}setTransform(t){t.position&&(this.position[0]=t.position[0],this.position[1]=t.position[1],this.position[2]=t.position[2],this.runner.setPosition(this.position),this.root.position.set(t.position[0],t.position[1],t.position[2])),t.rotation&&this.root.rotation.set(t.rotation[0],t.rotation[1],t.rotation[2]),t.scale&&this.root.scale.set(t.scale[0],t.scale[1],t.scale[2])}setVisible(t){this.visible=t,this.root.visible=t,this.lightRevision++}setCamera(t){this.camera=t,this.draw(this.timeSeconds)}setPreviewBloomOptions(t){typeof t.enabled=="boolean"&&(this.previewBloomEnabled=t.enabled),this.previewBloomThreshold=Math.max(0,t.threshold??this.previewBloomThreshold),this.previewExposureStops=Ii(t.exposureStops??this.previewExposureStops,-2,2),this.draw(this.timeSeconds)}updateDefinition(t,e={}){return this.effect=ud(t),this.lightRevision++,this.runner.updateDefinition(this.effect),this.emissionBoundSources.clear(),this.syncEmissionGeometries(),e.preserveViews||this.rebuildViews(),this.effect}getParticleDebugTransforms(t=[]){return t.push(...this.debugTransforms),t}destroy(){this.destroyed||(this.destroyed=!0,this.stop(),this.rebuildViews(),this.root.removeFromParent())}draw(t){var a;if(this.lightCandidates.clear(),!this.visible)return;this.ensureViews(),this.debugTransforms.length=0,L1(this.runner.definition.emitters,this.emitterLayerRanks);let e=0,n=0,i=0,r=0,s=0;for(let o=0;o<this.effect.emitters.length;o++){const c=this.runner.definition.emitters[o],l=this.runner.states[o],u=this.emitterViews[o];if(!c||!l||!u||!c.enabled){u&&(ca(u,0),(a=u.instanced)==null||a.commit(0),rs(u),u.trailMesh.removeFromParent());continue}this.lightCandidates.beginEmitter(c,l,t,this.runner.isActive);const h=this.drawer.drawEmitter(u,c,l,o,t);e+=h.visibleParticles,n+=h.bloomSourceParticles,i+=h.drawCalls,r+=h.instancedDrawCalls,s+=h.legacyParticleDrawCalls}this.syncStats(e,n,i,r,s)}ensureViews(){var t;for(let e=0;e<this.effect.emitters.length;e++){const n=this.effect.emitters[e],i={effect:this.effect,renderGeometryOverride:this.renderGeometryOverrides.get(n.id)??null},r=Wh(n,this.options,i);if(((t=this.emitterViews[e])==null?void 0:t.staticKey)===r)continue;this.emitterViews[e]&&Ao(this.emitterViews[e]);const s=x1(n,this.options,i);this.emitterViews[e]=s,s.instanced&&this.root.add(s.instanced.mesh)}for(;this.emitterViews.length>this.effect.emitters.length;){const e=this.emitterViews.pop();e&&Ao(e)}}rebuildViews(){for(const t of this.emitterViews)Ao(t);this.emitterViews.length=0}clearViews(){var t;for(const e of this.emitterViews)ca(e,0),(t=e.instanced)==null||t.commit(0)}syncStats(t,e,n,i,r){this.stats.activeParticles=this.runner.stats.activeParticles,this.stats.visibleParticles=t,this.stats.capacity=this.runner.stats.capacity,this.stats.emittedLastFrame=this.runner.stats.emittedLastFrame,this.stats.bloomSourceParticles=e,this.stats.drawCalls=n,this.stats.instancedDrawCalls=i,this.stats.legacyParticleDrawCalls=r,this.stats.missingMeshRefs=this.collectMissingMeshRefs(),this.stats.missingMaterialRefs=this.collectMissingMaterialRefs();const s=this.emitterViews.flatMap(a=>a.unsupportedFeatures);this.stats.unsupportedFeatures=[...gh(this.effect).blockers.map(a=>`${a.path}: ${a.message}`),...s]}collectMissingMeshRefs(){var e,n;const t=[];for(const i of this.effect.emitters)i.mode==="mesh"&&i.mesh.renderMode==="meshAsset"&&i.mesh.asset&&!this.renderGeometryOverrides.has(i.id)&&!((e=this.options.meshProvider)!=null&&e.getMeshGeometry(i.mesh.asset))&&t.push(i.mesh.asset),i.spawn.shape==="mesh"&&i.spawn.meshAsset&&!this.emissionOverrides.has(i.id)&&!((n=this.options.meshProvider)!=null&&n.getMeshGeometry(i.spawn.meshAsset))&&t.push(i.spawn.meshAsset);return t}collectMissingMaterialRefs(){var e;const t=new Set;for(const n of this.emitterViews)n.missingMaterialRef&&t.add(n.missingMaterialRef),(e=n.trailResolution)!=null&&e.missingMaterialRef&&t.add(n.trailResolution.missingMaterialRef);return[...t]}},eE=class{constructor(t){Y(this,"options",t),Y(this,"backendId","three3d"),Y(this,"capabilities",mh),Y(this,"root",new lr),Y(this,"stats",{...Lc(),effectCount:0}),Y(this,"instances",new Set),Y(this,"camera"),Y(this,"previewBloomEnabled"),Y(this,"previewBloomThreshold"),Y(this,"previewExposureStops"),Y(this,"destroyed",!1),this.camera=t.camera,this.previewBloomThreshold=Math.max(0,t.previewBloomThreshold??1),this.previewBloomEnabled=t.previewBloomEnabled===!0,this.previewExposureStops=Ii(t.previewExposureStops??0,-2,2);const e=t.parent??t.scene;e&&this.mount(e)}mount(t){this.root.parent!==t&&t.add(this.root)}unmount(){this.root.removeFromParent()}createEffect(t,e={}){if(this.destroyed)throw new Error("ThreeVfxRenderer is destroyed.");const n=new j1({effect:t,camera:this.camera,textureProvider:this.options.textureProvider,meshProvider:this.options.meshProvider,materialProvider:this.options.materialProvider,materialGraphProvider:this.options.materialGraphProvider,position:e.position,rotation:e.rotation,scale:e.scale,seed:e.seed,timeSeconds:e.timeSeconds,autoStart:e.autoStart,runtimeParameters:e.runtimeParameters,previewBloomEnabled:this.previewBloomEnabled,previewBloomThreshold:this.previewBloomThreshold,previewExposureStops:this.previewExposureStops,captureDebugTransforms:this.options.captureDebugTransforms});return this.instances.add(n),this.root.add(n.root),this.refreshStats(),n}removeEffect(t,e=!0){this.instances.delete(t)&&(this.root.remove(t.root),e&&t.destroy(),this.refreshStats())}update(t){for(const e of this.instances)e.update(t);this.refreshStats()}getSupport(t){return gh(t)}setCamera(t){this.camera=t;for(const e of this.instances)e.setCamera(t)}setPreviewBloomOptions(t){typeof t.enabled=="boolean"&&(this.previewBloomEnabled=t.enabled),this.previewBloomThreshold=Math.max(0,t.threshold??this.previewBloomThreshold),this.previewExposureStops=Ii(t.exposureStops??this.previewExposureStops,-2,2);for(const e of this.instances)e.setPreviewBloomOptions({enabled:this.previewBloomEnabled,threshold:this.previewBloomThreshold,exposureStops:this.previewExposureStops});this.refreshStats()}destroy(){if(!this.destroyed){this.destroyed=!0;for(const t of[...this.instances])this.removeEffect(t,!0);this.unmount()}}refreshStats(){const t=Lc();for(const e of this.instances)t.activeParticles+=e.stats.activeParticles,t.visibleParticles+=e.stats.visibleParticles,t.capacity+=e.stats.capacity,t.emittedLastFrame+=e.stats.emittedLastFrame,t.bloomSourceParticles+=e.stats.bloomSourceParticles,t.drawCalls+=e.stats.drawCalls,t.instancedDrawCalls+=e.stats.instancedDrawCalls,t.legacyParticleDrawCalls+=e.stats.legacyParticleDrawCalls,t.missingMeshRefs.push(...e.stats.missingMeshRefs),t.missingMaterialRefs.push(...e.stats.missingMaterialRefs),t.unsupportedFeatures.push(...e.stats.unsupportedFeatures);Object.assign(this.stats,t,{effectCount:this.instances.size})}};const Ro=.2,Po=1.2;function dd(t){const e=Math.max(0,t),n=Math.min(1,Math.max(0,(e-Ro)/(Po-Ro)));return{time:+e.toFixed(3),visible:n>0,revealProgress:+n.toFixed(4),active:e>=Po,stage:e<Ro?"spawn cue":e<Po?"revealing":"active"}}function tE(){const t={value:0},e=new Kc({color:8497852,roughness:.8,metalness:0});return e.onBeforeCompile=n=>{n.uniforms.uSpawnReveal=t,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vSpawnLocal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSpawnLocal = position;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
uniform float uSpawnReveal;
varying vec3 vSpawnLocal;
float spawnCellMask(vec3 p) {
  vec3 cell = floor(p * 10.0);
  return fract(sin(dot(cell, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
}`).replace("#include <color_fragment>",`#include <color_fragment>
float spawnMask = spawnCellMask(vSpawnLocal);
if (spawnMask > uSpawnReveal) discard;
float spawnEdge = smoothstep(uSpawnReveal - 0.08, uSpawnReveal, spawnMask);
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.2, 0.9, 1.0), spawnEdge);`)},e.customProgramCacheKey=()=>"sona-enemy-spawn-cell-cutout-v1",{material:e,reveal:t}}async function nE(){const t=document.querySelector("#scene"),e=new Mv({canvas:t,antialias:!0});e.setSize(900,430,!1),e.setPixelRatio(1);const n=new Qf;n.background=new He("#172a3b");const i=new fn(38,900/430,.1,40);i.position.set(4,3,6),i.lookAt(0,.85,0),i.updateMatrixWorld(),n.add(new vp(13627135,2634528,2));const r=new Sp(16777215,2);r.position.set(3,5,2),n.add(r);const s=new bp(8,16,5404553,3034720);n.add(s);const a=new Jt(new Zc(.78,.035,8,64),new br({color:7788264}));a.rotation.x=Math.PI/2,a.position.y=.03,n.add(a);const o=new Yc(.38,.95,6,16),{material:c,reveal:l}=tE(),u=new Jt(o,c);u.position.y=.855,u.visible=!1,n.add(u);const h=async G=>{const Q=await fetch(G);if(!Q.ok)throw new Error(`Bundle fetch ${Q.status}: ${G}`);return Q.json()},d=await h("./vfx/manifest.json"),f=Object.fromEntries(await Promise.all(d.effects.map(async G=>[G.path,await h(`./vfx/${G.path}`)]))),x=eS({manifest:d,effectsByPath:f,assetPaths:[]},{requiredBackend:"three3d",requiredEffectIds:["enemy-spawn-flecks"],requireEveryAsset:!0}).effectsById.get("enemy-spawn-flecks"),g=new eE({scene:n,camera:i});let m=null,S=0,A=!0,M=!1,E=0,T=0,C=0;const v=[],b=document.querySelector("#message");function R(){m&&(g.removeEffect(m,!0),m=null)}function P(){const G=dd(S);return u.visible=A&&G.visible,l.value=G.revealProgress,G}function D(){const G=g.stats;return{...P(),inScene:A,playing:M,enemyVisible:u.visible,enemyDepthWrite:c.depthWrite,materialTransparent:c.transparent,hostDissolveUniform:l.value,effectCount:G.effectCount,activeParticles:G.activeParticles,capacity:G.capacity,missingMeshRefs:G.missingMeshRefs,missingMaterialRefs:G.missingMaterialRefs,unsupportedFeatures:G.unsupportedFeatures,updateCalls:E}}function L(){e.render(n,i),document.querySelector("#stats").textContent=JSON.stringify({state:D(),checks:v},null,2)}function H(){M=!1,cancelAnimationFrame(C)}function N(){H(),R(),A=!0,S=0,E=0,m=g.createEffect(x,{position:[0,0,0],seed:475}),P()}function q(G){A&&(S+=G,m&&(g.update(G),E++,m.isActive||R()),P())}function B(G){N();const Q=Math.round(G*60);for(let ne=0;ne<Q;ne++)q(1/60);L(),b.textContent=`Paused at ${S.toFixed(2)} s. ${dd(S).stage}.`}document.querySelector("#cue").onclick=()=>B(.1),document.querySelector("#mid").onclick=()=>B(.6),document.querySelector("#end").onclick=()=>B(1.2),document.querySelector("#play").onclick=()=>{N(),M=!0,T=performance.now(),b.textContent="Host owns the reveal clock; NixieFX advances once per frame while the cue exists.";const G=Q=>{if(!M||!A)return;const ne=(Q-T)/1e3;if(T=Q,q(ne),L(),S>=1.5){H();return}C=requestAnimationFrame(G)};C=requestAnimationFrame(G)},document.querySelector("#leave").onclick=()=>{H(),A=!1,R(),P(),L(),b.textContent="Scene left: particle instance removed, frame callback stopped, enemy hidden."},document.querySelector("#verify").onclick=()=>{v.length=0;for(const ne of[.1,.6,1.2]){B(ne);const j=D();v.push({check:`transition at ${ne.toFixed(2)} s`,passed:ne===.1?!j.enemyVisible&&!j.active:ne===.6?j.enemyVisible&&j.revealProgress===.4&&!j.active:j.enemyVisible&&j.revealProgress===1&&j.active&&j.effectCount===0,...j})}B(.6),H(),A=!1,R(),P();const G=E;for(let ne=0;ne<60;ne++)q(1/60);const Q=D();v.push({check:"60 attempted updates after leaving",passed:Q.effectCount===0&&!Q.enemyVisible&&E===G,simulationCallsAfterLeave:E-G,...Q}),B(.6),L(),b.textContent="Lifecycle checks complete. Values are not a GPU benchmark or gameplay integration test."},document.addEventListener("visibilitychange",()=>{document.hidden&&(H(),b.textContent="Hidden page: playback paused. Press Play spawn to restart.",L())}),window.addEventListener("pagehide",()=>{H(),R(),g.destroy(),o.dispose(),c.dispose(),a.geometry.dispose(),a.material.dispose(),s.geometry.dispose(),s.material.dispose(),e.dispose()}),B(.6)}nE().catch(t=>{document.querySelector("#message").textContent=`Demo error: ${t.message}`,console.error(t)});
