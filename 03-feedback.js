import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{t as n}from"./assets/vendor-n-Accjzb.js";/* empty css                      */const t=document.querySelector(".feedback-form"),s=t.childNodes[1].childNodes[1],c=t.childNodes[3].childNodes[1],a="feedback-form-state";t.addEventListener("input",n(i,200));t.addEventListener("submit",m);const o={};l();function i(e){if(e.currentTarget===e.target)return;const r=e.target.value;o[e.target.name]=r,localStorage.setItem(a,JSON.stringify(o))}function m(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(a)}function l(){const e=JSON.parse(localStorage.getItem(a));e&&(s.value=e.email,c.value=e.message)}
//# sourceMappingURL=03-feedback.js.map
