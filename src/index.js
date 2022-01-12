import timers from "./modules/timers";
import menu from "./modules/menu";
import modal from "./modules/modal";
import validation from "./modules/validation";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm";

timers("1 january 2022");
menu();
modal();
validation();
tabs();
slider();
calc(100);


const forms = document.querySelectorAll("form") ;
    
    forms.forEach(form => {
        const submit = form.querySelector("button[type='submit']");
       
        submit.addEventListener("click", () =>{
            console.log("click: ",form.id);
            sendForm(form);
        });
    });
//sendForm("form3");
//     formId: "form1",
//     // someElem: [
//     //     {
//     //         type: "block",
//     //         id: "total"
//     //     }
//     // 
//);