document.addEventListener('DOMContentLoaded', () => {
  // grab local storage data and display it on the page dynamically
  const blogs = JSON.parse(localStorage.getItem('blogsArray')) || [];

  // loop blogs array and create a card for each blog
  for (const blog of blogs) {
    console.log(
      `Username: ${blog.username}, Title: ${blog.title}, Content: ${blog.content}`
    );
    // define the card container
    const cardContainer = document.querySelector('#card-container');

    // create the blog card and add the class
    const card = document.createElement('div');
    card.classList.add('blog-card');

    // create header of the blog card
    const header = document.createElement('div');
    header.classList.add('blog-header');

    // create the paragraph element for the title
    const cardTitle = document.createElement('p');
    cardTitle.textContent = `Title: ${blog.title}`;

    // create the blog content container
    const cardBody = document.createElement('div');
    const cardUsername = document.createElement('p');
    const cardContent = document.createElement('p');
    cardBody.classList.add('blog-content');

    cardUsername.textContent = `Author: ${blog.username}`;
    cardContent.textContent = `${blog.content}`;

    // append child elements to the card
    header.appendChild(cardTitle); // append the title to the header
    card.appendChild(header); // append the header to the card
    cardBody.appendChild(cardUsername); // append the username to the card body
    cardBody.appendChild(cardContent); // append the content to the card body
    card.appendChild(cardBody); // append the content to the card
    cardContainer.appendChild(card); // append the card to the card container
  }
});
