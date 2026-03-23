let products = JSON.parse(localStorage.getItem("products")) || [];
let orders = JSON.parse(localStorage.getItem("orders")) || [];
let customers = JSON.parse(localStorage.getItem("customers")) || [];

displayProducts();
displayOrders();
displayCustomers();

// ADD PRODUCT
function addProduct() {
  let name = document.getElementById("pname").value;
  let price = document.getElementById("pprice").value;

  if (name === "" || price === "") {
    alert("Fill all fields");
    return;
  }

  products.push({ name, price });
  localStorage.setItem("products", JSON.stringify(products));

  displayProducts();

  document.getElementById("pname").value = "";
  document.getElementById("pprice").value = "";
}

// DISPLAY PRODUCTS
function displayProducts() {
  let list = document.getElementById("productList");
  list.innerHTML = "";

  products.forEach((p, index) => {
    list.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="deleteProduct(${index})">Delete</button>
      </div>
    `;
  });
}

// DELETE PRODUCT
function deleteProduct(index) {
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  displayProducts();
}

// DISPLAY ORDERS
function displayOrders() {
  let list = document.getElementById("orderList");
  list.innerHTML = "";

  if (orders.length === 0) {
    list.innerHTML = "<p>No orders found</p>";
    return;
  }

  orders.forEach((o, index) => {
    list.innerHTML += `
      <div class="card">
        <h3>Order #${index + 1}</h3>
        <p>Name: ${o.name}</p>
        <p>Product: ${o.product}</p>
        <p>Price: ₹${o.price}</p>
      </div>
    `;
  });
}

// DISPLAY CUSTOMERS
function displayCustomers() {
  let list = document.getElementById("customerList");
  list.innerHTML = "";

  if (customers.length === 0) {
    list.innerHTML = "<p>No customers found</p>";
    return;
  }

  customers.forEach((c, index) => {
    list.innerHTML += `
      <div class="card">
        <h3>${c.name}</h3>
        <p>Email: ${c.email}</p>
        <p>Phone: ${c.phone}</p>
      </div>
    `;
  });
}

// LOGOUT
function logout() {
  window.location.href = "admin-login.html";

  localStorage.setItem("customers", JSON.stringify([
  { name: "Eshita", email: "eshita@gmail.com", phone: "9876543210" },
  { name: "Tanishka", email: "tanishka@gmail.com", phone: "9123456780" }
]));

}