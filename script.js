function performSearch() {
  const query = document.getElementById("searchQuery").value;
  if (query) {
    // Open Google search in a new tab/window
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(query)}`,
      "_blank"
    );
    // Show an alert after opening the search
    alert(`Searching Google for: "${query}"`);
  } else {
    alert("Please enter a search query.");
  }
}
