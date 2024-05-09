const counterElement = document.getElementById('counter');
    const increaseButton = document.getElementById('increaseBtn');
    const decreaseButton = document.getElementById('decreaseBtn');
    const resetButton = document.getElementById('resetBtn');
    let count = 0;
    function updateCounter() {
      counterElement.textContent = count;
    }
    function increaseCount() {
        if (count === 10) {
            alert("value shuold be smaller than 10")
            count++;
            updateCounter();
        }else{
            count++;
            updateCounter();
        }
      }
    function decreaseCount() {
        if (count > 0 ) {
            count--;
      updateCounter();
        }
        else if (count === 0) {
           alert("not be negative") 
        }else{
            count--;
      updateCounter();
        }
    }
    function resetCount() {
      count = 0;
      updateCounter();
    }
    increaseButton.addEventListener('click', increaseCount);
    decreaseButton.addEventListener('click', decreaseCount);
    resetButton.addEventListener('click', resetCount);