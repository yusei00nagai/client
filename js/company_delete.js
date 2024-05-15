function deleteId(e) {
    const dialog = confirm("削除してもよろしいでしょうか。");
    if (!dialog) {
        return;
    }

    const id = e.id;

    const json = {
        method : 'delete',
        data : {
            id : id
        }
    };

    const url = "Company_Controller.php";

    fetch(url, {
        method : 'POST',
        body : JSON.stringify(json),
        headers : {
            'Content-Type' : 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        alert("成功しました。")
        window.location.href = "./data.php";
    })
    .catch(error => {
        console.error('Error fetching data:', error)
    });

}