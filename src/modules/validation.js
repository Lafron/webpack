const validation = () => {
    const calcBlock = document.querySelector("div[class='calc-block']");
    
    const calcSelect = calcBlock.querySelector("select");
    const calcInputArr = calcBlock.querySelectorAll("input[type='tex']");

    calcInputArr.forEach(input => {
        input.addEventListener("input", e => {
            console.log(e.target.value);
            e.target.value = e.target.value.replace(/\D+/,"");
        });
    });
};

export default validation;