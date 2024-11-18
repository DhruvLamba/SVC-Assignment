// Add event listener to the Add Note button
document.getElementById("addNote").addEventListener("click", function () {
    const noteInput = document.getElementById("noteInput");
    const notesList = document.getElementById("notesList");

    // Create a new note if the input is not empty
    if (noteInput.value) {
        const li = document.createElement("li");

        // Add the note text
        li.textContent = noteInput.value;

        // Create a delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.style.marginLeft = "10px";
        deleteButton.style.color = "red";
        deleteButton.style.border = "none";
        deleteButton.style.cursor = "pointer";

        // Attach an event listener to delete the note
        deleteButton.addEventListener("click", function () {
            notesList.removeChild(li);
        });

        // Append the delete button to the note
        li.appendChild(deleteButton);

        // Append the note to the notes list
        notesList.appendChild(li);

        // Clear the input field
        noteInput.value = "";
    }
});
