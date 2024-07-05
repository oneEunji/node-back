"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("#loginBtn");


loginBtn.addEventListener("click",login);

function login(){
    const req = {
        id: id.value,
        psword: psword.value,
    };
    console.log(id.value);
    console.log(req);
    console.log(JSON.stringify(req));
    
    fetcgh("/login" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    });

}

