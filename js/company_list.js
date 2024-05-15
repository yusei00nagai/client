window.onload = list();

function list() {

    const json = {
        'method' : 'list',
        'data' : {
        }
    };

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
        displayData(data.data);
        selectData(data.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
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