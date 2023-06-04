var finish = false;
var display = false;

function isInViewport(elem) {
    let distance = elem.getBoundingClientRect();
    return (
        distance.top < (window.innerHeight || document.documentElement.clientHeight) && distance.bottom > 0
    );
}

function incrementCounter(counter) {
    if (!finish) {
        counter.innerText = "0";
        const updateCounter = () => {
            const target = +counter.getAttribute("data-target");
            const c = +counter.innerText;
            const increment = target*1.0/100;
            if (c < target) {
                counter.innerText = `${Math.ceil(c + increment)}`;
                setTimeout(updateCounter, 5);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    }
};

function manageAnimations() {
    let elements = document.getElementsByClassName('counter');
    for (let i=0; i<elements.length; i++) {
        if (isInViewport(elements[i])) {
            incrementCounter(elements[i]);
            display = true;
        }
    }
    if (display) {
        finish = true;
    }
}

window.addEventListener('load', manageAnimations);
window.addEventListener('scroll', manageAnimations);