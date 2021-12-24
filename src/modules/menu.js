const menu = () => {
    const menuBtn = document.querySelector(".menu");
    const menu = document.querySelector("menu");
    const closeBtn = menu.querySelector(".close-btn");
    const menuItems = menu.querySelectorAll("ul>li>a");

    const main = document.querySelector("main");
    const target = main.querySelector("a[href='#service-block']>img[src='images/scroll.svg']");

    const handleMenu = () => {
        menu.classList.toggle("active-menu");
    };

    //console.log(document.documentElement.clientHeight);
    
    const scrollF = event => {
        event.preventDefault();
        handleMenu();

        let aimIndex = event.target.href.indexOf("#");
        let aimId = event.target.href.substring(aimIndex);
        
        let aim = document.querySelector(aimId);
        aim.scrollIntoView({behavior: "smooth"});
    };

    const moveDown = event => {
        event.preventDefault();
        let aimAdr = target.parentElement;
        let aimIndex = aimAdr.href.indexOf("#");
        let aimId = aimAdr.href.substring(aimIndex);
        
        let aim = document.querySelector(aimId);
        aim.scrollIntoView({behavior: "smooth"});
    };

    menuBtn.addEventListener("click", handleMenu);
    closeBtn.addEventListener("click", handleMenu);

    menuItems.forEach(item => {
        item.addEventListener("click", scrollF);
    });

    target.addEventListener("click", moveDown);
};



export default menu;




