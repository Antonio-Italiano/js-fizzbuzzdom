//1# Scrivo un programma che stampi in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
   
    
    if (i%3 == '') {
        let i = 'Fizz';
        console.log(i);
    } else if (i%5 == '') {
        let i = 'Buzz';
        console.log(i);        
    } else if (i%15 == '') {
        let i = 'FizzBuzz';
        console.log(i);
    } else {
        console.log(i);
    }
    
    
    
} 

