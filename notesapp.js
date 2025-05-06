let createPageBtn=document.querySelector(".create-page-btn");
let pageContainer=document.querySelector(".pages-container");


createPageBtn.addEventListener("click",function(e){
    e.preventDefault();
    let page=document.createElement("p");
    page.className="page";
    page.setAttribute("contenteditable","true");
    let dltImg=document.createElement("img");
    dltImg.src="delete.png";
    dltImg.className="delete-icon";
    page.appendChild(dltImg);
    pageContainer.appendChild(page);
});

pageContainer.addEventListener("click",function(e){
    e.preventDefault();
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
    }
});

