

// -func insertValuePlace----------------------------------------------------

function insertValuePlace(item) {
   
    $("#book-send .value-all").html($(item).length);

    $("#book-send .value-vip").html($(".vip-color").length);
    $("#book-send .value-custom").html($(".custom-color").length);

}


//BIG HALL--------------------------------------------------------------
$(".hall-main-big").droppable({
   accept: '.space-big',
   drop: function(event, ui) {
     
       
       $(this).append($(".space-big").clone());
       $(".hall-main-big .space-big").addClass("item");
       $(".item").removeClass("ui-draggable space-big");
       var q = $(".item:last");
       var left = +q.css("left").replace(/[^-0-9]/gim,'')-$(".hall-main-big")[0].offsetLeft;
       var top = +q.css("top").replace(/[^-0-9]/gim,'')-$(".hall-main-big")[0].offsetTop ;

       q.css({"left":left+"px", "top": top+"px" });
       var item = $(".hall-main-big .item");
       item[item.length-2].remove();

        if(top > 405 || top < 40 || left< 35 || left > 815) {
            q.remove();  
        }
        if(top > 104 & top < 276 & left < 556 & left > 294 ) {
            item[item.length-1].classList.add("vip-color");
        } else {
            item[item.length-1].classList.add("custom-color");
        }
        
       insertValuePlace(".item");
       
       $(".item").draggable({
           containment: '.hall-main-big',
           grid: [25,25],
           snap: true,
           stop: function() {
           
            var top = $(this).css("top").replace(/[^-0-9]/gim,'');
            var left = $(this).css("left").replace(/[^-0-9]/gim,'');
            if(top > 405 || top < 65 || left< 35 || left > 815) {
                $(this).remove();
          
            }

            if(top > 104 & top < 276 & left < 556 & left > 294 ) {
                $(this).removeClass("custom-color");
                $(this).addClass("vip-color");
                // $(this).css({"background-color": "#ff0060",'border' :"none"});
            } else {
                $(this).removeClass("vip-color");
                $(this).addClass("custom-color");
                // $(this).css({"background-color": "rgb(168, 168, 168)",'border' :"none"});
            }
            insertValuePlace(".item");
          }
    
       });
       $(".item").droppable ({
           accept: ".item, .space-big",
          
           drop: function(e,ui) {
               
              
              if(ui.draggable.hasClass("space-big")) {
                $(".item:last").remove();
              } else {
               ui.draggable.remove();
              }
              insertValuePlace(".item");
           }
       })
    
   }
}); 




$(".space-big").draggable({
   
   grid: [25,25],
   containment: ".hall-main-big, .item",
   helper: 'clone'
   



});

//end BIG HALL-------------------------------------------

//VIP HALL----------------------------------------------
$(".hall-main-vip").droppable({
    accept: '.space-vip',
    drop: function(event, ui) {
      
        
        $(this).append($(".space-vip").clone());
        $(".hall-main-vip .space-vip").addClass("item-vip");
        $(".item-vip").removeClass("ui-draggable space-vip");
        var q = $(".item-vip:last");
        var left = +q.css("left").replace(/[^-0-9]/gim,'')-$(".hall-main-vip")[0].offsetLeft;
        var top = +q.css("top").replace(/[^-0-9]/gim,'')-$(".hall-main-vip")[0].offsetTop ;
 
        q.css({"left":left+"px", "top": top+"px" });
        var item = $(".hall-main-vip .item-vip");
        item[item.length-2].remove();
 
         if(top > 313 || top < 88 || left< 25 || left > 625) {
             q.remove();  
         }
         if(top > 137 & top < 214 & left < 426 & left > 199 ) {
             item[item.length-1].classList.add("vip-color");
         } else {
             item[item.length-1].classList.add("custom-color");
         }
         
         insertValuePlace(".item-vip");
        $(".item-vip").draggable({
            containment: '.hall-main-vip',
            grid: [25,25],
            snap: true,
            stop: function() {
            
             var top = $(this).css("top").replace(/[^-0-9]/gim,'');
             var left = $(this).css("left").replace(/[^-0-9]/gim,'');
             if(top > 313 || top < 88 || left< 25 || left > 625) {
                 $(this).remove();
           
             }
 
             if(top > 137 & top < 214 & left < 426 & left > 199 ) {
                 $(this).removeClass("custom-color");
                 $(this).addClass("vip-color");
             } else {
                 $(this).removeClass("vip-color");
                 $(this).addClass("custom-color");
             }
             
             insertValuePlace(".item-vip");
           }
     
        });
        $(".item-vip").droppable ({
            accept: ".item-vip, .space-vip",
           
            drop: function(e,ui) {
                if(ui.draggable.hasClass("space-vip")) {
                    $(".item-vip:last").remove();
                  } else {
                   ui.draggable.remove();
                  }
                  insertValuePlace(".item-vip");
            }
        })
     
    }
 }); 
 
 
 
 
 $(".space-vip").draggable({
    
    grid: [25,25],
    containment: ".hall-main-vip, .item-vip",
    helper: 'clone'
    
 
 
 
 });
 //end vip hall----------------------------------------------

//  small hall--------------------------------------
$(".hall-main-small").droppable({
    accept: '.space-small',
    drop: function(event, ui) {
      
        
        $(this).append($(".space-small").clone());
        $(".hall-main-small .space-small").addClass("item-small");
        $(".item-small").removeClass("ui-draggable space-small");
        var q = $(".item-small:last");
        var left = +q.css("left").replace(/[^-0-9]/gim,'')-$(".hall-main-small")[0].offsetLeft;
        var top = +q.css("top").replace(/[^-0-9]/gim,'')-$(".hall-main-small")[0].offsetTop ;
 
        q.css({"left":left+"px", "top": top+"px" });
        var item = $(".hall-main-small .item-small");
        item[item.length-2].remove();
 
         if(top > 243 || top < 68 || left< 25 || left > 350) {
             q.remove();  
         }
         if(top > 92 & top < 169 & left < 251 & left > 124 ) {
             item[item.length-1].classList.add("vip-color");
         } else {
             item[item.length-1].classList.add("custom-color");
         }
         
         insertValuePlace(".item-small");
        
        $(".item-small").draggable({
            containment: '.hall-main-small',
            grid: [25,25],
            snap: true,
            stop: function() {
            
             var top = $(this).css("top").replace(/[^-0-9]/gim,'');
             var left = $(this).css("left").replace(/[^-0-9]/gim,'');
             if(top > 243 || top < 68 || left< 25 || left > 350) {
                 $(this).remove();
           
             }
 
             if(top > 92 & top < 169 & left < 251 & left > 124 ) {
                 $(this).removeClass("custom-color");
                 $(this).addClass("vip-color");
             } else {
                 $(this).removeClass("vip-color");
                 $(this).addClass("custom-color");
             }

             insertValuePlace(".item-small");
             
           }
     
        });
        $(".item-small").droppable ({
            accept: ".item-small, .space-small",
           
            drop: function(e,ui) {
                if(ui.draggable.hasClass("space-small")) {
                    $(".item-small:last").remove();
                    console.log(ui.draggable.hasClass("space-small"));
                  } else {
                   ui.draggable.remove();
                  }
               
                  insertValuePlace(".item-small");
            }
        })
     
    }
 }); 
 
 
 
 
 $(".space-small").draggable({
    
    grid: [25,25],
    containment: ".hall-main-small, .item-small",
    helper: 'clone'
    
 
 
 
 });

// --end small-hall-----------------------------------------------

// get-insert book-item---------------------------------------

var coords = JSON.parse($("#book-hall")[0].attributes['data-coords'].value);
var date = $("#book-hall")[0].attributes['data-date'].value;
var cinema = $("#book-hall")[0].attributes['data-cinema'].value;
var hall = $("#book-hall")[0].attributes['data-hall'].value;

$('#hall-info .seanse-info').html(date +' '+ cinema + ' ('+ hall+')');

var itemClass;
var spaceclass;
console.log(coords.length);
if (coords.length != 0) {
    coords.forEach(function(item, i, arr){
        var div = document.createElement('div');
        div.className = 'book-item';
        div.style.top = item.top;
        div.style.left = item.left;

        var left = item.left.replace(/[^-0-9]/gim,'');
        var top = item.top.replace(/[^-0-9]/gim,'');
        console.log(top,left);
        switch (hall) {
            case 'small':

                itemClass = '.item-small';
                spaceclass = '.space-small';
                if(top > 92 & top < 169 & left < 251 & left > 124 ) {
                    div.classList.add("vip-color2");
                } else {
                    div.classList.add("custom-color2");
                }
              break;
            case 'vip':
                itemClass = '.item-vip';
                spaceclass = '.space-vip';
                if(top > 137 & top < 214 & left < 426 & left > 199 ) {
                    div.classList.add("vip-color2");
                } else {
                    div.classList.add("custom-color2");
                }
              
              
              break;
            case 'big':
                itemClass = '.item';
                spaceclass = '.space-big';
                if(top > 104 & top < 276 & left < 556 & left > 294 ) {
                    div.classList.add("vip-color2");
                } else {
                    div.classList.add("custom-color2");
                }

              break;
            default:
              alert( 'mistake book' );
          }


        $('#hall').append(div);

    });
} else {
   
    switch (hall) {
        case 'small':

            itemClass = '.item-small';
            spaceclass = '.space-small';
       
          break;
        case 'vip':
            itemClass = '.item-vip';
            spaceclass = '.space-vip';
        
          
          
          break;
        case 'big':
            itemClass = '.item';
            spaceclass = '.space-big';
       

          break;
        default:
          alert( 'mistake book' );
      }

}

$('.book-item').droppable ({
    accept: itemClass + ", " +spaceclass,
   
    drop: function(e,ui) {
   
        if(ui.draggable.hasClass(spaceclass.slice(1))) {
            
        $(itemClass + ":last").remove();
        } else{
        ui.draggable.remove();
        }
        insertValuePlace(itemClass);
    }
})


$('#book-button').click(function(){
    
    
    if($(itemClass).length==0) {
        alert("места не выбраны");
        return;
    }
    $(itemClass).each(function(indx, element){
      var newItem = {} ;
      newItem.top = element.style.top;
      newItem.left = element.style.left;
      console.log(newItem);
      coords.push(newItem);

 
      
    });
    
    $.ajax({
            
        type: "POST",
        url: "/hall-send",
        contentType: 'application/json',
        data: JSON.stringify(coords),
        success: function(data){ 
        //  console.log(data);
         alert("Места успешно забронированны");
         window.location = '/book';

        }

    });
    
});

