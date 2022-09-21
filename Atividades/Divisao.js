let dividendo = Number(prompt("Digite aqui o dividendo da equação"));
let divisor = Number(prompt("digite o valor do divisor da equação"));
let quociente = Math.floor(dividendo/divisor);
let resto = dividendo % divisor;

alert("o resultado da divisao é: " + quociente+" e o resto é: "+resto);