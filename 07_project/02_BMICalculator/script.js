const form = document.querySelector('form');
// this use case will give  empty value 
//const height  = parseInt(document.querySelector('#height').value);

// jaise hi script load hoti hai ye line execute ho jati jiski value 0 hoti hai
// isliye ye line yaha nahi likhni chahiye

form.addEventListener('submit', function(e) {
  e.preventDefault();// prevent the form from submitting
  //becuse we want to do some calculation
    const height  = parseInt(document.querySelector('#height').value);
    const weight  = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');  

    if(height === '' || isNaN(height) || height < 0) {
        results.innerHTML = `Please provide a valid height ${height}`;
    }
    else if(weight === '' || isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please provide a valid weight ${weight}`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `Your BMI is ${bmi}`;
    }
  

});


