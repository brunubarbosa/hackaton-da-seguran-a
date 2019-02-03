$( document ).ready(function() {
    let arrayRG = ['51.263.443-52', '32.473.382-32', '33.221.432-98', '84.435.257-24', '99.956.481-08', '01.746.483-76', '84.837.493-03']
    let arrayRua = ['Rua Gonçalves Magalhães 46', 'Rua Sebastião de souza 37', 'rua José benedito 476', 'rua Gastão Vidigal 74', 'rua Coronel Souza Franco 473', 'Rua Aurora de Medeiros 47', 'Rua José Pleno Souza 487']
    let arrayTelefone = ['(11) 9 5343-4393', '(11) 9 5483-7493', '(11) 9 3839-6504', '(11) 9 6473-9382', '(11) 9 6483-4958', '(11) 9 8304-8374', '(11) 9 8291-0574']

    
   
    $("input[name='tipoFluxo']").on('change', () => {
        console.log('teste')
        if($("#isMedidaProtetiva").is(':checked')) {
            document.getElementById('inputs-fluxo-normal').style.display= "none";
            document.getElementById('wraper-maria-da-pena-inputs').style.display= "flex";
        } else {
            document.getElementById('inputs-fluxo-normal').style.display= "flex";
            document.getElementById('wraper-maria-da-pena-inputs').style.display= "none";
        }

    }) 

    $("#select-vitimas").on('change', ()=> {
        $('#conteudo-escondido-maria-penha').css('display', 'block')
        $('#nome-slicitante').val($("#select-vitimas").children("option:selected").val())
        let num = randomnum()
        console.log(num)
        $('#rg-solicitante').val(arrayRG[randomnum()])
        $('#telefone-solicitante').val(arrayTelefone[randomnum()])
        $('#endereco-solicitante').val(arrayRua[randomnum()])
    })

    function randomnum() {
        return Math.floor(Math.random() * (6 - 0 + 1) + 0)
    }

});