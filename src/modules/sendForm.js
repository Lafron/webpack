const sendForm = form=> {
    //const form = document.getElementById(formId);
    console.log("sendForm.js/sendForm: ", form);
    const statusBlock = document.createElement("div");

    const loadText = "Загрузка";
    const errorText = "Ошибка";
    const successText = "Данные отправлены успешно";
    
    const validate = list =>{
        let success = true;

        list.forEach(input => {
            if(input.type == 'text'){                
                const letters = /^[А-Яа-яёЁ]+$/;
                if(!input.value.match(letters)){
                    success = false;
                    return success;
                }    
            }
            else if(input.type == 'tel'){
                const letters = /\d+/;
                if(!input.value.match(letters)){
                    success = false;
                    return success;
                }

            }else if(input.type == 'email'){
                const letters = /^[a-zA-Z0-9@\-\_\.\!\~\*\']+$/;
                if(!input.value.match(letters)){
                    success = false;
                    return success;
                }
            }
        });

        return success;
    };

    const sendForm = data => {
        console.log(data);
        return fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "aplication/json"
            }
        }).then(res => res.json());
    };

    const submitForm = () =>{
        const formElems = form.querySelectorAll("input");
        const formData = new FormData(form);
        const formBody = {};

        statusBlock.textContent = loadText;
        form.append(statusBlock);

        formData.forEach((val, key) => {
            formBody[key] = val;
        });
        
        // someElem.forEach(elem => {
        //     const element = document.getElementById(elem.id);

        //     console.log(elem);
        //     if(elem.type === "block"){
        //         formBody[elem.id] = element.textContent;
        //     }
        //     else if(elem.type === "input"){
        //         formBody[elem.id] = element.value;
        //     }
        // });

        if(validate(formElems)){
            sendForm(formBody).then(data => {
                statusBlock.textContent = successText;
                formElems.forEach(input => {
                    input.value = "";
                });
            }).catch(error => {
                statusBlock.textContent = errorText;
            });
        }
        else{
            alert("данные невалидны!");
        }
    };
   
    try{
         if(!form){
            throw new Error("Верните форму на место!");
        }

        form.addEventListener("submit", e => {
            e.preventDefault();
            submitForm();
        });
    }
    catch(error){
        console.log(error.message);
    }
    
};

export default sendForm;




