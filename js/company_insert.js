document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#company_insert');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const json = {
            'method': 'insert',
            'data': {
                'company_name': formData.get('company-name')
            }
        };

        const url = 'Company_Controller.php';

        fetch(url, {
                method: 'POST',
                body: JSON.stringify(json)
            })
            .then(response => response.json())
            .then(data => {
                alert("成功しました。");
                window.location.href = "./data.php";    //リロードで良い？
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

});