const modalExcluir = document.getElementById('modalExcluir');
modalExcluir.addEventListener('show.bs.modal', function (event) {
  const botaoClicado = event.relatedTarget;
  const tagDoTexto = botaoClicado.parentElement.querySelector('.sensor-manage-main-text');
  const nomeDoSensor = tagDoTexto.textContent.trim();
  modalExcluir.querySelector('#sensorNome').textContent = nomeDoSensor;
});
document.getElementById("voltarsensor").onclick = () => {
    window.location.href = "Sensor.html";
}