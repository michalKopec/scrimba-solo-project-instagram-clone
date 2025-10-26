import { posts } from './data.js'

function getFeedHtml() {
    let feedHtml = '';

    posts.forEach(function(post) {
        feedHtml += `
            <section class="painter-info">
                <img class="avatar" src="${post.avatar}" alt="Painters avatar">
                <div class="painter-details">
                    <h1>${post.name}</h1>
                    <h2>${post.location}</h2>
                </div>
            </section>
            <section class="painting">
                <img class="img-painting" src="${post.post}" alt="artist painting">
            </section>
            <footer>
                <div class="social-icons">
                    <img class="social-icon" src="/images/icon-heart.png" alt="tap here to like">
                    <img class="social-icon" src="/images/icon-comment.png" alt="tap here to comment">
                    <img class="social-icon" src="/images/icon-dm.png" alt="tap here to direct message">
                </div>
                <p class="likes">${post.likes} likes</p>
                <p class="comments"><span class="comment-user-id">${post.username}</span> ${post.comment}</p>
            </footer>
        `
    })
    return feedHtml; 
}

function render() {
    document.querySelector('#feed-content').innerHTML = getFeedHtml();   
}

render(); 