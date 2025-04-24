// Function to show the popup
function showMovieInfo(title, year, description) {
  // Set the content of the popup
  document.getElementById('popup-title').textContent = title;
  document.getElementById('popup-description').textContent = description;
  document.getElementById('popup-year').textContent = year;

  // Display the popup
  document.getElementById('movie-popup').style.display = 'flex';
}

// Function to close the popup
function closePopup() {
  document.getElementById('movie-popup').style.display = 'none';
}

// Function to filter movies based on the search query
function filterMovies() {
  const query = document.getElementById('searchBar').value.toLowerCase();
  const movieItems = document.querySelectorAll('.movie-item');

  movieItems.forEach(item => {
    const title = item.querySelector('.movie-title').textContent.toLowerCase();
    if (title.includes(query)) {
      item.style.display = 'block'; // Show matching movie
    } else {
      item.style.display = 'none'; // Hide non-matching movie
    }
  });
}





