const data = [
    {
        text: "JSON Node 1",
        children: [
            {
                text: "JSON Node 1.1",
                children:[
                    {
                        text: "JSON Node 1.1.1",
                    },
                    {
                        text: "JSON Node 1.1.2",
                    },
                ]
            },
            {
                text: "JSON Node 1.2",
            },
            {
                text: "JSON Node 1.3",
            },
            {
                text: "JSON Node 1.4",
            },
            {
                text: "JSON Node 1.5",
            },
        ],
    },
    {
        text: "JSON Node 2",
        children: [
            {
                text: "JSON Node 2.1",
            },
            {
                text: "JSON Node 2.2",
            },
            {
                text: "JSON Node 2.3",
            },
            {
                text: "JSON Node 2.4",
                children:[
                    {
                        text: "JSON Node 2.4.1",
                    },
                    {
                        text: "JSON Node 2.4.2",
                    },
                ]
            },
            {
                text: "JSON Node 2.5",
            },
        ],
    },
]

let container =document.querySelector(".container");

//li.classList.add('li-styled');
//li.style.marginTop='30px';

let buildTree=(data, collapsable)=>{
    const ul = document.createElement('ul');
    if(collapsable) {
        ul.classList.add('collapsed');
    }
    else{
        ul.classList.add('expanded');
    }
    for(let el of data){
        const li = document.createElement('li');
        const elemText = document.createTextNode(el.text);
        if(el.children && el.children.length) {
            li.innerHTML = '&#43;';
        }
        li.appendChild(elemText);

        if(el.children && el.children.length){
            li.classList.add('clickable');
            let children = buildTree(el.children, true);
            li.appendChild(children);


            li.addEventListener('click',function (e) {
                e.preventDefault();
                e.stopPropagation();
                //console.log(e.target.className)
                if(e.target.className==='clickable')
                    children.classList.toggle('collapsed');
            })
        }



        ul.appendChild(li);
    }

    return ul;

}

if(data.length){
    let tree=buildTree(data,false)
    container.appendChild(tree);
}

