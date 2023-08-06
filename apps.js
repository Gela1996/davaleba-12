// დავალება 1

// let year = Number(prompt('Enter a year'));

// if((year % 4 === 0 && year % 100 !==0) || year % 400 === 400 ===0) {
//alert('${year} is a leap year');
// } else {
//alert('${year} is not a leap year');
// }

// დავალება 2

// let browser = prompt('Enter a browser');

// if(browser === 'Edge') {
// alert("You've got the Edge!");
// } else if(
    // browser ==='Chrome' || 
    // browser === 'Firefox' || 
    // browser === 'Safari' || 
    // browser === 'Opera'
    // ) {
    // alert('Okay we support these browsers too');
    // } else {
    // alert('We hope that this page looks ok!');
    // }


// დავალება 3

let number1 = Number(prompt('Enter number 1'));
let number2 = Number(prompt('Enter number 2'));
let operation = prompt('Enter operation');
let result;

if (isNaN(number1) || isNaN(number2)) {
    alert('Please, enter only numbers');
} else {

    switch(operation) {
        case '+':
            result = number1 + number2;
          break;

        case '-':
            result = number1 - number2;
          break;

        case '/':
            result = number1 / number2;
          break;
    }
    alert('The result is ${result}');
}


// დავალება 4

let number = prompt('Enter number');

while (isNaN(number)) {
alert('you entered wrong number');
number = prompt('Enter number again');
}
alert('You got the point');
