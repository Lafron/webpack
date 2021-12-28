const slider = () => {
    const sliderBlock = document.querySelector(".portfolio-content");
    const slides = document.querySelectorAll(".portfolio-item");
    const dotsBlock = document.querySelector("ul[class='portfolio-dots']");
    const dots = [];

    const addDots = () => {
        slides.forEach((li, index) => {
            li = document.createElement("li");
            li.classList.add("dot");

            if(index == 0){
                li.classList.add("dot-active");
            }
            dots.push(li);
            dotsBlock.appendChild(li);
        });
    };

    let currentSlide = 0;
    let interval;
    let timeInterval = 2000;

    const prevSlide = (elements, index, strClass) => {
        elements[index].classList.remove(strClass);
    };

    const nextSlide = (elements, index, strClass) => {
        elements[index].classList.add(strClass);
    };

    const autoSlide = () => {
        prevSlide(slides, currentSlide, "portfolio-item-active");
        prevSlide(dots, currentSlide, "dot-active");
        currentSlide++;

        if(currentSlide >= slides.length){
            currentSlide = 0;
        }
        nextSlide(slides, currentSlide, "portfolio-item-active");
        nextSlide(dots, currentSlide, "dot-active");
    };

    const startSlide = (timer = 1500) => {
        if(dots.length == 0){
            addDots();
        }
        interval = setInterval(autoSlide, timer);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    sliderBlock.addEventListener("click", e => {
        e.preventDefault();

        if(!e.target.matches('.dot, .portfolio-btn')){
            return;
        }
        
        prevSlide(slides, currentSlide, "portfolio-item-active");
        prevSlide(dots, currentSlide, "dot-active");
        
        if(e.target.matches("#arrow-right")){
            currentSlide++;
        }
        else if(e.target.matches("#arrow-left")){
            currentSlide--;
        }
        else if(e.target.classList.contains("dot")){
            dots.forEach((dot, index) => {
                if(e.target === dot){
                    currentSlide = index;
                }
            });
        }

        if(currentSlide >= slides.length){
            currentSlide = 0;
        }
        if(currentSlide < 0){
            currentSlide = slides.length - 1 ;
        }

        nextSlide(slides, currentSlide, "portfolio-item-active");
        nextSlide(dots, currentSlide, "dot-active");
    });

    sliderBlock.addEventListener("mouseenter", e => {
        if(e.target.matches('.dot, .portfolio-btn')){
            stopSlide();
        }
    }, true);

    sliderBlock.addEventListener("mouseleave", e => {
        if(e.target.matches('.dot, .portfolio-btn')){
            startSlide(timeInterval);
        }
    }, true);

    startSlide(timeInterval);
};

export default slider;


