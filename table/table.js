const tableSortable = document.querySelector('.table-sortable')
document.querySelectorAll('.table-sortable th').forEach((header, ind)=>{
    header.addEventListener('click',()=>{
        const isCurrentAsc = header.classList.contains('th-sort-asc');
        sortTableByColumn(tableSortable, ind, !isCurrentAsc)

    })
})


function sortTableByColumn(table, ind,asc=true ){
    const tBody = document.querySelector("tbody");
    const rows = Array.from(tBody.querySelectorAll('tr'));
    const sorted=rows.sort((a, b)=>{
        let aText = a.querySelectorAll('td')[ind].textContent.trim();
        let bText = b.querySelectorAll('td')[ind].textContent.trim();

        if(asc){
            return aText>bText?1:-1;
        }
        else{
            return aText>bText?-1:1;
        }
    });

    //remove all rows
    rows.forEach(row=> {
        tBody.removeChild(row);

    });

    tBody.append(...sorted);


    // Remember how the column is currently sorted
    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelectorAll("th")[ind].classList.toggle("th-sort-asc", asc);
    table.querySelectorAll("th")[ind].classList.toggle("th-sort-desc", !asc);

}
