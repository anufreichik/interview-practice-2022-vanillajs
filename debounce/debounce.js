let count = 0;
const searchInput = document.querySelector('input[type="text"]');
const results = document.querySelector('.results');

const arr = ['Valentina', 'Valeriy', 'Victor', 'Vanessa', 'Veronika', 'Alex', 'Alexander', 'Alexey', 'Alena']


const debounce = (fn, delay) => {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}

let incrementCount = (incrVal) => {
    console.log(count += incrVal)
}

//search
let searchName = (val) => {
    //results.classList.toggle('active');
    let resultChildren = results.children;
    for (let child of resultChildren) {
        results.removeChild(child)
    }

    let filtered=[]
    arr.forEach(el => {
        if (el.toLowerCase().startsWith(val.toLowerCase())) {
            filtered.push(el)
        }
    })
    if(val && filtered.length){
        filtered.forEach(el=>{
            let item = document.createElement('div');
            item.innerHTML = el;
            results.appendChild(item);
        })
    }

}


searchName=debounce(searchName, 1000);
incrementCount = debounce(incrementCount, 1000);
document.addEventListener('scroll', () => incrementCount(2));
searchInput.addEventListener('input', (e) => searchName(e.target.value))


