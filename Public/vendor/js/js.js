function fechPost(done) {
    $.get('/post',(data)=>{
        done(data)
    })
}

function postBody(data) {
    return $(`<div class="card mb-4">
                    <img class="card-img-top" src="${data.image_path}" alt="Card image cap">
                    <div class="card-body">
                        <h2 class="card-title">${data.title}</h2>
                        <p class="card-text">${data.content}</p>
                        <a href="#" class="btn btn-primary">UPVOTE :)</a>
                    </div>
                    <div class="card-footer text-muted">
                        Posted on ${data.date} by
                        <a href="#">${data.username}</a>
                    </div>
                </div>`)
}

$(function () {

     const post = $("#postbody");
    post.empty()
         fechPost(function (posts){

             for(let i=0;i<posts.length;i++){
                 post.append(postBody(posts[i]))
             }
         }
    )
})
