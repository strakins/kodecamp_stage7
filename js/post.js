

// let postTitle = document.getElementById('post-title');
// let postBody = document.getElementById('post-body');
// let postForm = document.querySelector('#post_form')

// postForm.addEventListener('submit', createPost)


let postLayout = document.getElementById('post-layout')
console.log(postLayout)


function allPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data) => {
        // console.log(data)
        
        
        let contents = "";

        localStorage.setItem("data", JSON.stringify(data))
        data.forEach(e => {
            // console.log(element)
            contents += `
            <div class="col-md-4 mb-3">
                <div class="card">
                    <div class="card-body" style="height: 300px;">
                        <div class="d-flex justify-content-end">
                        <h5 class="mx-2 text-danger">${e.id}</h5>
                        </div>

                        <h5 class="post-title mb-4">${e.title}</h5>
                        <p class="post-body">${e.body}</p>
                    </div>
                    <div class="text-center py-2">
                        <button id="click" onclick="pagePost(event)" class="btn btn-danger" data-id=${e.id}> Read More</button>
                    </div>
                </div>
            </div>
            `
            postLayout.innerHTML =  contents

        });
    })
}

allPosts();


function pagePost(e) {
    let dataId = e.target.getAttribute("data-id")
    window.location = `./post.html?id=${dataId}`
}

// function createPost(e) {
//     e.preventDefault();
//     let pTitle = postTitle.value; 
//     let pBody = postBody.value;
//     console.log('Post Title', pTitle)
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'pTitle',
//             body: 'pBody',
//             userid: '5'
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         }
//     })
//     .then((response) => response.json())
//     .then((data) => {
//         console.log('post', data)
//         alert('Post Created Successfully')
//     }) 
// }


// function page(id) {
//     localStorage.setItem("postid", id);
    
//     postId = localStorage.getItem("postid");
//     console.log(postId);

//     fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//     .then(response => response.json())
//     .then((e) => {
//         // console.log(data)
//         let postLayout = document.getElementById('post-layout')
//         // userPost = data
//         let contents = "";
//         // data.forEach(e => {
//             // console.log(element)
//             contents = `
//             <div class="p-5">
//                 <div class="card bg-dark" onclick="page()">
//                     <div class="card-body">
//                         <div class="d-flex justify-content-end">
//                         <h5 class="mx-2 text-white">${e.id}</h5>
//                         </div>

//                         <h5 class="post-title mb-4 text-white">${e.title}</h5>
//                         <p class="post-body text-white">${e.body}</p>
//                     </div>
//                     <div class="text-center py-2">
//                         <a href="index.html"><button type="submit" class="btn btn-danger text-white text-center"> > All Posts</button></a>
//                     </div>
//                 </div>
//             </div>
//             `
//             postLayout.innerHTML =  contents
           

//         });
//     // })
    
// }

