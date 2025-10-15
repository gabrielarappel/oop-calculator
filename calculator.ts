class Calculator {
    public currentInput: string;
    public operator: string;
    public previousInput: string;

    constructor(){
        this.currentInput = '0';
        this.operator = '',
        this.previousInput = '';
    }
        
    appendNumber(number: string){
        this.currentInput += number;
    }

    setOperator(operator: string) {
        this.operator =  operator;
        this.previousInput = this.currentInput;
        this.currentInput = ''
    }

    calculate(){
        const prevInput = parseFloat(this.previousInput)
        const current = parseFloat(this.currentInput)
        var result = 0;

        if (this.operator === "+") {
            result = prevInput + current
        } else if (this.operator === "-") {
            result = prevInput - current
        } else if (this.operator === "*") {
            result = prevInput * current
        } else if (this.operator === "/") {
            result = prevInput / current
        }

        console.log(result)
    }


}

const calc = new Calculator();
calc.appendNumber("9");
calc.setOperator("/");
calc.appendNumber("3");
calc.setOperator("+");
calc.appendNumber("5")
calc.calculate();