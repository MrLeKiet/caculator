function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var monkey = document.getElementById('monkey').value;
    var result;

    switch (monkey) {
        case 'add':
            result = num1 + num2;
            break;
        case 'minus':
            result = num1 - num2;
            break;
        case 'plus':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 != 0) {
                result = num1 / num2;
            } else {
                result = 'Error. You stupid monkey';
            }
            break;
    }

    document.getElementById('result').innerHTML = result;
}