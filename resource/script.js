let username = document.getElementById("username");
console.log(username);
let distance = document.getElementById('distance');
let age = document.getElementById('age');
let generate = document.getElementById('generate');
let cancel = document.getElementById('cancel');

generate.addEventListener ('click',
    function () {
        document.getElementById("passenger").innerHTML= username.value;
        document.getElementById("carriage").innerHTML= username;
        document.getElementById("code").innerHTML= username;
        document.getElementById("price").innerHTML= username;

    }
    );