/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

// Definimos la llave de encriptacion con el objeto KEY
const KEY = {  
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat',  
  }

var btnEncode = document.querySelector("#btn-encode");
var btnDecode = document.querySelector("#btn-decode");
var btnCopy = document.querySelector("#btn-copy");
var msgEncode = document.querySelector("#input-text");
var msgDecode = document.querySelector("#output-text");

// Eventos 'click' para los botones
btnEncode.addEventListener("click", function(e){
  var emsg = msgEncode.value;
  msgDecode.value = encoder(emsg, KEY);
  e.preventDefault();
});

btnDecode.addEventListener("click", function(e){
  var dmsg = msgEncode.value;
  msgDecode.value = decoder(dmsg, KEY);
  e.preventDefault();
});

btnCopy.addEventListener("click", cp_outputbox_to_clipboard)


// Encriptamos lo ingresado en la caja de texto
function encoder(msg, KEY) {     
    Object.keys(KEY).forEach(k => msg = msg.replaceAll(k, KEY[k]));    
    return msg;
}

// Desencriptamos lo ingresado en la caja de texto
function decoder(msg, KEY) {
  const IKEY = swap_key_value(KEY);  
  Object.keys(IKEY).forEach((k) => msg = msg.replaceAll(k, IKEY[k]));  
  return msg;
};


/* Funcion swap_key_value() para invertir el par clave/valor
de la KEY y asi llevar a cabo la desencriptacion. 
*/
function swap_key_value(KEY) {
  var ret = {};
  for (var key in KEY) {
    // proceso de inversion par clave/valor
    ret[KEY[key]] = key;
  }
  return ret;
};

// Copiamos el contenido de InputBox de salida y lo pegamos en el portapapeles
function cp_outputbox_to_clipboard() {  
  if (!msgDecode.disabled) {
    msgDecode.select();
    document.execCommand("copy");
    alert("Texto copiado!")
  }
}
