function logging(){
    var a="123@abc.com";
    var b="123456";
    if(a==document.getElementById("namesi").value && b==document.getElementById("passwdi").value)
    {
        alert("Thanks You for signing in!!")
        alert("You will be redirected to the home page")
        
        window.location="index.html"
        
    }
    else{
        alert("Wrong Email or Password")
    }

}

function checker(){

    var a1=document.getElementById("passwd").value;
    var b1=document.getElementById("cpasswd").value;
    if(a1==b1){
        document.getElementById("give").innerHTML="Matching";
    }
    else{
        document.getElementById("give").innerHTML="Your passwords don't match";
    }
}

function che(){
    var a3 = document.getElementById('name').value;
    if( /[^a-zA-Z]/.test( a3 ) ) {
     
     document.getElementById("message").innerHTML="Name has to be Alphabets";
       
    }
    else{
        document.getElementById("message").innerHTML="";
    }   
 }


 function everyThing(){
    var a4 = document.getElementById('name').value;
    var b4=document.getElementById("passwd").value;
    var c4=document.getElementById("cpasswd").value;

    if( /[^a-zA-Z]/.test( a4 )   ){
        alert("Name should only contain Alphabets")
        return false;
    }
    else if(b4!==c4 ){
        alert("Passwords do not match")
    }
    else if(b4.length<6){
        alert("Password should be atleast 6 charecters")
    }
    else
     {
         alert("Thank you for registering")
         alert("You will be redirected to the home page")
         window.location="index.html"
     }
 }