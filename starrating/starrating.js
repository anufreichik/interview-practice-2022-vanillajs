const stars = document.querySelectorAll('.star');

function selectStars(selectedStarID){
    // let starsToSelect = document.querySelectorAll(`[data-id="${id}"]`);
    stars.forEach(s=>{
        let starId = s.getAttribute('data-id');
        if(Number(starId)<=Number(selectedStarID))
            s.classList.add('selected-star');
        else
            s.classList.remove('selected-star');
    })
}
stars.forEach(el=>{
    //click
    el.addEventListener('click', (e)=>{
        let selectedStarID =  e.target.getAttribute('data-id');
        selectStars(selectedStarID);
    })

    //hover
    el.addEventListener('mouseover',(e)=>{
        let selectedStarID =  e.target.getAttribute('data-id');
        selectStars(selectedStarID);
    })

    el.addEventListener('mouseout',(e)=>{

    })

})
