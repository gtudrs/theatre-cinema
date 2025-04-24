// Filter History Items based on the search input
function filterHistory() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const items = document.querySelectorAll('.history-item');
    
    items.forEach(item => {
      const title = item.querySelector('.history-title').textContent.toLowerCase();
      if (title.includes(searchQuery)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  