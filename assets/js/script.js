let params = (new URL(document.location)).searchParams;
let name = params.get("params")
console.log(name);

let row =document.createElement("div")
let body= document.querySelector("body")


fetch(`https://jsonplaceholder.typicode.com/photos/${name}`)
.then((res) =>res.json())
.then((dat)=>{
    console.log(dat);
    row.innerHTML=`<div class="container">
    <div class="row mt-5">
        <div class="col-lg-6">
            <div class="img">
                <img src="./images/71258XWXl8L._AC_UX342_.jpg" alt="">
            </div>
        </div>
        <div class="col-lg-6">
            <div class="title">
                <span>Commod Good</span>
                <h2>${dat.id}</h2>
            </div>
           
            <div class="icon mt-3">
                <i class="fa-solid fa-star star"></i>
                <i class="fa-solid fa-star star"></i>
                <i class="fa-solid fa-star star"></i>
                <i class="fa-solid fa-star star"></i>
                <i class="fa-solid fa-star star"></i>
                <span>(No reviews yet)</span>
                <span>Write a Reviews</span>
            </div>
            <div class="price mt-3">
                <h4>${dat.id}</h4>
            </div>
            <div class="icon-text mt-3">
                <i class="fa-regular fa-image"></i>
                <span>Size Cart</span>
            </div>
            <div class="list mt-3">
                <ul>
                    <li><span>Brand <span class="common">Common Good</span></span></li>
                    <li><span>SKU: CGLD</span></li>
                    <li><span>Weight: 1.00 KGS</span></li>
                    <li><span>Shipping: Calculated at Checkout</span></li>
                </ul>
                <hr>
            </div>
            <div class="quantity">
                <span >Quantity: </span> <br>
                <input type="number" id="1" name="quantity" min="1" style="width: 60px;" >
                
            </div>
            <div class="buttons mt-3">
                <button type="button" class="btn btn-warning cart button">Add to card</button>
                <button type="button" class="btn btn-light">Add to wish list  <i class="fa-solid fa-angle-down"></i>  </button>
                
            </div>
    </div>
</div> `
})
body.append(row)
