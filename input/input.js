const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');
function getValFromInput(inputVal){
    console.log(inputVal>10);
    if(inputVal>10) return 10;
    else if(inputVal<1) return -1;
    else return inputVal;
}
button.addEventListener('click', (e)=>{
    const val = input.value;
    if(val){
        const valForLi = getValFromInput(+val);
        const li = document.createElement('li');
        //const text =document.createTextNode(valForLi);
        li.innerHTML=valForLi;
        //li.appendChild(text);
        list.appendChild(li);
        li.addEventListener('click', (e)=>{
            console.log(e)
            li.innerHTML = (+li.innerHTML *2).toString();
        })
        input.value='';
    }
})
