
$(".hall-main").droppable({
   accept: '.space',
   drop: function(event, ui) {
     
       
       $(this).append($(".space").clone());
       $(".hall-main .space").addClass("item");
       $(".item").removeClass("ui-draggable space");
       var q = $(".item:last");
       var left = +q.css("left").replace(/[^-0-9]/gim,'')-$(".hall-main")[0].offsetLeft;
       var top = +q.css("top").replace(/[^-0-9]/gim,'')-$(".hall-main")[0].offsetTop ;

       q.css({"left":left+"px", "top": top+"px" } );
       var item = $(".item");
       item[item.length-2].remove();

        if(top > 405 || top < 40 || left< 35 || left > 815) {
            item[item.length-1].remove();  
        }
       
       $(".item").draggable({
           containment: '.hall-main',
           grid: [20,20],
           snap: true,
           stop: function() {
           
            var top = $(this).css("top").replace(/[^-0-9]/gim,'');
            var left = $(this).css("left").replace(/[^-0-9]/gim,'');
            if(top > 405 || top < 40 || left< 35 || left > 815) {
                $(this).remove();  
            }
            
          }
    
       });
       $(".item").droppable ({
           accept: ".item",
           drop: function(e,ui) {
               ui.draggable.remove();
              
           }
       })
    
   }
}); 


$(".space2").draggable({
   
   grid: [20,20],
   containment: ".main",
   helper: 'clone'



});


$(".space").draggable({
   
   grid: [20,20],
   containment: ".hall-main",
   helper: 'clone'



});
