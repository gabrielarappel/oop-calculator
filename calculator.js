var Calculator = /** @class */ (function () {
    function Calculator() {
        this.currentInput = '0';
        this.operator = '',
            this.previousInput = '';
    }
    Calculator.prototype.appendNumber = function (number) {
        this.currentInput += number;
    };
    Calculator.prototype.setOperator = function (operator) {
        this.operator = operator;
        this.previousInput = this.currentInput;
        this.currentInput = '';
    };
    Calculator.prototype.calculate = function () {
        var prevInput = parseFloat(this.previousInput);
        var current = parseFloat(this.currentInput);
        var result = 0;
        if (this.operator === "+") {
            result = prevInput + current;
        }
        else if (this.operator === "-") {
            result = prevInput - current;
        }
        else if (this.operator === "*") {
            result = prevInput * current;
        }
        else if (this.operator === "/") {
            result = prevInput / current;
        }
        console.log(result);
    };
    return Calculator;
}());
var calc = new Calculator();
calc.appendNumber("9");
calc.setOperator("/");
calc.appendNumber("3");
calc.setOperator("+");
calc.appendNumber("5");
calc.calculate();
