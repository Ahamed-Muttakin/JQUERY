const user='Muttakin';
const pword='123456';
$("#submit").click(function(){
    const name=$("#username").val();
    const pass=$("#password").val();
    if(name==user&&pass==pword)
        {
            window.location="slide menu/index.html";
        }
    else
        alert("Username or Password is incorrect");
});

