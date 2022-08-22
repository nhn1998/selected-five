document.getElementById('calculate-btn').addEventListener('click',function(){
    const perPlayerInput = document.getElementById('per-player-input')
    const perPlayerValueString = perPlayerInput.value;
    const perPlayerValue = parseInt(perPlayerValueString);
    // orderlist count
    const orderListContainer = document.getElementById('order-list');
    const orderListContainerValue = orderListContainer.childElementCount;
    // get player expenses
    const playerExpenses= document.getElementById('player-expenses');
    const playerExpensesValueString = playerExpenses.innerText;
    const playerExpensesValue = parseInt(playerExpensesValueString);
    // calculation
    const calculatePerPlayer = orderListContainerValue * perPlayerValue;
    playerExpenses.innerText = calculatePerPlayer;

})