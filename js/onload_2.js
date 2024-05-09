window.onload = function() {
    list();
};

function list() {
    const json = {
        'method' : 'list',
        'data' : {
        }
    };

    console.log(json);

    const url = "Company_Controller.php";

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(json),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        displayData(data.data);
        selectData(data.data);
        getId();
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

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
        wdisplayData(data.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error)
    });
}

function displayData(data) {
    const companyList = document.getElementById('companyList');
    companyList.innerHTML = '';

    if(data.length === 0) {
        const emptyRow = document.createElement('tr');
        const emptyCell = document.createElement('td');
        emptyCell.setAttribute('colspan', '3');
        emptyCell.textContent = '会社一覧がありません。';
        emptyRow.appendChild(emptyCell);
        searchList.appendChild(emptyRow);
        return;
    }

    let tableHTML = '';

    data.forEach(item => {
        tableHTML += '<form action="" method="POST" id="company_edit">';
        tableHTML += '<tr id="' + item['id'] + '">';
        tableHTML += '<th class="chenge-text"><input id="company' + item['id'] + '" type="text" name="editName" value="' + item['company_name'] + '" disabled></th>';
        tableHTML += '<td><button type="button" id="chenge-button' + item['id'] + '" onclick="editId(this)" class="modal-button" name="customer_edit">編集</button></td>';
        tableHTML += '<td><a id="' + item['id'] + '" class="modal-button company-delete" onclick="deleteId(this)">削除</a></td>';
        tableHTML += '</tr>';
        tableHTML += '</form>';
    });
    companyList.innerHTML = tableHTML;
}

function selectData(data) {
    const selectElements = document.querySelectorAll('[id^="user-company"]');

    selectElements.forEach(selectElement => {
        data.forEach(item => {
            const option = document.createElement('option');
            option.id = item.id;
            option.value = item.id;
            option.textContent = item.company_name;
            selectElement.appendChild(option);
        });
    });
}

function wdisplayData(data) {
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