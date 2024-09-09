function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado</p>"
       return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
//  console.log(campoPesquisa)

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado no array 'dados' e constrói o HTML para cada resultado
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
              <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
          `;
        } 
        console.log(dado.titulo.includes(campoPesquisa));
      // Cria um novo elemento de resultado com o título, descrição e link do dado
      
    }


    if (!resultados) {
        resultados = "<p>Nada foi encontrado.</p>"
    }

  
    // Insere o HTML gerado na seção HTML selecionada
    section.innerHTML = resultados;
  }



