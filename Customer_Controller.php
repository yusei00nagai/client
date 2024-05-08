<?php
require_once 'Customer.php';

$inputJSON = file_get_contents('php://input');
$data = json_decode($inputJSON, true);

$response = [
    'success' => 0,
    'message' => ''
];

if (isset($data["method"])) {
    $customerModel = new Customer();

    switch ($data["method"]) {
        case "search":
            $response = $customerModel->search($data);
            break;
        case "insert":
            $response = $customerModel->insert($data);
            break;
        case "getId":
            $response = $customerModel->getId($data);
            break;
        case "edit":
            $response = $customerModel->edit($data);
            break;
        case "delete":
            $response = $customerModel->delete($data);
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