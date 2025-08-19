/* script.js */

// ======================
// Product Data
// ======================
const products = [
  /* script.js */

  // iPhones (New only)
  { id: 1, name: "iPhone 8 64GB", price: 4500, image: "images/iPhone 8 64GB.jpeg", category: "iPhone" },
  { id: 2, name: "iPhone 8+ 64GB", price: 5000, image: "images/iPhone 8+ 64GB.jpeg", category: "iPhone" },
  { id: 3, name: "iPhone 8+ 256GB", price: 5350, image: "images/iPhone 8+ 64GB.jpeg", category: "iPhone" },
  { id: 4, name: "iPhone X 64GB", price: 5500, image: "images/iPhone X 64GB.jpeg", category: "iPhone" },
  { id: 5, name: "iPhone X 256GB", price: 5800, image: "images/iPhone X 64GB.jpeg", category: "iPhone" },
  { id: 6, name: "iPhone XR 64GB", price: 5700, image: "images/iPhone XR 64GB.jpeg", category: "iPhone" },
  { id: 7, name: "iPhone XR 128GB", price: 6200, image: "images/iPhone XR 64GB.jpeg", category: "iPhone" },
  { id: 8, name: "iPhone XS 64GB", price: 5800, image: "images/iPhone XS 64GB.jpeg", category: "iPhone" },
  { id: 9, name: "iPhone XS 256GB", price: 6200, image: "images/iPhone XS 64GB.jpeg", category: "iPhone" },
  { id: 10, name: "iPhone XS Max 64GB", price: 7500, image: "images/iPhone XS Max 64GB.jpeg", category: "iPhone" },
  { id: 11, name: "iPhone XS Max 256GB", price: 8100, image: "images/iPhone XS Max 64GB.jpeg", category: "iPhone" },
  { id: 12, name: "iPhone 11 64GB", price: 6750, image: "images/iPhone 11 64GB.jpeg", category: "iPhone" },
  { id: 13, name: "iPhone 11 128GB", price: 7200, image: "images/iPhone 11 64GB.jpeg", category: "iPhone" },
  { id: 14, name: "iPhone 11 Pro 64GB", price: 7800, image: "images/iPhone 11 Pro 64GB.jpeg", category: "iPhone" },
  { id: 15, name: "iPhone 11 Pro 256GB", price: 8500, image: "images/iPhone 11 Pro 64GB.jpeg", category: "iPhone" },
  { id: 16, name: "iPhone 11 Pro Max 64GB", price: 8800, image: "images/iPhone 11 Pro Max 64GB.jpeg", category: "iPhone" },
  { id: 17, name: "iPhone 11 Pro Max 256GB", price: 9300, image: "images/iPhone 11 Pro Max 64GB.jpeg", category: "iPhone" },
  { id: 18, name: "iPhone 12 64GB", price: 7900, image: "images/iPhone 12 64GB.jpeg", category: "iPhone" },
  { id: 19, name: "iPhone 12 128GB", price: 8500, image: "images/iPhone 12 64GB.jpeg", category: "iPhone" },
  { id: 20, name: "iPhone 12 Pro 128GB", price: 9500, image: "images/iPhone 12 Pro 128GB.jpeg", category: "iPhone" },
  { id: 21, name: "iPhone 12 Pro Max 128GB", price: 11500, image: "images/iPhone 12 Pro Max 128GB.jpeg", category: "iPhone" },
  { id: 22, name: "iPhone 12 Pro Max 256GB", price: 12000, image: "images/iPhone 12 Pro Max 128GB.jpeg", category: "iPhone" },
  { id: 23, name: "iPhone 13 128GB", price: 10000, image: "images/iPhone 13 128GB.jpeg", category: "iPhone" },
  { id: 24, name: "iPhone 13 256GB", price: 10500, image: "images/iPhone 13 128GB.jpeg", category: "iPhone" },
  { id: 25, name: "iPhone 13 Pro 128GB", price: 11500, image: "images/iPhone 13 Pro 128GB.jpeg", category: "iPhone" },
  { id: 26, name: "iPhone 13 Pro 256GB", price: 12000, image: "images/iPhone 13 Pro 128GB.jpeg", category: "iPhone" },
  { id: 27, name: "iPhone 13 Pro Max 128GB", price: 13000, image: "images/iPhone 13 Pro Max 128GB.jpeg", category: "iPhone" },
  { id: 28, name: "iPhone 13 Pro Max 256GB", price: 14000, image: "images/iPhone 13 Pro Max 128GB.jpeg", category: "iPhone" },
  { id: 29, name: "iPhone 14 128GB", price: 11000, image: "images/iPhone 14 128GB.jpeg", category: "iPhone" },
  { id: 30, name: "iPhone 14 256GB", price: 11500, image: "images/iPhone 14 128GB.jpeg", category: "iPhone" },
  { id: 31, name: "iPhone 14 Plus 128GB", price: 13000, image: "images/iPhone 14 Plus 128GB.jpeg", category: "iPhone" },
  { id: 32, name: "iPhone 14 Plus 256GB", price: 14000, image: "images/iPhone 14 Plus 128GB.jpeg", category: "iPhone" },
  { id: 33, name: "iPhone 14 Pro 128GB", price: 15000, image: "images/iPhone 14 Pro 128GB.jpeg", category: "iPhone" },
  { id: 34, name: "iPhone 14 Pro 256GB", price: 15500, image: "images/iPhone 14 Pro 128GB.jpeg", category: "iPhone" },
  { id: 35, name: "iPhone 14 Pro Max 128GB", price: 16500, image: "images/iphone 14 pro max 128gb.jpeg", category: "iPhone" },
  { id: 36, name: "iPhone 14 Pro Max 256GB", price: 17000, image: "images/iphone 14 pro max 128gb.jpeg", category: "iPhone" },
  { id: 37, name: "iPhone 15 128GB", price: 14500, image: "images/iPhone 15 128GB.jpeg", category: "iPhone" },
  { id: 38, name: "iPhone 15 256GB", price: 15000, image: "images/iPhone 15 128GB.jpeg", category: "iPhone" },
  { id: 39, name: "iPhone 15 Plus 128GB", price: 15000, image: "images/iPhone 15 Plus 128GB.jpeg", category: "iPhone" },
  { id: 40, name: "iPhone 15 Plus 256GB", price: 16000, image: "images/iPhone 15 Plus 128GB.jpeg", category: "iPhone" },
  { id: 41, name: "iPhone 15 Pro 128GB", price: 18000, image: "images/iPhone 15 Pro 128GB.jpeg", category: "iPhone" },
  { id: 42, name: "iPhone 15 Pro 256GB", price: 19000, image: "images/iPhone 15 Pro 128GB.jpeg", category: "iPhone" },
  { id: 43, name: "iPhone 15 Pro Max 256GB", price: 20000, image: "images/iPhone 15 Pro Max 256GB.jpeg", category: "iPhone" },
  { id: 44, name: "iPhone 15 Pro Max 512GB", price: 21000, image: "images/iPhone 15 Pro Max 256GB.jpeg", category: "iPhone" },
  { id: 45, name: "iPhone 16 128GB", price: 17000, image: "images/iPhone 16 128GB.jpeg", category: "iPhone" },
  { id: 46, name: "iPhone 16 256GB", price: 19000, image: "images/iPhone 16 128GB.jpeg", category: "iPhone" },
  { id: 47, name: "iPhone 16 Plus 128GB", price: 18000, image: "images/iPhone 16 Plus 128GB.jpeg", category: "iPhone" },
  { id: 48, name: "iPhone 16 Plus 256GB", price: 19000, image: "images/iPhone 16 Plus 128GB.jpeg", category: "iPhone" },
  { id: 49, name: "iPhone 16 Pro 128GB", price: 23000, image: "images/iPhone 16 Pro 128GB.jpeg", category: "iPhone" },
  { id: 50, name: "iPhone 16 Pro 256GB", price: 24000, image: "images/iPhone 16 Pro 128GB.jpeg", category: "iPhone" },
  { id: 51, name: "iPhone 16 Pro Max 256GB", price: 25000, image: "images/iPhone 16 Pro Max 256GB.jpeg", category: "iPhone" },
  { id: 52, name: "iPhone 16 Pro Max 512GB", price: 26000, image: "images/iPhone 16 Pro Max 256GB.jpeg", category: "iPhone" },

  // Apple Watches
  { id: 53, name: "Apple Watch SE 2", price: 5500, image: "images/Apple Watch SE 2.jpeg", category: "Watch" },
  { id: 54, name: "Apple Watch Series 5", price: 5000, image: "images/Apple Watch Series 5.jpeg", category: "Watch" },
  { id: 55, name: "Apple Watch Series 6", price: 5300, image: "images/Apple Watch Series 6.jpeg", category: "Watch" },
  { id: 56, name: "Apple Watch Series 7", price: 6000, image: "images/Apple Watch Series 7.jpeg", category: "Watch" },
  { id: 57, name: "Apple Watch Series 8", price: 6500, image: "images/Apple Watch Series 8.jpeg", category: "Watch" },
  { id: 58, name: "Apple Watch Series 9", price: 7500, image: "images/Apple Watch Series 9.jpeg", category: "Watch" },

  // MacBook
  { id: 59, name: "MacBook Air 2017 (8GB RAM / 256GB SSD, i5)", price: 6500, image: "images/MacBook Air 2017.jpeg", category: "MacBook" },

  // Samsung Phones
  { id: 60, name: "Samsung A05 64GB", price: 2550, image: "images/Samsung A05 64GB.jpeg", category: "Samsung" },
  { id: 61, name: "Samsung A05s 64GB", price: 2900, image: "images/Samsung A05s 64GB.jpeg", category: "Samsung" },
  { id: 62, name: "Samsung A06 64GB", price: 2650, image: "images/Samsung A06 64GB.jpeg", category: "Samsung" },
  { id: 63, name: "Samsung A16 128GB", price: 5550, image: "images/Samsung A16 128GB.jpeg", category: "Samsung" },
  { id: 64, name: "Samsung A26 128GB", price: 5600, image: "images/Samsung A26 128GB.jpeg", category: "Samsung" },
  { id: 65, name: "Samsung A35 128GB", price: 5850, image: "images/Samsung A35 128GB.jpeg", category: "Samsung" },
  { id: 66, name: "Samsung A36 128GB", price: 6600, image: "images/Samsung A36 128GB.jpeg", category: "Samsung" },
  { id: 67, name: "Samsung A54 128GB", price: 6200, image: "images/Samsung A54 128GB.jpeg", category: "Samsung" },
  { id: 68, name: "Samsung A55 128GB", price: 6650, image: "images/Samsung A55 128GB.jpeg", category: "Samsung" },
  { id: 69, name: "Samsung A56 256GB", price: 8650, image: "images/Samsung A56 256GB.jpeg", category: "Samsung" },
  { id: 70, name: "Samsung A32 128GB", price: 3600, image: "images/Samsung A32 128GB.jpeg", category: "Samsung" },
  { id: 71, name: "Samsung A21s 64GB", price: 4000, image: "images/Samsung A21s 64GB.jpeg", category: "Samsung" },
  { id: 72, name: "Samsung S21FE 5G 256GB", price: 5700, image: "images/Samsung S21FE 5G 256GB.jpeg", category: "Samsung" },
  { id: 73, name: "Samsung S24 Plus 256GB", price: 15800, image: "images/Samsung S24 Plus 256GB.jpeg", category: "Samsung" },
  { id: 74, name: "Samsung S24 Ultra 256GB", price: 18000, image: "images/Samsung S24 Ultra 256GB.jpeg", category: "Samsung" },
  { id: 75, name: "Samsung S25 Ultra 256GB", price: 20500, image: "images/Samsung S25 Ultra 256GB.jpeg", category: "Samsung" },
  //Camping Equipment
  { id: 76, name: "Camp Tent Rental ( 8-Person Capacity)", price: 450, image: "images/tent1.jpg.webp", isRental: true, category: "Camp Tent Rental" }
];

// ======================
// DOM Elements
// ======================
const productList = document.getElementById("productList");
const cartBtn = document.getElementById("cartBtn");
const cartDrawer = document.getElementById("cartDrawer");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const clearCartBtn = document.getElementById("clearCart");
const checkoutBtn = document.getElementById("checkoutBtn");
const cartCountEl = document.getElementById("cartCount");
const year = document.getElementById("year");

// Mobile menu
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

// ======================
// Helpers
// ======================
function formatCurrency(amount) {
  return "R" + (amount || 0).toLocaleString("en-ZA");
}

// Year in footer
if (year) year.textContent = new Date().getFullYear();

// ======================
// State
// ======================
let cart = [];

// ======================
// Rendering
// ======================
function filterCategory(cat) {
  const filtered = cat === "All" ? products : products.filter(p => p.category === cat);
  renderProducts(filtered);
}

function renderProducts(list) {
  productList.innerHTML = "";
  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";

    if (p.isRental) {
      div.innerHTML = `
        <img src="${p.image}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p>${formatCurrency(p.price)} / per day </p>
        <label>Days: <input type="number" min="1" value="1" id="days-${p.id}"></label>
        <label>Start Date: <input type="date" id="start-${p.id}"></label>
        <label>EndDate: <input type="date" id="end-${p.id}"></label>
        <p> "R50 off each added day!"</p>
        <button class="btn-primary" onclick="addToCart(${p.id})">Add to Cart</button>
          
        
      `;
    } else {
      div.innerHTML = `
        <img src="${p.image}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p>${formatCurrency(p.price)}</p>
        <button class="btn-primary" onclick="addToCart(${p.id})">Add to Cart</button>
      `;
    }

    productList.appendChild(div);
  });
}

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price;
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span>${item.qty}x ${item.name}${item.isRental ? ` (${item.startDate || ""} to ${item.endDate || ""})` : ""}</span>
      <span>${formatCurrency(item.price)}</span>
    `;
    cartItems.appendChild(div);
  });

  cartTotal.textContent = formatCurrency(total);
  cartCountEl.textContent = formatCurrency(total);

  // Trigger pulse + bounce animation
  cartCountEl.classList.remove("pulse", "bounce"); // reset animations
  void cartCountEl.offsetWidth; // force reflow
  cartCountEl.classList.add("pulse", "bounce");
}

// ======================
// Cart Operations
// ======================
function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  let qty = 1;
  let startDate = null;
  let endDate = null;
  let discount = 0;

  if (product.isRental) {
    qty = Math.max(1, parseInt(document.getElementById(`days-${id}`).value, 10) || 1);
    startDate = document.getElementById(`start-${id}`).value || "";
    endDate = document.getElementById(`end-${id}`).value || "";
    const discountPerExtraDay = 50;
    discount = Math.max(0, qty - 1) * discountPerExtraDay;
  }

  // Price for this add operation only
  const priceDelta = product.price * qty - discount;

  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty += qty;
    existing.price += priceDelta;
    if (product.isRental) {
      existing.startDate = startDate;
      existing.endDate = endDate;
      existing.discount = (existing.discount || 0) + discount;
    }
  } else {
    cart.push({
      ...product,
      qty,
      startDate,
      endDate,
      discount,
      price: priceDelta
    });
  }

  renderCart();
}

// ======================
// Events
// ======================
// Wire up UI after DOM is ready (replaces your Events + Mobile Menu + Init)
// ======================
document.addEventListener("DOMContentLoaded", () => {
  // Re-query elements AFTER DOM is available
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  const cartBtn = document.getElementById("cartBtn");
  const cartDrawer = document.getElementById("cartDrawer");
  const closeCart = document.getElementById("closeCart");
  const clearCartBtn = document.getElementById("clearCart");
  const checkoutBtn = document.getElementById("checkoutBtn");

  // ---- Cart events (guarded) ----
  if (cartBtn && cartDrawer) {
    cartBtn.addEventListener("click", () => {
      cartDrawer.classList.toggle("active");
    });
  }

  if (closeCart && cartDrawer) {
    closeCart.addEventListener("click", () => cartDrawer.classList.remove("active"));
  }

  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      cart = [];
      renderCart();
    });
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (cart.length === 0) return;

      const total = cart.reduce((sum, i) => sum + i.price, 0);
      let message = "Hi, I'd like to order:\n";
      cart.forEach(item => {
        message += `${item.qty} x ${item.name}${item.isRental ? ` (${item.startDate} to ${item.endDate})` : ""} - ${formatCurrency(item.price)}\n`;
      });
      message += `\nTotal: ${formatCurrency(total)}`;

      const url = `https://wa.me/27745243348?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    });
  }

  // ---- Mobile Menu Toggle ----
  if (menuToggle && mainNav) {
    // Toggle open/close
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      mainNav.classList.toggle("show");
    });

    // Close when clicking a nav link
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("show");
      });
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (
        mainNav.classList.contains("show") &&
        !mainNav.contains(e.target) &&
        e.target !== menuToggle
      ) {
        mainNav.classList.remove("show");
      }
    });
  }

  // ---- Initial render (now DOM exists) ----
  renderProducts(products);
  renderCart(); // sets badge to R0 on load
});
// Toggle Phones subcategories
const phonesBtn = document.querySelector(".dropdown > .category-btn");
const phoneDropdown = document.querySelector(".dropdown-content");

phonesBtn.addEventListener("click", () => {
  phoneDropdown.classList.toggle("show");
});