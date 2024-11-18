document.getElementById("addNote").addEventListener("click", function () {
    const noteInput = document.getElementById("noteInput");
    const notesList = document.getElementById("notesList");

    if (noteInput.value) {
        const li = document.createElement("li");
        li.textContent = noteInput.value;
        notesList.appendChild(li);
        noteInput.value = "";
    }
});
