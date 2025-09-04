//Busca os elementos a partir da classe e atribui novo valor


        var título = document.querySelector("h2");
        título.textContent = "Lucas Nutrição"

        var tsecundario = document.querySelector("h1");
        tsecundario.textContent = "Dados pacientes"

 //Cria a variável paciente e busca o elemento a partir da classe e muda seu conteúdo       
        var pacientes = document.querySelectorAll(".paciente");
        for(var i = 0; i < pacientes.length; i++){
                var paciente = pacientes[i];

                var tdpeso = paciente.querySelector(".info-peso");
        var peso = tdpeso.textContent;

//busca o elemento altura e altera o conteúdo dele
        var tdaltura = paciente.querySelector(".info-altura");
        var altura = tdaltura.textContent;

//executa o calculo do imc
        var IMC = peso / (altura * altura);
        
        //valores booleanos
        var pesoValido = true;
        var alturaValida = true; 

        if(pesoValido && alturaValida){

                var tdIMC = paciente.querySelector(".info-imc");
                tdIMC.textContent = IMC.toFixed(2);
        }


        //alerta caso o peso e a altura sejam inválidos
        if(peso <= 0|| peso >= 1000){
                var pesoValido = false; 
                tdIMC.textContent = "Peso Inválido !";
               tdIMC.classList.add("paciente-invalido");
        }
      

        if(altura < 0|| altura > 3.00){
                var alturaValida = false;
                tdIMC.textContent = "Altura inválida !"
                tdIMC.classList.add("paciente-invalido");
        }

       
        }


     