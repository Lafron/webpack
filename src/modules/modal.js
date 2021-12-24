const modal = () => {
    
    const modal = document.querySelector(".popup");
    const buttons = document.querySelectorAll(".popup-btn");
    const btnClose = modal.querySelector(".popup-close");
    const contentMenu = modal.querySelector(".popup-content");

    let index = 0;

    //let winWidth2 = document.documentElement.clientWidth;
    
    const showPopup = () => { 
        let animationFrameId = requestAnimationFrame(showPopup);
        if (index < 200){
            index++;
            contentMenu.style.opacity = index / 200;
        }
        else{
            index = 200;  
            cancelAnimationFrame(animationFrameId);       
        }     
};

    const closePopup = () => { 
        let animationFrameId = requestAnimationFrame(closePopup);
        if (index > 0){
            index--;
            contentMenu.style.opacity = index / 200;
        }
        else{
            index = 0;  
            cancelAnimationFrame(animationFrameId);  
            modal.style.display = "none";
        }     
   
};
    buttons.forEach( btn => {
        btn.addEventListener("click", () => {
            modal.style.display = "block";
            console.log(document.documentElement.clientWidth);
            console.log(document.body.offsetWidth);
            if(document.body.offsetWidth > 768){
                contentMenu.style.opacity = 0;
                showPopup();
            }
            else{
                contentMenu.style.opacity = 100;
            }
        });
    });

    btnClose.addEventListener("click", () => {
        if(document.body.offsetWidth > 768){
            closePopup();
        }
        else{
            modal.style.display = "none";
        }
    });
};

export default modal;