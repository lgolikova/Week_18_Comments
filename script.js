document.addEventListener('DOMContentLoaded', function(event){
    let name1 = localStorage.getItem('name');
    if (name1!= null) {
        document.getElementById('username').value = name1;
    }
    let avatar1 = localStorage.getItem('avatar');
    if (avatar1!= null) {
        document.getElementById('avatar').value = avatar1;
    }
})

document.querySelector('#btn').addEventListener('click', () => {
    let comment = document.querySelector('#comment'); 
    let commentChecked = comment.value.replace(/xxx|viagra/ig, "***");
    let newComment = document.createElement("div");
    let username = document.getElementById('username');
    let avatar = document.getElementById('avatar');
    
    newComment.innerHTML = `${username.value}: ${commentChecked} <br><br>`;
    
    let img = document.createElement("img");
    img.width='50';
    img.height='50';
    img.style.borderRadius = "50%"
    if(!avatar.value) {
        img.src = 'anonymous.png';
    } else {
        img.src = avatar.value;
    }
    document.querySelector('.comments').append(img);
    document.querySelector('.comments').append(newComment);

    if (comment.value == "") {
        newComment.style.display = "none";
        img.style.display = "none";
    }
    else {
        newComment.style.display = "block";
    }

    comment.value = "";
    // username.value = "";
    // avatar.value = "";
})

document.querySelector('#save').addEventListener('click', () => {
    localStorage.clear();
    localStorage.setItem('name', username.value);
    localStorage.setItem('avatar', avatar.value);
})

document.querySelector('#clear').addEventListener('click', () => {
    localStorage.clear();
    username.value = "";
    avatar.value = "";
})

