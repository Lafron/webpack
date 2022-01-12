"use strick";
import {animate} from "./helpers";
import sendForm from "./sendForm";

const modal = () => {
    
    const modal = document.querySelector(".popup");
    const buttons = document.querySelectorAll(".popup-btn");
    const contentMenu = modal.querySelector(".popup-content");
    
    
    const showPopup = () => { 
        animate({
        duration: 500,
        timing(timeFraction) {
            return circ(timeFraction);
        },
        draw(progress) {
            contentMenu.style.opacity = progress;
        }
    });
};

    const closePopup = () => { 
        animate({
        duration: 500,
        timing(timeFraction) {
            return bounce(timeFraction);
        },
        draw(progress) {
            contentMenu.style.opacity = 1 - progress;
            if(progress == 1){
                modal.style.display = "none";
            }
        } 
    });   
};

    function bounce(timeFraction) {
        for (let a = 0, b = 1; 1; a += b, b /= 2) {
            if (timeFraction >= (7 - 4 * a) / 11) {
                return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
            }
        }
    }

    function circ(timeFraction) {
        return 1 - Math.sin(Math.acos(timeFraction));
    }


    buttons.forEach( btn => {
        btn.addEventListener("click", () => {
            modal.style.display = "block";
            if(document.body.offsetWidth > 768){
                contentMenu.style.opacity = 0;
                showPopup();
            }
            else{
                contentMenu.style.opacity = 100;
            }
        });
    });

    modal.addEventListener("click", e => {
        if(!e.target.closest(".popup-content")||e.target.closest(".popup-close")){
            if(document.body.offsetWidth > 768){
                closePopup();
            }
            else{
                modal.style.display = "none";
            }
        }
    });

};

export default modal;