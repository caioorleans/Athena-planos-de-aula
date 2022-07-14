const data = {
    id: 0,
    idRecurso: 2,
    titulo: "O ratinho amarelo",
    conteudo: "Tinha um ratinho aí",
    autor: "Caio",
    disciplina: {
      id: 1,
      descricao: "string"
    },
    descritores: [
      {
        id: "MAT002",
        descricao: "string"
      }
    ],
    ehPublico: false
  };

function enviarNovoPlano(){
  event.preventDefault();
    fetch("http://localhost:8080/planosDeAula", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
      });
}
