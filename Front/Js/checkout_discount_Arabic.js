let listProducts = [];
let listPets = [];
let listPres = [];
let med = [];
let listCartPres = [];
let listCartProduct = [];
let listCartPet = [];
let listCart = [];
let totalQuantity = 0;
let totalPrice = 0;
// const initAppPet = () => {
//   // get data from json
//   fetch("http://localhost:7000/api/v1.0.0/pets")
//     .then((response) => response.json())
//     .then((data) => {
//       listPets = data.doc;
//       // localStorage.setItem('listPets',listPets);
//       addPetCartToHTML();
//     });
// };
// initAppPet();

const initAppProduct = () => {
  // get data from json
  fetch("http://localhost:7000/api/v1.0.0/products")
  .then((response) => response.json())
    .then((data) => {
      listProducts = data.doc;
      // localStorage.setItem('listProducts',listProducts);
      
      // addProductCartToHTML();
    });
  };
initAppProduct();
const initAppPres = () => {
    // get data from json
    fetch( 'http://localhost:7000/api/v1.0.0/prescriptions/mine' , {
    method: "GET",
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  })
  .then(response => response.json())
    .then(data => {
      listPres = data.doc;
      console.log(listPres);
      addDataToHTML();
      // get cart from memory 
       
    })
}
initAppPres();
function checkCart() {
//   listCartProduct = JSON.parse(localStorage.getItem("productCart"));
//   listCartPet = JSON.parse( localStorage.getItem( "petCart" ) );
  med = JSON.parse( localStorage.getItem( 'listMed' ) );
    listCartPres = JSON.parse( localStorage.getItem( 'preCart1' ) );
    // console.log(listCartPres);
}
checkCart();
// function addProductCartToHTML() {
//   // clear data default
//   console.log(listProducts);
//   let listCartProductsHTML = document.querySelector(".returnCart .list");
//   let totalQuantityHTML = document.querySelector(".totalQuantity");
//   let totalPriceHTML = document.querySelector(".totalPrice");
  // if has product in Cart
//   if (listCartProduct) {
//     listCartProduct.forEach((cart) => {
//       if (cart) {
//         let newCart = document.createElement("div");
//         newCart.classList.add("item");
//         newCart.dataset.id = cart.product_id;
//         newCart.dataset.type = "product";
//         let positionProduct = listProducts.findIndex(
//           (value) => value._id == cart.product_id
//         );
//         let info = listProducts[positionProduct];
//         newCart.dataset.price = info.price;
//         newCart.dataset.name = info.name;
//         newCart.dataset.quantity = cart.quantity;
//         newCart.innerHTML = `<img src="${info.image}" crossorigin="anonymous">
//                     <div class="info">
//                     <div class="name">${info.name}</div>
//                         <div class="price">${info.price}SYP /1 product</div>
//                         </div>
//                         <div class="quantity">${cart.quantity}</div>
//                         <div class="returnPrice">${
//                           info.price * cart.quantity
//                         } SYP</div>`;
//         listCartProductsHTML.appendChild(newCart);
//         totalQuantity = totalQuantity + cart.quantity;
//         totalPrice = totalPrice + info.price * cart.quantity;
       
//       }
//     });
//   }
//   totalQuantityHTML.innerText = totalQuantity;
//   totalPriceHTML.innerText = totalPrice + " SYP";
// }
// function addPetCartToHTML() {
//   // clear data default
//   let listCartPetsHTML = document.querySelector(".returnCart .list");
//   let totalQuantityHTML = document.querySelector(".totalQuantity");
//   let totalPriceHTML = document.querySelector(".totalPrice");
//   // if has product in Cart
//   if (listCartPet) {
//     listCartPet.forEach((cart) => {
//       if (cart) {
//         let newCart = document.createElement("div");
//         newCart.classList.add("item");
//         newCart.dataset.type = "Pet";
//         newCart.dataset.id = cart.product_id;
//         let positionProduct = listPets.findIndex(
//           (value) => value._id == cart.product_id
//         );
//         let info = listPets[positionProduct];
//         newCart.dataset.price = info.price;
//         newCart.dataset.name = info.name;
//         newCart.dataset.quantity = cart.quantity;
//         newCart.innerHTML = `<img src="${info.image}" crossorigin="anonymous">
//                     <div class="info">
//                     <div class="name">${info.name}</div>
//                         <div class="price">${info.price}SYP /1 pet</div>
//                         </div>
//                         <div class="quantity">${cart.quantity}</div>
//                         <div class="returnPrice">${
//                           info.price * cart.quantity
//                         } SYP</div>`;
//         listCartPetsHTML.appendChild(newCart);
//         totalQuantity = totalQuantity + cart.quantity;
//         totalPrice = totalPrice + info.price * cart.quantity;
      

//       }
//     });
//   }
//   totalQuantityHTML.innerText = totalQuantity;
//   totalPriceHTML.innerText = totalPrice + " SYP";
// }
let mult = 1;
function addDataToHTML() {
  // clear data default
  let listCartProductsHTML = document.querySelector(".returnCart .list");
  let totalQuantityHTML = document.querySelector(".totalQuantity");
  let totalPriceHTML = document.querySelector( ".totalPrice" );
  
  // if has product in Cart
  if (listCartPres) {
    listCartPres.forEach((cart) => {
      if (cart) {
        //   console.log('j');
 
        // console.log(cart.quantity);
        let positionProduct = med.findIndex(
            (value) => value._id == cart.product_id
        );
        let info = med[ positionProduct ];
               let newCart = document.createElement( "div" );
                   newCart.classList.add("item");
        newCart.dataset.id = info._id;
        newCart.dataset.type = "pres";
        newCart.dataset.quantity = cart.quantity;
        totalQuantity = totalQuantity + cart.quantity;
        // console.log(positionProduct);
            // mult = ( med.price - med.price * 0.25 ) * cart.quantity;
                    totalPrice = totalPrice + ( info.price - info.price * 0.25 ) * cart.quantity;
                    // totalPrice = totalPrice + ( med.price - med.price * 0.25 ) * cart.quantity;
                    // console.log(mult);
                  newCart.dataset.price = info.price - info.price*0.25;
                  newCart.dataset.name = info.name;
                  newCart.innerHTML = `<img src="${ info.image }" crossorigin="anonymous">
                    <div class="info">
                    <div class="name">${ info.name }</div>
                    <div class="price">${info.price - info.price *0.25 }ل.س /1 دواء <span>مع حسم</span></div>
                    </div>
                    <div class="quantity">${ cart.quantity }</div>
                    <div class="returnPrice">${(info.price - info.price*0.25)* cart.quantity} ل.س</div>`;
                    
                    listCartProductsHTML.appendChild(newCart);
   
      }
    });
  }
  totalQuantityHTML.innerText = totalQuantity;
  totalPriceHTML.innerText = totalPrice + " ل.س";
}

// Post to Order

let checkBtn = document.querySelector(".buttonCheckout");
checkBtn.addEventListener("click", (e) => {
  let data = {
    cart: [],
    address: document.getElementById("address").value,
  };
  let items = document.querySelectorAll(".item");
  items.forEach((it) => {
    console.log(document.getElementById("address").value);
    data.cart.push({
      product:it.dataset.id,
      quantity: it.dataset.quantity,
    });
  });
  try {
    fetch("http://localhost:7000/api/v1.0.0/orders/prescription", {
      method: "POST",
      mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
      headers: {
          "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == "success") {
          alert("تم اضافة طلبك بنجاح");
        //   localStorage.removeItem("petCart");
        //   localStorage.removeItem("productCart");
          localStorage.removeItem("preCart1");
        } else {
          alert(data.message);
          alert( 'يجب أن تسجل دخولك أولاً' );
          window.location.href = '/Front/Html/signin_English.html';
        }
      });
  } catch (err) {
    console.log(err);
  }
});
// localStorage.removeItem('preCart');