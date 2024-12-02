document.addEventListener("DOMContentLoaded", function() {
    // Get all tab buttons
    const tabButtons = document.querySelectorAll(".tab-button");
    // Get all tab content panels
    const tabPanels = document.querySelectorAll(".tab-panel");

    // Function to clear the "active" class from all tab panels and buttons
    function clearActiveTabs() {
        tabButtons.forEach(button => {
            button.classList.remove("active");
        });

        tabPanels.forEach(panel => {
            panel.classList.remove("active");
        });
    }

    // Event listeners for each tab button
    tabButtons.forEach(button => {
        button.addEventListener("click", function() {
            clearActiveTabs();

            // Get the target tab content from the data-tab attribute
            const targetTab = document.getElementById(button.dataset.tab);

            // Show the corresponding tab panel and activate the button
            targetTab.classList.add("active");
            button.classList.add("active");
        });
    });

    // Initialize the first tab as active (if desired)
    document.querySelector(".tab-button.active").click();
});


document.querySelector('.flight-search').addEventListener('submit', function(e) {
    e.preventDefault();
    const from = e.target[0].value;
    const to = e.target[1].value;

    if (!from || !to) {
        alert('Por favor, preencha os campos "From" e "To".');
    } else {
        alert(`Procurando voos de ${from} para ${to}...`);
    }
});


