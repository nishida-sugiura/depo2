var params = (new URL(document.location)).searchParams;
var key = params.get('key');

//let daytime2 = document.getElementById("textArea").value.trim();

$(function () {
    // 送信
    $('form').submit(function () {
  
        var s_code = $('input[name="serialcode"]').val();
        


        // var date = $('input[name="date"]').val();
        // var tool = $('input[name="tool"]').val();
        
  //var breed = obj.filter(function(input) {
  //return input.name.match(/breed/);});

    
        
        
    let msg={};
        

     


       msg = ["code：" + s_code] ;　 //トークに送信する内容

        
        
        sendText(String(msg)); 
      
        return false;
        
    });
}
 
 


/* 
   * liff.sendMessages()
   * Botにメッセージを送信する
   */
  document.getElementById('sendstatusbutton').addEventListener('click', function () {
    liff.sendMessages([
      {
        type: 'text',
        text: "今のポイント"
      }
    ]).then(function () {
      window.alert("Message sent");
    }).catch(function (error) {
      window.alert("Error sending message: " + error);
    });
  });


  
 
 
 );





