let sum = 0;
loadCart();
function loadCart(){
    if(localStorage.getItem("korpa1") !== null){
        let storageCart = localStorage.getItem("korpa1");
       
        let cartObject = JSON.parse(storageCart);
        
        showCart(cartObject);
       
    }
    let mc =document.getElementById("mainCart");
    h3 = document.createElement("h3");
    h3.innerHTML = "Ukupna cena je " + sum + "$";
    mc.appendChild(h3);
    
}

function showCart(cartObject){
    
    let cartTable = document.getElementById("cartTable");
    
    for (const key in cartObject) {
        
            const element = cartObject[key];
            
            let pic = document.createElement("img");
            pic.src = element.ImageUrl;

            const row = document.createElement("tr");
            let td1  = document.createElement("td");
            td1.appendChild(pic);
            td1.setAttribute("id","td1");
            td1.style.width = "70px";
            let td2  = document.createElement("td");
            td2.innerHTML = element.ProductName;
            td2.setAttribute("id","td2");
            let td3  = document.createElement("td");
            td3.innerHTML = element.UnitPrice + "$";
            td3.setAttribute("id","td3");
             row.appendChild(td1);
             row.appendChild(td2);
             row.appendChild(td3);
            
         cartTable.appendChild(row);

         sum += element.UnitPrice;
        
        
    }
   
    
}