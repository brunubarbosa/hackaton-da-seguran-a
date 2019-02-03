export default function()  {
    return `<div class="containerr">
    <div class="group fisrt">      
        <input type="text" required>
        <span class="highlight"></span>
        <span class="bar"></span>
        <label class="label-input-text">Solicitante *</label>
    </div>
            
    <div class="group">      
        <input type="text" required>
        <span class="highlight"></span>
        <span class="bar"></span>
        <label class="label-input-text">RG</label>
    </div>

</div>


<div class="containerr">
    <div style="display: flex">

        <div class="group">      
          <input type="text" required>
          <span class="highlight"></span>
          <span class="bar"></span>
          <label class="label-input-text">Bairro</label>
        </div>
          
        <div class="group">      
          <input type="text" required>
          <span class="highlight"></span>
          <span class="bar"></span>
          <label class="label-input-text">Telefone</label>
        </div>
    </div>
      
    </div>

    <div class="containerr">
            <div style="display: flex">

                <div class="group">      
                  <input type="text" required>
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label class="label-input-text">Ponto de fererência</label>
                </div>
                  
                <div class="group">      
                  <input type="text" required>
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label class="label-input-text">Email</label>
                </div>
            </div>
              
            </div>
            <div class="wraper-submitCadastro">
                <button id="submitCadastroOcorrencia">Enviar</button>
            </div>`
}