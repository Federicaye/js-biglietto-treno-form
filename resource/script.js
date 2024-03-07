let username = getElementById(username);
let distance = getElementById(distance);
let age = getElementById(age);
let generate = getElementById(generate);
let cancel = getElementById(cancel);

generate.addEventListener (click,
    function () {
        document.getElementById("passenger").innerHTML= username.value;
        document.getElementById("carriage").innerHTML= username;
        document.getElementById("code").innerHTML= username;
        document.getElementById("price").innerHTML= username;

    }
    )