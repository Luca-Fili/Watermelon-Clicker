console.log("Console Test")

var score = 0;
var isClickAllowed = true;
var multiplier = 1;
var cpc = 1;

function money() {
    if (isClickAllowed) {
    score += cpc;

  document.getElementById('score').innerText = score;

  isClickAllowed = false;
        setTimeout(function () {
          isClickAllowed = true;
        }, 250);
    }
}


function buy(item, cost) {
    if (isClickAllowed && score >= cost) {
    score -= cost;
    cpc += 1;

    var itemCount = document.getElementById(item + 'Count');
    itemCount.innerText = parseInt(itemCount.innerText) + 1;
    

    document.getElementById('score').innerText = score;

    updateMultiplier(item);
    }
}


function updateMultiplier(item) {
    var multiplierValues = {
      'worker': 2, 
      'farm': 3,
      'factory': 5,
      'warehouse': 10,
      'plant': 20
    };

    multiplier *= multiplierValues[item];
    document.getElementById('multiplier').innerText = multiplier + 'x';
    score = multiplier(score, itemCount);
}
