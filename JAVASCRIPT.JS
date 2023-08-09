let title = document.getElementById('title')
let price = document.getElementById('price')
let taxes = document.getElementById('taxes')
let ads = document.getElementById('ads')
let discount = document.getElementById('discount')
let total = document.getElementById('total')
let count = document.getElementById('count')
let category = document.getElementById('category')
let submit = document.getElementById('submit')

let mood = ' create';

let boo




// get total
function gettotal()
{
    if(price.value !=''){
        let result = (+price.value + +taxes.value + +ads.value ) 
        - +discount.value;
        total.innerHTML = result
        total.style.background = '#024'
    }else{
        innerHTML = ''
        total.style.background = 'rgb(197, 109, 21)'
    }
}



// create prouduct
let datapro;
if(localStorage.product != null){
    datapro = JSON.parse(localStorage.product)
}else{
    datapro = [];
}




submit.onclick = function(){
    let newpro = {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
    }
    if(title.value != ''
    && price.value != ''
    && category.value != ''
    && newpro.count < 100 ){
        if(mood === 'create'){
            if(newpro.count > 1){
                for(let i = 0; i < newpro.count;i++){
                    datapro.push(newpro)
                }
                }else{
                    datapro.push(newpro)
                }
        }else{
            datapro[   boo    ] = newpro;
            mood = 'create'
            submit.innerHTML = 'Create'
            count.style.display = 'block';
        }
        cleardata()
    }

    // save localstoreage
    localStorage.setItem('product',  JSON.stringify(datapro)     )
    showdata()
}
//clear inputs

function cleardata(){
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
}




//read
function showdata()
{
    gettotal()
    let table = '';
    for( let i =0; i <  datapro.length;i++){
        table += `
        <tr>
            <td>${i+1}</td>
            <td>${datapro[i].title}</td>
            <td>${datapro[i].price}</td>
            <td>${datapro[i].taxes}</td>
            <td>${datapro[i].ads}</td>
            <td>${datapro[i].discount}</td>
            <td>${datapro[i].total}</td>
            <td>${datapro[i].category}</td>
            <td><button onclick="updateData( ${i} )" id="Update">update</button></td>
            <td><button onclick="deletepdt( ${i} )" id="delete">delete</button></td>
        </tr>
        `
    }
    document.getElementById('tbody').innerHTML = table;
    let btnDelete = document.getElementById('deleteAll');
    if(datapro.length > 0){
        btnDelete.innerHTML = `
        <button onclick="deleteAll()">delete All (${datapro.length})</button>
        `
    }else{
        btnDelete.innerHTML ='';
    }
}
showdata()



//delete
function deletepdt (i){
    datapro.splice(i,1);
    localStorage.product = JSON.stringify(datapro)
    showdata()
    console.log(i)
} 


function deleteAll(){
    localStorage.clear()
    datapro.splice(0)
    showdata()
}

//count





//update
function updateData(i){
    title.value = datapro[i].title
    price.value = datapro[i].price
    taxes.value = datapro[i].taxes
    ads.value = datapro[i].ads
    discount.value = datapro[i].discount
    gettotal()
    count.style.display = 'none'
    category.value = datapro[i].category
    submit.innerHTML = 'Update'
    mood = 'Update';
    boo = i;
    scroll ({
        top:0,
        behavior:'smooth',
    })
}



//search

// let searchmood = 'title';

// function getSearchMood(id)
// {
//     let search = document.getElementById('search');
//     if(id == 'searchTitle'){
//         searchmood = 'title';
//     }else{
//         searchmood = 'category';
//     }
//     search.focus()
//     // console.log( searchmood)
// }

// function searchData(value){
//     if(searchmood == 'title')
//     {

//         for(let i = 0; i < datapro.length;i++){
//             if(datapro[i].title.includes)
//         }














//     }else{

//     }

// }


//clean data










