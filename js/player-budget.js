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
document.getElementById('calculate-total').addEventListener('click',function(){
    // expenses ammount
    const playerExpenses = document.getElementById('player-expenses');
    const playerExpensesValueString = playerExpenses.innerText;
    const playerExpensesValue = parseInt(playerExpensesValueString);
    // manager cost
    const managerCost = document.getElementById('manager-input');
    const managerCostValueString= managerCost.value;
    const managerCostValue = parseInt(managerCostValueString);
    // coach input value
    const coachCost = document.getElementById('coach-input');
    const coachCostValueString = coachCost.value;
    const coachCostValue = parseInt(coachCostValueString);
    // calculations
    const total = playerExpensesValue + managerCostValue + coachCostValue;
    // Total ammount
    const totalAmmount = document.getElementById('total-ammount');
    totalAmmount.innerText = total;
    

})