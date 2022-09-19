const addresses = [
        {
            "id": 1,
            "Address": "339 Macpherson Lane",
            "Pin code": "768 11",
            "customerEmail": "lsallter0@hubpages.com",
            "contact": "191-405-1109"
        },
        {
            "id": 2,
            "Address": "7268 Artisan Alley",
            "Pin code": "",
            "customerEmail": "akillbey1@europa.eu",
            "contact": "123-774-0910"
        },
        {
            "id": 3,
            "Address": "618 Vera Center",
            "Pin code": 25508,
            "customerEmail": "sgreenin2@fastcompany.com",
            "contact": "373-145-5025"
        },
        {
            "id": 4,
            "Address": "09494 Tennessee Circle",
            "Pin code": "",
            "customerEmail": "atrippick3@newyorker.com",
            "contact": "830-640-2733"
        },
        {
            "id": 5,
            "Address": "23 Marquette Pass",
            "Pin code": "98600-000",
            "customerEmail": "tsywell4@java.com",
            "contact": "908-558-1070"
        },
        {
            "id": 6,
            "Address": "66590 Eastwood Circle",
            "Pin code": "",
            "customerEmail": "llyptratt5@illinois.edu",
            "contact": "445-628-4676"
        },
        {
            "id": 7,
            "Address": "1275 Fulton Crossing",
            "Pin code": 24400,
            "customerEmail": "ebyrne6@dell.com",
            "contact": "164-756-5434"
        },
        {
            "id": 8,
            "Address": "64 Sullivan Trail",
            "Pin code": "",
            "customerEmail": "dgilbride7@ed.gov",
            "contact": "706-667-6734"
        },
        {
            "id": 9,
            "Address": "10 Judy Drive",
            "Pin code": 412545,
            "customerEmail": "sweekly8@usatoday.com",
            "contact": "105-875-7448"
        },
        {
            "id": 10,
            "Address": "44 Mcbride Hill",
            "Pin code": "4805-005",
            "customerEmail": "pkither9@webmd.com",
            "contact": "884-448-8680"
        },
        {
            "id": 11,
            "Address": "0 Lyons Hill",
            "Pin code": "",
            "customerEmail": "crebanksa@umich.edu",
            "contact": "781-142-8616"
        },
        {
            "id": 12,
            "Address": "10 Farwell Center",
            "Pin code": "",
            "customerEmail": "parnaob@people.com.cn",
            "contact": "272-292-3897"
        },
        {
            "id": 13,
            "Address": "85 Butternut Crossing",
            "Pin code": 2431,
            "customerEmail": "fblankleyc@state.tx.us",
            "contact": "531-647-2172"
        },
        {
            "id": 14,
            "Address": "7 Bunting Parkway",
            "Pin code": 12006,
            "customerEmail": "rmcgrathd@redcross.org",
            "contact": "180-184-4019"
        },
        {
            "id": 15,
            "Address": "6 Melvin Way",
            "Pin code": "",
            "customerEmail": "eclutherame@china.com.cn",
            "contact": "996-107-5565"
        }
]
const pageSize=5;
let offset=0;
let records;
let totalPages;
let currentPage=1;

const tableBody =document.querySelector('tbody');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

const addressService=()=>{
    return new Promise((resolve,reject)=>{
        resolve(addresses);
    })
}
function createRow(rowData, rowId){
    let row = tableBody.insertRow(rowId);
    let cellPosition = 0;
    for (const key of Object.keys(rowData)) {
        let cell = row.insertCell(cellPosition);
        const addressValue = rowData[key];
        let cellTextNode = document.createTextNode(addressValue);
        cell.appendChild(cellTextNode);
        cellPosition++;
    }
}


function displayPaged(){
    tableBody.innerHTML='';

    offset = (currentPage-1) * pageSize;

    let currentRecords = records.slice(offset, currentPage*pageSize);
    totalPages = records.length?records.length/pageSize:1;
    currentRecords.forEach((el, ind)=>{
        createRow(el, ind);
    })
    document.querySelector('.pageTotal i').innerHTML = currentPage.toString();
}

document.addEventListener('DOMContentLoaded',()=>{
    prevButton.addEventListener('click',(e)=>{
        e.preventDefault();
        if(currentPage>1) {
            currentPage--;
            displayPaged();
            nextButton.removeAttribute( 'disabled');
        }
        else{
            prevButton.setAttribute('disabled', 'true')
        }
    })
    nextButton.addEventListener('click', (e)=>{
        e.preventDefault();
        if(currentPage<totalPages)
        {
            currentPage++;
            displayPaged();
            nextButton.removeAttribute('disabled');
        }
        else{
            nextButton.setAttribute('disabled', 'true');
        }

    })

addressService().then((data)=>{
    records=data;
    displayPaged();
})
})





