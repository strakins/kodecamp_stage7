
function getItem(id) {
    let local_data = JSON.parse(localStorage.getItem("data"))

    let copied_data = local_data.find(function(ele) {
        return ele.id === id
    })

    return copied_data
}


function singlePost() {
    const selectId = parseInt(new URLSearchParams(window.location.search).get('id'));
    console.log("selectId:", selectId)
    let item = getItem(selectId)

    document.querySelector(".numb_post").textContent = item.id;
    document.querySelector(".post-title").textContent = item.title;
    document.querySelector(".post-body").textContent = item.body

}

singlePost()


















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

// getPosts ();





// const myPost = document.querySelector('#post-layout');

// myPost.addEventListener('submit', function(e) {

//     e.preventDefault()

//     const currentNum = document.querySelector('#numb_post');
//     const currentTitle = document.querySelector('#title_post');
//     const currentBody = document.querySelector('#body_post');

//     const namePara = document.querySelector('.namePara');
//     const emailPara = document.querySelector('.emailPara');
//     const messagePara = document.querySelector('.messagePara');

//     localStorage.setItem('postid', (currentNum));
//     localStorage.setItem('posttopic', (currentTitle));
//     localStorage.setItem('postBody',  (currentBody));
    
//     console.log(currentNum, currentTitle, currentBody);

//     namePara.innerHTML =  `${localStorage.getItem('numb_post')}`;
//     emailPara.innerHTML =  `${localStorage.getItem('title_post')}`;
//     messagePara.innerHTML =  `${localStorage.getItem('body_post')}`;
// });

