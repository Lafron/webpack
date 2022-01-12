const sendForm = idForm =>{
    const form = document.getElementById(idForm);

    const statusBlock = document.createElement("div");
    const loadText = "Загрузка";
    const errorText = "Ошибка";
    const successText = "Данные отправлены успешно";
    

    const validate = list =>{
        let success = true;
        list.forEach(input => {
            if(input.type == 'text'){                
                const letters = /^[А-Яа-яёЁ0-9]+$/;
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
                if(input == ""){
                    console.log("введите email");
                }
                else if(!input.value.match(letters)){
                    success = false;
                    return success;
                }
            }
        });

        return success;
    };

    let url = 'https://jsonplaceholder.typicode.com/posts';
    const sendData = data =>{
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                "Content-Type": "aplication/json"
            }
        }).then(res => res.json());
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll("input");
        const formData = new FormData(form);
        const formBody = {};

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        if(validate(formElements)){
            statusBlock.textContent = loadText;
            form.append(statusBlock);

            sendData(formBody).
            then(data => {
                statusBlock.textContent = successText;
                setTimeout(() => statusBlock.textContent = "", 3000);
                formElements.forEach(input => {
                    input.value = "";
                });
            }).catch(error => {
                statusBlock.textContent = errorText;
            });
        }
        else{
            console.log("data is not valid");
        }   
    };

    try{
        if(!form){
            throw new Error("Верните форму на место!");
        }
        form.addEventListener("submit", e =>{
            e.preventDefault();

            submitForm();
    });
    }
    catch(error){
        console.log(error.message);
    }
    
};
export default sendForm;