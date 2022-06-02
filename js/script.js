    const body = document.querySelector('body')
    const topo = document.getElementById('c-topo')
    const input = document.getElementById('c-input')
    const toggle = document.getElementById('c-toggle');
    const button =document.getElementById('c-button')

    toggle.onclick = function() {
        toggle.classList.toggle('active')
        body.classList.toggle('active')
        topo.classList.toggle('active')
        input.classList.toggle('active')
        button.classList.toggle('active')
    }

    const previousInputText = document.querySelector(".c-input__previous");
    const currentInputText = document.querySelector(".c-input__current");
    const calc_buttons = document.querySelectorAll("#c-button button");
    
    class Calculator {
      constructor(previousInputText, currentInputText) {
        this.previousInputText = previousInputText;
        this.currentInputText = currentInputText;
        this.currentInput = "";
      }
    
      
      addDigit(digit) {
        
        if (digit === "." && this.currentInputText.innerText.includes(".")) {
          return;
        }
    
        this.currentInput = digit;
        this.updateScreen();
      }
    
      
      processOperation(operation) {
        
        if (this.currentInputText.innerText === "" && operation !== "RESET") {
          
          if (this.previousInputText.innerText !== "") {
            this.changeOperation(operation);
          }
          return;
        }
    
        
        let operationValue;
        let previous = +this.previousInputText.innerText.split(" ")[0];
        let current = +this.currentInputText.innerText;
    
        switch (operation) {
          case "+":
            operationValue = previous + current;
            this.updateScreen(operationValue, operation, current, previous);
            break;
          case "-":
            operationValue = previous - current;
            this.updateScreen(operationValue, operation, current, previous);
            break;
          case "*":
            operationValue = previous * current;
            this.updateScreen(operationValue, operation, current, previous);
            break;
          case "/":
            operationValue = previous / current;
            this.updateScreen(operationValue, operation, current, previous);
            break;
          case "DEL":
            this.processDel();
            break;
          case "RESET":
            this.processClearOperator();
            break;
          case "=":
            this.processEqual();
            break;
          default:
            return;
        }
      }
    
      
      updateScreen(
        operationValue = null,
        operation = null,
        current = null,
        previous = null
      ) {
        if (operationValue === null) {
          // Append number to current value
          this.currentInputText.innerText += this.currentInput;
        } else {
          // Check if value is zero, if is just add current value
          if (previous === 0) {
            operationValue = current;
          }
         
          this.previousInputText.innerText = `${operationValue} ${operation}`;
          this.currentInputText.innerText = "";
        }
      }
    
      
      changeOperation(operation) {
        const mathOperations = ["*", "-", "+", "/"];
    
        if (!mathOperations.includes(operation)) {
          return;
        }
    
        this.previousInputText.innerText =
          this.previousInputText.innerText.slice(0, -1) + operation;
      }
    
      
      processDel() {
        this.currentInputText.innerText =
          this.currentInputText.innerText.slice(0, -1);
      }
    
      
      processClearOperator() {
        this.currentInputText.innerText = "";
        this.previousInputText.innerText = "";
      }
    
      
      processEqual() {
        let operation = this.previousInputText.innerText.split(" ")[1];
    
        this.processOperation(operation);
      }
    }
    
    const calc = new Calculator(previousInputText, currentInputText);
    
    calc_buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const value = e.target.innerText;
    
        if (+value >= 0 || value === ".") {
          console.log(value);
          calc.addDigit(value);
        } else {
          calc.processOperation(value);
        }
      });
    });