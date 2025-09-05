let lastName = document.getElementById("lastName");
let firstName = document.getElementById("firstName");
let postBtn = document.getElementById("postBtn");
let ul = document.getElementById("ul");


let getData = async function () {
    let response = await fetch(
        "https://68bab9bf84055bce63eff647.mockapi.io/api/v1/products", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }
    );
    let data = await response.json();
    console.log(data);
    ul.innerHTML = ""

    data.forEach((item) => {
        let li = document.createElement("li");

        li.innerHTML = `
        <img width="50" src=${item.avatar} alt="">
        <h2>${item.name}</h2> 
        <p> ${item.price} </p>
        <button>Edit</button>
        <button>Delete</button>
    `

        ul.appendChild(li)
    })


};

getData();


let postData = async function () {
    let response = await fetch(
        "https://68bab9bf84055bce63eff647.mockapi.io/api/v1/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: lastName.value,
            price: firstName.value,
        }),
    }
    );

    getData();
    console.log(response);
};


postBtn.addEventListener("submit", (e)=>{
    e.preventDefault()
    postData()
});