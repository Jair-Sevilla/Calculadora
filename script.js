let display = document.getElementById("display");

//Esta es la forma antigua de usar funciones
function appendValue (value){
    console.log ("El valor que llega es: " + value);
    display.value += value;
}

//Esta es la forma moderna de usar funciones
const clearDisplay = () =>{
    display.value= "";
}

const calculateResult = () => {
    try {
       display.value = eval(display.value) 
    } catch (error) {
        alert("Hay un error en la operación");
        clearDisplay()
    }
}
