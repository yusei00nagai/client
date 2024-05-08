document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#customer_edit');
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    form.addEventListener('submit', function(event) {
        alert("成功しました。")
        window.location.href = "./search.php";
        event.preventDefault(); 

        const formData = new FormData(form);
        const json = {
            'method' : 'edit', 
            'id' : id,
            'data': jsonData = {}
        };

        formData.forEach((value, key) => {
            jsonData[key] = value;
        });
        
        console.log(json);

        const url = 'Customer_Controller.php';

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(json)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});