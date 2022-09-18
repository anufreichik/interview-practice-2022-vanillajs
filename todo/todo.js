document.addEventListener('DOMContentLoaded',()=>{

})

const form = document.querySelector('form');
const list = document.querySelector('ul');
const done = document.querySelector('h3');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    addItem();
    form.reset();
})

function addItem(){

    const input = form.elements["todoName"];

    if(input.value.length)
    {
        const li = document.createElement('li');

        const text =document.createTextNode(input.value);

        const check = document.createElement('input');
        check.type = 'checkbox';
        check.addEventListener('change', ()=>{
            li.classList.toggle('done');
            countDone();
        })

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('button-delete');
        deleteBtn.textContent = 'X';
        deleteBtn.addEventListener('click', ()=>{
            list.removeChild(li);
            countDone();
        })
        li.appendChild(check);

        li.appendChild(text);

        li.appendChild(deleteBtn);

        list.appendChild(li)

    }


}

function countDone(){
    const count = list.querySelectorAll('input:checked').length;
    done.textContent=`${count} Done`;
}
