// Task 1: Business Dashboard – DOM Element Selection and Creation

// Select the dashboard container using getElementById
const dashboardById = document.getElementById("dashboard");

// Also select using querySelector
const dashboard = document.querySelector("#dashboard");

// Create a new div element to serve as the Revenue metric card
const revenueCard = document.createElement("div");

// Set attributes for the new card: id and class
revenueCard.setAttribute("id", "revenueCard");
revenueCard.setAttribute("class", "metric-card");

// Populate the card with a title and a placeholder value
revenueCard.innerHTML = "<h2>Revenue</h2><p>$0</p>";

// Append the revenue card to the dashboard container
dashboard.appendChild(revenueCard);



// Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays

// For demonstration, create additional metric cards (Profit and Expenses)
const profitCard = document.createElement("div");
profitCard.setAttribute("class", "metric-card");
profitCard.innerHTML = "<h2>Profit</h2><p>$0</p>";
dashboard.appendChild(profitCard);

const expensesCard = document.createElement("div");
expensesCard.setAttribute("class", "metric-card");
expensesCard.innerHTML = "<h2>Expenses</h2><p>$0</p>";
dashboard.appendChild(expensesCard);

// Select all metric cards using querySelectorAll
const metricCardsNodeList = document.querySelectorAll(".metric-card");

// Convert the NodeList into an array
const metricCardsArray = Array.from(metricCardsNodeList);

// Use an array method to update each card's content; here, we append " - Updated" to the value paragraph
metricCardsArray.forEach(card => {
    const p = card.querySelector("p");
    if (p) {
        p.textContent += " - Updated";
    }
});


// Task 3: Dynamic Inventory Management – Adding and Removing Items

// Select the inventory list element from the HTML
const inventoryList = document.getElementById("inventoryList");

// Function to add a new product item to the inventory list
function addInventoryItem(productName) {
    const li = document.createElement("li");
    li.setAttribute("class", "product-item");
    li.textContent = productName;
    
    // Attach an event listener to remove the item when clicked
    li.addEventListener("click", function() {
        removeInventoryItem(li);
    });
    
    inventoryList.appendChild(li);
}

// Function to remove a product item from the inventory list
function removeInventoryItem(item) {
    inventoryList.removeChild(item);
}

// Test Cases: Adding new inventory items
addInventoryItem("Product A");
addInventoryItem("Product B");


// Task 4: Business Customer Section – Handling Event Bubbling

// Assume there is a parent container in the HTML with id "customerSection"
const customerSection = document.getElementById("customerSection");

// Create customer cards and append them to the customer section
const customerCard1 = document.createElement("div");
customerCard1.setAttribute("class", "customer-card");
customerCard1.textContent = "Customer 1";
customerSection.appendChild(customerCard1);

const customerCard2 = document.createElement("div");
customerCard2.setAttribute("class", "customer-card");
customerCard2.textContent = "Customer 2";
customerSection.appendChild(customerCard2);

// Attach an event listener to the parent container to log when it is clicked
customerSection.addEventListener("click", function() {
    console.log("Customer section clicked");
});

// Attach event listeners to each customer card; use stopPropagation() to prevent the parent's event handler from firing
document.querySelectorAll(".customer-card").forEach(card => {
    card.addEventListener("click", function(event) {
        console.log("Customer card clicked");
        event.stopPropagation(); // Prevent event bubbling to the parent container
    });
});