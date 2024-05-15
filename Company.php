<?php
require_once 'DB.php';

class Company {
    public $DB;

    public function __construct() {
        $this->DB = new DB();
    }

    public function search($listData) {
        $dbCon = $this->DB->set();

        $sql = 'SELECT * from companies WHERE 1';

        $result = $dbCon->query($sql);

        $company_array = [];

        foreach ($result as $data) {
            $company_array[] = [
                "id" => $data["company_id"],
                "company_name" => $data["company_name"]
            ];
        }

        if (!$result) {
            $response = [
                'success' => '1 : 異常',
                'data' => [] //ui側に
            ];
        } else {
            $response = [
                'success' => '0 : 正常',
                'data' => $company_array
            ];
        }
        return $response;
    }

    public function insert($insertData) {
        $dbCon = $this->DB->set();

        $sql = "INSERT INTO companies(company_name)
                SELECT '{$insertData["data"]["company_name"]}'
                WHERE NOT EXISTS(
                SELECT *
                FROM companies
                WHERE company_name = '{$insertData["data"]["company_name"]}')";

        if ($dbCon->query($sql)) {
            $response = [
                'success' => '0 : 正常', 
                'data' => $insertData
            ];
        } else {
            $response = [
                'success' => '1 : 異常', 
                'data' => $insertData
            ];
        }
        return $response;
    }

    public function edit($data) {
        $dbCon = $this->DB->set();
        $id = $data['data']['id'];

        $sql = "UPDATE companies SET company_name = '{$data["data"]["company_name"]}' WHERE company_id = '$id'";

        if ($dbCon->query($sql)) {
            $response = [
                'success' => '0 : 正常', 
                'data' => $data
            ];
        } else {
            $response = [
                'success' => '1 : 異常', 
                'data' => $data
            ];
        }
        return $response;
    }

    public function delete($deleteData) {
        $dbCon = $this->DB->set();
        $id = $deleteData['data']['id'];

        $sql = "DELETE FROM companies WHERE company_id = '$id'";

        $result = $dbCon->query($sql);

        if (!$result) {
            $response = [
                'success' => '1 : 異常',
                'data' => $deleteData
            ];
        } else {
            $response = [
                'success' => '0 : 正常',
                'data' => $deleteData
            ];
        }
        return $response;
    }
}
?>