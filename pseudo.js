Inicio
    var a;
    var b;
    var resultado;
    leer a;
    leer b;
    si a == "es un numero" Y b=="es un numero" entonces
        resultado = a + b;
    fsi
    escribir resultado;
fin

Inicio
    var entrada;
    si entrada =="no es un numero" entonces
        escribir "Error entrada debe ser un numero";
    fsi
    si entrada =="es un numero"  entonces
        var inicio = 0;
        mientras (entrada > inicio ) hacer
            escribir "El valor de entrada es= "+ entrada;
            inicio = inicio + 1;
        fmientras
    fsi
fin

