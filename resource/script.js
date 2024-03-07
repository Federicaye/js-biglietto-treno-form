let username = document.getElementById("username");
console.log(username);
let distance = document.getElementById('distance');
let age = document.getElementById('age');
let generate = document.getElementById('generate');
let cancel = document.getElementById('cancel');
let price = parceInt(distance.value) * 0.21;

generate.addEventListener ('click',
    function () {
        document.getElementById("passenger").innerHTML= username.value;
        document.getElementById("carriage").innerHTML= username;
        document.getElementById("code").innerHTML= username;
        document.getElementById("price").innerHTML= username;

        /* if (age.value === "over-65") {
            document.getElementById("price").innerHTML= (price * 0.8).toFixed(2);
            console.log(price * 0.8)
        }
        else if (age.value == "minorenne") {
            document.getElementById("price").innerHTML= (price * 0.6).toFixed(2);
        }
        else {
            document.getElementById("price").innerHTML= (price).toFixed(2);
        }
 */
    }
    );