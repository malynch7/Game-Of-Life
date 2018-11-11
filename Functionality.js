          alert("i am here");
           var IncrementMain=0;
           var finalNumber=0;
           var IntoString="";
           var PreSelected1=0;
           var PreSelected2=0;
           var PreSelected3=0;
           var PreSelected4=0;
           var PreSelected5=0;
            $(document).ready(function() {
                  grid(10,10);
                  stay();
                });

            $("#button1").click(function(){
                  var option1 = document.getElementById("Options");

                  var strUser = option1.options[option1.selectedIndex].value;
                  var theNumber=" ";
                    for(var i=0;i<2;i++){
                        theNumber = theNumber + strUser.charAt(i);
                    }
                    StrToInt = parseInt(theNumber);
                  grid(StrToInt, StrToInt);
                  stay();
                });
              function stay(){

                    $('td').click(function() {
                        if ($(this).hasClass('HighLight'))
                            $(this).removeClass('HighLight');
                        else
                            $(this).addClass('HighLight');
                    });
              }
                function grid(rows, cols) {
                  finalNumber=0;
                  var StrToInt = 0;
                  IncrementMain=0;
                  var table = "<table>";
                  var size = (1 / rows * 525) + "px";

                  for (i=0; i<rows; i++) {
                    table += "<tr>";
                    for (j=0; j<cols; j++) {
                      var IntoString = IncrementMain.toString();
                      table += "<td id="+IntoString+">"+"</td>";
                      IncrementMain++;
                    }
                    table += "</tr>";
                  }
                  table += "</table>";
                  $("#container").empty().append(table);
                  $("tr").css("height", size);
                  $("td").css("color", "red").css("width", size);
                  alert(rows);
                  alert(cols);
                  if(rows==10 && cols==10){
                  $("#44").addClass('HighLight');
                  $("#55").addClass('HighLight');
                  $("#63").addClass('HighLight');
                  $("#64").addClass('HighLight');
                  $("#65").addClass('HighLight');
                }
                  if(rows==15 && cols==15){
                    $("#96").addClass('HighLight');
                    $("#112").addClass('HighLight');
                    $("#127").addClass('HighLight');
                    $("#126").addClass('HighLight');
                    $("#125").addClass('HighLight');
                  }
                  if(rows==20 && cols==20){
                    $("#208").addClass('HighLight');
                    $("#209").addClass('HighLight');
                    $("#169").addClass('HighLight');
                    $("#190").addClass('HighLight');
                    $("#210").addClass('HighLight');
                  }
                  if(rows==25 && cols==25){
                    $("#286").addClass('HighLight');
                    $("#336").addClass('HighLight');
                    $("#312").addClass('HighLight');
                    $("#337").addClass('HighLight');
                    $("#335").addClass('HighLight');
                  }
                  if(rows==30 && cols==30){
                    $("#434").addClass('HighLight');
                    $("#465").addClass('HighLight');
                    $("#495").addClass('HighLight');
                    $("#494").addClass('HighLight');
                    $("#493").addClass('HighLight');
                  }
                  if(rows==35 && cols==35){
                    $("#4").addClass('HighLight');
                    $("#451").addClass('HighLight');
                    $("#481").addClass('HighLight');
                    $("#126").addClass('HighLight');
                    $("#125").addClass('HighLight');
                  }
                }
