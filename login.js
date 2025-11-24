let pass = document.getElementById("pass");
let confpass =  document.getElementById("confpass");
document.getElementById("closeLogin").addEventListener('click', () => {
    console.log("click")
    document.getElementById("loginOverlay").style.display="none";
});

document.getElementById("login").addEventListener('click',() =>{
    console.log("clickedddddddd");
    document.getElementById("loginOverlay").style.display="flex";
});

document.getElementById("register").addEventListener('click',() => {
    console.log("click aytu");
    document.getElementById("signupBox").style.display="block";
    document.getElementById("loginbox").style.display="none";
});
document.getElementById("submit-btn2").addEventListener('click',() => {
    if (pass.value !== confpass.value){
        
        alert("Please enter same password");
        
    }else{
        alert("SIGNUP SUCCESSFULL");
        document.getElementById("signupBox").style.display="none";
        document.getElementById("loginbox").style.display= "block";
    }
})