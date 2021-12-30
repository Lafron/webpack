const validation = () => {
    const calcBlock = document.querySelector("div[class='calc-block']");
    
    const calcSelect = calcBlock.querySelector("select");
    const calcInputArr = calcBlock.querySelectorAll("input[type='text']");

    calcInputArr.forEach(input => {
        input.addEventListener("input", e => {
            e.target.value = e.target.value.replace(/\D+/, "");
        });
    });

    calcSelect.addEventListener("change", () => {
        calcInputArr.forEach(input => {
            input.value = "";
        });
    });

    const texts = document.querySelectorAll("form input[type='text']");
    const emails = document.querySelectorAll("form input[type='email']");
    const tels = document.querySelectorAll("form input[type='tel']");
    const message = document.querySelector("#form2-message");

    texts.forEach(text => {
        text.addEventListener("input", e => {
            let val = e.target.value;
            const letters = /^[А-Яа-яёЁ]+$/;
            if(!val.match(letters)){
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
                e.target.value = "";
            }
        });


    emails.forEach(email => {
        email.addEventListener("input", e => {
            //e.target.value = e.target.value.replace(/^[^a-zA-Z0-9@]+$/,"");
            let val = e.target.value;
            const letters = /^[a-zA-Z0-9@\-\_\.\!\~\*\']+$/;
            if(!val.match(letters)){
                e.target.value = "";
            }
        });

        email.addEventListener("blur", () => {
            if(!validateEmail(email.value)){
                email.value = "";
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