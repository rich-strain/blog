// Back History Button Logic
const backButton = document.querySelector('#goBack');
backButton.addEventListener('click', (event) => {
  event.preventDefault();
  history.back();
});
// Dynamic blog card creation
document.addEventListener('DOMContentLoaded', () => {
  // grab local storage data and display it on the page dynamically
  const blogs = JSON.parse(localStorage.getItem('blogsArray')) || [];

  // loop blogs array and create a card for each blog
  for (const blog of blogs) {
    console.log(`Username: ${blog.username}, Title: ${blog.title}, Content: ${blog.content}`);

    // define the card container
    const cardContainer = document.querySelector('#card-container');

    // create the blog card and add the class
    const card = document.createElement('div');
    card.classList.add('card');

    // create card content and add the class
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    // create the card title and add the class
    const cardTitle = document.createElement('span');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = `${blog.title}`;

    const blogContent = document.createElement('p');
    blogContent.textContent = `${blog.content}`;

    // create card action and add the class
    const cardAction = document.createElement('div');
    cardAction.classList.add('card-action');

    // create the card author
    const cardAuthor = document.createElement('span');
    cardAuthor.textContent = `Author: ${blog.username}`;

    // append child elements to the card
    cardContent.appendChild(cardTitle);
    cardContent.appendChild(blogContent);
    cardAction.appendChild(cardAuthor);
    card.appendChild(cardContent);
    card.appendChild(cardAction);
    cardContainer.appendChild(card);
  }
});
