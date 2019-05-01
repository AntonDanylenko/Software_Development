function make_HTML_heading(f){
    function txt(){f();}
    function inner(){
        return '<h1>' + txt + '</h1>';
    }
    return inner;
}

function greet(){
    var greetings = ['Hello', 'Welcome', 'AYO!', 'Hola', 'Bonjour', 'Word up'];
    return random.choice(greetings);
}

function greet_heading(){ make_HTML_heading(greet);}

function random_heading(){
  document.getElementById("heading").innerHTML = greet_heading();
}
