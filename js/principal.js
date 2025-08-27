//Busca os elementos a partir da classe e atribui novo valor


        var pacientes = document.querySelector("h2");
        pacientes.textContent = "Lucas Nutrição"

        var pacientes = document.querySelector("h1");
        pacientes.textContent = "Dados pacientes"

 //Cria a variável paciente e busca o elemento a partir da classe e muda seu conteúdo       
        var paciente = document.querySelector("#primeiro-paciente");
        var tdpeso = paciente.querySelector(".info-peso");
        var peso = tdpeso.textContent;

//busca o elemento altura e altera o conteúdo dele
        var tdaltura = paciente.querySelector(".info-altura");
        var altura = tdaltura.textContent;

//executa o calculo do imc
        var IMC = peso / (altura * altura);
        var tdIMC = paciente.querySelector(".info-imc")
        tdIMC.textContent = IMC;


        console.log(tdpeso);
        console.log(peso);
        console.log(tdaltura);
        console.log(altura);