window.onload = function() {
    list();
};

function list() {
    const json = {
        'method': 'list',
        'data': {}
    };

    const url = "Company_Controller.php";

    fetch(url, {
            method: 'POST',
            body: JSON.stringify(json),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            selectData(data.data);
            search();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function search() {
    const form = document.querySelector('#customer_search');

    const formData = new FormData(form);

    const json = {
        'method': 'search',
        'data': {}
    };

    formData.forEach((value, key) => {
        json.data[key] = value;
    });

    const url = "Customer_Controller.php";

    fetch(url, {
            method: 'POST',
            body: JSON.stringify(json),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            adisplayData(data.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
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

function adisplayData(data) {
    const searchList = document.getElementById('search_list');
    searchList.innerHTML = '';

    if(data.length === 0) {
        const emptyRow = document.createElement('tr');
        const emptyCell = document.createElement('td');
        emptyCell.setAttribute('colspan', '9');
        emptyCell.textContent = '顧客一覧がありません。';
        emptyRow.appendChild(emptyCell);
        searchList.appendChild(emptyRow);
        return;
    }

    let tableHTML = '';

    data.forEach(item => {
        tableHTML += '<tr id="' + item['id'] + '">';
        tableHTML += '<td>' + item['id'] + '</td>';
        tableHTML += '<td>' + item['user_name'] + '(' + item['user_kana'] + ')' +'</td>';
        tableHTML += '<td>' + item['user_phone'] + '<br>' + item['user_mail'] + '</td>';
        tableHTML += '<td nawrap>' + item['company_name'] + '</td>';
        tableHTML += '<td nowrap>' + item['insert_time'] + '<br>' + item['update_time'] +'</td>';
        tableHTML += '<td><a href="./try.php?id=' + item['id'] + '" class="a-btn updateLink">編集</a></td>';
        tableHTML += '<td><a href="" class="a-btn deleteLink" id="' + item['id'] + '" onclick="deleteId(this)">削除</a></td>';
        tableHTML += '</tr>';
    });
    searchList.innerHTML = tableHTML;
}