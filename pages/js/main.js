
$("#slider2").owlCarousel(
    {

            margin:15,
            loop:true,
            // autoWidth:true,
            items:3,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:false,
                    center:true,
                    loop:false
                   
        
                },
                620:{
                    items:2,
                    nav:false,
                    margin:0
                },
                930:{
                    items:3,
                    nav:false
                    
                },
                1200:{
                    items:4,
                    nav:false
                    
                }
            }
        }
);


function insertDataHtml(data) {
    $(".film-poster h1").html(data.name);
    var img = document.querySelector(".film-poster img");
   
    img.src = "/img/posters/" + data.name + ".jpg";
    $(".film-poster img").css("display","none").fadeIn(500);

    $(".film-year").html(data.year);
    $(".film-country").html(data.country);
    $(".film-director").html(data.director);
    $(".film-genre").html(data.genre);
    $(".film-descr").html(data.descr);

    

}

$(".slider2-item").click(function() {
    
    var src = this.attributes['src'].value;
    var src2 = src.slice(0,-4);
    var src3 = src2.slice(12);
    var dataa = JSON.stringify({
        filmName:src3
    });
   
       if ($(".film-poster h1").html() ==  src3) {
  
        return;
        }
    $.ajax({
        type: "POST",
        url: "/",
        contentType: 'application/json',
        data: dataa,
        success: function(data){
        //   console.log(data);
       
          insertDataHtml(data);
        }
      });
 
       
     
});

$('#signO').click(function(e) {
    e.preventDefault();
    $("#fon").slideDown();
    $("#registration").slideDown();
 

});

$('#signI').click(function(e) {
    e.preventDefault();
    $("#fon").slideDown();
    $("#signIn").slideDown();
  

});
function check () {
    if(window.location.pathname == '/book') {
        window.location.pathname = '/'
    }
};
$('#registration form').click(function(e){
 
    if(e.target == e.currentTarget){
        $("#fon").slideUp();
        $("#signIn").slideUp();
        $("#registration").slideUp();
        check();
    }
 });

 $('#signIn form').click(function(e){
        if(e.target == e.currentTarget){
            $("#fon").slideUp();
            $("#signIn").slideUp();
            $("#registration").slideUp();
            check();
            
            
        }
 
     
 });
 $('#fon').click(function(){
 
    $("#fon").slideUp();
    $("#signIn").slideUp();
    $("#registration").slideUp();
    check();
});

$('#autologin').click(function(e){
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "/signIn",
        contentType: 'application/json',
        data: JSON.stringify({
            name : 'test',
            password: '1'
        }),
        success: function(data){
            if (data.str != 'ok') {
                warning.html(data);
            } else {
                check();
                $("#fon").slideUp();
                console.log($("#reg").css("display"));
                
                $("#signIn").slideUp();
                
                $("#reg").css({"display": "none"});
    
                $("#auth").css("display", "block");
                $("#auth").html(data.user + ' ' +' <a href="/logOut">LogOut</a>');
            }
         
          
        }
      });
});

$("#registration form").submit(function(e){
    e.preventDefault();
    var warning = $('#registration .warning');
    var name = $("#registration #inputName1").val();
    var password = $("#registration #inputPassword1").val();
    var repassword = $("#registration #inputPassword2").val();

    if(password != repassword) {
        warning.html("пароли не совпадают");
        return;
    }
    var dataa = JSON.stringify({
        name : name,
        password: password
    });
    
    $.ajax({
        type: "POST",
        url: "/signOut",
        contentType: 'application/json',
        data: dataa,
        success: function(data){
          if (data.str != 'ok') {
              warning.html(data.str);
          } else {
            $("#fon").slideUp();
            console.log($("#reg").css("display"));
            
            $("#registration").slideUp();
            
            $("#reg").css({"display": "none"});

            $("#auth").css("display", "block");
            $("#auth").html(data.user + ' '+ ' <a href="/logOut">LogOut</a>');
          }
          
          
        }
      });

    
});

$("#signIn form").submit(function(e){
    e.preventDefault();
    var warning = $('#signIn .warning');
    var name = $("#signIn #inputName2").val();
    var password = $("#signIn #inputPassword3").val();
   
    warning.html('');
    var dataa = JSON.stringify({
        name : name,
        password: password
    });
 
    console.log(dataa);
    $.ajax({
        type: "POST",
        url: "/signIn",
        contentType: 'application/json',
        data: dataa,
        success: function(data){
            if (data.str != 'ok') {
                warning.html(data);
            } else {
                check();
                $("#fon").slideUp();
                console.log($("#reg").css("display"));
                
                $("#signIn").slideUp();
                
                $("#reg").css({"display": "none"});
    
                $("#auth").css("display", "block");
                $("#auth").html(data.user + ' ' +' <a href="/logOut">LogOut</a>');
            }
         
          
        }
      });

    
});




