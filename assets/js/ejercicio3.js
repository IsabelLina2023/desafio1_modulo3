/*ingreso de primeras variables*/
const año=365
const semana=7

let num
/*obtener número desde el usuario*/
num=prompt("Ingresa un numero de días y te lo desglosaré en años, semanas y días....Y no te imaginas cuánto me costó traducir esto a javaScript ;)")
num=parseInt(num)

/*después de mucho sudar pude calcular como mostrar esta respuesta*/
alert(`Esto equivale a: ${Math.floor(num/año)} año(s), ${Math.floor((num % año)/semana)} semana(s) y ${Math.floor((num % año) % semana)} día(s)`)


//var numeroDecimal = 7.89;
//var numeroRedondeado = Math.floor(numeroDecimal);
//console.log(numeroRedondeado); 