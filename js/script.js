const main = document.getElementById('main')

//1# Scrivo un programma che stampi in console i numeri da 1 a 100

let content ='<div class="row justify-content-center">';

for (let i = 1; i <= 100; i++) {
   
    


    if (i%15 == '') {
        let i = 'FizzBuzz';
        console.log(i);
        const number = i ;
        if (number){
        content += `<div class="col-2 m-2 d-flex justify-content-center align-items-center bg-danger">${number}</div>`
        }
    } else if (i%5 == '') {
        let i = 'Buzz';
        console.log(i);
        const number = i ;
        if (number){
        content += `<div class="col-2 m-2 d-flex justify-content-center align-items-center bg-warning">${number}</div>`
        }        
    } else if (i%3 == '') {
        let i = 'Fizz';
        console.log(i);
        const number = i ;
        if (number){
        content += `<div class="col-2 m-2 d-flex justify-content-center align-items-center bg-success">${number}</div>`
        }
    } else {
        console.log(i);
        const number = i ;
        if (number){
        content += `<div class="col-2 m-2 d-flex justify-content-center align-items-center bg-primary">${number}</div>`
        }
    }    
    


    

} 
content += '</div>';
main.innerHTML = content;