for(var labeles=document.querySelectorAll('[for^="btn-"]'),slides=document.querySelectorAll(".slides"),slideHaid=function(e){for(var a=0;a<e.length;a++)e[a].classList.add("haid-slid")},clickHandler=function(e,a){e.addEventListener("click",function(){slideHaid(slides),a.classList.remove("haid-slid")})},i=0;i<labeles.length;i++)clickHandler(labeles[i],slides[i]);var feedback=document.querySelector(".button.feedback-btn"),modal=document.querySelector(".feedback"),modalClose=document.querySelector(".feedback-close"),form=modal.querySelector("form"),names=modal.querySelector("#you-name"),emails=modal.querySelector("#you-mail"),messages=modal.querySelector("#text-field");feedback.addEventListener("click",function(e){e.preventDefault(),modal.classList.add("feedback-show"),names.focus()}),modalClose.addEventListener("click",function(e){e.preventDefault(),modal.classList.remove("feedback-show"),modal.classList.remove("feedback-error")}),form.addEventListener("submit",function(e){names.value&&emails.value&&!messages.value||(e.preventDefault(),modal.classList.remove("feedback-error"),modal.offsetWidth=modal.offsetWidth,modal.classList.add("feedback-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&modal.classList.contains("feedback-show")&&(e.preventDefault(),modal.classList.remove("feedback-show"),modal.classList.remove("feedback-error"))});