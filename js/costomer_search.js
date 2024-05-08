window.onload = list();

function list() {

    const form = document.querySelector('#customer_search');

        const formData = new FormData(form);

        const json = {
            'method' : 'search',
            'data' : jsonData = {}
        };

        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        console.log(json);

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
            console.log(data);
            displayData(data.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
};
            
function displayData(data) {
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
        tableHTML += '<td nowrap>' + item['user_born'] + '</td>';
        tableHTML += '<td>' + item['user_phone'] + '<br>' + item['user_mail'] + '</td>';
        tableHTML += '<td nawrap>' + item['user_sex'] + '</td>';
        tableHTML += '<td nawrap>' + item['company_name'] + '</td>';
        tableHTML += '<td nowrap>' + item['insert_time'] + '<br>' + item['update_time'] +'</td>';
        tableHTML += '<td><a href="./try.php?id=' + item['id'] + '" class="a-btn updateLink">編集</a></td>';
        tableHTML += '<td><a class="a-btn deleteLink" id="' + item['id'] + '" onclick="deleteId(this)">削除</a></td>';
        tableHTML += '</tr>';
    });
    searchList.innerHTML = tableHTML;
}