$(function (done) {
    $.get('/post',(data)=>{
        done(data)
    })
})

function postBody(data) {
    return $(``)
}