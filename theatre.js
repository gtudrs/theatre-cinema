// Function to show the popup
function showTheaterInfo(title, year, description) {
    // Set the content of the popup
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-description').textContent = description;
    document.getElementById('popup-year').textContent = year;
  
    // Display the popup
    document.getElementById('theater-popup').style.display = 'flex';
  }
  
  // Function to close the popup
  function closePopup() {
    document.getElementById('theater-popup').style.display = 'none';
  }
  
  function filterTheaterItems() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const items = document.querySelectorAll(".theater-item");
  
    items.forEach(item => {
      const title = item.querySelector(".theater-title").textContent.toLowerCase();
      item.style.display = title.includes(input) ? "block" : "none";
    });
  }
  