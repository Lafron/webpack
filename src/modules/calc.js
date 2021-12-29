const calc = price => {
    const calcBlock = document.querySelector(".calc-block");
    const calcType = document.querySelector(".calc-type");
    const calcSquare = document.querySelector(".calc-square");
    const calcCount = document.querySelector(".calc-count");
    const calcDay = document.querySelector(".calc-day");
    const total = document.querySelector("#total");


    const countCalc = () => {
        let index = calcType.selectedIndex;
        const calcTypeValue = +calcType.options[index].value;
        const calcSquareValue = calcSquare.value;

        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;

        if(calcCount.value > 1){
            calcCountValue += +calcCount.value / 10;
        }

        if(calcDay.value && calcDay.value < 5){
            calcDayValue = 2;
        }
        else if(calcDay.value && calcDay.value < 10){
            calcDayValue = 1.5;
        }

        if(calcType.value && calcSquare.value){
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
        }
        else{
            totalValue = 0;
        }

        total.textContent = totalValue; 
        
    };

    calcBlock.addEventListener("input", e => {
        const tar = e.target;
        if(tar === calcType || tar === calcSquare ||
             tar === calcCount || tar === calcDay){
                countCalc();
        }
    });

};

export default calc;