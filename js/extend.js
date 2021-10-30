

// function page() {
//     window.location.assign("post.html")  
    
// }

// function getPosts() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then((data) => {
//         console.log(data)
//         let postLayout = document.getElementById('post_page')
//         // userPost = data
//         let contents = "";
//         data.forEach(e => {
//             // console.log(element)
//             contents = `
//             <div class=" mb-3">
                
//                     <div class="card-body">
//                         <div class="d-flex justify-content-end">
//                         <h5 class="mx-2 text-danger">${e.id}</h5>
//                         </div>

//                         <h5 class="post-title mb-4 text-primary">${e.title}</h5>
//                         <p class="post-body text-primary">${e.body}</p>
//                     </div>
//                     <div class="text-center">
//                 <a href="index.html"><button class="btn btn-info text-center">Home</button></a>
//                 </div>
               
//             </div>
//             `
//             postLayout.innerHTML =  contents

//         });
//     })
// }

// getPosts();





// const myPost = document.querySelector('#post-layout');

// myPost.addEventListener('submit', function(e) {

//     e.preventDefault()

//     const currentNum = document.querySelector('#numb_post');
//     const currentTitle = document.querySelector('#title_post');
//     const currentBody = document.querySelector('#body_post');

//     const namePara = document.querySelector('.namePara');
//     const emailPara = document.querySelector('.emailPara');
//     const messagePara = document.querySelector('.messagePara');

//     localStorage.setItem('postid', JSON.stringify(currentNum));
//     localStorage.setItem('posttopic', JSON.stringify(currentTitle));
//     localStorage.setItem('postBody', JSON.stringify(currentBody));
    
//     console.log(currentNum, currentTitle, currentBody);

//     namePara.innerHTML =  `${localStorage.getItem('numb_post')}`;
//     emailPara.innerHTML =  `${localStorage.getItem('title_post')}`;
//     messagePara.innerHTML =  `${localStorage.getItem('body_post')}`;
// });

