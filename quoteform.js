const form =  document.querySelector('form');
//const API_URL = 'http://localhost:5000/fuel_quote';

form.addEventListener('submit', (event) =>
{
    event.preventDefault();
    const formData = new FormData(form);

    var galRequest = formData.get('gallons');

    const delvAddr = "Client Address";
    const delvDate = formData.get('delvDate');
    const state = formData.get('state')
    var margin = .1;
    
    if(state == "TX")
        margin += 0.02;
    else
        margin += 0.04;

    if(galRequest > 1000)
        margin += 0.02;

    else
        margin += 0.03;
    
    margin *= 1.5;
    
    var suggested = 1.5 + margin;

    var price = galRequest * suggested;

    document.getElementById("price per gallon").innerHTML = "$" + suggested.toFixed(2);
    
    var total = galRequest * suggested;
    document.getElementById("price").innerHTML = "$" + total.toFixed(2) + " total";

    const fuel_quote = {
        galRequest,
        delvAddr,
        delvDate,
        price
    };
    //after this we will access the database and put this information into 
    //the correct user fuel quote history
    // console.log(fuel_quote);
    // fetch(API_URL, {
    //     method: 'POST',
    //     body: JSON.stringify(fuel_quote),
    //     headers: {
    //         'content-type': 'application/json'
    //     }
    // });
});

function calculatePrice(){
    
}

class priceModule {

    constructor(quote) {
      this.currentQuote = quote;
    }

    calcQuote(galRequest, price) {
        quote = galRequest * price;
        return quote
    }
}
