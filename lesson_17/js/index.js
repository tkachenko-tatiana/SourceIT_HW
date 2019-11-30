'use strict'

/*Задача 1*/

function getProductById(id) {
	return fetch(`https://my-json-server.typicode.com/tkachenko-tatiana/shop-api/products/${id}`) 
	.then((response) => response.json())
	.then((prod) => {
		return prod;
	})
}
getProductById(6).then((result) => {
    console.log(result);    
});

/*Задача 2*/

function createProduct (product) {
  fetch('https://my-json-server.typicode.com/tkachenko-tatiana/shop-api/products', {
  method: 'POST',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(product)
  })
  .then(res => res.json())
  .then(res => console.log(res));
}
let newProduct = {
    id: 19,
    location: "Home baking",
    name: "Self-raising flour",
    price: 1.5,
    text: "Flour is a powder made by grinding raw grains or roots and used to make many different foods",
}

createProduct(newProduct);

/*Задача 3*/

function updateProduct(product) {
    fetch(`/products/`, {
        method: 'PUT',
        body: JSON.stringify(product)
    });
}

/*Задача 4*/

function deleteProduct(id) {
    fetch(`/products/${id}`, {
        method: 'DELETE'
    });
}

/*Задача 5*/

function getProductsByPrice(price) {
return fetch(`https://my-json-server.typicode.com/tkachenko-tatiana/shop-api/products`) 
	.then((response) => response.json())
	.then((products) => products)
	.then((filter) => {
		for(let i = 0; i < filter.length - 1; i++) {
			if(filter[i].price >= price) {
				console.log(filter[i]);
			}
		}
	})
}
getProductsByPrice(3);

/*Задача 6*/

function getProductByName(name) {
	return fetch(`https://my-json-server.typicode.com/tkachenko-tatiana/shop-api/products`) 
	.then((response) => response.json())
	.then((products) => products)
	.then((filter) => {
		for(let i = 0; i < filter.length - 1; i++) {
			if(filter[i].name === name) {
				console.log(filter[i]);
			}
		}
	})
}
getProductByName('Salad');

/*Задача 7*/

function getProductsList() {
	return fetch(`https://my-json-server.typicode.com/tkachenko-tatiana/shop-api/products`) 
	.then((response) => response.json())
	.then((products) => {
		return products
	});
}
function showProducts() {
	return getProductsList().then((result) => {
		for(let i = 0; i < 5; i++) {
			console.log(result[i]);
		}
		if(confirm('Показать еще товары?', null)) {
			for(let i = 5; i < 10; i++) {
			console.log(result[i]);
		}
		}
	})
}
showProducts();