<?php
require_once 'Company.php';

$inputJSON = file_get_contents('php://input');
$data = json_decode($inputJSON, true);

$response = [
    'success' => 0,
    'message' => ''
];

if (isset($data["method"])) {
    $companyModel = new Company();

    switch ($data["method"]) {
        case "list":
            $response = $companyModel->search($data);
            break;
        case "insert":
            $response = $companyModel->insert($data);
            break;
        case "edit":
            $response = $companyModel->edit($data);
            break;
        case "delete":
            $response = $companyModel->delete($data);
            break;
        default:
            $response['success'] = 1;
            $response['message'] = '無効なメソッド';
            break;
    }

} else {
    $response['success'] = 1;
    $response['message'] = 'メソッドが指定されていません';
}

echo json_encode($response);

?>