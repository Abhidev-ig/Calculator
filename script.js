
    1 const resultInput = document.getElementById('result');
    2 
    3 function appendNumber(number) {
    4     resultInput.value += number;
    5 }
    6 
    7 function appendOperator(operator) {
    8     resultInput.value += operator;
    9 }
   10 
   11 function calculateResult() {
   12     try {
   13         resultInput.value = eval(resultInput.value);
   14     } catch (error) {
   15         resultInput.value = 'Error';
   16     }
   17 }
   18 
   19 function clearResult() {
   20     resultInput.value = '';
   21 }
   22 
