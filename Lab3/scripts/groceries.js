	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "yogurt",
		lactoseFree: false,
		nutFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "almond granola",
		lactoseFree: true,
		nutFree: false,
		organic: true,
		price: 2.35
	},
	{
		name: "salmon",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 10.00
	},
	{
		name: "Peanut Butter",
		lactoseFree: true,
		nutFree: false,
		organic: false,
		price: 4.00
	},
	{
		name: "steak",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 8.00
	},
	{
		name: "Trail Mix",
		lactoseFree: true,
		nutFree: false,
		organic: false,
		price: 6.00
	},
	{
		name: "Whipped Cream",
		lactoseFree: false,
		nutFree: true,
		organic: false,
		price: 9.00
	},
	{
		name: "olive oil",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		price: 10.00
	},
	{
		name: "Cheerios",
		lactoseFree: true,
		nutFree: false,
		organic: false,
		price: 7.50
	},
	{
		name: "Almond Milk",
		lactoseFree: true,
		nutFree: false,
		organic: true,
		price: 4.00
	}

];


	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, nutFree, lactoseFree, organic) {
	let returnProds = [];
	for (let i=0; i<prods.length; i+=1) {
		if( !lactoseFree || (lactoseFree && prods[i].lactoseFree == true)){
			if( !nutFree || (nutFree && prods[i].nutFree == true)){
				if( !organic || (organic && prods[i].organic == true)){
					returnProds.push(prods[i]);
				}
			}
		}
	}
	console.log(returnProds)
	return returnProds;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}