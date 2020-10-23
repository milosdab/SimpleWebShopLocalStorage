let products = [
    {
        ProductID: 1,
        ProductName: "Hori-Zone Kornet",
        SupplierID: 1,
        CategoryID: 1,
        UnitPrice: 423.0000,
        UnitsInStock: 2,
        ImageUrl: "images/hori.jpg"
     },
     {
        ProductID: 2,
        ProductName: "Ragim Taiga",
        SupplierID: 1,
        CategoryID: 1,
        UnitPrice: 185.0000,
        UnitsInStock: 4,
        ImageUrl:"images/ragim.jpg"
     },
     {
        ProductID: 3,
        ProductName: "Samick Sage",
        SupplierID: 1,
        CategoryID: 1,
        UnitPrice: 122.0000,
        UnitsInStock: 6,
        ImageUrl: "images/sage.jpg"
     },
     {
        ProductID: 4,
        ProductName: "Samick Fox",
        SupplierID: 1,
        CategoryID: 1,
        UnitPrice: 192.0000,
        UnitsInStock: 10,
        ImageUrl:"images/sfox.jpg"
     },
];
i=0;
let proizvodiUKorpi= [];
function render(){
    let productsDiv =  document.getElementById("products");
    
for (const key in products) {
    
        const element = products[key];
        i++
       console.log(element);
     
     let div = document.createElement("div");
     let ime = document.createElement("h1");
     ime.innerHTML = element.ProductName;
     let slika = document.createElement("img");
     slika.src = element.ImageUrl;
     let div2 = document.createElement("div");
     div2.setAttribute("class","div2")
     let h5 = document.createElement("h5");
     h5.innerHTML = "$" + element.UnitPrice;
     let btn = document.createElement("button");
     btn.innerHTML = "Add to Cart";
     btn.setAttribute("class","btn btn-primary");
     btn.setAttribute("id","addBtn"+ i);
     btn.setAttribute("value", JSON.stringify(element));
     
     div2.appendChild(h5);
     div2.appendChild(btn);


     div.appendChild(ime);
     div.appendChild(slika);
     div.appendChild(div2);
     
     
     productsDiv.appendChild(div);

     document.getElementById("addBtn"+i).addEventListener("click",function(event){
         console.log(event.target.value);
         let proizvoidKliknut = JSON.parse(event.target.value);
         
         document.getElementById("iCartIcon").classList.remove("fa-shopping-cart");
         document.getElementById("iCartIcon").classList.add("fa-cart-plus");
         

         renderCart(proizvoidKliknut);
         localStorage.setItem("korpa1", JSON.stringify(proizvodiUKorpi));
     })
}
}
render();

function renderCart(product){
    for (const key in proizvodiUKorpi) {
        
            const element = proizvodiUKorpi[key];
            if(element.ProductID == product.ProductID) {
                
                return;
             } 
        
    }
    proizvodiUKorpi.push(product);
}
