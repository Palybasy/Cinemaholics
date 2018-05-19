
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
   
    img.src = "http://localhost:8080/img/posters/" + data.name + ".jpg";
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


