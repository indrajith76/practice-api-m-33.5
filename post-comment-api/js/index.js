const loadComments = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await res.json()
    commentsData(data)
}

const commentsData = comments => {
    const commentContainer = document.getElementById('comment-container');
    for(let i = 0; i < 20; i++) {
        console.log(comments[i]);
        const comment = comments[i];
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('col');
        commentDiv.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Post ID : ${comment.postId}</h5>
                    <p class="card-text">${comment.body.slice(0, 100)}</p>
                    <button onclick="postDetails('${comment.postId}')" class="btn btn-outline-primary">View Post</button>
                </div>
            </div>
        `;
        commentContainer.appendChild(commentDiv);
    }
}


const postDetails = id => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPost(data))
};

const displayPost = post => {
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = `
        <div class="container">
            <h4 class='text-light'>Post Title : ${post.title}</h4>
            <p class='text-light'>${post.body}</p>
        </div>
    `
}


loadComments()