var spanElm = document.getElementById('show');
var inputElm = document.getElementById('userInput');

function valueToSet(btnValue) {
  var inputValue = inputElm.value;

  if (btnValue === '=') {
    try {
      let result = eval(inputValue);
      inputElm.value = result;
    } catch (e) {
      inputElm.value = 'Error';
    }
    return;
  }

  if (btnValue === 'del') {
    inputElm.value = inputValue.slice(0, -1);
    return;
  }

  if (btnValue === 'c') {
    inputElm.value = '';
    return;
  }

  if (btnValue === 'x2') {
    let num = parseFloat(inputValue);
    inputElm.value = !isNaN(num) ? Math.pow(num, 2) : 'Error';
    return;
  }

  if (btnValue === 'sqrt') {
    let num = parseFloat(inputValue);
    inputElm.value = !isNaN(num) ? Math.sqrt(num) : 'Error';
    return;
  }

  inputElm.value += btnValue;
}

function toggleTheme() {
  document.body.classList.toggle('light-mode');
}