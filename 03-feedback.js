import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{t as n}from"./assets/vendor-CvksgVrL.js";/* empty css                      */const t=document.querySelector(".feedback-form"),s=t.childNodes[1].childNodes[1],c=t.childNodes[3].childNodes[1],o="feedback-form-state";t.addEventListener("input",n(i,200));t.addEventListener("submit",l);const a={};m();function i(e){if(e.currentTarget===e.target)return;const r=e.target.value;a[e.target.name]=r,localStorage.setItem(o,JSON.stringify(a))}function l(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(o)}function m(){const e=JSON.parse(localStorage.getItem(o));console.log(e),e&&(s.value=e.email,c.value=e.message)}
//# sourceMappingURL=03-feedback.js.map
