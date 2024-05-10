function deleteId(e) {
    const dialog = confirm("削除してもよろしいでしょうか。");
    if (!dialog) {
        return;
    }

    const id = e.id;
    console.log(id);

    const json = {
        method : 'delete',
        data : {
            id : id
        }
    };

    const url = "Customer_controller.php";

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
        if (data.success === '0 : 正常') {
            const deletedRow = document.querySelector('tr[id="' + id + '"]');
            if (deletedRow !== null) {
                deletedRow.remove();
            }
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error)
    });
}