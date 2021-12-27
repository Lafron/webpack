const validation = () => {
    const calcBlock = document.querySelector("div[class='calc-block']");
    
    const calcSelect = calcBlock.querySelector("select");
    const calcInputArr = calcBlock.querySelectorAll("input[type='text']");

    calcInputArr.forEach(input => {
        input.addEventListener("input", e => {
            e.target.value = e.target.value.replace(/\D+/,"");
        });
    });

    calcSelect.addEventListener("change", () => {
        calcInputArr.forEach(input => {
            input.value = "";
        });
    });


    const texts = document.querySelectorAll("input[type='text']");
    const emails = document.querySelectorAll("input[type='email']");
    const tels = document.querySelectorAll("input[type='tel']");
    const submits = document.querySelectorAll("button[type='submit']");
    const message = document.querySelector("#form2-message");

    texts.forEach(text => {
        text.addEventListener("input", e => {
            //console.log(e.target);
            let val = e.target.value;
            const letters = /^[А-Яа-яёЁ]+$/;
            if(!val.match(letters)){
                alert('Неверный формат ввода');
                e.target.value = "";
            }
        });
    });

    tels.forEach(input => {
        input.addEventListener("input", e => {
            e.target.value = e.target.value.replace(/\D+/,"");
        });
    });

    message.addEventListener("input", e => {
            let val = e.target.value;
            const letters = /^[А-Яа-яёЁ]+$/;
            if(!val.match(letters)){
                alert('Неверный формат ввода');
                e.target.value = "";
            }
        });


    submits.forEach(submit => {
        submit.addEventListener("click", e => {
            e.preventDefault();
            const div = e.target.parentNode.parentNode.parentNode;
            const email = div.querySelector("input[type='email']");
            
            if(!validateEmail(email.value)){
                alert("address is not correct");
                email.value = "";
            }
            else{
                alert("submit");
            }
        });
    });
    
    const validateEmail = email => {
    return String(email)
        .toLowerCase()
        .match(
        /[\-\_\.\!\~\*\'\w]+@([\w]+\.)+[\w]+/gi
        );
    };//  @  -  _  . ! ~ * '

};

export default validation;