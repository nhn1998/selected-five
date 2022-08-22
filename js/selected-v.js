function getListItems(ListValue){
    const orderListContainer = document.getElementById('order-list');
    const li = document.createElement('li');
    li.innerText = ListValue;
    orderListContainer.appendChild(li)
}

document.getElementById('messi-btn').addEventListener('click',function(){

    const messiId = document.getElementById('messi');
    const messiValue = messiId.innerText;

    getListItems(messiValue);
})
document.getElementById('andres-btn').addEventListener('click',function(){

    const andresId = document.getElementById('andres');
    const andresValue = andresId.innerText;

    getListItems(andresValue);
})