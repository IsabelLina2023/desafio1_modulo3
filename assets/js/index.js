//se pide al usuario que ingrese un numero mayor que 0
let num1=prompt("Ingrese un número mayor que 0")
//se convierte el string a numero
num1=parseInt(num1)
//se pide al usuario que ingrese un segundo numero mayor que 0
let num2=prompt("Ingrese un segundo número mayor que 0")
//se convierte el string a numero
num2=parseInt(num2)

//se muestran todos los resultados de las sgtes operaciones en pantalla
document.write("La suma de ambos números es:")
document.write(num1+num2)
document.write("<br>")
document.write("La resta de ambos números es:")
document.write(num1-num2)
document.write("<br>")
document.write("La multiplicación de ambos números es:")
document.write(num1*num2)
document.write("<br>")
document.write("La división de ambos números es:")
document.write(num1/num2)
document.write("<br>")
document.write("El resto de la división de ambos números es:")
document.write(num1%num2)
document.write("<br>")

