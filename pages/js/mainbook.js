$('#datepicker').datepicker({
    format: 'dd/mm/yyyy',
    minDate: 0, 
    maxDate:"+10D"
});


var dataHalls;

var checkAsync = true;

$(".cinema-info").click(function(){
    if (!checkAsync) {
        return;
    }
    checkAsync = false;
    var date =$('#datepicker').datepicker("getDate");
    var options = {
   
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timezone: 'UTC'
  
  };

   

    var dateNormal = date.toLocaleString("ru", options);

    
    
    var cinemaName = this.attributes[1].value;

    var data = JSON.stringify({
        date: dateNormal,
        cinema: cinemaName
    });
    var insertSelector = document.querySelector("#row-insert");
    insertSelector.innerHTML = '<div class="col-md-12"><h2 id="getDate" class="text-center"></h2></div>';

    $("#getDate").html(dateNormal +" ("+ cinemaName +")");
    if (date != null) {
        $.ajax({
            type: "POST",
            url: "/book",
            contentType: 'application/json',
            data: data,
            success: function(data){
               dataHalls = data.halls;

               var dateNow = new Date;
               var timeNow = dateNow.getHours() * 60 + dateNow.getMinutes() + 10;


                data.halls.forEach(function(item, i, arr) {

                    
                    
                    var colMd = document.createElement('div');
                    insertSelector.appendChild(colMd);
                    colMd.className = "col-md";
                    colMd.id = item.name;
                    colMd.innerHTML = '<div class="book-time d-flex book-time d-flex flex-column"></div>';
                    idDiv = "#" + item.name;

                    var selector = idDiv + " " + ".book-time" ;
                   
                        $( selector).html('<h1 class="text-center">'+ item.name + '</h1>');
                        var cinema = item.name;
               
                   
                    item.seanse.forEach(function(item, i, arr){
                        
                        // console.log(+item.time.slice(0,2));
                        // console.log(+(item.time.slice(3)));
                        var timeItem = +(item.time.slice(0,2)) * 60 + (+(item.time.slice(3)));
                       console.log(dateNow.toLocaleString("ru", options));
                       console.log(timeItem, timeNow);
                        if ( dateNow.toLocaleString("ru", options) != dateNormal) {
                         var a = '<a href="/hall" class="book-time-item" ' + 'data-time=' + item.time + ' '+'data-name=' + cinema +'>' + item.time +' '+item.nameFilm +'</a>';
                        $(selector).html($( selector ).html()+ a) ;
                        } else if (timeItem > timeNow) {
                            var a = '<a href="/hall" class="book-time-item" ' + 'data-time=' + item.time + ' '+'data-name=' + cinema +'>' + item.time +' '+item.nameFilm +'</a>';
                            $(selector).html($( selector ).html()+ a) ;
                        } else {
                            var a = '<a href="/hall" class="book-time-item disabled" ' + 'data-time=' + item.time + ' '+'data-name=' + cinema +'>' + item.time +' '+item.nameFilm +'</a>';
                            $(selector).html($( selector ).html()+ a) ;
                        }
                    });
                   
                });

                checkAsync = true;

                
                
            }
            
        });
    } else {
        alert('дата не выбрана');
    }

    $(".book-choice").slideUp();
});

 $('#row-insert').click(function(e) {
                    e.preventDefault();
                    var a = e.target;
                    console.log(a.attributes["data-time"]);
                    if (a.attributes["data-time"] == undefined){
                       return;
                    }
                    var time = a.attributes["data-time"].value;
                    var name =a.attributes["data-name"].value;
                    var hallNum;
                    var timeNum;

                    dataHalls.forEach(function(item, i, arr) {
                        if (item.name == name) {
                            hallNum = i;
                        }
                    });
                    dataHalls[hallNum].seanse.forEach(function(item, i, arr) {
                        if (item.time == time) {
                            timeNum = i;
                        }
                    });


                    var dataa = JSON.stringify({
                        hall: name,
                        time: time,
                        hallNum: hallNum,
                        timeNum: timeNum
                    });
                    $.ajax({
            
                        type: "POST",
                        url: "/hall",
                        contentType: 'application/json',
                        data: dataa,
                        success: function(data){ 
                            console.log(a.attributes.href.value);
                            window.location = a.attributes.href.value;

                        }

                    });
                    

                           
                   

                });

