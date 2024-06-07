console.log('form.js loaded');
//form validation
const button = document.querySelector('#submitBlog');

// add form data as object to array in local storage
button.addEventListener('click', function (event) {
  event.preventDefault();
  console.log('Submit button clicked');
  //validate form data
  if (
    !document.getElementById('username').value.trim() ||
    !document.getElementById('title').value.trim() ||
    !document.getElementById('content').value.trim()
  ) {
    alert('Please fill out all fields');
    return;
  }

  const blogContent = {
    username: document.getElementById('username').value.trim(),
    title: document.getElementById('title').value.trim(),
    content: document.getElementById('content').value.trim(),
  };
  console.log(blogContent);
  // if (localStorage.getItem('blogArray') === null) {
  //   localStorage.setItem('blogArray', '[]');
  // }
  // localstorage.setItem('blogArray', JSON.stringify(blogContent));
  // Retrieve existing blogsArray from local storage

  let blogsArray = JSON.parse(localStorage.getItem('blogsArray')) || [];
  blogsArray.push(blogContent);
  localStorage.setItem('blogsArray', JSON.stringify(blogsArray));

  //clear form fields
  document.getElementById('blogForm').reset();
});
