window.onload = getId();

function getId() {

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    const json = {
        method : 'getId',
        data :  {
            id : id
        }
    };

    console.log(json);

    const url = "Customer_Controller.php";

    fetch(url, {
        method : 'POST',
        body : JSON.stringify(json),
        headers : {
            'Content-Type' : 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        displayData(data.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error)
    });
}

function displayData(data) {
    if (!data || data.length === 0) return;

    const userData = data[0];

    document.getElementById('user-name').value = userData.user_name;
    document.getElementById('user-name-kana').value = userData.user_kana;
    document.getElementById('user-mail').value = userData.user_mail;
    document.getElementById('user-phone').value = userData.user_phone;
    document.getElementById('user-born').value = userData.user_born;
    document.getElementById('user-company-3').value = userData.company_id;

    if (userData.user_sex === 'man') {
        document.getElementById('man').checked = true;
    } else {
        document.getElementById('woman').checked = true;
    }
}