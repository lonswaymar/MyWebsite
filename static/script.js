function loadContent(path) {
  fetch(path)
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load content");
      }
      return response.text();
    })
    .then(html => {
      document.getElementById("content").innerHTML = html;
    })
    .catch(error => {
      document.getElementById("content").innerHTML = `<p>Error loading content: ${error.message}</p>`;
    });
}

window.onload = () => {
  loadContent('templates/bio.html');
};
