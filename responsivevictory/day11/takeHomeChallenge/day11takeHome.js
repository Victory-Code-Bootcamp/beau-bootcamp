const btn = document.getElementById("btn");
btn.addEventListener("click", function() {
    fetch(" https://pokeapi.co/api/v2/pokemon/snorlax")
.then(res => res.json())
.then(data => document.querySelector('.api').innerHTML=`${data.name}`)
  });



const button = document.getElementById("myButton");
button.addEventListener("click", function() {
    document.getElementById('btnClick').innerHTML="I've been clicked!";
    
  });
