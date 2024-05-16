document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#customer_insert');
    const inputElms = form.querySelectorAll('input, select');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        inputElms.forEach((input) => {
            input.classList.remove('is-error');
            const errorMessage = input.nextElementSibling;
            if (errorMessage && errorMessage.classList.contains('errorMessage')) {
                errorMessage.textContent = '';
            }
        });

        let isValid = true;
        inputElms.forEach((input) => {
            if (!input.checkValidity()) {
                input.classList.add('is-error');
                const errorMessage = input.nextElementSibling;
                if (errorMessage && errorMessage.classList.contains('errorMessage')) {
                    errorMessage.textContent = input.validationMessage;
                }
                isValid = false;
            }
        });

        if (!isValid) {
            return;
        }

        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get("id");

        const formData = new FormData(form);
        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        const json = {
            'method' : 'edit', 
            'id' : id,
            'data': jsonData
        };

        const url = 'Customer_Controller.php';

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(json),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            alert("成功しました。")
            window.location.href = "./search.php";
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    inputElms.forEach((input) => {
        input.addEventListener('invalid', (e) => {
            const currentTarget = e.currentTarget;
            currentTarget.classList.add('is-error');
            const errorMessage = currentTarget.nextElementSibling;
            if (errorMessage && errorMessage.classList.contains('errorMessage')) {
                errorMessage.textContent = currentTarget.validationMessage;
            }
        });
    });
});