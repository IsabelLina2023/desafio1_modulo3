//pedida de numeros al usuario para comenzar cálculos

let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let num3 = document.getElementById("num3")
let num4 = document.getElementById("num4")
let num5 = document.getElementById("num5")
let suma = document.getElementById("suma")
let avg = document.getElementById("avg")

//se convierten los numers pedidos a numeros

let num_1 = parseInt(prompt ("Ingresa el número 1"))
let num_2 = parseInt(prompt ("Ingresa el número 2"))
let num_3 = parseInt(prompt ("Ingresa el número 3"))
let num_4 = parseInt(prompt ("Ingresa el número 4"))
let num_5 = parseInt(prompt ("Ingresa el número 5"))

//se muestran resultados en una bonita tabla

num1.innerHTML = num_1
num2.innerHTML = num_2
num3.innerHTML = num_3
num4.innerHTML = num_4
num5.innerHTML = num_5
suma.innerHTML = (num_1+num_2+num_3+num_4+num_5).toFixed(2)
avg.innerHTML = ((num_1+num_2+num_3+num_4+num_5)/5).toFixed(2)

//fin HTML
/*var n1_html = document.getElementById("nota1-html")
var n2_html = document.getElementById("nota2-html")
var n3_html = document.getElementById("nota3-html")
var avg_html = document.getElementById("avg-html")

var nota1HTML = parseInt(prompt ("Ingresa la nota 1 de HTML"))
var nota2HTML = parseInt(prompt ("Ingresa la nota 2 de HTML"))
var nota3HTML = parseInt(prompt ("Ingresa la nota 3 de HTML"))

n1_html.innerHTML = nota1HTML
n2_html.innerHTML = nota2HTML
n3_html.innerHTML = nota3HTML
avg_html.innerHTML = ((nota1HTML + nota2HTML + nota3HTML) /3).toFixed(2)*/