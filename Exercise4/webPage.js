function colorChange(){
  var redBorder=document.getElementById("redB").value;
  var blueBorder=document.getElementById("blueB").value;
  var greenBorder=document.getElementById("greenB").value;
  var redBack=document.getElementById("redBackground").value;
  var blueBack=document.getElementById("blueBackground").value;
  var greenBack=document.getElementById("greenBackground").value;
  var widBorder=document.getElementById("widB").value;
      if(redBorder<0||greenBorder<0||blueBorder<0||redBorder>255||greenBorder>255||blueBorder>255){
        alert("Input the correct color value");
      }
      else if(widBorder<0){
        alert("Input the correct Border width");
      }
      else if(redBack<0||greenBack<0||blueBack<0||redBack>255||greenBack>255||blueBack>255){
        alert("Input the correct color value");
      }

        text.style.borderColor='rgb('+greenBorder+','+blueBorder+','+redBorder+')';
        text.style.backgroundColor='rgb('+redBack+','+greenBack+','+blueBack+')';
        text.style.borderWidth=widBorder;

}
