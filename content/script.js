document.getElementById('postForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const image = document.getElementById('image').files[0];
    const video = document.getElementById('video').value;

    // Create a new blog post element
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    let postHTML = `<h2>${title}</h2><p>${content}</p>`;

    if (image) {
        const imageURL = URL.createObjectURL(image);
        postHTML += `<img src="${imageURL}" alt="${title}">`;
    }

    if (video) {
        postHTML += `<iframe width="560" height="315" src="${video}" frameborder="0"></iframe>`;
    }

    postElement.innerHTML = postHTML;

    document.getElementById('blogPosts').appendChild(postElement);

    // Reset form fields
    document.getElementById('postForm').reset();
});
