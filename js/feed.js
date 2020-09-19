// dom feed page

var feed = document.querySelector('.feed');
var feedRight = document.querySelector('.feed-right');
var feedPostBtn = document.querySelector('.feed-post-btn');
var postModal = document.querySelector('.post-modal');
var postModalClose = document.querySelector('.post-modal-close');

var postModalBodyText = document.querySelector('.post-modal-body-text');
var postModalCloseBtn = document.querySelector('.post-modal-close-btn');
var postModalPlus = document.querySelector('.post-modal-plus');

var feedNavbarUsername = document.querySelector('.feed-navbar-username');
var sidebar = document.querySelector('.sidebar');
var sidebarContainer = document.querySelector('.sidebar-container');
var sidebarClose = document.querySelector('.sidebar-close');

var sidebarDarkModeOuter = document.querySelector('.sidebar-dark-mode-outer');
var sidebarDarkModeInner = document.querySelector('.sidebar-dark-mode-inner');


// functions and events feed page

feedPostBtn.addEventListener('click', ()=>{
    postModal.style.display = "flex";
})

postModalClose.addEventListener('click', ()=>{
    postModal.style.display = "none";
    postModalBodyText.value = "";      
})


postModalBodyText.addEventListener('keypress', (e)=>{
    if (e.key !=""){
        postModalCloseBtn.style.opacity = 1;
        postModalPlus.style.opacity = 1;  
    }
})

postModalBodyText.onblur = (e)=>{
    if (e.target.value ==""){
        postModalCloseBtn.style.opacity = .5;
        postModalPlus.style.opacity = .5;            
    }
}    

feedNavbarUsername.onclick = ()=>{
    sidebar.style.visibility = "visible";
    sidebarContainer.style.right = "0";

}

sidebarClose.onclick = ()=>{
    sidebar.style.visibility = "hidden";
    sidebarContainer.style.right = "-16rem";

}

sidebarDarkModeOuter.onclick = ()=>{
    var drakBackground1 =document.querySelectorAll('.drak-background-1');
    var drakBackground2 =document.querySelectorAll('.drak-background-2');
    var darkText =document.querySelectorAll('.dark-text');

    sidebarDarkModeInner.classList.toggle('sidebar-dark-mode-move');
    Array.from(drakBackground1).map(element=>{
        element.classList.toggle('drak-background-mode1');
    })
    Array.from(drakBackground2).map(element=>{
        element.classList.toggle('drak-background-mode2');
    })
    Array.from(darkText).map(element=>{
        element.classList.toggle('dark-text-mode');
    })

}




