fetch("products.json")
.then(res => res.json())
.then(data => {

let output="";

data.forEach(product=>{
output += `
<div>
<h3>${product.name}</h3>
<p>Price: ₹${product.price}</p>
</div>
`;
});

document.body.innerHTML += output;

});
