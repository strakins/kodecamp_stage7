

let postTitle = document.getElementById('post-title');
let postBody = document.getElementById('post-body');
let postForm = document.querySelector('#post_form')

postForm.addEventListener('submit', createPost)

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        let postLayout = document.getElementById('post-layout')
        // userPost = data
        let contents = "";
        data.forEach(e => {
            // console.log(element)
            contents += `
            <div class="col-md-4 mb-3">
                <div class="card" onclick="page()">
                    <div class="card-body">
                        <div class="d-flex justify-content-end">
                        <h5 class="mx-2 text-danger">${e.id}</h5>
                        </div>

                        <h5 class="post-title mb-4">${e.title}</h5>
                        <p class="post-body">${e.body}</p>
                    </div>
                    <div class="text-center py-2">
                        <button type="submit" class="btn btn-primary" >Read More</button>
                    </div>
                </div>
            </div>
            `
            postLayout.innerHTML =  contents

        });
    })
}

getPosts();

function createPost(e) {
    e.preventDefault();
    let pTitle = postTitle.value; 
    let pBody = postBody.value;
    console.log('Post Title', pTitle)
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'pTitle',
            body: 'pBody',
            userid: '5'
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('post', data)
        alert('Post Created Successfully')
    }) 
}

