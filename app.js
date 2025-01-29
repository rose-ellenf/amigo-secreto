//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
  // Lista de amigos
  let amigos = [];

  // Função para adicionar um amigo à lista
  function adicionarAmigo() {
    let nome = document.getElementById("amigo").value.trim();

    // Verifica se o campo está vazio
    if (nome === "") {
      alert("Por favor, adicione um nome.");
      return;
    }

    // Verifica se o nome já está na lista
    if (amigos.includes(nome)) {
      alert("Este nome já foi adicionado.");
      return;
    }

    // Adiciona o nome à lista
    amigos.push(nome);

    // Limpa o campo de entrada 
    document.getElementById("amigo").value = "";

    // Atualiza a lista de amigos na tela
    exibirAmigos();
  }

  // Função para exibir a lista de amigos na tela
  function exibirAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach((amigo) => {
      let li = document.createElement("li");
      li.textContent = amigo;
      lista.appendChild(li);
    });
  }

  // Função para sortear um amigo
  function sortearAmigo() {
    if (amigos.length === 0) {
      alert("Insira os nomes primeiro.");
      return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    document.getElementById("resultado").innerHTML = `Amigo sorteado: ${amigoSorteado}`;
  // Limpa campo de entrada após o sorteio
    document.getElementById("amigo").value = "";
  }

  // Adiciona eventos aos botões
  document.getElementById("adicionar-amigo").addEventListener("click", adicionarAmigo);
  document.getElementById("sortear-amigo").addEventListener("click", sortearAmigo);