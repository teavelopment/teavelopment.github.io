import{S as N,i as O,s as Q,O as R,e as k,k as D,t as B,c as q,a as V,m as S,h as F,d as p,b,g as $,K as I,L as z,j as M,P as J,Q as W,R as X,q as y,o as w,w as Y,x as Z,y as ee,B as te,p as U,V as G,U as le,N as se,M as ae,n as K}from"../../chunks/index-b0755815.js";import{t as oe}from"../../chunks/translations-93f26012.js";import{S as ne}from"../../chunks/sourceslinks-7f9bf5f3.js";import"../../chunks/preload-helper-222d7d75.js";import"../../chunks/paths-396f020f.js";function ie(c){let e,l,r,s,a,v,g,u,f,E;const o=c[3].default,i=R(o,c,c[2],null);return{c(){e=k("div"),l=k("input"),r=D(),s=k("div"),a=B(c[0]),v=D(),g=k("div"),i&&i.c(),this.h()},l(t){e=q(t,"DIV",{class:!0});var _=V(e);l=q(_,"INPUT",{type:!0,class:!0}),r=S(_),s=q(_,"DIV",{class:!0});var h=V(s);a=F(h,c[0]),h.forEach(p),v=S(_),g=q(_,"DIV",{class:!0});var x=V(g);i&&i.l(x),x.forEach(p),_.forEach(p),this.h()},h(){b(l,"type","checkbox"),b(l,"class","peer"),b(s,"class","collapse-title font-bold bg-base-content text-black"),b(g,"class","collapse-content bg-base-content text-black "),b(e,"class","collapse collapse-arrow border-4 border-primary rounded-box")},m(t,_){$(t,e,_),I(e,l),l.checked=c[1],I(e,r),I(e,s),I(s,a),I(e,v),I(e,g),i&&i.m(g,null),u=!0,f||(E=z(l,"change",c[4]),f=!0)},p(t,[_]){_&2&&(l.checked=t[1]),(!u||_&1)&&M(a,t[0]),i&&i.p&&(!u||_&4)&&J(i,o,t,t[2],u?X(o,t[2],_,null):W(t[2]),null)},i(t){u||(y(i,t),u=!0)},o(t){w(i,t),u=!1},d(t){t&&p(e),i&&i.d(t),f=!1,E()}}}function re(c,e,l){let{$$slots:r={},$$scope:s}=e,a=!1,{title:v=""}=e;function g(){a=this.checked,l(1,a)}return c.$$set=u=>{"title"in u&&l(0,v=u.title),"$$scope"in u&&l(2,s=u.$$scope)},[v,a,s,r,g]}class ce extends N{constructor(e){super(),O(this,e,re,ie,Q,{title:0})}}function A(c,e,l){const r=c.slice();return r[2]=e[l],r}function C(c,e,l){const r=c.slice();return r[5]=e[l],r}function fe(c){let e,l=c[5].body+"",r;return{c(){e=k("p"),r=B(l)},l(s){e=q(s,"P",{});var a=V(e);r=F(a,l),a.forEach(p)},m(s,a){$(s,e,a),I(e,r)},p(s,a){a&1&&l!==(l=s[5].body+"")&&M(r,l)},d(s){s&&p(e)}}}function H(c){let e,l,r;return l=new ce({props:{title:c[5].title,$$slots:{default:[fe]},$$scope:{ctx:c}}}),{c(){e=k("div"),Y(l.$$.fragment)},l(s){e=q(s,"DIV",{});var a=V(e);Z(l.$$.fragment,a),a.forEach(p)},m(s,a){$(s,e,a),ee(l,e,null),r=!0},p(s,a){const v={};a&1&&(v.title=s[5].title),a&257&&(v.$$scope={dirty:a,ctx:s}),l.$set(v)},i(s){r||(y(l.$$.fragment,s),r=!0)},o(s){w(l.$$.fragment,s),r=!1},d(s){s&&p(e),te(l)}}}function L(c){let e,l=c[2].title+"",r,s,a,v,g,u=c[2].faqs,f=[];for(let o=0;o<u.length;o+=1)f[o]=H(C(c,u,o));const E=o=>w(f[o],1,1,()=>{f[o]=null});return{c(){e=k("h3"),r=B(l),s=D(),a=k("div");for(let o=0;o<f.length;o+=1)f[o].c();v=D(),this.h()},l(o){e=q(o,"H3",{class:!0});var i=V(e);r=F(i,l),i.forEach(p),s=S(o),a=q(o,"DIV",{id:!0,class:!0});var t=V(a);for(let _=0;_<f.length;_+=1)f[_].l(t);v=S(t),t.forEach(p),this.h()},h(){b(e,"class","text-3xl py-4"),b(a,"id","grid"),b(a,"class","svelte-11fllx")},m(o,i){$(o,e,i),I(e,r),$(o,s,i),$(o,a,i);for(let t=0;t<f.length;t+=1)f[t].m(a,null);I(a,v),g=!0},p(o,i){if((!g||i&1)&&l!==(l=o[2].title+"")&&M(r,l),i&1){u=o[2].faqs;let t;for(t=0;t<u.length;t+=1){const _=C(o,u,t);f[t]?(f[t].p(_,i),y(f[t],1)):(f[t]=H(_),f[t].c(),y(f[t],1),f[t].m(a,v))}for(K(),t=u.length;t<f.length;t+=1)E(t);U()}},i(o){if(!g){for(let i=0;i<u.length;i+=1)y(f[i]);g=!0}},o(o){f=f.filter(Boolean);for(let i=0;i<f.length;i+=1)w(f[i]);g=!1},d(o){o&&p(e),o&&p(s),o&&p(a),G(f,o)}}}function ue(c){let e,l,r,s,a=c[1]("main.faqs")+"",v,g,u,f,E,o,i,t;document.title=e=c[1]("main.faqs")+" | Teavelopment";let _=c[0],h=[];for(let n=0;n<_.length;n+=1)h[n]=L(A(c,_,n));const x=n=>w(h[n],1,1,()=>{h[n]=null});return{c(){l=k("meta"),r=D(),s=k("h2"),v=B(a),g=D(),u=k("div");for(let n=0;n<h.length;n+=1)h[n].c();f=D(),E=k("div"),o=k("img"),this.h()},l(n){const d=le('[data-svelte="svelte-13cdq7p"]',document.head);l=q(d,"META",{name:!0,content:!0}),d.forEach(p),r=S(n),s=q(n,"H2",{class:!0});var m=V(s);v=F(m,a),m.forEach(p),g=S(n),u=q(n,"DIV",{class:!0});var T=V(u);for(let P=0;P<h.length;P+=1)h[P].l(T);T.forEach(p),f=S(n),E=q(n,"DIV",{class:!0});var j=V(E);o=q(j,"IMG",{class:!0,src:!0,alt:!0}),j.forEach(p),this.h()},h(){b(l,"name","description"),b(l,"content","Support"),b(s,"class","text-4xl"),b(u,"class","flex flex-col gap-y-2"),b(o,"class","h-72"),se(o.src,i=ne.illustrationFaq)||b(o,"src",i),b(o,"alt","FAQ Illustration"),b(E,"class","flex flex-row justify-end pt-16")},m(n,d){I(document.head,l),$(n,r,d),$(n,s,d),I(s,v),$(n,g,d),$(n,u,d);for(let m=0;m<h.length;m+=1)h[m].m(u,null);$(n,f,d),$(n,E,d),I(E,o),t=!0},p(n,[d]){if((!t||d&2)&&e!==(e=n[1]("main.faqs")+" | Teavelopment")&&(document.title=e),(!t||d&2)&&a!==(a=n[1]("main.faqs")+"")&&M(v,a),d&1){_=n[0];let m;for(m=0;m<_.length;m+=1){const T=A(n,_,m);h[m]?(h[m].p(T,d),y(h[m],1)):(h[m]=L(T),h[m].c(),y(h[m],1),h[m].m(u,null))}for(K(),m=_.length;m<h.length;m+=1)x(m);U()}},i(n){if(!t){for(let d=0;d<_.length;d+=1)y(h[d]);t=!0}},o(n){h=h.filter(Boolean);for(let d=0;d<h.length;d+=1)w(h[d]);t=!1},d(n){p(l),n&&p(r),n&&p(s),n&&p(g),n&&p(u),G(h,n),n&&p(f),n&&p(E)}}}function _e(c,e,l){let r;ae(c,oe,a=>l(1,r=a));let{apps:s}=e;return c.$$set=a=>{"apps"in a&&l(0,s=a.apps)},[s,r]}class ge extends N{constructor(e){super(),O(this,e,_e,ue,Q,{apps:0})}}export{ge as default};
