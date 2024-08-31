// Profile Picture Update
document.querySelector('.edit-pic-btn').addEventListener('click', () => {
    document.querySelector('#image-upload').click();
});

document.querySelector('#image-upload').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.querySelector('.profile-pic').src = e.target.result;

            // Show preview in the image preview container
            const preview = document.getElementById('image-preview');
            if (preview) {
                preview.src = e.target.result;
                preview.style.display = 'block'; // Show the preview image
            }
        };
        reader.readAsDataURL(file);
    } else {
        // Hide preview if no file is selected
        const preview = document.getElementById('image-preview');
        if (preview) {
            preview.src = '';
            preview.style.display = 'none';
        }
    }
});

// Post Status with Image
document.querySelector('.post-btn').addEventListener('click', () => {
    const status = document.querySelector('.status-input').value;
    const fileInput = document.querySelector('#image-upload');
    const file = fileInput.files[0];

    if (status.trim() !== '' || file) { // Check if there's text or an image
        const postWall = document.querySelector('.post-wall');

        // Create new post element
        const newPost = document.createElement('div');
        newPost.className = 'post';

        let postContent = `
            <div class="post-header">
                <img src="/images/profile.webp" alt="User Profile" class="post-profile-pic">
                <h4>User Name</h4>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        if (status.trim() !== '') {
            postContent += `<p class="post-content">${status}</p>`;
        }

        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                postContent += `<img src="${e.target.result}" alt="User Image" class="post-image">`;
                newPost.innerHTML = postContent + `<small class="post-time">Just now</small>`;
                postWall.prepend(newPost);
                addDeleteFunctionality(newPost); // Add delete functionality after image is loaded
            };
            reader.onerror = function(e) {
                alert("Failed to read the image file.");
            };
            reader.readAsDataURL(file);
        } else {
            newPost.innerHTML = postContent + `<small class="post-time">Just now</small>`;
            postWall.prepend(newPost);
            addDeleteFunctionality(newPost);
        }

        // Clear the status input and file input
        document.querySelector('.status-input').value = '';
        fileInput.value = '';

        // Hide the preview after posting
        const preview = document.getElementById('image-preview');
        if (preview) {
            preview.src = '';
            preview.style.display = 'none';
        }
    } else {
        alert('Please enter some text or select an image to post.');
    }
});

function addDeleteFunctionality(postElement) {
    postElement.querySelector('.delete-btn').addEventListener('click', () => {
        postElement.remove();
    });
}

// Chat Functionality (Dummy)
document.querySelector('.send-btn').addEventListener('click', () => {
    const chatInput = document.querySelector('.chat-input').value;
    if (chatInput) {
        const chatContainer = document.querySelector('.chat-container');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message';
        messageDiv.innerHTML = `<p>${chatInput}</p>`;
        chatContainer.appendChild(messageDiv);
        document.querySelector('.chat-input').value = '';
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
});
