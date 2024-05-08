function chengeButton(index) {

    var inputElement = document.getElementById("company" + index);
    var button = document.getElementById("chenge-button" + index);

        if (!inputElement || !button) {
            console.error("Element not found");
            return;
        }

        if (inputElement.disabled) {
            inputElement.disabled = false;
            button.innerText = "完了";
            
        } else {
            inputElement.disabled = true;
            button.innerText = "編集";
            button.type = "submit";
        }
    
}

