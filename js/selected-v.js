function getListItems(ListValue){
    const orderListContainer = document.getElementById('order-list');
    
    const orderlistContainerValue = orderListContainer.childElementCount;
    if(orderlistContainerValue > 4){
        alert('You Can Select Max Five Players');
        return;
    }
    const li = document.createElement('li');
    li.innerText = ListValue;
    orderListContainer.appendChild(li);
    
    
}

document.getElementById('messi-btn').addEventListener('click',function(){

    const messiId = document.getElementById('messi');
    const messiValue = messiId.innerText;

    getListItems(messiValue);
    document.getElementById('messi-btn').disabled = true;
    
})
document.getElementById('andres-btn').addEventListener('click',function(){

    const andresId = document.getElementById('andres');
    const andresValue = andresId.innerText;

    getListItems(andresValue);
    document.getElementById('andres-btn').disabled = true;
    
})
document.getElementById('mbappe-btn').addEventListener('click',function(){
    const mbappeId = document.getElementById('mbappe');
    const mbappeValue = mbappeId.innerText;

    getListItems(mbappeValue);
    document.getElementById('mbappe-btn').disabled = true;
    
})
document.getElementById('mene-btn').addEventListener('click',function(){
    const meneId = document.getElementById('mene');
    const meneValue = meneId.innerText;

    getListItems(meneValue);
    document.getElementById('mene-btn').disabled = true;
    
})
document.getElementById('eden-btn').addEventListener('click',function(){
    const edenId = document.getElementById('eden');
    const edenValue = edenId.innerText;

    getListItems(edenValue);
    document.getElementById('eden-btn').disabled=true;
    
})
document.getElementById('pogba-btn').addEventListener('click',function(){
    const pogbaId = document.getElementById('pogba');
    const pogbaValue = pogbaId.innerText;

    getListItems(pogbaValue);
    document.getElementById('pogba-btn').disabled = true;
    
})
