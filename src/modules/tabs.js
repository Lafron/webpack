const tabs = () => {

    const tabsContet = document.querySelectorAll(".service-tab");
    const tabsPanel = document.querySelector(".service-header");
    const tabs = document.querySelectorAll(".service-header-tab");

    //console.log(tabs);
    tabsPanel.addEventListener("click", e => {
        if(e.target.closest(".service-header-tab")){
            const tabBtn = e.target.closest(".service-header-tab");
            tabs.forEach((tab, index) => {
                if(tab === tabBtn){
                    tab.classList.add("active");
                    tabsContet[index].classList.remove("d-none");
                }
                else{
                    tab.classList.remove("active");
                    tabsContet[index].classList.add("d-none");
                }
            });
        }
    });
};

export default tabs;
