const validation = () => {
    const calcBlock = document.querySelector("div[class='calc-block']");
    
    const calcSelect = calcBlock.querySelector("select");
    const calcInputArr = calcBlock.querySelectorAll("input[type='text']");

    calcInputArr.forEach(input => {
        input.addEventListener("input", e => {
            console.log(e.target.value);
            e.target.value = e.target.value.replace(/\D+/,"");
        });
    });

    calcSelect.addEventListener("change", () => {
        calcInputArr.forEach(input => {
            input.value = "";
        });
    });
};

export default validation;