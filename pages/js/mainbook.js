$('#datepicker').datepicker({
    format: 'dd/mm/yyyy',
    minDate: 0, 
    maxDate:"+10D"
});

// $('.footer').click(function(){
//  console.log($('#datepicker').datepicker("getDate") );
//   });



$(".main").mousedown(function(e){
    e.preventDefault();
} );


$(".main").droppable({
   accept: '.space, .space2',
   drop: function(event, ui) {
       if (ui.draggable[0].classList[0] == "space"){
       
       $(this).append($(".space").clone());
       $(".main .space").addClass("item");
       $(".item").removeClass("ui-draggable space");
       var q = $(".item:last");
       var left = +q.css("left").replace(/[^-0-9]/gim,'')-$(".main")[0].offsetLeft + "px";
       var top = +q.css("top").replace(/[^-0-9]/gim,'')-$(".main")[0].offsetTop + "px";

       q.css({"left":left, "top": top } );
       var item = $(".item");
       item[item.length-2].remove();
       
       $(".item").draggable({
           containment: '.main',
           grid: [20,20],
           snap: true
       });
       $(".item").droppable ({
           accept: ".item",
           drop: function(e,ui) {
               
           }
       })
   } else {
       $(this).append($(".space2").clone());
       $(".main .space2").addClass("item2");
       $(".item2").removeClass("ui-draggable space2");
       var q = $(".item2:last");
       var left = +q.css("left").replace(/[^-0-9]/gim,'')-$(".main")[0].offsetLeft + "px";
       var top = +q.css("top").replace(/[^-0-9]/gim,'')-$(".main")[0].offsetTop + "px";

       q.css({"left":left, "top": top } );
       var item = $(".item2");
       item[item.length-2].remove();
       
       $(".item2").draggable({
           containment: '.main',
           grid: [20,20],
           snap: true
       }); 
   }
   }
}); 


$(".space2").draggable({
   
   grid: [20,20],
   containment: ".main",
   helper: 'clone'



});


$(".space").draggable({
   
   grid: [20,20],
   containment: ".main",
   helper: 'clone'



});