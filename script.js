// Get all the articles
const articles = document.querySelectorAll('article');

// Loop through each article and add a click event listener
articles.forEach(article => {
    article.addEventListener('click', () => {
        // Toggle a class to highlight the clicked article
        article.classList.toggle('active');

        // Toggle visibility of the article content
        const content = article.querySelector('p');
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });
});
