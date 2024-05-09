function deleteId(e) {
    const dialog = confirm("削除");
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

    const url = "Company_controller.php";

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
        alert("成功しました。")
        window.location.href = "./data.php";
    })
    .catch(error => {
        console.error('Error fetching data:', error)
    });

}