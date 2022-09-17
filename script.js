document.querySelector('#btn').addEventListener('click', () => {
    let comment = document.querySelector('#comment'); 
    let commentChecked = comment.value.replace(/xxx|viagra/ig, "***");
    let newComment = document.createElement("div");
    let name = document.getElementById('username');
    // let img = document.getElementById('img');
    let avatar = document.getElementById('avatar');
    console
    
    newComment.innerHTML = `${name.value}: ${commentChecked} <br><br>`;
    
    let x = document.createElement("img");
    x.width='50';
    x.height='50';
    x.style.borderRadius = "50%"
    if(!avatar.value) {
    x.src = './anonymous.png';
    
    } else {
        x.src = avatar.value;
    }
    document.querySelector('.comments').append(x);
    document.querySelector('.comments').append(newComment);

    if (comment.value == "") {
        newComment.style.display = "none";
        x.style.display = "none";
    }
    else {
        newComment.style.display = "block";
    }


    comment.value = "";
    name.value = "";
    avatar.value = "";
    })


