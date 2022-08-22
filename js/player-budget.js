document.getElementById('calculate-btn').addEventListener('click',function(){
    const perPlayerInput = document.getElementById('per-player-input')
    const perPlayerValueString = perPlayerInput.value;
    const perPlayerValue = parseInt(perPlayerValueString);
    console.log(perPlayerValue);
})