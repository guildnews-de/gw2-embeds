"use strict";(self.webpackChunkgw2_embeds=self.webpackChunkgw2_embeds||[]).push([[615],{615:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var i=n(450),a=n(294),o=n(936);function s(e){var t=[];return e.split(",").forEach((function(e){t.push(e)})),t}function r(e){var t=e.split("+");return[parseInt(t[0],10),parseInt(t[1],10)]}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},c.apply(this,arguments)}function u(e){var t,n,u=e.dataset,d=u.gw2Id,l=u.gw2Count,v=void 0===l?void 0:l,p=u.gw2Upgrades,f=void 0===p?void 0:p,h=u.gw2Stats,b=void 0===h?void 0:h,g=u.gw2Notooltip,w=void 0===g?void 0:g,k=u.gw2Notext,I=void 0===k?void 0:k,m=u.gw2Nolink,E=void 0===m?void 0:m,N=u.gw2Noicon,y=void 0===N?void 0:N,O=u.gw2Inline,j=void 0===O?void 0:O,C=e.hash,x=d?(0,o.Z)(d):[0],T=f?(t=f.split(";"),n=[],t.forEach((function(e,t){var i=[];switch("".concat(e.includes(",")).concat(e.includes("+"))){case"truefalse":s(e).forEach((function(e){i.push(parseInt(e,10))}));break;case"falsetrue":i.push(r(e));break;case"truetrue":s(e).forEach((function(e){e.includes("+")?i.push(r(e)):i.push(parseInt(e,10))}));break;default:i.push(parseInt(e,10))}n[t]=Number(i)})),n):void 0;return x.map((function(t,n){return a.createElement("span",{key:"".concat(C).concat(n)},a.createElement(i.ck,c({id:t,count:v,upgrades:T?T[n]:void 0,stat:b,disableTooltip:void 0!==w&&"false"!==w,disableText:void 0!==I&&"false"!==I,disableLink:void 0!==E&&"false"!==E,disableIcon:void 0!==y&&"false"!==y,inline:void 0!==j&&"false"!==j},e))," ")}))}},936:(e,t,n)=>{function i(e){var t=e.includes(",")?e.split(","):e.split(";"),n=[];return t.forEach((function(e,t){var i=parseInt(e,10);e.includes(",")||e.includes("+")?n[t]=0:Number.isInteger(i)&&(n[t]=i)})),n}n.d(t,{Z:()=>i})}}]);