(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oc="185",ef=0,Tl=1,tf=2,$s=1,nf=2,Xr=3,Kn=0,Jt=1,ln=2,Ln=0,Fn=1,Mr=2,Al=3,wl=4,rf=5,Ri=100,sf=101,af=102,of=103,cf=104,lf=200,uf=201,df=202,hf=203,Lo=204,Fo=205,ff=206,pf=207,mf=208,gf=209,xf=210,vf=211,_f=212,Mf=213,Sf=214,No=0,Uo=1,Oo=2,Sr=3,Bo=4,Vo=5,zo=6,Go=7,ld=0,yf=1,Ef=2,Nn=0,ud=1,dd=2,hd=3,fd=4,pd=5,md=6,gd=7,xd=300,Bi=301,yr=302,Aa=303,wa=304,ma=306,jr=1e3,Yn=1001,Ho=1002,Ot=1003,bf=1004,ms=1005,Bt=1006,Ca=1007,fi=1008,pn=1009,vd=1010,_d=1011,es=1012,Bc=1013,On=1014,Mn=1015,Jn=1016,Vc=1017,zc=1018,ts=1020,Md=35902,Sd=35899,yd=1021,Ed=1022,mn=1023,Qn=1026,Ii=1027,Gc=1028,Hc=1029,Vi=1030,kc=1031,Wc=1033,qs=33776,Ys=33777,Zs=33778,Ks=33779,ko=35840,Wo=35841,Xo=35842,$o=35843,qo=36196,Yo=37492,Zo=37496,Ko=37488,Jo=37489,js=37490,Qo=37491,jo=37808,ec=37809,tc=37810,nc=37811,ic=37812,rc=37813,sc=37814,ac=37815,oc=37816,cc=37817,lc=37818,uc=37819,dc=37820,hc=37821,fc=36492,pc=36494,mc=36495,gc=36283,xc=36284,ea=36285,vc=36286,Tf=3200,_c=0,Af=1,Pn="",Ut="srgb",ta="srgb-linear",na="linear",st="srgb",Ki=7680,Cl=519,wf=512,Cf=513,Rf=514,Xc=515,Pf=516,Df=517,$c=518,If=519,Mc=35044,Zr=35048,Rl="300 es",In=2e3,ia=2001;function Lf(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}const Ff={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function gs(t,e){return new Ff[t](e)}function ra(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Nf(){const t=ra("canvas");return t.style.display="block",t}const Pl={};function sa(...t){const e="THREE."+t.shift();console.log(e,...t)}function bd(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ue(...t){t=bd(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Je(...t){t=bd(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function gr(...t){const e=t.join(" ");e in Pl||(Pl[e]=!0,Ue(...t))}function Uf(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Of={[No]:Uo,[Oo]:zo,[Bo]:Go,[Sr]:Vo,[Uo]:No,[zo]:Oo,[Go]:Bo,[Vo]:Sr};class Xi{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ra=Math.PI/180,Sc=180/Math.PI;function xi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function Ke(t,e,n){return Math.max(e,Math.min(n,t))}function Bf(t,e){return(t%e+e)%e}function Pa(t,e,n){return(1-n)*t+n*e}function Dn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ct(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const dl=class dl{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};dl.prototype.isVector2=!0;let et=dl;class jn{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3],d=s[a+0],f=s[a+1],p=s[a+2],x=s[a+3];if(h!==x||c!==d||l!==f||u!==p){let g=c*d+l*f+u*p+h*x;g<0&&(d=-d,f=-f,p=-p,x=-x,g=-g);let m=1-o;if(g<.9995){const S=Math.acos(g),T=Math.sin(S);m=Math.sin(m*S)/T,o=Math.sin(o*S)/T,c=c*m+d*o,l=l*m+f*o,u=u*m+p*o,h=h*m+x*o}else{c=c*m+d*o,l=l*m+f*o,u=u*m+p*o,h=h*m+x*o;const S=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=S,l*=S,u*=S,h*=S}}e[n]=c,e[n+1]=l,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[a],d=s[a+1],f=s[a+2],p=s[a+3];return e[n]=o*p+u*h+c*f-l*d,e[n+1]=c*p+u*d+l*h-o*f,e[n+2]=l*p+u*f+o*d-c*h,e[n+3]=u*p-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),h=o(s/2),d=c(i/2),f=c(r/2),p=c(s/2);switch(a){case"XYZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"YZX":this._x=d*u*h+l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h-d*f*p;break;case"XZY":this._x=d*u*h-l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h+d*f*p;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],l=n[2],u=n[6],h=n[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,l=n._z,u=n._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-n;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,n=Math.sin(n*l)/u,this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const hl=class hl{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Dl.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Dl.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+c*l+a*h-o*u,this.y=i+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Da.copy(this).projectOnVector(e),this.sub(Da)}reflect(e){return this.sub(Da.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hl.prototype.isVector3=!0;let N=hl;const Da=new N,Dl=new jn,fl=class fl{constructor(e,n,i,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l)}set(e,n,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],p=i[8],x=r[0],g=r[3],m=r[6],S=r[1],T=r[4],M=r[7],b=r[2],E=r[5],C=r[8];return s[0]=a*x+o*S+c*b,s[3]=a*g+o*T+c*E,s[6]=a*m+o*M+c*C,s[1]=l*x+u*S+h*b,s[4]=l*g+u*T+h*E,s[7]=l*m+u*M+h*C,s[2]=d*x+f*S+p*b,s[5]=d*g+f*T+p*E,s[8]=d*m+f*M+p*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return n*a*u-n*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*s,f=l*s-a*c,p=n*h+i*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return e[0]=h*x,e[1]=(r*l-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=d*x,e[4]=(u*n-r*c)*x,e[5]=(r*s-o*n)*x,e[6]=f*x,e[7]=(i*c-l*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+n,0,0,1),this}scale(e,n){return gr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ia.makeScale(e,n)),this}rotate(e){return gr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ia.makeRotation(-e)),this}translate(e,n){return gr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ia.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};fl.prototype.isMatrix3=!0;let Ve=fl;const Ia=new Ve,Il=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ll=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vf(){const t={enabled:!0,workingColorSpace:ta,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===st&&(r.r=Zn(r.r),r.g=Zn(r.g),r.b=Zn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(r.r=xr(r.r),r.g=xr(r.g),r.b=xr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Pn?na:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return gr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return gr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[ta]:{primaries:e,whitePoint:i,transfer:na,toXYZ:Il,fromXYZ:Ll,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:i,transfer:st,toXYZ:Il,fromXYZ:Ll,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),t}const Ze=Vf();function Zn(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function xr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ji;class zf{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ji===void 0&&(Ji=ra("canvas")),Ji.width=e.width,Ji.height=e.height;const r=Ji.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ji}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ra("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Zn(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Zn(n[i]/255)*255):n[i]=Zn(n[i]);return{data:n,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gf=0;class qc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=xi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(La(r[a].image)):s.push(La(r[a]))}else s=La(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function La(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?zf.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}let Hf=0;const Fa=new N;class Vt extends Xi{constructor(e=Vt.DEFAULT_IMAGE,n=Vt.DEFAULT_MAPPING,i=Yn,r=Yn,s=Bt,a=fi,o=mn,c=pn,l=Vt.DEFAULT_ANISOTROPY,u=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=xi(),this.name="",this.source=new qc(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Fa).x}get height(){return this.source.getSize(Fa).y}get depth(){return this.source.getSize(Fa).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ue(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ue(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jr:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case Ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jr:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case Ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=xd;Vt.DEFAULT_ANISOTROPY=1;const pl=class pl{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],p=c[9],x=c[2],g=c[6],m=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(p+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const T=(l+1)/2,M=(f+1)/2,b=(m+1)/2,E=(u+d)/4,C=(h+x)/4,v=(p+g)/4;return T>M&&T>b?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=E/i,s=C/i):M>b?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=E/r,s=v/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=C/s,r=v/s),this.set(i,r,s,n),this}let S=Math.sqrt((g-p)*(g-p)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(g-p)/S,this.y=(h-x)/S,this.z=(d-u)/S,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this.w=Ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this.w=Ke(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pl.prototype.isVector4=!0;let xt=pl;class kf extends Xi{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new xt(0,0,e,n),this.scissorTest=!1,this.viewport=new xt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new Vt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new qc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends kf{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Td extends Vt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wf extends Vt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pa=class pa{constructor(e,n,i,r,s,a,o,c,l,u,h,d,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l,u,h,d,f,p,x,g)}set(e,n,i,r,s,a,o,c,l,u,h,d,f,p,x,g){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pa().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Qi.setFromMatrixColumn(e,0).length(),s=1/Qi.setFromMatrixColumn(e,1).length(),a=1/Qi.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,p=o*u,x=o*h;n[0]=c*u,n[4]=-c*h,n[8]=l,n[1]=f+p*l,n[5]=d-x*l,n[9]=-o*c,n[2]=x-d*l,n[6]=p+f*l,n[10]=a*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,p=l*u,x=l*h;n[0]=d+x*o,n[4]=p*o-f,n[8]=a*l,n[1]=a*h,n[5]=a*u,n[9]=-o,n[2]=f*o-p,n[6]=x+d*o,n[10]=a*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,p=l*u,x=l*h;n[0]=d-x*o,n[4]=-a*h,n[8]=p+f*o,n[1]=f+p*o,n[5]=a*u,n[9]=x-d*o,n[2]=-a*l,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const d=a*u,f=a*h,p=o*u,x=o*h;n[0]=c*u,n[4]=p*l-f,n[8]=d*l+x,n[1]=c*h,n[5]=x*l+d,n[9]=f*l-p,n[2]=-l,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,p=o*c,x=o*l;n[0]=c*u,n[4]=x-d*h,n[8]=p*h+f,n[1]=h,n[5]=a*u,n[9]=-o*u,n[2]=-l*u,n[6]=f*h+p,n[10]=d-x*h}else if(e.order==="XZY"){const d=a*c,f=a*l,p=o*c,x=o*l;n[0]=c*u,n[4]=-h,n[8]=l*u,n[1]=d*h+x,n[5]=a*u,n[9]=f*h-p,n[2]=p*h-f,n[6]=o*u,n[10]=x*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xf,e,$f)}lookAt(e,n,i){const r=this.elements;return on.subVectors(e,n),on.lengthSq()===0&&(on.z=1),on.normalize(),ii.crossVectors(i,on),ii.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ii.crossVectors(i,on)),ii.normalize(),xs.crossVectors(on,ii),r[0]=ii.x,r[4]=xs.x,r[8]=on.x,r[1]=ii.y,r[5]=xs.y,r[9]=on.y,r[2]=ii.z,r[6]=xs.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],p=i[2],x=i[6],g=i[10],m=i[14],S=i[3],T=i[7],M=i[11],b=i[15],E=r[0],C=r[4],v=r[8],A=r[12],P=r[1],R=r[5],D=r[9],O=r[13],k=r[2],L=r[6],$=r[10],V=r[14],Y=r[3],te=r[7],ne=r[11],j=r[15];return s[0]=a*E+o*P+c*k+l*Y,s[4]=a*C+o*R+c*L+l*te,s[8]=a*v+o*D+c*$+l*ne,s[12]=a*A+o*O+c*V+l*j,s[1]=u*E+h*P+d*k+f*Y,s[5]=u*C+h*R+d*L+f*te,s[9]=u*v+h*D+d*$+f*ne,s[13]=u*A+h*O+d*V+f*j,s[2]=p*E+x*P+g*k+m*Y,s[6]=p*C+x*R+g*L+m*te,s[10]=p*v+x*D+g*$+m*ne,s[14]=p*A+x*O+g*V+m*j,s[3]=S*E+T*P+M*k+b*Y,s[7]=S*C+T*R+M*L+b*te,s[11]=S*v+T*D+M*$+b*ne,s[15]=S*A+T*O+M*V+b*j,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],x=e[7],g=e[11],m=e[15],S=c*f-l*d,T=o*f-l*h,M=o*d-c*h,b=a*f-l*u,E=a*d-c*u,C=a*h-o*u;return n*(x*S-g*T+m*M)-i*(p*S-g*b+m*E)+r*(p*T-x*b+m*C)-s*(p*M-x*E+g*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return n*(a*u-o*l)-i*(s*u-o*c)+r*(s*l-a*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],x=e[13],g=e[14],m=e[15],S=n*o-i*a,T=n*c-r*a,M=n*l-s*a,b=i*c-r*o,E=i*l-s*o,C=r*l-s*c,v=u*x-h*p,A=u*g-d*p,P=u*m-f*p,R=h*g-d*x,D=h*m-f*x,O=d*m-f*g,k=S*O-T*D+M*R+b*P-E*A+C*v;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/k;return e[0]=(o*O-c*D+l*R)*L,e[1]=(r*D-i*O-s*R)*L,e[2]=(x*C-g*E+m*b)*L,e[3]=(d*E-h*C-f*b)*L,e[4]=(c*P-a*O-l*A)*L,e[5]=(n*O-r*P+s*A)*L,e[6]=(g*M-p*C-m*T)*L,e[7]=(u*C-d*M+f*T)*L,e[8]=(a*D-o*P+l*v)*L,e[9]=(i*P-n*D-s*v)*L,e[10]=(p*E-x*M+m*S)*L,e[11]=(h*M-u*E-f*S)*L,e[12]=(o*A-a*R-c*v)*L,e[13]=(n*R-i*A+r*v)*L,e[14]=(x*T-p*b-g*S)*L,e[15]=(u*b-h*T+d*S)*L,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,l=s+s,u=a+a,h=o+o,d=s*l,f=s*u,p=s*h,x=a*u,g=a*h,m=o*h,S=c*l,T=c*u,M=c*h,b=i.x,E=i.y,C=i.z;return r[0]=(1-(x+m))*b,r[1]=(f+M)*b,r[2]=(p-T)*b,r[3]=0,r[4]=(f-M)*E,r[5]=(1-(d+m))*E,r[6]=(g+S)*E,r[7]=0,r[8]=(p+T)*C,r[9]=(g-S)*C,r[10]=(1-(d+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Qi.set(r[0],r[1],r[2]).length();const o=Qi.set(r[4],r[5],r[6]).length(),c=Qi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),gn.copy(this);const l=1/a,u=1/o,h=1/c;return gn.elements[0]*=l,gn.elements[1]*=l,gn.elements[2]*=l,gn.elements[4]*=u,gn.elements[5]*=u,gn.elements[6]*=u,gn.elements[8]*=h,gn.elements[9]*=h,gn.elements[10]*=h,n.setFromRotationMatrix(gn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,n,i,r,s,a,o=In,c=!1){const l=this.elements,u=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let p,x;if(c)p=s/(a-s),x=a*s/(a-s);else if(o===In)p=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===ia)p=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=In,c=!1){const l=this.elements,u=2/(n-e),h=2/(i-r),d=-(n+e)/(n-e),f=-(i+r)/(i-r);let p,x;if(c)p=1/(a-s),x=a/(a-s);else if(o===In)p=-2/(a-s),x=-(a+s)/(a-s);else if(o===ia)p=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};pa.prototype.isMatrix4=!0;let at=pa;const Qi=new N,gn=new at,Xf=new N(0,0,0),$f=new N(1,1,1),ii=new N,xs=new N,on=new N,Fl=new at,Nl=new jn;class Bn{constructor(e=0,n=0,i=0,r=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(n){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Fl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fl,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Nl.setFromEuler(this),this.setFromQuaternion(Nl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class Ad{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qf=0;const Ul=new N,ji=new jn,zn=new at,vs=new N,Pr=new N,Yf=new N,Zf=new jn,Ol=new N(1,0,0),Bl=new N(0,1,0),Vl=new N(0,0,1),zl={type:"added"},Kf={type:"removed"},er={type:"childadded",child:null},Na={type:"childremoved",child:null};class nn extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new N,n=new Bn,i=new jn,r=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new Ve}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ad,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ji.setFromAxisAngle(e,n),this.quaternion.multiply(ji),this}rotateOnWorldAxis(e,n){return ji.setFromAxisAngle(e,n),this.quaternion.premultiply(ji),this}rotateX(e){return this.rotateOnAxis(Ol,e)}rotateY(e){return this.rotateOnAxis(Bl,e)}rotateZ(e){return this.rotateOnAxis(Vl,e)}translateOnAxis(e,n){return Ul.copy(e).applyQuaternion(this.quaternion),this.position.add(Ul.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ol,e)}translateY(e){return this.translateOnAxis(Bl,e)}translateZ(e){return this.translateOnAxis(Vl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?vs.copy(e):vs.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Pr,vs,this.up):zn.lookAt(vs,Pr,this.up),this.quaternion.setFromRotationMatrix(zn),r&&(zn.extractRotation(r.matrixWorld),ji.setFromRotationMatrix(zn),this.quaternion.premultiply(ji.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zl),er.child=e,this.dispatchEvent(er),er.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Kf),Na.child=e,this.dispatchEvent(Na),Na.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zl),er.child=e,this.dispatchEvent(er),er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e,Yf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,Zf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}nn.DEFAULT_UP=new N(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class pr extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jf={type:"move"};class Ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const g=n.getJointPose(x,i),m=this._getHandJoint(l,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jf)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new pr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},_s={h:0,s:0,l:0};function Oa(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=Bf(e,1),n=Ke(n,0,1),i=Ke(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Oa(a,s,e+1/3),this.g=Oa(a,s,e),this.b=Oa(a,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,n=Ut){function i(s){s!==void 0&&parseFloat(s)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ue("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ut){const i=wd[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return Ze.workingToColorSpace(Ht.copy(this),e),Math.round(Ke(Ht.r*255,0,255))*65536+Math.round(Ke(Ht.g*255,0,255))*256+Math.round(Ke(Ht.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.workingToColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,n=Ze.workingColorSpace){return Ze.workingToColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Ut){Ze.workingToColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==Ut?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+n,ri.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ri),e.getHSL(_s);const i=Pa(ri.h,_s.h,n),r=Pa(ri.s,_s.s,n),s=Pa(ri.l,_s.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Xe;Xe.NAMES=wd;class Qf extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const xn=new N,Gn=new N,Ba=new N,Hn=new N,tr=new N,nr=new N,Gl=new N,Va=new N,za=new N,Ga=new N,Ha=new xt,ka=new xt,Wa=new xt;class _n{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),xn.subVectors(e,n),r.cross(xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){xn.subVectors(r,n),Gn.subVectors(i,n),Ba.subVectors(e,n);const a=xn.dot(xn),o=xn.dot(Gn),c=xn.dot(Ba),l=Gn.dot(Gn),u=Gn.dot(Ba),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(l*c-o*u)*d,p=(a*u-o*c)*d;return s.set(1-f-p,p,f)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,Hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Hn.x),c.addScaledVector(a,Hn.y),c.addScaledVector(o,Hn.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return Ha.setScalar(0),ka.setScalar(0),Wa.setScalar(0),Ha.fromBufferAttribute(e,n),ka.fromBufferAttribute(e,i),Wa.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ha,s.x),a.addScaledVector(ka,s.y),a.addScaledVector(Wa,s.z),a}static isFrontFacing(e,n,i,r){return xn.subVectors(i,n),Gn.subVectors(e,n),xn.cross(Gn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),xn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return _n.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return _n.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;tr.subVectors(r,i),nr.subVectors(s,i),Va.subVectors(e,i);const c=tr.dot(Va),l=nr.dot(Va);if(c<=0&&l<=0)return n.copy(i);za.subVectors(e,r);const u=tr.dot(za),h=nr.dot(za);if(u>=0&&h<=u)return n.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),n.copy(i).addScaledVector(tr,a);Ga.subVectors(e,s);const f=tr.dot(Ga),p=nr.dot(Ga);if(p>=0&&f<=p)return n.copy(s);const x=f*l-c*p;if(x<=0&&l>=0&&p<=0)return o=l/(l-p),n.copy(i).addScaledVector(nr,o);const g=u*p-f*h;if(g<=0&&h-u>=0&&f-p>=0)return Gl.subVectors(s,r),o=(h-u)/(h-u+(f-p)),n.copy(r).addScaledVector(Gl,o);const m=1/(g+x+d);return a=x*m,o=d*m,n.copy(i).addScaledVector(tr,a).addScaledVector(nr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class $i{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(vn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(vn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=vn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,vn):vn.fromBufferAttribute(s,a),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ms.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ms.copy(i.boundingBox)),Ms.applyMatrix4(e.matrixWorld),this.union(Ms)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dr),Ss.subVectors(this.max,Dr),ir.subVectors(e.a,Dr),rr.subVectors(e.b,Dr),sr.subVectors(e.c,Dr),si.subVectors(rr,ir),ai.subVectors(sr,rr),yi.subVectors(ir,sr);let n=[0,-si.z,si.y,0,-ai.z,ai.y,0,-yi.z,yi.y,si.z,0,-si.x,ai.z,0,-ai.x,yi.z,0,-yi.x,-si.y,si.x,0,-ai.y,ai.x,0,-yi.y,yi.x,0];return!Xa(n,ir,rr,sr,Ss)||(n=[1,0,0,0,1,0,0,0,1],!Xa(n,ir,rr,sr,Ss))?!1:(ys.crossVectors(si,ai),n=[ys.x,ys.y,ys.z],Xa(n,ir,rr,sr,Ss))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const kn=[new N,new N,new N,new N,new N,new N,new N,new N],vn=new N,Ms=new $i,ir=new N,rr=new N,sr=new N,si=new N,ai=new N,yi=new N,Dr=new N,Ss=new N,ys=new N,Ei=new N;function Xa(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Ei.fromArray(t,s);const o=r.x*Math.abs(Ei.x)+r.y*Math.abs(Ei.y)+r.z*Math.abs(Ei.z),c=e.dot(Ei),l=n.dot(Ei),u=i.dot(Ei);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Pt=new N,Es=new et;let jf=0;class Dt extends Xi{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jf++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Mc,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Es.fromBufferAttribute(this,n),Es.applyMatrix3(e),this.setXY(n,Es.x,Es.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Dn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ct(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Dn(n,this.array)),n}setX(e,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Dn(n,this.array)),n}setY(e,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Dn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Dn(n,this.array)),n}setW(e,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array),s=ct(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mc&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Cd extends Dt{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Rd extends Dt{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Xt extends Dt{constructor(e,n,i){super(new Float32Array(e),n,i)}}const ep=new $i,Ir=new N,$a=new N;class Mi{constructor(e=new N,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ep.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ir.subVectors(e,this.center);const n=Ir.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ir,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($a.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ir.copy(e.center).add($a)),this.expandByPoint(Ir.copy(e.center).sub($a))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let tp=0;const hn=new at,qa=new nn,ar=new N,cn=new $i,Lr=new $i,Ft=new N;class jt extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lf(e)?Rd:Cd)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,n,i){return hn.makeTranslation(e,n,i),this.applyMatrix4(hn),this}scale(e,n,i){return hn.makeScale(e,n,i),this.applyMatrix4(hn),this}lookAt(e){return qa.lookAt(e),qa.updateMatrix(),this.applyMatrix4(qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Lr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(cn.min,Lr.min),cn.expandByPoint(Ft),Ft.addVectors(cn.max,Lr.max),cn.expandByPoint(Ft)):(cn.expandByPoint(Lr.min),cn.expandByPoint(Lr.max))}cn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ft.fromBufferAttribute(o,l),c&&(ar.fromBufferAttribute(e,l),Ft.add(ar)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Dt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let v=0;v<i.count;v++)o[v]=new N,c[v]=new N;const l=new N,u=new N,h=new N,d=new et,f=new et,p=new et,x=new N,g=new N;function m(v,A,P){l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,A),h.fromBufferAttribute(i,P),d.fromBufferAttribute(s,v),f.fromBufferAttribute(s,A),p.fromBufferAttribute(s,P),u.sub(l),h.sub(l),f.sub(d),p.sub(d);const R=1/(f.x*p.y-p.x*f.y);isFinite(R)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(R),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(R),o[v].add(x),o[A].add(x),o[P].add(x),c[v].add(g),c[A].add(g),c[P].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let v=0,A=S.length;v<A;++v){const P=S[v],R=P.start,D=P.count;for(let O=R,k=R+D;O<k;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const T=new N,M=new N,b=new N,E=new N;function C(v){b.fromBufferAttribute(r,v),E.copy(b);const A=o[v];T.copy(A),T.sub(b.multiplyScalar(b.dot(A))).normalize(),M.crossVectors(E,A);const R=M.dot(c[v])<0?-1:1;a.setXYZW(v,T.x,T.y,T.z,R)}for(let v=0,A=S.length;v<A;++v){const P=S[v],R=P.start,D=P.count;for(let O=R,k=R+D;O<k;O+=3)C(e.getX(O+0)),C(e.getX(O+1)),C(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Dt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new N,s=new N,a=new N,o=new N,c=new N,l=new N,u=new N,h=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,p),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,g),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,p),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),o.add(u),c.add(u),l.add(u),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=n.count;d<f;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ft.fromBufferAttribute(e,n),Ft.normalize(),e.setXYZ(n,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let f=0,p=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*u;for(let m=0;m<u;m++)d[p++]=l[f++]}return new Dt(d,u,h)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new jt,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);n.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,i);c.push(f)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(n))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(n));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class np{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Mc,this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new N;class aa{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix4(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.applyNormalMatrix(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.transformDirection(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Dn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ct(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Dn(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Dn(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Dn(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Dn(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array),s=ct(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){sa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Dt(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new aa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){sa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let ip=0;class Cr extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=Fn,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lo,this.blendDst=Fo,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ue(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ue(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fn&&(i.blending=this.blending),this.side!==Kn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Lo&&(i.blendSrc=this.blendSrc),this.blendDst!==Fo&&(i.blendDst=this.blendDst),this.blendEquation!==Ri&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Sr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new et().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new et().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Wn=new N,Ya=new N,bs=new N,oi=new N,Za=new N,Ts=new N,Ka=new N;class Pd{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Wn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,n),Wn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ya.copy(e).add(n).multiplyScalar(.5),bs.copy(n).sub(e).normalize(),oi.copy(this.origin).sub(Ya);const s=e.distanceTo(n)*.5,a=-this.direction.dot(bs),o=oi.dot(this.direction),c=-oi.dot(bs),l=oi.lengthSq(),u=Math.abs(1-a*a);let h,d,f,p;if(u>0)if(h=a*c-o,d=a*o-c,p=s*u,h>=0)if(d>=-p)if(d<=p){const x=1/u;h*=x,d*=x,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-p?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=p?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ya).addScaledVector(bs,d),f}intersectSphere(e,n){Wn.subVectors(e.center,this.origin);const i=Wn.dot(this.direction),r=Wn.dot(Wn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,n,i,r,s){Za.subVectors(n,e),Ts.subVectors(i,e),Ka.crossVectors(Za,Ts);let a=this.direction.dot(Ka),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,e);const c=o*this.direction.dot(Ts.crossVectors(oi,Ts));if(c<0)return null;const l=o*this.direction.dot(Za.cross(oi));if(l<0||c+l>a)return null;const u=-o*oi.dot(Ka);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zi extends Cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Hl=new at,bi=new Pd,As=new Mi,kl=new N,ws=new N,Cs=new N,Rs=new N,Ja=new N,Ps=new N,Wl=new N,Ds=new N;class Qt extends nn{constructor(e=new jt,n=new zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ps.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(Ja.fromBufferAttribute(h,e),a?Ps.addScaledVector(Ja,u):Ps.addScaledVector(Ja.sub(n),u))}n.add(Ps)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),As.copy(i.boundingSphere),As.applyMatrix4(s),bi.copy(e.ray).recast(e.near),!(As.containsPoint(bi.origin)===!1&&(bi.intersectSphere(As,kl)===null||bi.origin.distanceToSquared(kl)>(e.far-e.near)**2))&&(Hl.copy(s).invert(),bi.copy(e.ray).applyMatrix4(Hl),!(i.boundingBox!==null&&bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,bi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){const g=d[p],m=a[g.materialIndex],S=Math.max(g.start,f.start),T=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let M=S,b=T;M<b;M+=3){const E=o.getX(M),C=o.getX(M+1),v=o.getX(M+2);r=Is(this,m,e,i,l,u,h,E,C,v),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){const S=o.getX(g),T=o.getX(g+1),M=o.getX(g+2);r=Is(this,a,e,i,l,u,h,S,T,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){const g=d[p],m=a[g.materialIndex],S=Math.max(g.start,f.start),T=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let M=S,b=T;M<b;M+=3){const E=M,C=M+1,v=M+2;r=Is(this,m,e,i,l,u,h,E,C,v),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const p=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){const S=g,T=g+1,M=g+2;r=Is(this,a,e,i,l,u,h,S,T,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function rp(t,e,n,i,r,s,a,o){let c;if(e.side===Jt?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Kn,o),c===null)return null;Ds.copy(o),Ds.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(Ds);return l<n.near||l>n.far?null:{distance:l,point:Ds.clone(),object:t}}function Is(t,e,n,i,r,s,a,o,c,l){t.getVertexPosition(o,ws),t.getVertexPosition(c,Cs),t.getVertexPosition(l,Rs);const u=rp(t,e,n,i,ws,Cs,Rs,Wl);if(u){const h=new N;_n.getBarycoord(Wl,ws,Cs,Rs,h),r&&(u.uv=_n.getInterpolatedAttribute(r,o,c,l,h,new et)),s&&(u.uv1=_n.getInterpolatedAttribute(s,o,c,l,h,new et)),a&&(u.normal=_n.getInterpolatedAttribute(a,o,c,l,h,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new N,materialIndex:0};_n.getNormal(ws,Cs,Rs,d.normal),u.face=d,u.barycoord=h}return u}class Yc extends Vt{constructor(e=null,n=1,i=1,r,s,a,o,c,l=Ot,u=Ot,h,d){super(null,a,o,c,l,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ns extends Dt{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const or=new at,Xl=new at,Ls=[],$l=new $i,sp=new at,Fr=new Qt,Nr=new Mi;class ap extends Qt{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new ns(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,sp)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new $i),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,or),$l.copy(e.boundingBox).applyMatrix4(or),this.boundingBox.union($l)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,or),Nr.copy(e.boundingSphere).applyMatrix4(or),this.boundingSphere.union(Nr)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(Fr.geometry=this.geometry,Fr.material=this.material,Fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nr.copy(this.boundingSphere),Nr.applyMatrix4(i),e.ray.intersectsSphere(Nr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,or),Xl.multiplyMatrices(i,or),Fr.matrixWorld=Xl,Fr.raycast(e,Ls);for(let a=0,o=Ls.length;a<o;a++){const c=Ls[a];c.instanceId=s,c.object=this,n.push(c)}Ls.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new ns(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Yc(new Float32Array(r*this.count),r,this.count,Gc,Mn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;return s[c]=o,s.set(i,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Qa=new N,op=new N,cp=new Ve;class wi{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Qa.subVectors(i,n).cross(op.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Qa),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||cp.getNormalMatrix(e),r=this.coplanarPoint(Qa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new Mi,lp=new et(.5,.5),Fs=new N;class Dd{constructor(e=new wi,n=new wi,i=new wi,r=new wi,s=new wi,a=new wi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=In,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],h=s[5],d=s[6],f=s[7],p=s[8],x=s[9],g=s[10],m=s[11],S=s[12],T=s[13],M=s[14],b=s[15];if(r[0].setComponents(l-a,f-u,m-p,b-S).normalize(),r[1].setComponents(l+a,f+u,m+p,b+S).normalize(),r[2].setComponents(l+o,f+h,m+x,b+T).normalize(),r[3].setComponents(l-o,f-h,m-x,b-T).normalize(),i)r[4].setComponents(c,d,g,M).normalize(),r[5].setComponents(l-c,f-d,m-g,b-M).normalize();else if(r[4].setComponents(l-c,f-d,m-g,b-M).normalize(),n===In)r[5].setComponents(l+c,f+d,m+g,b+M).normalize();else if(n===ia)r[5].setComponents(c,d,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ti.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){Ti.center.set(0,0,0);const n=lp.distanceTo(e.center);return Ti.radius=.7071067811865476+n,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Fs.x=r.normal.x>0?e.max.x:e.min.x,Fs.y=r.normal.y>0?e.max.y:e.min.y,Fs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Id extends Cr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const oa=new N,ca=new N,ql=new at,Ur=new Pd,Ns=new Mi,ja=new N,Yl=new N;class up extends nn{constructor(e=new jt,n=new Id){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)oa.fromBufferAttribute(n,r-1),ca.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=oa.distanceTo(ca);e.setAttribute("lineDistance",new Xt(i,1))}else Ue("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ns.copy(i.boundingSphere),Ns.applyMatrix4(r),Ns.radius+=s,e.ray.intersectsSphere(Ns)===!1)return;ql.copy(r).invert(),Ur.copy(e.ray).applyMatrix4(ql);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=l){const m=u.getX(x),S=u.getX(x+1),T=Us(this,e,Ur,c,m,S,x);T&&n.push(T)}if(this.isLineLoop){const x=u.getX(p-1),g=u.getX(f),m=Us(this,e,Ur,c,x,g,p-1);m&&n.push(m)}}else{const f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=l){const m=Us(this,e,Ur,c,x,x+1,x);m&&n.push(m)}if(this.isLineLoop){const x=Us(this,e,Ur,c,p-1,f,p-1);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Us(t,e,n,i,r,s,a){const o=t.geometry.attributes.position;if(oa.fromBufferAttribute(o,r),ca.fromBufferAttribute(o,s),n.distanceSqToSegment(oa,ca,ja,Yl)>i)return;ja.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(ja);if(!(l<e.near||l>e.far))return{distance:l,point:Yl.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}const Zl=new N,Kl=new N;class dp extends up{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Zl.fromBufferAttribute(n,r),Kl.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Zl.distanceTo(Kl);e.setAttribute("lineDistance",new Xt(i,1))}else Ue("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ld extends Vt{constructor(e=[],n=Bi,i,r,s,a,o,c,l,u){super(e,n,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zc extends Vt{constructor(e,n,i,r,s,a,o,c,l){super(e,n,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Er extends Vt{constructor(e,n,i=On,r,s,a,o=Ot,c=Ot,l,u=Qn,h=1){if(u!==Qn&&u!==Ii)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:h};super(d,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class hp extends Er{constructor(e,n=On,i=Bi,r,s,a=Ot,o=Ot,c,l=Qn){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,n,i,r,s,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Fd extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class cs extends jt{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,f=0;p("z","y","x",-1,-1,i,n,e,a,s,0),p("z","y","x",1,-1,i,n,-e,a,s,1),p("x","z","y",1,1,e,i,n,r,a,2),p("x","z","y",1,-1,e,i,-n,r,a,3),p("x","y","z",1,-1,e,n,i,r,s,4),p("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(h,2));function p(x,g,m,S,T,M,b,E,C,v,A){const P=M/C,R=b/v,D=M/2,O=b/2,k=E/2,L=C+1,$=v+1;let V=0,Y=0;const te=new N;for(let ne=0;ne<$;ne++){const j=ne*R-O;for(let re=0;re<L;re++){const Fe=re*P-D;te[x]=Fe*S,te[g]=j*T,te[m]=k,l.push(te.x,te.y,te.z),te[x]=0,te[g]=0,te[m]=E>0?1:-1,u.push(te.x,te.y,te.z),h.push(re/C),h.push(1-ne/v),V+=1}}for(let ne=0;ne<v;ne++)for(let j=0;j<C;j++){const re=d+j+L*ne,Fe=d+j+L*(ne+1),Be=d+(j+1)+L*(ne+1),ae=d+(j+1)+L*ne;c.push(re,Fe,ae),c.push(Fe,Be,ae),Y+=6}o.addGroup(f,Y,A),f+=Y,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ls extends jt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,h=e/o,d=n/c,f=[],p=[],x=[],g=[];for(let m=0;m<u;m++){const S=m*d-a;for(let T=0;T<l;T++){const M=T*h-s;p.push(M,-S,0),x.push(0,0,1),g.push(T/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let S=0;S<o;S++){const T=S+l*m,M=S+l*(m+1),b=S+1+l*(m+1),E=S+1+l*m;f.push(T,M,E),f.push(M,b,E)}this.setIndex(f),this.setAttribute("position",new Xt(p,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.width,e.height,e.widthSegments,e.heightSegments)}}class Kc extends jt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new N,d=new N,f=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){const S=[],T=m/i,M=a+T*o,b=e*Math.cos(M),E=Math.sqrt(e*e-b*b);let C=0;m===0&&a===0?C=.5/n:m===i&&c===Math.PI&&(C=-.5/n);for(let v=0;v<=n;v++){const A=v/n,P=r+A*s;h.x=-E*Math.cos(P),h.y=b,h.z=E*Math.sin(P),p.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),g.push(A+C,1-T),S.push(l++)}u.push(S)}for(let m=0;m<i;m++)for(let S=0;S<n;S++){const T=u[m][S+1],M=u[m][S],b=u[m+1][S],E=u[m+1][S+1];(m!==0||a>0)&&f.push(T,M,E),(m!==i-1||c<Math.PI)&&f.push(M,b,E)}this.setIndex(f),this.setAttribute("position",new Xt(p,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function br(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Jl(r))r.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Jl(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function qt(t){const e={};for(let n=0;n<t.length;n++){const i=br(t[n]);for(const r in i)e[r]=i[r]}return e}function Jl(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function fp(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Nd(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Ud={clone:br,merge:qt};var pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mt extends Cr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pp,this.fragmentShader=mp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=br(e.uniforms),this.uniformsGroups=fp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Xe().setHex(r.value);break;case"v2":this.uniforms[i].value=new et().fromArray(r.value);break;case"v3":this.uniforms[i].value=new N().fromArray(r.value);break;case"v4":this.uniforms[i].value=new xt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ve().fromArray(r.value);break;case"m4":this.uniforms[i].value=new at().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class gp extends Mt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Od extends Cr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_c,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xp extends Cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vp extends Cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ql={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(jl(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!jl(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function jl(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class _p{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],p=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Mp=new _p;class Jc{constructor(e){this.manager=e!==void 0?e:Mp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Jc.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xn={};class Sp extends Error{constructor(e,n){super(e),this.response=n}}class yp extends Jc{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ql.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0);return}if(Xn[e]!==void 0){Xn[e].push({onLoad:n,onProgress:i,onError:r});return}Xn[e]=[],Xn[e].push({onLoad:n,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ue("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Xn[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let x=0;const g=new ReadableStream({start(m){S();function S(){h.read().then(({done:T,value:M})=>{if(T)m.close();else{x+=M.byteLength;const b=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let E=0,C=u.length;E<C;E++){const v=u[E];v.onProgress&&v.onProgress(b)}m.enqueue(M),S()}},T=>{m.error(T)})}}});return new Response(g)}else throw new Sp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{Ql.add(`file:${e}`,l);const u=Xn[e];delete Xn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=Xn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Xn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Os=new N,Bs=new jn,Tn=new N;class Bd extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Os,Bs,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Os,Bs,Tn.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Os,Bs,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Os,Bs,Tn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ci=new N,eu=new et,tu=new et;class fn extends Bd{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Sc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sc*2*Math.atan(Math.tan(Ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-e/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ci.x,ci.y).multiplyScalar(-e/ci.z)}getViewSize(e,n){return this.getViewBounds(e,eu,tu),n.subVectors(tu,eu)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ra*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Vd extends Bd{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Ep extends jt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class bp extends Jc{constructor(e){super(e)}load(e,n,i,r){const s=this,a=new yp(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{n(s.parse(JSON.parse(o)))}catch(c){r?r(c):Je(c),s.manager.itemError(e)}},i,r)}parse(e){const n={},i={};function r(f,p){if(n[p]!==void 0)return n[p];const g=f.interleavedBuffers[p],m=s(f,g.buffer),S=gs(g.type,m),T=new np(S,g.stride);return T.uuid=g.uuid,n[p]=T,T}function s(f,p){if(i[p]!==void 0)return i[p];const g=f.arrayBuffers[p],m=new Uint32Array(g).buffer;return i[p]=m,m}const a=e.isInstancedBufferGeometry?new Ep:new jt,o=e.data.index;if(o!==void 0){const f=gs(o.type,o.array);a.setIndex(new Dt(f,1))}const c=e.data.attributes;for(const f in c){const p=c[f];let x;if(p.isInterleavedBufferAttribute){const g=r(e.data,p.data);x=new aa(g,p.itemSize,p.offset,p.normalized)}else{const g=gs(p.type,p.array),m=p.isInstancedBufferAttribute?ns:Dt;x=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(x.name=p.name),p.usage!==void 0&&x.setUsage(p.usage),a.setAttribute(f,x)}const l=e.data.morphAttributes;if(l)for(const f in l){const p=l[f],x=[];for(let g=0,m=p.length;g<m;g++){const S=p[g];let T;if(S.isInterleavedBufferAttribute){const M=r(e.data,S.data);T=new aa(M,S.itemSize,S.offset,S.normalized)}else{const M=gs(S.type,S.array);T=new Dt(M,S.itemSize,S.normalized)}S.name!==void 0&&(T.name=S.name),x.push(T)}a.morphAttributes[f]=x}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let f=0,p=h.length;f!==p;++f){const x=h[f];a.addGroup(x.start,x.count,x.materialIndex)}const d=e.data.boundingSphere;return d!==void 0&&(a.boundingSphere=new Mi().fromJSON(d)),e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}const cr=-90,lr=1;class Tp extends nn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fn(cr,lr,e,n);r.layers=this.layers,this.add(r);const s=new fn(cr,lr,e,n);s.layers=this.layers,this.add(s);const a=new fn(cr,lr,e,n);a.layers=this.layers,this.add(a);const o=new fn(cr,lr,e,n);o.layers=this.layers,this.add(o);const c=new fn(cr,lr,e,n);c.layers=this.layers,this.add(c);const l=new fn(cr,lr,e,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const l of n)this.remove(l);if(e===In)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ia)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of n)this.add(l),l.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Ap extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ml=class ml{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};ml.prototype.isMatrix2=!0;let nu=ml;class wp extends dp{constructor(e=10,n=10,i=4473924,r=8947848){i=new Xe(i),r=new Xe(r);const s=n/2,a=e/n,o=e/2,c=[],l=[];for(let d=0,f=0,p=-o;d<=n;d++,p+=a){c.push(-o,0,p,o,0,p),c.push(p,0,-o,p,0,o);const x=d===s?i:r;x.toArray(l,f),f+=3,x.toArray(l,f),f+=3,x.toArray(l,f),f+=3,x.toArray(l,f),f+=3}const u=new jt;u.setAttribute("position",new Xt(c,3)),u.setAttribute("color",new Xt(l,3));const h=new Id({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function iu(t,e,n,i){const r=Cp(i);switch(n){case yd:return t*e;case Gc:return t*e/r.components*r.byteLength;case Hc:return t*e/r.components*r.byteLength;case Vi:return t*e*2/r.components*r.byteLength;case kc:return t*e*2/r.components*r.byteLength;case Ed:return t*e*3/r.components*r.byteLength;case mn:return t*e*4/r.components*r.byteLength;case Wc:return t*e*4/r.components*r.byteLength;case qs:case Ys:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Zs:case Ks:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wo:case $o:return Math.max(t,16)*Math.max(e,8)/4;case ko:case Xo:return Math.max(t,8)*Math.max(e,8)/2;case qo:case Yo:case Ko:case Jo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Zo:case js:case Qo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ec:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case tc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case nc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ic:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case rc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case sc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ac:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case oc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case cc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case lc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case uc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case dc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case hc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case fc:case pc:case mc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case gc:case xc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ea:case vc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Cp(t){switch(t){case pn:case vd:return{byteLength:1,components:1};case es:case _d:case Jn:return{byteLength:2,components:1};case Vc:case zc:return{byteLength:2,components:4};case On:case Bc:case Mn:return{byteLength:4,components:1};case Md:case Sd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oc}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zd(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Rp(t){const e=new WeakMap;function n(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=t.createBuffer();t.bindBuffer(c,d),t.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=t.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=t.HALF_FLOAT:f=t.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=t.SHORT;else if(l instanceof Uint32Array)f=t.UNSIGNED_INT;else if(l instanceof Int32Array)f=t.INT;else if(l instanceof Int8Array)f=t.BYTE;else if(l instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){const u=c.array,h=c.updateRanges;if(t.bindBuffer(l,o),h.length===0)t.bufferSubData(l,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){const p=h[d],x=h[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){const x=h[f];t.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(t.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,n(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Pp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dp=`#ifdef USE_ALPHAHASH
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
#endif`,Ip=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Up=`#ifdef USE_AOMAP
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
#endif`,Op=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bp=`#ifdef USE_BATCHING
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
#endif`,Vp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kp=`#ifdef USE_IRIDESCENCE
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
#endif`,Wp=`#ifdef USE_BUMPMAP
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
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Jp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,jp=`#define PI 3.141592653589793
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
} // validated`,em=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tm=`vec3 transformedNormal = objectNormal;
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
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,am="gl_FragColor = linearToOutputTexel( gl_FragColor );",om=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cm=`#ifdef USE_ENVMAP
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
#endif`,lm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,um=`#ifdef USE_ENVMAP
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
#endif`,dm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hm=`#ifdef USE_ENVMAP
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
#endif`,fm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xm=`#ifdef USE_GRADIENTMAP
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
}`,vm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_m=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ym=`#ifdef USE_ENVMAP
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
#endif`,Em=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wm=`PhysicalMaterial material;
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
#endif`,Cm=`uniform sampler2D dfgLUT;
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
}`,Rm=`
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
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Im=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Lm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Um=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Om=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zm=`#if defined( USE_POINTS_UV )
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
#endif`,Gm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,km=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$m=`#ifdef USE_MORPHTARGETS
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
#endif`,qm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ym=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jm=`#ifdef USE_NORMALMAP
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
#endif`,e0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,r0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,a0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,c0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,u0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,d0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,f0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,p0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,m0=`float getShadowMask() {
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
}`,g0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,x0=`#ifdef USE_SKINNING
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
#endif`,v0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_0=`#ifdef USE_SKINNING
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
#endif`,M0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,b0=`#ifdef USE_TRANSMISSION
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
#endif`,T0=`#ifdef USE_TRANSMISSION
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
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const P0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,D0=`uniform sampler2D t2D;
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
}`,I0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`#include <common>
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
}`,O0=`#if DEPTH_PACKING == 3200
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
}`,B0=`#define DISTANCE
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
}`,V0=`#define DISTANCE
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
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H0=`uniform float scale;
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
}`,k0=`uniform vec3 diffuse;
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
}`,W0=`#include <common>
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
}`,X0=`uniform vec3 diffuse;
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
}`,$0=`#define LAMBERT
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
}`,q0=`#define LAMBERT
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
}`,Y0=`#define MATCAP
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
}`,Z0=`#define MATCAP
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
}`,K0=`#define NORMAL
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
}`,J0=`#define NORMAL
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
}`,Q0=`#define PHONG
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
}`,j0=`#define PHONG
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
}`,eg=`#define STANDARD
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
}`,tg=`#define STANDARD
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
}`,ng=`#define TOON
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
}`,ig=`#define TOON
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
}`,rg=`uniform float size;
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
}`,sg=`uniform vec3 diffuse;
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
}`,ag=`#include <common>
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
}`,og=`uniform vec3 color;
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
}`,cg=`uniform float rotation;
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
}`,lg=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:Pp,alphahash_pars_fragment:Dp,alphamap_fragment:Ip,alphamap_pars_fragment:Lp,alphatest_fragment:Fp,alphatest_pars_fragment:Np,aomap_fragment:Up,aomap_pars_fragment:Op,batching_pars_vertex:Bp,batching_vertex:Vp,begin_vertex:zp,beginnormal_vertex:Gp,bsdfs:Hp,iridescence_fragment:kp,bumpmap_pars_fragment:Wp,clipping_planes_fragment:Xp,clipping_planes_pars_fragment:$p,clipping_planes_pars_vertex:qp,clipping_planes_vertex:Yp,color_fragment:Zp,color_pars_fragment:Kp,color_pars_vertex:Jp,color_vertex:Qp,common:jp,cube_uv_reflection_fragment:em,defaultnormal_vertex:tm,displacementmap_pars_vertex:nm,displacementmap_vertex:im,emissivemap_fragment:rm,emissivemap_pars_fragment:sm,colorspace_fragment:am,colorspace_pars_fragment:om,envmap_fragment:cm,envmap_common_pars_fragment:lm,envmap_pars_fragment:um,envmap_pars_vertex:dm,envmap_physical_pars_fragment:ym,envmap_vertex:hm,fog_vertex:fm,fog_pars_vertex:pm,fog_fragment:mm,fog_pars_fragment:gm,gradientmap_pars_fragment:xm,lightmap_pars_fragment:vm,lights_lambert_fragment:_m,lights_lambert_pars_fragment:Mm,lights_pars_begin:Sm,lights_toon_fragment:Em,lights_toon_pars_fragment:bm,lights_phong_fragment:Tm,lights_phong_pars_fragment:Am,lights_physical_fragment:wm,lights_physical_pars_fragment:Cm,lights_fragment_begin:Rm,lights_fragment_maps:Pm,lights_fragment_end:Dm,lightprobes_pars_fragment:Im,logdepthbuf_fragment:Lm,logdepthbuf_pars_fragment:Fm,logdepthbuf_pars_vertex:Nm,logdepthbuf_vertex:Um,map_fragment:Om,map_pars_fragment:Bm,map_particle_fragment:Vm,map_particle_pars_fragment:zm,metalnessmap_fragment:Gm,metalnessmap_pars_fragment:Hm,morphinstance_vertex:km,morphcolor_vertex:Wm,morphnormal_vertex:Xm,morphtarget_pars_vertex:$m,morphtarget_vertex:qm,normal_fragment_begin:Ym,normal_fragment_maps:Zm,normal_pars_fragment:Km,normal_pars_vertex:Jm,normal_vertex:Qm,normalmap_pars_fragment:jm,clearcoat_normal_fragment_begin:e0,clearcoat_normal_fragment_maps:t0,clearcoat_pars_fragment:n0,iridescence_pars_fragment:i0,opaque_fragment:r0,packing:s0,premultiplied_alpha_fragment:a0,project_vertex:o0,dithering_fragment:c0,dithering_pars_fragment:l0,roughnessmap_fragment:u0,roughnessmap_pars_fragment:d0,shadowmap_pars_fragment:h0,shadowmap_pars_vertex:f0,shadowmap_vertex:p0,shadowmask_pars_fragment:m0,skinbase_vertex:g0,skinning_pars_vertex:x0,skinning_vertex:v0,skinnormal_vertex:_0,specularmap_fragment:M0,specularmap_pars_fragment:S0,tonemapping_fragment:y0,tonemapping_pars_fragment:E0,transmission_fragment:b0,transmission_pars_fragment:T0,uv_pars_fragment:A0,uv_pars_vertex:w0,uv_vertex:C0,worldpos_vertex:R0,background_vert:P0,background_frag:D0,backgroundCube_vert:I0,backgroundCube_frag:L0,cube_vert:F0,cube_frag:N0,depth_vert:U0,depth_frag:O0,distance_vert:B0,distance_frag:V0,equirect_vert:z0,equirect_frag:G0,linedashed_vert:H0,linedashed_frag:k0,meshbasic_vert:W0,meshbasic_frag:X0,meshlambert_vert:$0,meshlambert_frag:q0,meshmatcap_vert:Y0,meshmatcap_frag:Z0,meshnormal_vert:K0,meshnormal_frag:J0,meshphong_vert:Q0,meshphong_frag:j0,meshphysical_vert:eg,meshphysical_frag:tg,meshtoon_vert:ng,meshtoon_frag:ig,points_vert:rg,points_frag:sg,shadow_vert:ag,shadow_frag:og,sprite_vert:cg,sprite_frag:lg},me={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Cn={basic:{uniforms:qt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:qt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:qt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:qt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:qt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Xe(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:qt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:qt([me.points,me.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:qt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:qt([me.common,me.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:qt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:qt([me.sprite,me.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:qt([me.common,me.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:qt([me.lights,me.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Cn.physical={uniforms:qt([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Vs={r:0,b:0,g:0},ug=new at,Gd=new Ve;Gd.set(-1,0,0,0,1,0,0,0,1);function dg(t,e,n,i,r,s){const a=new Xe(0);let o=r===!0?0:1,c,l,u=null,h=0,d=null;function f(S){let T=S.isScene===!0?S.background:null;if(T&&T.isTexture){const M=S.backgroundBlurriness>0;T=e.get(T,M)}return T}function p(S){let T=!1;const M=f(S);M===null?g(a,o):M&&M.isColor&&(g(M,1),T=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(S,T){const M=f(T);M&&(M.isCubeTexture||M.mapping===ma)?(l===void 0&&(l=new Qt(new cs(1,1,1),new Mt({name:"BackgroundCubeMaterial",uniforms:br(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ug.makeRotationFromEuler(T.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Gd),l.material.toneMapped=Ze.getTransfer(M.colorSpace)!==st,(u!==M||h!==M.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,d=t.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Qt(new ls(2,2),new Mt({name:"BackgroundMaterial",uniforms:br(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(M.colorSpace)!==st,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,d=t.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function g(S,T){S.getRGB(Vs,Nd(t)),n.buffers.color.setClear(Vs.r,Vs.g,Vs.b,T,s)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,T=1){a.set(S),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,g(a,o)},render:p,addToRenderList:x,dispose:m}}function hg(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(R,D,O,k,L){let $=!1;const V=h(R,k,O,D);s!==V&&(s=V,l(s.object)),$=f(R,k,O,L),$&&p(R,k,O,L),L!==null&&e.update(L,t.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,M(R,D,O,k),L!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function c(){return t.createVertexArray()}function l(R){return t.bindVertexArray(R)}function u(R){return t.deleteVertexArray(R)}function h(R,D,O,k){const L=k.wireframe===!0;let $=i[D.id];$===void 0&&($={},i[D.id]=$);const V=R.isInstancedMesh===!0?R.id:0;let Y=$[V];Y===void 0&&(Y={},$[V]=Y);let te=Y[O.id];te===void 0&&(te={},Y[O.id]=te);let ne=te[L];return ne===void 0&&(ne=d(c()),te[L]=ne),ne}function d(R){const D=[],O=[],k=[];for(let L=0;L<n;L++)D[L]=0,O[L]=0,k[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:k,object:R,attributes:{},index:null}}function f(R,D,O,k){const L=s.attributes,$=D.attributes;let V=0;const Y=O.getAttributes();for(const te in Y)if(Y[te].location>=0){const j=L[te];let re=$[te];if(re===void 0&&(te==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),te==="instanceColor"&&R.instanceColor&&(re=R.instanceColor)),j===void 0||j.attribute!==re||re&&j.data!==re.data)return!0;V++}return s.attributesNum!==V||s.index!==k}function p(R,D,O,k){const L={},$=D.attributes;let V=0;const Y=O.getAttributes();for(const te in Y)if(Y[te].location>=0){let j=$[te];j===void 0&&(te==="instanceMatrix"&&R.instanceMatrix&&(j=R.instanceMatrix),te==="instanceColor"&&R.instanceColor&&(j=R.instanceColor));const re={};re.attribute=j,j&&j.data&&(re.data=j.data),L[te]=re,V++}s.attributes=L,s.attributesNum=V,s.index=k}function x(){const R=s.newAttributes;for(let D=0,O=R.length;D<O;D++)R[D]=0}function g(R){m(R,0)}function m(R,D){const O=s.newAttributes,k=s.enabledAttributes,L=s.attributeDivisors;O[R]=1,k[R]===0&&(t.enableVertexAttribArray(R),k[R]=1),L[R]!==D&&(t.vertexAttribDivisor(R,D),L[R]=D)}function S(){const R=s.newAttributes,D=s.enabledAttributes;for(let O=0,k=D.length;O<k;O++)D[O]!==R[O]&&(t.disableVertexAttribArray(O),D[O]=0)}function T(R,D,O,k,L,$,V){V===!0?t.vertexAttribIPointer(R,D,O,L,$):t.vertexAttribPointer(R,D,O,k,L,$)}function M(R,D,O,k){x();const L=k.attributes,$=O.getAttributes(),V=D.defaultAttributeValues;for(const Y in $){const te=$[Y];if(te.location>=0){let ne=L[Y];if(ne===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor)),ne!==void 0){const j=ne.normalized,re=ne.itemSize,Fe=e.get(ne);if(Fe===void 0)continue;const Be=Fe.buffer,ae=Fe.type,W=Fe.bytesPerElement,se=ae===t.INT||ae===t.UNSIGNED_INT||ne.gpuType===Bc;if(ne.isInterleavedBufferAttribute){const U=ne.data,le=U.stride,be=ne.offset;if(U.isInstancedInterleavedBuffer){for(let ye=0;ye<te.locationSize;ye++)m(te.location+ye,U.meshPerAttribute);R.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let ye=0;ye<te.locationSize;ye++)g(te.location+ye);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let ye=0;ye<te.locationSize;ye++)T(te.location+ye,re/te.locationSize,ae,j,le*W,(be+re/te.locationSize*ye)*W,se)}else{if(ne.isInstancedBufferAttribute){for(let U=0;U<te.locationSize;U++)m(te.location+U,ne.meshPerAttribute);R.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let U=0;U<te.locationSize;U++)g(te.location+U);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let U=0;U<te.locationSize;U++)T(te.location+U,re/te.locationSize,ae,j,re*W,re/te.locationSize*U*W,se)}}else if(V!==void 0){const j=V[Y];if(j!==void 0)switch(j.length){case 2:t.vertexAttrib2fv(te.location,j);break;case 3:t.vertexAttrib3fv(te.location,j);break;case 4:t.vertexAttrib4fv(te.location,j);break;default:t.vertexAttrib1fv(te.location,j)}}}}S()}function b(){A();for(const R in i){const D=i[R];for(const O in D){const k=D[O];for(const L in k){const $=k[L];for(const V in $)u($[V].object),delete $[V];delete k[L]}}delete i[R]}}function E(R){if(i[R.id]===void 0)return;const D=i[R.id];for(const O in D){const k=D[O];for(const L in k){const $=k[L];for(const V in $)u($[V].object),delete $[V];delete k[L]}}delete i[R.id]}function C(R){for(const D in i){const O=i[D];for(const k in O){const L=O[k];if(L[R.id]===void 0)continue;const $=L[R.id];for(const V in $)u($[V].object),delete $[V];delete L[R.id]}}}function v(R){for(const D in i){const O=i[D],k=R.isInstancedMesh===!0?R.id:0,L=O[k];if(L!==void 0){for(const $ in L){const V=L[$];for(const Y in V)u(V[Y].object),delete V[Y];delete L[$]}delete O[k],Object.keys(O).length===0&&delete i[D]}}}function A(){P(),a=!0,s!==r&&(s=r,l(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:S}}function fg(t,e,n){let i;function r(c){i=c}function s(c,l){t.drawArrays(i,c,l),n.update(l,i,1)}function a(c,l,u){u!==0&&(t.drawArraysInstanced(i,c,l,u),n.update(l,i,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let d=0;for(let f=0;f<u;f++)d+=l[f];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function pg(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==mn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const v=C===Jn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==pn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Mn&&!v)}function c(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const u=c(l);u!==l&&(Ue("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&Ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),S=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),T=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),E=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:M,maxSamples:b,samples:E}}function mg(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new wi,o=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,f){const p=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,m=t.get(h);if(!r||p===null||p.length===0||s&&!g)s?u(null):l();else{const S=s?0:i,T=S*4;let M=m.clippingState||null;c.value=M,M=u(p,d,T,f);for(let b=0;b!==T;++b)M[b]=n[b];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,p){const x=h!==null?h.length:0;let g=null;if(x!==0){if(g=c.value,p!==!0||g===null){const m=f+x*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let T=0,M=f;T!==x;++T,M+=4)a.copy(h[T]).applyMatrix4(S,o),a.normal.toArray(g,M),g[M+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}const pi=4,ru=[.125,.215,.35,.446,.526,.582],Pi=20,gg=256,Or=new Vd,su=new Xe;let eo=null,to=0,no=0,io=!1;const xg=new N;class au{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=xg}=s;eo=this._renderer.getRenderTarget(),to=this._renderer.getActiveCubeFace(),no=this._renderer.getActiveMipmapLevel(),io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(eo,to,no),this._renderer.xr.enabled=io,e.scissorTest=!1,ur(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Bi||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),eo=this._renderer.getRenderTarget(),to=this._renderer.getActiveCubeFace(),no=this._renderer.getActiveMipmapLevel(),io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:Jn,format:mn,colorSpace:ta,depthBuffer:!1},r=ou(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ou(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vg(s)),this._blurMaterial=Mg(s,e,n),this._ggxMaterial=_g(s,e,n)}return r}_compileMaterial(e){const n=new Qt(new jt,e);this._renderer.compile(n,Or)}_sceneToCubeUV(e,n,i,r,s){const c=new fn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(su),h.toneMapping=Nn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qt(new cs,new zi({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let m=!1;const S=e.background;S?S.isColor&&(g.color.copy(S),e.background=null,m=!0):(g.color.copy(su),m=!0);for(let T=0;T<6;T++){const M=T%3;M===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[T],s.y,s.z)):M===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[T]));const b=this._cubeSize;ur(r,M*b,T>2?b:0,b,b),h.setRenderTarget(r),m&&h.render(x,c),h.render(e,c)}h.toneMapping=f,h.autoClear=d,e.background=S}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Bi||e.mapping===yr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;ur(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,Or)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=0+l*1.25,f=h*d,{_lodMax:p}=this,x=this._sizeLods[i],g=3*x*(i>p-pi?i-p+pi:0),m=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=p-n,ur(s,g,m,3*x,2*x),r.setRenderTarget(s),r.render(o,Or),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=p-i,ur(e,g,m,3*x,2*x),r.setRenderTarget(e),r.render(o,Or)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Je("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=l;const d=l.uniforms,f=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Pi-1),x=s/p,g=isFinite(s)?1+Math.floor(u*x):Pi;g>Pi&&Ue(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Pi}`);const m=[];let S=0;for(let C=0;C<Pi;++C){const v=C/x,A=Math.exp(-v*v/2);m.push(A),C===0?S+=A:C<g&&(S+=2*A)}for(let C=0;C<m.length;C++)m[C]=m[C]/S;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=p,d.mipInt.value=T-i;const M=this._sizeLods[r],b=3*M*(r>T-pi?r-T+pi:0),E=4*(this._cubeSize-M);ur(n,b,E,3*M,2*M),c.setRenderTarget(n),c.render(h,Or)}}function vg(t){const e=[],n=[],i=[];let r=t;const s=t-pi+1+ru.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>t-pi?c=ru[a-t+pi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,x=3,g=2,m=1,S=new Float32Array(x*p*f),T=new Float32Array(g*p*f),M=new Float32Array(m*p*f);for(let E=0;E<f;E++){const C=E%3*2/3-1,v=E>2?0:-1,A=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];S.set(A,x*p*E),T.set(d,g*p*E);const P=[E,E,E,E,E,E];M.set(P,m*p*E)}const b=new jt;b.setAttribute("position",new Dt(S,x)),b.setAttribute("uv",new Dt(T,g)),b.setAttribute("faceIndex",new Dt(M,m)),i.push(new Qt(b,null)),r>pi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function ou(t,e,n){const i=new Un(t,e,n);return i.texture.mapping=ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ur(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function _g(t,e,n){return new Mt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ga(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Mg(t,e,n){const i=new Float32Array(Pi),r=new N(0,1,0);return new Mt({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ga(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function cu(){return new Mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ga(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function lu(){return new Mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function ga(){return`

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
	`}class Hd extends Un{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ld(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new cs(5,5,5),s=new Mt({name:"CubemapFromEquirect",uniforms:br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:Ln});s.uniforms.tEquirect.value=n;const a=new Qt(r,s),o=n.minFilter;return n.minFilter===fi&&(n.minFilter=Bt),new Tp(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function Sg(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,f=!1){return d==null?null:f?a(d):s(d)}function s(d){if(d&&d.isTexture){const f=d.mapping;if(f===Aa||f===wa)if(e.has(d)){const p=e.get(d).texture;return o(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const x=new Hd(p.height);return x.fromEquirectangularTexture(t,d),e.set(d,x),d.addEventListener("dispose",l),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const f=d.mapping,p=f===Aa||f===wa,x=f===Bi||f===yr;if(p||x){let g=n.get(d);const m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new au(t)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return p&&S&&S.height>0||x&&S&&c(S)?(i===null&&(i=new au(t)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function o(d,f){return f===Aa?d.mapping=Bi:f===wa&&(d.mapping=yr),d}function c(d){let f=0;const p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function l(d){const f=d.target;f.removeEventListener("dispose",l);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(d){const f=d.target;f.removeEventListener("dispose",u);const p=n.get(f);p!==void 0&&(n.delete(f),p.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function yg(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&gr("WebGLRenderer: "+i+" extension not supported."),r}}}function Eg(t,e,n,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",a),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function c(h){const d=h.attributes;for(const f in d)e.update(d[f],t.ARRAY_BUFFER)}function l(h){const d=[],f=h.index,p=h.attributes.position;let x=0;if(p===void 0)return;if(f!==null){const S=f.array;x=f.version;for(let T=0,M=S.length;T<M;T+=3){const b=S[T+0],E=S[T+1],C=S[T+2];d.push(b,E,E,C,C,b)}}else{const S=p.array;x=p.version;for(let T=0,M=S.length/3-1;T<M;T+=3){const b=T+0,E=T+1,C=T+2;d.push(b,E,E,C,C,b)}}const g=new(p.count>=65535?Rd:Cd)(d,1);g.version=x;const m=s.get(h);m&&e.remove(m),s.set(h,g)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function bg(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,d){t.drawElements(i,d,s,h*a),n.update(d,i,1)}function l(h,d,f){f!==0&&(t.drawElementsInstanced(i,d,s,h*a,f),n.update(d,i,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,f);let x=0;for(let g=0;g<f;g++)x+=d[g];n.update(x,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Tg(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Je("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Ag(t,e,n){const i=new WeakMap,r=new xt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let P=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var f=P;d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let M=0;p===!0&&(M=1),x===!0&&(M=2),g===!0&&(M=3);let b=o.attributes.position.count*M,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const C=new Float32Array(b*E*4*h),v=new Td(C,b,E,h);v.type=Mn,v.needsUpdate=!0;const A=M*4;for(let R=0;R<h;R++){const D=m[R],O=S[R],k=T[R],L=b*E*4*R;for(let $=0;$<D.count;$++){const V=$*A;p===!0&&(r.fromBufferAttribute(D,$),C[L+V+0]=r.x,C[L+V+1]=r.y,C[L+V+2]=r.z,C[L+V+3]=0),x===!0&&(r.fromBufferAttribute(O,$),C[L+V+4]=r.x,C[L+V+5]=r.y,C[L+V+6]=r.z,C[L+V+7]=0),g===!0&&(r.fromBufferAttribute(k,$),C[L+V+8]=r.x,C[L+V+9]=r.y,C[L+V+10]=r.z,C[L+V+11]=k.itemSize===4?r.w:1)}}d={count:h,texture:v,size:new et(b,E)},i.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];const x=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(t,"morphTargetBaseInfluence",x),c.getUniforms().setValue(t,"morphTargetInfluences",l)}c.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function wg(t,e,n,i,r){let s=new WeakMap;function a(l){const u=r.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return d}function o(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}const Cg={[ud]:"LINEAR_TONE_MAPPING",[dd]:"REINHARD_TONE_MAPPING",[hd]:"CINEON_TONE_MAPPING",[fd]:"ACES_FILMIC_TONE_MAPPING",[md]:"AGX_TONE_MAPPING",[gd]:"NEUTRAL_TONE_MAPPING",[pd]:"CUSTOM_TONE_MAPPING"};function Rg(t,e,n,i,r,s){const a=new Un(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Er(e,n):void 0}),o=new Un(e,n,{type:Jn,depthBuffer:!1,stencilBuffer:!1}),c=new jt;c.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Xt([0,2,0,0,2,0],2));const l=new gp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Qt(c,l),h=new Vd(-1,1,1,-1,0,1);let d=null,f=null,p=!1,x,g=null,m=[],S=!1;this.setSize=function(T,M){a.setSize(T,M),o.setSize(T,M);for(let b=0;b<m.length;b++){const E=m[b];E.setSize&&E.setSize(T,M)}},this.setEffects=function(T){m=T,S=m.length>0&&m[0].isRenderPass===!0;const M=a.width,b=a.height;for(let E=0;E<m.length;E++){const C=m[E];C.setSize&&C.setSize(M,b)}},this.begin=function(T,M){if(p||T.toneMapping===Nn&&m.length===0)return!1;if(g=M,M!==null){const b=M.width,E=M.height;(a.width!==b||a.height!==E)&&this.setSize(b,E)}return S===!1&&T.setRenderTarget(a),x=T.toneMapping,T.toneMapping=Nn,!0},this.hasRenderPass=function(){return S},this.end=function(T,M){T.toneMapping=x,p=!0;let b=a,E=o;for(let C=0;C<m.length;C++){const v=m[C];if(v.enabled!==!1&&(v.render(T,E,b,M),v.needsSwap!==!1)){const A=b;b=E,E=A}}if(d!==T.outputColorSpace||f!==T.toneMapping){d=T.outputColorSpace,f=T.toneMapping,l.defines={},Ze.getTransfer(d)===st&&(l.defines.SRGB_TRANSFER="");const C=Cg[f];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,T.setRenderTarget(g),T.render(u,h),g=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}const kd=new Vt,yc=new Er(1,1),Wd=new Td,Xd=new Wf,$d=new Ld,uu=[],du=[],hu=new Float32Array(16),fu=new Float32Array(9),pu=new Float32Array(4);function Rr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=uu[r];if(s===void 0&&(s=new Float32Array(r),uu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function It(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function xa(t,e){let n=du[e];n===void 0&&(n=new Int32Array(e),du[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Pg(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Dg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function Ig(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(It(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function Lg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function Fg(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(It(n,i))return;pu.set(i),t.uniformMatrix2fv(this.addr,!1,pu),Lt(n,i)}}function Ng(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(It(n,i))return;fu.set(i),t.uniformMatrix3fv(this.addr,!1,fu),Lt(n,i)}}function Ug(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(It(n,i))return;hu.set(i),t.uniformMatrix4fv(this.addr,!1,hu),Lt(n,i)}}function Og(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Bg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function Vg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function zg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function Gg(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Hg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function kg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function Wg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function Xg(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(yc.compareFunction=n.isReversedDepthBuffer()?$c:Xc,s=yc):s=kd,n.setTexture2D(e||s,r)}function $g(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Xd,r)}function qg(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||$d,r)}function Yg(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Wd,r)}function Zg(t){switch(t){case 5126:return Pg;case 35664:return Dg;case 35665:return Ig;case 35666:return Lg;case 35674:return Fg;case 35675:return Ng;case 35676:return Ug;case 5124:case 35670:return Og;case 35667:case 35671:return Bg;case 35668:case 35672:return Vg;case 35669:case 35673:return zg;case 5125:return Gg;case 36294:return Hg;case 36295:return kg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return Yg}}function Kg(t,e){t.uniform1fv(this.addr,e)}function Jg(t,e){const n=Rr(e,this.size,2);t.uniform2fv(this.addr,n)}function Qg(t,e){const n=Rr(e,this.size,3);t.uniform3fv(this.addr,n)}function jg(t,e){const n=Rr(e,this.size,4);t.uniform4fv(this.addr,n)}function ex(t,e){const n=Rr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function tx(t,e){const n=Rr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function nx(t,e){const n=Rr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ix(t,e){t.uniform1iv(this.addr,e)}function rx(t,e){t.uniform2iv(this.addr,e)}function sx(t,e){t.uniform3iv(this.addr,e)}function ax(t,e){t.uniform4iv(this.addr,e)}function ox(t,e){t.uniform1uiv(this.addr,e)}function cx(t,e){t.uniform2uiv(this.addr,e)}function lx(t,e){t.uniform3uiv(this.addr,e)}function ux(t,e){t.uniform4uiv(this.addr,e)}function dx(t,e,n){const i=this.cache,r=e.length,s=xa(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=yc:a=kd;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function hx(t,e,n){const i=this.cache,r=e.length,s=xa(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Xd,s[a])}function fx(t,e,n){const i=this.cache,r=e.length,s=xa(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||$d,s[a])}function px(t,e,n){const i=this.cache,r=e.length,s=xa(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Wd,s[a])}function mx(t){switch(t){case 5126:return Kg;case 35664:return Jg;case 35665:return Qg;case 35666:return jg;case 35674:return ex;case 35675:return tx;case 35676:return nx;case 5124:case 35670:return ix;case 35667:case 35671:return rx;case 35668:case 35672:return sx;case 35669:case 35673:return ax;case 5125:return ox;case 36294:return cx;case 36295:return lx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return dx;case 35679:case 36299:case 36307:return hx;case 35680:case 36300:case 36308:case 36293:return fx;case 36289:case 36303:case 36311:case 36292:return px}}class gx{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Zg(n.type)}}class xx{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=mx(n.type)}}class vx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const ro=/(\w+)(\])?(\[|\.)?/g;function mu(t,e){t.seq.push(e),t.map[e.id]=e}function _x(t,e,n){const i=t.name,r=i.length;for(ro.lastIndex=0;;){const s=ro.exec(i),a=ro.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){mu(n,l===void 0?new gx(o,t,e):new xx(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new vx(o),mu(n,h)),n=h}}}class Js{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),c=e.getUniformLocation(n,o.name);_x(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function gu(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Mx=37297;let Sx=0;function yx(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const xu=new Ve;function Ex(t){Ze._getMatrix(xu,Ze.workingColorSpace,t);const e=`mat3( ${xu.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case na:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function vu(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+yx(t.getShaderSource(e),o)}else return s}function bx(t,e){const n=Ex(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Tx={[ud]:"Linear",[dd]:"Reinhard",[hd]:"Cineon",[fd]:"ACESFilmic",[md]:"AgX",[gd]:"Neutral",[pd]:"Custom"};function Ax(t,e){const n=Tx[e];return n===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const zs=new N;function wx(){Ze.getLuminanceCoefficients(zs);const t=zs.x.toFixed(4),e=zs.y.toFixed(4),n=zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cx(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($r).join(`
`)}function Rx(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Px(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function $r(t){return t!==""}function _u(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mu(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Dx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ec(t){return t.replace(Dx,Lx)}const Ix=new Map;function Lx(t,e){let n=ke[e];if(n===void 0){const i=Ix.get(e);if(i!==void 0)n=ke[i],Ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ec(n)}const Fx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Su(t){return t.replace(Fx,Nx)}function Nx(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function yu(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const Ux={[$s]:"SHADOWMAP_TYPE_PCF",[Xr]:"SHADOWMAP_TYPE_VSM"};function Ox(t){return Ux[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Bx={[Bi]:"ENVMAP_TYPE_CUBE",[yr]:"ENVMAP_TYPE_CUBE",[ma]:"ENVMAP_TYPE_CUBE_UV"};function Vx(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":Bx[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const zx={[yr]:"ENVMAP_MODE_REFRACTION"};function Gx(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":zx[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Hx={[ld]:"ENVMAP_BLENDING_MULTIPLY",[yf]:"ENVMAP_BLENDING_MIX",[Ef]:"ENVMAP_BLENDING_ADD"};function kx(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Hx[t.combine]||"ENVMAP_BLENDING_NONE"}function Wx(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function Xx(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=Ox(n),l=Vx(n),u=Gx(n),h=kx(n),d=Wx(n),f=Cx(n),p=Rx(s),x=r.createProgram();let g,m,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter($r).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter($r).join(`
`),m.length>0&&(m+=`
`)):(g=[yu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),m=[yu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Nn?"#define TONE_MAPPING":"",n.toneMapping!==Nn?ke.tonemapping_pars_fragment:"",n.toneMapping!==Nn?Ax("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,bx("linearToOutputTexel",n.outputColorSpace),wx(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter($r).join(`
`)),a=Ec(a),a=_u(a,n),a=Mu(a,n),o=Ec(o),o=_u(o,n),o=Mu(o,n),a=Su(a),o=Su(o),n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",n.glslVersion===Rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const T=S+g+a,M=S+m+o,b=gu(r,r.VERTEX_SHADER,T),E=gu(r,r.FRAGMENT_SHADER,M);r.attachShader(x,b),r.attachShader(x,E),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(R){if(t.debug.checkShaderErrors){const D=r.getProgramInfoLog(x)||"",O=r.getShaderInfoLog(b)||"",k=r.getShaderInfoLog(E)||"",L=D.trim(),$=O.trim(),V=k.trim();let Y=!0,te=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,b,E);else{const ne=vu(r,b,"vertex"),j=vu(r,E,"fragment");Je("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+ne+`
`+j)}else L!==""?Ue("WebGLProgram: Program Info Log:",L):($===""||V==="")&&(te=!1);te&&(R.diagnostics={runnable:Y,programLog:L,vertexShader:{log:$,prefix:g},fragmentShader:{log:V,prefix:m}})}r.deleteShader(b),r.deleteShader(E),v=new Js(r,x),A=Px(r,x)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(x,Mx)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Sx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=E,this}let $x=0;class qx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Yx(e),n.set(e,i)),i}}class Yx{constructor(e){this.id=$x++,this.code=e,this.usedTimes=0}}function Zx(t){return t===Vi||t===js||t===ea}function Kx(t,e,n,i,r,s){const a=new Ad,o=new qx,c=new Set,l=[],u=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function x(v,A,P,R,D,O){const k=R.fog,L=D.geometry,$=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Y=e.get(v.envMap||$,V),te=Y&&Y.mapping===ma?Y.image.height:null,ne=f[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&Ue("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const j=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,re=j!==void 0?j.length:0;let Fe=0;L.morphAttributes.position!==void 0&&(Fe=1),L.morphAttributes.normal!==void 0&&(Fe=2),L.morphAttributes.color!==void 0&&(Fe=3);let Be,ae,W,se;if(ne){const Ae=Cn[ne];Be=Ae.vertexShader,ae=Ae.fragmentShader}else{Be=v.vertexShader,ae=v.fragmentShader;const Ae=o.getVertexShaderStage(v),bt=o.getFragmentShaderStage(v);o.update(v,Ae,bt),W=Ae.id,se=bt.id}const U=t.getRenderTarget(),le=t.state.buffers.depth.getReversed(),be=D.isInstancedMesh===!0,ye=D.isBatchedMesh===!0,tt=!!v.map,He=!!v.matcap,nt=!!Y,Ye=!!v.aoMap,$e=!!v.lightMap,St=!!v.bumpMap&&v.wireframe===!1,yt=!!v.normalMap,Ct=!!v.displacementMap,Nt=!!v.emissiveMap,Et=!!v.metalnessMap,Rt=!!v.roughnessMap,F=v.anisotropy>0,en=v.clearcoat>0,rt=v.dispersion>0,w=v.iridescence>0,_=v.sheen>0,z=v.transmission>0,X=F&&!!v.anisotropyMap,K=en&&!!v.clearcoatMap,ce=en&&!!v.clearcoatNormalMap,de=en&&!!v.clearcoatRoughnessMap,J=w&&!!v.iridescenceMap,ee=w&&!!v.iridescenceThicknessMap,he=_&&!!v.sheenColorMap,Pe=_&&!!v.sheenRoughnessMap,ge=!!v.specularMap,fe=!!v.specularColorMap,Le=!!v.specularIntensityMap,Ne=z&&!!v.transmissionMap,ze=z&&!!v.thicknessMap,I=!!v.gradientMap,ue=!!v.alphaMap,Q=v.alphaTest>0,pe=!!v.alphaHash,Me=!!v.extensions;let ie=Nn;v.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ie=t.toneMapping);const Re={shaderID:ne,shaderType:v.type,shaderName:v.name,vertexShader:Be,fragmentShader:ae,defines:v.defines,customVertexShaderID:W,customFragmentShaderID:se,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:ye,batchingColor:ye&&D._colorsTexture!==null,instancing:be,instancingColor:be&&D.instanceColor!==null,instancingMorph:be&&D.morphTexture!==null,outputColorSpace:U===null?t.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:tt,matcap:He,envMap:nt,envMapMode:nt&&Y.mapping,envMapCubeUVHeight:te,aoMap:Ye,lightMap:$e,bumpMap:St,normalMap:yt,displacementMap:Ct,emissiveMap:Nt,normalMapObjectSpace:yt&&v.normalMapType===Af,normalMapTangentSpace:yt&&v.normalMapType===_c,packedNormalMap:yt&&v.normalMapType===_c&&Zx(v.normalMap.format),metalnessMap:Et,roughnessMap:Rt,anisotropy:F,anisotropyMap:X,clearcoat:en,clearcoatMap:K,clearcoatNormalMap:ce,clearcoatRoughnessMap:de,dispersion:rt,iridescence:w,iridescenceMap:J,iridescenceThicknessMap:ee,sheen:_,sheenColorMap:he,sheenRoughnessMap:Pe,specularMap:ge,specularColorMap:fe,specularIntensityMap:Le,transmission:z,transmissionMap:Ne,thicknessMap:ze,gradientMap:I,opaque:v.transparent===!1&&v.blending===Fn&&v.alphaToCoverage===!1,alphaMap:ue,alphaTest:Q,alphaHash:pe,combine:v.combine,mapUv:tt&&p(v.map.channel),aoMapUv:Ye&&p(v.aoMap.channel),lightMapUv:$e&&p(v.lightMap.channel),bumpMapUv:St&&p(v.bumpMap.channel),normalMapUv:yt&&p(v.normalMap.channel),displacementMapUv:Ct&&p(v.displacementMap.channel),emissiveMapUv:Nt&&p(v.emissiveMap.channel),metalnessMapUv:Et&&p(v.metalnessMap.channel),roughnessMapUv:Rt&&p(v.roughnessMap.channel),anisotropyMapUv:X&&p(v.anisotropyMap.channel),clearcoatMapUv:K&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ce&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:he&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&p(v.sheenRoughnessMap.channel),specularMapUv:ge&&p(v.specularMap.channel),specularColorMapUv:fe&&p(v.specularColorMap.channel),specularIntensityMapUv:Le&&p(v.specularIntensityMap.channel),transmissionMapUv:Ne&&p(v.transmissionMap.channel),thicknessMapUv:ze&&p(v.thicknessMap.channel),alphaMapUv:ue&&p(v.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(yt||F),vertexNormals:!!L.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!L.attributes.uv&&(tt||ue),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||L.attributes.normal===void 0&&yt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:le,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Fe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:ie,decodeVideoTexture:tt&&v.map.isVideoTexture===!0&&Ze.getTransfer(v.map.colorSpace)===st,decodeVideoTextureEmissive:Nt&&v.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(v.emissiveMap.colorSpace)===st,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ln,flipSided:v.side===Jt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Me&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&v.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function g(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)A.push(P),A.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(m(A,v),S(A,v),A.push(t.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function m(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function S(v,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function T(v){const A=f[v.type];let P;if(A){const R=Cn[A];P=Ud.clone(R.uniforms)}else P=v.uniforms;return P}function M(v,A){let P=u.get(A);return P!==void 0?++P.usedTimes:(P=new Xx(t,A,v,r),l.push(P),u.set(A,P)),P}function b(v){if(--v.usedTimes===0){const A=l.indexOf(v);l[A]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function C(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:T,acquireProgram:M,releaseProgram:b,releaseShaderCache:E,programs:l,dispose:C}}function Jx(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,c){t.get(a)[o]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Qx(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Eu(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function bu(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,x,g,m){let S=t[e];return S===void 0?(S={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:m},t[e]=S):(S.id=d.id,S.object=d,S.geometry=f,S.material=p,S.materialVariant=a(d),S.groupOrder=x,S.renderOrder=d.renderOrder,S.z=g,S.group=m),e++,S}function c(d,f,p,x,g,m){const S=o(d,f,p,x,g,m);p.transmission>0?i.push(S):p.transparent===!0?r.push(S):n.push(S)}function l(d,f,p,x,g,m){const S=o(d,f,p,x,g,m);p.transmission>0?i.unshift(S):p.transparent===!0?r.unshift(S):n.unshift(S)}function u(d,f,p){n.length>1&&n.sort(d||Qx),i.length>1&&i.sort(f||Eu),r.length>1&&r.sort(f||Eu),p&&(n.reverse(),i.reverse(),r.reverse())}function h(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:h,sort:u}}function jx(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new bu,t.set(i,[a])):r>=s.length?(a=new bu,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function ev(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new Xe};break;case"SpotLight":n={position:new N,direction:new N,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function tv(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let nv=0;function iv(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function rv(t){const e=new ev,n=tv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new N);const r=new N,s=new at,a=new at;function o(l){let u=0,h=0,d=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,S=0,T=0,M=0,b=0,E=0,C=0;l.sort(iv);for(let A=0,P=l.length;A<P;A++){const R=l[A],D=R.color,O=R.intensity,k=R.distance;let L=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Vi?L=R.shadow.map.texture:L=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=D.r*O,h+=D.g*O,d+=D.b*O;else if(R.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(R.sh.coefficients[$],O);C++}else if(R.isDirectionalLight){const $=e.get(R);if($.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const V=R.shadow,Y=n.get(R);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,i.directionalShadow[f]=Y,i.directionalShadowMap[f]=L,i.directionalShadowMatrix[f]=R.shadow.matrix,S++}i.directional[f]=$,f++}else if(R.isSpotLight){const $=e.get(R);$.position.setFromMatrixPosition(R.matrixWorld),$.color.copy(D).multiplyScalar(O),$.distance=k,$.coneCos=Math.cos(R.angle),$.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),$.decay=R.decay,i.spot[x]=$;const V=R.shadow;if(R.map&&(i.spotLightMap[b]=R.map,b++,V.updateMatrices(R),R.castShadow&&E++),i.spotLightMatrix[x]=V.matrix,R.castShadow){const Y=n.get(R);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,i.spotShadow[x]=Y,i.spotShadowMap[x]=L,M++}x++}else if(R.isRectAreaLight){const $=e.get(R);$.color.copy(D).multiplyScalar(O),$.halfWidth.set(R.width*.5,0,0),$.halfHeight.set(0,R.height*.5,0),i.rectArea[g]=$,g++}else if(R.isPointLight){const $=e.get(R);if($.color.copy(R.color).multiplyScalar(R.intensity),$.distance=R.distance,$.decay=R.decay,R.castShadow){const V=R.shadow,Y=n.get(R);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,Y.shadowCameraNear=V.camera.near,Y.shadowCameraFar=V.camera.far,i.pointShadow[p]=Y,i.pointShadowMap[p]=L,i.pointShadowMatrix[p]=R.shadow.matrix,T++}i.point[p]=$,p++}else if(R.isHemisphereLight){const $=e.get(R);$.skyColor.copy(R.color).multiplyScalar(O),$.groundColor.copy(R.groundColor).multiplyScalar(O),i.hemi[m]=$,m++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const v=i.hash;(v.directionalLength!==f||v.pointLength!==p||v.spotLength!==x||v.rectAreaLength!==g||v.hemiLength!==m||v.numDirectionalShadows!==S||v.numPointShadows!==T||v.numSpotShadows!==M||v.numSpotMaps!==b||v.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=M+b-E,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=C,v.directionalLength=f,v.pointLength=p,v.spotLength=x,v.rectAreaLength=g,v.hemiLength=m,v.numDirectionalShadows=S,v.numPointShadows=T,v.numSpotShadows=M,v.numSpotMaps=b,v.numLightProbes=C,i.version=nv++)}function c(l,u){let h=0,d=0,f=0,p=0,x=0;const g=u.matrixWorldInverse;for(let m=0,S=l.length;m<S;m++){const T=l[m];if(T.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),h++}else if(T.isSpotLight){const M=i.spot[f];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),f++}else if(T.isRectAreaLight){const M=i.rectArea[p];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(g),a.identity(),s.copy(T.matrixWorld),s.premultiply(g),a.extractRotation(s),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),p++}else if(T.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(g),d++}else if(T.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(g),x++}}}return{setup:o,setupView:c,state:i}}function Tu(t){const e=new rv(t),n=[],i=[],r=[];function s(d){h.camera=d,n.length=0,i.length=0,r.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function c(d){r.push(d)}function l(){e.setup(n)}function u(d){e.setupView(n,d)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function sv(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Tu(t),e.set(r,[o])):s>=a.length?(o=new Tu(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const av=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ov=`uniform sampler2D shadow_pass;
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
}`,cv=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],lv=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Au=new at,Br=new N,so=new N;function uv(t,e,n){let i=new Dd;const r=new et,s=new et,a=new xt,o=new xp,c=new vp,l={},u=n.maxTextureSize,h={[Kn]:Jt,[Jt]:Kn,[ln]:ln},d=new Mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:av,fragmentShader:ov}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new jt;p.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Qt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$s;let m=this.type;this.render=function(E,C,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===nf&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=$s);const A=t.getRenderTarget(),P=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),D=t.state;D.setBlending(Ln),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const O=m!==this.type;O&&C.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(L=>L.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,L=E.length;k<L;k++){const $=E[k],V=$.shadow;if(V===void 0){Ue("WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const Y=V.getFrameExtents();r.multiply(Y),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,V.mapSize.y=s.y));const te=t.state.buffers.depth.getReversed();if(V.camera._reversedDepth=te,V.map===null||O===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Xr){if($.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Un(r.x,r.y,{format:Vi,type:Jn,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),V.map.texture.name=$.name+".shadowMap",V.map.depthTexture=new Er(r.x,r.y,Mn),V.map.depthTexture.name=$.name+".shadowMapDepth",V.map.depthTexture.format=Qn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ot,V.map.depthTexture.magFilter=Ot}else $.isPointLight?(V.map=new Hd(r.x),V.map.depthTexture=new hp(r.x,On)):(V.map=new Un(r.x,r.y),V.map.depthTexture=new Er(r.x,r.y,On)),V.map.depthTexture.name=$.name+".shadowMap",V.map.depthTexture.format=Qn,this.type===$s?(V.map.depthTexture.compareFunction=te?$c:Xc,V.map.depthTexture.minFilter=Bt,V.map.depthTexture.magFilter=Bt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ot,V.map.depthTexture.magFilter=Ot);V.camera.updateProjectionMatrix()}const ne=V.map.isWebGLCubeRenderTarget?6:1;for(let j=0;j<ne;j++){if(V.map.isWebGLCubeRenderTarget)t.setRenderTarget(V.map,j),t.clear();else{j===0&&(t.setRenderTarget(V.map),t.clear());const re=V.getViewport(j);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),D.viewport(a)}if($.isPointLight){const re=V.camera,Fe=V.matrix,Be=$.distance||re.far;Be!==re.far&&(re.far=Be,re.updateProjectionMatrix()),Br.setFromMatrixPosition($.matrixWorld),re.position.copy(Br),so.copy(re.position),so.add(cv[j]),re.up.copy(lv[j]),re.lookAt(so),re.updateMatrixWorld(),Fe.makeTranslation(-Br.x,-Br.y,-Br.z),Au.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Au,re.coordinateSystem,re.reversedDepth)}else V.updateMatrices($);i=V.getFrustum(),M(C,v,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===Xr&&S(V,v),V.needsUpdate=!1}m=this.type,g.needsUpdate=!1,t.setRenderTarget(A,P,R)};function S(E,C){const v=e.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Un(r.x,r.y,{format:Vi,type:Jn})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(C,null,v,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(C,null,v,f,x,null)}function T(E,C,v,A){let P=null;const R=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)P=R;else if(P=v.isPointLight===!0?c:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const D=P.uuid,O=C.uuid;let k=l[D];k===void 0&&(k={},l[D]=k);let L=k[O];L===void 0&&(L=P.clone(),k[O]=L,C.addEventListener("dispose",b)),P=L}if(P.visible=C.visible,P.wireframe=C.wireframe,A===Xr?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:h[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,v.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const D=t.properties.get(P);D.light=v}return P}function M(E,C,v,A,P){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===Xr)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);const O=e.update(E),k=E.material;if(Array.isArray(k)){const L=O.groups;for(let $=0,V=L.length;$<V;$++){const Y=L[$],te=k[Y.materialIndex];if(te&&te.visible){const ne=T(E,te,A,P);E.onBeforeShadow(t,E,C,v,O,ne,Y),t.renderBufferDirect(v,null,O,ne,E,Y),E.onAfterShadow(t,E,C,v,O,ne,Y)}}}else if(k.visible){const L=T(E,k,A,P);E.onBeforeShadow(t,E,C,v,O,L,null),t.renderBufferDirect(v,null,O,L,E,null),E.onAfterShadow(t,E,C,v,O,L,null)}}const D=E.children;for(let O=0,k=D.length;O<k;O++)M(D[O],C,v,A,P)}function b(E){E.target.removeEventListener("dispose",b);for(const v in l){const A=l[v],P=E.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function dv(t,e){function n(){let I=!1;const ue=new xt;let Q=null;const pe=new xt(0,0,0,0);return{setMask:function(Me){Q!==Me&&!I&&(t.colorMask(Me,Me,Me,Me),Q=Me)},setLocked:function(Me){I=Me},setClear:function(Me,ie,Re,Ae,bt){bt===!0&&(Me*=Ae,ie*=Ae,Re*=Ae),ue.set(Me,ie,Re,Ae),pe.equals(ue)===!1&&(t.clearColor(Me,ie,Re,Ae),pe.copy(ue))},reset:function(){I=!1,Q=null,pe.set(-1,0,0,0)}}}function i(){let I=!1,ue=!1,Q=null,pe=null,Me=null;return{setReversed:function(ie){if(ue!==ie){const Re=e.get("EXT_clip_control");ie?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ue=ie;const Ae=Me;Me=null,this.setClear(Ae)}},getReversed:function(){return ue},setTest:function(ie){ie?U(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(ie){Q!==ie&&!I&&(t.depthMask(ie),Q=ie)},setFunc:function(ie){if(ue&&(ie=Of[ie]),pe!==ie){switch(ie){case No:t.depthFunc(t.NEVER);break;case Uo:t.depthFunc(t.ALWAYS);break;case Oo:t.depthFunc(t.LESS);break;case Sr:t.depthFunc(t.LEQUAL);break;case Bo:t.depthFunc(t.EQUAL);break;case Vo:t.depthFunc(t.GEQUAL);break;case zo:t.depthFunc(t.GREATER);break;case Go:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}pe=ie}},setLocked:function(ie){I=ie},setClear:function(ie){Me!==ie&&(Me=ie,ue&&(ie=1-ie),t.clearDepth(ie))},reset:function(){I=!1,Q=null,pe=null,Me=null,ue=!1}}}function r(){let I=!1,ue=null,Q=null,pe=null,Me=null,ie=null,Re=null,Ae=null,bt=null;return{setTest:function(pt){I||(pt?U(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function(pt){ue!==pt&&!I&&(t.stencilMask(pt),ue=pt)},setFunc:function(pt,yn,En){(Q!==pt||pe!==yn||Me!==En)&&(t.stencilFunc(pt,yn,En),Q=pt,pe=yn,Me=En)},setOp:function(pt,yn,En){(ie!==pt||Re!==yn||Ae!==En)&&(t.stencilOp(pt,yn,En),ie=pt,Re=yn,Ae=En)},setLocked:function(pt){I=pt},setClear:function(pt){bt!==pt&&(t.clearStencil(pt),bt=pt)},reset:function(){I=!1,ue=null,Q=null,pe=null,Me=null,ie=null,Re=null,Ae=null,bt=null}}}const s=new n,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},h={},d={},f=new WeakMap,p=[],x=null,g=!1,m=null,S=null,T=null,M=null,b=null,E=null,C=null,v=new Xe(0,0,0),A=0,P=!1,R=null,D=null,O=null,k=null,L=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Y=0;const te=t.getParameter(t.VERSION);te.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(te)[1]),V=Y>=1):te.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),V=Y>=2);let ne=null,j={};const re=t.getParameter(t.SCISSOR_BOX),Fe=t.getParameter(t.VIEWPORT),Be=new xt().fromArray(re),ae=new xt().fromArray(Fe);function W(I,ue,Q,pe){const Me=new Uint8Array(4),ie=t.createTexture();t.bindTexture(I,ie),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Re=0;Re<Q;Re++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,pe,0,t.RGBA,t.UNSIGNED_BYTE,Me):t.texImage2D(ue+Re,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Me);return ie}const se={};se[t.TEXTURE_2D]=W(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=W(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[t.TEXTURE_2D_ARRAY]=W(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=W(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),U(t.DEPTH_TEST),a.setFunc(Sr),St(!1),yt(Tl),U(t.CULL_FACE),Ye(Ln);function U(I){u[I]!==!0&&(t.enable(I),u[I]=!0)}function le(I){u[I]!==!1&&(t.disable(I),u[I]=!1)}function be(I,ue){return d[I]!==ue?(t.bindFramebuffer(I,ue),d[I]=ue,I===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ue),I===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function ye(I,ue){let Q=p,pe=!1;if(I){Q=f.get(ue),Q===void 0&&(Q=[],f.set(ue,Q));const Me=I.textures;if(Q.length!==Me.length||Q[0]!==t.COLOR_ATTACHMENT0){for(let ie=0,Re=Me.length;ie<Re;ie++)Q[ie]=t.COLOR_ATTACHMENT0+ie;Q.length=Me.length,pe=!0}}else Q[0]!==t.BACK&&(Q[0]=t.BACK,pe=!0);pe&&t.drawBuffers(Q)}function tt(I){return x!==I?(t.useProgram(I),x=I,!0):!1}const He={[Ri]:t.FUNC_ADD,[sf]:t.FUNC_SUBTRACT,[af]:t.FUNC_REVERSE_SUBTRACT};He[of]=t.MIN,He[cf]=t.MAX;const nt={[lf]:t.ZERO,[uf]:t.ONE,[df]:t.SRC_COLOR,[Lo]:t.SRC_ALPHA,[xf]:t.SRC_ALPHA_SATURATE,[mf]:t.DST_COLOR,[ff]:t.DST_ALPHA,[hf]:t.ONE_MINUS_SRC_COLOR,[Fo]:t.ONE_MINUS_SRC_ALPHA,[gf]:t.ONE_MINUS_DST_COLOR,[pf]:t.ONE_MINUS_DST_ALPHA,[vf]:t.CONSTANT_COLOR,[_f]:t.ONE_MINUS_CONSTANT_COLOR,[Mf]:t.CONSTANT_ALPHA,[Sf]:t.ONE_MINUS_CONSTANT_ALPHA};function Ye(I,ue,Q,pe,Me,ie,Re,Ae,bt,pt){if(I===Ln){g===!0&&(le(t.BLEND),g=!1);return}if(g===!1&&(U(t.BLEND),g=!0),I!==rf){if(I!==m||pt!==P){if((S!==Ri||b!==Ri)&&(t.blendEquation(t.FUNC_ADD),S=Ri,b=Ri),pt)switch(I){case Fn:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mr:t.blendFunc(t.ONE,t.ONE);break;case Al:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case wl:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Je("WebGLState: Invalid blending: ",I);break}else switch(I){case Fn:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Al:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wl:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",I);break}T=null,M=null,E=null,C=null,v.set(0,0,0),A=0,m=I,P=pt}return}Me=Me||ue,ie=ie||Q,Re=Re||pe,(ue!==S||Me!==b)&&(t.blendEquationSeparate(He[ue],He[Me]),S=ue,b=Me),(Q!==T||pe!==M||ie!==E||Re!==C)&&(t.blendFuncSeparate(nt[Q],nt[pe],nt[ie],nt[Re]),T=Q,M=pe,E=ie,C=Re),(Ae.equals(v)===!1||bt!==A)&&(t.blendColor(Ae.r,Ae.g,Ae.b,bt),v.copy(Ae),A=bt),m=I,P=!1}function $e(I,ue){I.side===ln?le(t.CULL_FACE):U(t.CULL_FACE);let Q=I.side===Jt;ue&&(Q=!Q),St(Q),I.blending===Fn&&I.transparent===!1?Ye(Ln):Ye(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const pe=I.stencilWrite;o.setTest(pe),pe&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Nt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?U(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function St(I){R!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),R=I)}function yt(I){I!==ef?(U(t.CULL_FACE),I!==D&&(I===Tl?t.cullFace(t.BACK):I===tf?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),D=I}function Ct(I){I!==O&&(V&&t.lineWidth(I),O=I)}function Nt(I,ue,Q){I?(U(t.POLYGON_OFFSET_FILL),(k!==ue||L!==Q)&&(k=ue,L=Q,a.getReversed()&&(ue=-ue),t.polygonOffset(ue,Q))):le(t.POLYGON_OFFSET_FILL)}function Et(I){I?U(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function Rt(I){I===void 0&&(I=t.TEXTURE0+$-1),ne!==I&&(t.activeTexture(I),ne=I)}function F(I,ue,Q){Q===void 0&&(ne===null?Q=t.TEXTURE0+$-1:Q=ne);let pe=j[Q];pe===void 0&&(pe={type:void 0,texture:void 0},j[Q]=pe),(pe.type!==I||pe.texture!==ue)&&(ne!==Q&&(t.activeTexture(Q),ne=Q),t.bindTexture(I,ue||se[I]),pe.type=I,pe.texture=ue)}function en(){const I=j[ne];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function rt(){try{t.compressedTexImage2D(...arguments)}catch(I){Je("WebGLState:",I)}}function w(){try{t.compressedTexImage3D(...arguments)}catch(I){Je("WebGLState:",I)}}function _(){try{t.texSubImage2D(...arguments)}catch(I){Je("WebGLState:",I)}}function z(){try{t.texSubImage3D(...arguments)}catch(I){Je("WebGLState:",I)}}function X(){try{t.compressedTexSubImage2D(...arguments)}catch(I){Je("WebGLState:",I)}}function K(){try{t.compressedTexSubImage3D(...arguments)}catch(I){Je("WebGLState:",I)}}function ce(){try{t.texStorage2D(...arguments)}catch(I){Je("WebGLState:",I)}}function de(){try{t.texStorage3D(...arguments)}catch(I){Je("WebGLState:",I)}}function J(){try{t.texImage2D(...arguments)}catch(I){Je("WebGLState:",I)}}function ee(){try{t.texImage3D(...arguments)}catch(I){Je("WebGLState:",I)}}function he(I){return h[I]!==void 0?h[I]:t.getParameter(I)}function Pe(I,ue){h[I]!==ue&&(t.pixelStorei(I,ue),h[I]=ue)}function ge(I){Be.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Be.copy(I))}function fe(I){ae.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),ae.copy(I))}function Le(I,ue){let Q=l.get(ue);Q===void 0&&(Q=new WeakMap,l.set(ue,Q));let pe=Q.get(I);pe===void 0&&(pe=t.getUniformBlockIndex(ue,I.name),Q.set(I,pe))}function Ne(I,ue){const pe=l.get(ue).get(I);c.get(ue)!==pe&&(t.uniformBlockBinding(ue,pe,I.__bindingPointIndex),c.set(ue,pe))}function ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},h={},ne=null,j={},d={},f=new WeakMap,p=[],x=null,g=!1,m=null,S=null,T=null,M=null,b=null,E=null,C=null,v=new Xe(0,0,0),A=0,P=!1,R=null,D=null,O=null,k=null,L=null,Be.set(0,0,t.canvas.width,t.canvas.height),ae.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:U,disable:le,bindFramebuffer:be,drawBuffers:ye,useProgram:tt,setBlending:Ye,setMaterial:$e,setFlipSided:St,setCullFace:yt,setLineWidth:Ct,setPolygonOffset:Nt,setScissorTest:Et,activeTexture:Rt,bindTexture:F,unbindTexture:en,compressedTexImage2D:rt,compressedTexImage3D:w,texImage2D:J,texImage3D:ee,pixelStorei:Pe,getParameter:he,updateUBOMapping:Le,uniformBlockBinding:Ne,texStorage2D:ce,texStorage3D:de,texSubImage2D:_,texSubImage3D:z,compressedTexSubImage2D:X,compressedTexSubImage3D:K,scissor:ge,viewport:fe,reset:ze}}function hv(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new et,u=new WeakMap,h=new Set;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,_){return p?new OffscreenCanvas(w,_):ra("canvas")}function g(w,_,z){let X=1;const K=rt(w);if((K.width>z||K.height>z)&&(X=z/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ce=Math.floor(X*K.width),de=Math.floor(X*K.height);d===void 0&&(d=x(ce,de));const J=_?x(ce,de):d;return J.width=ce,J.height=de,J.getContext("2d").drawImage(w,0,0,ce,de),Ue("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ce+"x"+de+")."),J}else return"data"in w&&Ue("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function m(w){return w.generateMipmaps}function S(w){t.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(w,_,z,X,K,ce=!1){if(w!==null){if(t[w]!==void 0)return t[w];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let de;X&&(de=e.get("EXT_texture_norm16"),de||Ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=_;if(_===t.RED&&(z===t.FLOAT&&(J=t.R32F),z===t.HALF_FLOAT&&(J=t.R16F),z===t.UNSIGNED_BYTE&&(J=t.R8),z===t.UNSIGNED_SHORT&&de&&(J=de.R16_EXT),z===t.SHORT&&de&&(J=de.R16_SNORM_EXT)),_===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(J=t.R8UI),z===t.UNSIGNED_SHORT&&(J=t.R16UI),z===t.UNSIGNED_INT&&(J=t.R32UI),z===t.BYTE&&(J=t.R8I),z===t.SHORT&&(J=t.R16I),z===t.INT&&(J=t.R32I)),_===t.RG&&(z===t.FLOAT&&(J=t.RG32F),z===t.HALF_FLOAT&&(J=t.RG16F),z===t.UNSIGNED_BYTE&&(J=t.RG8),z===t.UNSIGNED_SHORT&&de&&(J=de.RG16_EXT),z===t.SHORT&&de&&(J=de.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(J=t.RG8UI),z===t.UNSIGNED_SHORT&&(J=t.RG16UI),z===t.UNSIGNED_INT&&(J=t.RG32UI),z===t.BYTE&&(J=t.RG8I),z===t.SHORT&&(J=t.RG16I),z===t.INT&&(J=t.RG32I)),_===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(J=t.RGB8UI),z===t.UNSIGNED_SHORT&&(J=t.RGB16UI),z===t.UNSIGNED_INT&&(J=t.RGB32UI),z===t.BYTE&&(J=t.RGB8I),z===t.SHORT&&(J=t.RGB16I),z===t.INT&&(J=t.RGB32I)),_===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),z===t.UNSIGNED_INT&&(J=t.RGBA32UI),z===t.BYTE&&(J=t.RGBA8I),z===t.SHORT&&(J=t.RGBA16I),z===t.INT&&(J=t.RGBA32I)),_===t.RGB&&(z===t.UNSIGNED_SHORT&&de&&(J=de.RGB16_EXT),z===t.SHORT&&de&&(J=de.RGB16_SNORM_EXT),z===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),z===t.UNSIGNED_INT_10F_11F_11F_REV&&(J=t.R11F_G11F_B10F)),_===t.RGBA){const ee=ce?na:Ze.getTransfer(K);z===t.FLOAT&&(J=t.RGBA32F),z===t.HALF_FLOAT&&(J=t.RGBA16F),z===t.UNSIGNED_BYTE&&(J=ee===st?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT&&de&&(J=de.RGBA16_EXT),z===t.SHORT&&de&&(J=de.RGBA16_SNORM_EXT),z===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function b(w,_){let z;return w?_===null||_===On||_===ts?z=t.DEPTH24_STENCIL8:_===Mn?z=t.DEPTH32F_STENCIL8:_===es&&(z=t.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===On||_===ts?z=t.DEPTH_COMPONENT24:_===Mn?z=t.DEPTH_COMPONENT32F:_===es&&(z=t.DEPTH_COMPONENT16),z}function E(w,_){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ot&&w.minFilter!==Bt?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function C(w){const _=w.target;_.removeEventListener("dispose",C),A(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&h.delete(_)}function v(w){const _=w.target;_.removeEventListener("dispose",v),R(_)}function A(w){const _=i.get(w);if(_.__webglInit===void 0)return;const z=w.source,X=f.get(z);if(X){const K=X[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&P(w),Object.keys(X).length===0&&f.delete(z)}i.remove(w)}function P(w){const _=i.get(w);t.deleteTexture(_.__webglTexture);const z=w.source,X=f.get(z);delete X[_.__cacheKey],a.memory.textures--}function R(w){const _=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let K=0;K<_.__webglFramebuffer[X].length;K++)t.deleteFramebuffer(_.__webglFramebuffer[X][K]);else t.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)t.deleteFramebuffer(_.__webglFramebuffer[X]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=w.textures;for(let X=0,K=z.length;X<K;X++){const ce=i.get(z[X]);ce.__webglTexture&&(t.deleteTexture(ce.__webglTexture),a.memory.textures--),i.remove(z[X])}i.remove(w)}let D=0;function O(){D=0}function k(){return D}function L(w){D=w}function $(){const w=D;return w>=r.maxTextures&&Ue("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),D+=1,w}function V(w){const _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function Y(w,_){const z=i.get(w);if(w.isVideoTexture&&F(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&z.__version!==w.version){const X=w.image;if(X===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{le(z,w,_);return}}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+_)}function te(w,_){const z=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){le(z,w,_);return}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+_)}function ne(w,_){const z=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){le(z,w,_);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+_)}function j(w,_){const z=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&z.__version!==w.version){be(z,w,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+_)}const re={[jr]:t.REPEAT,[Yn]:t.CLAMP_TO_EDGE,[Ho]:t.MIRRORED_REPEAT},Fe={[Ot]:t.NEAREST,[bf]:t.NEAREST_MIPMAP_NEAREST,[ms]:t.NEAREST_MIPMAP_LINEAR,[Bt]:t.LINEAR,[Ca]:t.LINEAR_MIPMAP_NEAREST,[fi]:t.LINEAR_MIPMAP_LINEAR},Be={[wf]:t.NEVER,[If]:t.ALWAYS,[Cf]:t.LESS,[Xc]:t.LEQUAL,[Rf]:t.EQUAL,[$c]:t.GEQUAL,[Pf]:t.GREATER,[Df]:t.NOTEQUAL};function ae(w,_){if(_.type===Mn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Bt||_.magFilter===Ca||_.magFilter===ms||_.magFilter===fi||_.minFilter===Bt||_.minFilter===Ca||_.minFilter===ms||_.minFilter===fi)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,re[_.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,re[_.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,re[_.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,Fe[_.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,Fe[_.minFilter]),_.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,Be[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ot||_.minFilter!==ms&&_.minFilter!==fi||_.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function W(w,_){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",C));const X=_.source;let K=f.get(X);K===void 0&&(K={},f.set(X,K));const ce=V(_);if(ce!==w.__cacheKey){K[ce]===void 0&&(K[ce]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,z=!0),K[ce].usedTimes++;const de=K[w.__cacheKey];de!==void 0&&(K[w.__cacheKey].usedTimes--,de.usedTimes===0&&P(_)),w.__cacheKey=ce,w.__webglTexture=K[ce].texture}return z}function se(w,_,z){return Math.floor(Math.floor(w/z)/_)}function U(w,_,z,X){const ce=w.updateRanges;if(ce.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,z,X,_.data);else{ce.sort((Pe,ge)=>Pe.start-ge.start);let de=0;for(let Pe=1;Pe<ce.length;Pe++){const ge=ce[de],fe=ce[Pe],Le=ge.start+ge.count,Ne=se(fe.start,_.width,4),ze=se(ge.start,_.width,4);fe.start<=Le+1&&Ne===ze&&se(fe.start+fe.count-1,_.width,4)===Ne?ge.count=Math.max(ge.count,fe.start+fe.count-ge.start):(++de,ce[de]=fe)}ce.length=de+1;const J=n.getParameter(t.UNPACK_ROW_LENGTH),ee=n.getParameter(t.UNPACK_SKIP_PIXELS),he=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let Pe=0,ge=ce.length;Pe<ge;Pe++){const fe=ce[Pe],Le=Math.floor(fe.start/4),Ne=Math.ceil(fe.count/4),ze=Le%_.width,I=Math.floor(Le/_.width),ue=Ne,Q=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(t.UNPACK_SKIP_ROWS,I),n.texSubImage2D(t.TEXTURE_2D,0,ze,I,ue,Q,z,X,_.data)}w.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,J),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ee),n.pixelStorei(t.UNPACK_SKIP_ROWS,he)}}function le(w,_,z){let X=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=t.TEXTURE_3D);const K=W(w,_),ce=_.source;n.bindTexture(X,w.__webglTexture,t.TEXTURE0+z);const de=i.get(ce);if(ce.version!==de.__version||K===!0){if(n.activeTexture(t.TEXTURE0+z),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const Q=Ze.getPrimaries(Ze.workingColorSpace),pe=_.colorSpace===Pn?null:Ze.getPrimaries(_.colorSpace),Me=_.colorSpace===Pn||Q===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let ee=g(_.image,!1,r.maxTextureSize);ee=en(_,ee);const he=s.convert(_.format,_.colorSpace),Pe=s.convert(_.type);let ge=M(_.internalFormat,he,Pe,_.normalized,_.colorSpace,_.isVideoTexture);ae(X,_);let fe;const Le=_.mipmaps,Ne=_.isVideoTexture!==!0,ze=de.__version===void 0||K===!0,I=ce.dataReady,ue=E(_,ee);if(_.isDepthTexture)ge=b(_.format===Ii,_.type),ze&&(Ne?n.texStorage2D(t.TEXTURE_2D,1,ge,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,ge,ee.width,ee.height,0,he,Pe,null));else if(_.isDataTexture)if(Le.length>0){Ne&&ze&&n.texStorage2D(t.TEXTURE_2D,ue,ge,Le[0].width,Le[0].height);for(let Q=0,pe=Le.length;Q<pe;Q++)fe=Le[Q],Ne?I&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,fe.width,fe.height,he,Pe,fe.data):n.texImage2D(t.TEXTURE_2D,Q,ge,fe.width,fe.height,0,he,Pe,fe.data);_.generateMipmaps=!1}else Ne?(ze&&n.texStorage2D(t.TEXTURE_2D,ue,ge,ee.width,ee.height),I&&U(_,ee,he,Pe)):n.texImage2D(t.TEXTURE_2D,0,ge,ee.width,ee.height,0,he,Pe,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ne&&ze&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,ge,Le[0].width,Le[0].height,ee.depth);for(let Q=0,pe=Le.length;Q<pe;Q++)if(fe=Le[Q],_.format!==mn)if(he!==null)if(Ne){if(I)if(_.layerUpdates.size>0){const Me=iu(fe.width,fe.height,_.format,_.type);for(const ie of _.layerUpdates){const Re=fe.data.subarray(ie*Me/fe.data.BYTES_PER_ELEMENT,(ie+1)*Me/fe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,ie,fe.width,fe.height,1,he,Re)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,fe.width,fe.height,ee.depth,he,fe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,ge,fe.width,fe.height,ee.depth,0,fe.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,fe.width,fe.height,ee.depth,he,Pe,fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Q,ge,fe.width,fe.height,ee.depth,0,he,Pe,fe.data)}else{Ne&&ze&&n.texStorage2D(t.TEXTURE_2D,ue,ge,Le[0].width,Le[0].height);for(let Q=0,pe=Le.length;Q<pe;Q++)fe=Le[Q],_.format!==mn?he!==null?Ne?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,fe.width,fe.height,he,fe.data):n.compressedTexImage2D(t.TEXTURE_2D,Q,ge,fe.width,fe.height,0,fe.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?I&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,fe.width,fe.height,he,Pe,fe.data):n.texImage2D(t.TEXTURE_2D,Q,ge,fe.width,fe.height,0,he,Pe,fe.data)}else if(_.isDataArrayTexture)if(Ne){if(ze&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,ge,ee.width,ee.height,ee.depth),I)if(_.layerUpdates.size>0){const Q=iu(ee.width,ee.height,_.format,_.type);for(const pe of _.layerUpdates){const Me=ee.data.subarray(pe*Q/ee.data.BYTES_PER_ELEMENT,(pe+1)*Q/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,pe,ee.width,ee.height,1,he,Pe,Me)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,he,Pe,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ge,ee.width,ee.height,ee.depth,0,he,Pe,ee.data);else if(_.isData3DTexture)Ne?(ze&&n.texStorage3D(t.TEXTURE_3D,ue,ge,ee.width,ee.height,ee.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,he,Pe,ee.data)):n.texImage3D(t.TEXTURE_3D,0,ge,ee.width,ee.height,ee.depth,0,he,Pe,ee.data);else if(_.isFramebufferTexture){if(ze)if(Ne)n.texStorage2D(t.TEXTURE_2D,ue,ge,ee.width,ee.height);else{let Q=ee.width,pe=ee.height;for(let Me=0;Me<ue;Me++)n.texImage2D(t.TEXTURE_2D,Me,ge,Q,pe,0,he,Pe,null),Q>>=1,pe>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){const Q=t.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),ee.parentNode!==Q){Q.appendChild(ee),h.add(_),Q.onpaint=pe=>{const Me=pe.changedElements;for(const ie of h)Me.includes(ie.image)&&(ie.needsUpdate=!0)},Q.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ee);else{const Me=t.RGBA,ie=t.RGBA,Re=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Me,ie,Re,ee)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Ne&&ze){const Q=rt(Le[0]);n.texStorage2D(t.TEXTURE_2D,ue,ge,Q.width,Q.height)}for(let Q=0,pe=Le.length;Q<pe;Q++)fe=Le[Q],Ne?I&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,he,Pe,fe):n.texImage2D(t.TEXTURE_2D,Q,ge,he,Pe,fe);_.generateMipmaps=!1}else if(Ne){if(ze){const Q=rt(ee);n.texStorage2D(t.TEXTURE_2D,ue,ge,Q.width,Q.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he,Pe,ee)}else n.texImage2D(t.TEXTURE_2D,0,ge,he,Pe,ee);m(_)&&S(X),de.__version=ce.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function be(w,_,z){if(_.image.length!==6)return;const X=W(w,_),K=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+z);const ce=i.get(K);if(K.version!==ce.__version||X===!0){n.activeTexture(t.TEXTURE0+z);const de=Ze.getPrimaries(Ze.workingColorSpace),J=_.colorSpace===Pn?null:Ze.getPrimaries(_.colorSpace),ee=_.colorSpace===Pn||de===J?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const he=_.isCompressedTexture||_.image[0].isCompressedTexture,Pe=_.image[0]&&_.image[0].isDataTexture,ge=[];for(let ie=0;ie<6;ie++)!he&&!Pe?ge[ie]=g(_.image[ie],!0,r.maxCubemapSize):ge[ie]=Pe?_.image[ie].image:_.image[ie],ge[ie]=en(_,ge[ie]);const fe=ge[0],Le=s.convert(_.format,_.colorSpace),Ne=s.convert(_.type),ze=M(_.internalFormat,Le,Ne,_.normalized,_.colorSpace),I=_.isVideoTexture!==!0,ue=ce.__version===void 0||X===!0,Q=K.dataReady;let pe=E(_,fe);ae(t.TEXTURE_CUBE_MAP,_);let Me;if(he){I&&ue&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,ze,fe.width,fe.height);for(let ie=0;ie<6;ie++){Me=ge[ie].mipmaps;for(let Re=0;Re<Me.length;Re++){const Ae=Me[Re];_.format!==mn?Le!==null?I?Q&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,0,0,Ae.width,Ae.height,Le,Ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,ze,Ae.width,Ae.height,0,Ae.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,0,0,Ae.width,Ae.height,Le,Ne,Ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,ze,Ae.width,Ae.height,0,Le,Ne,Ae.data)}}}else{if(Me=_.mipmaps,I&&ue){Me.length>0&&pe++;const ie=rt(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,ze,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Pe){I?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ge[ie].width,ge[ie].height,Le,Ne,ge[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ze,ge[ie].width,ge[ie].height,0,Le,Ne,ge[ie].data);for(let Re=0;Re<Me.length;Re++){const bt=Me[Re].image[ie].image;I?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,0,0,bt.width,bt.height,Le,Ne,bt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,ze,bt.width,bt.height,0,Le,Ne,bt.data)}}else{I?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Le,Ne,ge[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ze,Le,Ne,ge[ie]);for(let Re=0;Re<Me.length;Re++){const Ae=Me[Re];I?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,0,0,Le,Ne,Ae.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,ze,Le,Ne,Ae.image[ie])}}}m(_)&&S(t.TEXTURE_CUBE_MAP),ce.__version=K.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function ye(w,_,z,X,K,ce){const de=s.convert(z.format,z.colorSpace),J=s.convert(z.type),ee=M(z.internalFormat,de,J,z.normalized,z.colorSpace),he=i.get(_),Pe=i.get(z);if(Pe.__renderTarget=_,!he.__hasExternalTextures){const ge=Math.max(1,_.width>>ce),fe=Math.max(1,_.height>>ce);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,ce,ee,ge,fe,_.depth,0,de,J,null):n.texImage2D(K,ce,ee,ge,fe,0,de,J,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),Rt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,K,Pe.__webglTexture,0,Et(_)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,X,K,Pe.__webglTexture,ce),n.bindFramebuffer(t.FRAMEBUFFER,null)}function tt(w,_,z){if(t.bindRenderbuffer(t.RENDERBUFFER,w),_.depthBuffer){const X=_.depthTexture,K=X&&X.isDepthTexture?X.type:null,ce=b(_.stencilBuffer,K),de=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Rt(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Et(_),ce,_.width,_.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,Et(_),ce,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,ce,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,de,t.RENDERBUFFER,w)}else{const X=_.textures;for(let K=0;K<X.length;K++){const ce=X[K],de=s.convert(ce.format,ce.colorSpace),J=s.convert(ce.type),ee=M(ce.internalFormat,de,J,ce.normalized,ce.colorSpace);Rt(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Et(_),ee,_.width,_.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,Et(_),ee,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,ee,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function He(w,_,z){const X=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=i.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),K.__webglTexture===void 0){K.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),ae(t.TEXTURE_CUBE_MAP,_.depthTexture);const he=s.convert(_.depthTexture.format),Pe=s.convert(_.depthTexture.type);let ge;_.depthTexture.format===Qn?ge=t.DEPTH_COMPONENT24:_.depthTexture.format===Ii&&(ge=t.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ge,_.width,_.height,0,he,Pe,null)}}else Y(_.depthTexture,0);const ce=K.__webglTexture,de=Et(_),J=X?t.TEXTURE_CUBE_MAP_POSITIVE_X+z:t.TEXTURE_2D,ee=_.depthTexture.format===Ii?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===Qn)Rt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,J,ce,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,ee,J,ce,0);else if(_.depthTexture.format===Ii)Rt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,J,ce,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,ee,J,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(w){const _=i.get(w),z=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){const X=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=X}if(w.depthTexture&&!_.__autoAllocateDepthBuffer)if(z)for(let X=0;X<6;X++)He(_.__webglFramebuffer[X],w,X);else{const X=w.texture.mipmaps;X&&X.length>0?He(_.__webglFramebuffer[0],w,0):He(_.__webglFramebuffer,w,0)}else if(z){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=t.createRenderbuffer(),tt(_.__webglDepthbuffer[X],w,!1);else{const K=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=_.__webglDepthbuffer[X];t.bindRenderbuffer(t.RENDERBUFFER,ce),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,ce)}}else{const X=w.texture.mipmaps;if(X&&X.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),tt(_.__webglDepthbuffer,w,!1);else{const K=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ce),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,ce)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ye(w,_,z){const X=i.get(w);_!==void 0&&ye(X.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&nt(w)}function $e(w){const _=w.texture,z=i.get(w),X=i.get(_);w.addEventListener("dispose",v);const K=w.textures,ce=w.isWebGLCubeRenderTarget===!0,de=K.length>1;if(de||(X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture()),X.__version=_.version,a.memory.textures++),ce){z.__webglFramebuffer=[];for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[J]=[];for(let ee=0;ee<_.mipmaps.length;ee++)z.__webglFramebuffer[J][ee]=t.createFramebuffer()}else z.__webglFramebuffer[J]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let J=0;J<_.mipmaps.length;J++)z.__webglFramebuffer[J]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(de)for(let J=0,ee=K.length;J<ee;J++){const he=i.get(K[J]);he.__webglTexture===void 0&&(he.__webglTexture=t.createTexture(),a.memory.textures++)}if(w.samples>0&&Rt(w)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let J=0;J<K.length;J++){const ee=K[J];z.__webglColorRenderbuffer[J]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[J]);const he=s.convert(ee.format,ee.colorSpace),Pe=s.convert(ee.type),ge=M(ee.internalFormat,he,Pe,ee.normalized,ee.colorSpace,w.isXRRenderTarget===!0),fe=Et(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,ge,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+J,t.RENDERBUFFER,z.__webglColorRenderbuffer[J])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),tt(z.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ce){n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),ae(t.TEXTURE_CUBE_MAP,_);for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0)for(let ee=0;ee<_.mipmaps.length;ee++)ye(z.__webglFramebuffer[J][ee],w,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ee);else ye(z.__webglFramebuffer[J],w,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);m(_)&&S(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(de){for(let J=0,ee=K.length;J<ee;J++){const he=K[J],Pe=i.get(he);let ge=t.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ge=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ge,Pe.__webglTexture),ae(ge,he),ye(z.__webglFramebuffer,w,he,t.COLOR_ATTACHMENT0+J,ge,0),m(he)&&S(ge)}n.unbindTexture()}else{let J=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(J=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(J,X.__webglTexture),ae(J,_),_.mipmaps&&_.mipmaps.length>0)for(let ee=0;ee<_.mipmaps.length;ee++)ye(z.__webglFramebuffer[ee],w,_,t.COLOR_ATTACHMENT0,J,ee);else ye(z.__webglFramebuffer,w,_,t.COLOR_ATTACHMENT0,J,0);m(_)&&S(J),n.unbindTexture()}w.depthBuffer&&nt(w)}function St(w){const _=w.textures;for(let z=0,X=_.length;z<X;z++){const K=_[z];if(m(K)){const ce=T(w),de=i.get(K).__webglTexture;n.bindTexture(ce,de),S(ce),n.unbindTexture()}}}const yt=[],Ct=[];function Nt(w){if(w.samples>0){if(Rt(w)===!1){const _=w.textures,z=w.width,X=w.height;let K=t.COLOR_BUFFER_BIT;const ce=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=i.get(w),J=_.length>1;if(J)for(let he=0;he<_.length;he++)n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const ee=w.texture.mipmaps;ee&&ee.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let he=0;he<_.length;he++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),J){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,de.__webglColorRenderbuffer[he]);const Pe=i.get(_[he]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Pe,0)}t.blitFramebuffer(0,0,z,X,0,0,z,X,K,t.NEAREST),c===!0&&(yt.length=0,Ct.length=0,yt.push(t.COLOR_ATTACHMENT0+he),w.depthBuffer&&w.resolveDepthBuffer===!1&&(yt.push(ce),Ct.push(ce),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ct)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,yt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),J)for(let he=0;he<_.length;he++){n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,de.__webglColorRenderbuffer[he]);const Pe=i.get(_[he]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,Pe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const _=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function Et(w){return Math.min(r.maxSamples,w.samples)}function Rt(w){const _=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function F(w){const _=a.render.frame;u.get(w)!==_&&(u.set(w,_),w.update())}function en(w,_){const z=w.colorSpace,X=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==ta&&z!==Pn&&(Ze.getTransfer(z)===st?(X!==mn||K!==pn)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",z)),_}function rt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=$,this.resetTextureUnits=O,this.getTextureUnits=k,this.setTextureUnits=L,this.setTexture2D=Y,this.setTexture2DArray=te,this.setTexture3D=ne,this.setTextureCube=j,this.rebindTextures=Ye,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Rt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function fv(t,e){function n(i,r=Pn){let s;const a=Ze.getTransfer(r);if(i===pn)return t.UNSIGNED_BYTE;if(i===Vc)return t.UNSIGNED_SHORT_4_4_4_4;if(i===zc)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Md)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Sd)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===vd)return t.BYTE;if(i===_d)return t.SHORT;if(i===es)return t.UNSIGNED_SHORT;if(i===Bc)return t.INT;if(i===On)return t.UNSIGNED_INT;if(i===Mn)return t.FLOAT;if(i===Jn)return t.HALF_FLOAT;if(i===yd)return t.ALPHA;if(i===Ed)return t.RGB;if(i===mn)return t.RGBA;if(i===Qn)return t.DEPTH_COMPONENT;if(i===Ii)return t.DEPTH_STENCIL;if(i===Gc)return t.RED;if(i===Hc)return t.RED_INTEGER;if(i===Vi)return t.RG;if(i===kc)return t.RG_INTEGER;if(i===Wc)return t.RGBA_INTEGER;if(i===qs||i===Ys||i===Zs||i===Ks)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===qs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===qs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ys)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ks)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ko||i===Wo||i===Xo||i===$o)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ko)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$o)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qo||i===Yo||i===Zo||i===Ko||i===Jo||i===js||i===Qo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===qo||i===Yo)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Zo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ko)return s.COMPRESSED_R11_EAC;if(i===Jo)return s.COMPRESSED_SIGNED_R11_EAC;if(i===js)return s.COMPRESSED_RG11_EAC;if(i===Qo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===jo||i===ec||i===tc||i===nc||i===ic||i===rc||i===sc||i===ac||i===oc||i===cc||i===lc||i===uc||i===dc||i===hc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===jo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ec)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===tc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ic)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ac)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===oc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===cc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===lc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===uc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fc||i===pc||i===mc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===fc)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===mc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gc||i===xc||i===ea||i===vc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===gc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===xc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ea)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ts?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const pv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mv=`
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

}`;class gv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Fd(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Mt({vertexShader:pv,fragmentShader:mv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Qt(new ls(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xv extends Xi{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,p=null;const x=typeof XRWebGLBinding<"u",g=new gv,m={},S=n.getContextAttributes();let T=null,M=null;const b=[],E=[],C=new et;let v=null;const A=new fn;A.viewport=new xt;const P=new fn;P.viewport=new xt;const R=[A,P],D=new Ap;let O=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let se=b[W];return se===void 0&&(se=new Ua,b[W]=se),se.getTargetRaySpace()},this.getControllerGrip=function(W){let se=b[W];return se===void 0&&(se=new Ua,b[W]=se),se.getGripSpace()},this.getHand=function(W){let se=b[W];return se===void 0&&(se=new Ua,b[W]=se),se.getHandSpace()};function L(W){const se=E.indexOf(W.inputSource);if(se===-1)return;const U=b[se];U!==void 0&&(U.update(W.inputSource,W.frame,l||a),U.dispatchEvent({type:W.type,data:W.inputSource}))}function $(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",V);for(let W=0;W<b.length;W++){const se=E[W];se!==null&&(E[W]=null,b[W].disconnect(se))}O=null,k=null,g.reset();for(const W in m)delete m[W];e.setRenderTarget(T),f=null,d=null,h=null,r=null,M=null,ae.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",$),r.addEventListener("inputsourceschange",V),S.xrCompatible!==!0&&await n.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let U=null,le=null,be=null;S.depth&&(be=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,U=S.stencil?Ii:Qn,le=S.stencil?ts:On);const ye={colorFormat:n.RGBA8,depthFormat:be,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(ye),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Un(d.textureWidth,d.textureHeight,{format:mn,type:pn,depthTexture:new Er(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const U={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,n,U),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Un(f.framebufferWidth,f.framebufferHeight,{format:mn,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),ae.setContext(r),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(W){for(let se=0;se<W.removed.length;se++){const U=W.removed[se],le=E.indexOf(U);le>=0&&(E[le]=null,b[le].disconnect(U))}for(let se=0;se<W.added.length;se++){const U=W.added[se];let le=E.indexOf(U);if(le===-1){for(let ye=0;ye<b.length;ye++)if(ye>=E.length){E.push(U),le=ye;break}else if(E[ye]===null){E[ye]=U,le=ye;break}if(le===-1)break}const be=b[le];be&&be.connect(U)}}const Y=new N,te=new N;function ne(W,se,U){Y.setFromMatrixPosition(se.matrixWorld),te.setFromMatrixPosition(U.matrixWorld);const le=Y.distanceTo(te),be=se.projectionMatrix.elements,ye=U.projectionMatrix.elements,tt=be[14]/(be[10]-1),He=be[14]/(be[10]+1),nt=(be[9]+1)/be[5],Ye=(be[9]-1)/be[5],$e=(be[8]-1)/be[0],St=(ye[8]+1)/ye[0],yt=tt*$e,Ct=tt*St,Nt=le/(-$e+St),Et=Nt*-$e;if(se.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Et),W.translateZ(Nt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),be[10]===-1)W.projectionMatrix.copy(se.projectionMatrix),W.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Rt=tt+Nt,F=He+Nt,en=yt-Et,rt=Ct+(le-Et),w=nt*He/F*Rt,_=Ye*He/F*Rt;W.projectionMatrix.makePerspective(en,rt,w,_,Rt,F),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function j(W,se){se===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(se.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let se=W.near,U=W.far;g.texture!==null&&(g.depthNear>0&&(se=g.depthNear),g.depthFar>0&&(U=g.depthFar)),D.near=P.near=A.near=se,D.far=P.far=A.far=U,(O!==D.near||k!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),O=D.near,k=D.far),D.layers.mask=W.layers.mask|6,A.layers.mask=D.layers.mask&-5,P.layers.mask=D.layers.mask&-3;const le=W.parent,be=D.cameras;j(D,le);for(let ye=0;ye<be.length;ye++)j(be[ye],le);be.length===2?ne(D,A,P):D.projectionMatrix.copy(A.projectionMatrix),re(W,D,le)};function re(W,se,U){U===null?W.matrix.copy(se.matrixWorld):(W.matrix.copy(U.matrixWorld),W.matrix.invert(),W.matrix.multiply(se.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(se.projectionMatrix),W.projectionMatrixInverse.copy(se.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Sc*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(W){return m[W]};let Fe=null;function Be(W,se){if(u=se.getViewerPose(l||a),p=se,u!==null){const U=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let le=!1;U.length!==D.cameras.length&&(D.cameras.length=0,le=!0);for(let He=0;He<U.length;He++){const nt=U[He];let Ye=null;if(f!==null)Ye=f.getViewport(nt);else{const St=h.getViewSubImage(d,nt);Ye=St.viewport,He===0&&(e.setRenderTargetTextures(M,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(M))}let $e=R[He];$e===void 0&&($e=new fn,$e.layers.enable(He),$e.viewport=new xt,R[He]=$e),$e.matrix.fromArray(nt.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(nt.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),He===0&&(D.matrix.copy($e.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),le===!0&&D.cameras.push($e)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=i.getBinding();const He=h.getDepthInformation(U[0]);He&&He.isValid&&He.texture&&g.init(He,r.renderState)}if(be&&be.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let He=0;He<U.length;He++){const nt=U[He].camera;if(nt){let Ye=m[nt];Ye||(Ye=new Fd,m[nt]=Ye);const $e=h.getCameraImage(nt);Ye.sourceTexture=$e}}}}for(let U=0;U<b.length;U++){const le=E[U],be=b[U];le!==null&&be!==void 0&&be.update(le,se,l||a)}Fe&&Fe(W,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),p=null}const ae=new zd;ae.setAnimationLoop(Be),this.setAnimationLoop=function(W){Fe=W},this.dispose=function(){}}}const vv=new at,qd=new Ve;qd.set(-1,0,0,0,1,0,0,0,1);function _v(t,e){function n(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Nd(t)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,S,T,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),h(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,M)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),x(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,S,T):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,n(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,n(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Jt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,n(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Jt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,n(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,n(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const S=e.get(m),T=S.envMap,M=S.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(vv.makeRotationFromEuler(M)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(qd),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,n(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,S,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=T*.5,m.map&&(g.map.value=m.map,n(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,n(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,S){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Jt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){const S=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Mv(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,b){const E=b.program;i.uniformBlockBinding(M,E)}function l(M,b){let E=r[M.id];E===void 0&&(g(M),E=u(M),r[M.id]=E,M.addEventListener("dispose",S));const C=b.program;i.updateUBOMapping(M,C);const v=e.render.frame;s[M.id]!==v&&(d(M),s[M.id]=v)}function u(M){const b=h();M.__bindingPointIndex=b;const E=t.createBuffer(),C=M.__size,v=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,C,v),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,E),E}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const b=r[M.id],E=M.uniforms,C=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let v=0,A=E.length;v<A;v++){const P=E[v];if(Array.isArray(P))for(let R=0,D=P.length;R<D;R++)f(P[R],v,R,C);else f(P,v,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(M,b,E,C){if(x(M,b,E,C)===!0){const v=M.__offset,A=M.value;if(Array.isArray(A)){let P=0;for(let R=0;R<A.length;R++){const D=A[R],O=m(D);p(D,M.__data,P),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(P+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(A,M.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,v,M.__data)}}function p(M,b,E){typeof M=="number"||typeof M=="boolean"?b[0]=M:M.isMatrix3?(b[0]=M.elements[0],b[1]=M.elements[1],b[2]=M.elements[2],b[3]=0,b[4]=M.elements[3],b[5]=M.elements[4],b[6]=M.elements[5],b[7]=0,b[8]=M.elements[6],b[9]=M.elements[7],b[10]=M.elements[8],b[11]=0):ArrayBuffer.isView(M)?b.set(new M.constructor(M.buffer,M.byteOffset,b.length)):M.toArray(b,E)}function x(M,b,E,C){const v=M.value,A=b+"_"+E;if(C[A]===void 0)return typeof v=="number"||typeof v=="boolean"?C[A]=v:ArrayBuffer.isView(v)?C[A]=v.slice():C[A]=v.clone(),!0;{const P=C[A];if(typeof v=="number"||typeof v=="boolean"){if(P!==v)return C[A]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(P.equals(v)===!1)return P.copy(v),!0}}return!1}function g(M){const b=M.uniforms;let E=0;const C=16;for(let A=0,P=b.length;A<P;A++){const R=Array.isArray(b[A])?b[A]:[b[A]];for(let D=0,O=R.length;D<O;D++){const k=R[D],L=Array.isArray(k.value)?k.value:[k.value];for(let $=0,V=L.length;$<V;$++){const Y=L[$],te=m(Y),ne=E%C,j=ne%te.boundary,re=ne+j;E+=j,re!==0&&C-re<te.storage&&(E+=C-re),k.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=te.storage}}}const v=E%C;return v>0&&(E+=C-v),M.__size=E,M.__cache={},this}function m(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):Ue("WebGLRenderer: Unsupported uniform value type.",M),b}function S(M){const b=M.target;b.removeEventListener("dispose",S);const E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function T(){for(const M in r)t.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:c,update:l,dispose:T}}const Sv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let An=null;function yv(){return An===null&&(An=new Yc(Sv,16,16,Vi,Jn),An.name="DFG_LUT",An.minFilter=Bt,An.magFilter=Bt,An.wrapS=Yn,An.wrapT=Yn,An.generateMipmaps=!1,An.needsUpdate=!0),An}class Ev{constructor(e={}){const{canvas:n=Nf(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=pn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const x=f,g=new Set([Wc,kc,Hc]),m=new Set([pn,On,es,ts,Vc,zc]),S=new Uint32Array(4),T=new Int32Array(4),M=new N;let b=null,E=null;const C=[],v=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let R=!1,D=null,O=null,k=null,L=null;this._outputColorSpace=Ut;let $=0,V=0,Y=null,te=-1,ne=null;const j=new xt,re=new xt;let Fe=null;const Be=new Xe(0);let ae=0,W=n.width,se=n.height,U=1,le=null,be=null;const ye=new xt(0,0,W,se),tt=new xt(0,0,W,se);let He=!1;const nt=new Dd;let Ye=!1,$e=!1;const St=new at,yt=new N,Ct=new xt,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function Rt(){return Y===null?U:1}let F=i;function en(y,B){return n.getContext(y,B)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Oc}`),n.addEventListener("webglcontextlost",bt,!1),n.addEventListener("webglcontextrestored",pt,!1),n.addEventListener("webglcontextcreationerror",yn,!1),F===null){const B="webgl2";if(F=en(B,y),F===null)throw en(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(y){throw Je("WebGLRenderer: "+y.message),y}let rt,w,_,z,X,K,ce,de,J,ee,he,Pe,ge,fe,Le,Ne,ze,I,ue,Q,pe,Me,ie;function Re(){rt=new yg(F),rt.init(),pe=new fv(F,rt),w=new pg(F,rt,e,pe),_=new dv(F,rt),w.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),O=F.createFramebuffer(),k=F.createFramebuffer(),L=F.createFramebuffer(),z=new Tg(F),X=new Jx,K=new hv(F,rt,_,X,w,pe,z),ce=new Sg(P),de=new Rp(F),Me=new hg(F,de),J=new Eg(F,de,z,Me),ee=new wg(F,J,de,Me,z),I=new Ag(F,w,K),Le=new mg(X),he=new Kx(P,ce,rt,w,Me,Le),Pe=new _v(P,X),ge=new jx,fe=new sv(rt),ze=new dg(P,ce,_,ee,p,c),Ne=new uv(P,ee,w),ie=new Mv(F,z,w,_),ue=new fg(F,rt,z),Q=new bg(F,rt,z),z.programs=he.programs,P.capabilities=w,P.extensions=rt,P.properties=X,P.renderLists=ge,P.shadowMap=Ne,P.state=_,P.info=z}Re(),x!==pn&&(A=new Rg(x,n.width,n.height,o,r,s));const Ae=new xv(P,F);this.xr=Ae,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const y=rt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=rt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(y){y!==void 0&&(U=y,this.setSize(W,se,!1))},this.getSize=function(y){return y.set(W,se)},this.setSize=function(y,B,q=!0){if(Ae.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}W=y,se=B,n.width=Math.floor(y*U),n.height=Math.floor(B*U),q===!0&&(n.style.width=y+"px",n.style.height=B+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,y,B)},this.getDrawingBufferSize=function(y){return y.set(W*U,se*U).floor()},this.setDrawingBufferSize=function(y,B,q){W=y,se=B,U=q,n.width=Math.floor(y*q),n.height=Math.floor(B*q),this.setViewport(0,0,y,B)},this.setEffects=function(y){if(x===pn){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let B=0;B<y.length;B++)if(y[B].isOutputPass===!0){Ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(j)},this.getViewport=function(y){return y.copy(ye)},this.setViewport=function(y,B,q,G){y.isVector4?ye.set(y.x,y.y,y.z,y.w):ye.set(y,B,q,G),_.viewport(j.copy(ye).multiplyScalar(U).round())},this.getScissor=function(y){return y.copy(tt)},this.setScissor=function(y,B,q,G){y.isVector4?tt.set(y.x,y.y,y.z,y.w):tt.set(y,B,q,G),_.scissor(re.copy(tt).multiplyScalar(U).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(y){_.setScissorTest(He=y)},this.setOpaqueSort=function(y){le=y},this.setTransparentSort=function(y){be=y},this.getClearColor=function(y){return y.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(y=!0,B=!0,q=!0){let G=0;if(y){let H=!1;if(Y!==null){const ve=Y.texture.format;H=g.has(ve)}if(H){const ve=Y.texture.type,Te=m.has(ve),xe=ze.getClearColor(),we=ze.getClearAlpha(),De=xe.r,Ge=xe.g,We=xe.b;Te?(S[0]=De,S[1]=Ge,S[2]=We,S[3]=we,F.clearBufferuiv(F.COLOR,0,S)):(T[0]=De,T[1]=Ge,T[2]=We,T[3]=we,F.clearBufferiv(F.COLOR,0,T))}else G|=F.COLOR_BUFFER_BIT}B&&(G|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),D=y},this.dispose=function(){n.removeEventListener("webglcontextlost",bt,!1),n.removeEventListener("webglcontextrestored",pt,!1),n.removeEventListener("webglcontextcreationerror",yn,!1),ze.dispose(),ge.dispose(),fe.dispose(),X.dispose(),ce.dispose(),ee.dispose(),Me.dispose(),ie.dispose(),he.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",xl),Ae.removeEventListener("sessionend",vl),Si.stop()};function bt(y){y.preventDefault(),sa("WebGLRenderer: Context Lost."),R=!0}function pt(){sa("WebGLRenderer: Context Restored."),R=!1;const y=z.autoReset,B=Ne.enabled,q=Ne.autoUpdate,G=Ne.needsUpdate,H=Ne.type;Re(),z.autoReset=y,Ne.enabled=B,Ne.autoUpdate=q,Ne.needsUpdate=G,Ne.type=H}function yn(y){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function En(y){const B=y.target;B.removeEventListener("dispose",En),qh(B)}function qh(y){Yh(y),X.remove(y)}function Yh(y){const B=X.get(y).programs;B!==void 0&&(B.forEach(function(q){he.releaseProgram(q)}),y.isShaderMaterial&&he.releaseShaderCache(y))}this.renderBufferDirect=function(y,B,q,G,H,ve){B===null&&(B=Nt);const Te=H.isMesh&&H.matrixWorld.determinantAffine()<0,xe=Jh(y,B,q,G,H);_.setMaterial(G,Te);let we=q.index,De=1;if(G.wireframe===!0){if(we=J.getWireframeAttribute(q),we===void 0)return;De=2}const Ge=q.drawRange,We=q.attributes.position;let Ie=Ge.start*De,ot=(Ge.start+Ge.count)*De;ve!==null&&(Ie=Math.max(Ie,ve.start*De),ot=Math.min(ot,(ve.start+ve.count)*De)),we!==null?(Ie=Math.max(Ie,0),ot=Math.min(ot,we.count)):We!=null&&(Ie=Math.max(Ie,0),ot=Math.min(ot,We.count));const At=ot-Ie;if(At<0||At===1/0)return;Me.setup(H,G,xe,q,we);let Tt,dt=ue;if(we!==null&&(Tt=de.get(we),dt=Q,dt.setIndex(Tt)),H.isMesh)G.wireframe===!0?(_.setLineWidth(G.wireframeLinewidth*Rt()),dt.setMode(F.LINES)):dt.setMode(F.TRIANGLES);else if(H.isLine){let zt=G.linewidth;zt===void 0&&(zt=1),_.setLineWidth(zt*Rt()),H.isLineSegments?dt.setMode(F.LINES):H.isLineLoop?dt.setMode(F.LINE_LOOP):dt.setMode(F.LINE_STRIP)}else H.isPoints?dt.setMode(F.POINTS):H.isSprite&&dt.setMode(F.TRIANGLES);if(H.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))dt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const zt=H._multiDrawStarts,Ee=H._multiDrawCounts,an=H._multiDrawCount,Qe=we?de.get(we).bytesPerElement:1,dn=X.get(G).currentProgram.getUniforms();for(let bn=0;bn<an;bn++)dn.setValue(F,"_gl_DrawID",bn),dt.render(zt[bn]/Qe,Ee[bn])}else if(H.isInstancedMesh)dt.renderInstances(Ie,At,H.count);else if(q.isInstancedBufferGeometry){const zt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ee=Math.min(q.instanceCount,zt);dt.renderInstances(Ie,At,Ee)}else dt.render(Ie,At)};function gl(y,B,q){y.transparent===!0&&y.side===ln&&y.forceSinglePass===!1?(y.side=Jt,y.needsUpdate=!0,ps(y,B,q),y.side=Kn,y.needsUpdate=!0,ps(y,B,q),y.side=ln):ps(y,B,q)}this.compile=function(y,B,q=null){q===null&&(q=y),E=fe.get(q),E.init(B),v.push(E),q.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),y!==q&&y.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),E.setupLights();const G=new Set;return y.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ve=H.material;if(ve)if(Array.isArray(ve))for(let Te=0;Te<ve.length;Te++){const xe=ve[Te];gl(xe,q,H),G.add(xe)}else gl(ve,q,H),G.add(ve)}),E=v.pop(),G},this.compileAsync=function(y,B,q=null){const G=this.compile(y,B,q);return new Promise(H=>{function ve(){if(G.forEach(function(Te){X.get(Te).currentProgram.isReady()&&G.delete(Te)}),G.size===0){H(y);return}setTimeout(ve,10)}rt.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let ba=null;function Zh(y){ba&&ba(y)}function xl(){Si.stop()}function vl(){Si.start()}const Si=new zd;Si.setAnimationLoop(Zh),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(y){ba=y,Ae.setAnimationLoop(y),y===null?Si.stop():Si.start()},Ae.addEventListener("sessionstart",xl),Ae.addEventListener("sessionend",vl),this.render=function(y,B){if(B!==void 0&&B.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;D!==null&&D.renderStart(y,B);const q=Ae.enabled===!0&&Ae.isPresenting===!0,G=A!==null&&(Y===null||q)&&A.begin(P,Y);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(B),B=Ae.getCamera()),y.isScene===!0&&y.onBeforeRender(P,y,B,Y),E=fe.get(y,v.length),E.init(B),E.state.textureUnits=K.getTextureUnits(),v.push(E),St.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),nt.setFromProjectionMatrix(St,In,B.reversedDepth),$e=this.localClippingEnabled,Ye=Le.init(this.clippingPlanes,$e),b=ge.get(y,C.length),b.init(),C.push(b),Ae.enabled===!0&&Ae.isPresenting===!0){const Te=P.xr.getDepthSensingMesh();Te!==null&&Ta(Te,B,-1/0,P.sortObjects)}Ta(y,B,0,P.sortObjects),b.finish(),P.sortObjects===!0&&b.sort(le,be,B.reversedDepth),Et=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,Et&&ze.addToRenderList(b,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ye===!0&&Le.beginShadows();const H=E.state.shadowsArray;if(Ne.render(H,y,B),Ye===!0&&Le.endShadows(),(G&&A.hasRenderPass())===!1){const Te=b.opaque,xe=b.transmissive;if(E.setupLights(),B.isArrayCamera){const we=B.cameras;if(xe.length>0)for(let De=0,Ge=we.length;De<Ge;De++){const We=we[De];Ml(Te,xe,y,We)}Et&&ze.render(y);for(let De=0,Ge=we.length;De<Ge;De++){const We=we[De];_l(b,y,We,We.viewport)}}else xe.length>0&&Ml(Te,xe,y,B),Et&&ze.render(y),_l(b,y,B)}Y!==null&&V===0&&(K.updateMultisampleRenderTarget(Y),K.updateRenderTargetMipmap(Y)),G&&A.end(P),y.isScene===!0&&y.onAfterRender(P,y,B),Me.resetDefaultState(),te=-1,ne=null,v.pop(),v.length>0?(E=v[v.length-1],K.setTextureUnits(E.state.textureUnits),Ye===!0&&Le.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,D!==null&&D.renderEnd()};function Ta(y,B,q,G){if(y.visible===!1)return;if(y.layers.test(B.layers)){if(y.isGroup)q=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(B);else if(y.isLightProbeGrid)E.pushLightProbeGrid(y);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||nt.intersectsSprite(y)){G&&Ct.setFromMatrixPosition(y.matrixWorld).applyMatrix4(St);const Te=ee.update(y),xe=y.material;xe.visible&&b.push(y,Te,xe,q,Ct.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||nt.intersectsObject(y))){const Te=ee.update(y),xe=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ct.copy(y.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ct.copy(Te.boundingSphere.center)),Ct.applyMatrix4(y.matrixWorld).applyMatrix4(St)),Array.isArray(xe)){const we=Te.groups;for(let De=0,Ge=we.length;De<Ge;De++){const We=we[De],Ie=xe[We.materialIndex];Ie&&Ie.visible&&b.push(y,Te,Ie,q,Ct.z,We)}}else xe.visible&&b.push(y,Te,xe,q,Ct.z,null)}}const ve=y.children;for(let Te=0,xe=ve.length;Te<xe;Te++)Ta(ve[Te],B,q,G)}function _l(y,B,q,G){const{opaque:H,transmissive:ve,transparent:Te}=y;E.setupLightsView(q),Ye===!0&&Le.setGlobalState(P.clippingPlanes,q),G&&_.viewport(j.copy(G)),H.length>0&&fs(H,B,q),ve.length>0&&fs(ve,B,q),Te.length>0&&fs(Te,B,q),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Ml(y,B,q,G){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[G.id]===void 0){const Ie=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[G.id]=new Un(1,1,{generateMipmaps:!0,type:Ie?Jn:pn,minFilter:fi,samples:Math.max(4,w.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const ve=E.state.transmissionRenderTarget[G.id],Te=G.viewport||j;ve.setSize(Te.z*P.transmissionResolutionScale,Te.w*P.transmissionResolutionScale);const xe=P.getRenderTarget(),we=P.getActiveCubeFace(),De=P.getActiveMipmapLevel();P.setRenderTarget(ve),P.getClearColor(Be),ae=P.getClearAlpha(),ae<1&&P.setClearColor(16777215,.5),P.clear(),Et&&ze.render(q);const Ge=P.toneMapping;P.toneMapping=Nn;const We=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),E.setupLightsView(G),Ye===!0&&Le.setGlobalState(P.clippingPlanes,G),fs(y,q,G),K.updateMultisampleRenderTarget(ve),K.updateRenderTargetMipmap(ve),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let ot=0,At=B.length;ot<At;ot++){const Tt=B[ot],{object:dt,geometry:zt,material:Ee,group:an}=Tt;if(Ee.side===ln&&dt.layers.test(G.layers)){const Qe=Ee.side;Ee.side=Jt,Ee.needsUpdate=!0,Sl(dt,q,G,zt,Ee,an),Ee.side=Qe,Ee.needsUpdate=!0,Ie=!0}}Ie===!0&&(K.updateMultisampleRenderTarget(ve),K.updateRenderTargetMipmap(ve))}P.setRenderTarget(xe,we,De),P.setClearColor(Be,ae),We!==void 0&&(G.viewport=We),P.toneMapping=Ge}function fs(y,B,q){const G=B.isScene===!0?B.overrideMaterial:null;for(let H=0,ve=y.length;H<ve;H++){const Te=y[H],{object:xe,geometry:we,group:De}=Te;let Ge=Te.material;Ge.allowOverride===!0&&G!==null&&(Ge=G),xe.layers.test(q.layers)&&Sl(xe,B,q,we,Ge,De)}}function Sl(y,B,q,G,H,ve){y.onBeforeRender(P,B,q,G,H,ve),y.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(P,B,q,G,y,ve),H.transparent===!0&&H.side===ln&&H.forceSinglePass===!1?(H.side=Jt,H.needsUpdate=!0,P.renderBufferDirect(q,B,G,H,y,ve),H.side=Kn,H.needsUpdate=!0,P.renderBufferDirect(q,B,G,H,y,ve),H.side=ln):P.renderBufferDirect(q,B,G,H,y,ve),y.onAfterRender(P,B,q,G,H,ve)}function ps(y,B,q){B.isScene!==!0&&(B=Nt);const G=X.get(y),H=E.state.lights,ve=E.state.shadowsArray,Te=H.state.version,xe=he.getParameters(y,H.state,ve,B,q,E.state.lightProbeGridArray),we=he.getProgramCacheKey(xe);let De=G.programs;G.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?B.environment:null,G.fog=B.fog;const Ge=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;G.envMap=ce.get(y.envMap||G.environment,Ge),G.envMapRotation=G.environment!==null&&y.envMap===null?B.environmentRotation:y.envMapRotation,De===void 0&&(y.addEventListener("dispose",En),De=new Map,G.programs=De);let We=De.get(we);if(We!==void 0){if(G.currentProgram===We&&G.lightsStateVersion===Te)return El(y,xe),We}else xe.uniforms=he.getUniforms(y),D!==null&&y.isNodeMaterial&&D.build(y,q,xe),y.onBeforeCompile(xe,P),We=he.acquireProgram(xe,we),De.set(we,We),G.uniforms=xe.uniforms;const Ie=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ie.clippingPlanes=Le.uniform),El(y,xe),G.needsLights=jh(y),G.lightsStateVersion=Te,G.needsLights&&(Ie.ambientLightColor.value=H.state.ambient,Ie.lightProbe.value=H.state.probe,Ie.directionalLights.value=H.state.directional,Ie.directionalLightShadows.value=H.state.directionalShadow,Ie.spotLights.value=H.state.spot,Ie.spotLightShadows.value=H.state.spotShadow,Ie.rectAreaLights.value=H.state.rectArea,Ie.ltc_1.value=H.state.rectAreaLTC1,Ie.ltc_2.value=H.state.rectAreaLTC2,Ie.pointLights.value=H.state.point,Ie.pointLightShadows.value=H.state.pointShadow,Ie.hemisphereLights.value=H.state.hemi,Ie.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ie.spotLightMatrix.value=H.state.spotLightMatrix,Ie.spotLightMap.value=H.state.spotLightMap,Ie.pointShadowMatrix.value=H.state.pointShadowMatrix),G.lightProbeGrid=E.state.lightProbeGridArray.length>0,G.currentProgram=We,G.uniformsList=null,We}function yl(y){if(y.uniformsList===null){const B=y.currentProgram.getUniforms();y.uniformsList=Js.seqWithValue(B.seq,y.uniforms)}return y.uniformsList}function El(y,B){const q=X.get(y);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Kh(y,B){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;M.setFromMatrixPosition(B.matrixWorld);for(let q=0,G=y.length;q<G;q++){const H=y[q];if(H.texture!==null&&H.boundingBox.containsPoint(M))return H}return null}function Jh(y,B,q,G,H){B.isScene!==!0&&(B=Nt),K.resetTextureUnits();const ve=B.fog,Te=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?B.environment:null,xe=Y===null?P.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Ze.workingColorSpace,we=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,De=ce.get(G.envMap||Te,we),Ge=G.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,We=!!q.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ie=!!q.morphAttributes.position,ot=!!q.morphAttributes.normal,At=!!q.morphAttributes.color;let Tt=Nn;G.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Tt=P.toneMapping);const dt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,zt=dt!==void 0?dt.length:0,Ee=X.get(G),an=E.state.lights;if(Ye===!0&&($e===!0||y!==ne)){const mt=y===ne&&G.id===te;Le.setState(G,y,mt)}let Qe=!1;G.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==an.state.version||Ee.outputColorSpace!==xe||H.isBatchedMesh&&Ee.batching===!1||!H.isBatchedMesh&&Ee.batching===!0||H.isBatchedMesh&&Ee.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ee.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ee.instancing===!1||!H.isInstancedMesh&&Ee.instancing===!0||H.isSkinnedMesh&&Ee.skinning===!1||!H.isSkinnedMesh&&Ee.skinning===!0||H.isInstancedMesh&&Ee.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ee.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ee.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ee.instancingMorph===!1&&H.morphTexture!==null||Ee.envMap!==De||G.fog===!0&&Ee.fog!==ve||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Le.numPlanes||Ee.numIntersection!==Le.numIntersection)||Ee.vertexAlphas!==Ge||Ee.vertexTangents!==We||Ee.morphTargets!==Ie||Ee.morphNormals!==ot||Ee.morphColors!==At||Ee.toneMapping!==Tt||Ee.morphTargetsCount!==zt||!!Ee.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,Ee.__version=G.version);let dn=Ee.currentProgram;Qe===!0&&(dn=ps(G,B,H),D&&G.isNodeMaterial&&D.onUpdateProgram(G,dn,Ee));let bn=!1,ei=!1,Yi=!1;const ht=dn.getUniforms(),wt=Ee.uniforms;if(_.useProgram(dn.program)&&(bn=!0,ei=!0,Yi=!0),G.id!==te&&(te=G.id,ei=!0),Ee.needsLights){const mt=Kh(E.state.lightProbeGridArray,H);Ee.lightProbeGrid!==mt&&(Ee.lightProbeGrid=mt,ei=!0)}if(bn||ne!==y){_.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ht.setValue(F,"projectionMatrix",y.projectionMatrix),ht.setValue(F,"viewMatrix",y.matrixWorldInverse);const ni=ht.map.cameraPosition;ni!==void 0&&ni.setValue(F,yt.setFromMatrixPosition(y.matrixWorld)),w.logarithmicDepthBuffer&&ht.setValue(F,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ht.setValue(F,"isOrthographic",y.isOrthographicCamera===!0),ne!==y&&(ne=y,ei=!0,Yi=!0)}if(Ee.needsLights&&(an.state.directionalShadowMap.length>0&&ht.setValue(F,"directionalShadowMap",an.state.directionalShadowMap,K),an.state.spotShadowMap.length>0&&ht.setValue(F,"spotShadowMap",an.state.spotShadowMap,K),an.state.pointShadowMap.length>0&&ht.setValue(F,"pointShadowMap",an.state.pointShadowMap,K)),H.isSkinnedMesh){ht.setOptional(F,H,"bindMatrix"),ht.setOptional(F,H,"bindMatrixInverse");const mt=H.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),ht.setValue(F,"boneTexture",mt.boneTexture,K))}H.isBatchedMesh&&(ht.setOptional(F,H,"batchingTexture"),ht.setValue(F,"batchingTexture",H._matricesTexture,K),ht.setOptional(F,H,"batchingIdTexture"),ht.setValue(F,"batchingIdTexture",H._indirectTexture,K),ht.setOptional(F,H,"batchingColorTexture"),H._colorsTexture!==null&&ht.setValue(F,"batchingColorTexture",H._colorsTexture,K));const ti=q.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&I.update(H,q,dn),(ei||Ee.receiveShadow!==H.receiveShadow)&&(Ee.receiveShadow=H.receiveShadow,ht.setValue(F,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&B.environment!==null&&(wt.envMapIntensity.value=B.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=yv()),ei){if(ht.setValue(F,"toneMappingExposure",P.toneMappingExposure),Ee.needsLights&&Qh(wt,Yi),ve&&G.fog===!0&&Pe.refreshFogUniforms(wt,ve),Pe.refreshMaterialUniforms(wt,G,U,se,E.state.transmissionRenderTarget[y.id]),Ee.needsLights&&Ee.lightProbeGrid){const mt=Ee.lightProbeGrid;wt.probesSH.value=mt.texture,wt.probesMin.value.copy(mt.boundingBox.min),wt.probesMax.value.copy(mt.boundingBox.max),wt.probesResolution.value.copy(mt.resolution)}Js.upload(F,yl(Ee),wt,K)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Js.upload(F,yl(Ee),wt,K),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ht.setValue(F,"center",H.center),ht.setValue(F,"modelViewMatrix",H.modelViewMatrix),ht.setValue(F,"normalMatrix",H.normalMatrix),ht.setValue(F,"modelMatrix",H.matrixWorld),G.uniformsGroups!==void 0){const mt=G.uniformsGroups;for(let ni=0,Zi=mt.length;ni<Zi;ni++){const bl=mt[ni];ie.update(bl,dn),ie.bind(bl,dn)}}return dn}function Qh(y,B){y.ambientLightColor.needsUpdate=B,y.lightProbe.needsUpdate=B,y.directionalLights.needsUpdate=B,y.directionalLightShadows.needsUpdate=B,y.pointLights.needsUpdate=B,y.pointLightShadows.needsUpdate=B,y.spotLights.needsUpdate=B,y.spotLightShadows.needsUpdate=B,y.rectAreaLights.needsUpdate=B,y.hemisphereLights.needsUpdate=B}function jh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(y,B,q){const G=X.get(y);G.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),X.get(y.texture).__webglTexture=B,X.get(y.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:q,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,B){const q=X.get(y);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(y,B=0,q=0){Y=y,$=B,V=q;let G=null,H=!1,ve=!1;if(y){const xe=X.get(y);if(xe.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(F.FRAMEBUFFER,xe.__webglFramebuffer),j.copy(y.viewport),re.copy(y.scissor),Fe=y.scissorTest,_.viewport(j),_.scissor(re),_.setScissorTest(Fe),te=-1;return}else if(xe.__webglFramebuffer===void 0)K.setupRenderTarget(y);else if(xe.__hasExternalTextures)K.rebindTextures(y,X.get(y.texture).__webglTexture,X.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ge=y.depthTexture;if(xe.__boundDepthTexture!==Ge){if(Ge!==null&&X.has(Ge)&&(y.width!==Ge.image.width||y.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(y)}}const we=y.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ve=!0);const De=X.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(De[B])?G=De[B][q]:G=De[B],H=!0):y.samples>0&&K.useMultisampledRTT(y)===!1?G=X.get(y).__webglMultisampledFramebuffer:Array.isArray(De)?G=De[q]:G=De,j.copy(y.viewport),re.copy(y.scissor),Fe=y.scissorTest}else j.copy(ye).multiplyScalar(U).floor(),re.copy(tt).multiplyScalar(U).floor(),Fe=He;if(q!==0&&(G=O),_.bindFramebuffer(F.FRAMEBUFFER,G)&&_.drawBuffers(y,G),_.viewport(j),_.scissor(re),_.setScissorTest(Fe),H){const xe=X.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,xe.__webglTexture,q)}else if(ve){const xe=B;for(let we=0;we<y.textures.length;we++){const De=X.get(y.textures[we]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+we,De.__webglTexture,q,xe)}}else if(y!==null&&q!==0){const xe=X.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,xe.__webglTexture,q)}te=-1},this.readRenderTargetPixels=function(y,B,q,G,H,ve,Te,xe=0){if(!(y&&y.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=X.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Te!==void 0&&(we=we[Te]),we){_.bindFramebuffer(F.FRAMEBUFFER,we);try{const De=y.textures[xe],Ge=De.format,We=De.type;if(y.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+xe),!w.textureFormatReadable(Ge)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(We)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=y.width-G&&q>=0&&q<=y.height-H&&F.readPixels(B,q,G,H,pe.convert(Ge),pe.convert(We),ve)}finally{const De=Y!==null?X.get(Y).__webglFramebuffer:null;_.bindFramebuffer(F.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(y,B,q,G,H,ve,Te,xe=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=X.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Te!==void 0&&(we=we[Te]),we)if(B>=0&&B<=y.width-G&&q>=0&&q<=y.height-H){_.bindFramebuffer(F.FRAMEBUFFER,we);const De=y.textures[xe],Ge=De.format,We=De.type;if(y.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+xe),!w.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!w.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ie=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ie),F.bufferData(F.PIXEL_PACK_BUFFER,ve.byteLength,F.STREAM_READ),F.readPixels(B,q,G,H,pe.convert(Ge),pe.convert(We),0);const ot=Y!==null?X.get(Y).__webglFramebuffer:null;_.bindFramebuffer(F.FRAMEBUFFER,ot);const At=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Uf(F,At,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ie),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ve),F.deleteBuffer(Ie),F.deleteSync(At),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,B=null,q=0){const G=Math.pow(2,-q),H=Math.floor(y.image.width*G),ve=Math.floor(y.image.height*G),Te=B!==null?B.x:0,xe=B!==null?B.y:0;K.setTexture2D(y,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,Te,xe,H,ve),_.unbindTexture()},this.copyTextureToTexture=function(y,B,q=null,G=null,H=0,ve=0){let Te,xe,we,De,Ge,We,Ie,ot,At;const Tt=y.isCompressedTexture?y.mipmaps[ve]:y.image;if(q!==null)Te=q.max.x-q.min.x,xe=q.max.y-q.min.y,we=q.isBox3?q.max.z-q.min.z:1,De=q.min.x,Ge=q.min.y,We=q.isBox3?q.min.z:0;else{const wt=Math.pow(2,-H);Te=Math.floor(Tt.width*wt),xe=Math.floor(Tt.height*wt),y.isDataArrayTexture?we=Tt.depth:y.isData3DTexture?we=Math.floor(Tt.depth*wt):we=1,De=0,Ge=0,We=0}G!==null?(Ie=G.x,ot=G.y,At=G.z):(Ie=0,ot=0,At=0);const dt=pe.convert(B.format),zt=pe.convert(B.type);let Ee;B.isData3DTexture?(K.setTexture3D(B,0),Ee=F.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(K.setTexture2DArray(B,0),Ee=F.TEXTURE_2D_ARRAY):(K.setTexture2D(B,0),Ee=F.TEXTURE_2D),_.activeTexture(F.TEXTURE0),_.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),_.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),_.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);const an=_.getParameter(F.UNPACK_ROW_LENGTH),Qe=_.getParameter(F.UNPACK_IMAGE_HEIGHT),dn=_.getParameter(F.UNPACK_SKIP_PIXELS),bn=_.getParameter(F.UNPACK_SKIP_ROWS),ei=_.getParameter(F.UNPACK_SKIP_IMAGES);_.pixelStorei(F.UNPACK_ROW_LENGTH,Tt.width),_.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Tt.height),_.pixelStorei(F.UNPACK_SKIP_PIXELS,De),_.pixelStorei(F.UNPACK_SKIP_ROWS,Ge),_.pixelStorei(F.UNPACK_SKIP_IMAGES,We);const Yi=y.isDataArrayTexture||y.isData3DTexture,ht=B.isDataArrayTexture||B.isData3DTexture;if(y.isDepthTexture){const wt=X.get(y),ti=X.get(B),mt=X.get(wt.__renderTarget),ni=X.get(ti.__renderTarget);_.bindFramebuffer(F.READ_FRAMEBUFFER,mt.__webglFramebuffer),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let Zi=0;Zi<we;Zi++)Yi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,X.get(y).__webglTexture,H,We+Zi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,X.get(B).__webglTexture,ve,At+Zi)),F.blitFramebuffer(De,Ge,Te,xe,Ie,ot,Te,xe,F.DEPTH_BUFFER_BIT,F.NEAREST);_.bindFramebuffer(F.READ_FRAMEBUFFER,null),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(H!==0||y.isRenderTargetTexture||X.has(y)){const wt=X.get(y),ti=X.get(B);_.bindFramebuffer(F.READ_FRAMEBUFFER,k),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,L);for(let mt=0;mt<we;mt++)Yi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,wt.__webglTexture,H,We+mt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,wt.__webglTexture,H),ht?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ti.__webglTexture,ve,At+mt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ti.__webglTexture,ve),H!==0?F.blitFramebuffer(De,Ge,Te,xe,Ie,ot,Te,xe,F.COLOR_BUFFER_BIT,F.NEAREST):ht?F.copyTexSubImage3D(Ee,ve,Ie,ot,At+mt,De,Ge,Te,xe):F.copyTexSubImage2D(Ee,ve,Ie,ot,De,Ge,Te,xe);_.bindFramebuffer(F.READ_FRAMEBUFFER,null),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ht?y.isDataTexture||y.isData3DTexture?F.texSubImage3D(Ee,ve,Ie,ot,At,Te,xe,we,dt,zt,Tt.data):B.isCompressedArrayTexture?F.compressedTexSubImage3D(Ee,ve,Ie,ot,At,Te,xe,we,dt,Tt.data):F.texSubImage3D(Ee,ve,Ie,ot,At,Te,xe,we,dt,zt,Tt):y.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ve,Ie,ot,Te,xe,dt,zt,Tt.data):y.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ve,Ie,ot,Tt.width,Tt.height,dt,Tt.data):F.texSubImage2D(F.TEXTURE_2D,ve,Ie,ot,Te,xe,dt,zt,Tt);_.pixelStorei(F.UNPACK_ROW_LENGTH,an),_.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Qe),_.pixelStorei(F.UNPACK_SKIP_PIXELS,dn),_.pixelStorei(F.UNPACK_SKIP_ROWS,bn),_.pixelStorei(F.UNPACK_SKIP_IMAGES,ei),ve===0&&B.generateMipmaps&&F.generateMipmap(Ee),_.unbindTexture()},this.initRenderTarget=function(y){X.get(y).__webglFramebuffer===void 0&&K.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?K.setTextureCube(y,0):y.isData3DTexture?K.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?K.setTexture2DArray(y,0):K.setTexture2D(y,0),_.unbindTexture()},this.resetState=function(){$=0,V=0,Y=null,_.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}}var bv=Object.defineProperty,Tv=(t,e,n)=>e in t?bv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Z=(t,e,n)=>Tv(t,typeof e!="symbol"?e+"":e,n);function Kt(t,e,n){const i=ut(t)?t:e,r=n(i,e.value,e.editorMin,e.editorMax,e.curve);return ut(t)?r:{...r,mode:e.mode,value:e.value,min:e.min,max:e.max}}function ft(t,e,n){return{mode:"constant",value:t,min:t,max:t,curve:[{x:0,y:t},{x:1,y:t}],curveB:[{x:0,y:t},{x:1,y:t}],editorMin:e,editorMax:n}}function $n(t,e,n,i){return{mode:"curve",value:t,min:Math.min(t,e),max:Math.max(t,e),curve:[{x:0,y:t},{x:1,y:e}],curveB:[{x:0,y:t},{x:1,y:e}],editorMin:n,editorMax:i}}function ao(t,e){return{mode:"blend",colorStops:[{position:0,color:[t[0],t[1],t[2]]},{position:1,color:[e[0],e[1],e[2]]}],alphaStops:[{position:0,alpha:t[3]},{position:1,alpha:e[3]}]}}function va(t,e,n,i){const r=ut(t)?t:{},s=je(oe(r.min,e.min),n,i),a=je(oe(r.max,e.max),n,i);return{min:Math.min(s,a),max:Math.max(s,a)}}function Av(t,e,n,i,r=!1){if(!Array.isArray(t))return[...e];const s=je(oe(t[0],e[0]),n,i),a=je(oe(t[1],e[1]),n,i);return r?[Math.round(s),Math.round(a)]:[s,a]}function is(t,e,n,i){return Array.isArray(t)?[je(oe(t[0],e[0]),n,i),je(oe(t[1],e[1]),n,i),je(oe(t[2],e[2]),n,i)]:[...e]}function Yd(t,e,n,i){return Array.isArray(t)?[je(oe(t[0],e[0]),n,i),je(oe(t[1],e[1]),n,i),je(oe(t[2],e[2]),n,i),je(oe(t[3],e[3]),n,i)]:[...e]}function _i(t,e){return typeof t=="string"?t:e}function oe(t,e){return typeof t=="number"&&Number.isFinite(t)?t:e}function je(t,e,n){return Math.min(n,Math.max(e,t))}function ut(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}var mi="sprite-master";function wv(t){if(!ut(t))return null;const e=_i(t.path,"");return e?{type:"texture",id:_i(t.id,e),path:e}:null}function Cv(t){const e=ut(t)?t:{},n=ut(e.paramOverrides)?e.paramOverrides:{},i={};for(const[r,s]of Object.entries(n))if(typeof s=="number"||typeof s=="boolean")i[r]=s;else if(typeof s=="string")i[r]=s;else if(Array.isArray(s)&&s.every(a=>typeof a=="number")){const a=s;i[r]=[a[0]??0,a[1]??0,a[2]??0,a[3]??0]}return{id:_i(e.id,"material-instance"),shaderId:_i(e.shaderId,mi),paramOverrides:i,mainTex:wv(e.mainTex)}}function Zd(t){return ut(t)?Cv(t):null}function Rv(t){const e={id:t.id,shaderId:t.shaderId};if(Object.keys(t.paramOverrides).length>0){const n={};for(const i of Object.keys(t.paramOverrides).sort())n[i]=t.paramOverrides[i];e.paramOverrides=n}return t.mainTex&&(e.mainTex=t.mainTex),e}var Pv=["velocity","velocityOverLifetime","limitVelocityOverLifetime","inheritVelocity","color","size","rotation","lifetimeByEmitterSpeed","forceOverLifetime","colorBySpeed","sizeBySpeed","rotationBySpeed","externalForces","noise","collision","triggers","subEmitters","textureSheetAnimation","lights","trails","customData"],Dv=new Set(["velocity","color","size","rotation"]);function Iv(){return jc(t=>Dv.has(t))}function Lv(){return jc(()=>!1)}function Fv(t,e){const n=ut(t)?t:{};return jc(i=>typeof n[i]=="boolean"?n[i]:e[i])}function Qc(){return{velocityOverLifetime:{space:"local",linear:{x:ft(0,-32,32),y:ft(0,-32,32),z:ft(0,-32,32)},orbital:{x:ft(0,-32,32),y:ft(0,-32,32),z:ft(0,-32,32)},orbitalOffset:{x:ft(0,-32,32),y:ft(0,-32,32),z:ft(0,-32,32)},radial:ft(0,-32,32),speedModifier:ft(1,0,4)},limitVelocityOverLifetime:{separateAxes:!1,speed:$n(16,16,0,120),x:$n(16,16,0,120),y:$n(16,16,0,120),z:$n(16,16,0,120),dampen:.5,drag:ft(0,0,12),multiplyBySize:!1,space:"local"},inheritVelocity:{mode:"initial",multiplier:$n(0,0,-4,4)},lifetimeByEmitterSpeed:{speedRange:{min:0,max:16},multiplier:$n(1,1,0,3)},forceOverLifetime:{force:[0,0,0],randomized:[0,0,0],multiplier:ft(1,-10,10)},colorBySpeed:{speedRange:{min:0,max:16},gradient:ao([1,1,1,1],[1,.65,.2,1]),blend:0},sizeBySpeed:{speedRange:{min:0,max:16},multiplier:$n(1,1,0,4),blend:1},rotationBySpeed:{speedRange:{min:0,max:16},angularVelocity:$n(0,0,-24,24),blend:1},externalForces:{wind:[0,0,0],gravityMultiplier:ft(1,-4,4),drag:ft(0,0,12),vortexStrength:0},noise:{mode:"sine",strength:ft(0,0,8),frequency:1.5,speed:1,scroll:[1,0,0],octaves:2,damping:.5},collision:{mode:"none",planeY:0,radius:0,bounce:.35,dampen:.45,killBelow:20},triggers:{birthEvent:"",deathEvent:"",normalizedTime:1,oneShot:!0},subEmitters:{birth:lo(),collision:lo(),death:lo()},textureSheetAnimation:{tiles:[1,1],startFrame:0,endFrame:255,frameOverTime:$n(0,0,0,64),cycles:1,randomStartFrame:!1},lights:{color:[1,.85,.55],intensity:ft(0,0,5),radius:ft(1,0,32),additive:!0},trails:{material:null,depthTest:!0,depthWrite:!1,mode:"particleHistory",ratio:1,lifetime:ft(.5,0,8),length:ft(0,0,12),width:ft(1,.01,4),widthOverTrail:ft(1,0,1),color:null,colorOverLifetime:ao([1,1,1,1],[1,1,1,1]),colorOverTrail:ao([1,1,1,1],[1,1,1,1]),inheritColor:!0,textureMode:"stretch",texture:null,minVertexDistance:.02,worldSpace:!0},customData:{label:"",channels:Kd()}}}function Nv(t,e,n){const i=ut(t)?t:{},r=Qc();return{velocityOverLifetime:Uv(i.velocityOverLifetime,r.velocityOverLifetime,e),limitVelocityOverLifetime:Ov(i.limitVelocityOverLifetime,r.limitVelocityOverLifetime,e),inheritVelocity:Bv(i.inheritVelocity,r.inheritVelocity,e),lifetimeByEmitterSpeed:Vv(i.lifetimeByEmitterSpeed,r.lifetimeByEmitterSpeed,e),forceOverLifetime:zv(i.forceOverLifetime,r.forceOverLifetime,e),colorBySpeed:Gv(i.colorBySpeed,r.colorBySpeed,n),sizeBySpeed:Hv(i.sizeBySpeed,r.sizeBySpeed,e),rotationBySpeed:kv(i.rotationBySpeed,r.rotationBySpeed,e),externalForces:Wv(i.externalForces,r.externalForces,e),noise:Xv(i.noise,r.noise,e),collision:$v(i.collision,r.collision),triggers:qv(i.triggers,r.triggers),subEmitters:Yv(i.subEmitters,r.subEmitters),textureSheetAnimation:Zv(i.textureSheetAnimation,r.textureSheetAnimation,e),lights:Kv(i.lights,r.lights,e),trails:Jv(i.trails,r.trails,e,n),customData:Qv(i.customData,r.customData,e)}}function _a(t,e){return je((e-t.min)/Math.max(1e-6,t.max-t.min),0,1)}function oo(t,e,n){const i=ut(t)?t:{};return{x:Kt(i.x,e.x,n),y:Kt(i.y,e.y,n),z:Kt(i.z,e.z,n)}}function Uv(t,e,n){const i=ut(t)?t:{};return{space:i.space==="world"?"world":"local",linear:oo(i.linear,e.linear,n),orbital:oo(i.orbital,e.orbital,n),orbitalOffset:oo(i.orbitalOffset,e.orbitalOffset,n),radial:Kt(i.radial,e.radial,n),speedModifier:Kt(i.speedModifier,e.speedModifier,n)}}function Ov(t,e,n){const i=ut(t)?t:{};return{separateAxes:typeof i.separateAxes=="boolean"?i.separateAxes:e.separateAxes,speed:Kt(i.speed,e.speed,n),x:Kt(i.x,e.x,n),y:Kt(i.y,e.y,n),z:Kt(i.z,e.z,n),dampen:je(oe(i.dampen,e.dampen),0,1),drag:n(i.drag,0,0,12),multiplyBySize:typeof i.multiplyBySize=="boolean"?i.multiplyBySize:e.multiplyBySize,space:i.space==="world"?"world":"local"}}function Bv(t,e,n){const i=ut(t)?t:{};return{mode:i.mode==="current"?"current":"initial",multiplier:Kt(i.multiplier,e.multiplier,n)}}function Vv(t,e,n){const i=ut(t)?t:{};return{speedRange:va(i.speedRange,e.speedRange,0,80),multiplier:Kt(i.multiplier,e.multiplier,n)}}function zv(t,e,n){const i=ut(t)?t:{};return{force:is(i.force,e.force,-160,160),randomized:is(i.randomized,e.randomized,0,160),multiplier:n(i.multiplier,1,-10,10)}}function Gv(t,e,n){const i=ut(t)?t:{};return{speedRange:va(i.speedRange,e.speedRange,0,80),gradient:n(i.gradient,[1,1,1,1],[1,.65,.2,1]),blend:je(oe(i.blend,e.blend),0,1)}}function Hv(t,e,n){const i=ut(t)?t:{};return{speedRange:va(i.speedRange,e.speedRange,0,80),multiplier:Kt(i.multiplier,e.multiplier,n),blend:je(oe(i.blend,e.blend),0,1)}}function kv(t,e,n){const i=ut(t)?t:{};return{speedRange:va(i.speedRange,e.speedRange,0,80),angularVelocity:Kt(i.angularVelocity,e.angularVelocity,n),blend:je(oe(i.blend,e.blend),0,1)}}function Wv(t,e,n){const i=ut(t)?t:{};return{wind:is(i.wind,e.wind,-160,160),gravityMultiplier:n(i.gravityMultiplier,1,-4,4),drag:n(i.drag,0,0,12),vortexStrength:je(oe(i.vortexStrength,e.vortexStrength),-80,80)}}function Xv(t,e,n){const i=ut(t)?t:{};return{mode:i.mode==="curl"?"curl":"sine",strength:n(i.strength,0,0,8),frequency:je(oe(i.frequency,e.frequency),0,32),speed:je(oe(i.speed,e.speed),-16,16),scroll:is(i.scroll,e.scroll,-16,16),octaves:Math.round(je(oe(i.octaves,e.octaves),1,6)),damping:je(oe(i.damping,e.damping),0,1)}}function $v(t,e){const n=ut(t)?t:{};return{mode:n.mode==="plane"?"plane":"none",planeY:je(oe(n.planeY,e.planeY),-100,100),radius:je(oe(n.radius,e.radius),0,16),bounce:je(oe(n.bounce,e.bounce),0,1),dampen:je(oe(n.dampen,e.dampen),0,1),killBelow:je(oe(n.killBelow,e.killBelow),0,200)}}function qv(t,e){const n=ut(t)?t:{};return{birthEvent:_i(n.birthEvent,e.birthEvent),deathEvent:_i(n.deathEvent,e.deathEvent),normalizedTime:je(oe(n.normalizedTime,e.normalizedTime),0,1),oneShot:typeof n.oneShot=="boolean"?n.oneShot:e.oneShot}}function Yv(t,e){const n=ut(t)?t:{};return{birth:co(n.birth,e.birth),collision:co(n.collision,e.collision),death:co(n.death,e.death)}}function co(t,e){const n=ut(t)?t:{};return{effectFile:_i(n.effectFile,e.effectFile),probability:je(oe(n.probability,e.probability),0,1),inheritColor:typeof n.inheritColor=="boolean"?n.inheritColor:e.inheritColor,inheritSize:typeof n.inheritSize=="boolean"?n.inheritSize:e.inheritSize}}function Zv(t,e,n){const i=ut(t)?t:{};return{tiles:Av(i.tiles,e.tiles,1,16,!0),startFrame:Math.round(je(oe(i.startFrame,e.startFrame),0,255)),endFrame:Math.round(je(oe(i.endFrame,e.endFrame),0,255)),frameOverTime:Kt(i.frameOverTime,e.frameOverTime,n),cycles:je(oe(i.cycles,e.cycles),0,32),randomStartFrame:typeof i.randomStartFrame=="boolean"?i.randomStartFrame:e.randomStartFrame}}function Kv(t,e,n){const i=ut(t)?t:{};return{color:is(i.color,e.color,0,1),intensity:n(i.intensity,0,0,5),radius:n(i.radius,1,0,32),additive:typeof i.additive=="boolean"?i.additive:e.additive}}function Jv(t,e,n,i){const r=ut(t)?t:{},s=r.color===null||r.color===void 0?null:i(r.color,[1,1,1,1],[1,1,1,0]);return{material:Zd(r.material),depthTest:typeof r.depthTest=="boolean"?r.depthTest:!0,depthWrite:typeof r.depthWrite=="boolean"?r.depthWrite:!1,mode:r.mode==="ribbon"?"ribbon":"particleHistory",ratio:je(oe(r.ratio,e.ratio),0,1),lifetime:n(r.lifetime,.5,0,8),length:n(r.length,0,0,12),width:n(r.width,1,.01,4),widthOverTrail:n(r.widthOverTrail,1,0,1),color:s,colorOverLifetime:i(r.colorOverLifetime,[1,1,1,1],[1,1,1,1]),colorOverTrail:i(r.colorOverTrail??s,[1,1,1,1],[1,1,1,1]),inheritColor:typeof r.inheritColor=="boolean"?r.inheritColor:e.inheritColor,textureMode:r.textureMode==="tile"?"tile":"stretch",texture:typeof r.texture=="string"&&r.texture.trim()?r.texture.trim():null,minVertexDistance:je(oe(r.minVertexDistance,e.minVertexDistance),0,1),worldSpace:typeof r.worldSpace=="boolean"?r.worldSpace:e.worldSpace}}function Qv(t,e,n){const i=ut(t)?t:{},r=Array.isArray(i.channels)?i.channels:null,s=r?null:Yd(i.vector1,[0,0,0,0],-1e5,1e5),a=e.channels??Kd(),o=[0,1,2,3].map(c=>{const l=r?a[c]:ft((s==null?void 0:s[c])??0,-1,1);return Kt(r==null?void 0:r[c],l,n)});return{label:_i(i.label,e.label),channels:o}}function Kd(){return[ft(0,-1,1),ft(0,-1,1),ft(0,-1,1),ft(0,-1,1)]}function jc(t){return Pv.reduce((e,n)=>(e[n]=t(n),e),{})}function lo(){return{effectFile:"",probability:1,inheritColor:!0,inheritSize:!0}}var Tr=1e5,la=1/3,di=1e3,Jd=1,jv=8,wu=new WeakMap;function el(t){const e=wu.get(t);if(e)return e;const n=o_(t)?t:Tc(t,[{x:0,y:0},{x:1,y:0}]),i=c_(n),r=[];for(let a=0;a<n.length-1;a++){const o=n[a],c=n[a+1],l=Math.max(1e-6,c.x-o.x),u=i_(o),h=n_(c),d=o.y+t_(o,i[a])*l*u,f=c.y-e_(c,i[a+1])*l*h;r.push({start:o.x,end:c.x,dx:l,x1:o.x+l*u,x2:c.x-l*h,y0:o.y,y1:d,y2:f,y3:c.y,linearX:u===la&&h===la,c1:3*(d-o.y),c2:3*(o.y-2*d+f),c3:-o.y+3*d-3*f+c.y})}const s={firstY:n[0].y,lastY:n[n.length-1].y,segments:r};return Object.isFrozen(t)&&t.every(a=>Object.isFrozen(a))&&wu.set(t,s),s}function bc(t,e){const n=us((e-t.start)/t.dx,0,1),i=t.linearX?n:r_(t.start,t.x1,t.x2,t.end,e,n);return fr(t.y0,t.y1,t.y2,t.y3,i)}function Qd(t,e){if(e<=0)return t.firstY;if(e>=1)return t.lastY;const n=t.segments;if(n.length<=jv){for(const a of n)if(e<=a.end)return bc(a,e);return t.lastY}let i=0,r=n.length;for(;i<r;){const a=i+r>>>1;n[a].end<e?i=a+1:r=a}const s=n[i];return s?bc(s,e):t.lastY}function vi(t,e){return Qd(el(t),us(e,0,1))}function e_(t,e){return t.slopeIn??t.slope??e}function t_(t,e){return t.slopeOut??t.slope??e}function n_(t){return t.weightIn??la}function i_(t){return t.weightOut??la}function r_(t,e,n,i,r,s){let a=us(s,0,1);for(let p=0;p<6;p++){const x=fr(t,e,n,i,a)-r,g=s_(t,e,n,i,a);if(Math.abs(x)<1e-6)return a;if(Math.abs(g)<1e-6)break;const m=a-x/g;if(m<0||m>1)break;a=m}let o=0,c=1,l=1/0,u=0,h=fr(t,e,n,i,u)-r;for(let p=1;p<=24;p++){const x=p/24,g=fr(t,e,n,i,x)-r,m=Math.abs(g);if(m<l&&(l=m,o=u,c=x),h===0||g===0||h<0&&g>0||h>0&&g<0){o=u,c=x;break}u=x,h=g}let d=o,f=c;for(let p=0;p<24;p++){const x=(d+f)*.5,g=fr(t,e,n,i,x)-r,m=fr(t,e,n,i,d)-r;if(Math.abs(g)<1e-6)return x;m<=0&&g>=0||m>=0&&g<=0?f=x:d=x}return(d+f)*.5}function fr(t,e,n,i,r){const s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function s_(t,e,n,i,r){const s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function Cu(t,e,n=Tr){return{...t,y:Li(t.y*e,-n,n),...typeof t.slope=="number"?{slope:Li(t.slope*e,-di,di)}:{},...typeof t.slopeIn=="number"?{slopeIn:Li(t.slopeIn*e,-di,di)}:{},...typeof t.slopeOut=="number"?{slopeOut:Li(t.slopeOut*e,-di,di)}:{}}}function a_(t,e=Tr){if(!u_(t))return;const n={x:us(Iu(t.x,0),0,1),y:Li(Iu(t.y,0),-e,e)},i=uo(t.slope),r=uo(t.slopeIn),s=uo(t.slopeOut),a=Ru(t.weightIn),o=Ru(t.weightOut);return i!==void 0&&(n.slope=i),r!==void 0&&(n.slopeIn=r),s!==void 0&&(n.slopeOut=s),a!==void 0&&(n.weightIn=a),o!==void 0&&(n.weightOut=o),n}function uo(t){return typeof t=="number"&&Number.isFinite(t)?Li(t,-di,di):void 0}function Ru(t){return typeof t=="number"&&Number.isFinite(t)?Li(t,0,Jd):void 0}function Tc(t,e,n=Tr){const r=(Array.isArray(t)&&t.length>0?t:e).map(s=>a_(s,n)).filter(s=>!!s).sort((s,a)=>s.x-a.x);if(r.length===0)return[{x:0,y:0},{x:1,y:0}];if(r.length===1){const s=r[0];return[{...s,x:0},{...s,x:1}]}return r[0].x=0,r[r.length-1].x=1,r}function o_(t){if(t.length<2)return!1;const e=t[0],n=t[t.length-1];if(e.x!==0||n.x!==1)return!1;let i=-1/0;for(const r of t){if(!Number.isFinite(r.x)||!Number.isFinite(r.y)||!ho(r.slope)||!ho(r.slopeIn)||!ho(r.slopeOut)||!Pu(r.weightIn)||!Pu(r.weightOut)||r.x<i||r.x<0||r.x>1)return!1;i=r.x}return!0}function ho(t){return t===void 0||typeof t=="number"&&Number.isFinite(t)}function Pu(t){return t===void 0||typeof t=="number"&&Number.isFinite(t)&&t>=0&&t<=Jd}var Du=new WeakMap;function c_(t){let e=Du.get(t);return e||(e=l_(t),Du.set(t,e)),e}function l_(t){const e=t.length;if(e===0)return[];if(e===1){const s=t[0];return[typeof s.slope=="number"&&Number.isFinite(s.slope)?s.slope:0]}const n=t.map(s=>typeof s.slope=="number"&&Number.isFinite(s.slope)),i=new Array(e-1);for(let s=0;s<e-1;s++){const a=t[s],o=t[s+1];i[s]=(o.y-a.y)/Math.max(1e-6,o.x-a.x)}const r=new Array(e);for(let s=0;s<e;s++){if(n[s]){r[s]=t[s].slope;continue}if(s===0)r[s]=i[0];else if(s===e-1)r[s]=i[e-2];else{const a=i[s-1],o=i[s];r[s]=a*o<=0?0:(a+o)*.5}}for(let s=0;s<e-1;s++){const a=i[s];if(a===0){n[s]||(r[s]=0),n[s+1]||(r[s+1]=0);continue}const o=r[s]/a,c=r[s+1]/a,l=o*o+c*c;if(l>9){const u=3/Math.sqrt(l);n[s]||(r[s]=u*o*a),n[s+1]||(r[s+1]=u*c*a)}}return r}function Iu(t,e){return typeof t=="number"&&Number.isFinite(t)?t:e}function Li(t,e,n){return us(Number.isFinite(t)?t:e,e,n)}function us(t,e,n){return Math.min(n,Math.max(e,t))}function u_(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}var d_=64;function Lu(t,e){const n=el(t),i=Math.max(1,Math.ceil(e*d_)),r=e/i;let s=(n.firstY+Qd(n,e))*.5,a=1;for(const o of n.segments){if(a>=i)break;let c=Math.min(i-1,Math.floor(o.end/r));if(c>=a&&e*c/i>o.end&&c--,c+1<i&&e*(c+1)/i<=o.end&&c++,!(c<a)){if(o.linearX&&o.end-o.start>=1e-6)s+=h_(o,e*a/i,r,c-a+1);else for(let l=a;l<=c;l++)s+=bc(o,e*l/i);a=c+1}}return s*r}function h_(t,e,n,i){const r=(e-t.start)/t.dx,s=n/t.dx,a=t.y0+r*(t.c1+r*(t.c2+r*t.c3)),o=s*(t.c1+r*(2*t.c2+3*r*t.c3)),c=s*s*(t.c2+3*r*t.c3),l=s*s*s*t.c3,u=i-1,h=u*i/2,d=u*i*(2*u+1)/6;return i*a+o*h+c*d+l*h*h}function f_(t,e,n){if(t.mode==="random")return t.min+(t.max-t.min)*n;const i=t.multiplier??1;if(t.mode==="curve")return vi(t.curve,e)*i;if(t.mode==="randomCurve"){const r=vi(t.curve,e),s=vi(t.curveB,e);return(r+(s-r)*n)*i}return t.value}function Se(t,e,n,i){const r=t.xAxis==="loopAge"&&i!==void 0?i:e,s=rs(r,0,1),a=rs(n,0,1);return f_(t,s,a)}function p_(t,e,n,i){const r=t.xAxis==="loopAge"&&i!==void 0?i:e,s=rs(r,0,1),a=rs(n,0,1);if(s<=0)return 0;if(t.mode==="random")return(t.min+(t.max-t.min)*a)*s;if(t.mode==="constant")return t.value*s;const o=Lu(t.curve,s),c=t.mode==="randomCurve"?Lu(t.curveB,s):o;return(o+(c-o)*a)*(t.multiplier??1)}function m_(t,e,n,i){const r=t.xAxis==="loopAge"&&i!==void 0?i:e,s=rs(r,0,1);return s<=0?Se(t,e,n,i):p_(t,e,n,i)/s}function rs(t,e,n){return Math.min(n,Math.max(e,t))}var g_=new WeakSet;function Fu(t){return typeof t=="object"&&t!==null&&g_.has(t)}var x_=class{constructor(t,e){Z(this,"clone",e),Z(this,"value"),this.value=this.acquire(t)}replace(t){this.value=this.acquire(t)}mutable(){return Fu(this.value)&&(this.value=this.clone(this.value)),this.value}acquire(t){if(Fu(t))return t;const e=this.clone(t);return jd(e),e}};function jd(t){for(const[e,n]of Object.entries(t))if(!(!n||typeof n!="object"))if((e==="curve"||e==="curveB")&&Array.isArray(n)){for(const i of n)Object.freeze(i);Object.freeze(n),el(n)}else jd(n)}var v_=50,__=2**v_;function M_(t){const e=_t(t)&&t.version===1?t:{};return{version:1,enabled:e.enabled!==!1&&(e.mode==="emitter"||e.mode==="particles"),useParticleColor:e.useParticleColor===!0,mode:e.mode==="emitter"||e.mode==="particles"?e.mode:"disabled",color:Gi(e.color,[1,.45,.08,1],[1,.08,.01,0]),intensity:vt(e.intensity,8,0,1e4),radius:vt(e.radius,3,.001,1e4),maxLights:typeof e.maxLights=="number"&&Number.isFinite(e.maxLights)?Math.max(0,Math.min(4096,Math.floor(e.maxLights))):null}}var Wt=18,tn=3,eh=1,S_=2,th=8,y_=16,lt=Math.PI*2,E_=256,Kr=1e-6,Vr=1,Nu=2,b_=4096,T_=512,A_=4,w_=30,C_=2,R_=1.15,Ma=1e5,nh=Iv(),P_=Lv(),it={maxParticles:256,duration:1.2,modules:{...nh},spawn:{rate:80,rateValue:Oe(80,0,3e3),rateOverDistance:0,rateOverDistanceValue:Oe(0,0,1e3),bursts:[{time:0,count:18,cycles:1,interval:.1,probability:1}],shape:"circle",radius:.35,radiusValue:Oe(.35,0,24),box:[.6,.2,.6],angle:25,radiusThickness:1,arc:360,arcSpread:0,arcSpeedValue:Oe(0,-360,360),length:5,position:[0,0,0],rotation:[0,0,0],scale:[1,1,1],randomDirectionAmount:0,sphericalDirectionAmount:0,randomPositionAmount:0},initializeParticle:{lifetime:zr(.45,.85,.02,30),color:ih(),size:Oe(1,0,24),size3D:{x:Oe(1,0,24),y:Oe(1,0,24),z:Oe(1,0,24)},startSizeSeparateAxes:!1,rotation:zr(0,lt,-lt,lt),rotation3D:{x:Oe(0,-lt,lt),y:Oe(0,-lt,lt),z:zr(0,lt,-lt,lt)},startRotationSeparateAxes:!1,angularVelocitySeparateAxes:!1,angularVelocity:zr(-9,9,-24,24),angularVelocity3D:{x:Oe(0,-24,24),y:Oe(0,-24,24),z:zr(-9,9,-24,24)},velocity:{mode:"shapeDirection",min:[-.7,2.2,-.7],max:[.7,3.4,.7],speed:Oe(0,0,80)}},forces:{gravity:4.8,gravityValue:Oe(4.8,-80,80),drag:.05,dragValue:Oe(.05,0,12)},billboard:{sizeStart:.28,sizeEnd:.05,sizeValue:Gr(.28,.05,.001,24),sizeValueY:Gr(.28,.05,.001,24),softness:.4,pivot:[0,0]},mesh:{template:"triangleShard",sizeStart:.28,sizeEnd:.08,sizeValue:Gr(.28,.08,.001,24),sizeValueY:Gr(.28,.08,.001,24),sizeValueZ:Gr(.28,.08,.001,24),thickness:.5,pivot:[0,0,0]},color:{start:[.75,1,.48,.95],end:[.35,.75,.28,0],gradient:ua([.75,1,.48,.95],[.35,.75,.28,0])},advanced:Qc()};({...P_},Oe(24,0,3e3),Oe(0,0,1e3),Oe(0,0,24),Oe(0,-360,360)),Oe(1,.02,30),ih(),Oe(1,0,24),Oe(1,0,24),Oe(1,0,24),Oe(1,0,24),Oe(0,-lt,lt),Oe(0,-lt,lt),Oe(0,-lt,lt),Oe(0,-lt,lt),Oe(0,-24,24),Oe(0,-24,24),Oe(0,-24,24),Oe(0,-24,24),Oe(0,0,80),Oe(0,-80,80),Oe(0,0,12),Oe(.28,.001,24),Oe(.28,.001,24),Oe(.28,.001,24),Oe(.28,.001,24),Oe(.28,.001,24),ua([1,1,1,1],[1,1,1,1]),Qc();function Oe(t,e,n){return vt({mode:"constant",value:t},t,e,n)}function zr(t,e,n,i){return vt({mode:"random",min:t,max:e,value:(t+e)*.5},(t+e)*.5,n,i)}function Gr(t,e,n,i){return vt({mode:"curve",value:t,min:Math.min(t,e),max:Math.max(t,e),curve:[{x:0,y:t},{x:1,y:e}]},t,n,i)}function ua(t,e){return Gi({mode:"blend",colorStops:[{position:0,color:[t[0],t[1],t[2]]},{position:1,color:[e[0],e[1],e[2]]}],alphaStops:[{position:0,alpha:t[3]},{position:1,alpha:e[3]}]},t,e)}function ih(){const t=[1,1,1,1];return{mode:"constant",color:[...t],colorB:[...t],gradient:ua([...t],[...t]),gradientB:ua([...t],[...t]),alpha:Oe(1,0,1),intensity:Oe(1,0,16)}}function D_(t,e,n,i,r,s){const a=_e(e,0,1),o=_e(Se(t.alpha,n,e,i),0,1);return t.mode==="random"?(r[0]=t.color[0]+(t.colorB[0]-t.color[0])*a,r[1]=t.color[1]+(t.colorB[1]-t.color[1])*a,r[2]=t.color[2]+(t.colorB[2]-t.color[2])*a,r[3]=o,r):t.mode==="gradient"?(rn(t.gradient,a,r),r[3]=sn(t.gradient,a)*o,r):t.mode==="randomGradient"?(rn(t.gradient,a,r),r[3]=sn(t.gradient,a),rn(t.gradientB,a,s),s[3]=sn(t.gradientB,a),r[0]+=(s[0]-r[0])*a,r[1]+=(s[1]-r[1])*a,r[2]+=(s[2]-r[2])*a,r[3]=(r[3]+(s[3]-r[3])*a)*o,r):(r[0]=t.color[0],r[1]=t.color[1],r[2]=t.color[2],r[3]=o,r)}function Ac(t){const e=_t(t)?t:{},i=(Array.isArray(e.emitters)?e.emitters:[]).map((s,a)=>z_(s,a)),r=N_(e.timeline,i);return F_(e.timeline,i,r),{app:"vfx-editor",kind:"particle-effect",version:1,targetProfile:I_(e.targetProfile),id:ss(e.id,"particle-effect"),name:Ar(e.name,"Particle Effect"),timeline:r,emitters:i}}function I_(t){return t==="three-world-3d"||t==="portable"?t:"pixi-ui-2d"}function L_(t){return Ac(t)}function F_(t,e,n){if(n.groups.length>0||e.length<=3||_t(t)&&Array.isArray(t.groups)||e.some(r=>r.timeline.groupId))return;const i="track-group";n.groups.push({id:i,name:"Track Group",collapsed:!1,hidden:!1,locked:!1});for(let r=3;r<e.length;r++){const s=e[r];s&&(s.timeline={...s.timeline,groupId:i})}}function N_(t,e){const n=_t(t)?t:{},i=_e(Ce(n.frameRate,w_),1,240),r=U_(e),s=_e(Ce(n.duration,r),.05,Ma);return{frameRate:i,duration:s,loop:O_(n.loop,s),groups:B_(n.groups)}}function U_(t){let e=0;for(const i of t)e=Math.max(e,i.timeline.start+Math.max(.05,i.duration));const n=Math.max(e,C_)*R_;return _e(n,.05,Ma)}function O_(t,e){const n=_t(t)?t:{},i=e*.12,r=e*.62;let s=_e(Ce(n.start,i),0,e),a=_e(Ce(n.end,r),0,e);return a<=s&&(a=Math.min(e,s+.05),a<=s&&(s=Math.max(0,a-.05))),{enabled:n.enabled===!0,start:s,end:a}}function B_(t){if(!Array.isArray(t))return[];const e=[],n=new Set;for(let i=0;i<t.length;i++){const r=t[i];if(!_t(r))continue;const s=`track-group-${i+1}`;let a=ss(r.id,s),o=2;for(;n.has(a);)a=`${ss(r.id,s)}-${o}`,o++;n.add(a),e.push({id:a,name:Ar(r.name,`Track Group ${i+1}`),collapsed:r.collapsed===!0,hidden:r.hidden===!0,locked:r.locked===!0})}return e}function V_(t){const e=_t(t)?t:{},n=typeof e.groupId=="string"&&e.groupId.trim()?ss(e.groupId,"track-group"):null;return{start:_e(Ce(e.start,0),0,Ma),groupId:n,locked:e.locked===!0}}function z_(t,e){const n=_t(t)?t:{},i=it,r=G_(n.spawn);return{id:ss(n.id,`emitter-${e+1}`),name:Ar(n.name,`Emitter ${e+1}`),enabled:n.enabled!==!1,mode:n.mode==="mesh"?"mesh":"billboard",maxParticles:Math.round(_e(Ce(n.maxParticles,i.maxParticles),1,4096)),duration:_e(Ce(n.duration,i.duration),.05,Ma),loop:n.loop!==!1,timeline:V_(n.timeline),modules:Fv(n.modules,nh),..._t(n.lightEmission)&&n.lightEmission.version===1?{lightEmission:M_(n.lightEmission)}:{},spawn:r,initializeParticle:$_(n.initializeParticle,i.initializeParticle),forces:k_(n.forces),render:Y_(n.render,r.alignToDirection),billboard:sM(n.billboard),mesh:aM(n.mesh),color:lM(n.color),advanced:Nv(n.advanced,vt,Gi)}}function G_(t){const e=_t(t)?t:{},n=_e(Ce(e.rate,it.spawn.rate),0,3e3),i=_e(Ce(e.rateOverDistance,it.spawn.rateOverDistance),0,1e3),r=_e(Ce(e.radius,it.spawn.radius),0,24),s=e.shape==="point"||e.shape==="box"||e.shape==="cone"||e.shape==="sphere"||e.shape==="hemisphere"||e.shape==="mesh"?e.shape:e.shape==="circle"?"circle":it.spawn.shape;return{rate:n,rateValue:vt(e.rateValue,n,0,3e3),rateOverDistance:i,rateOverDistanceValue:vt(e.rateOverDistanceValue,i,0,1e3),bursts:H_(e,it.spawn.bursts),shape:s,radius:r,radiusValue:vt(e.radiusValue,r,0,24),box:Sn(e.box,it.spawn.box,0,48),angle:_e(Ce(e.angle,it.spawn.angle),0,90),radiusThickness:_e(Ce(e.radiusThickness,it.spawn.radiusThickness),0,1),arc:_e(Ce(e.arc,it.spawn.arc),0,360),arcMode:gM(e.arcMode),arcSpread:_e(Ce(e.arcSpread,it.spawn.arcSpread),0,1),arcSpeedValue:vt(e.arcSpeedValue,0,-360,360),length:_e(Ce(e.length,it.spawn.length),0,48),emitFrom:e.emitFrom==="volume"?"volume":"base",meshAsset:sh(e.meshAsset),meshEmitFrom:e.meshEmitFrom==="vertices"?"vertices":"surface",position:Sn(e.position,it.spawn.position,-100,100),rotation:Sn(e.rotation,it.spawn.rotation,-360,360),scale:Sn(e.scale,it.spawn.scale,0,100),simulationSpace:e.simulationSpace==="local"?"local":"world",alignToDirection:e.alignToDirection===!0,randomDirectionAmount:_e(Ce(e.randomDirectionAmount,it.spawn.randomDirectionAmount),0,1),sphericalDirectionAmount:_e(Ce(e.sphericalDirectionAmount,it.spawn.sphericalDirectionAmount),0,1),randomPositionAmount:_e(Ce(e.randomPositionAmount,it.spawn.randomPositionAmount),0,24)}}function H_(t,e=[]){return(Array.isArray(t.bursts)?t.bursts:Array.isArray(t.burstSchedules)&&t.burstSchedules.length>0?t.burstSchedules:Array.isArray(t.burstSchedule)?t.burstSchedule:e).map(i=>{if(!_t(i))return;const r=Math.round(_e(Ce(i.count,0),0,4096)),s=Math.round(_e(Ce(i.cycles,Ce(i.cycleCount,1)),1,256));if(!(r<=0||s<=0))return{time:_e(Ce(i.time,0),0,60),count:r,cycles:s,interval:_e(Ce(i.interval,Ce(i.repeatInterval,0)),0,60),probability:_e(Ce(i.probability,1),0,1)}}).filter(i=>!!i).slice(0,y_).sort((i,r)=>i.time-r.time||i.interval-r.interval)}function k_(t){const e=_t(t)?t:{},n=_e(Ce(e.gravity,it.forces.gravity),-80,80),i=_e(Ce(e.drag,it.forces.drag),0,12);return{gravity:n,gravityValue:vt(e.gravityValue,n,-80,80),drag:i,dragValue:vt(e.dragValue,i,0,12)}}var W_=new Set(["constant","random","gradient","randomGradient"]);function X_(t,e){const n=_t(t)?t:{},i=typeof n.mode=="string"&&W_.has(n.mode)?n.mode:e.mode,r=da(n.color,e.color,0,16),s=da(n.colorB,e.colorB,0,16),a=e.alpha??Oe((e.mode==="random",e.color[3]),0,1),o=i==="random"?{mode:"random",value:r[3],min:r[3],max:s[3],editorMin:0,editorMax:1,curve:[{x:0,y:r[3]},{x:1,y:r[3]}],curveB:[{x:0,y:s[3]},{x:1,y:s[3]}]}:{mode:"constant",value:i==="constant"?r[3]:1,min:i==="constant"?r[3]:1,max:i==="constant"?r[3]:1,editorMin:0,editorMax:1,curve:[{x:0,y:i==="constant"?r[3]:1},{x:1,y:i==="constant"?r[3]:1}],curveB:[{x:0,y:i==="constant"?r[3]:1},{x:1,y:i==="constant"?r[3]:1}]};return{mode:i,color:r,colorB:s,gradient:Gi(n.gradient,[r[0],r[1],r[2],r[3]],[s[0],s[1],s[2],s[3]]),gradientB:Gi(n.gradientB,[s[0],s[1],s[2],s[3]],[r[0],r[1],r[2],r[3]]),alpha:vt(n.alpha??o,gi(a),0,1),intensity:vt(n.intensity,gi(e.intensity),0,16,void 0,__)}}function $_(t,e){const n=_t(t)?t:{},i=vt(n.size,gi(e.size),0,24),r=vt(n.rotation,gi(e.rotation),-lt,lt),s=vt(n.angularVelocity,gi(e.angularVelocity),-24,24);return{lifetime:vt(n.lifetime,gi(e.lifetime),.02,30),color:X_(n.color,e.color),size:i,size3D:po(n.size3D,fo(i,i,i),0,24),startSizeSeparateAxes:typeof n.startSizeSeparateAxes=="boolean"?n.startSizeSeparateAxes:e.startSizeSeparateAxes??!1,rotation:r,rotation3D:po(n.rotation3D,fo(Oe(0,-lt,lt),Oe(0,-lt,lt),r),-lt,lt),startRotationSeparateAxes:typeof n.startRotationSeparateAxes=="boolean"?n.startRotationSeparateAxes:e.startRotationSeparateAxes??!1,angularVelocitySeparateAxes:typeof n.angularVelocitySeparateAxes=="boolean"?n.angularVelocitySeparateAxes:e.angularVelocitySeparateAxes??!1,angularVelocity:s,angularVelocity3D:po(n.angularVelocity3D,fo(Oe(0,-24,24),Oe(0,-24,24),s),-24,24),velocity:q_(n.velocity,e.velocity)}}function fo(t,e,n){return{x:t,y:e,z:n}}function po(t,e,n,i){const r=_t(t)?t:{};return{x:mo(r.x,e.x,n,i),y:mo(r.y,e.y,n,i),z:mo(r.z,e.z,n,i)}}function mo(t,e,n,i){return vt(t===void 0?e:t,gi(e),n,i,e.curve)}function q_(t,e){const n=_t(t)?t:{};return{mode:n.mode==="vector"||n.mode==="shapeDirection"?n.mode:e.mode,min:Sn(n.min,e.min,-1e5,1e5),max:Sn(n.max,e.max,-1e5,1e5),speed:vt(n.speed,gi(e.speed),0,80)}}function Y_(t,e=!1){const n=_t(t)?t:{},i=Q_(n.alignment,e),r=typeof n.alignAxis=="string"&&rh.has(n.alignAxis),s=j_(n.alignAxis,i),a=tM(n.facing,i,r);return{blend:typeof n.blend=="string"&&Z_.has(n.blend)?n.blend:"alpha",shading:n.shading==="lit"?"lit":"unlit",depthTest:n.depthTest!==!1,depthWrite:n.depthWrite===!0,depthInk:n.depthInk!==!1,orderInLayer:Math.round(_e(Ce(n.orderInLayer,0),-1024,1024)),sortMode:J_(n.sortMode),alignment:nM(s),alignAxis:s,facing:a,alignmentVector:Sn(n.alignmentVector,[0,1,0],-1,1),opacitySource:rM(n.opacitySource),opacityInvert:n.opacityInvert===!0,texture:typeof n.texture=="string"&&n.texture.trim()?n.texture.trim():null,material:Zd(n.material)}}function Vn(t,e=1){return t.depthWrite===!0&&t.blend!=="additive"&&t.blend!=="premultiplied"&&e>=.999}var Z_=new Set(["alpha","additive","premultiplied"]),K_=new Set(["none","distanceFarFirst","distanceNearFirst","oldestFirst","youngestFirst"]);function J_(t){return typeof t=="string"&&K_.has(t)?t:"distanceFarFirst"}function Q_(t,e){return t==="faceCamera"||t==="spawnDirection"||t==="velocity"||t==="vector"?t:e?"spawnDirection":"faceCamera"}var rh=new Set(["screen","spawnDirection","velocity","vector"]);function j_(t,e){return typeof t=="string"&&rh.has(t)?t:e==="faceCamera"?"screen":e}var eM=new Set(["cameraPlane","cameraPosition","off"]);function tM(t,e,n){return typeof t=="string"&&eM.has(t)?t:n||e==="faceCamera"?"cameraPlane":"off"}function nM(t){return t==="screen"?"faceCamera":t}var iM=new Set(["textureAlpha","red","green","blue","luminance","inverseLuminance","constant"]);function rM(t){return typeof t=="string"&&iM.has(t)?t:"textureAlpha"}function sM(t){const e=_t(t)?t:{},n=_e(Ce(e.sizeStart,it.billboard.sizeStart),.001,24),i=_e(Ce(e.sizeEnd,it.billboard.sizeEnd),.001,24),r=_e(Ce(e.sizeStartY,n),.001,24),s=_e(Ce(e.sizeEndY,i),.001,24),a=vt(e.sizeValue,n,.001,24,[{x:0,y:n},{x:1,y:i}]);return{shape:e.shape==="square"?"square":"circle",sizeStart:n,sizeEnd:i,sizeValue:a,separateAxes:e.separateAxes===!0,sizeStartY:r,sizeEndY:s,sizeValueY:vt(e.sizeValueY===void 0?a:e.sizeValueY,r,.001,24,[{x:0,y:r},{x:1,y:s}]),softness:_e(Ce(e.softness,it.billboard.softness),0,1),pivot:SM(e.pivot,it.billboard.pivot,-10,10)}}function aM(t){const e=_t(t)?t:{},n=sh(e.asset),i=e.renderMode==="meshAsset"?"meshAsset":"pixiShard",r=e.template==="grassShard"||e.template==="quadShard"||e.template==="triangleShard"?e.template:it.mesh.template,s=_e(Ce(e.sizeStart,it.mesh.sizeStart),.001,24),a=_e(Ce(e.sizeEnd,it.mesh.sizeEnd),.001,24),o=oM(e,s,a);return{renderMode:i,template:r,asset:n,sizeStart:s,sizeEnd:a,sizeValue:o,separateAxes:e.separateAxes===!0,sizeValueY:vt(e.sizeValueY===void 0?o:e.sizeValueY,s,.001,24,[{x:0,y:s},{x:1,y:a}]),sizeValueZ:vt(e.sizeValueZ===void 0?o:e.sizeValueZ,s,.001,24,[{x:0,y:s},{x:1,y:a}]),thickness:_e(Ce(e.thickness,it.mesh.thickness),.02,4),pivot:Sn(e.pivot,it.mesh.pivot,-10,10),flipWinding:e.flipWinding===!0,recomputeNormals:e.recomputeNormals===!0}}function oM(t,e,n){return vt(t.sizeValue,e,.001,24,[{x:0,y:e},{x:1,y:n}])}function sh(t){if(!_t(t))return null;const e=Ar(t.path,"");if(!e)return null;const n=cM(t.bounds);return{type:"mesh",id:Ar(t.id,e),path:e,...typeof t.name=="string"&&t.name.trim()?{name:t.name.trim()}:{},...n?{bounds:n}:{}}}function cM(t){return _t(t)?{min:Sn(t.min,[0,0,0],-1e5,1e5),max:Sn(t.max,[0,0,0],-1e5,1e5)}:null}function lM(t){const e=_t(t)?t:{},n=da(e.start,it.color.start,0,1),i=da(e.end,it.color.end,0,1),r=Gi(e.gradient,n,i),s=hM(r);return{start:s.start,end:s.end,gradient:r}}function vt(t,e,n,i,r,s=Tr){const a=_t(t)?t:{},o=Math.min(n,i),c=Math.max(n,i),l=o<0?0:o,u=Number.isFinite(s)&&s>0?s:Tr,h=Ci(Ce(a.editorMin,l),-u,u),d=Ci(Ce(a.editorMax,c),-u,u),f=Math.max(h+1e-6,d),p=pM(a.mode),x=Ci(Ce(t,Ce(a.value,e)),-u,u),g=Ci(Ce(a.min,x),-u,u),m=Ci(Ce(a.max,x),-u,u),S=Tc(a.curve,r??[{x:0,y:x},{x:1,y:x}],u),T=Tc(a.curveB,r??[{x:0,y:g},{x:1,y:m}],u),M=Ci(Ce(a.multiplier,1),-u,u),b=a.multiplier===1,v=(p==="curve"||p==="randomCurve")&&!b&&!(d===1)?xM(S,T,p,M,h,u):{curve:S,curveB:T,multiplier:M,editorMin:h,editorMax:f},A=mM(a.xAxis);return{mode:p,value:x,min:Math.min(g,m),max:Math.max(g,m),curve:v.curve,curveB:v.curveB,editorMin:v.editorMin,editorMax:v.editorMax,...v.multiplier!==1?{multiplier:v.multiplier}:{},...A!=="lifetime"?{xAxis:A}:{}}}function uM(t,e=64){const n=MM(e),i=new Float32Array(n),r=new Float32Array(n);for(let s=0;s<n;s++){const a=n<=1?0:s/(n-1);i[s]=vi(t.curve,a),r[s]=vi(t.curveB,a)}return{mode:t.mode,value:t.value,min:t.min,max:t.max,multiplier:t.multiplier??1,samples:n,curve:i,curveB:r}}function dM(t,e,n){const i=_e(n,0,1);if(t.mode==="random")return t.min+(t.max-t.min)*i;if(t.mode==="curve")return xo(t.curve,e)*t.multiplier;if(t.mode==="randomCurve"){const r=xo(t.curve,e),s=xo(t.curveB,e);return(r+(s-r)*i)*t.multiplier}return t.value}function gi(t){if(t.mode==="random")return(t.min+t.max)*.5;const e=t.multiplier??1;return t.mode==="curve"?vi(t.curve,0)*e:t.mode==="randomCurve"?(vi(t.curve,0)*.5+vi(t.curveB,0)*.5)*e:t.value}function Gi(t,e,n){const i=_t(t)?t:{},r=i.mode==="fixed"?"fixed":"blend",s=vM(i.colorStops,e,n),a=_M(i.alphaStops,e,n);return{mode:r,colorStops:s,alphaStops:a}}function hM(t){return{start:[...rn(t,0),sn(t,0)],end:[...rn(t,1),sn(t,1)]}}function rn(t,e,n=[1,1,1]){const i=t.colorStops;if(i.length===0)return n[0]=1,n[1]=1,n[2]=1,n;const r=_e(e,0,1);let s=i[0],a=i[0];for(let d=1;d<i.length;d++){const f=i[d];f.position<s.position&&(s=f),f.position>a.position&&(a=f)}let o=s,c=a;for(let d=0;d<i.length;d++){const f=i[d];f.position<=r&&f.position>=o.position&&(o=f),f.position>=r&&f.position<=c.position&&(c=f)}let l,u,h;if(t.mode==="fixed"||r<=s.position){const d=t.mode==="fixed"?o:s;l=d.color[0],u=d.color[1],h=d.color[2]}else if(r>=a.position)l=a.color[0],u=a.color[1],h=a.color[2];else{const d=(r-o.position)/Math.max(1e-6,c.position-o.position);l=vr(o.color[0],c.color[0],d),u=vr(o.color[1],c.color[1],d),h=vr(o.color[2],c.color[2],d)}return n[0]=l,n[1]=u,n[2]=h,n}function go(t){const e=_e(t,0,1);return e<=.04045?e/12.92:((e+.055)/1.055)**2.4}function fM(t){const e=_e(t,0,1);return e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055}function vr(t,e,n){const i=_e(n,0,1);return fM(go(t)+(go(e)-go(t))*i)}function ah(t,e,n){const i=_e(n,0,1);return[vr(t[0],e[0],i),vr(t[1],e[1],i),vr(t[2],e[2],i),t[3]+(e[3]-t[3])*i]}function sn(t,e){const n=t.alphaStops;if(n.length===0)return 1;const i=_e(e,0,1);let r=n[0],s=n[0];for(let l=1;l<n.length;l++){const u=n[l];u.position<r.position&&(r=u),u.position>s.position&&(s=u)}let a=r,o=s;for(let l=0;l<n.length;l++){const u=n[l];u.position<=i&&u.position>=a.position&&(a=u),u.position>=i&&u.position<=o.position&&(o=u)}if(t.mode==="fixed"||i<=r.position)return t.mode==="fixed"?a.alpha:r.alpha;if(i>=s.position)return s.alpha;const c=(i-a.position)/Math.max(1e-6,o.position-a.position);return a.alpha+(o.alpha-a.alpha)*c}function pM(t){return t==="random"||t==="curve"||t==="randomCurve"?t:"constant"}function mM(t){return t==="loopAge"?"loopAge":"lifetime"}function gM(t){return t==="loop"||t==="pingPong"||t==="burstSpread"?t:"random"}function xM(t,e,n,i,r,s=Tr){const a=n==="randomCurve"?[...t,...e]:t;let o=1/0,c=-1/0;for(const p of a)o=Math.min(o,p.y),c=Math.max(c,p.y);if(!Number.isFinite(o)||!Number.isFinite(c))return{curve:t,curveB:e,multiplier:i,editorMin:0,editorMax:1};let l=1,u=0;const h=1;o>=0?l=Math.max(1,c):c<=0?l=-Math.max(1,Math.abs(o)):(l=Math.max(1,Math.abs(o),Math.abs(c)),u=-1),u=Math.min(u,r/Math.abs(l||1));const d=Ci(i*l,-s,s),f=Math.abs(l)>1e-6&&l!==1;return{curve:f?t.map(p=>Cu(p,1/l,s)):t,curveB:f&&n==="randomCurve"?e.map(p=>Cu(p,1/l,s)):e,multiplier:d,editorMin:u,editorMax:h}}function vM(t,e,n){const i=[{position:0,color:[e[0],e[1],e[2]]},{position:1,color:[n[0],n[1],n[2]]}],s=(Array.isArray(t)&&t.length>0?t:i).map(a=>{if(_t(a))return{position:_e(Ce(a.position,0),0,1),color:Sn(a.color,i[0].color,0,1)}}).filter(a=>!!a).sort((a,o)=>a.position-o.position).slice(0,th);return s.length===0?i:s}function _M(t,e,n){const i=[{position:0,alpha:e[3]},{position:1,alpha:n[3]}],s=(Array.isArray(t)&&t.length>0?t:i).map(a=>{if(_t(a))return{position:_e(Ce(a.position,0),0,1),alpha:_e(Ce(a.alpha,1),0,1)}}).filter(a=>!!a).sort((a,o)=>a.position-o.position).slice(0,th);return s.length===0?i:s}function xo(t,e){if(t.length===0)return 0;if(t.length===1)return t[0]??0;const n=_e(e,0,1)*(t.length-1),i=Math.floor(n),r=Math.min(t.length-1,i+1),s=n-i,a=t[i]??0,o=t[r]??a;return a+(o-a)*s}function MM(t){return Math.round(_e(t,2,1024))}function SM(t,e,n,i){return Array.isArray(t)?[_e(Ce(t[0],e[0]),n,i),_e(Ce(t[1],e[1]),n,i)]:[...e]}function Sn(t,e,n,i){return Array.isArray(t)?[_e(Ce(t[0],e[0]),n,i),_e(Ce(t[1],e[1]),n,i),_e(Ce(t[2],e[2]),n,i)]:[...e]}function da(t,e,n,i){return Array.isArray(t)?[_e(Ce(t[0],e[0]),n,i),_e(Ce(t[1],e[1]),n,i),_e(Ce(t[2],e[2]),n,i),_e(Ce(t[3],e[3]),n,i)]:[...e]}function ss(t,e){return Ar(t,e).trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||e}function Ar(t,e){return typeof t=="string"&&t.trim()?t.trim():e}function Ce(t,e){return typeof t=="number"&&Number.isFinite(t)?t:e}function Ci(t,e,n){return _e(Number.isFinite(t)?t:e,e,n)}function qr(t){return Number.isFinite(t)?Math.max(0,t):0}function _e(t,e,n){return Math.min(n,Math.max(e,t))}function _t(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}var yM=class{constructor(t){Z(this,"state",t)}reset(t){this.state=t>>>0||2135587861}next(){return this.state=this.state*1664525+1013904223>>>0,this.state/4294967296}},Uu=class oh{constructor(e){Z(this,"capacity",e),Z(this,"instanceData"),Z(this,"particleIds"),Z(this,"nextParticleId",0),Z(this,"spawnLocalPositionData"),Z(this,"spawnDirectionData"),Z(this,"spawnOriginData"),Z(this,"runtimeFlagsData"),Z(this,"triggerFlagsData"),Z(this,"lastPosition",[0,0,0]),Z(this,"lastMoveVelocity",[0,0,0]),Z(this,"activeCount",0),Z(this,"emittedLastFrame",0),Z(this,"uploadBytesLastFrame",0),Z(this,"age",0),Z(this,"loopIndex",-1),Z(this,"loopRandom",.5),Z(this,"accumulator",0),Z(this,"distanceAccumulator",0),Z(this,"hasLastPosition",!1),Z(this,"hasPreviousEffectAge",!1),Z(this,"previousEffectAge",0),this.instanceData=new Float32Array(e*Wt),this.particleIds=new Float64Array(e),this.spawnLocalPositionData=new Float32Array(e*tn),this.spawnDirectionData=new Float32Array(e*tn),this.spawnOriginData=new Float32Array(e*tn),this.runtimeFlagsData=new Uint8Array(e),this.triggerFlagsData=new Uint8Array(e)}reset(){this.nextParticleId=0,this.activeCount=0,this.emittedLastFrame=0,this.uploadBytesLastFrame=0,this.age=0,this.loopIndex=-1,this.loopRandom=.5,this.accumulator=0,this.distanceAccumulator=0,this.hasLastPosition=!1,this.lastMoveVelocity[0]=0,this.lastMoveVelocity[1]=0,this.lastMoveVelocity[2]=0,this.hasPreviousEffectAge=!1,this.previousEffectAge=0}cloneWithCapacity(e){const n=new oh(e),i=Math.min(this.activeCount,n.capacity);return n.instanceData.set(this.instanceData.subarray(0,i*Wt)),n.spawnLocalPositionData.set(this.spawnLocalPositionData.subarray(0,i*tn)),n.spawnDirectionData.set(this.spawnDirectionData.subarray(0,i*tn)),n.spawnOriginData.set(this.spawnOriginData.subarray(0,i*tn)),n.runtimeFlagsData.set(this.runtimeFlagsData.subarray(0,i)),n.triggerFlagsData.set(this.triggerFlagsData.subarray(0,i)),n.particleIds.set(this.particleIds.subarray(0,i)),n.nextParticleId=this.nextParticleId,n.activeCount=i,n.emittedLastFrame=this.emittedLastFrame,n.uploadBytesLastFrame=this.uploadBytesLastFrame,n.age=this.age,n.loopIndex=this.loopIndex,n.loopRandom=this.loopRandom,n.accumulator=this.accumulator,n.distanceAccumulator=this.distanceAccumulator,n.hasLastPosition=this.hasLastPosition,n.lastPosition[0]=this.lastPosition[0],n.lastPosition[1]=this.lastPosition[1],n.lastPosition[2]=this.lastPosition[2],n.lastMoveVelocity[0]=this.lastMoveVelocity[0],n.lastMoveVelocity[1]=this.lastMoveVelocity[1],n.lastMoveVelocity[2]=this.lastMoveVelocity[2],n.hasPreviousEffectAge=this.hasPreviousEffectAge,n.previousEffectAge=this.previousEffectAge,n}compact(e,n){let i=0;for(;i<this.activeCount;){const r=i*Wt,s=this.instanceData[r+3]??0,a=this.instanceData[r+7]??0;if(e<=s+a){i++;continue}n==null||n(i,s+a),this.activeCount--,i!==this.activeCount&&(this.instanceData.copyWithin(r,this.activeCount*Wt,(this.activeCount+1)*Wt),this.copyRuntimeSidecars(this.activeCount,i))}}assignParticleId(e){this.particleIds[e]=++this.nextParticleId}copyRuntimeSidecars(e,n){this.particleIds[n]=this.particleIds[e];const i=e*tn,r=n*tn;this.spawnLocalPositionData[r+0]=this.spawnLocalPositionData[i+0],this.spawnLocalPositionData[r+1]=this.spawnLocalPositionData[i+1],this.spawnLocalPositionData[r+2]=this.spawnLocalPositionData[i+2],this.spawnDirectionData[r+0]=this.spawnDirectionData[i+0],this.spawnDirectionData[r+1]=this.spawnDirectionData[i+1],this.spawnDirectionData[r+2]=this.spawnDirectionData[i+2],this.spawnOriginData[r+0]=this.spawnOriginData[i+0],this.spawnOriginData[r+1]=this.spawnOriginData[i+1],this.spawnOriginData[r+2]=this.spawnOriginData[i+2],this.runtimeFlagsData[n]=this.runtimeFlagsData[e]??0,this.triggerFlagsData[n]=this.triggerFlagsData[e]??0}},EM=class{constructor(t,e={}){Z(this,"states"),Z(this,"events",[]),Z(this,"subEmitterRequests",[]),Z(this,"stats",{activeParticles:0,capacity:0,emittedLastFrame:0,uploadBytesLastFrame:0}),Z(this,"subEmitterDepth"),Z(this,"maxSubEmitterDepth"),Z(this,"maxEventsPerFrame"),Z(this,"maxSubEmitterRequestsPerFrame"),Z(this,"rng",new yM(2135587861)),Z(this,"effectDefinition"),Z(this,"position",[0,0,0]),Z(this,"spawnSample",FM()),Z(this,"emissionGeometries",new Map),Z(this,"runtimeParameterValues",{emissionRateMultiplier:1,initialVelocityMultiplier:1}),Z(this,"emitterRuntimeParameterValues",new Map),Z(this,"lastTimeSeconds",0),Z(this,"startedAt",0),Z(this,"active",!1),Z(this,"emissionAllowed",!0),this.subEmitterDepth=Math.max(0,Math.floor(Ce(e.subEmitterDepth,0))),this.maxSubEmitterDepth=Math.max(0,Math.floor(Ce(e.maxSubEmitterDepth,A_))),this.maxEventsPerFrame=Math.max(0,Math.floor(Ce(e.maxEventsPerFrame,b_))),this.maxSubEmitterRequestsPerFrame=Math.max(0,Math.floor(Ce(e.maxSubEmitterRequestsPerFrame,T_))),this.effectDefinition=new x_(t,L_),this.states=this.effect.emitters.map(n=>new Uu(n.maxParticles)),this.refreshCapacity()}get effect(){return this.effectDefinition.value}get definition(){return this.effect}get isActive(){return this.active}get runtimeParameters(){return this.runtimeParameterValues}reset(t,e,n,i=2135587861){this.effectDefinition.replace(t),this.position[0]=e[0],this.position[1]=e[1],this.position[2]=e[2],this.startedAt=n,this.lastTimeSeconds=n,this.active=!0,this.emissionAllowed=!0,this.clearFrameEvents(),this.rng.reset(i^uh(this.effect.id)),this.resizeStates();for(const r of this.states)r.reset();this.refreshCapacity()}setPosition(t){this.position[0]=t[0],this.position[1]=t[1],this.position[2]=t[2]}updateDefinition(t){this.effectDefinition.replace(t),this.resizeStates(),this.refreshCapacity()}allowCompletion(){this.emissionAllowed=!1}resumeEmission(){this.active&&(this.emissionAllowed=!0)}setEmissionGeometry(t,e){if(!e)return this.emissionGeometries.delete(t),!1;const n=IM(e);return n?(this.emissionGeometries.set(t,n),!0):(this.emissionGeometries.delete(t),!1)}getEmissionGeometry(t){return this.emissionGeometries.get(t)??null}setRuntimeParameters(t){t.emissionRateMultiplier!==void 0&&(this.runtimeParameterValues.emissionRateMultiplier=qr(t.emissionRateMultiplier)),t.initialVelocityMultiplier!==void 0&&(this.runtimeParameterValues.initialVelocityMultiplier=qr(t.initialVelocityMultiplier))}setEmitterRuntimeParameters(t,e){const n=this.emitterRuntimeParameterValues.get(t)??{emissionRateMultiplier:1,initialVelocityMultiplier:1};e.emissionRateMultiplier!==void 0&&(n.emissionRateMultiplier=qr(e.emissionRateMultiplier)),e.initialVelocityMultiplier!==void 0&&(n.initialVelocityMultiplier=qr(e.initialVelocityMultiplier)),this.emitterRuntimeParameterValues.set(t,n)}getEmitterRuntimeParameters(t){return this.emitterRuntimeParameterValues.get(t)??null}effectiveEmissionRateMultiplier(t){var e;return this.runtimeParameterValues.emissionRateMultiplier*(((e=this.emitterRuntimeParameterValues.get(t))==null?void 0:e.emissionRateMultiplier)??1)}effectiveInitialVelocityMultiplier(t){var e;return this.runtimeParameterValues.initialVelocityMultiplier*(((e=this.emitterRuntimeParameterValues.get(t))==null?void 0:e.initialVelocityMultiplier)??1)}emitBurst(t,e={}){if(!this.active)return 0;const n=this.effect.emitters.findIndex(u=>u.id===t);if(n<0)return 0;const i=this.effect.emitters[n],r=this.states[n];if(!i||!r||!i.enabled)return 0;const s=Math.max(1,Math.floor(Ce(e.count,1))),a=r.activeCount,o=this.position[0],c=this.position[1],l=this.position[2];return e.position&&(this.position[0]=e.position[0],this.position[1]=e.position[1],this.position[2]=e.position[2]),this.emitParticles(i,r,s,this.lastTimeSeconds),this.position[0]=o,this.position[1]=c,this.position[2]=l,r.activeCount-a}stop(){this.active=!1,this.clearFrameEvents();for(const t of this.states)t.reset();this.refreshStats()}update(t,e){if(this.clearFrameEvents(),this.lastTimeSeconds=e,!this.active)return!1;let n=!1,i=!0;for(let r=0;r<this.effect.emitters.length;r++){const s=this.effect.emitters[r],a=this.states[r];if(a.emittedLastFrame=0,a.uploadBytesLastFrame=0,this.recordParticleFrameEvents(s,a,r,t,e),a.compact(e,(l,u)=>this.recordParticleDeathEvent(s,a,r,l,u)),!s.enabled){n=n||a.activeCount>0;continue}const o=e-this.startedAt-Math.max(0,s.timeline.start);if(a.age=o,o<0){this.emissionAllowed&&(i=!1),n=n||a.activeCount>0;continue}const c=s.loop||a.age<=Math.max(.001,s.duration);c&&this.emissionAllowed?(i=!1,this.updateEmitter(s,a,t,e)):c&&this.advanceEmitterWithoutEmission(s,a,o),n=n||a.activeCount>0}return this.refreshStats(),i&&!n?(this.active=!1,!1):!0}advanceEmitterWithoutEmission(t,e,n){const i=Math.max(.001,t.duration);e.age=t.loop?n%i:n,e.previousEffectAge=Math.max(0,n),e.hasPreviousEffectAge=!0,e.lastPosition[0]=this.position[0],e.lastPosition[1]=this.position[1],e.lastPosition[2]=this.position[2],e.lastMoveVelocity[0]=0,e.lastMoveVelocity[1]=0,e.lastMoveVelocity[2]=0,e.hasLastPosition=!0}updateEmitter(t,e,n,i){const r=Math.max(.001,t.duration),s=Math.max(0,e.age),a=e.hasPreviousEffectAge?e.previousEffectAge:0,o=t.loop?Math.floor(s/r):0;o!==e.loopIndex&&(e.loopIndex=o,e.loopRandom=this.rng.next()),t.loop&&(e.age=s%r),this.emitDueBursts(t,e,a,s,i,r);const c=_e(e.age/r,0,1),l=this.effectiveEmissionRateMultiplier(t.id),u=Se(t.spawn.rateValue,c,e.loopRandom)*l,h=Se(t.spawn.rateOverDistanceValue,c,e.loopRandom)*l,d=e.hasLastPosition?this.position[0]-e.lastPosition[0]:0,f=e.hasLastPosition?this.position[1]-e.lastPosition[1]:0,p=e.hasLastPosition?this.position[2]-e.lastPosition[2]:0,x=Math.hypot(d,f,p),g=n>0?1/n:0;e.lastMoveVelocity[0]=d*g,e.lastMoveVelocity[1]=f*g,e.lastMoveVelocity[2]=p*g,e.lastPosition[0]=this.position[0],e.lastPosition[1]=this.position[1],e.lastPosition[2]=this.position[2],e.hasLastPosition=!0,e.accumulator+=Math.max(0,u)*Math.max(0,n),e.distanceAccumulator+=Math.max(0,h)*Math.max(0,x),e.distanceAccumulator>=1&&(e.accumulator+=Math.floor(e.distanceAccumulator),e.distanceAccumulator%=1);const m=Math.floor(e.accumulator);m>0&&(e.accumulator-=m,this.emitParticles(t,e,m,i)),e.previousEffectAge=s,e.hasPreviousEffectAge=!0}emitDueBursts(t,e,n,i,r,s){if(i<n)return;const a=t.loop?Math.max(0,Math.floor(n/s)):0,o=t.loop?Math.max(0,Math.floor(i/s)):0,c=Math.max(a,o-E_+1);for(let l=c;l<=o;l++){for(const u of t.spawn.bursts)this.emitScheduleIfDue(t,e,u,n,i,r,s,l);if(!t.loop)break}}emitScheduleIfDue(t,e,n,i,r,s,a,o){const c=t.loop?o*a:0;for(let l=0;l<n.cycles;l++){const u=n.time+n.interval*l;if(u>a&&!t.loop)break;if(u>a)continue;const h=c+u;PM(h,i,r,e)&&(n.probability<=0||n.probability<1&&this.rng.next()>n.probability||this.emitParticles(t,e,n.count,s))}}emitParticles(t,e,n,i){const r=Math.min(n,e.capacity-e.activeCount);for(let s=0;s<r;s++)this.emitParticle(t,e,i,s,r);e.emittedLastFrame+=r}emitParticle(t,e,n,i,r){const s=e.activeCount*Wt,a=t.spawn,o=_e(e.age/Math.max(.001,t.duration),0,1),c=this.spawnSample;NM(a,this.rng,o,i,r,c,a.shape==="mesh"?this.emissionGeometries.get(t.id)??null:null);const l=a.simulationSpace==="local",u=(l?0:this.position[0])+c.position[0],h=(l?0:this.position[1])+c.position[1],d=(l?0:this.position[2])+c.position[2],f=t.initializeParticle;let p=Math.max(.001,Se(f.lifetime,o,this.rng.next()));const x=f.velocity;let g=0,m=0,S=0;if(x.mode==="vector")g=_o(this.rng,x.min[0],x.max[0]),m=_o(this.rng,x.min[1],x.max[1]),S=_o(this.rng,x.min[2],x.max[2]);else{const k=Math.max(0,Se(x.speed,o,ui(x.speed,this.rng)));g=c.direction[0]*k,m=c.direction[1]*k,S=c.direction[2]*k}if(t.modules.inheritVelocity){const k=Se(t.advanced.inheritVelocity.multiplier,o,this.rng.next()),L=[...e.lastMoveVelocity];l&&wc(a,L),g+=L[0]*k,m+=L[1]*k,S+=L[2]*k}if(t.modules.limitVelocityOverLifetime){const k=t.advanced.limitVelocityOverLifetime,L=k.dampen,$=Se(k.drag,o,this.rng.next()),V=k.multiplyBySize&&t.modules.size?Math.max(.001,Se(t.mode==="billboard"?t.billboard.sizeValue:t.mesh.sizeValue,o,this.rng.next())):1;if(k.separateAxes)g=Mo(g,Se(k.x,o,this.rng.next())*V,L),m=Mo(m,Se(k.y,o,this.rng.next())*V,L),S=Mo(S,Se(k.z,o,this.rng.next())*V,L);else{const Y=Se(k.speed,o,this.rng.next())*V,te=Math.hypot(g,m,S);if(te>Math.max(0,Y)){const j=(Math.max(0,Y)+(te-Math.max(0,Y))*(1-L))/Math.max(1e-6,te);g*=j,m*=j,S*=j}}if($>0){const Y=Math.max(0,1-$*.05);g*=Y,m*=Y,S*=Y}}if(t.modules.lifetimeByEmitterSpeed){const k=_a(t.advanced.lifetimeByEmitterSpeed.speedRange,Math.hypot(g,m,S));p=Math.max(.001,p*Se(t.advanced.lifetimeByEmitterSpeed.multiplier,k,this.rng.next()))}const T=e.activeCount,M=T*tn;e.spawnLocalPositionData[M+0]=c.position[0],e.spawnLocalPositionData[M+1]=c.position[1],e.spawnLocalPositionData[M+2]=c.position[2],e.spawnOriginData[M+0]=this.position[0],e.spawnOriginData[M+1]=this.position[1],e.spawnOriginData[M+2]=this.position[2],DM(e.spawnDirectionData,M,g,m,S,c.direction),e.runtimeFlagsData[T]=(a.simulationSpace==="local"?eh:0)|(a.alignToDirection||t.render.alignAxis==="spawnDirection"?S_:0),e.instanceData[s+0]=u,e.instanceData[s+1]=h,e.instanceData[s+2]=d,e.instanceData[s+3]=n,e.instanceData[s+4]=g,e.instanceData[s+5]=m,e.instanceData[s+6]=S,e.instanceData[s+7]=p,e.instanceData[s+8]=this.rng.next();const b=this.rng.next(),E=t.mode==="mesh"||f.startRotationSeparateAxes,C=E?Se(f.rotation3D.x,o,b):0,v=E?Se(f.rotation3D.y,o,b):0,A=Se(E?f.rotation3D.z:f.rotation,o,b);e.instanceData[s+9]=A,e.instanceData[s+13]=C,e.instanceData[s+14]=v;const P=this.rng.next(),R=f.angularVelocitySeparateAxes?Se(f.angularVelocity3D.x,o,P):0,D=f.angularVelocitySeparateAxes?Se(f.angularVelocity3D.y,o,P):0,O=f.angularVelocitySeparateAxes?Se(f.angularVelocity3D.z,o,P):Se(f.angularVelocity,o,P);if(e.instanceData[s+10]=t.modules.rotation?O:0,e.instanceData[s+15]=t.modules.rotation?R:0,e.instanceData[s+16]=t.modules.rotation?D:0,t.mode==="mesh"){const k=ui(f.size3D.x,this.rng),L=ui(f.size3D.y,this.rng),$=ui(f.size3D.z,this.rng);e.instanceData[s+11]=Math.max(0,Se(f.size3D.x,o,k)),e.instanceData[s+12]=Math.max(0,Se(f.size3D.y,o,L)),e.instanceData[s+17]=Math.max(0,Se(f.size3D.z,o,$))}else if(f.startSizeSeparateAxes){const k=ui(f.size3D.x,this.rng),L=ui(f.size3D.y,this.rng);e.instanceData[s+11]=Math.max(0,Se(f.size3D.x,o,k)),e.instanceData[s+12]=Math.max(0,Se(f.size3D.y,o,L)),e.instanceData[s+17]=e.instanceData[s+11]}else{const k=Math.max(0,Se(f.size,o,ui(f.size,this.rng)));e.instanceData[s+11]=k,e.instanceData[s+12]=k,e.instanceData[s+17]=k}e.assignParticleId(T),e.activeCount++,this.recordParticleBirthEvent(t,e,Math.max(0,this.effect.emitters.indexOf(t)),T,n)}clearFrameEvents(){this.events.length=0,this.subEmitterRequests.length=0}recordParticleFrameEvents(t,e,n,i,r){if(e.activeCount<=0||!t.modules.triggers&&!t.modules.subEmitters&&!t.modules.collision)return;const s=r-Math.max(0,i);for(let a=0;a<e.activeCount;a++)this.recordNormalizedTimeEventIfDue(t,e,n,a,s,r),this.recordCollisionEventIfDue(t,e,n,a,s,r)}recordParticleBirthEvent(t,e,n,i,r){const s=this.createParticleEvent("birth",t,e,n,i,r,0,0,t.advanced.triggers.birthEvent);if(t.modules.triggers&&s.eventName&&this.pushParticleEvent(s),this.queueSubEmitterRequest(s,e,t.advanced.subEmitters.birth),t.modules.triggers&&t.advanced.triggers.normalizedTime<=0){e.triggerFlagsData[i]|=Vr;const a={...s,kind:"normalizedTime",eventName:"normalized-time"};this.pushParticleEvent(a)}}recordParticleDeathEvent(t,e,n,i,r){const s=i*Wt,a=e.instanceData[s+3]??r,o=Math.max(.001,e.instanceData[s+7]??.001),c=this.createParticleEvent("death",t,e,n,i,r,Math.max(0,r-a),1,t.advanced.triggers.deathEvent);t.modules.triggers&&c.eventName&&this.pushParticleEvent(c),t.modules.triggers&&t.advanced.triggers.normalizedTime>=1&&(e.triggerFlagsData[i]&Vr)===0&&(e.triggerFlagsData[i]|=Vr,this.pushParticleEvent({...c,kind:"normalizedTime",eventName:"normalized-time",particleAge:o,normalizedAge:1})),this.queueSubEmitterRequest(c,e,t.advanced.subEmitters.death)}recordNormalizedTimeEventIfDue(t,e,n,i,r,s){if(!t.modules.triggers)return;const a=t.advanced.triggers.normalizedTime;if(a<=0||a>=1)return;const o=e.triggerFlagsData[i]??0;if(t.advanced.triggers.oneShot&&o&Vr)return;const c=i*Wt,l=e.instanceData[c+3]??0,u=Math.max(.001,e.instanceData[c+7]??.001),h=_e((r-l)/u,0,1),d=_e((s-l)/u,0,1);if(!(t.advanced.triggers.oneShot||h<a?h<a-Kr&&d+Kr>=a:d+Kr>=a))return;e.triggerFlagsData[i]|=Vr;const p=l+u*a,x=this.createParticleEvent("normalizedTime",t,e,n,i,p,u*a,a,"normalized-time");this.pushParticleEvent(x)}recordCollisionEventIfDue(t,e,n,i,r,s){if(!t.modules.collision)return;const a=t.advanced.collision;if(a.mode!=="plane")return;const o=t.modules.subEmitters&&!!t.advanced.subEmitters.collision.effectFile;if(!t.modules.triggers&&!o||(e.triggerFlagsData[i]??0)&Nu)return;const c=i*Wt,l=e.instanceData[c+3]??0,u=Math.max(.001,e.instanceData[c+7]??.001),h=_e(r-l,0,u),d=_e(s-l,0,u);if(d<=0)return;const f=vo(t,e,i,h,h/u,this.position),p=vo(t,e,i,d,d/u,this.position),x=a.planeY+a.radius;if(!(f[1]>=x&&p[1]<x))return;e.triggerFlagsData[i]|=Nu;const g=this.createParticleEvent("collision",t,e,n,i,s,d,d/u,"collision");t.modules.triggers&&this.pushParticleEvent(g),this.queueSubEmitterRequest(g,e,t.advanced.subEmitters.collision)}createParticleEvent(t,e,n,i,r,s,a,o,c){const l=r*Wt,u=n.instanceData[l+8]??0;return{kind:t,eventName:c,effectId:this.effect.id,emitterId:e.id,emitterIndex:i,particleIndex:r,particleSeed:u,timeSeconds:s,effectAge:Math.max(0,s-this.startedAt),particleAge:a,normalizedAge:_e(o,0,1),position:vo(e,n,r,a,o,this.position),velocity:AM(e,n,r,a,o,this.position)}}pushParticleEvent(t){this.events.length>=this.maxEventsPerFrame||this.events.push(t)}queueSubEmitterRequest(t,e,n){const i=this.effect.emitters[t.emitterIndex];i!=null&&i.modules.subEmitters&&(!n.effectFile||this.subEmitterDepth>=this.maxSubEmitterDepth||this.subEmitterRequests.length>=this.maxSubEmitterRequestsPerFrame||n.probability<=0||RM(t,n.effectFile)>n.probability||this.subEmitterRequests.push({hook:t.kind,effectFile:n.effectFile,sourceEffectId:t.effectId,sourceEmitterId:t.emitterId,sourceEmitterIndex:t.emitterIndex,sourceParticleIndex:t.particleIndex,sourceParticleSeed:t.particleSeed,timeSeconds:t.timeSeconds,position:[...t.position],velocity:[...t.velocity],normalizedAge:t.normalizedAge,inheritColor:n.inheritColor,inheritSize:n.inheritSize,inheritedColor:n.inheritColor?wM(i,t.normalizedAge):null,inheritedSize:n.inheritSize?CM(i,e,t.particleIndex,t.normalizedAge):null,depth:this.subEmitterDepth,nextDepth:this.subEmitterDepth+1,maxDepth:this.maxSubEmitterDepth}))}resizeStates(){for(;this.states.length<this.effect.emitters.length;){const t=this.effect.emitters[this.states.length];this.states.push(new Uu(t.maxParticles))}for(let t=0;t<this.effect.emitters.length;t++){const e=this.effect.emitters[t],n=this.states[t];n.capacity!==e.maxParticles&&(this.states[t]=n.cloneWithCapacity(e.maxParticles))}this.states.length=this.effect.emitters.length}refreshStats(){let t=0,e=0,n=0;for(const i of this.states)t+=i.activeCount,e+=i.emittedLastFrame,n+=i.uploadBytesLastFrame;this.stats.activeParticles=t,this.stats.emittedLastFrame=e,this.stats.uploadBytesLastFrame=n}refreshCapacity(){let t=0;for(const e of this.states)t+=e.capacity;this.stats.capacity=t}};function bM(t,e){return _e(e.age/Math.max(.001,t.duration),0,1)}function ch(t,e,n,i,r,s,a={position:[0,0,0],velocity:[0,0,0]},o=1){return tl(t,e,n,i,r,s,a,o),Sa(t,e,n,a.position,a.velocity,s),a}function tl(t,e,n,i,r,s,a={position:[0,0,0],velocity:[0,0,0]},o=1){const c=n*Wt,l=bM(t,e),u=e.instanceData[c+8]??.5,h=t.modules.velocity?Se(t.forces.dragValue,r,u,l):0,d=t.modules.velocity?Se(t.forces.gravityValue,r,u,l):0,f=Math.max(0,1-Math.max(0,h)*i),p=qr(o),x=(e.instanceData[c+4]??0)*p,g=(e.instanceData[c+5]??0)*p,m=(e.instanceData[c+6]??0)*p,S=t.advanced.velocityOverLifetime.speedModifier,T=t.modules.velocityOverLifetime?Se(S,r,u,l):1,M=t.modules.velocityOverLifetime?m_(S,r,u,l):1,b=a.velocity;b[0]=x*T,b[1]=g*T-d*i*2,b[2]=m*T;const E=a.position;return E[0]=(e.instanceData[c+0]??0)+x*i*f*M,E[1]=(e.instanceData[c+1]??0)+g*i*f*M-d*i*i,E[2]=(e.instanceData[c+2]??0)+m*i*f*M,t.modules.velocityOverLifetime&&TM(t,e,n,i,r,l,u,T,M,E,b,s,a.scratchA??[0,0,0],a.scratchB??[0,0,0]),a}function as(t,e){return((t.runtimeFlagsData[e]??0)&eh)!==0}function Jr(t,e,n,i){if(!as(e,n))return;const{scale:r,rotation:s}=t.spawn;hi(i[0]*r[0],i[1]*r[1],i[2]*r[2],s,i)}function wc(t,e){lh(e,t.rotation,e);for(let n=0;n<3;n++)e[n]=t.scale[n]>1e-6?e[n]/t.scale[n]:0}function lh(t,e,n){const[i,r,s]=e.map(_r),a=Math.cos(s),o=Math.sin(s),c=t[0]*a+t[1]*o,l=-t[0]*o+t[1]*a,u=Math.cos(r),h=Math.sin(r),d=c*u+t[2]*h,f=-c*h+t[2]*u,p=Math.cos(i),x=Math.sin(i);n[0]=d,n[1]=l*p+f*x,n[2]=-l*x+f*p}function Sa(t,e,n,i,r,s){if(!as(e,n))return;Jr(t,e,n,i),Jr(t,e,n,r);const a=n*tn;for(let o=0;o<3;o++)i[o]+=t.spawn.position[o]+((s==null?void 0:s[o])??e.spawnOriginData[a+o]??0)}function TM(t,e,n,i,r,s,a,o,c,l,u,h,d=[0,0,0],f=[0,0,0]){const p=t.advanced.velocityOverLifetime,x=as(e,n)&&p.space==="world";x&&Sa(t,e,n,l,u,h);const g=as(e,n)&&!x,m=p.space==="local"&&!g,S=d;S[0]=Se(p.linear.x,r,a,s),S[1]=Se(p.linear.y,r,a,s),S[2]=Se(p.linear.z,r,a,s);const T=f;m?hi(S[0],S[1],S[2],t.spawn.rotation,T):(T[0]=S[0],T[1]=S[1],T[2]=S[2]),u[0]+=T[0]*o,u[1]+=T[1]*o,u[2]+=T[2]*o,l[0]+=T[0]*i*c,l[1]+=T[1]*i*c,l[2]+=T[2]*i*c;const M=n*tn,b=g?0:m?(h==null?void 0:h[0])??e.spawnOriginData[M+0]??0:e.spawnOriginData[M+0]??0,E=g?0:m?(h==null?void 0:h[1])??e.spawnOriginData[M+1]??0:e.spawnOriginData[M+1]??0,C=g?0:m?(h==null?void 0:h[2])??e.spawnOriginData[M+2]??0:e.spawnOriginData[M+2]??0,v=d;v[0]=Se(p.orbitalOffset.x,r,a,s),v[1]=Se(p.orbitalOffset.y,r,a,s),v[2]=Se(p.orbitalOffset.z,r,a,s);const A=f;m?hi(v[0],v[1],v[2],t.spawn.rotation,A):(A[0]=v[0],A[1]=v[1],A[2]=v[2]);const P=b+A[0],R=E+A[1],D=C+A[2],O=Se(p.orbital.x,r,a,s),k=Se(p.orbital.y,r,a,s),L=Se(p.orbital.z,r,a,s);if(O!==0||k!==0||L!==0){g||hi(v[0]*t.spawn.scale[0],v[1]*t.spawn.scale[1],v[2]*t.spawn.scale[2],t.spawn.rotation,A);const V=g?A[0]:((h==null?void 0:h[0])??e.spawnOriginData[M]??0)+t.spawn.position[0]+A[0],Y=g?A[1]:((h==null?void 0:h[1])??e.spawnOriginData[M+1]??0)+t.spawn.position[1]+A[1],te=g?A[2]:((h==null?void 0:h[2])??e.spawnOriginData[M+2]??0)+t.spawn.position[2]+A[2];d[0]=l[0]-V,d[1]=l[1]-Y,d[2]=l[2]-te,m&&lh(d,t.spawn.rotation,d);let[ne,j,re]=d,Fe=k*re-L*j,Be=L*ne-O*re,ae=O*j-k*ne;const W=O*i*c,se=Math.cos(W),U=Math.sin(W);let le=j*se-re*U;const be=j*U+re*se;j=le,re=be;const ye=k*i*c,tt=Math.cos(ye),He=Math.sin(ye),nt=ne*tt+re*He,Ye=-ne*He+re*tt;ne=nt,re=Ye;const $e=L*i*c,St=Math.cos($e),yt=Math.sin($e),Ct=ne*St-j*yt;le=ne*yt+j*St,ne=Ct,j=le,m&&(hi(ne,j,re,t.spawn.rotation,d),[ne,j,re]=d,hi(Fe,Be,ae,t.spawn.rotation,f),[Fe,Be,ae]=f),l[0]=V+ne,l[1]=Y+j,l[2]=te+re,u[0]+=Fe*o,u[1]+=Be*o,u[2]+=ae*o}const $=Se(p.radial,r,a,s);if($!==0){const V=l[0]-P,Y=l[1]-R,te=l[2]-D,ne=Math.hypot(V,Y,te);if(ne>1e-6){const j=1/ne,re=V*j,Fe=Y*j,Be=te*j;l[0]+=re*$*i*c,l[1]+=Fe*$*i*c,l[2]+=Be*$*i*c,u[0]+=re*$*o,u[1]+=Fe*$*o,u[2]+=Be*$*o}}if(x){const V=n*tn;for(let Y=0;Y<3;Y++)l[Y]-=t.spawn.position[Y]+((h==null?void 0:h[Y])??e.spawnOriginData[V+Y]??0);wc(t.spawn,l),wc(t.spawn,u)}}function vo(t,e,n,i,r,s){return ch(t,e,n,i,r,s).position}function AM(t,e,n,i,r,s){return ch(t,e,n,i,r,s).velocity}function wM(t,e){return t.modules.color?[...rn(t.color.gradient,e),sn(t.color.gradient,e)]:[1,1,1,1]}function CM(t,e,n,i){const r=n*Wt,s=Math.max(0,e.instanceData[r+11]??1);if(!t.modules.size)return s;const a=t.mode==="billboard"?t.billboard.sizeValue:t.mesh.sizeValue;return s*Math.max(0,Se(a,i,.5))}function RM(t,e){const n=Math.floor(t.particleSeed*4294967295)^uh(`${t.kind}:${e}:${t.effectId}:${t.emitterId}:${t.particleIndex}`);return(Math.imul(n>>>0,1664525)+1013904223>>>0)/4294967296}function _o(t,e,n){return e+(n-e)*t.next()}function Mo(t,e,n){const i=Math.max(0,e),r=Math.abs(t);if(r<=i)return t;const s=i+(r-i)*(1-n);return Math.sign(t)*s}function PM(t,e,n,i){return Number.isFinite(t)?!i.hasPreviousEffectAge&&t===0?n>=0:t>e+Kr&&t<=n+Kr:!1}function DM(t,e,n,i,r,s){let a=n,o=i,c=r;Math.hypot(a,o,c)<=1e-6&&(a=s[0],o=s[1],c=s[2]);const u=Math.hypot(a,o,c);if(u<=1e-6){t[e+0]=0,t[e+1]=1,t[e+2]=0;return}const h=1/u;t[e+0]=a*h,t[e+1]=o*h,t[e+2]=c*h}function IM(t){const e=t.positions,n=Math.floor(e.length/3);if(n<1)return null;const i=new Float32Array(n*3);for(let u=0;u<i.length;u++)i[u]=e[u];let r=null;if(t.normals&&t.normals.length>=n*3){r=new Float32Array(n*3);for(let u=0;u<r.length;u++)r[u]=t.normals[u]}let s=null;if(t.indices&&t.indices.length>=3){const u=t.indices.length-t.indices.length%3;s=new Uint32Array(u);for(let h=0;h<u;h++){const d=Math.floor(t.indices[h]);if(d<0||d>=n)return null;s[h]=d}}else if(n>=3){const u=n-n%3;s=new Uint32Array(u);for(let h=0;h<u;h++)s[h]=h}const a=s?s.length/3:0,o=new Float32Array(a),c=a>0&&!r?new Float32Array(a*3):null;let l=0;for(let u=0;u<a;u++){const h=s[u*3+0]*3,d=s[u*3+1]*3,f=s[u*3+2]*3,p=i[d+0]-i[h+0],x=i[d+1]-i[h+1],g=i[d+2]-i[h+2],m=i[f+0]-i[h+0],S=i[f+1]-i[h+1],T=i[f+2]-i[h+2],M=x*T-g*S,b=g*m-p*T,E=p*S-x*m,C=Math.hypot(M,b,E);if(l+=C*.5,o[u]=l,c){const v=C>1e-6?1/C:0;c[u*3+0]=M*v,c[u*3+1]=b*v,c[u*3+2]=E*v}}return{positions:i,normals:r,indices:s,faceNormals:c,triangleCdf:o,totalArea:l,vertexCount:n,triangleCount:a}}function LM(t,e,n,i,r){if(!(e==="surface"&&t.triangleCount>0&&t.totalArea>1e-6)){const S=Math.min(t.vertexCount-1,Math.floor(n.next()*t.vertexCount));i[0]=t.positions[S*3+0],i[1]=t.positions[S*3+1],i[2]=t.positions[S*3+2],t.normals&&(r[0]=t.normals[S*3+0],r[1]=t.normals[S*3+1],r[2]=t.normals[S*3+2]);return}const a=n.next()*t.totalArea;let o=0,c=t.triangleCount-1;for(;o<c;){const S=o+c>>1;t.triangleCdf[S]<a?o=S+1:c=S}const l=o,u=t.indices[l*3+0]*3,h=t.indices[l*3+1]*3,d=t.indices[l*3+2]*3;let f=n.next(),p=n.next();f+p>1&&(f=1-f,p=1-p);const x=1-f-p,g=t.positions;i[0]=g[u]*x+g[h]*f+g[d]*p,i[1]=g[u+1]*x+g[h+1]*f+g[d+1]*p,i[2]=g[u+2]*x+g[h+2]*f+g[d+2]*p;const m=t.normals;m?(r[0]=m[u]*x+m[h]*f+m[d]*p,r[1]=m[u+1]*x+m[h+1]*f+m[d+1]*p,r[2]=m[u+2]*x+m[h+2]*f+m[d+2]*p):t.faceNormals&&(r[0]=t.faceNormals[l*3+0],r[1]=t.faceNormals[l*3+1],r[2]=t.faceNormals[l*3+2])}function FM(){return{position:[0,0,0],direction:[0,1,0]}}var Ai=[0,0,0],wn=[0,1,0];function NM(t,e,n,i,r,s,a=null){const o=Math.max(0,Se(t.radiusValue,n,ui(t.radiusValue,e))),c=UM(t,e,n,i,r),l=Math.cos(c),u=Math.sin(c);let h=0,d=0,f=0,p=0,x=1,g=0;if(t.shape==="circle"){const M=So(o,t.radiusThickness,e);h=l*M,f=u*M}else if(t.shape==="box")h=(e.next()-.5)*t.box[0],d=(e.next()-.5)*t.box[1],f=(e.next()-.5)*t.box[2];else if(t.shape==="cone"){const M=Math.max(0,t.length),b=t.emitFrom==="volume"&&M>0?e.next():0;d=M*b;const E=o*(1-b),C=So(E,t.radiusThickness,e),v=E>1e-6?C/E:0,A=_r(t.angle)*v,P=Math.sin(A);h=l*C,f=u*C,p=l*P,x=Math.cos(A),g=u*P}else if(t.shape==="mesh"){if(a&&a.vertexCount>0){Ai[0]=0,Ai[1]=0,Ai[2]=0,wn[0]=0,wn[1]=1,wn[2]=0,LM(a,t.meshEmitFrom,e,Ai,wn),h=Ai[0],d=Ai[1],f=Ai[2];const M=Math.hypot(wn[0],wn[1],wn[2]);if(M>1e-6){const b=1/M;p=wn[0]*b,x=wn[1]*b,g=wn[2]*b}}}else if(t.shape==="sphere"||t.shape==="hemisphere"){const M=t.shape==="hemisphere"?e.next():e.next()*2-1,b=Math.sqrt(Math.max(0,1-M*M)),E=l*b,C=M,v=u*b,A=So(o,t.radiusThickness,e);h=E*A,d=C*A,f=v*A,p=E,x=C,g=v}const m=_e(t.sphericalDirectionAmount,0,1);if(m>0){let M=p,b=x,E=g;const C=Math.hypot(h,d,f);if(C>1e-6){const D=1/C;M=h*D,b=d*D,E=f*D}const v=p+(M-p)*m,A=x+(b-x)*m,P=g+(E-g)*m,R=Math.hypot(v,A,P);if(R>1e-6){const D=1/R;p=v*D,x=A*D,g=P*D}}const S=_e(t.randomDirectionAmount,0,1);if(S>0){const M=e.next()*2-1,b=e.next()*lt,E=Math.sqrt(Math.max(0,1-M*M)),C=Math.cos(b)*E,v=Math.sin(b)*E,A=p+(C-p)*S,P=x+(M-x)*S,R=g+(v-g)*S,D=Math.hypot(A,P,R);if(D>1e-6){const O=1/D;p=A*O,x=P*O,g=R*O}}const T=Math.max(0,t.randomPositionAmount);if(T>0){const M=e.next()*2-1,b=e.next()*lt,E=Math.sqrt(Math.max(0,1-M*M)),C=Math.cbrt(e.next())*T;h+=Math.cos(b)*E*C,d+=M*C,f+=Math.sin(b)*E*C}if(t.simulationSpace==="local"){s.position[0]=h,s.position[1]=d,s.position[2]=f,s.direction[0]=p,s.direction[1]=x,s.direction[2]=g,Ou(s.direction,0,1,0);return}hi(h*t.scale[0],d*t.scale[1],f*t.scale[2],t.rotation,s.position),s.position[0]+=t.position[0],s.position[1]+=t.position[1],s.position[2]+=t.position[2],hi(p,x,g,t.rotation,s.direction),Ou(s.direction,0,1,0)}function UM(t,e,n,i,r){const s=_e(t.arc,0,360),a=s>=359.999,o=Se(t.arcSpeedValue,n,.5)*n,c=s>1e-6?o/s:0;let l;if(t.arcMode==="loop")l=Cc(n+c,1);else if(t.arcMode==="pingPong")l=OM(n+c);else if(t.arcMode==="burstSpread")if(r<=1)l=.5;else{const d=a?r:r-1;l=i/Math.max(1,d)}else l=e.next();const u=_e(t.arcSpread,0,1);if(u>0){const d=Math.max(1,Math.round(1/u));l=Math.round(l*d)/d}const h=t.arcMode==="random"||t.arcMode==="burstSpread"?o:0;return _r(Cc(s*_e(l,0,1)+h,360))}function So(t,e,n){const i=Math.max(0,t),r=_e(e,0,1);if(i<=0||r<=0)return i;const s=i*(1-r);return Math.sqrt(s*s+(i*i-s*s)*n.next())}function ui(t,e){return t.mode==="random"||t.mode==="randomCurve"?e.next():.5}function hi(t,e,n,i,r){const s=_r(i[0]),a=Math.cos(s),o=Math.sin(s),c=e*a-n*o,l=e*o+n*a,u=_r(i[1]),h=Math.cos(u),d=Math.sin(u),f=t*h-l*d,p=t*d+l*h,x=_r(i[2]),g=Math.cos(x),m=Math.sin(x);r[0]=f*g-c*m,r[1]=f*m+c*g,r[2]=p}function Ou(t,e,n,i){const r=Math.hypot(t[0],t[1],t[2]);if(r<=1e-6){t[0]=e,t[1]=n,t[2]=i;return}const s=1/r;t[0]*=s,t[1]*=s,t[2]*=s}function _r(t){return t*Math.PI/180}function Cc(t,e){return(t%e+e)%e}function OM(t){const e=Cc(t*2,2);return e<=1?e:2-e}function uh(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}var BM="MainTex",dh=["normal","roughness","metallic"],VM=.62,zM=0,GM=["Param1","Param2","Param3","Param4"],HM=["param","constant","time","textureSample","particleSubUV","uv","tilingOffset","polarCoordinates","rotateUV","panner","multiply","add","subtract","divide","lerp","oneMinus","clamp","step","smoothstep","power","min","max","remap","split","combine","swizzle","desaturate","fresnel","fresnelTrue","sphereMask","twoSidedSign","abs","frac","floor","ceil","round","sign","sqrt","length","normalize","dot","sine","cosine","if","noise","vectorNoise","particleMacroUV","antialiasedTextureMask","sphericalParticleOpacity","gradientRamp","dynamicParameter","particleColor","particleRelativeTime","particleSpeed","particleRandom","particleSize","particleDirection","particlePosition","sceneWorldNormal","sceneWorldPosition","sceneViewDirection","mainLightDirection","mainLightColor","sceneAmbientColor","sceneDiffuseLighting","unpackNormal","subgraph","output"],nl=new Set(["fresnelTrue","sceneWorldNormal","sceneWorldPosition","sceneViewDirection","mainLightDirection","mainLightColor","sceneAmbientColor","sceneDiffuseLighting"]);new Set(HM);var hh=.333;function kM(t){switch(t){case"float":return 0;case"vec2":return[0,0,0,0];case"vec3":return[0,0,0,0];case"color":return[1,1,1,1];case"texture":return"";case"bool":return!1}}function WM(t,e,n){switch(t){case"float":return oe(e,n);case"vec2":case"vec3":case"color":{const i=Array.isArray(n)?n:kM(t),[r,s]=t==="color"?[0,1]:[-1e5,1e5];return Yd(e,i,r,s)}case"texture":return typeof e=="string"?e:n;case"bool":return typeof e=="boolean"?e:n}}function wr(t){return t==="masked"||t==="opaque"}function ds(t,e){return e==="normal"?"alpha":e==="add"?"additive":e??t}function XM(t){return GM.every((e,n)=>(t==null?void 0:t[n])===e)}function qi(t,e,n){var r;const i=t.params.find(s=>s.name===n);if(i)return il(i)&&((r=e.mainTex)!=null&&r.path)?e.mainTex.path:Object.prototype.hasOwnProperty.call(e.paramOverrides,n)?WM(i.type,e.paramOverrides[n],i.default):i.default}function il(t){return t.type==="texture"&&(t.builtinRole==="mainTex"||t.name===BM)}function $M(t,e){var i;if(!e)return"";if((i=e.mainTex)!=null&&i.path)return e.mainTex.path;const n=t==null?void 0:t.params.find(il);return typeof(n==null?void 0:n.default)=="string"?n.default:""}function rl(t,e,n,i,r){const s=n.inputs.tex;if(s){const o=r.get(s),c=o?i.get(o.source):void 0;if((c==null?void 0:c.type)==="param"){const l=typeof c.params.name=="string"?c.params.name:"",u=t.params.find(h=>h.name===l);if((u==null?void 0:u.type)==="texture"){const h=il(u),d=qi(t,e,l);return{path:typeof d=="string"?d:"",isMainTex:h}}}}const a=n.params.tex;return{path:typeof a=="string"?a:"",isMainTex:!1}}function qM(t){const e={name:t.name,type:t.type,group:t.group,default:t.default};return t.inputId!==void 0&&(e.inputId=t.inputId),t.scope!=="per-material"&&(e.scope=t.scope),t.sliderMin!==void 0&&(e.sliderMin=t.sliderMin),t.sliderMax!==void 0&&(e.sliderMax=t.sliderMax),t.clampMin!==void 0&&(e.clampMin=t.clampMin),t.clampMax!==void 0&&(e.clampMax=t.clampMax),t.perParticle&&(e.perParticle=!0),t.perParticleFeed&&(e.perParticleFeed=t.perParticleFeed),t.builtinRole&&(e.builtinRole=t.builtinRole),e}function fh(t){const e={id:t.id,name:t.name,blend:t.blend,nodes:t.nodes,edges:t.edges,params:t.params.map(qM),outputs:t.outputs};return XM(t.dynamicChannelLabels)||(e.dynamicChannelLabels=t.dynamicChannelLabels),t.opacityMaskClipValue!==void 0&&t.opacityMaskClipValue!==hh&&(e.opacityMaskClipValue=t.opacityMaskClipValue),t.side!==void 0&&(e.side=t.side),t.colorVersion===1&&(e.colorVersion=1),t.shadingModel==="lit"&&(e.shadingModel="lit"),t.subgraph&&(e.subgraph=t.subgraph),t.builtin&&(e.builtin=t.builtin),e}function sl(t){return t.builtin==="sprite-master"||t.id===mi}function al(t){return{type:"texture",id:YM(t),path:t}}function YM(t){return(t.split("/").pop()??t).replace(/\.[^.]+$/,"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"texture"}var ph={backend:"three3d",label:"Three World / 3D",coordinateSpace:"world-3d",supportsTrue3dQuads:!0,supportsMeshParticles:!0,supportsGpuDepth:!0,supportsProjectedDepthSort:!1,supportsParticleContainerTier2:!1,supportsInstancedMaterialStreams:!0,supportsRuntimeSamplerBindings:!0};function ZM(t,e){return e.length>0?"blocked":t.length>0?"partial":"supported"}var KM=new Set(["subEmitters","lights"]);function mh(t,e){const n=JM(e,"three3d"),i=eS();return t.emitters.forEach((r,s)=>{const a=`emitters.${s}`;r.mode==="mesh"&&r.mesh.renderMode==="pixiShard"&&n.push({code:"mode.mesh.pixiShard",path:`${a}.mesh.renderMode`,message:"Old mesh mode is Pixi shard geometry; Three renders true mesh particles only when mesh.renderMode is meshAsset.",emitterId:r.id,emitterIndex:s}),r.mode==="mesh"&&r.mesh.renderMode==="meshAsset"&&(r.mesh.asset||i.push({code:"mode.meshAsset.missing",path:`${a}.mesh.asset`,message:"Three mesh particles require a prepared mesh asset ref.",emitterId:r.id,emitterIndex:s}));for(const[o,c]of Object.entries(r.modules))!c||!KM.has(o)||i.push({code:`module.${o}`,path:`${a}.modules.${o}`,message:`${o} is not implemented in the Three renderer MVP yet; keep it backend-gated until the Three draw path owns it.`,emitterId:r.id,emitterIndex:s});r.render.material&&r.render.material.shaderId!=="sprite-master"&&n.push({code:"material.threeAdapter",path:`${a}.render.material`,message:"Three MVP uses the fixed-function particle material adapter; custom graph lowering is backend-gated until the Three material compiler lands.",emitterId:r.id,emitterIndex:s})}),{backend:ph.backend,status:ZM(n,i),warnings:Rc(n),blockers:Rc(i),...QM(e,"three3d")}}function JM(t,e){return[].filter(n=>!n.backend||n.backend===e).map(n=>({code:n.code,path:n.path,message:n.message}))}function QM(t,e){const n=Rc(jM(t,e));return n.length>0?{notes:n}:{}}function jM(t,e){return[].filter(n=>!n.backend||n.backend===e).map(n=>({code:n.code,path:n.path,message:n.message}))}function eS(t){return[]}function Rc(t){const e=new Set,n=[];for(const i of t){const r=`${i.code}:${i.path}:${i.message}`;e.has(r)||(e.add(r),n.push(i))}return n}function Hi(t,e=[]){if(!t.nodes.some(i=>i.type==="subgraph"))return t;if(e.length>=32||e.includes(t.id))throw new Error(`Recursive material subgraph: ${[...e,t.id].join(" → ")}`);let n={...t,nodes:[...t.nodes],edges:[...t.edges],params:[...t.params]};for(const i of t.nodes.filter(r=>r.type==="subgraph")){const r=i.params.graph;if(!(r!=null&&r.subgraph))throw new Error(`Missing subgraph definition for ${i.id}`);const s=Hi(r,[...e,t.id]),a=`${i.id}/`,o=p=>a+p,c=p=>a+p,l=new Map;for(const p of r.params){const x=n.edges.find(g=>g.id===i.inputs[p.inputId??p.name]);x&&l.set(p.name,x)}const u=(p,x)=>{const g=s.nodes.find(S=>S.id===p),m=(g==null?void 0:g.type)==="param"?l.get(String(g.params.name)):void 0;return m?{source:m.source,sourceHandle:m.sourceHandle}:{source:o(p),sourceHandle:x}},h=s.nodes.filter(p=>p.type!=="output").map(p=>({...p,id:o(p.id),inputs:Object.fromEntries(Object.entries(p.inputs).map(([x,g])=>[x,g?c(g):null])),params:p.type==="param"?{...p.params,name:a+String(p.params.name)}:{...p.params}})),d=s.edges.filter(p=>{var x;return((x=s.nodes.find(g=>g.id===p.target))==null?void 0:x.type)!=="output"}).map(p=>({...p,...u(p.source,p.sourceHandle),id:c(p.id),target:o(p.target)})),f=n.edges.filter(p=>p.target!==i.id).map(p=>{if(p.source!==i.id)return p;const x=s.subgraph.outputs.find(g=>g.id===p.sourceHandle);if(!x||!s.nodes.some(g=>g.id===x.nodeId))throw new Error(`Missing output ${p.sourceHandle} in subgraph ${r.name}`);return{...p,...u(x.nodeId,x.handle)}});n={...n,subgraph:n.subgraph?{outputs:n.subgraph.outputs.map(p=>{if(p.nodeId!==i.id)return p;const x=s.subgraph.outputs.find(m=>m.id===p.handle);if(!x)throw new Error(`Missing output ${p.handle} in subgraph ${r.name}`);const g=u(x.nodeId,x.handle);return{...p,nodeId:g.source,handle:g.sourceHandle}})}:void 0,nodes:[...n.nodes.filter(p=>p.id!==i.id),...h],edges:[...f,...d],params:[...n.params,...s.params.map(p=>({...p,name:a+p.name,builtinRole:void 0}))]}}return n}var Bu=1;function tS(t){return`fnv1a32:${nS(Pc(t))}`}function Pc(t){if(t===null||typeof t!="object")return JSON.stringify(t)??"null";if(Array.isArray(t))return`[${t.map(n=>Pc(n)).join(",")}]`;const e=t;return`{${Object.keys(e).sort().filter(n=>e[n]!==void 0).map(n=>`${JSON.stringify(n)}:${Pc(e[n])}`).join(",")}}`}function nS(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619)>>>0;return e.toString(16).padStart(8,"0")}function iS(t,e={}){const n=rS(t.manifest);oS(n);const i=t.assetPaths?new Set([...t.assetPaths].map(ol)):null;if(e.requireEveryAsset&&!i)throw new Error("Official VFX export asset paths are required for this load operation.");const r=new Map,s=new Map,a=new Set,o=new Set,c=new Set,l=new Set;for(const h of n.assets)Gs(c,h.path,`duplicate asset path "${h.path}"`),Gs(l,`${h.type}:${h.id}`,`duplicate asset identity "${h.type}:${h.id}"`);for(const h of n.effects){if(Gs(a,h.id,`duplicate effect id "${h.id}"`),Gs(o,h.path,`duplicate effect path "${h.path}"`),cS(h,e.requiredBackend),!(h.path in t.effectsByPath))throw new Error(`Official VFX export is missing ${h.path}.`);const d=sS(t.effectsByPath[h.path]);lS(d,h,n.generatedAt);for(const f of d.assets)if(!uS(n.assets,f))throw new Error(`Effect "${d.id}" references asset absent from the manifest: ${f.path}.`);r.set(d.id,d),s.set(h.path,d)}const u=tS(n.effects.map(h=>({path:h.path,sourceHash:h.sourceHash})));if(n.sourceHash!==u)throw new Error(`Official VFX manifest source hash is stale: expected ${u}, received ${n.sourceHash}.`);for(const h of e.requiredEffectIds??[])if(!r.has(h))throw new Error(`Official VFX export is missing required effect "${h}".`);if(i){for(const h of n.assets)if(!i.has(h.path))throw new Error(`Official VFX export is missing asset ${h.path}.`)}return{manifest:n,effectsById:r,effectsByPath:s}}function rS(t){const e=ki(t,"VFX export manifest");if(e.kind!=="vfx-manifest")throw new Error('VFX export manifest kind must be "vfx-manifest".');xh(e.version,"VFX export manifest"),un(e.generatedAt,"VFX export manifest generatedAt"),un(e.sourceHash,"VFX export manifest sourceHash");const n=Di(e.effects,"VFX export manifest effects"),i=Di(e.assets,"VFX export manifest assets"),r=ki(e.validation,"VFX export manifest validation");if(typeof r.valid!="boolean")throw new Error("VFX export manifest validation.valid must be boolean.");Di(r.errors,"VFX export manifest validation errors"),Di(r.warnings,"VFX export manifest validation warnings"),Di(r.blockers,"VFX export manifest validation blockers");for(const[s,a]of n.entries())aS(a,s);for(const[s,a]of i.entries())gh(a,s);return t}function sS(t){const e=ki(t,"VFX exported effect");if(e.kind!=="vfx-effect")throw new Error('VFX exported effect kind must be "vfx-effect".');xh(e.version,"VFX exported effect"),un(e.generatedAt,"VFX exported effect generatedAt"),un(e.id,"VFX exported effect id"),un(e.sourceEffectId,"VFX exported effect sourceEffectId"),un(e.sourceHash,"VFX exported effect sourceHash"),Di(e.emitters,"VFX exported effect emitters");const n=Di(e.assets,"VFX exported effect assets");ki(e.support,"VFX exported effect support");for(const[i,r]of n.entries())gh(r,i);return t}function aS(t,e){const n=ki(t,`VFX manifest effect ${e}`);return un(n.id,`VFX manifest effect ${e} id`),un(n.name,`VFX manifest effect ${e} name`),ol(un(n.path,`VFX manifest effect ${e} path`)),un(n.sourceEffectId,`VFX manifest effect ${e} sourceEffectId`),un(n.sourceHash,`VFX manifest effect ${e} sourceHash`),ki(n.support,`VFX manifest effect ${e} support`),t}function gh(t,e){const n=ki(t,`VFX manifest asset ${e}`);if(un(n.id,`VFX manifest asset ${e} id`),n.type!=="texture"&&n.type!=="material"&&n.type!=="mesh")throw new Error(`VFX manifest asset ${e} has unsupported type.`);return ol(un(n.path,`VFX manifest asset ${e} path`)),t}function oS(t){if(!t.validation.valid||t.validation.blockers.length>0)throw new Error("Official VFX export is blocked by validation errors.")}function cS(t,e){if(!e)return;const n=t.support.backends[e];if(!n||n.status==="blocked"||n.blockers.length>0)throw new Error(`Effect "${t.id}" is blocked on required backend "${e}".`)}function lS(t,e,n){const i=[];if(t.id!==e.id&&i.push("id"),t.sourceEffectId!==e.sourceEffectId&&i.push("sourceEffectId"),t.sourceHash!==e.sourceHash&&i.push("sourceHash"),t.generatedAt!==n&&i.push("generatedAt"),i.length>0)throw new Error(`Official VFX effect ${e.path} does not match its manifest entry (${i.join(", ")}).`)}function uS(t,e){return t.some(n=>n.type===e.type&&n.id===e.id&&n.path===e.path)}function ol(t){const e=t.replace(/\\/g,"/");if(e.length===0||e.startsWith("/")||e==="."||e===".."||e.startsWith("../")||e.includes("/../")||e.includes("//"))throw new Error(`Unsafe VFX export path "${t}".`);return e.replace(/^\.\//,"")}function Gs(t,e,n){if(t.has(e))throw new Error(`Official VFX manifest has ${n}.`);t.add(e)}function xh(t,e){if(t!==Bu)throw new Error(`${e} version must be ${Bu}; received ${String(t)}.`)}function ki(t,e){if(!t||typeof t!="object"||Array.isArray(t))throw new Error(`${e} must be an object.`);return t}function Di(t,e){if(!Array.isArray(t))throw new Error(`${e} must be an array.`);return t}function un(t,e){if(typeof t!="string"||t.length===0)throw new Error(`${e} must be a non-empty string.`);return t}var dS=0;function hS(){return`vfx-${++dS}`}function Vu(t,e,n,i,r,s,a){if(t.version!==1||t.enabled===!1||t.mode==="disabled"||t.maxLights===0)return null;const o=t.useParticleColor&&t.mode==="particles"?a:void 0,c=o?[o[0],o[1],o[2]]:rn(t.color,i),l=Se(t.intensity,i,s,r)*(o?o[3]:sn(t.color,i)),u=Se(t.radius,i,s,r);return!Number.isFinite(l)||l<=0||!Number.isFinite(u)||u<=0||!n.every(Number.isFinite)||!c.every(Number.isFinite)?null:{id:e,position:[...n],color:[...c],intensity:l,radius:u}}function fS(t){return t!=="textureAlpha"}var zu=.2126,Gu=.7152,Hu=.0722;function pS(t,e,n){if(e==="textureAlpha"){if(!n)return;for(let i=3;i<t.length;i+=4)t[i]=255-t[i];return}for(let i=0;i+3<t.length;i+=4){const r=t[i],s=t[i+1],a=t[i+2];let o;switch(e){case"red":o=r;break;case"green":o=s;break;case"blue":o=a;break;case"luminance":o=zu*r+Gu*s+Hu*a;break;case"inverseLuminance":o=255-(zu*r+Gu*s+Hu*a);break;case"constant":o=255;break;default:o=t[i+3];break}t[i+3]=n?255-o:o}}function mS(t,e,n,i=[1,1,1,1]){const r=t.colorOverLifetime,s=t.colorOverTrail;rn(r,e,i);const a=i[0],o=i[1],c=i[2];return rn(s,n,i),i[0]*=a,i[1]*=o,i[2]*=c,i[3]=sn(r,e)*sn(s,n),i}var vh=[0,1,0],gS=[0,0,1];function xS(t,e,n,i){return t+e*n+i}function Yt(t,e,n){return Math.max(e,Math.min(n,t))}function Fi(t,e,n){return t+(e-t)*n}function Hr(t,e,n){const i=Yt((n-t)/Math.max(1e-6,e-t),0,1);return i*i*(3-2*i)}var vS=new Set(["value","fastGradient","perlinGradient","simplex","voronoi"]),_S=new Set(["cellnoise","perlin3d","perlinGradient","perlinCurl","voronoi"]);function Qr(t,e){return Math.round(oe(t,e))}function MS(t){return{kind:vS.has(t.function)?t.function:"perlinGradient",scale:Math.max(1e-4,oe(t.scale,16)),repeatSize:Math.max(1,Qr(t.repeatSize,256)),levels:Math.max(1,Math.min(8,Qr(t.levels,1))),levelScale:oe(t.levelScale,2),gain:oe(t.gain,.5),turbulence:t.turbulence===!0,tiling:t.tiling!==!1,seed:Qr(t.seed,0),outputMin:oe(t.outputMin,0),outputMax:oe(t.outputMax,1)}}function SS(t){return{kind:_S.has(t.function)?t.function:"perlinCurl",scale:Math.max(1e-4,oe(t.scale,8)),tileSize:Math.max(1,Qr(t.tileSize,256)),tiling:t.tiling!==!1,seed:Qr(t.seed,0),normalizeOutput:t.normalizeOutput!==!1}}function _h(t){let e=t|0;return e=Math.imul(e^e>>>16,73244475),e=Math.imul(e^e>>>16,73244475),(e^e>>>16)>>>0}function Zt(t,e,n){const i=Math.imul(t|0,522133279)^Math.imul(e|0,2246822507)^Math.imul(n|0,3266489909)|0;return _h(i)/4294967296}function yS(t,e){return e<=0?t:(t%e+e)%e}function kt(t,e){return e>0?yS(t,e):t}function Ui(t){return t*t*t*(t*(t*6-15)+10)}function qe(t,e,n){return t+(e-t)*n}function cl(t){return t<0?0:t>1?1:t}function ES(t,e,n,i){const r=Math.floor(t),s=Math.floor(e),a=t-r,o=e-s,c=Ui(a),l=Ui(o),u=Zt(kt(r,i),kt(s,i),n),h=Zt(kt(r+1,i),kt(s,i),n),d=Zt(kt(r,i),kt(s+1,i),n),f=Zt(kt(r+1,i),kt(s+1,i),n);return qe(qe(u,h,c),qe(d,f,c),l)}function Yr(t,e,n,i){const r=Math.floor(t),s=Math.floor(e),a=t-r,o=e-s,c=Ui(a),l=Ui(o),u=(m,S,T,M)=>{const b=Zt(kt(m,i),kt(S,i),n)*Math.PI*2;return Math.cos(b)*T+Math.sin(b)*M},h=u(r,s,a,o),d=u(r+1,s,a-1,o),f=u(r,s+1,a,o-1),p=u(r+1,s+1,a-1,o-1),x=qe(h,d,c),g=qe(f,p,c);return cl(qe(x,g,l)*.7071+.5)}function bS(t,e,n,i){const r=Math.floor(t),s=Math.floor(e);let a=1/0;for(let o=-1;o<=1;o++)for(let c=-1;c<=1;c++){const l=r+c,u=s+o,h=kt(l,i),d=kt(u,i),f=Zt(h,d,n),p=Zt(h,d,n^2654435769|0),x=l+f-t,g=u+p-e,m=x*x+g*g;m<a&&(a=m)}return Math.min(1,Math.sqrt(a))}function TS(t){switch(t){case"value":return ES;case"voronoi":return bS;default:return Yr}}function AS(t,e,n){const i=t.scale,r=t.tiling?t.repeatSize:0,s=TS(t.kind);let a=1,o=1,c=0,l=0;for(let h=0;h<t.levels;h++){const d=i*o;let f=s(e*d,n*d,t.seed+h*101,r);t.turbulence&&(f=Math.abs(f*2-1)),c+=f*a,l+=a,a*=t.gain,o*=t.levelScale}const u=cl(l>0?c/l:c);return t.outputMin+u*(t.outputMax-t.outputMin)}function wS(t,e,n){const i=t.scale,r=t.tiling?t.tileSize:0;return CS(t,e,n,i,r)}function CS(t,e,n,i,r){const s=e*i,a=n*i,o=t.seed,c=l=>t.normalizeOutput?cl(l*.5+.5):l;switch(t.kind){case"cellnoise":{const l=Math.floor(s),u=Math.floor(a),h=kt(l,r),d=kt(u,r);return[Zt(h,d,o),Zt(h,d,o^1757159915|0),Zt(h,d,o^461845907|0),1]}case"voronoi":{const l=Math.floor(s),u=Math.floor(a);let h=1/0,d=0,f=0;for(let p=-1;p<=1;p++)for(let x=-1;x<=1;x++){const g=l+x,m=u+p,S=kt(g,r),T=kt(m,r),M=g+Zt(S,T,o),b=m+Zt(S,T,o^2654435769|0),E=(M-s)*(M-s)+(b-a)*(b-a);E<h&&(h=E,d=S,f=T)}return[Zt(d,f,o^74565|0),Zt(d,f,o^424090|0),Zt(d,f,o^773615|0),Math.min(1,Math.sqrt(h))]}case"perlinCurl":{const u=(g,m)=>Yr(g,m,o,r)*2-1,h=(u(s+.01,a)-u(s-.01,a))/.02;let f=(u(s,a+.01)-u(s,a-.01))/(2*.01),p=-h;const x=Math.hypot(f,p)||1;return f/=x,p/=x,[c(f),c(p),.5,1]}default:{const l=Yr(s,a,o,r)*2-1,u=Yr(s,a,o^1374496523|0,r)*2-1,h=Yr(s,a,o^625341585|0,r)*2-1;return[c(l),c(u),c(h),1]}}}function ku(t,e,n,i){const r=Math.imul(t|0,522133279)^Math.imul(e|0,2246822507)^Math.imul(n|0,668265263)^Math.imul(i|0,3266489909)|0;return _h(r)/4294967296}var yo=.4;function Eo(t){const e=t*(t-1);return 30*e*e}var RS=[0,0,0];function li(t,e,n,i,r){const s=ku(t,e,n,i)*Math.PI*2,a=ku(t,e,n,i^2654435769|0)*2-1,o=Math.sqrt(Math.max(0,1-a*a));r[0]=Math.cos(s)*o,r[1]=Math.sin(s)*o,r[2]=a}function bo(t,e,n,i,r){const s=Math.floor(t),a=Math.floor(e),o=Math.floor(n),c=t-s,l=e-a,u=n-o,h=Ui(c),d=Ui(l),f=Ui(u),p=RS;li(s,a,o,i,p);const x=p[0],g=p[1],m=p[2],S=x*c+g*l+m*u;li(s+1,a,o,i,p);const T=p[0],M=p[1],b=p[2],E=T*(c-1)+M*l+b*u;li(s,a+1,o,i,p);const C=p[0],v=p[1],A=p[2],P=C*c+v*(l-1)+A*u;li(s+1,a+1,o,i,p);const R=p[0],D=p[1],O=p[2],k=R*(c-1)+D*(l-1)+O*u;li(s,a,o+1,i,p);const L=p[0],$=p[1],V=p[2],Y=L*c+$*l+V*(u-1);li(s+1,a,o+1,i,p);const te=p[0],ne=p[1],j=p[2],re=te*(c-1)+ne*l+j*(u-1);li(s,a+1,o+1,i,p);const Fe=p[0],Be=p[1],ae=p[2],W=Fe*c+Be*(l-1)+ae*(u-1);li(s+1,a+1,o+1,i,p);const se=p[0],U=p[1],le=p[2],be=se*(c-1)+U*(l-1)+le*(u-1),ye=qe(qe(qe(x,T,h),qe(C,R,h),d),qe(qe(L,te,h),qe(Fe,se,h),d),f),tt=qe(qe(qe(g,M,h),qe(v,D,h),d),qe(qe($,ne,h),qe(Be,U,h),d),f),He=qe(qe(qe(m,b,h),qe(A,O,h),d),qe(qe(V,j,h),qe(ae,le,h),d),f),nt=qe(qe(E-S,k-P,d),qe(re-Y,be-W,d),f),Ye=qe(qe(P-S,k-E,h),qe(W-Y,be-re,h),f),$e=qe(qe(Y-S,re-E,h),qe(W-P,be-k,h),d);r[0]=(ye+Eo(c)*nt)*1.155,r[1]=(tt+Eo(l)*Ye)*1.155,r[2]=(He+Eo(u)*$e)*1.155}var PS=[0,0,0];function DS(t,e,n,i,r){const s=i|0,a=i^1374496523|0,o=i^625341585|0,c=PS;bo(t,e,n,s,c);const l=c[1],u=c[2];bo(t,e,n,a,c);const h=c[0],d=c[2];bo(t,e,n,o,c);const f=c[0],p=c[1];r[0]=(p-d)*yo,r[1]=(u-f)*yo,r[2]=(h-l)*yo}function Mh(t,e){t.modules.forceOverLifetime&&IS(t.advanced.forceOverLifetime,e),t.modules.externalForces&&LS(t.advanced.externalForces,e),t.modules.noise&&BS(t.advanced.noise,e)}function IS(t,{seed:e,normalizedAge:n,loopAge:i,ageSeconds:r,world:s}){const a=Se(t.multiplier,n,e,i),o=To(e,11)*t.randomized[0],c=To(e,23)*t.randomized[1],l=To(e,37)*t.randomized[2],u=.5*r*r*a;s[0]+=(t.force[0]+o)*u,s[1]+=(t.force[1]+c)*u,s[2]+=(t.force[2]+l)*u}function LS(t,{seed:e,normalizedAge:n,loopAge:i,ageSeconds:r,world:s,velocity:a}){const o=Se(t.gravityMultiplier,n,e,i),c=Se(t.drag,n,e,i),l=.5*r*r;if(s[0]+=t.wind[0]*l,s[1]+=t.wind[1]*l-a[1]*Math.max(0,o-1)*l,s[2]+=t.wind[2]*l,c>0){const u=Math.max(0,1-c*r*.15);s[0]*=u,s[2]*=u}if(Math.abs(t.vortexStrength)>1e-4){const u=t.vortexStrength*r*.03,h=s[0],d=s[2];s[0]+=-d*u,s[2]+=h*u}}var FS=.1,kr=1e-6,NS=64,US=1/120,ha={position:[0,0,0],velocity:[0,0,0],scratchA:[0,0,0],scratchB:[0,0,0]},OS={seed:0,normalizedAge:0,loopAge:0,ageSeconds:0,timeSeconds:0,world:ha.position,velocity:ha.velocity},Hs=[0,0,0];function BS(t,{seed:e,normalizedAge:n,loopAge:i,timeSeconds:r,world:s}){const a=Se(t.strength,n,e,i);if(a<=0)return;const o=Math.max(1e-4,t.frequency);let c=a,l=0,u=0,h=0;if(t.mode==="curl"){const p=r*t.speed;for(let x=0;x<t.octaves;x++){const g=o*2**x;DS((s[0]+t.scroll[0]*p)*g+p*.35,(s[1]+t.scroll[1]*p)*g+p*.61,(s[2]+t.scroll[2]*p)*g+p*.83,x*101,Hs),l+=Hs[0]*c,u+=Hs[1]*c,h+=Hs[2]*c,c*=t.damping}}else{const p=r*t.speed+e*17.17;for(let x=0;x<t.octaves;x++){const g=o*2**x;l+=Math.sin((s[0]+t.scroll[0]*p+e)*g+x*5.31)*c,u+=Math.sin((s[1]+t.scroll[1]*p+e)*g+x*7.13)*c,h+=Math.sin((s[2]+t.scroll[2]*p+e)*g+x*3.77)*c,c*=t.damping}}const d=Math.min(1,Math.max(0,n/FS)),f=d*d*(3-2*d);s[0]+=l*f,s[1]+=u*f,s[2]+=h*f}function VS(t,e){const n=t.advanced.collision;if(n.mode!=="plane")return!0;const i=e.world,r=e.velocity,s=n.planeY+n.radius,a=i[1];if(a<s-n.killBelow)return!1;if(a>=s)return!0;const o=t.modules.velocity?Se(t.forces.gravityValue,e.normalizedAge,e.seed,e.loopAge):0,c=Math.max(0,o),l=r[1],u=s-a,h=l*l-4*c*u,d=1-n.dampen,f=r[0],p=r[2];if(h<=0||l>=0)return i[1]=s,r[0]=f*d,r[1]=0,r[2]=p*d,!0;const x=Math.sqrt(h),g=2*u/(x-l);i[0]=i[0]-f*n.dampen*g,i[2]=i[2]-p*n.dampen*g,r[0]=f*d,r[2]=p*d;let m=n.bounce*x,S=g;if(c>kr&&m>kr)for(let M=0;M<NS;M++){const b=m/c;if(S<=b)break;if(S-=b,m*=n.bounce,m<=kr){m=0;break}}const T=c<=kr||S<=m/c;return m>kr&&T?(i[1]=s+m*S-c*S*S,r[1]=m-2*c*S):(i[1]=s,r[1]=0),!0}function zS(t,e,n,i,r,s,a,o,c,l,u,h){const d=US;GS(t,e,n,i+d,r,s+d,a,o,c,l,ha,OS);const f=1/d,p=ha.position;return h[0]=(p[0]-u[0])*f,h[1]=(p[1]-u[1])*f,h[2]=(p[2]-u[2])*f,h}function GS(t,e,n,i,r,s,a,o,c,l,u,h){const d=Math.max(0,i),f=Math.min(1,Math.max(0,d/Math.max(.001,r)));tl(t,e,n,d,f,c,u,l),h.seed=a,h.normalizedAge=f,h.loopAge=o,h.ageSeconds=d,h.timeSeconds=s,Mh(t,h),Sa(t,e,n,u.position,u.velocity,c)}function HS(t,e,n,i,r,s){let a=t.modules.color?[...rn(t.color.gradient,e),sn(t.color.gradient,e)]:[1,1,1,1];if(t.modules.colorBySpeed){const o=t.advanced.colorBySpeed,c=_a(o.speedRange,n),l=[...rn(o.gradient,c),sn(o.gradient,c)];a=Sh(a,l,o.blend)}return t.modules.lights&&(a=qS(t.advanced.lights,e,n,i,a,s)),[ks(a[0]),ks(a[1]),ks(a[2]),ks(a[3])]}function kS(t,e,n,i){if(!t.modules.sizeBySpeed)return 1;const r=t.advanced.sizeBySpeed,s=_a(r.speedRange,e),a=Se(r.multiplier,s,n,i);return 1+(Math.max(0,a)-1)*r.blend}function WS(t,e,n,i,r){if(!t.modules.rotationBySpeed)return 0;const s=t.advanced.rotationBySpeed,a=_a(s.speedRange,e);return Se(s.angularVelocity,a,i,r)*n*s.blend}function XS(t,e,n,i){const r=Math.max(1,Math.round(t.tiles[0])),s=Math.max(1,Math.round(t.tiles[1])),a=Math.max(1,r*s),o=Math.min(Math.max(0,Math.round(t.startFrame)),a-1),c=typeof t.endFrame=="number"&&Number.isFinite(t.endFrame)?Math.round(t.endFrame):a-1,u=Math.min(Math.max(o,c),a-1)-o+1,d=(t.randomStartFrame?Math.floor(yh(n,71)*u):0)+Se(t.frameOverTime,e,n,i)*Math.max(0,t.cycles);return o+YS(Math.floor(d),u)}function $S(t,e,n,i){const r=Math.max(1,Math.round(t.tiles[0])),s=Math.max(1,Math.round(t.tiles[1])),a=Math.max(1,r*s),o=XS(t,e,n,i);return{frame:o,column:o%r,row:Math.floor(o/r),tilesX:r,tilesY:s,totalFrames:a}}function qS(t,e,n,i,r,s){const a=Se(t.intensity,e,i,s);if(a<=0)return r;const o=Math.max(0,Se(t.radius,e,i,s)),c=o>0?Math.min(1,o/(o+n)):1,l=a*c*.35;return t.additive?[r[0]+t.color[0]*l,r[1]+t.color[1]*l,r[2]+t.color[2]*l,r[3]]:Sh(r,[...t.color,r[3]],l)}function Sh(t,e,n){return ah(t,e,n)}function To(t,e){return yh(t,e)*2-1}function yh(t,e){const n=Math.sin(t*127.1+e*311.7)*43758.5453123;return n-Math.floor(n)}function ks(t){return Math.max(0,Math.min(1,t))}function YS(t,e){return(t%e+e)%e}var ZS=new Set(["param","constant","textureSample","particleSubUV","uv","tilingOffset","multiply","add","subtract","divide","lerp","oneMinus","clamp","step","smoothstep","power","min","max","remap","split","combine","swizzle","desaturate","fresnel","sphereMask","gradientRamp","abs","frac","floor","ceil","round","sign","sqrt","length","normalize","dot","sine","cosine","if","noise","vectorNoise","antialiasedTextureMask","sphericalParticleOpacity","particleMacroUV","output"]);function Eh(t,e){switch(e){case"R":case"Param1":return[t[0],t[0],t[0],t[0]];case"G":case"Param2":return[t[1],t[1],t[1],t[1]];case"B":case"Param3":return[t[2],t[2],t[2],t[2]];case"A":case"Param4":return[t[3],t[3],t[3],t[3]];default:return t}}var Ao=[.2126,.7152,.0722,0];function gt(t){if(Array.isArray(t))return[t[0]??0,t[1]??0,t[2]??0,t[3]??0];if(typeof t=="number")return[t,t,t,t];if(typeof t=="boolean"){const e=t?1:0;return[e,e,e,e]}return[0,0,0,0]}function KS(t,e){return[t[0]*e[0],t[1]*e[1],t[2]*e[2],t[3]*e[3]]}function JS(t,e){return[t[0]+e[0],t[1]+e[1],t[2]+e[2],t[3]+e[3]]}function QS(t,e){return[t[0]-e[0],t[1]-e[1],t[2]-e[2],t[3]-e[3]]}function jS(t,e){return[e[0]===0?0:t[0]/e[0],e[1]===0?0:t[1]/e[1],e[2]===0?0:t[2]/e[2],e[3]===0?0:t[3]/e[3]]}function ey(t,e,n){return[Fi(t[0],e[0],n[0]),Fi(t[1],e[1],n[1]),Fi(t[2],e[2],n[2]),Fi(t[3],e[3],n[3])]}function Ws(t){return t-Math.floor(t)}function dr(t,e){switch(e){case"g":return t[1];case"b":return t[2];case"a":return t[3];default:return t[0]}}function ty(t,e){if(t.length===0)return[1,1,1,1];const n=t[0];if(e<=n.position)return[...n.color];const i=t[t.length-1];if(e>=i.position)return[...i.color];for(let r=0;r<t.length-1;r++){const s=t[r],a=t[r+1];if(e>=s.position&&e<=a.position){const o=a.position-s.position,c=o<=0?0:(e-s.position)/o;return ah(s.color,a.color,c)}}return[...i.color]}function ny(t){if(!Array.isArray(t))return[];const e=[];for(const n of t)if(n&&typeof n=="object"){const i=n;e.push({position:Yt(oe(i.position,0),0,1),color:gt(i.color)})}return e}function iy(t){return Array.isArray(t)?[t[0]??0,t[1]??0,t[2]??0,t[3]??0]:[1,1,1,1]}function ry(t,e,n,i){return t.params.find(s=>s.name===n&&s.type==="color")?iy(qi(t,e,n)):i}function Wu(t,e,n,i){if(!t.params.find(a=>a.name===n))return i;const s=qi(t,e,n);return typeof s=="number"?s:i}function bh(t,e,n,i,r){if(r.has(t.id))return[0,0,0,0];r.add(t.id);const s=ay(t,e,n,i,r);return r.delete(t.id),s}function sy(t,e,n,i,r,s,a){const o=t.inputs[e];if(!o)return n;const c=s.get(o);if(!c)return n;const l=r.get(c.source);if(!l)return n;const u=bh(l,i,r,s,a);return Eh(u,c.sourceHandle)}function Xu(t,e,n,i){return rl(e.graph,e.instance,t,n,i)}function ay(t,e,n,i,r){const s=(c,l)=>sy(t,c,l,e,n,i,r),a=()=>{if(t.inputs.uv){const c=s("uv",[e.uv[0],e.uv[1],0,0]);return[c[0],c[1]]}return[e.uv[0],e.uv[1]]},o=t.params;switch(t.type){case"constant":return gt(o.value);case"param":{const c=typeof o.name=="string"?o.name:"",l=qi(e.graph,e.instance,c);return gt(l)}case"textureSample":case"particleSubUV":{const[c,l]=a(),u=Xu(t,e,n,i);if(u.path&&!u.isMainTex&&e.samplerForPath){const h=e.samplerForPath(u.path,[c,l],t);if(h)return h}return[...e.source]}case"uv":return[e.uv[0],e.uv[1],0,0];case"polarCoordinates":{const c=s("UV",[e.uv[0],e.uv[1],0,0]),l=s("Center",gt(o.center??[.5,.5,0,0])),u=s("Radial Scale",gt(oe(o.radialScale,1)))[0],h=s("Length Scale",gt(oe(o.lengthScale,1)))[0],d=c[0]-l[0],f=c[1]-l[1];return[Math.hypot(d,f)*2*u,Math.atan2(d,f)/6.28*h,0,0]}case"tilingOffset":{const c=s("uv",[e.uv[0],e.uv[1],0,0]),l=s("tile",gt(o.tile??[1,1,0,0])),u=s("offset",gt(o.offset));return[c[0]*l[0]+u[0],c[1]*l[1]+u[1],0,0]}case"multiply":return KS(s("a",gt(oe(o.a,1))),s("b",gt(oe(o.b,1))));case"add":return JS(s("a",gt(oe(o.a,0))),s("b",gt(oe(o.b,0))));case"subtract":return QS(s("a",gt(oe(o.a,0))),s("b",gt(oe(o.b,0))));case"divide":return jS(s("a",gt(oe(o.a,0))),s("b",gt(oe(o.b,1))));case"min":{const c=s("a",[0,0,0,0]),l=s("b",[0,0,0,0]);return[Math.min(c[0],l[0]),Math.min(c[1],l[1]),Math.min(c[2],l[2]),Math.min(c[3],l[3])]}case"max":{const c=s("a",[0,0,0,0]),l=s("b",[0,0,0,0]);return[Math.max(c[0],l[0]),Math.max(c[1],l[1]),Math.max(c[2],l[2]),Math.max(c[3],l[3])]}case"lerp":{const c=s("a",gt(oe(o.a,0))),l=s("b",gt(oe(o.b,1))),u=t.inputs.t?s("t",[0,0,0,0]):gt(oe(o.t,.5));return ey(c,l,u)}case"oneMinus":{const c=s("in",[0,0,0,0]);return[1-c[0],1-c[1],1-c[2],1-c[3]]}case"clamp":{const c=s("in",[0,0,0,0]),l=t.inputs.min?s("min",[0,0,0,0])[0]:oe(o.min,0),u=t.inputs.max?s("max",[1,1,1,1])[0]:oe(o.max,1);return[Yt(c[0],l,u),Yt(c[1],l,u),Yt(c[2],l,u),Yt(c[3],l,u)]}case"step":{const c=s("in",[0,0,0,0]),l=t.inputs.edge?s("edge",[.5,0,0,0])[0]:oe(o.edge,.5);return[c[0]>=l?1:0,c[1]>=l?1:0,c[2]>=l?1:0,c[3]>=l?1:0]}case"smoothstep":{const c=s("in",[0,0,0,0]),l=t.inputs.edge0?s("edge0",[0,0,0,0])[0]:oe(o.edge0,0),u=t.inputs.edge1?s("edge1",[1,1,1,1])[0]:oe(o.edge1,1);return[Hr(l,u,c[0]),Hr(l,u,c[1]),Hr(l,u,c[2]),Hr(l,u,c[3])]}case"power":{const c=s("in",[0,0,0,0]),l=t.inputs.exp?s("exp",[1,1,1,1]):gt(oe(o.exponent,1));return[Math.pow(Math.max(0,c[0]),l[0]),Math.pow(Math.max(0,c[1]),l[1]),Math.pow(Math.max(0,c[2]),l[2]),Math.pow(Math.max(0,c[3]),l[3])]}case"remap":{const c=s("in",[0,0,0,0]),l=t.inputs.inMin?s("inMin",[0,0,0,0])[0]:oe(o.inMin,0),u=t.inputs.inMax?s("inMax",[1,1,1,1])[0]:oe(o.inMax,1),h=t.inputs.outMin?s("outMin",[0,0,0,0])[0]:oe(o.outMin,0),d=t.inputs.outMax?s("outMax",[1,1,1,1])[0]:oe(o.outMax,1),f=u-l,p=x=>{const g=f===0?0:(x-l)/f;return h+g*(d-h)};return[p(c[0]),p(c[1]),p(c[2]),p(c[3])]}case"desaturate":{const c=s("in",[0,0,0,0]),l=Yt(oe(o.fraction,1),0,1),u=c[0]*Ao[0]+c[1]*Ao[1]+c[2]*Ao[2];return[Fi(c[0],u,l),Fi(c[1],u,l),Fi(c[2],u,l),c[3]]}case"split":{const c=s("in",[0,0,0,0]),l=dr(c,typeof o.channel=="string"?o.channel:"r");return[l,l,l,l]}case"combine":return[s("r",[0,0,0,0])[0],s("g",[0,0,0,0])[0],s("b",[0,0,0,0])[0],t.inputs.a?s("a",[1,0,0,0])[0]:1];case"swizzle":{const c=s("in",[0,0,0,0]),l=typeof o.pattern=="string"&&o.pattern.length>=4?o.pattern:"rgba";return[dr(c,l[0]),dr(c,l[1]),dr(c,l[2]),dr(c,l[3])]}case"fresnel":{const c=gt(o.center),l=oe(o.power,1),u=Math.hypot(e.uv[0]-c[0],e.uv[1]-c[1])*2,h=Math.pow(Math.max(0,1-Math.min(1,u)),l);return[h,h,h,h]}case"sphereMask":{const c=gt(o.center),l=oe(o.radius,.5),u=Yt(oe(o.hardness,.5),0,1),h=Math.hypot(e.uv[0]-c[0],e.uv[1]-c[1]),d=l*(1-u)+1e-4,f=Yt(1-(h-(l-d))/d,0,1);return[f,f,f,f]}case"abs":{const c=s("in",[0,0,0,0]);return[Math.abs(c[0]),Math.abs(c[1]),Math.abs(c[2]),Math.abs(c[3])]}case"frac":{const c=s("in",[0,0,0,0]);return[Ws(c[0]),Ws(c[1]),Ws(c[2]),Ws(c[3])]}case"floor":{const c=s("in",[0,0,0,0]);return[Math.floor(c[0]),Math.floor(c[1]),Math.floor(c[2]),Math.floor(c[3])]}case"ceil":{const c=s("in",[0,0,0,0]);return[Math.ceil(c[0]),Math.ceil(c[1]),Math.ceil(c[2]),Math.ceil(c[3])]}case"round":{const c=s("in",[0,0,0,0]);return[Math.round(c[0]),Math.round(c[1]),Math.round(c[2]),Math.round(c[3])]}case"sign":{const c=s("in",[0,0,0,0]);return[Math.sign(c[0]),Math.sign(c[1]),Math.sign(c[2]),Math.sign(c[3])]}case"sqrt":{const c=s("in",[0,0,0,0]);return[Math.sqrt(Math.max(0,c[0])),Math.sqrt(Math.max(0,c[1])),Math.sqrt(Math.max(0,c[2])),Math.sqrt(Math.max(0,c[3]))]}case"length":{const c=s("in",[0,0,0,0]),l=Math.hypot(c[0],c[1],c[2]);return[l,l,l,l]}case"normalize":{const c=s("in",[0,0,0,0]),l=Math.hypot(c[0],c[1],c[2])||1;return[c[0]/l,c[1]/l,c[2]/l,c[3]]}case"dot":{const c=s("a",[0,0,0,0]),l=s("b",[0,0,0,0]),u=c[0]*l[0]+c[1]*l[1]+c[2]*l[2];return[u,u,u,u]}case"sine":case"cosine":{const c=s("in",[0,0,0,0]),l=oe(o.period,1)||1,u=t.type==="sine"?Math.sin:Math.cos,h=2*Math.PI/l;return[u(c[0]*h),u(c[1]*h),u(c[2]*h),u(c[3]*h)]}case"if":{const c=s("a",[0,0,0,0])[0],l=s("b",[0,0,0,0])[0],u=1e-6;return c>l+u?s("aGreater",[0,0,0,0]):c<l-u?s("aLess",[0,0,0,0]):t.inputs.aEqual?s("aEqual",[0,0,0,0]):s("aGreater",[0,0,0,0])}case"noise":{const c=s("Position",[e.uv[0],e.uv[1],0,0]),l=AS(MS(o),c[0],c[1]);return[l,l,l,l]}case"vectorNoise":{const c=s("Position",[e.uv[0],e.uv[1],0,0]);return wS(SS(o),c[0],c[1])}case"antialiasedTextureMask":{const c=typeof o.channel=="string"?o.channel:"a",[l,u]=a(),h=Xu(t,e,n,i),d=h.path&&!h.isMainTex&&e.samplerForPath?e.samplerForPath(h.path,[l,u],t):null,f=dr(d??e.source,c),p=t.inputs.Threshold?s("Threshold",[.5,0,0,0])[0]:oe(o.threshold,.5),x=Math.max(oe(o.softness,.04),1e-4),g=Hr(p-x,p+x,f);return[g,g,g,g]}case"sphericalParticleOpacity":{const c=o.center===void 0?[.5,.5,0,0]:gt(o.center),l=Math.max(oe(o.radius,.5),1e-4),u=t.inputs.Density?s("Density",[1,0,0,0])[0]:oe(o.density,1),h=Math.hypot(e.uv[0]-c[0],e.uv[1]-c[1])/l,d=Yt(Math.pow(Math.max(0,1-h),u),0,1);return[d,d,d,d]}case"particleMacroUV":{const c=s("Position",[e.uv[0],e.uv[1],0,0]),l=gt(o.center),u=oe(o.radius,512)||1,h=gt(o.tile),d=gt(o.offset);return[(c[0]-l[0])/u*(h[0]||1)+d[0],(c[1]-l[1])/u*(h[1]||1)+d[1],0,0]}case"gradientRamp":{const l=[...ny(o.stops)].sort((h,d)=>h.position-d.position),u=Yt(s("t",[e.source[0],0,0,0])[0],0,1);return ty(l,u)}case"output":return[0,0,0,0];default:return[...e.source]}}function oy(t,e,n={}){t=Hi(t);const i=new Map;for(const x of t.nodes)i.set(x.id,x);const r=new Map;for(const x of t.edges)r.set(x.id,x);const s=x=>{const g=t.outputs[x];if(!g)return null;const m=r.get(g);if(!m)return null;const S=i.get(m.source);return S?{node:S,handle:m.sourceHandle}:null},a=s("baseColor"),o=s("opacity"),c=s("opacityMask"),l=s("emissive"),u=sl(t),h=u?ry(t,e,"Tint",[1,1,1,1]):[1,1,1,1],d=u?Wu(t,e,"Emissive",0):0,f=u?Wu(t,e,"Opacity",1):1,p=(x,g,m)=>Eh(bh(x.node,g,i,r,m),x.handle);return(x,g)=>{const m={graph:t,instance:e,source:x,uv:g,samplerForPath:n.samplerForPath},S=new Set,T=a?p(a,m,S):[x[0],x[1],x[2],x[3]];let M=[T[0],T[1],T[2],0];if(l){const C=1+p(l,m,S)[0];M=[M[0]*C,M[1]*C,M[2]*C,0]}let b=T[3];if(o&&(b=p(o,m,S)[0]),c){const E=t.opacityMaskClipValue??.333;b=p(c,m,S)[0]<E?0:t.blend==="masked"?1:b}else if(t.blend==="masked"){const E=t.opacityMaskClipValue??.333;b=b<E?0:1}return[Yt(M[0]*h[0]*(1+Math.max(0,d)),0,1),Yt(M[1]*h[1]*(1+Math.max(0,d)),0,1),Yt(M[2]*h[2]*(1+Math.max(0,d)),0,1),Yt(b*h[3]*f,0,1)]}}function cy(t,e,n,i,r,s={}){const a=oy(i,r,s),o=Math.max(1,e),c=Math.max(1,n);for(let l=0;l+3<t.length;l+=4){const u=l/4,h=u%o,d=Math.floor(u/o),f=[t[l]/255,t[l+1]/255,t[l+2]/255,t[l+3]/255],p=[o<=1?0:h/(o-1),c<=1?0:d/(c-1)],x=a(f,p);t[l]=x[0]*255,t[l+1]=x[1]*255,t[l+2]=x[2]*255,t[l+3]=x[3]*255}}var ly=new Set(["sceneColor","sceneDepth","pixelDepth","depthFade","ddx","ddy","ddxy","parallax","parallaxOcclusion","triplanar","refraction","modulate","alphaHoldout","metallic","roughness","specular","anisotropy","tangent","normal","normalFromHeight","worldPositionOffset","tessellation","displacement","custom"]),ll=new Set(["particleColor","particleRelativeTime","particleSpeed","particleRandom","particleSize","particleDirection","particlePosition","particleMacroUV"]),uy=new Set(["particleColor","particleRelativeTime","particleRandom"]),$u=new Set(["particleSpeed","particleSize","particleDirection","particlePosition","particleMacroUV"]),dy=new Set(["step","smoothstep","power","desaturate","fresnel","sphereMask","noise","vectorNoise","antialiasedTextureMask","sphericalParticleOpacity"]);function hy(t){return(t.type==="noise"||t.type==="vectorNoise")&&t.params.runtime===!0}var Th=new Set(["panner","rotateUV","tilingOffset"]);function hs(t){const e=new Map;for(const r of t.nodes)e.set(r.id,r);const n=new Map,i=new Map;for(const r of t.edges)n.set(r.id,r),i.set(r.id,r.source);return{nodeById:e,edgeById:n,edgeSource:i}}function Ah(t){const e=Object.keys(t.outputs);return t.shadingModel==="lit"?e:e.filter(n=>!dh.includes(n))}function fy(t,e){return t.shadingModel!=="lit"?!1:dh.some(n=>{const i=t.outputs[n];return!!i&&e.edgeSource.has(i)})}function ya(t,e){const n=new Set,i=[];for(const r of Ah(t)){const s=t.outputs[r];if(!s)continue;const a=e.edgeSource.get(s);a&&i.push(a)}for(;i.length>0;){const r=i.pop();if(n.has(r))continue;n.add(r);const s=e.nodeById.get(r);if(s)for(const a of Object.values(s.inputs)){if(!a)continue;const o=e.edgeSource.get(a);o&&!n.has(o)&&i.push(o)}}return n}function py(t,e=hs(t)){const n=new Set(t.nodes.filter(o=>o.type==="particleColor").map(o=>o.id)),i=ya(t,e);let r=!1,s=!1;const a=o=>{if(!o)return;const c=e.edgeById.get(o);if(!(!c||!n.has(c.source)))switch(c.sourceHandle){case"A":case"Param4":s=!0;break;case"R":case"G":case"B":case"RGB":r=!0;break;default:r=!0,s=!0;break}};for(const o of Object.values(t.outputs))a(o);for(const o of i){const c=e.nodeById.get(o);if(c){for(const l of Object.values(c.inputs))a(l);c.type==="particleRelativeTime"?s=!0:c.type==="particleRandom"&&(r=!0)}}return{rgb:r,alpha:s}}var my={R:0,Param1:0,G:1,Param2:1,B:2,Param3:2,A:3,Param4:3};function gy(t,e=hs(t)){const n=t.outputs.opacity;if(!n)return t.colorVersion!==1;const i=e.edgeById.get(n),r=i?e.nodeById.get(i.source):void 0;if(!i||!r)return t.colorVersion!==1;if(r.type!=="constant")return!1;const s=r.params.value,a=my[i.sourceHandle]??0;return typeof s=="number"?s===1:typeof s=="boolean"?s:Array.isArray(s)?s[a]===1:!1}function Dc(t,e,n=new Set){if(n.has(t.id))return!1;if(n.add(t.id),t.type==="panner"&&_y(t.params.speed)||t.type==="rotateUV"&&oe(t.params.speed,0)!==0)return!0;for(const i of Object.values(t.inputs)){if(!i)continue;const r=e.edgeSource.get(i);if(!r)continue;const s=e.nodeById.get(r);if(s&&(s.type==="time"||Dc(s,e,n)))return!0}return!1}function wh(t,e,n,i=new Set){if(i.has(t))return!0;i.add(t);let r=!1;for(const s of e.edges){if(s.source!==t)continue;r=!0;const a=n.nodeById.get(s.target);if(!a)return!1;if(!((a.type==="textureSample"||a.type==="particleSubUV")&&s.targetHandle==="uv")){if(Th.has(a.type)){if(!wh(a.id,e,n,i))return!1;continue}return!1}}return r}function xy(t,e){for(const n of Ah(t)){const i=t.outputs[n];if(!i)continue;const r=e.edgeSource.get(i);if(!r)continue;const s=e.nodeById.get(r);if(!s)return!1;if(!(s.type==="textureSample"||s.type==="particleSubUV"))return!1}return!0}function vy(t){try{t=Hi(t)}catch{return{tier:"tier3-defer",deferredNodeIds:t.nodes.filter(d=>d.type==="subgraph").map(d=>d.id),vertexUvNodeIds:[],perParticleNodeIds:[]}}const e=Object.values(t.outputs).every(d=>!d)||t.nodes.length===0;if(sl(t)||e)return{tier:"tier1-fixed",deferredNodeIds:[],vertexUvNodeIds:[],perParticleNodeIds:[]};const n=hs(t),i=ya(t,n),r=[];for(const d of i){const f=n.nodeById.get(d);f&&ly.has(f.type)&&r.push(d)}if(r.length>0)return{tier:"tier3-defer",deferredNodeIds:r,vertexUvNodeIds:[],perParticleNodeIds:[]};if([...i].some(d=>{const f=n.nodeById.get(d);return!!f&&nl.has(f.type)})||fy(t,n))return{tier:"tier2-shader",deferredNodeIds:[],vertexUvNodeIds:[],perParticleNodeIds:qu(t,n,i)};const a=[];for(const d of i){const f=n.nodeById.get(d);f&&(f.type!=="panner"&&f.type!=="rotateUV"||Dc(f,n)&&wh(f.id,t,n)&&a.push(f.id))}const o=new Set(a),c=qu(t,n,i),l=c.length>0;if([...i].some(d=>{const f=n.nodeById.get(d);return(f==null?void 0:f.type)==="twoSidedSign"||(f==null?void 0:f.type)==="polarCoordinates"||(f==null?void 0:f.type)==="panner"&&!!f.inputs.speed&&n.edgeSource.has(f.inputs.speed)}))return{tier:"tier2-shader",deferredNodeIds:[],vertexUvNodeIds:[],perParticleNodeIds:c};let u=!1;for(const d of i){const f=n.nodeById.get(d);if(f){if(Th.has(f.type)){if(Dc(f,n)&&!o.has(f.id)){u=!0;break}continue}if(f.type==="dynamicParameter"){u=!0;break}if(hy(f)){u=!0;break}if(dy.has(f.type)&&Ch(f,n)){u=!0;break}}}let h=!0;for(const d of i){const f=n.nodeById.get(d);if(f&&!ZS.has(f.type)){h=!1;break}}return!l&&!u&&a.length===0&&h?{tier:"tier0-bake",deferredNodeIds:[],vertexUvNodeIds:[],perParticleNodeIds:[]}:xy(t,n)?{tier:"tier1-fixed",deferredNodeIds:[],vertexUvNodeIds:a,perParticleNodeIds:c}:!l&&!u&&h?{tier:"tier0-bake",deferredNodeIds:[],vertexUvNodeIds:[],perParticleNodeIds:[]}:{tier:"tier2-shader",deferredNodeIds:[],vertexUvNodeIds:a,perParticleNodeIds:c}}function qu(t,e,n){const i=[];for(const r of n){const s=e.nodeById.get(r);s&&(ll.has(s.type)||s.type==="dynamicParameter"||s.type==="param"&&My(s,t))&&i.push(s.id)}return i}function _y(t){return typeof t=="number"?t!==0:Array.isArray(t)?t.some(e=>typeof e=="number"&&e!==0):!1}function My(t,e){const n=typeof t.params.name=="string"?t.params.name:"",i=e.params.find(r=>r.name===n);return(i==null?void 0:i.perParticle)===!0}function Ch(t,e,n=new Set){if(n.has(t.id))return!1;n.add(t.id);for(const i of Object.values(t.inputs)){if(!i)continue;const r=e.edgeSource.get(i);if(!r)continue;const s=e.nodeById.get(r);if(s&&(s.type==="time"||s.type==="dynamicParameter"||ll.has(s.type)||Ch(s,e,n)))return!0}return!1}function Sy(t){if(t.perParticleFeed)return t.perParticleFeed;if(!(t.sliderMin!==void 0&&t.sliderMax!==void 0))return"spawn-color";const n=t.clampMin??t.sliderMin??0,i=t.clampMax??t.sliderMax??1;return n===i?"spawn-color":n>=0&&i<=1?"smuggle-8bit":"mesh-attr"}function yy(t){return Array.isArray(t)?[t[0]??0,t[1]??0,t[2]??0,t[3]??0]:[1,1,1,1]}function Yu(t,e,n,i){const r=qi(t,e,n);return typeof r=="number"?r:i}function wo(t,e,n,i){const r=sl(t),a=r&&t.params.find(d=>d.name==="Tint"&&d.type==="color")?yy(qi(t,e,"Tint")):[1,1,1,1],c=r&&t.params.some(d=>d.name==="Emissive")?Yu(t,e,"Emissive",0):0,u=r&&t.params.some(d=>d.name==="Opacity")?Yu(t,e,"Opacity",1):1,h={tint:a,emissive:c,opacity:u,blend:t.blend};for(const d of i){const f=n.nodeById.get(d);if(f){if(f.type==="panner"){const p=f.params.speed,x={speed:Array.isArray(p)?[oe(p[0],0),oe(p[1],0)]:[oe(f.params.speedX,0),oe(f.params.speedY,0)]};h.uvPan=x}else if(f.type==="rotateUV"){const p=f.params.center,x={speed:oe(f.params.speed,0),center:Array.isArray(p)?[oe(p[0],.5),oe(p[1],.5)]:[.5,.5]};h.uvRotate=x}}}return h}function Rh(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619)>>>0;return(e>>>0).toString(16).padStart(8,"0")}function Ey(t,e,n){const i=JSON.stringify({graph:fh(t),instance:Rv(e),mainTex:n??null});return Rh(i)}function by(t,e,n={}){const i=Ty(t,e,n);let r=!1;try{const s=Hi(t),a=hs(s);for(const o of ya(s,a)){const c=a.nodeById.get(o);if(c&&nl.has(c.type)){r=!0;break}}}catch{r=!1}return{...i,shadingModel:t.shadingModel==="lit"?"lit":"unlit",usesSceneLighting:r}}function Ty(t,e,n){try{t=Hi(t)}catch(u){return{tier:"tier3-defer",shaderId:mi,blend:t.blend,perParticleFeeds:{},diagnostics:[u instanceof Error?u.message:String(u)],deferredNodeIds:t.nodes.filter(h=>h.type==="subgraph").map(h=>h.id),usesParticleColorRGB:!1,usesParticleColorAlpha:!1,opacityIsConstantOne:!1}}const i=n.mainTexUid??null,r=vy(t),s=hs(t);if(t.colorVersion===1&&r.tier!=="tier3-defer"&&(r.tier="tier2-shader",r.vertexUvNodeIds=[]),r.tier==="tier0-bake"||r.tier==="tier1-fixed")for(const u of ya(t,s)){const h=s.nodeById.get(u);if(!h||h.type!=="textureSample"&&h.type!=="particleSubUV"&&h.type!=="antialiasedTextureMask")continue;const d=rl(t,e,h,s.nodeById,s.edgeById);if(d.path&&!d.isMainTex){r.tier="tier2-shader",r.vertexUvNodeIds=[];break}}const a=py(t,s),o=gy(t,s),c=[],l={};for(const u of t.params)u.perParticle&&(l[u.name]=Sy(u));switch(r.tier){case"tier3-defer":{const u=r.deferredNodeIds.map(h=>{var d;return((d=s.nodeById.get(h))==null?void 0:d.type)??h}).join(", ");return c.push(`Tier 3: graph reaches deferred node(s) [${u}] — not rendered in preview, exported data-only (techspec §4.2).`),{tier:"tier3-defer",shaderId:mi,blend:t.blend,perParticleFeeds:l,diagnostics:c,deferredNodeIds:r.deferredNodeIds,usesParticleColorRGB:a.rgb,usesParticleColorAlpha:a.alpha,opacityIsConstantOne:o}}case"tier0-bake":return{tier:"tier0-bake",shaderId:mi,blend:t.blend,bakeHash:Ey(t,e,i),fixed:wo(t,e,s,[]),perParticleFeeds:l,diagnostics:c,deferredNodeIds:[],usesParticleColorRGB:a.rgb,usesParticleColorAlpha:a.alpha,opacityIsConstantOne:o};case"tier1-fixed":return{tier:"tier1-fixed",shaderId:mi,blend:t.blend,fixed:wo(t,e,s,r.vertexUvNodeIds),perParticleFeeds:l,diagnostics:c,deferredNodeIds:[],usesParticleColorRGB:a.rgb,usesParticleColorAlpha:a.alpha,opacityIsConstantOne:o};case"tier2-shader":{const u=`mat-${Rh(JSON.stringify(fh(t)))}`;for(const[f,p]of Object.entries(l))p==="mesh-attr"&&c.push(`Tier 2 custom Mesh path required: DynamicParameter "${f}" needs an independent per-particle float attribute; ParticleContainer exposes only vertex/position/rotation/uvs/color.`);const h=r.perParticleNodeIds.map(f=>s.nodeById.get(f)).filter(f=>!!f&&$u.has(f.type));for(const f of h)c.push(`Tier 2 custom Mesh path required: ${f.type} needs a per-particle attribute that ParticleContainer does not expose.`);const d=r.perParticleNodeIds.map(f=>s.nodeById.get(f)).filter(f=>!!f&&ll.has(f.type)&&!uy.has(f.type)&&!$u.has(f.type));for(const f of d)c.push(`Tier 2 custom Mesh path required: ${f.type} is not available on the ParticleContainer shader path.`);return{tier:"tier2-shader",shaderId:u,blend:t.blend,fixed:wo(t,e,s,r.vertexUvNodeIds),perParticleFeeds:l,diagnostics:c,deferredNodeIds:[],usesParticleColorRGB:a.rgb,usesParticleColorAlpha:a.alpha,opacityIsConstantOne:o}}}}function Co(t,e){return t.colorVersion!==1||e.params.samplerType==="linear"?!1:e.params.samplerType==="srgb"?!0:t.edges.some(n=>n.source===e.id&&!["R","G","B","A"].includes(n.sourceHandle))}var Zu=`
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
`,Ay=`
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
`,Ku=7;function wy(t){return t.tier!=="tier2-shader"?!1:!t.diagnostics.some(e=>e.includes("custom Mesh path required"))}function Cy({artifact:t,graph:e,instance:n}){if(t.tier==="tier3-defer")return null;const i=new Ry(e,n);return{fragment:i.fragmentSource(t.fixed),samplers:i.samplerBindings(),diagnostics:i.samplerDiagnostics()}}var Ry=class Ph{constructor(e,n){Z(this,"graph",e),Z(this,"instance",n),Z(this,"authoredGraph"),Z(this,"readsParticleColor",!1),Z(this,"nodeById",new Map),Z(this,"edgeById",new Map),Z(this,"nodeSamplerUniform",new Map),Z(this,"samplers",[]),Z(this,"samplerDiagnosticMessages",[]),this.authoredGraph=e,e=Hi(e),this.graph=e;for(const i of e.nodes)this.nodeById.set(i.id,i);for(const i of e.edges)this.edgeById.set(i.id,i);this.collectSamplers()}samplerBindings(){return this.samplers.map(e=>({...e}))}samplerDiagnostics(){return[...this.samplerDiagnosticMessages]}collectSamplers(){const e=this.graph.nodes.filter(i=>i.type==="textureSample"||i.type==="particleSubUV"||i.type==="antialiasedTextureMask").filter(i=>{const r=this.resolveNodeTexBinding(i);return r.path!==""&&!r.isMainTex}).sort((i,r)=>i.id<r.id?-1:i.id>r.id?1:0);let n=0;for(const i of e){if(n>=Ku){this.samplerDiagnosticMessages.push(`Material uses more than ${Ku} per-node textures; node "${i.id}" falls back to MainTex.`);continue}const r=`uTex${n}`;n+=1,this.nodeSamplerUniform.set(i.id,r),this.samplers.push({nodeId:i.id,uniform:r,path:this.resolveNodeTexBinding(i).path})}}resolveNodeTexBinding(e){return rl(this.graph,this.instance,e,this.nodeById,this.edgeById)}header(){let n=this.graph.shadingModel==="lit"||this.graph.nodes.some(i=>nl.has(i.type)||i.type==="unpackNormal")?`${Zu}${Ay}`:Zu;return this.graph.colorVersion===1&&(n+=Dy),this.graph.nodes.some(i=>i.type==="twoSidedSign")?`${n}
float materialTwoSidedSign() {
#ifdef FLIP_SIDED
  return gl_FrontFacing ? -1.0 : 1.0;
#else
  return gl_FrontFacing ? 1.0 : -1.0;
#endif
}
`:n}surfaceColorLine(){if(this.graph.shadingModel!=="lit")return"outColor.rgb = outColor.rgb * uFixedTint.rgb + emissiveColor.rgb;";const e=this.slotExpr("normal"),n=this.slotScalarExpr("roughness")??VM.toFixed(8),i=this.slotScalarExpr("metallic")??zM.toFixed(8);return`outColor.rgb = nfxShadeLit(outColor.rgb * uFixedTint.rgb, ${e?`(${e}).xyz`:"vec3(0.0, 0.0, 1.0)"}, ${n}, ${i}) + emissiveColor.rgb;`}samplerUniformDeclarations(){return this.samplers.length===0?"":`${this.samplers.map(e=>`uniform sampler2D ${e.uniform};`).join(`
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
`}particleMultiply(){return this.graph.colorVersion!==1?"outColor *= vColor;":this.readsParticleColor?"":"outColor *= materialSrgbToLinear(vColor);"}outputLine(){return this.graph.colorVersion===1?"gl_FragColor = materialEncodeOutput(outColor);":"gl_FragColor = outColor;"}colorExpr(e){return this.graph.colorVersion===1?`materialSrgbToLinear(${e})`:e}nodePreviewFragmentSource(e,n="out"){var o,c;const i=this.authoredGraph.nodes.find(l=>l.id===e);if((i==null?void 0:i.type)==="subgraph"){const l=i.params.graph,u=n==="out"?(c=(o=l.subgraph)==null?void 0:o.outputs[0])==null?void 0:c.id:n;if(!u)return null;const h=`preview:${e}`,d=Hi({...this.authoredGraph,edges:[...this.authoredGraph.edges,{id:h,source:e,sourceHandle:u,target:"preview-output",targetHandle:"baseColor"}],outputs:{baseColor:h}}),f=d.edges.find(p=>p.id===h);return new Ph(d,this.instance).nodePreviewFragmentSource(f.source,f.sourceHandle)}const r=this.nodeById.get(e);if(!r)return null;const s=this.evalNode(r,new Set),a=this.select(s,Py(r,n));return`${this.header()}${this.samplerUniformDeclarations()}
void main(void) {
  vec4 value = ${a};
  gl_FragColor = ${this.graph.colorVersion===1?"materialEncodeOutput(":""}vec4(clamp(value.rgb, 0.0, 1.0), ${r.type==="polarCoordinates"?"1.0":"clamp(value.a, 0.0, 1.0)"})${this.graph.colorVersion===1?")":""};
}
`}slotExpr(e){const n=this.graph.outputs[e];if(!n)return null;const i=this.edgeById.get(n),r=i?this.nodeById.get(i.source):void 0;return!i||!r?null:this.select(this.evalNode(r,new Set),i.sourceHandle)}slotScalarExpr(e){const n=this.slotExpr(e);return n?`((${n}).r)`:null}evalNode(e,n){if(n.has(e.id))return"vec4(0.0)";n.add(e.id);const i=this.evalInner(e,n);return n.delete(e.id),i}evalInner(e,n){var o;const i=e.params,r=(c,l)=>{const u=e.inputs[c];if(!u)return l;const h=this.edgeById.get(u),d=h?this.nodeById.get(h.source):void 0;return!h||!d?l:this.select(this.evalNode(d,n),h.sourceHandle)},s=(c,l)=>`(${r(c,this.scalar(l))}).r`,a=()=>e.inputs.uv?`(${r("uv","vec4(vUV, 0.0, 0.0)")}).xy`:"vUV";switch(e.type){case"constant":return i.kind==="color"||i.kind===void 0&&Array.isArray(i.value)?this.colorExpr(this.constVec4(i.value)):this.constVec4(i.value);case"time":return"vec4(uTime)";case"twoSidedSign":return"vec4(materialTwoSidedSign())";case"param":{const c=typeof i.name=="string"?i.name:"",l=this.constVec4(qi(this.graph,this.instance,c));return((o=this.graph.params.find(u=>u.name===c))==null?void 0:o.type)==="color"?this.colorExpr(l):l}case"textureSample":{const c=this.sampleTexture(e,a());return Co(this.graph,e)?this.colorExpr(c):c}case"particleSubUV":{const c=this.nodeSamplerUniform.get(e.id);if(c){const u=`texture2D(${c}, fract(${a()}))`;return Co(this.graph,e)?this.colorExpr(u):u}const l=i.blend===!0?`materialSampleSubUvBlend(${a()})`:`materialSampleMain(${a()})`;return Co(this.graph,e)?this.colorExpr(l):l}case"uv":return"vec4(vUV, 0.0, 0.0)";case"tilingOffset":{const c=r("uv","vec4(vUV, 0.0, 0.0)"),l=r("tile",this.constVec4(i.tile,[1,1,0,0])),u=r("offset",this.constVec4(i.offset));return`vec4((${c}).xy * (${l}).xy + (${u}).xy, 0.0, 0.0)`}case"panner":{const c=r("uv","vec4(vUV, 0.0, 0.0)"),l=e.inputs.time?s("time",0):"uTime",u=r("speed",this.constVec4(i.speed));return`vec4((${c}).xy + (${l}) * (${u}).xy, 0.0, 0.0)`}case"polarCoordinates":{const c=r("UV","vec4(vUV, 0.0, 0.0)"),l=r("Center",this.constVec4(i.center,[.5,.5,0,0])),u=s("Radial Scale",this.number(i.radialScale,1)),h=s("Length Scale",this.number(i.lengthScale,1)),d=`((${c}).xy - (${l}).xy)`,f=`(dot(${d}, ${d}) == 0.0 ? 0.0 : atan((${d}).x, (${d}).y))`;return`vec4(length(${d}) * 2.0 * (${u}), ${f} / 6.28 * (${h}), 0.0, 0.0)`}case"rotateUV":{const c=r("uv","vec4(vUV, 0.0, 0.0)"),l=this.constVec4(i.center,[.5,.5,0,0]),u=this.number(i.speed,0);return`(vec4(((${l}).xy) + mat2(cos(${u.toFixed(8)} * uTime * 6.2831853), sin(${u.toFixed(8)} * uTime * 6.2831853), -sin(${u.toFixed(8)} * uTime * 6.2831853), cos(${u.toFixed(8)} * uTime * 6.2831853)) * ((${c}).xy - (${l}).xy), 0.0, 0.0))`}case"fresnelTrue":{const c=r("normal","vec4(nfxViewToWorld(nfxGeometryViewNormal()), 0.0)"),l=r("viewDir","vec4(nfxViewToWorld(nfxViewDirectionView()), 0.0)"),u=s("power",this.number(i.power,1));return`vec4(pow(1.0 - clamp(dot(normalize((${c}).xyz), normalize((${l}).xyz)), 0.0, 1.0), ${u}))`}case"fresnel":{const c=this.constVec4(i.center,[.5,.5,0,0]),l=Math.max(0,this.number(i.power,1));return`vec4(pow(max(0.0, 1.0 - clamp(length(vUV - (${c}).xy) * 2.0, 0.0, 1.0)), ${l.toFixed(8)}))`}case"sphereMask":{const c=this.constVec4(i.center,[.5,.5,0,0]),l=Math.max(1e-4,this.number(i.radius,.5)),u=Math.max(0,Math.min(1,this.number(i.hardness,.5))),h=l*(1-u)+1e-4;return`vec4(clamp(1.0 - ((length(vUV - (${c}).xy) - ${(l-h).toFixed(8)}) / ${h.toFixed(8)}), 0.0, 1.0))`}case"particleColor":return this.readsParticleColor=!0,this.colorExpr("vColor");case"particleRelativeTime":return"vec4(clamp(vColor.a, 0.0, 1.0))";case"particleRandom":return"vec4(fract(vColor.r + vColor.g * 13.17 + vColor.b * 7.31))";case"particleSpeed":case"particleSize":case"particleDirection":case"particlePosition":case"particleMacroUV":return"vec4(0.0)";case"dynamicParameter":return"uDynamicParams";case"sceneWorldNormal":return"vec4(nfxViewToWorld(nfxGeometryViewNormal()), 0.0)";case"sceneWorldPosition":return"vec4(nfxWorldPosition(), 1.0)";case"sceneViewDirection":return"vec4(nfxViewToWorld(nfxViewDirectionView()), 0.0)";case"mainLightDirection":return"vec4(nfxViewToWorld(nfxMainLightDirectionView()), 0.0)";case"mainLightColor":return"vec4(nfxMainLightColor(), 1.0)";case"sceneAmbientColor":return"vec4(nfxAmbientColor(), 1.0)";case"sceneDiffuseLighting":return"vec4(nfxDiffuseLighting(), 1.0)";case"unpackNormal":{const c=e.inputs.strength?s("strength",1):this.number(i.strength,1).toFixed(8);return`nfxUnpackNormal(${r("in","vec4(0.5, 0.5, 1.0, 1.0)")}, ${c})`}case"multiply":return`((${r("a",this.scalar(this.number(i.a,1)))}) * (${r("b",this.scalar(this.number(i.b,1)))}))`;case"add":return`((${r("a",this.scalar(this.number(i.a,0)))}) + (${r("b",this.scalar(this.number(i.b,0)))}))`;case"subtract":return`((${r("a",this.scalar(this.number(i.a,0)))}) - (${r("b",this.scalar(this.number(i.b,0)))}))`;case"divide":return`((${r("a",this.scalar(this.number(i.a,0)))}) / max(abs(${r("b",this.scalar(this.number(i.b,1)))}), vec4(0.000001)))`;case"min":return`min(${r("a","vec4(0.0)")}, ${r("b","vec4(0.0)")})`;case"max":return`max(${r("a","vec4(0.0)")}, ${r("b","vec4(0.0)")})`;case"lerp":{const c=e.inputs.t?r("t","vec4(0.5)"):this.scalar(this.number(i.t,.5));return`mix(${r("a",this.scalar(this.number(i.a,0)))}, ${r("b",this.scalar(this.number(i.b,1)))}, ${c})`}case"oneMinus":return`(vec4(1.0) - (${r("in","vec4(0.0)")}))`;case"clamp":{const c=e.inputs.min?s("min",0):this.number(i.min,0).toFixed(8),l=e.inputs.max?s("max",1):this.number(i.max,1).toFixed(8);return`clamp(${r("in","vec4(0.0)")}, vec4(${c}), vec4(${l}))`}case"step":return`step(vec4(${e.inputs.edge?s("edge",.5):this.number(i.edge,.5).toFixed(8)}), ${r("in","vec4(0.0)")})`;case"smoothstep":{const c=e.inputs.edge0?s("edge0",0):this.number(i.edge0,0).toFixed(8),l=e.inputs.edge1?s("edge1",1):this.number(i.edge1,1).toFixed(8);return`smoothstep(vec4(${c}), vec4(${l}), ${r("in","vec4(0.0)")})`}case"power":{const c=e.inputs.exp?r("exp","vec4(1.0)"):this.scalar(this.number(i.exponent,1));return`pow(max(${r("in","vec4(0.0)")}, vec4(0.0)), ${c})`}case"remap":{const c=r("in","vec4(0.0)"),l=e.inputs.inMin?s("inMin",0):this.number(i.inMin,0).toFixed(8),u=e.inputs.inMax?s("inMax",1):this.number(i.inMax,1).toFixed(8),h=e.inputs.outMin?s("outMin",0):this.number(i.outMin,0).toFixed(8),d=e.inputs.outMax?s("outMax",1):this.number(i.outMax,1).toFixed(8);return`(vec4(${h}) + (((${c}) - vec4(${l})) / max(vec4(${u}) - vec4(${l}), vec4(0.000001))) * (vec4(${d}) - vec4(${h})))`}case"desaturate":{const c=r("in","vec4(0.0)"),l=Math.max(0,Math.min(1,this.number(i.fraction,1)));return`vec4(mix((${c}).rgb, vec3(materialLuminance((${c}).rgb)), ${l.toFixed(8)}), (${c}).a)`}case"split":{const c=this.channel(i.channel);return`((${r("in","vec4(0.0)")}).${c}${c}${c}${c})`}case"combine":return`vec4((${r("r","vec4(0.0)")}).r, (${r("g","vec4(0.0)")}).r, (${r("b","vec4(0.0)")}).r, (${e.inputs.a?r("a","vec4(1.0)"):"vec4(1.0)"}).r)`;case"swizzle":{const c=String(i.pattern??"rgba").toLowerCase().replace(/[^rgba]/g,"").padEnd(4,"a").slice(0,4);return`((${r("in","vec4(0.0)")}).${c})`}case"abs":return`abs(${r("in","vec4(0.0)")})`;case"frac":return`fract(${r("in","vec4(0.0)")})`;case"floor":return`floor(${r("in","vec4(0.0)")})`;case"ceil":return`ceil(${r("in","vec4(0.0)")})`;case"round":return`floor(${r("in","vec4(0.0)")} + vec4(0.5))`;case"sign":return`sign(${r("in","vec4(0.0)")})`;case"sqrt":return`sqrt(max(${r("in","vec4(0.0)")}, vec4(0.0)))`;case"length":return`vec4(length((${r("in","vec4(0.0)")}).xyz))`;case"normalize":return`vec4(normalize((${r("in","vec4(0.0)")}).xyz), (${r("in","vec4(0.0)")}).a)`;case"dot":return`vec4(dot((${r("a","vec4(0.0)")}).xyz, (${r("b","vec4(0.0)")}).xyz))`;case"sine":{const c=Math.max(1e-4,this.number(i.period,1));return`sin((${r("in","vec4(0.0)")}) * ${(Math.PI*2/c).toFixed(8)})`}case"cosine":{const c=Math.max(1e-4,this.number(i.period,1));return`cos((${r("in","vec4(0.0)")}) * ${(Math.PI*2/c).toFixed(8)})`}case"if":{const c=s("a",0),l=s("b",0);return`((${c}) > (${l}) + 0.000001 ? ${r("aGreater","vec4(0.0)")} : ((${c}) < (${l}) - 0.000001 ? ${r("aLess","vec4(0.0)")} : ${r("aEqual",r("aGreater","vec4(0.0)"))}))`}case"noise":{const c=r("Position","vec4(vUV, 0.0, 0.0)"),l=Math.max(1e-4,this.number(i.scale,16)),u=this.number(i.seed,0),h=this.number(i.outputMin,0),d=this.number(i.outputMax,1),f=i.function==="value"?1:i.function==="voronoi"?2:0;return`vec4(materialScalarNoise((${c}).xy, ${l.toFixed(8)}, ${u.toFixed(8)}, ${h.toFixed(8)}, ${d.toFixed(8)}, ${f.toFixed(1)}))`}case"vectorNoise":{const c=r("Position","vec4(vUV, 0.0, 0.0)"),l=Math.max(1e-4,this.number(i.scale,8)),u=this.number(i.seed,0),h=i.function==="cellnoise"?1:i.function==="voronoi"?2:0;return`vec4(materialScalarNoise((${c}).xy + vec2(17.0, 31.0), ${l.toFixed(8)}, ${u.toFixed(8)}, 0.0, 1.0, ${h.toFixed(1)}), materialScalarNoise((${c}).xy + vec2(73.0, 11.0), ${l.toFixed(8)}, ${(u+1).toFixed(8)}, 0.0, 1.0, ${h.toFixed(1)}), materialScalarNoise((${c}).xy + vec2(5.0, 47.0), ${l.toFixed(8)}, ${(u+2).toFixed(8)}, 0.0, 1.0, ${h.toFixed(1)}), 1.0)`}case"antialiasedTextureMask":{const c=this.sampleTexture(e,a()),l=this.channel(i.channel??"a"),u=e.inputs.Threshold?s("Threshold",.5):this.number(i.threshold,.5).toFixed(8),h=Math.max(1e-4,this.number(i.softness,.04));return`vec4(smoothstep((${u}) - ${h.toFixed(8)}, (${u}) + ${h.toFixed(8)}, (${c}).${l}))`}case"sphericalParticleOpacity":{const c=this.constVec4(i.center,[.5,.5,0,0]),l=Math.max(1e-4,this.number(i.radius,.5)),u=e.inputs.Density?s("Density",1):this.number(i.density,1).toFixed(8);return`vec4(clamp(pow(max(0.0, 1.0 - length((vUV - (${c}).xy) / ${l.toFixed(8)})), ${u}), 0.0, 1.0))`}case"gradientRamp":{const c=e.inputs.t?s("t",0):"vUV.x";return this.gradientExpr(i.stops,c)}default:return"materialSampleMain(vUV)"}}sampleTexture(e,n){const i=this.nodeSamplerUniform.get(e.id);return i?`texture2D(${i}, fract(${n}))`:`materialSampleMain(${n})`}select(e,n){switch(n){case"R":case"Param1":return`((${e}).rrrr)`;case"G":case"Param2":return`((${e}).gggg)`;case"B":case"Param3":return`((${e}).bbbb)`;case"A":case"Param4":return`((${e}).aaaa)`;default:return`(${e})`}}constVec4(e,n=[0,0,0,0]){return`vec4(${Ju(e,n).map(r=>this.number(r,0).toFixed(8)).join(", ")})`}scalar(e){return`vec4(${this.number(e,0).toFixed(8)})`}number(e,n){return oe(e,n)}channel(e){const n=typeof e=="string"?e.toLowerCase():"r";return n==="g"||n==="b"||n==="a"?n:"r"}gradientExpr(e,n){const i=(Array.isArray(e)?e:[]).map(s=>{const a=typeof s=="object"&&s!==null?s:{};return{position:Math.max(0,Math.min(1,this.number(a.position,0))),color:Ju(a.color,[1,1,1,1])}}).sort((s,a)=>s.position-a.position);if(i.length===0)return`vec4(${n})`;let r=this.colorExpr(this.constVec4(i[0].color));for(let s=1;s<i.length;s++){const a=i[s-1],o=i[s],c=Math.max(1e-4,o.position-a.position),l=`clamp(((${n}) - ${a.position.toFixed(8)}) / ${c.toFixed(8)}, 0.0, 1.0)`;r=`mix(${r}, ${this.colorExpr(this.constVec4(o.color))}, ${l})`}return r}};function Py(t,e){return e!=="out"?e:t.type==="dynamicParameter"?"Param1":e}function Ju(t,e){if(typeof t=="number")return[t,t,t,t];if(typeof t=="boolean"){const n=t?1:0;return[n,n,n,n]}return Array.isArray(t)?[oe(t[0],e[0]),oe(t[1],e[1]),oe(t[2],e[2]),oe(t[3],e[3])]:[...e]}var Dy=`
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
`;function Iy(t){const e=t.getAttribute("position");if(!e||e.itemSize!==3||e.count===0)return null;const n=e.count,i=new Float32Array(n*3);for(let c=0;c<n;c++)i[c*3+0]=e.getX(c),i[c*3+1]=e.getY(c),i[c*3+2]=e.getZ(c);let r=null;const s=t.getAttribute("normal");if(s&&s.itemSize===3&&s.count>=n){r=new Float32Array(n*3);for(let c=0;c<n;c++)r[c*3+0]=s.getX(c),r[c*3+1]=s.getY(c),r[c*3+2]=s.getZ(c)}const a=t.getIndex();let o=null;if(a&&a.count>=3){o=new Uint32Array(a.count);for(let c=0;c<a.count;c++)o[c]=a.getX(c)}return{positions:i,indices:o,normals:r}}function ul(t){const e=t.source.version,n=t.clone();return n.source.version=e,n}var Ro=new WeakMap;function Ly(t){if(t.colorSpace===Pn)return t;const e=Ro.get(t);if(e)return e;const n=ul(t);return n.colorSpace=Pn,Ro.set(t,n),t.addEventListener("dispose",()=>{Ro.delete(t),n.dispose()}),n}function Fy(t){const e=[];for(const i in t.uniforms){const r=t.uniforms[i].value;r!=null&&r.isTexture&&(e.push([i,r]),t.uniforms[i].value=null)}let n;try{n=t.clone()}finally{for(const[i,r]of e)t.uniforms[i].value=r}for(const[i,r]of e)n.uniforms[i].value=r;return n}function Qu(t,e,n,i){const r=Oy(i);if(!n.modules.textureSheetAnimation){const h=[mr(t,r)],d=[mr(e,r)];return{mapFrames:h,alphaMapFrames:d,shaderMap:t,ownedTextures:r?[...hr(h),...hr(d)]:[]}}const s=n.advanced.textureSheetAnimation,a=Math.max(1,Math.round(s.tiles[0])),o=Math.max(1,Math.round(s.tiles[1]));if(a*o<=1){const h=[mr(t,r)],d=[mr(e,r)];return{mapFrames:h,alphaMapFrames:d,shaderMap:t,ownedTextures:r?[...hr(h),...hr(d)]:[]}}const l=ju(t,a,o),u=ju(e,a,o);return{mapFrames:l,alphaMapFrames:u,shaderMap:t,ownedTextures:[...hr(l),...hr(u)]}}function Ny(t,e,n,i){return t.modules.textureSheetAnimation?$S(t.advanced.textureSheetAnimation,e,n,i).frame:0}function Dh(t,e,n,i,r){const s=Ic(e.mapFrames,n),a=Ic(e.alphaMapFrames,n),o=s.texture,c=a.texture;Lc(s,i,r),Lc(a,i,r),t.map!==o&&(t.map=o,t.needsUpdate=!0),t.alphaMap!==c&&(t.alphaMap=c,t.alphaTest=c?.001:0,t.needsUpdate=!0)}function Uy(t,e,n,i,r){var u;const s=Ic(e.mapFrames,n);Lc(s,i,r);const a=(u=t.uniforms.uSubUv)==null?void 0:u.value,o=s.texture;a&&(a.set((o==null?void 0:o.offset.x)??s.offsetX,(o==null?void 0:o.offset.y)??s.offsetY,(o==null?void 0:o.repeat.x)??s.repeatX,(o==null?void 0:o.repeat.y)??s.repeatY),t.uniformsNeedUpdate=!0);const c=t.uniforms.uTexture,l=e.shaderMap??s.texture;c&&c.value!==l&&(c.value=l,t.uniformsNeedUpdate=!0)}function ju(t,e,n){if(!t)return[mr(null,!1)];const i=[];for(let r=0;r<e*n;r++){const s=r%e,a=Math.floor(r/e);i.push(mr(t,!0,{offsetX:t.offset.x+s*t.repeat.x/e,offsetY:t.offset.y+(n-a-1)*t.repeat.y/n,repeatX:t.repeat.x/e,repeatY:t.repeat.y/n}))}return i}function mr(t,e,n){const i=e&&t?ul(t):t;return{texture:i,offsetX:(n==null?void 0:n.offsetX)??(i==null?void 0:i.offset.x)??0,offsetY:(n==null?void 0:n.offsetY)??(i==null?void 0:i.offset.y)??0,repeatX:(n==null?void 0:n.repeatX)??(i==null?void 0:i.repeat.x)??1,repeatY:(n==null?void 0:n.repeatY)??(i==null?void 0:i.repeat.y)??1,centerX:(i==null?void 0:i.center.x)??0,centerY:(i==null?void 0:i.center.y)??0,rotation:(i==null?void 0:i.rotation)??0}}function hr(t){return t.map(e=>e.texture).filter(e=>!!e)}function Ic(t,e){return t[By(e,t.length)]??t[0]}function Lc(t,e,n){const i=t.texture;if(!i)return;const r=e==null?void 0:e.uvPan,s=e==null?void 0:e.uvRotate;i.repeat.set(t.repeatX,t.repeatY),i.offset.set(t.offsetX+((r==null?void 0:r.speed[0])??0)*n*t.repeatX,t.offsetY+((r==null?void 0:r.speed[1])??0)*n*t.repeatY),s?(i.center.set(t.offsetX+s.center[0]*t.repeatX,t.offsetY+s.center[1]*t.repeatY),i.rotation=s.speed*n*Math.PI*2):(i.center.set(t.centerX,t.centerY),i.rotation=t.rotation)}function Oy(t){const e=t==null?void 0:t.uvPan,n=t==null?void 0:t.uvRotate;return!!(e&&(Math.abs(e.speed[0])>1e-6||Math.abs(e.speed[1])>1e-6)||n&&Math.abs(n.speed)>1e-6)}function By(t,e){return e<=0?0:(t%e+e)%e}var Vy=new N(...vh),ed=(t,e,n)=>Math.min(n,Math.max(e,t));function zy(t,e,n,i,r){var b,E;if(!e.modules.trails){os(t);return}const s=t.trailPointPool??(t.trailPointPool=[]);let a=0;for(const[C,v]of t.trailHistories)Ih(v.points,void 0,i,s),v.points.length===0?t.trailHistories.delete(C):v.points.length>=2&&(a+=v.points.length*2);if(a===0){Fc(t);return}const o=Hy(t,a),c=o.position.array,l=o.color.array,u=o.uv.array,h=o.normal.array,d=o.dynamicParams.array,f=o.index.array;let p=0,x=0;const g=e.advanced.trails,m=o.trailColor,S=t.trailResolution,T=t.trailMaterial instanceof Mt;t.trailMaterial instanceof Mt&&t.trailMaterial.uniforms.uTime&&(t.trailMaterial.uniforms.uTime.value=i),t.trailTextureFrames&&!(t.trailMaterial instanceof Mt)&&Dh(t.trailMaterial,t.trailTextureFrames,0,(S==null?void 0:S.fixed)??null,i);const M=o.srgbColor;for(const C of t.trailHistories.values()){if(C.points.length<2)continue;const v=C.points,A=Math.max(((b=v[0])==null?void 0:b.distanceFromHead)??1,1),P=p;for(let D=0;D<v.length;D++){const O=v[D],k=v[Math.min(D+1,v.length-1)]??O,L=v[Math.max(D-1,0)]??O,$=O.maxLength;if($!==void 0&&O.distanceFromHead>$)continue;const V=ed(O.distanceFromHead/($??A),0,1),Y=1-ed((i-O.timeSeconds)/O.lifetimeSeconds,0,1);let te=O.color[0],ne=O.color[1],j=O.color[2],re=O.alpha;if(g.inheritColor){if(g.color){const U=rn(g.color,V,m);M.setRGB(U[0],U[1],U[2],S?void 0:Ut),te=M.r,ne=M.g,j=M.b,re=sn(g.color,V)}}else{const U=mS(g,1-Y,V,m);M.setRGB(U[0],U[1],U[2],S?void 0:Ut),te=M.r,ne=M.g,j=M.b,re=U[3]}if(S&&(S.particleColorUsage.rgb||(te=1,ne=1,j=1),S.particleColorUsage.alpha||(re=1)),S&&!T){const U=S.particleColorUsage,le=S.fixed,be=(le==null?void 0:le.tint)??Gy,ye=1+Math.max(0,(le==null?void 0:le.emissive)??0);M.setRGB((U.rgb?te:1)*be[0]*ye,(U.rgb?ne:1)*be[1]*ye,(U.rgb?j:1)*be[2]*ye,Ut),te=M.r,ne=M.g,j=M.b,re=(U.alpha?re:1)*be[3]*((le==null?void 0:le.opacity)??1)}re*=(1-V)*Y;const Fe=O.width*Math.max(0,Se(g.widthOverTrail,V,O.seed));if(re<=.01||Fe<=1e-4)continue;const Be=o.direction.subVectors(k.position,L.position);Be.lengthSq()<=1e-7&&Be.set(0,1,0),Be.normalize();const ae=o.viewDirection.subVectors(n.position,O.position);ae.lengthSq()<=1e-7&&ae.set(0,0,1),ae.normalize();const W=o.side.crossVectors(Be,ae);W.lengthSq()<=1e-7&&W.copy(Vy),W.normalize().multiplyScalar(Fe*.5);const se=p*3;c[se]=O.position.x-W.x-r[0],c[se+1]=O.position.y-W.y-r[1],c[se+2]=O.position.z-W.z-r[2],c[se+3]=O.position.x+W.x-r[0],c[se+4]=O.position.y+W.y-r[1],c[se+5]=O.position.z+W.z-r[2];for(let U=p;U<p+2;U++)if(l[U*4]=te,l[U*4+1]=ne,l[U*4+2]=j,l[U*4+3]=re,S){u[U*2]=g.textureMode==="tile"?O.distanceFromHead:O.distanceFromHead/Math.max(v[0].distanceFromHead,1e-6),u[U*2+1]=U-p;for(let le=0;le<4;le++)d[U*4+le]=((E=O.dynamicParams)==null?void 0:E[le])??0;h[U*3]=ae.x,h[U*3+1]=ae.y,h[U*3+2]=ae.z}p+=2}const R=p-P;for(let D=0;D<R/2-1;D++){const O=P+D*2;f[x++]=O,f[x++]=O+1,f[x++]=O+2,f[x++]=O+1,f[x++]=O+3,f[x++]=O+2}}if(t.trailGeometry.setDrawRange(0,x),x===0){Fc(t);return}o.position.needsUpdate=!0,o.color.needsUpdate=!0,o.index.needsUpdate=!0,S&&(o.dynamicParams.needsUpdate=!0,o.uv.needsUpdate=!0,o.normal.needsUpdate=!0),ky(t.trailGeometry,o,p),t.trailMesh.visible=!0}function os(t){const e=t.trailPointPool??(t.trailPointPool=[]);for(const n of t.trailHistories.values())for(const i of n.points)e.push(i);t.trailHistories.clear(),Fc(t)}function Fc(t){t.trailMesh.visible=!1,t.trailGeometry.setDrawRange(0,0)}function Ih(t,e,n,i){let r=0;for(let a=t.length-1;a>=0;a--){const o=t[a],c=t[a+1];c&&(r+=o.position.distanceTo(c.position)),o.distanceFromHead=r}let s=0;for(;s<t.length&&(e!==void 0&&t[s].distanceFromHead>e&&t.length-s>1||n-t[s].timeSeconds>t[s].lifetimeSeconds);)i==null||i.push(t[s]),s++;if(s>0){for(let a=s;a<t.length;a++)t[a-s]=t[a];t.length-=s}}var Gy=[1,1,1,1];function Wr(t,e){return new Dt(new Float32Array(t*e),e).setUsage(Zr)}function Hy(t,e){const n=t.trailBuffers;if(n&&n.capacity>=e)return n;const i=Math.max(64,2**Math.ceil(Math.log2(e)));n&&t.trailGeometry.dispose();const r={capacity:i,position:Wr(i,3),color:Wr(i,4),uv:Wr(i,2),normal:Wr(i,3),dynamicParams:Wr(i,4),index:new Dt(new Uint32Array(i*3),1).setUsage(Zr),srgbColor:(n==null?void 0:n.srgbColor)??new Xe,trailColor:(n==null?void 0:n.trailColor)??[1,1,1,1],direction:(n==null?void 0:n.direction)??new N,viewDirection:(n==null?void 0:n.viewDirection)??new N,side:(n==null?void 0:n.side)??new N};return t.trailGeometry.setAttribute("position",r.position),t.trailGeometry.setAttribute("color",r.color),t.trailGeometry.setAttribute("uv",r.uv),t.trailGeometry.setAttribute("normal",r.normal),t.trailGeometry.setAttribute("trailDynamicParams",r.dynamicParams),t.trailGeometry.setIndex(r.index),t.trailBuffers=r,r}function ky(t,e,n){const i=t.boundingSphere??(t.boundingSphere=new Mi),r=e.position.array;let s=1/0,a=1/0,o=1/0,c=-1/0,l=-1/0,u=-1/0;for(let d=0;d<n*3;d+=3)s=Math.min(s,r[d]),c=Math.max(c,r[d]),a=Math.min(a,r[d+1]),l=Math.max(l,r[d+1]),o=Math.min(o,r[d+2]),u=Math.max(u,r[d+2]);i.center.set((s+c)/2,(a+l)/2,(o+u)/2);let h=0;for(let d=0;d<n*3;d+=3){const f=r[d]-i.center.x,p=r[d+1]-i.center.y,x=r[d+2]-i.center.z;h=Math.max(h,f*f+p*p+x*x)}i.radius=Math.sqrt(h)}function Wy(t,e,n,i){if(!fS(e))return{texture:null,owned:!1};if(e!=="constant"){const r=Xy(t,e,n);if(r)return{texture:r,owned:!0}}return e==="constant"?{texture:null,owned:!1}:n?{texture:null,owned:!1}:{texture:t,owned:!1}}function Xy(t,e,n,i){const r=typeof document<"u"?document:void 0;if(!r)return null;const s=t.image,a=$y(s),o=qy(s);if(!s||a<=0||o<=0)return null;const c=r.createElement("canvas");c.width=a,c.height=o;const l=c.getContext("2d",{willReadFrequently:!0});if(!l)return null;try{l.drawImage(s,0,0,a,o);const h=l.getImageData(0,0,a,o);pS(h.data,e,n),l.putImageData(h,0,0)}catch{return null}const u=new Zc(c);return u.colorSpace=t.colorSpace,u.flipY=t.flipY,u.wrapS=t.wrapS,u.wrapT=t.wrapT,u.minFilter=t.minFilter,u.magFilter=t.magFilter,u.generateMipmaps=t.generateMipmaps,u.needsUpdate=!0,u}function $y(t){return t?"naturalWidth"in t&&typeof t.naturalWidth=="number"?t.naturalWidth:"videoWidth"in t&&typeof t.videoWidth=="number"?t.videoWidth:"width"in t&&typeof t.width=="number"?t.width:0:0}function qy(t){return t?"naturalHeight"in t&&typeof t.naturalHeight=="number"?t.naturalHeight:"videoHeight"in t&&typeof t.videoHeight=="number"?t.videoHeight:"height"in t&&typeof t.height=="number"?t.height:0:0}var Lh=64,Fh=1.25,Yy=.44,Zy=.42,td=new Map;function Nh(t,e,n=Lh){return`proc:${t}:${Oh(e).toFixed(3)}:${n}`}function Ky(t,e,n=Lh){const i=Nh(t,e,n),r=td.get(i);if(r)return r;const s=Jy(t,e,n);return td.set(i,s),s}function Jy(t,e,n){const i=Math.max(4,Math.round(n)),r=new Uint8Array(i*i*4),s=i/2,a=Oh(e);for(let c=0;c<i;c++)for(let l=0;l<i;l++){const u=l+.5-s,h=c+.5-s,d=t==="square"?jy(u,h,i,a):Qy(u,h,i,a),f=(c*i+l)*4;r[f+0]=255,r[f+1]=255,r[f+2]=255,r[f+3]=Math.round(d*255)}const o=new Yc(r,i,i,mn);return o.colorSpace=Ut,o.magFilter=Bt,o.minFilter=fi,o.generateMipmaps=!0,o.needsUpdate=!0,o}function Qy(t,e,n,i){const r=n*Yy,s=Math.max(i*r,Fh);return Uh(Math.hypot(t,e),r,s)}function jy(t,e,n,i){const r=n*Zy,s=Math.max(i*r,Fh);return Uh(Math.max(Math.abs(t),Math.abs(e)),r,s)}function Uh(t,e,n){const i=Math.min(1,Math.max(0,(t-(e-n))/n));return 1-i*i*(3-2*i)}function Oh(t){const e=Number.isFinite(t)?Math.min(1,Math.max(0,t)):0;return Math.round(e*1e3)/1e3}function Wi(t){return t==="opaque"?Ln:t==="additive"?Mr:Fn}function e1(t,e){var s,a;const n=t.advanced.trails;if(!n.material)return null;const i=Bh({...t,modules:{...t.modules,textureSheetAnimation:!1},render:{...t.render,material:n.material,texture:n.texture,blend:"alpha",shading:"unlit",depthTest:n.depthTest,depthWrite:n.depthWrite,opacitySource:"textureAlpha",opacityInvert:!1}},e),r=i.material;if(r.vertexColors=!0,!(r instanceof Mt)&&r.map&&(n.textureMode==="tile"||(s=i.fixed)!=null&&s.uvPan||(a=i.fixed)!=null&&a.uvRotate)){const o=ul(r.map);o.wrapS=jr,o.wrapT=jr,r.map=o,i.ownedTextures.push(o)}return r instanceof Mt&&(r.vertexShader=r.vertexShader.replace("uniform vec4 uDynamicParams;",`attribute vec4 trailDynamicParams;
varying vec4 uDynamicParams;`).replace("void main() {",`void main() {
  uDynamicParams = trailDynamicParams;`).replace("vColor = uParticleColor;","vColor = color;").replace("vColor = vec4(uParticleColor.rgb * uParticleColor.a, uParticleColor.a);","vColor = vec4(color.rgb * color.a, color.a);"),r.fragmentShader=r.fragmentShader.replace("uniform vec4 uDynamicParams;","varying vec4 uDynamicParams;")),i.unsupportedFeatures=i.unsupportedFeatures.map(o=>o.replace(".render.material",".advanced.trails.material")),i}function Bh(t,e){var C;const n=t.render.material,i=n?(C=e.materialGraphProvider)==null?void 0:C.call(e,n.shaderId):void 0,r=t1(t,i),s=n1(t,e,i),a=s.texture,o=[];let c=null,l=null,u={rgb:!0,alpha:!0},h=!0,d=null,f=!1,p=a;const x=[...s.ownedTextures];let g=[Ea(t)??zh(t)??"",t.render.opacitySource,Number(t.render.opacityInvert),r?"lit":"unlit"].join(":");if(n)if(g=`${g}:${n.shaderId}`,!i)c=n.shaderId;else{const v=by(i,n,{mainTexUid:a?a.id:null});if(h=v.opacityIsConstantOne,d=n.shaderId!==mi||wr(v.blend)?v.blend:null,n.shaderId!==mi&&i.colorVersion!==1&&(u={rgb:v.usesParticleColorRGB,alpha:v.usesParticleColorAlpha}),g=`${g}:${i.side??"double"}:${v.blend}:${v.tier}:${v.bakeHash??v.shaderId}`,v.tier==="tier0-bake"&&a){const A=i1(a,i,n,e);A?(p=A,x.push(A),l=null,f=!0):(l=v.fixed??null,o.push(`${t.id}.render.material: Three could not bake the material texture yet.`))}else l=v.fixed??null;if(v.tier==="tier2-shader"){const A=r1(t,a,i,n,v,e);if(A)return p=null,l=null,x.push(...A.ownedTextures),{material:A.material,ownedTextures:x,fixed:l,particleColorUsage:u,opacityIsConstantOne:h,materialBlend:d,missingMaterialRef:c,unsupportedFeatures:o,key:g};o.push(`${t.id}.render.material: Three preview uses fixed-function material fallback for unsupported Tier-2 shader graphs.`)}v.tier==="tier3-defer"&&o.push(...v.diagnostics)}const m=n||!p?{texture:null,owned:!1}:Wy(p,t.render.opacitySource,t.render.opacityInvert);m.owned&&m.texture&&x.push(m.texture);const S=ds(t.render.blend,d),T=wr(S),M=f?.001:Math.max(.001,(i==null?void 0:i.opacityMaskClipValue)??hh),b={color:16777215,map:p??null,alphaMap:m.texture,opacity:1,transparent:!T,alphaTest:S==="masked"?M:m.texture?.001:0,depthTest:t.render.depthTest,depthWrite:T?!0:Vn({...t.render,blend:S==="additive"?"additive":S==="premultiplied"?"premultiplied":"alpha"}),blending:Wi(S),premultipliedAlpha:S==="premultiplied",side:Nc(i)};return{material:r?new Od({...b,metalness:0,roughness:.62}):new zi(b),ownedTextures:x,fixed:l,particleColorUsage:u,opacityIsConstantOne:h,materialBlend:d,missingMaterialRef:c,unsupportedFeatures:o,key:g}}function t1(t,e){return t.render.shading==="lit"||!!t.render.material&&(e==null?void 0:e.shadingModel)==="lit"}function Vh(t){return t instanceof zi||t instanceof Od||t instanceof Mt}function Ea(t,e){const n=t.render.material;return n&&$M(e,n)||t.render.texture}function zh(t,e){return t.mode!=="billboard"||t.render.material||Ea(t,e)?null:Nh(t.billboard.shape,t.billboard.softness)}function n1(t,e,n){var r;const i=Ea(t,n);if(!i){if(t.render.material){const s=o1();return{texture:s,ownedTextures:s?[s]:[]}}return t.mode==="billboard"?{texture:Ky(t.billboard.shape,t.billboard.softness),ownedTextures:[]}:{texture:null,ownedTextures:[]}}return{texture:((r=e.textureProvider)==null?void 0:r.getTexture(al(i)))??null,ownedTextures:[]}}function i1(t,e,n,i){const r=Gh(t);if(!r)return null;const s=r.getContext("2d",{willReadFrequently:!0});if(!s)return null;const a=s.getImageData(0,0,r.width,r.height);cy(a.data,r.width,r.height,e,n,{samplerForPath:(c,l)=>c1(c,l,i)??null}),s.putImageData(a,0,0);const o=new Zc(r);return o.colorSpace=t.colorSpace,o.flipY=t.flipY,o.wrapS=t.wrapS,o.wrapT=t.wrapT,o.minFilter=t.minFilter,o.magFilter=t.magFilter,o.generateMipmaps=t.generateMipmaps,o.needsUpdate=!0,o}function r1(t,e,n,i,r,s){var g;if(!wy(r))return null;const a=Cy({artifact:r,graph:n,instance:i});if(!a)return null;const o=r.fixed??{tint:[1,1,1,1],emissive:0,opacity:1,blend:n.blend},c=m=>m?Ly(m):null,l={};for(const m of a.samplers)l[m.uniform]={value:c(((g=s.textureProvider)==null?void 0:g.getTexture(al(m.path)))??e)};const u=ds(t.render.blend,r.blend),h=wr(u),d=n.shadingModel==="lit"||!!r.usesSceneLighting,f=d?id:nd,p=n.colorVersion===1?`#define NFX_THREE_OUTPUT
`:"",x=new Mt({vertexShader:n.colorVersion===1?f.replace("vec4(uParticleColor.rgb * uParticleColor.a, uParticleColor.a)","uParticleColor"):d?id:nd,fragmentShader:d?`${p}${s1}${a.fragment}`:`${p}${a.fragment}`,lights:d,uniforms:{...d?Ud.clone(me.lights):{},uTexture:{value:c(e)},uTime:{value:0},uFixedTint:{value:new xt(...o.tint)},uFixedEmissive:{value:Math.max(0,o.emissive)},uFixedOpacity:{value:o.opacity},uClipValue:{value:n.opacityMaskClipValue??.333},uSheetTiles:{value:new et(...a1(t))},uSubUv:{value:new xt(0,0,1,1)},uSubUvFromAttr:{value:0},uParticleColor:{value:new xt(1,1,1,1)},uDynamicParams:{value:new xt(0,0,0,0)},...l},transparent:!h,depthTest:t.render.depthTest,depthWrite:h?!0:r.opacityIsConstantOne?Vn({...t.render,blend:u==="additive"?"additive":u==="premultiplied"?"premultiplied":"alpha"}):!1,blending:Wi(u),premultipliedAlpha:u==="premultiplied",side:Nc(n),forceSinglePass:!(t.mode==="mesh"&&t.mesh.renderMode==="meshAsset"&&!h&&u!=="additive"&&Nc(n)===ln)});return x.userData.nixieSurfaceGraph=!d,{material:x,ownedTextures:[]}}function Nc(t){return(t==null?void 0:t.side)==="front"?Kn:(t==null?void 0:t.side)==="back"?Jt:ln}var nd=`
varying vec2 vUV;
varying vec4 vColor;
uniform vec4 uParticleColor;
uniform vec4 uDynamicParams;

void main() {
  vUV = uv;
  vColor = vec4(uParticleColor.rgb * uParticleColor.a, uParticleColor.a);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,id=`
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
`,s1=`#define NFX_SCENE_LIGHTS
#include <common>
#include <lights_pars_begin>
`;function a1(t){if(!t.modules.textureSheetAnimation)return[1,1];const e=t.advanced.textureSheetAnimation;return[Math.max(1,Math.round(e.tiles[0])),Math.max(1,Math.round(e.tiles[1]))]}function o1(){if(typeof document>"u")return null;const t=document.createElement("canvas");t.width=1,t.height=1;const e=t.getContext("2d");if(!e)return null;e.fillStyle="#ffffff",e.fillRect(0,0,1,1);const n=new Zc(t);return n.needsUpdate=!0,n}function c1(t,e,n){var l;const i=(l=n.textureProvider)==null?void 0:l.getTexture(al(t)),r=i?Gh(i):null;if(!r)return null;const s=r.getContext("2d",{willReadFrequently:!0});if(!s)return null;const a=Math.min(r.width-1,Math.max(0,Math.round(e[0]*(r.width-1)))),o=Math.min(r.height-1,Math.max(0,Math.round(e[1]*(r.height-1)))),c=s.getImageData(a,o,1,1).data;return[(c[0]??0)/255,(c[1]??0)/255,(c[2]??0)/255,(c[3]??0)/255]}function Gh(t){if(typeof document>"u")return null;const e=t.image,n=l1(e),i=u1(e);if(!e||n<=0||i<=0)return null;const r=document.createElement("canvas");r.width=n,r.height=i;const s=r.getContext("2d",{willReadFrequently:!0});return s?(s.drawImage(e,0,0,n,i),r):null}function l1(t){return t?"naturalWidth"in t?t.naturalWidth:"videoWidth"in t?t.videoWidth:"displayWidth"in t?t.displayWidth:"width"in t?Hh(t.width):0:0}function u1(t){return t?"naturalHeight"in t?t.naturalHeight:"videoHeight"in t?t.videoHeight:"displayHeight"in t?t.displayHeight:"height"in t?Hh(t.height):0:0}function Hh(t){var e;return typeof t=="number"?t:t&&typeof t=="object"&&"baseVal"in t&&typeof((e=t.baseVal)==null?void 0:e.value)=="number"?t.baseVal.value:0}function d1(t){const e=t.getIndex();if(e){for(let n=0;n<e.count-2;n+=3){const i=e.getX(n+1);e.setX(n+1,e.getX(n+2)),e.setX(n+2,i)}e.needsUpdate=!0}else for(const n of Object.values(t.attributes))h1(n,1,2);rd(t.getAttribute("normal"),3),rd(t.getAttribute("tangent"),3)}function h1(t,e,n){if(!(t instanceof Dt))return;const i=t.itemSize,r=t.array;for(let s=0;s<t.count-2;s+=3){const a=(s+e)*i,o=(s+n)*i;for(let c=0;c<i;c++){const l=r[a+c];r[a+c]=r[o+c],r[o+c]=l}}t.needsUpdate=!0}function rd(t,e){if(!(t instanceof Dt))return;const n=t.itemSize,i=t.array,r=Math.min(n,e);for(let s=0;s<t.count;s++){const a=s*n;for(let o=0;o<r;o++)i[a+o]=-(i[a+o]??0)}t.needsUpdate=!0}var f1=new WeakSet;function p1(t){f1.add(t)}var m1=`
attribute vec3 aInstanceColor;
attribute float aInstanceAlpha;

varying vec2 vUv;
varying vec4 vInstanceColor;

void main() {
  vUv = uv;
  vInstanceColor = vec4(aInstanceColor, aInstanceAlpha);
  gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
}
`,g1=`
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
`;function x1(t,e){return!!(e&&t.mode==="billboard"&&t.render.shading==="unlit"&&!t.render.material&&!t.modules.trails&&!t.modules.textureSheetAnimation&&t.render.opacitySource==="textureAlpha"&&!t.render.opacityInvert&&(t.render.blend==="alpha"||t.render.blend==="additive"))}var v1=class{constructor(t,e,n,i){Z(this,"mesh"),Z(this,"geometry"),Z(this,"material"),Z(this,"colors"),Z(this,"alphas"),Z(this,"depths"),Z(this,"colorAttribute"),Z(this,"alphaAttribute"),Z(this,"sortScratch",null),Z(this,"depthWriteAuthored");const r=Math.max(1,Math.floor(n));this.geometry=t.clone(),this.colors=new Float32Array(r*3),this.alphas=new Float32Array(r),this.depths=new Float32Array(r),this.colorAttribute=new ns(this.colors,3),this.alphaAttribute=new ns(this.alphas,1),this.colorAttribute.setUsage(Zr),this.alphaAttribute.setUsage(Zr),this.geometry.setAttribute("aInstanceColor",this.colorAttribute),this.geometry.setAttribute("aInstanceAlpha",this.alphaAttribute),this.depthWriteAuthored=Vn(i.render),this.material=new Mt({vertexShader:m1,fragmentShader:g1,uniforms:{uTexture:{value:e}},transparent:!0,depthTest:i.render.depthTest,depthWrite:this.depthWriteAuthored,blending:i.render.blend==="additive"?Mr:Fn,side:ln,toneMapped:!1}),this.mesh=new ap(this.geometry,this.material,r),this.mesh.instanceMatrix.setUsage(Zr),this.mesh.count=0,this.mesh.visible=!1,this.mesh.frustumCulled=!1,p1(this.mesh)}setRenderState(t){this.material.depthTest=t.render.depthTest,this.depthWriteAuthored=Vn(t.render),this.material.depthWrite=this.depthWriteAuthored,this.material.blending=t.render.blend==="additive"?Mr:Fn}write(t,e,n,i,r=0){this.mesh.setMatrixAt(t,e);const s=t*3;this.colors[s+0]=n.r,this.colors[s+1]=n.g,this.colors[s+2]=n.b,this.alphas[t]=i,this.depths[t]=r}sortByCameraDistance(t,e){if(t<=1)return;const n=this.ensureSortScratch(),i=n.order;for(let o=0;o<t;o++)i[o]=o;const r=this.depths;i.subarray(0,t).sort(e?(o,c)=>(r[c]??0)-(r[o]??0):(o,c)=>(r[o]??0)-(r[c]??0));let s=!0;for(let o=0;o<t;o++)if(i[o]!==o){s=!1;break}if(s)return;const a=this.mesh.instanceMatrix.array;n.matrices.set(a.subarray(0,t*16)),n.colors.set(this.colors.subarray(0,t*3)),n.alphas.set(this.alphas.subarray(0,t));for(let o=0;o<t;o++){const c=i[o]??o,l=c*16,u=o*16;for(let f=0;f<16;f++)a[u+f]=n.matrices[l+f]??0;const h=c*3,d=o*3;this.colors[d+0]=n.colors[h+0]??0,this.colors[d+1]=n.colors[h+1]??0,this.colors[d+2]=n.colors[h+2]??0,this.alphas[o]=n.alphas[c]??0}}ensureSortScratch(){if(!this.sortScratch){const t=this.alphas.length;this.sortScratch={order:new Uint32Array(t),matrices:new Float32Array(t*16),colors:new Float32Array(t*3),alphas:new Float32Array(t)}}return this.sortScratch}commit(t){if(this.mesh.count=t,this.mesh.visible=t>0,!(t<=0)){if(this.depthWriteAuthored){let e=!0;for(let n=0;n<t;n++)if((this.alphas[n]??0)<.999){e=!1;break}this.material.depthWrite=e}this.mesh.instanceMatrix.needsUpdate=!0,this.colorAttribute.needsUpdate=!0,this.alphaAttribute.needsUpdate=!0}}setRenderOrder(t){this.mesh.renderOrder=t}dispose(){this.mesh.removeFromParent(),this.geometry.dispose(),this.material.dispose()}},_1=new ls(1,1);function M1(t,e,n){var C,v,A,P;const i=t.mode==="mesh"&&t.mesh.renderMode==="meshAsset",r=i?t.mesh.asset:null,a=(i?((C=n.renderGeometryOverride)==null?void 0:C.geometry)??(r?(v=e.meshProvider)==null?void 0:v.getMeshGeometry(r):null):null)??_1,o=i&&(t.mesh.flipWinding||t.mesh.recomputeNormals)?a.clone():null,c=o??a;o&&t.mesh.flipWinding&&d1(o),o&&t.mesh.recomputeNormals&&o.computeVertexNormals();const l=y1(c),u=E1(c),h=((P=(A=e.materialProvider)==null?void 0:A.getParticleMaterial)==null?void 0:P.call(A,n.effect,t.id))??null,d=h&&Vh(h)?h:null,f=Bh(t,e);d&&f.material.dispose();const p=d?null:f.material instanceof Mt?S1(f.material,"uTexture"):f.material.map,x=d||f.material instanceof Mt?null:f.material.alphaMap,g=Qu(p,x,t,d?null:f.fixed),m=!d&&x1(t,p)?new v1(c,p,t.maxParticles,t):null,S=new jt,T=e1(t,e),M=(T==null?void 0:T.material)??new zi({transparent:!0,vertexColors:!0,depthTest:t.render.depthTest,depthWrite:Vn(t.render),blending:t.render.blend==="additive"?Mr:Fn,premultipliedAlpha:t.render.blend==="premultiplied",side:ln}),b=T&&!(M instanceof Mt)?Qu(M.map,M.alphaMap,{...t,modules:{...t.modules,textureSheetAnimation:!1}},T.fixed):null,E=new Qt(S,M);return E.frustumCulled=!1,E.visible=!1,{key:w1(t,d?"host":f.key),staticKey:kh(t,e,n),meshes:[],instanced:m,particleOrder:new Uint32Array(Math.max(1,t.maxParticles)),geometry:c,ownedGeometry:o,pivotBoundsSize:l,debugBounds:u,trailMesh:E,trailGeometry:S,trailMaterial:M,trailResolution:T,trailTextureFrames:b,trailHistories:new Map,trailEmitterPosition:[0,0,0],material:d??f.material,ownedTextures:[...f.ownedTextures,...g.ownedTextures,...(T==null?void 0:T.ownedTextures)??[],...(b==null?void 0:b.ownedTextures)??[]],textureFrames:g,materialFixed:d?null:f.fixed,materialParticleColorUsage:d?{rgb:!0,alpha:!0}:f.particleColorUsage,materialOpacityIsConstantOne:d?!1:f.opacityIsConstantOne,materialBlend:d?null:f.materialBlend,missingMaterialRef:d?null:f.missingMaterialRef,unsupportedFeatures:[...f.unsupportedFeatures,...(T==null?void 0:T.unsupportedFeatures)??[]],hostMaterial:d!==null}}function S1(t,e){var i;const n=(i=t.uniforms[e])==null?void 0:i.value;return n&&n instanceof Vt?n:null}function y1(t){t.boundingBox||t.computeBoundingBox();const e=t.boundingBox;return e?[Math.max(0,e.max.x-e.min.x),Math.max(0,e.max.y-e.min.y),Math.max(0,e.max.z-e.min.z)]:[1,1,0]}function E1(t){t.boundingBox||t.computeBoundingBox();const e=t.boundingBox;return e?{min:[e.min.x,e.min.y,e.min.z],max:[e.max.x,e.max.y,e.max.z]}:{min:[-.5,-.5,0],max:[.5,.5,0]}}var sd=new WeakMap;function b1(t){if(!t)return"";let e=sd.get(t);return e===void 0&&(e=JSON.stringify(t),sd.set(t,e)),e}var ad=new WeakMap,T1=1;function A1(t){if(!t)return 0;let e=ad.get(t);return e===void 0&&(e=T1++,ad.set(t,e)),e}function kh(t,e,n){var s,a,o,c,l,u;const i=t.render.material?(s=e.materialGraphProvider)==null?void 0:s.call(e,t.render.material.shaderId):void 0,r=(o=(a=e.materialProvider)==null?void 0:a.getParticleMaterial)==null?void 0:o.call(a,n.effect,t.id);return[t.mode,t.maxParticles,t.mesh.renderMode,((c=t.mesh.asset)==null?void 0:c.path)??"",n.renderGeometryOverride?`hostgeo:${n.renderGeometryOverride.generation}`:"",r?`hostmat:${r.uuid}`:"",Number(t.mesh.flipWinding),Number(t.mesh.recomputeNormals),Ea(t)??zh(t)??"",((l=t.render.material)==null?void 0:l.shaderId)??"",b1(t.advanced.trails.material),t.advanced.trails.material?JSON.stringify([t.advanced.trails.texture,t.advanced.trails.textureMode,t.advanced.trails.depthTest,t.advanced.trails.depthWrite,A1((u=e.materialGraphProvider)==null?void 0:u.call(e,t.advanced.trails.material.shaderId))]):"",(i==null?void 0:i.side)??"double",(i==null?void 0:i.blend)??"normal",t.render.shading,t.render.blend,Number(t.render.depthTest),Number(Vn(t.render))].join("|")}function w1(t,e){var n;return[t.mode,t.maxParticles,t.mesh.renderMode,((n=t.mesh.asset)==null?void 0:n.path)??"",Number(t.mesh.flipWinding),Number(t.mesh.recomputeNormals),e,t.render.shading,t.render.blend,Number(t.render.depthTest),Number(Vn(t.render))].join("|")}function fa(t,e){for(let n=e;n<t.meshes.length;n++){const i=t.meshes[n];i&&(i.visible=!1)}}function Po(t){var e,n;for(const i of t.meshes)if(i.removeFromParent(),Array.isArray(i.material))for(const r of i.material)r.dispose();else i.material.dispose();t.meshes.length=0,(e=t.instanced)==null||e.dispose(),t.trailMesh.removeFromParent(),t.trailGeometry.dispose(),t.trailMaterial.dispose(),t.trailHistories.clear(),t.hostMaterial||t.material.dispose(),(n=t.ownedGeometry)==null||n.dispose();for(const i of t.ownedTextures)i.dispose();t.ownedTextures.length=0}function C1(t,e){return t.alphaMap!==null||t.map!==null&&e.render.opacitySource==="textureAlpha"}function R1(t,e,n,i,r,s,a,o,c){var f,p;Uy(t,n,r,s,c);const l=(f=t.uniforms.uParticleColor)==null?void 0:f.value;l==null||l.set(i.shaderColor[0],i.shaderColor[1],i.shaderColor[2],i.alpha);const u=ds(e.render.blend,a);t.depthTest=e.render.depthTest,wr(u)?(t.transparent=!1,t.depthWrite=!0,t.blending=Wi(u)):(t.transparent=!o||i.alpha<1||u==="additive"||u==="premultiplied",t.depthWrite=Vn({...e.render,blend:u==="additive"?"additive":u==="premultiplied"?"premultiplied":"alpha"},o?i.alpha:0),t.blending=Wi(u),t.premultipliedAlpha=u==="premultiplied"),t.needsUpdate=!0;const h=(p=t.uniforms.uDynamicParams)==null?void 0:p.value,d=P1(e,i);h==null||h.set(d[0],d[1],d[2],d[3]),t.uniforms.uTime&&(t.uniforms.uTime.value=c),t.uniformsNeedUpdate=!0}function P1(t,e){if(!t.modules.customData)return[0,0,0,0];const n=t.advanced.customData.channels;return[Se(n[0],e.normalizedAge,e.seed,e.loopAge),Se(n[1],e.normalizedAge,e.seed,e.loopAge),Se(n[2],e.normalizedAge,e.seed,e.loopAge),Se(n[3],e.normalizedAge,e.seed,e.loopAge)]}var D1=2135587861,Ni=new N(...gS),Qs=new N(...vh);function Uc(){return{activeParticles:0,visibleParticles:0,capacity:0,emittedLastFrame:0,bloomSourceParticles:0,drawCalls:0,instancedDrawCalls:0,legacyParticleDrawCalls:0,missingMeshRefs:[],missingMaterialRefs:[],unsupportedFeatures:[]}}function I1(){return{visibleParticles:0,bloomSourceParticles:0,drawCalls:0,instancedDrawCalls:0,legacyParticleDrawCalls:0}}function qn(t,e){return t.lengthSq()>1e-6?t.normalize():t.copy(e)}function L1(t,e){return Math.abs(t.y)<.9?e.set(0,1,0):e.set(1,0,0),e.cross(t).normalize()}function F1(t){return[t[0],t[1],t[2]]}function Xs(t){return Number.isFinite(t)?Math.min(8,Math.max(0,t)):1}function Oi(t,e,n){return Math.min(n,Math.max(e,t))}function N1(t){return Number.isFinite(t)?Math.floor(t):D1}function U1(t,e){e.length=t.length;const n=t.map((s,a)=>({index:a,orderInLayer:s.render.orderInLayer}));n.sort((s,a)=>s.orderInLayer-a.orderInLayer||s.index-a.index);let i=-1,r=null;for(const s of n)(r===null||s.orderInLayer!==r)&&(i+=1,r=s.orderInLayer),e[s.index]=i}function Wh(t,e,n,i){const r=t;switch(e){case"distanceNearFirst":return r+Math.min(.999999,Math.max(0,n)/(1+Math.max(0,n)));case"oldestFirst":return r+.5-.499999*Math.tanh(i);case"youngestFirst":return r+.5+.499999*Math.tanh(i);case"none":case"distanceFarFirst":default:return r}}function O1(t,e,n){const i=Math.min(t.activeCount,n.length);for(let a=0;a<i;a++)n[a]=a;if(e!=="oldestFirst"&&e!=="youngestFirst")return;const r=e==="oldestFirst"?(a,o)=>a>o:(a,o)=>a<o,s=t.instanceData;for(let a=1;a<i;a++){const o=n[a]??a,c=s[o*Wt+3]??0;let l=a;for(;l>0;){const u=n[l-1]??l-1,h=s[u*Wt+3]??0;if(!r(h,c))break;n[l]=u,l-=1}n[l]=o}}var B1=class{constructor(t){Z(this,"context",t),Z(this,"scratchWorld",new N),Z(this,"scratchAlignmentAxis",new N),Z(this,"scratchRight",new N),Z(this,"scratchForward",new N),Z(this,"scratchQuaternion",new jn),Z(this,"scratchRollQuaternion",new jn),Z(this,"scratchEuler",new Bn),Z(this,"scratchMatrix",new at),Z(this,"scratchBasisMatrix",new at),Z(this,"scratchPivotMatrix",new at),Z(this,"scratchScale",new N)}applySampleOrientation(t,e){if(e.render.alignAxis==="screen"&&e.render.facing==="cameraPlane"){this.scratchQuaternion.copy(this.context.camera.quaternion),this.context.camera.getWorldDirection(this.scratchForward),this.scratchForward.multiplyScalar(-1),t.normal.copy(qn(this.scratchForward,Ni));return}const n=qn(this.scratchAlignmentAxis.copy(t.alignmentAxis),Qs);if(e.render.facing==="off"){this.scratchQuaternion.setFromUnitVectors(Ni,n),t.normal.copy(n);return}e.render.facing==="cameraPosition"?this.scratchForward.set(this.context.camera.position.x-t.position[0],this.context.camera.position.y-t.position[1],this.context.camera.position.z-t.position[2]):(this.context.camera.getWorldDirection(this.scratchForward),this.scratchForward.multiplyScalar(-1));const i=qn(this.scratchForward,Ni),r=this.scratchRight.crossVectors(n,i);r.lengthSq()<=1e-6?(L1(n,r),i.crossVectors(r,n)):(r.normalize(),i.crossVectors(r,n)),qn(i,Ni),this.scratchBasisMatrix.makeBasis(r,n,i),this.scratchQuaternion.setFromRotationMatrix(this.scratchBasisMatrix),t.normal.copy(i)}applySampleToMesh(t,e,n,i,r,s,a){const o=Array.isArray(t.material)?t.material[0]:t.material;if(!o||!Vh(o))return;if(o instanceof Mt)R1(o,i,n.textureFrames,e,e.textureFrameIndex,n.materialFixed,n.materialBlend,n.materialOpacityIsConstantOne,a);else{Dh(o,n.textureFrames,e.textureFrameIndex,n.materialFixed,a);const l=ds(i.render.blend,n.materialBlend);o.depthTest=i.render.depthTest,o.color.copy(e.color),wr(l)?(o.depthWrite=!0,o.blending=Wi(l),o.opacity=l==="opaque"?1:e.alpha,o.transparent=!1):(o.depthWrite=Vn({...i.render,blend:l==="additive"?"additive":l==="premultiplied"?"premultiplied":"alpha"},e.alpha),o.blending=Wi(l),o.premultipliedAlpha=l==="premultiplied",o.opacity=e.alpha,o.transparent=e.alpha<1||l==="additive"||l==="premultiplied"||C1(o,i)),"emissive"in o&&(o.emissive.copy(e.color),o.emissiveIntensity=Math.max(0,e.emissiveStrength-1)),o.needsUpdate=!0}this.scratchWorld.set(e.position[0],e.position[1],e.position[2]),t.renderOrder=Wh(this.context.renderOrder+(this.context.emitterLayerRanks[r]??r),i.render.sortMode,this.scratchWorld.distanceToSquared(this.context.camera.position),e.start);const c=this.writeSampleMatrix(e,n,i,r,s);t.matrixAutoUpdate=!1,t.matrix.copy(c),t.matrixWorldNeedsUpdate=!0,t.visible=!0}applySampleToInstanced(t,e,n,i,r,s,a){const o=this.writeSampleMatrix(e,n,i,r,s),c=e.position[0]-this.context.camera.position.x,l=e.position[1]-this.context.camera.position.y,u=e.position[2]-this.context.camera.position.z,h=c*c+l*l+u*u;return t.write(a,o,e.color,e.alpha,h),h}writeSampleMatrix(t,e,n,i,r){this.applySampleOrientation(t,n),this.scratchEuler.set(t.rotation[0],t.rotation[1],t.rotation[2]),this.scratchRollQuaternion.setFromEuler(this.scratchEuler),this.scratchQuaternion.multiply(this.scratchRollQuaternion),this.scratchScale.set(t.width,t.height,n.mode==="mesh"&&n.mesh.renderMode==="meshAsset"?t.depthScale:1),this.scratchWorld.set(t.position[0]-this.context.position[0],t.position[1]-this.context.position[1],t.position[2]-this.context.position[2]),this.scratchMatrix.compose(this.scratchWorld,this.scratchQuaternion,this.scratchScale);const s=n.mode==="mesh"?n.mesh.pivot[0]*e.pivotBoundsSize[0]:n.billboard.pivot[0]*e.pivotBoundsSize[0],a=n.mode==="mesh"?n.mesh.pivot[1]*e.pivotBoundsSize[1]:n.billboard.pivot[1]*e.pivotBoundsSize[1],o=n.mode==="mesh"?n.mesh.pivot[2]*e.pivotBoundsSize[2]:0;return(s!==0||a!==0||o!==0)&&(this.scratchPivotMatrix.makeTranslation(-s,-a,-o),this.scratchMatrix.multiply(this.scratchPivotMatrix)),this.context.captureDebugTransforms&&this.context.debugTransforms.push({emitterId:n.id,emitterIndex:i,particleIndex:r,mode:n.mode==="billboard"?"billboard":n.mesh.renderMode==="meshAsset"?"meshAsset":"pixiShard",position:[...t.position],normal:[t.normal.x,t.normal.y,t.normal.z],width:t.width,height:t.height,depth:t.depth,localBounds:e.debugBounds,matrix:this.scratchMatrix.toArray()}),this.scratchMatrix}acquireMesh(t,e){let n=t.meshes[e];if(n)return n;const i=t.material instanceof Mt?Fy(t.material):t.material.clone();return n=new Qt(t.geometry,i),n.frustumCulled=!1,t.meshes[e]=n,this.context.root.add(n),n}},Xh=65472,od=Math.log2(1+Xh),V1=1.6,z1=.65;function G1(t,e){return $h(t,e,[0,0,0])}function $h(t,e,n){const i=2**Rn(e,-2,2),r=t[0]*i,s=t[1]*i,a=t[2]*i,o=Math.max(r,s,a);if(o<=1)return n[0]=r,n[1]=s,n[2]=a,n;const c=r*.59719+s*.35458+a*.04823,l=r*.076+s*.90834+a*.01566,u=r*.0284+s*.13383+a*.83777,h=Do(c),d=Do(l),f=Do(u);let p=Rn(h*1.60475+d*-.53108+f*-.07367,0,1),x=Rn(h*-.10208+d*1.10813+f*-.00605,0,1),g=Rn(h*-.00327+d*-.07276+f*1.07602,0,1);if(r>=o){const m=Math.max(s,a),S=Rn((r-m)/r,0,1),T=Math.log2(Math.max(1,o)),M=S*Rn((T-1)/8,0,1);M>0&&(p=Io(p,1,M),x=Io(x,.92*(1-Math.exp(-T/10)),M),g=Io(g,.62*(1-Math.exp(-T/16)),M))}return n[0]=p,n[1]=x,n[2]=g,n}function H1(t,e,n,i=.5){const r=G1(t,n),s=k1(t,e,i),a=Math.max(s[0],s[1],s[2]);if(a<=0)return r;const c=Math.max(t[0],t[1],t[2])>1?1/a:1,u=1+X1(a)*z1;return[Math.max(r[0],s[0]*c*u),Math.max(r[1],s[1]*c*u),Math.max(r[2],s[2]*c*u)]}function Do(t){const e=Math.max(0,t),n=e*(e+.0245786)-90537e-9,i=e*(.983729*e+.432951)+.238081;return i>0?n/i:0}function Io(t,e,n){return t+(e-t)*n}function k1(t,e,n){const i=Math.max(t[0],t[1],t[2]);if(i<=0)return[0,0,0];const r=W1(i,e,n);return[t[0]*r,t[1]*r,t[2]*r]}function W1(t,e,n){if(e<=0)return 1;const i=Math.max(0,e*n),r=Math.max(t-e,0);if(i<=0)return Rn(r/t,0,1);const s=Rn(t-e+i,0,i*2),a=s*s/(4*i);return Rn(Math.max(r,a)/t,0,1)}function X1(t){const e=Rn(Math.max(0,t),0,Xh);return od>0?Math.pow(Math.log2(1+e)/od,V1):0}function Rn(t,e,n){return Math.min(n,Math.max(e,t))}var $1=class{constructor(t){Z(this,"context",t),Z(this,"motionScratch",{position:[0,0,0],velocity:[0,0,0],scratchA:[0,0,0],scratchB:[0,0,0]}),Z(this,"motionModuleScratch",{seed:0,normalizedAge:0,loopAge:0,ageSeconds:0,timeSeconds:0,world:this.motionScratch.position,velocity:this.motionScratch.velocity}),Z(this,"sampleSizeScratch",{x:1,y:1,z:1}),Z(this,"initialColorScratch",[1,1,1,1]),Z(this,"secondaryColorScratch",[1,1,1,1]),Z(this,"moduleColorScratch",[1,1,1,1]),Z(this,"hdrColorScratch",[1,1,1]),Z(this,"renderColorScratch",[1,1,1]),Z(this,"analyticVelocityScratch",[0,0,0]),Z(this,"preCollisionWorldScratch",[0,0,0]),Z(this,"effectiveAlignmentVelocity",[0,0,0]),Z(this,"sampleScratch",{visible:!0,position:[0,0,0],velocity:[0,0,0],speed:0,normalizedAge:0,loopAge:0,start:0,seed:0,width:1,height:1,depthScale:1,depth:0,rotation:[0,0,0],color:new Xe,shaderColor:[1,1,1],lightColor:[1,1,1,1],trailColor:[1,1,1,1],alpha:1,alignmentAxis:new N,normal:new N,emissiveStrength:0,textureFrameIndex:0}),Z(this,"scratchColor",new Xe),Z(this,"scratchAlignmentAxis",new N)}sampleParticle(t,e,n,i,r,s){const a=e.instanceData,o=n*Wt,c=a[o+3]??0,l=Math.max(.001,a[o+7]??.001),u=i-c,h=u/l;if(h<-1e-6||h>1.000001)return;const d=Oi(h,0,1),f=Math.max(0,u),p=Oi(e.age/Math.max(.001,t.duration),0,1),x=a[o+8]??.5,g=tl(t,e,n,f,d,this.context.position,this.motionScratch,this.context.runner.effectiveInitialVelocityMultiplier(t.id)),m=g.velocity,S=g.position,T=Math.hypot(m[0],m[1],m[2]),M=t.render.alignAxis==="velocity";M&&(this.analyticVelocityScratch[0]=m[0],this.analyticVelocityScratch[1]=m[1],this.analyticVelocityScratch[2]=m[2]);const b=this.motionModuleScratch;if(b.seed=x,b.normalizedAge=d,b.loopAge=p,b.ageSeconds=f,b.timeSeconds=i,b.world=S,b.velocity=m,Mh(t,b),Sa(t,e,n,S,m,this.context.position),M&&(Jr(t,e,n,this.analyticVelocityScratch),this.preCollisionWorldScratch[0]=S[0],this.preCollisionWorldScratch[1]=S[1],this.preCollisionWorldScratch[2]=S[2]),t.modules.collision&&!VS(t,b))return;const E=q1(t,e,n,d,T,x,p,this.sampleSizeScratch),C=(a[o+13]??0)+f*(a[o+15]??0),v=(a[o+14]??0)+f*(a[o+16]??0),A=xS(a[o+9]??0,a[o+10]??0,f,WS(t,T,f,x,p)),P=D_(t.initializeParticle.color,x,d,p,this.initialColorScratch,this.secondaryColorScratch),R=Math.max(0,Se(t.initializeParticle.color.intensity,d,x,p)),D=this.context.emitterDrawParameters.get(t.id),O=D!=null&&D.colorOverLifetimeGradient?Y1(D.colorOverLifetimeGradient,d,this.moduleColorScratch):!t.modules.colorBySpeed&&!t.modules.lights?Z1(t,d,this.moduleColorScratch):HS(t,d,T,x,void 0,p),k=(r==null?void 0:r.tint)??[1,1,1,1],L=r?1+Math.max(0,r.emissive):1,$=(r==null?void 0:r.opacity)??1,V=s.rgb?P[0]*R*O[0]:1,Y=s.rgb?P[1]*R*O[1]:1,te=s.rgb?P[2]*R*O[2]:1,ne=s.alpha?P[3]*O[3]:1,j=this.hdrColorScratch;j[0]=Math.max(0,V*k[0]*L),j[1]=Math.max(0,Y*k[1]*L),j[2]=Math.max(0,te*k[2]*L);const re=this.context.previewBloomEnabled?H1(j,this.context.previewBloomThreshold,this.context.previewExposureStops):$h(j,this.context.previewExposureStops,this.renderColorScratch),Fe=this.scratchColor.setRGB(re[0],re[1],re[2],Ut),Be=Oi(ne*k[3]*$,0,1);let ae=m,W=T;if(M){const be=zS(t,e,n,f,l,i,x,p,this.context.position,this.context.runner.effectiveInitialVelocityMultiplier(t.id),this.preCollisionWorldScratch,this.effectiveAlignmentVelocity);be[0]+=m[0]-this.analyticVelocityScratch[0],be[1]+=m[1]-this.analyticVelocityScratch[1],be[2]+=m[2]-this.analyticVelocityScratch[2],ae=be,W=Math.hypot(be[0],be[1],be[2])}const se=this.resolveParticleAlignmentAxis(t,e,n,ae,W),U=this.sampleScratch;U.visible=!0,U.position[0]=S[0],U.position[1]=S[1],U.position[2]=S[2],U.velocity[0]=m[0],U.velocity[1]=m[1],U.velocity[2]=m[2],U.speed=T,U.normalizedAge=d,U.loopAge=p,U.start=c,U.seed=x;const le=as(e,n);if(U.width=E.x*(le?t.spawn.scale[0]:1),U.height=E.y*(le?t.spawn.scale[1]:1),U.depthScale=E.z*(le?t.spawn.scale[2]:1),U.depth=S[2],U.rotation[0]=C,U.rotation[1]=v,U.rotation[2]=A+(le&&t.render.alignAxis==="screen"?t.spawn.rotation[2]*Math.PI/180:0),U.lightColor[0]=P[0]*R*O[0],U.lightColor[1]=P[1]*R*O[1],U.lightColor[2]=P[2]*R*O[2],U.lightColor[3]=P[3]*O[3],U.color.copy(Fe),U.shaderColor[0]=re[0],U.shaderColor[1]=re[1],U.shaderColor[2]=re[2],U.alpha=Be,t.modules.trails&&t.advanced.trails.material&&(U.trailColor[0]=P[0]*R*O[0],U.trailColor[1]=P[1]*R*O[1],U.trailColor[2]=P[2]*R*O[2],U.trailColor[3]=P[3]*O[3]),U.alignmentAxis.copy(se),U.normal.copy(se),U.emissiveStrength=Math.max(j[0],j[1],j[2]),U.textureFrameIndex=Ny(t,d,x,p),D){let be=D.sizeMultiplier;D.sizeMultiplierValue&&(be*=Math.max(0,dM(D.sizeMultiplierValue,d,x))),U.width*=be,U.height*=be,U.depthScale*=be;const ye=D.colorTint;U.color.r*=ye[0],U.color.g*=ye[1],U.color.b*=ye[2],U.shaderColor[0]*=ye[0],U.shaderColor[1]*=ye[1],U.shaderColor[2]*=ye[2],U.alpha*=ye[3];for(let tt=0;tt<4;tt++)U.trailColor[tt]*=ye[tt]}return U}resolveParticleAlignmentAxis(t,e,n,i,r){const s=this.scratchAlignmentAxis;if(t.render.alignAxis==="screen")return s.copy(Qs).applyQuaternion(this.context.camera.quaternion),qn(s,Qs);if(t.render.alignAxis==="velocity"){if(s.set(i[0],i[1],i[2]),r>1e-6)return qn(s,Ni);const a=n*tn;s.set(e.spawnDirectionData[a+0]??0,e.spawnDirectionData[a+1]??1,e.spawnDirectionData[a+2]??0);const o=[s.x,s.y,s.z];return Jr(t,e,n,o),s.set(...o),qn(s,Ni)}if(t.render.alignAxis==="spawnDirection"){const a=n*tn;s.set(e.spawnDirectionData[a+0]??0,e.spawnDirectionData[a+1]??1,e.spawnDirectionData[a+2]??0);const o=[s.x,s.y,s.z];return Jr(t,e,n,o),s.set(...o),qn(s,Ni)}return s.set(t.render.alignmentVector[0],t.render.alignmentVector[1],t.render.alignmentVector[2]),qn(s,Qs)}};function q1(t,e,n,i,r,s,a,o){const c=n*Wt,l=Math.max(0,e.instanceData[c+11]??1),u=Math.max(0,e.instanceData[c+12]??l),h=t.mode==="mesh"?Math.max(0,e.instanceData[c+17]??l):l,d=t.mode==="billboard"?t.billboard.sizeValue:t.mesh.sizeValue,f=t.mode==="billboard"?t.billboard.separateAxes?t.billboard.sizeValueY:d:t.mesh.separateAxes?t.mesh.sizeValueY:d,p=t.mode==="mesh"&&t.mesh.separateAxes?t.mesh.sizeValueZ:d,x=t.modules.size?Math.max(0,Se(d,i,s,a)):1,g=t.modules.size?Math.max(0,Se(f,i,s,a)):1,m=t.modules.size?Math.max(0,Se(p,i,s,a)):1,S=kS(t,r,s,a);return o.x=Math.max(1e-4,l*x*S),o.y=Math.max(1e-4,u*g*S),o.z=Math.max(1e-4,h*m*S),o}function Y1(t,e,n){return rn(t,e,n),n[3]=sn(t,e),n}function Z1(t,e,n){return t.modules.color?(rn(t.color.gradient,e,n),n[3]=sn(t.color.gradient,e),n):(n[0]=1,n[1]=1,n[2]=1,n[3]=1,n)}function K1(t,e,n,i){if(!e.modules.trails)return;const r=e.advanced.trails;if(n.seed>=r.ratio)return;const s=Math.max(.001,Se(r.lifetime,n.normalizedAge,n.seed,n.loopAge)),a=Math.max(0,Se(r.length,n.normalizedAge,n.seed,n.loopAge)),o=Math.max(.001,Se(r.width,n.normalizedAge,n.seed,n.loopAge)),c=`${n.start.toFixed(6)}:${n.seed.toFixed(6)}`;let l=t.trailHistories.get(c);l||(l={points:[],lastSeenFrame:i},t.trailHistories.set(c,l));const u=l.points,h=u[u.length-1],d=h?n.position[0]-h.position.x:0,f=h?n.position[1]-h.position.y:0,p=h?n.position[2]-h.position.z:0,x=!h||d*d+f*f+p*p>=r.minVertexDistance**2,g=t.trailPointPool??(t.trailPointPool=[]),m=x?g.pop()??{dynamicParams:null,position:new N,timeSeconds:0,lifetimeSeconds:0,distanceFromHead:0,color:[0,0,0],alpha:0,width:0,seed:0,maxLength:void 0}:h;if(t.trailResolution){const S=m.dynamicParams??(m.dynamicParams=[0,0,0,0]);for(let T=0;T<4;T++)S[T]=e.modules.customData?Se(e.advanced.customData.channels[T],n.normalizedAge,n.seed,n.loopAge):0;m.color[0]=n.trailColor[0],m.color[1]=n.trailColor[1],m.color[2]=n.trailColor[2],m.alpha=n.trailColor[3]}else m.dynamicParams=null,m.color[0]=n.color.r,m.color[1]=n.color.g,m.color[2]=n.color.b,m.alpha=n.alpha;m.position.set(n.position[0],n.position[1],n.position[2]),m.timeSeconds=i,m.lifetimeSeconds=s,m.width=o,m.maxLength=a>0?a:void 0,m.seed=n.seed,x&&u.push(m),l.lastSeenFrame=i,Ih(u,a>0?a:void 0,i,g)}function J1(t,e,n){const i=t.trailEmitterPosition;if(e.modules.trails&&!e.advanced.trails.worldSpace&&t.trailHistories.size>0){const r=n[0]-i[0],s=n[1]-i[1],a=n[2]-i[2];if(r!==0||s!==0||a!==0)for(const o of t.trailHistories.values())for(const c of o.points)c.position.x+=r,c.position.y+=s,c.position.z+=a}i[0]=n[0],i[1]=n[1],i[2]=n[2]}var Q1=class{constructor(t){Z(this,"context",t),Z(this,"sampler"),Z(this,"presentation"),this.sampler=new $1(t),this.presentation=new B1(t)}drawEmitter(t,e,n,i,r){var x,g,m,S,T;if(e.mode==="mesh"&&e.mesh.renderMode==="meshAsset"&&!this.context.renderGeometryOverrides.has(e.id)&&(!e.mesh.asset||!((x=this.context.options.meshProvider)!=null&&x.getMeshGeometry(e.mesh.asset))))return fa(t,0),(g=t.instanced)==null||g.commit(0),os(t),t.trailMesh.removeFromParent(),I1();const s=ds(e.render.blend,t.materialBlend),a=wr(s);t.material.depthTest=e.render.depthTest;const o=a?!0:Vn({...e.render,blend:s==="additive"?"additive":s==="premultiplied"?"premultiplied":"alpha"}),c=Wi(s),l=s==="premultiplied";t.material.depthWrite=o,t.material.blending=c,t.material.premultipliedAlpha=l,(m=t.instanced)==null||m.setRenderState(e),t.trailResolution||(t.trailMaterial.depthTest=e.render.depthTest,t.trailMaterial.depthWrite=o,t.trailMaterial.blending=c,t.trailMaterial.premultipliedAlpha=l,a&&(t.trailMaterial.transparent=!1)),a&&(t.material.transparent=!1),J1(t,e,this.context.position);let u=0,h=0,d=0,f=0;t.instanced&&O1(n,e.render.sortMode,t.particleOrder);for(let M=0;M<n.activeCount;M++){const b=t.instanced?t.particleOrder[M]??M:M,E=this.sampler.sampleParticle(e,n,b,r,t.materialFixed,t.materialParticleColorUsage);if(E&&this.context.lightCandidates.addParticle(e,n,b,E,this.context.position),!(!(E!=null&&E.visible)||(K1(t,e,E,r),!(E.alpha>0||t.material instanceof Mt||a)))){if(t.instanced){const v=this.presentation.applySampleToInstanced(t.instanced,E,t,e,i,b,u);d+=v,f+=E.start}else{const v=this.presentation.acquireMesh(t,u);this.presentation.applySampleToMesh(v,E,t,e,i,b,r)}u++,E.emissiveStrength>this.context.previewBloomThreshold&&h++}}fa(t,u),t.instanced&&u>1&&(e.render.sortMode==="distanceFarFirst"?t.instanced.sortByCameraDistance(u,!0):e.render.sortMode==="distanceNearFirst"&&t.instanced.sortByCameraDistance(u,!1)),(S=t.instanced)==null||S.commit(u),(T=t.instanced)==null||T.setRenderOrder(Wh(this.context.renderOrder+(this.context.emitterLayerRanks[i]??i),e.render.sortMode,u>0?d/u:0,u>0?f/u:0));let p=0;return e.modules.trails?(t.trailMesh.parent||this.context.root.add(t.trailMesh),t.trailMesh.renderOrder=this.context.renderOrder+(this.context.emitterLayerRanks[i]??i),zy(t,e,this.context.camera,r,this.context.position),p=t.trailMesh.visible?1:0):(os(t),t.trailMesh.removeFromParent()),{visibleParticles:u,bloomSourceParticles:h,drawCalls:(u>0?t.instanced?1:u:0)+p,instancedDrawCalls:u>0&&t.instanced?1:0,legacyParticleDrawCalls:t.instanced?0:u}}};function cd(t){return j1(t)?Ac({app:"vfx-editor",kind:"particle-effect",version:1,targetProfile:t.targetProfile,id:t.id,name:t.name,timeline:t.timeline,emitters:t.emitters}):Ac(t)}function j1(t){return!!(t&&typeof t=="object"&&t.kind==="vfx-effect")}var eE=class{constructor(t){Z(this,"root",t),Z(this,"startedAt",0),Z(this,"instanceId",hS()),Z(this,"candidates",[]),Z(this,"worldCandidates",[]),Z(this,"scratchWorld",new N),Z(this,"particleCutoff",1/0)}clear(){this.candidates.length=0}getWorldCandidates(){if(this.worldCandidates.length=0,!this.root.parent)return this.worldCandidates;let t=!1;for(let e=this.root;e;e=e.parent){if(!e.visible)return this.worldCandidates;e.isScene&&(t=!0)}if(!t)return this.worldCandidates;this.root.updateWorldMatrix(!0,!1);for(const e of this.candidates)this.scratchWorld.fromArray(e.position).applyMatrix4(this.root.matrixWorld),this.worldCandidates.push({...e,position:this.scratchWorld.toArray()});return this.worldCandidates}beginEmitter(t,e,n,i){const r=t.lightEmission;if(this.particleCutoff=1/0,(r==null?void 0:r.enabled)!==!1&&(r==null?void 0:r.mode)==="particles"&&r.maxLights!==null){const s=Array.from(e.particleIds.subarray(0,e.activeCount)).sort((a,o)=>a-o);this.particleCutoff=r.maxLights>0?s[r.maxLights-1]??1/0:-1}if((r==null?void 0:r.enabled)!==!1&&(r==null?void 0:r.mode)==="emitter"&&n-this.startedAt>=t.timeline.start&&e.age>=0&&(t.loop||e.age<=t.duration)&&i){const s=Math.min(1,Math.max(0,e.age/t.duration)),a=Vu(r,`${this.instanceId}/${t.id}/origin`,t.spawn.position,s,s,e.loopRandom);a&&this.candidates.push(a)}}addParticle(t,e,n,i,r){var s,a;if(((s=t.lightEmission)==null?void 0:s.enabled)!==!1&&((a=t.lightEmission)==null?void 0:a.mode)==="particles"&&e.particleIds[n]<=this.particleCutoff){const o=Vu(t.lightEmission,`${this.instanceId}/${t.id}/${e.particleIds[n]}`,[i.position[0]-r[0],i.position[1]-r[1],i.position[2]-r[2]],i.normalizedAge,i.loopAge,i.seed,i.lightColor);o&&this.candidates.push(o)}}},tE=1/60,nE=class{constructor(t){Z(this,"options",t),Z(this,"root",new pr),Z(this,"lightRevision",0),Z(this,"lightCandidates",new eE(this.root)),Z(this,"stats",Uc()),Z(this,"effect"),Z(this,"runner"),Z(this,"emitterViews",[]),Z(this,"debugTransforms",[]),Z(this,"emitterLayerRanks",[]),Z(this,"position"),Z(this,"seed"),Z(this,"timeSeconds"),Z(this,"paused",!1),Z(this,"destroyed",!1),Z(this,"visible",!0),Z(this,"captureDebugTransforms"),Z(this,"renderOrder",0),Z(this,"camera"),Z(this,"previewBloomEnabled"),Z(this,"previewBloomThreshold"),Z(this,"previewExposureStops"),Z(this,"emissionOverrides",new Map),Z(this,"renderGeometryOverrides",new Map),Z(this,"renderGeometryGeneration",0),Z(this,"emitterDrawParameters",new Map),Z(this,"emissionBoundSources",new Map),Z(this,"drawer");const e=this;this.drawer=new Q1({get lightCandidates(){return e.lightCandidates},get root(){return e.root},get runner(){return e.runner},get position(){return e.position},get camera(){return e.camera},get emitterDrawParameters(){return e.emitterDrawParameters},get renderOrder(){return e.renderOrder},get emitterLayerRanks(){return e.emitterLayerRanks},get captureDebugTransforms(){return e.captureDebugTransforms},get debugTransforms(){return e.debugTransforms},get previewBloomEnabled(){return e.previewBloomEnabled},get previewBloomThreshold(){return e.previewBloomThreshold},get previewExposureStops(){return e.previewExposureStops},get renderGeometryOverrides(){return e.renderGeometryOverrides},get options(){return e.options}}),this.effect=cd(t.effect),this.camera=t.camera,this.runner=new EM(this.effect),this.position=F1(t.position??[0,0,0]),this.captureDebugTransforms=t.captureDebugTransforms!==!1,this.seed=N1(t.seed),this.timeSeconds=Math.max(0,t.timeSeconds??0),this.previewBloomThreshold=Math.max(0,t.previewBloomThreshold??1),this.previewBloomEnabled=t.previewBloomEnabled===!0,this.previewExposureStops=Oi(t.previewExposureStops??0,-2,2),this.runner.setRuntimeParameters(t.runtimeParameters??{}),this.syncEmissionGeometries(),this.setTransform({position:this.position,rotation:t.rotation,scale:t.scale}),t.autoStart!==!1&&this.play()}get lightsPaused(){return this.paused}getLightCandidates(){return this.lightCandidates.getWorldCandidates()}get isActive(){return this.runner.isActive}play(){this.destroyed||(this.paused=!1,this.runner.isActive?this.runner.resumeEmission():(this.lightCandidates.startedAt=this.timeSeconds,this.runner.reset(this.effect,this.position,this.timeSeconds,this.seed)),this.draw(this.timeSeconds))}pause(){this.paused=!0}stop(){this.lightCandidates.clear(),this.lightRevision++,this.runner.stop(),this.clearViews(),this.syncStats(0,0,0,0,0)}allowCompletion(){this.runner.allowCompletion()}setRuntimeParameters(t){this.runner.setRuntimeParameters(t)}setRenderOrder(t){var e;this.renderOrder=Number.isFinite(t)?t:0,this.root.renderOrder=this.renderOrder;for(let n=0;n<this.emitterViews.length;n++){const i=this.emitterViews[n];if(!i)continue;const r=this.emitterLayerRanks[n]??n;(e=i.instanced)==null||e.setRenderOrder(this.renderOrder+r),i.trailMesh.renderOrder=this.renderOrder+r}}seek(t){if(this.destroyed)return;this.lightRevision++,this.lightCandidates.startedAt=0;const e=Math.max(0,Number.isFinite(t)?t:0);for(const i of this.emitterViews)i&&os(i);this.timeSeconds=0,this.runner.reset(this.effect,this.position,0,this.seed);let n=0;for(;n<e;){const i=Math.min(tE,e-n);n+=i,this.runner.update(i,n)}this.timeSeconds=e,this.draw(e)}update(t){if(this.destroyed||this.paused)return;const e=Math.max(0,Number.isFinite(t)?t:0);this.timeSeconds+=e,this.syncEmissionGeometries(),e>0&&this.runner.update(e,this.timeSeconds),this.draw(this.timeSeconds)}setEmitterRuntimeParameters(t,e){if(this.destroyed)return;const{sizeMultiplier:n,colorTint:i,sizeMultiplierValue:r,colorOverLifetimeGradient:s,...a}=e;if((a.emissionRateMultiplier!==void 0||a.initialVelocityMultiplier!==void 0)&&this.runner.setEmitterRuntimeParameters(t,a),n===void 0&&i===void 0&&r===void 0&&s===void 0)return;const o=this.emitterDrawParameters.get(t)??{sizeMultiplier:1,colorTint:[1,1,1,1],sizeMultiplierValue:null,colorOverLifetimeGradient:null};n!==void 0&&(o.sizeMultiplier=Number.isFinite(n)?Math.max(0,n):1),i!==void 0&&(o.colorTint=[Xs(i[0]),Xs(i[1]),Xs(i[2]),Xs(i[3])]),r!==void 0&&(o.sizeMultiplierValue=r?uM(vt(r,1,0,100)):null),s!==void 0&&(o.colorOverLifetimeGradient=s?Gi(s,[1,1,1,1],[1,1,1,1]):null),this.emitterDrawParameters.set(t,o)}emitBurst(t,e={}){return this.destroyed?0:(this.paused=!1,this.runner.isActive||this.play(),this.syncEmissionGeometries(),this.runner.emitBurst(t,e))}restart(){this.destroyed||(this.paused=!1,this.seek(0))}setRenderGeometry(t,e){if(!this.destroyed){if(e)this.renderGeometryOverrides.set(t,{geometry:e,generation:++this.renderGeometryGeneration});else{if(!this.renderGeometryOverrides.has(t))return;this.renderGeometryOverrides.delete(t)}this.ensureViews()}}setEmissionGeometry(t,e){this.destroyed||(e?this.emissionOverrides.set(t,e):this.emissionOverrides.delete(t),this.emissionBoundSources.delete(t),this.syncEmissionGeometries())}syncEmissionGeometries(){var t;for(const e of this.effect.emitters){if(e.spawn.shape!=="mesh")continue;const n=this.emissionOverrides.get(e.id),i=!n&&e.spawn.meshAsset?((t=this.options.meshProvider)==null?void 0:t.getMeshGeometry(e.spawn.meshAsset))??null:null,r=n??i;if(this.emissionBoundSources.get(e.id)===r&&this.emissionBoundSources.has(e.id))continue;const a=r?Iy(r):null;this.runner.setEmissionGeometry(e.id,a),this.emissionBoundSources.set(e.id,r)}}setTransform(t){t.position&&(this.position[0]=t.position[0],this.position[1]=t.position[1],this.position[2]=t.position[2],this.runner.setPosition(this.position),this.root.position.set(t.position[0],t.position[1],t.position[2])),t.rotation&&this.root.rotation.set(t.rotation[0],t.rotation[1],t.rotation[2]),t.scale&&this.root.scale.set(t.scale[0],t.scale[1],t.scale[2])}setVisible(t){this.visible=t,this.root.visible=t,this.lightRevision++}setCamera(t){this.camera=t,this.draw(this.timeSeconds)}setPreviewBloomOptions(t){typeof t.enabled=="boolean"&&(this.previewBloomEnabled=t.enabled),this.previewBloomThreshold=Math.max(0,t.threshold??this.previewBloomThreshold),this.previewExposureStops=Oi(t.exposureStops??this.previewExposureStops,-2,2),this.draw(this.timeSeconds)}updateDefinition(t,e={}){return this.effect=cd(t),this.lightRevision++,this.runner.updateDefinition(this.effect),this.emissionBoundSources.clear(),this.syncEmissionGeometries(),e.preserveViews||this.rebuildViews(),this.effect}getParticleDebugTransforms(t=[]){return t.push(...this.debugTransforms),t}destroy(){this.destroyed||(this.destroyed=!0,this.stop(),this.rebuildViews(),this.root.removeFromParent())}draw(t){var a;if(this.lightCandidates.clear(),!this.visible)return;this.ensureViews(),this.debugTransforms.length=0,U1(this.runner.definition.emitters,this.emitterLayerRanks);let e=0,n=0,i=0,r=0,s=0;for(let o=0;o<this.effect.emitters.length;o++){const c=this.runner.definition.emitters[o],l=this.runner.states[o],u=this.emitterViews[o];if(!c||!l||!u||!c.enabled){u&&(fa(u,0),(a=u.instanced)==null||a.commit(0),os(u),u.trailMesh.removeFromParent());continue}this.lightCandidates.beginEmitter(c,l,t,this.runner.isActive);const h=this.drawer.drawEmitter(u,c,l,o,t);e+=h.visibleParticles,n+=h.bloomSourceParticles,i+=h.drawCalls,r+=h.instancedDrawCalls,s+=h.legacyParticleDrawCalls}this.syncStats(e,n,i,r,s)}ensureViews(){var t;for(let e=0;e<this.effect.emitters.length;e++){const n=this.effect.emitters[e],i={effect:this.effect,renderGeometryOverride:this.renderGeometryOverrides.get(n.id)??null},r=kh(n,this.options,i);if(((t=this.emitterViews[e])==null?void 0:t.staticKey)===r)continue;this.emitterViews[e]&&Po(this.emitterViews[e]);const s=M1(n,this.options,i);this.emitterViews[e]=s,s.instanced&&this.root.add(s.instanced.mesh)}for(;this.emitterViews.length>this.effect.emitters.length;){const e=this.emitterViews.pop();e&&Po(e)}}rebuildViews(){for(const t of this.emitterViews)Po(t);this.emitterViews.length=0}clearViews(){var t;for(const e of this.emitterViews)fa(e,0),(t=e.instanced)==null||t.commit(0)}syncStats(t,e,n,i,r){this.stats.activeParticles=this.runner.stats.activeParticles,this.stats.visibleParticles=t,this.stats.capacity=this.runner.stats.capacity,this.stats.emittedLastFrame=this.runner.stats.emittedLastFrame,this.stats.bloomSourceParticles=e,this.stats.drawCalls=n,this.stats.instancedDrawCalls=i,this.stats.legacyParticleDrawCalls=r,this.stats.missingMeshRefs=this.collectMissingMeshRefs(),this.stats.missingMaterialRefs=this.collectMissingMaterialRefs();const s=this.emitterViews.flatMap(a=>a.unsupportedFeatures);this.stats.unsupportedFeatures=[...mh(this.effect).blockers.map(a=>`${a.path}: ${a.message}`),...s]}collectMissingMeshRefs(){var e,n;const t=[];for(const i of this.effect.emitters)i.mode==="mesh"&&i.mesh.renderMode==="meshAsset"&&i.mesh.asset&&!this.renderGeometryOverrides.has(i.id)&&!((e=this.options.meshProvider)!=null&&e.getMeshGeometry(i.mesh.asset))&&t.push(i.mesh.asset),i.spawn.shape==="mesh"&&i.spawn.meshAsset&&!this.emissionOverrides.has(i.id)&&!((n=this.options.meshProvider)!=null&&n.getMeshGeometry(i.spawn.meshAsset))&&t.push(i.spawn.meshAsset);return t}collectMissingMaterialRefs(){var e;const t=new Set;for(const n of this.emitterViews)n.missingMaterialRef&&t.add(n.missingMaterialRef),(e=n.trailResolution)!=null&&e.missingMaterialRef&&t.add(n.trailResolution.missingMaterialRef);return[...t]}},iE=class{constructor(t){Z(this,"options",t),Z(this,"backendId","three3d"),Z(this,"capabilities",ph),Z(this,"root",new pr),Z(this,"stats",{...Uc(),effectCount:0}),Z(this,"instances",new Set),Z(this,"camera"),Z(this,"previewBloomEnabled"),Z(this,"previewBloomThreshold"),Z(this,"previewExposureStops"),Z(this,"destroyed",!1),this.camera=t.camera,this.previewBloomThreshold=Math.max(0,t.previewBloomThreshold??1),this.previewBloomEnabled=t.previewBloomEnabled===!0,this.previewExposureStops=Oi(t.previewExposureStops??0,-2,2);const e=t.parent??t.scene;e&&this.mount(e)}mount(t){this.root.parent!==t&&t.add(this.root)}unmount(){this.root.removeFromParent()}createEffect(t,e={}){if(this.destroyed)throw new Error("ThreeVfxRenderer is destroyed.");const n=new nE({effect:t,camera:this.camera,textureProvider:this.options.textureProvider,meshProvider:this.options.meshProvider,materialProvider:this.options.materialProvider,materialGraphProvider:this.options.materialGraphProvider,position:e.position,rotation:e.rotation,scale:e.scale,seed:e.seed,timeSeconds:e.timeSeconds,autoStart:e.autoStart,runtimeParameters:e.runtimeParameters,previewBloomEnabled:this.previewBloomEnabled,previewBloomThreshold:this.previewBloomThreshold,previewExposureStops:this.previewExposureStops,captureDebugTransforms:this.options.captureDebugTransforms});return this.instances.add(n),this.root.add(n.root),this.refreshStats(),n}removeEffect(t,e=!0){this.instances.delete(t)&&(this.root.remove(t.root),e&&t.destroy(),this.refreshStats())}update(t){for(const e of this.instances)e.update(t);this.refreshStats()}getSupport(t){return mh(t)}setCamera(t){this.camera=t;for(const e of this.instances)e.setCamera(t)}setPreviewBloomOptions(t){typeof t.enabled=="boolean"&&(this.previewBloomEnabled=t.enabled),this.previewBloomThreshold=Math.max(0,t.threshold??this.previewBloomThreshold),this.previewExposureStops=Oi(t.exposureStops??this.previewExposureStops,-2,2);for(const e of this.instances)e.setPreviewBloomOptions({enabled:this.previewBloomEnabled,threshold:this.previewBloomThreshold,exposureStops:this.previewExposureStops});this.refreshStats()}destroy(){if(!this.destroyed){this.destroyed=!0;for(const t of[...this.instances])this.removeEffect(t,!0);this.unmount()}}refreshStats(){const t=Uc();for(const e of this.instances)t.activeParticles+=e.stats.activeParticles,t.visibleParticles+=e.stats.visibleParticles,t.capacity+=e.stats.capacity,t.emittedLastFrame+=e.stats.emittedLastFrame,t.bloomSourceParticles+=e.stats.bloomSourceParticles,t.drawCalls+=e.stats.drawCalls,t.instancedDrawCalls+=e.stats.instancedDrawCalls,t.legacyParticleDrawCalls+=e.stats.legacyParticleDrawCalls,t.missingMeshRefs.push(...e.stats.missingMeshRefs),t.missingMaterialRefs.push(...e.stats.missingMaterialRefs),t.unsupportedFeatures.push(...e.stats.unsupportedFeatures);Object.assign(this.stats,t,{effectCount:this.instances.size})}};const rE=new N(1,0,0);function sE(t){return{a:new N(-2,.85,0),b:new N(2+.4*Math.sin(.7*t),1.5+.75*Math.sin(1.2*t),.8*Math.cos(.8*t))}}function aE(t,e){const n=new N().subVectors(e,t),i=n.length();if(i<.01)return null;const r=new jn().setFromUnitVectors(rE,n.clone().normalize());return{position:t.toArray(),rotation:new Bn().setFromQuaternion(r).toArray().slice(0,3),scale:[i,1,1],length:i}}async function oE(){const t=document.querySelector("#scene"),e=new Ev({canvas:t,antialias:!0});e.setSize(920,440,!1),e.setPixelRatio(1);const n=new Qf;n.background=new Xe("#15293a");const i=new fn(40,920/440,.1,50);i.position.set(4,3,7),i.lookAt(0,1.2,0),i.updateMatrixWorld();const r=new wp(10,20,5731719,2706011);n.add(r);const s=new Kc(.1,12,8),a=new zi({color:16566394}),o=new zi({color:9169110}),c=new Qt(s,a),l=new Qt(s,o);n.add(c,l);const u=async ae=>{const W=await fetch(ae);if(!W.ok)throw new Error(`Export fetch ${W.status}: ${ae}`);return W.json()},h=await u("./vfx/manifest.json"),d=Object.fromEntries(await Promise.all(h.effects.map(async ae=>[ae.path,await u(`./vfx/${ae.path}`)]))),f=new Map,p=new bp;for(const ae of h.assets){if(ae.type!=="mesh")throw new Error("Unexpected non-mesh asset");f.set(ae.path,p.parse(await u(`./vfx/${ae.path}`)))}const g=iS({manifest:h,effectsByPath:d,assetPaths:[...f.keys()]},{requiredBackend:"three3d",requiredEffectIds:["anchor-electricity-arc"],requireEveryAsset:!0}).effectsById.get("anchor-electricity-arc"),m=new iE({scene:n,camera:i,meshProvider:{getMeshGeometry:ae=>f.get(ae.path)??null}});let S=null,T=0,M=!0,b=!1,E=!1,C=0,v=0,A=0;const P=[],R=document.querySelector("#message");let D=new N,O=new N,k=null;function L(){S&&(m.removeEffect(S,!0),S=null)}function $(){b=!1,cancelAnimationFrame(A)}function V(){const ae=sE(T);return D=ae.a,O=E?ae.a.clone():ae.b,c.position.copy(D),l.position.copy(O),aE(D,O)}function Y(){const ae=V();return!M||!ae||T>=10?(L(),null):(S||(S=m.createEffect(g,{seed:496})),S.setTransform(ae),S.setEmitterRuntimeParameters("electric-arc-mesh-496",{colorTint:[1,1,1,.6+.3*Math.sin(T*37)]}),ae)}function te(){if(k=null,!S)return;n.updateMatrixWorld(!0);const ae=S.getParticleDebugTransforms()[0];if(!ae)return;const W=new at().multiplyMatrices(S.root.matrixWorld,new at().fromArray(ae.matrix)),se=new N(0,0,0).applyMatrix4(W),U=new N(1,0,0).applyMatrix4(W);k={start:se.distanceTo(D),end:U.distanceTo(O),renderedStart:se.toArray(),renderedEnd:U.toArray(),mode:ae.mode}}function ne(){const ae=m.stats;return{time:+T.toFixed(3),anchorA:D.toArray(),anchorB:O.toArray(),distance:D.distanceTo(O),powered:M,playing:b,coincident:E,endpointErrors:k,effectCount:ae.effectCount,activeParticles:ae.activeParticles,capacity:ae.capacity,missingMeshRefs:ae.missingMeshRefs,missingMaterialRefs:ae.missingMaterialRefs,unsupportedFeatures:ae.unsupportedFeatures,updateCalls:C}}function j(){te(),e.render(n,i),document.querySelector("#stats").textContent=JSON.stringify({state:ne(),checks:P},null,2)}function re(ae){if(!M||E||T>=10)return;T+=ae,Y()&&S&&(m.update(ae),C++),T>=10&&(M=!1,L(),$()),te()}function Fe(){$(),L(),T=0,M=!0,E=!1,C=0,Y()}function Be(ae){Fe();for(let W=0;W<Math.round(ae*60);W++)re(1/60);j(),R.textContent=`Paused at ${T.toFixed(2)} s; endpoint center residual is measured from the rendered particle matrix.`}document.querySelector("#one").onclick=()=>Be(1),document.querySelector("#three").onclick=()=>Be(3),document.querySelector("#play").onclick=()=>{Fe(),b=!0,v=performance.now();const ae=W=>{b&&(re((W-v)/1e3),v=W,j(),b&&(A=requestAnimationFrame(ae)))};A=requestAnimationFrame(ae),R.textContent="Moving B, fitting the exported arc, updating NixieFX once per host frame."},document.querySelector("#stop").onclick=()=>{$(),M=!1,L(),j(),R.textContent="Power off: no effect instance and no simulation updates."},document.querySelector("#coincident").onclick=()=>{$(),E=!0,Y(),j(),R.textContent="Coincident anchors: zero-length arc removed before normalization."},document.querySelector("#verify").onclick=()=>{var se;P.length=0;const ae=[];for(const U of[1,3]){Be(U);const le=ne();ae.push(le.anchorB),P.push({check:`endpoint attachment at ${U}s`,passed:le.effectCount===1&&le.activeParticles===1&&((se=le.endpointErrors)==null?void 0:se.mode)==="meshAsset"&&le.endpointErrors.start<1e-6&&le.endpointErrors.end<1e-6,...le})}P.push({check:"B actually moved",passed:new N(...ae[0]).distanceTo(new N(...ae[1]))>.1,positions:ae}),$(),M=!1,L();const W=C;for(let U=0;U<60;U++)re(1/60);P.push({check:"60 attempted updates after power off",passed:C===W&&m.stats.effectCount===0&&m.stats.capacity===0,simulationCallsAfterStop:C-W,...ne()}),Fe(),E=!0,Y(),P.push({check:"coincident anchor guard",passed:m.stats.effectCount===0&&m.stats.capacity===0,...ne()}),Be(3),j(),R.textContent="Checks complete. Endpoint attachment is tested; no performance benchmark is claimed."},document.addEventListener("visibilitychange",()=>{document.hidden&&($(),R.textContent="Hidden page: paused. Play restarts explicitly.",j())}),window.addEventListener("pagehide",()=>{$(),L(),m.destroy();for(const ae of f.values())ae.dispose();s.dispose(),a.dispose(),o.dispose(),r.geometry.dispose(),r.material.dispose(),e.dispose()}),Be(1)}oE().catch(t=>{document.querySelector("#message").textContent=`Demo error: ${t.message}`,console.error(t)});
