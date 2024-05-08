document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#customer_insert');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const formData = new FormData(form);
        const json = {
            'method' : 'insert', 
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
            alert("成功しました。");
            window.location.href = "./search.php";
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});