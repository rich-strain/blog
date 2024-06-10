//form validation
const button = document.querySelector('#submitBlog');

// listen for submit button click
button.addEventListener('click', function (event) {
  event.preventDefault();
  console.log('Submit button clicked');
  //validate form data and alert user if any field is empty
  if (!document.getElementById('username').value.trim() || !document.getElementById('title').value.trim() || !document.getElementById('content').value.trim()) {
    alert('Please fill out all fields.');
    return;
  }

  // create blog object from form data
  const blogContent = {
    username: document.getElementById('username').value.trim(),
    title: document.getElementById('title').value.trim(),
    content: document.getElementById('content').value.trim(),
  };

  // store blog object in local storage as an array of objects
  let blogsArray = JSON.parse(localStorage.getItem('blogsArray')) || [];
  blogsArray.push(blogContent);
  localStorage.setItem('blogsArray', JSON.stringify(blogsArray));

  //clear form fields
  document.getElementById('blogForm').reset();
  window.location.href = 'blog.html';
});
