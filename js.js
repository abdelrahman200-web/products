var item = [
    {productName: 'Lotion1',productPrice: 500,productDescription: 'loremloremloremloremlorem'},
    {productName: 'Lotion2',productPrice: 700,productDescription: 'loremloremloremloremlorem'},
    {productName: 'Lotion3',productPrice: 600,productDescription: 'loremloremloremloremlorem'}
]



for (var i = 0 ; item.length ; i++ ){

    var cardTitle = document.getElementById('productName' + (i+1));
    cardTitle.innerHTML= item[i].productName ; 

    var cardText = document.getElementById('productDescription' + (i+1));
    cardText.innerHTML= item[i].productDescription ; 

    var cardPrice = document.getElementById('productprice' + (i+1));
    cardPrice.innerHTML= item[i].productPrice + "$"; 

}
