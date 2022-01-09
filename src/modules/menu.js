"use strick";

import sendForm from "./sendForm";

const menu = () => {
    const menu = document.querySelector("menu");
    const main = document.querySelector("main");

    const handleMenu = e => {
        e.preventDefault();
        menu.classList.toggle("active-menu");
    };
    
    const scrollF = e => {
        e.preventDefault();
        handleMenu(e);

        let aimIndex = e.target.href.indexOf("#");
        let aimId = e.target.href.substring(aimIndex);
        
        let aim = document.querySelector(aimId);
        aim.scrollIntoView({behavior: "smooth"});
    };

    const moveDown = e => {
        e.preventDefault();
        let aimAdr = e.target.parentElement;
        let aimIndex = aimAdr.href.indexOf("#");
        let aimId = aimAdr.href.substring(aimIndex);
        
        let aim = document.querySelector(aimId);
        aim.scrollIntoView({behavior: "smooth"});
    };

    menu.addEventListener("click", e =>{
        if(e.target.closest(".close-btn")){
            handleMenu(e);            
        }
        else if(e.target.closest("li>a")){
            scrollF(e);
        }
    });

    main.addEventListener("click", e => {
        if(e.target.closest(".menu")){
            //console.log(e.target);
            handleMenu(e);
        }
        else if(e.target.closest("a")) {
            moveDown(e);
        }
    });
};

export default menu;


