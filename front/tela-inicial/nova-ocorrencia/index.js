$( document ).ready(function() {
    console.log('teste')
    let fragmentoFluxoNormal = `<input type="checkbox" name="" id="">
    <input type="text">`

    let fragmentoFluxoMedidaProtetiva = `
        <input type="text">
        <input type="checkbox" name="" id="">
        <input type="checkbox" name="" id="">
        <input type="checkbox" name="" id="">
        <input type="checkbox" name="" id="">
        <input type="checkbox" name="" id="">
        <input type="checkbox" name="" id="">
    `
    $("input[name='tipoFluxo']").on('change', () => {
        console.log('teste')
        if($("#isMedidaProtetiva").is(':checked')) {
            document.getElementById('js--wraper-tipo-fluxo').innerHTML=fragmentoFluxoNormal
        } else {
            document.getElementById('js--wraper-tipo-fluxo').innerHTML=fragmentoFluxoMedidaProtetiva
        }

    }) 

});