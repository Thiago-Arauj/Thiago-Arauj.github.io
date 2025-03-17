// Selecionando elementos
const btnMudarCor = document.getElementById("btnMudarCor");
const btnToggle = document.getElementById("btnToggle");
const btnAdicionar = document.getElementById("btnAdicionar");
const container = document.getElementById("container");

document.addEventListener("DOMContentLoaded", () => {
    const storedTheme = localStorage.getItem("theme");
    
    if (storedTheme === "dark") {
      document.body.classList.add("darkMode");
    }
  });

// Toggle dark mode
btnMudarCor.addEventListener("click", () => {
    document.body.classList.toggle("darkMode");
    if (document.body.classList.contains("darkMode")){
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light")
    }
});

// Esconder/Mostrar o texto
btnToggle.addEventListener("click", () => {
    container.classList.toggle("oculto");
});


// Adicionar um novo elemento dinamicamente
btnAdicionar.addEventListener("click", () => {
    // Criando uma div interior para poder ter mais customização
    if (document.getElementById("entrada").value){
        let innerContainer = document.createElement("div");
    innerContainer.className = "inner";

    let novoParagrafo = document.createElement("p")
    novoParagrafo.textContent = document.getElementById("entrada").value;
    document.getElementById("entrada").value = "";

    let btnPocket = document.createElement("div");
    btnPocket.className = "buttons";

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "deleter";
    deleteBtn.onclick = () => innerContainer.remove()

    let editBtn = document.createElement("button");
    editBtn.textContent = "Editar";
    editBtn.className = "edit";

    btnPocket.appendChild(deleteBtn)
    btnPocket.appendChild(editBtn)

    innerContainer.appendChild(novoParagrafo)
    innerContainer.appendChild(btnPocket)
    

    editBtn.onclick = () => {
        let parent = editBtn.parentElement.parentElement;
        let btnParent = editBtn.parentElement;
        let originalText = parent.querySelector("p").textContent;
        
        let inputField = document.createElement("input");
        inputField.value = originalText;
        inputField.className = "edit-input";
        
        parent.replaceChild(inputField, parent.querySelector("p"));
        
        let saveBtn = document.createElement("button");
        saveBtn.textContent = "Salvar";
        saveBtn.className = "save";

        saveBtn.onclick = () => {
            let newParagraph = document.createElement("p");
            newParagraph.textContent = inputField.value;
            parent.replaceChild(newParagraph, inputField);
            btnParent.appendChild(editBtn);
            btnParent.removeChild(saveBtn);
        };
        
        btnParent.replaceChild(saveBtn, editBtn);
    }

    container.appendChild(innerContainer);
    }    
});
