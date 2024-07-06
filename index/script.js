document.getElementById('calculateButton').addEventListener('click', function() {
    // Obter os valores dos campos
    const interno = parseFloat(document.getElementById('interno').value);
    const gaveta = parseFloat(document.getElementById('gaveta').value);
    const nGaveta = parseFloat(document.getElementById('nGaveta').value);
    const ferro = document.getElementById('booleanCorre').checked;
    const fogao = document.getElementById('booleanFogao').checked;

    // Verificar se os valores são números válidos
    if (isNaN(interno) || isNaN(gaveta) || isNaN(nGaveta)){
        alert('Por favor, preencha todos os campos ou insira valores numéricos válidos.');
        return;
    }

    // Realizar o cálculo com base nos valores e no campo booleano
    let result;
    let auxG;
    let auxI;
    let vao;

    if (!fogao){

        if (!ferro) {

            //obtem altura consumidas pelas gavetas do espaço interno (somo o que passa com corrediça forte)
            auxG = gaveta * nGaveta + 0.3
    
            //obtem vão disponível do interno (subtraio vão padrão de cima sem fogão)
            auxI = (interno - 2) - auxG
    
            //obtem vão entre gavetas
            vao = auxI / (nGaveta - 1) 
    
            //obtem vão entre ferragens (subtraio tamanho da corrediça forte)
            result = vao + (gaveta - 3.5)
    
        } else {
    
            //obtem altura consumidas pelas gavetas do espaço interno (somo o que passa com corrediça forte)
            auxG = gaveta * nGaveta + 0.2
    
            //obtem vão disponível do interno (subtraio vão padrão de cima sem fogão)
            auxI = (interno - 2) - auxG
    
            //obtem vão entre gavetas
            vao = auxI / (nGaveta - 1) 
    
            //obtem vão entre ferragens (subtraio tamanho da corrediça fraca)
            result = vao + (gaveta - 2)
        }

    } else {
        //elaborar
    }   
    // Exibir o resultado
    document.getElementById('result').textContent = `Calço necessário: ${result.toFixed(2)} cm`;
});
