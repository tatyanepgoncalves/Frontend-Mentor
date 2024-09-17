const products = [
  {
    id: 1,
    image: {
      thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
      mobile: "./assets/images/image-waffle-mobile.jpg",
      tablet: "./assets/images/image-waffle-tablet.jpg",
      desktop: "./assets/images/image-waffle-desktop.jpg"
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.50
  },
  {
    id: 2,
    image: {
      thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
      mobile: "./assets/images/image-creme-brulee-mobile.jpg",
      tablet: "./assets/images/image-creme-brulee-tablet.jpg",
      desktop: "./assets/images/image-creme-brulee-desktop.jpg"
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.00
  },
  { 
    id: 3,
    image: {
      thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
      mobile: "./assets/images/image-macaron-mobile.jpg",
      tablet: "./assets/images/image-macaron-tablet.jpg",
      desktop: "./assets/images/image-macaron-desktop.jpg"
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.00
  },
  {
    id: 4,
    image: {
      thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
      mobile: "./assets/images/image-tiramisu-mobile.jpg",
      tablet: "./assets/images/image-tiramisu-tablet.jpg",
      desktop: "./assets/images/image-tiramisu-desktop.jpg"
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.50
  },
  {
    id: 5,
    image: {
      thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
      mobile: "./assets/images/image-baklava-mobile.jpg",
      tablet: "./assets/images/image-baklava-tablet.jpg",
      desktop: "./assets/images/image-baklava-desktop.jpg"
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.00
  },
  {
    id: 6,
    image: {
      thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
      mobile: "./assets/images/image-meringue-mobile.jpg",
      tablet: "./assets/images/image-meringue-tablet.jpg",
      desktop: "./assets/images/image-meringue-desktop.jpg"
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.00
  },
  { 
    id: 7,
    image: {
      thumbnail: "./assets/images/image-cake-thumbnail.jpg",
      mobile: "./assets/images/image-cake-mobile.jpg",
      tablet: "./assets/images/image-cake-tablet.jpg",
      desktop: "./assets/images/image-cake-desktop.jpg"
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.50
  },
  { 
    id: 8,
    image: {
      thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
      mobile: "./assets/images/image-brownie-mobile.jpg",
      tablet: "./assets/images/image-brownie-tablet.jpg",
      desktop: "./assets/images/image-brownie-desktop.jpg"
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.50
  },
  { 
    id: 9,
    image: {
      thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
      mobile: "./assets/images/image-panna-cotta-mobile.jpg",
      tablet: "./assets/images/image-panna-cotta-tablet.jpg",
      desktop: "./assets/images/image-panna-cotta-desktop.jpg"
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.50
  }
];


let cart = [];

// Carregar produtos
const productList = document.getElementById('product-list');
products.forEach((product, index) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
        <img src="${product.image.mobile}" alt="${product.name}">
        <span>${product.category}</span>
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button data-index="${index}" class="add-to-cart">
          <img src="assets/images/icon-add-to-cart.svg" alt="">
          Add to Cart
        </button>
    `;
    productList.appendChild(productDiv);
});

// Adicionar ao carrinho
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productIndex = e.target.getAttribute('data-index');
        addToCart(products[productIndex]);
    });
});

function addToCart(product) {
    const cartItem = cart.find(item => item.name === product.name);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartUI();
}

// Atualizar UI do carrinho
function updateCartUI() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `
      <div class="id-items">
          <h3>${item.name}</h3>
          <div>
            <span>${item.quantity}x</span>
            <p>$ ${item.price.toFixed(2)}</p>
          </div>
        </div>
        <div class="btn-items">
          <button class="decrement-item" data-name="${item.name}">
            <img src="assets/images/icon-decrement-quantity.svg" alt="Icon Decrement Quantity">
          </button>
          <button class="increment-item" data-name="${item.name}">
            <img src="assets/images/icon-increment-quantity.svg" alt="Icon Increment Quantity">
          </button>
        </div>
      `;
      cartItems.appendChild(li);
      total += item.price * item.quantity;
  });
 
  document.getElementById('cart-total').textContent = total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  
  document.querySelectorAll('.increment-item').forEach(button => {
      button.addEventListener('click', (e) => {
          const productName = e.target.getAttribute('data-name');
          incrementQuantity(productName);
      });
  });

  document.querySelectorAll('.decrement-item').forEach(button => {
      button.addEventListener('click', (e) => {
          const productName = e.target.getAttribute('data-name');
          decrementQuantity(productName);
      });
  });

  const modalList = document.getElementById("modal-list");
  modalList.innerHTML = "";
  let modalTotal = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="modal-item-list">
        <div class="id-item">
            <img src="${item.image.thumbnail}" alt="${item.name}">
            <div class="id-items">
                <h3>${item.name}</h3>
                <div>
                  <span>${item.quantity}x</span>
                  <p>$ ${item.price.toFixed(2)}</p>
                </div>
              </div>
        </div>
          <div class="btn-items">
            <button class="decrement-item" data-name="${item.name}">
              <img src="assets/images/icon-decrement-quantity.svg" alt="Icon Decrement Quantity">
            </button>
            <button class="increment-item" data-name="${item.name}">
              <img src="assets/images/icon-increment-quantity.svg" alt="Icon Increment Quantity">
            </button>
          </div>
      </div>
    `;
    modalList.appendChild(li);
    modalTotal += item.price * item.quantity;
  });

  document.getElementById("modal-total").textContent = total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    
  // Add and remove modal
  document.querySelectorAll("#modal-list .increment-item").forEach(button => {
    button.addEventListener("click", (e) => {
      const productName = e.target.getAttribute("data-name");
      incrementQuantity(productName)
    });
  });
  
  document.querySelectorAll("#modal-list .decrement-item").forEach(button => {
    button.addEventListener("click", (e) => {
      const productName = e.target.getAttribute("data-name");
      decrementQuantity(productName)
    });
  });
}


// Function add e remove no carrinho 
function incrementQuantity(productName) {
    const cartItem = cart.find(item => item.name === productName);
    if (cartItem) {
        cartItem.quantity++;
    }
    updateCartUI();
}

function decrementQuantity(productName) {
    const cartItem = cart.find(item => item.name === productName);
    if (cartItem) {
        cartItem.quantity--;
      
        if (cartItem.quantity === 0) {
            cart = cart.filter(item => item.name !== productName);
        }
    }
    updateCartUI();
}

// Confirmar pedido
document.getElementById('confirm-order').addEventListener('click', () => {
    document.getElementById('order-confirm-modal').classList.remove('hidden');
});


document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('order-confirm-modal').classList.add('hidden');
});



// Iniciar novo pedido
document.getElementById('new-order').addEventListener('click', () => {
    cart = [];
    updateCartUI();

});
