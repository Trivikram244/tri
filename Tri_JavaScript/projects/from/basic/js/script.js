function readIng(event){
    var users=[];
    var email = document.getElementById('inputEmail4').value;
    var commi = document.getElementById('result');
    commi.innerHTML = "<p>" + email +"</p>";
    event.preventDefault();
}

