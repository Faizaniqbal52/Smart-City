// JavaScript for Waste Management Page

document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners
    document.getElementById("toggle-tips-btn").addEventListener("click", toggleTips);
    document.querySelectorAll(".initiative").forEach(function(initiative) {
        initiative.addEventListener("click", function() {
            showDetails(this.id);
        });
    });
    document.getElementById("toggle-actions-btn").addEventListener("click", toggleActions);
});

// Function to toggle visibility of waste reduction tips
function toggleTips() {
    var tips = document.getElementById("waste-reduction-tips");
    tips.classList.toggle("hidden");
}

// Function to display more details about a community initiative
function showDetails(initiativeId) {
    var initiative = document.getElementById(initiativeId);
    initiative.classList.toggle("expanded");
}

// Function to toggle visibility of get involved actions
function toggleActions() {
    var actions = document.getElementById("get-involved-actions");
    actions.classList.toggle("hidden");
}
