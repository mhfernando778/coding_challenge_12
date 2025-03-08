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