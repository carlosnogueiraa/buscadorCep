function consultaEndereco() {
    let cep = document.querySelector('#cep').value;
    
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    
    if (cep.length !== 8) {
            alert('Cep Inválido');
            return;
        }
        
        fetch(url).then(function(response){
            response.json().then(mostrarEndereco);
        });
        
        
        
        function mostrarEndereco(data) {
            let result = document.querySelector('#result');
            document.getElementById("result").style.display = "block";
        if (data.erro) {
            result.innerHTML = "<p>Não foi possível localizar esse endereço</p>";
        } else {
            result.innerHTML = 
            `
                <h2>CEP: ${data.cep}</h2>
                <p>Endereço: ${data.logradouro}</p>
                <p>Complemento: ${data.complemento}</p>
                <p>Bairro: ${data.bairro}</p>
                <p>Cidade: ${data.localidade} - ${data.uf}</p>
            `
        }           
    }
    
}
