document.getElementById('meuFormulario').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede a página de recarregar
  alert('Formulário enviado com sucesso!');
});