let username = document.getElementById("username");
console.log(username);
let distance = document.getElementById('distance');
let age = document.getElementById('age');
let generate = document.getElementById('generate');
let cancel = document.getElementById('cancel');
let price;

generate.addEventListener ('click',
    function () {
        document.getElementById("passenger").innerHTML= username.value;
        document.getElementById("carriage").innerHTML= username;
        document.getElementById("code").innerHTML= username;
        

        let price = parseInt(distance.value) * 0.21;

        if (age.value === "over-65") {
            let price = parseInt(distance.value) * 0.21;
            document.getElementById("price").innerHTML= (price * 0.8).toFixed(2);
            console.log(price * 0.8)
            document.getElementById("offer").innerHTML= 'offerta over 65';
        }
        else if (age.value === "minorenne") {
            let price = parseInt(distance.value) * 0.21;
            document.getElementById("price").innerHTML= (price * 0.6).toFixed(2);
            document.getElementById("offer").innerHTML= 'offerta minorenni';
        }
        else {
            let price = parseInt(distance.value) * 0.21;
            document.getElementById("price").innerHTML= parseInt(price).toFixed(2);
            document.getElementById("offer").innerHTML= 'prezzo standard';
        } 
 
    }
    );