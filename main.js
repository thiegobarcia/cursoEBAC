function validar(event) {
    event.preventDefault();
    
    let campoA = document.getElementById("campoA").value.trim()
    let campoB = document.getElementById("campoB").value.trim()

    const resultado = document.getElementById("resposta")
    const inputs = document.querySelectorAll("#form input")
    
    campoA = Number(campoA);
    campoB = Number(campoB);
    
    if( campoA === campoB) {
        resultado.textContent = "B = A"
        resultado.style.color = "#FF0000"

    } else if(campoA < campoB) {
        resultado.textContent = "B > A"
        resultado.style.color = "#007d00"
    } else {
        resultado.textContent = "B < A"
        resultado.style.color = "#FF0000"
        
    }

    inputs.forEach(input => input.value = "")
    document.getElementById("campoA").focus();

}
document.getElementById("form").addEventListener("submit", validar);