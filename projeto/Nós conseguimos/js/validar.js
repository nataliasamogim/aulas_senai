class Validator {

    constructor() {
        this.validations = [
            'data-min-length',
            'data-max-length',
            'data-only-letters',
            'data-email-validate',
            'data-required',
            'data-equal',
            'data-password-validate',
        ]
    }
    //início da validação de todos os campos
    validate(form) {
        //limpar todas as validações antigas
        let currentValidations = document.querySelectorAll('form .error-validation'); //let para criação de variável
        if (currentValidations.length) {
            this.cleanValidations(currentValidations);//se estiver no tamanho dos caracteres corretos vai limpar
        }

        // pegar todos os inputs
        let inputs = form.getElementsByTagName('input');

        //colocar os inputs em uma lista(Array)
        let inputsArray = [...inputs];

        //loop para percorrer todos os inputs da lista(Array)
        inputsArray.forEach(function (input, obj) {

            //fazer validação de acordo com os atributos do input
            for (let i = 0; this.validations.length > i; i++) {
                if (input.getAttribute(this.validations[i]) != null) {

                    // limpa string para saber o método
                    let method = this.validations[i].replace("data-", "").replace("-", "");

                    // valor do input
                    let value = input.getAttribute(this.validations[i])

                    // invoca o método
                    this[method](input, value);

                }
            }
        }, this);
    }

    //Validar o número mínimo de caracteres

    minlength(input, minValue) {
        let inputLength = input.value.length;
        let errorMessage = `O campo precisa ter no mínimo ${minValue} caracteres`;

        if (inputLength < minValue) {
            this.printMessage(input, errorMessage);
        }
    }

    // Validar o número máximo de caracteres

    maxlength(input, maxValue) {
        let inputLength = input.value.length;
        let errorMessage = `O campo precisa ter no máximo ${maxValue} caracteres`;

        if (inputLength > maxValue) {
            this.printMessage(input, errorMessage);
        }
    }

    // Validar se tem apenas letras

    onlyletters(input) {
        let re = /^[A-Za-z]+$/;;
        let inputValue = input.value;
        let errorMessage = `Este campo aceita somente letras`;

        if (!re.test(inputValue)) {
            this.printMessage(input, errorMessage);
        }
    }

    // Validar e-mail

    emailvalidate(input) {
        let re = /\S+@\S+\.\S+/;
        let email = input.value;

        let errorMessage = `Insira um e-mail no padrão tointo@listatarefa.com`;

        if (!re.test(email)) {
            this.printMessage(input, errorMessage);
        }

    }

    //Validar campos obrigatórios
    
    required(input) {

        let inputValue = input.value;
    
        if(inputValue === '') {
          let errorMessage = `Este campo é obrigatório`;
    
          this.printMessage(input, errorMessage);
        }
    
    }

    // Validar a senha

    passwordvalidate(input){
        let charArr = input.value;
        let errorMessage = `A senha precisa ter pelo menos um caractere maiúsculo, um número, um caractere minúsculo e um caractere especial`
        let regex = /^(?=.*[@!#$%^&*()/\\])[@!#$%^&*()/\\a-zA-Z0-9]{8,15}$/;
        
        if (!regex.test(charArr)) {
            this.printMessage(input, errorMessage)
        }
    }

    //Verificar se os campos de senha estão iguais

    equal(input, inputName) {
        let inputToCompare = document.getElementsByName(inputName)[0];

        let errorMessage = `Este campo precisa ser igual ao campo da senha`;

        if (input.value != inputToCompare.value) {
            this.printMessage(input, errorMessage);
        }
    }


    // Imprimir mensagem de erro

    printMessage(input, msg) {

        //Checar os erros presentes no input
        let erroQtd = input.parentNode.querySelector('.error-validation');

        //Imprimir erro se a variável for nula
        if (erroQtd === null) {
            let template = document.querySelector('.error-validation').cloneNode(true);

            template.textContent = msg;

            let inputParent = input.parentNode;

            template.classList.remove('template');

            inputParent.appendChild(template);
        }
    }

    // remove todas as validações para fazer a checagem novamente
    cleanValidations(validations) {
        validations.forEach(el => el.remove());
    }
}

//limpar o form
function limpaForm() {

    const formulario = document.querySelector('#cadastrar');
    formulario.reset();
}

let form = document.getElementById('cadastrar');
let submit = document.getElementById('btn_cadastrar');

let validator = new Validator();

// evento de envio do form, que valida os inputs
submit.addEventListener('click', function (e) {
    e.preventDefault();

    validator.validate(form);
});



