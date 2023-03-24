function btns(){
  const numero = document.getElementById("numero").value;
  
  const tabuada = document.getElementById("tabuada1");
  const alerta = document.getElementById("aviso_msg");
  
  tabuada.innerHTML = numero + "x" + "1" + "=" + (numero*1);
  
  tabuada2.innerHTML = numero + "x" + "2" + "=" + (numero*2);
  
  tabuada3.innerHTML = numero + "x" + "3" + "=" + (numero*3);
  
  tabuada4.innerHTML = numero + "x" + "4" + "=" + (numero*4)
  
  tabuada5.innerHTML = numero + "x" + "5" + "=" + (numero*5)
  
  tabuada6.innerHTML = numero + "x" + "6" + "=" + (numero*6)
  
  tabuada7.innerHTML = numero + "x" + '7' + '=' + (numero*7)
  
  tabuada8.innerHTML = numero + 'x' + "8" + "=" + (numero*8)
  
  tabuada9.innerHTML = numero + "x" + '9' + '=' + (numero*9)
  
  tabuada10.innerHTML = numero + 'x' + '10' + '=' + (numero*10)
  
  if(numero == ""){
    aviso_msg.innerHTML = "Digite um número!"
  }else{
    aviso_msg.innerHTML = "Tabuada Completa"
  }
}
