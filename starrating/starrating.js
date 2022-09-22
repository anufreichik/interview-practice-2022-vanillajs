const stars = document.querySelectorAll('.star');

function handleClickStar(selectedStarID){
    // let starsToSelect = document.querySelectorAll(`[data-id="${id}"]`);
    stars.forEach((s,ind)=>{
        let starId = ind+1;
        if(Number(starId)<=Number(selectedStarID))
            s.classList.add('selected-star');
        else
            s.classList.remove('selected-star');
    })
}

function handleHoverStar(selectedStarID){
    stars.forEach((s,ind)=>{
        //let starId = s.getAttribute('data-id');
        let starId = ind+1;
        if(Number(starId)<=Number(selectedStarID))
            s.classList.add('hovered-star');
        else
            s.classList.remove('hovered-star');
    })
}


stars.forEach((el, i)=>{
    let selectedStarID = i+1;

    //click
    el.addEventListener('click', (e)=>{
        //let selectedStarID =  e.target.getAttribute('data-id');
        handleClickStar(selectedStarID);
    })

    //hover
    el.addEventListener('mouseover',(e)=>{
        handleHoverStar(selectedStarID);
    })

    el.addEventListener('mouseout',(e)=>{
        stars.forEach(s=>{
            s.classList.remove('hovered-star');
        })
    })

})
