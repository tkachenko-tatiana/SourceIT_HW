function getProductById(id, option) {
  const API_URL = "https://my-json-server.typicode.com/tkachenko-tatiana/shop-api";

  return fetch(`${API_URL}/products/${id}`)
    .then(response => {
      return response.json()
        .then(result => {
          return result;
    });
  });
 }
 
const product = getProductById(3).then((res) => {
  console.log(res);
})

 

