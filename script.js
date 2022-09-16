document.querySelector('#btn').addEventListener('click', () => {
    let comment = document.querySelector('#comment'); 
    let commentChecked = comment.value.replace(/xxx|viagra/ig, "***");
    let newComment = document.createElement("div");

    let name = document.getElementById('username');
    let img = document.getElementById('img');
    let avatar = document.getElementById('avatar');
    // img.src = avatar.src;

    // console.log(avatar.src);

    newComment.innerHTML = `${img} ${name.value}: ${commentChecked} <br><br>`;
    document.querySelector('.comments').append(newComment);

    



    if (comment.value == "") {
        newComment.style.display = "none";
    }
    else {
        newComment.style.display = "block";
    }




    comment.value = "";
    name.value = "";
    })


