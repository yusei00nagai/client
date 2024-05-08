function editId(e) {
    const strId = e.id;
    const id = strId.replace('chenge-button', '');
    console.log(e.id);

    chengeButton(id);

    const checkBtn = document.querySelector('#chenge-button' + id);
    console.log(id);


    checkBtn.addEventListener('click', function(event) {
        event.preventDefault(); 
        // const form = document.querySelector('#company_edit');
        // const formData = new FormData(form);

        const json = {
            'method' : 'edit', 
            'data': {
                'id' : id,
                'company_name': document.getElementById('company' + id).value
            }
        };
        
        console.log(json);

        const url = 'Company_Controller.php';

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(json)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert("成功しました。")
            window.location.href = "./data.php";
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
};

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
            button.type = "button";
        }
    
}