<?php
require_once 'DB.php';
require_once 'Model.php';

class Company extends Model{
    public $sqlTable = 'companies';
    public $sqlId = 'company_id';

    public function search($listData) {
        $sql = 'SELECT * from companies WHERE 1';

        $result = $this->dbCon->query($sql);

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
        $sql = "INSERT INTO companies(company_name)
                SELECT '{$insertData["data"]["company_name"]}'
                WHERE NOT EXISTS(
                SELECT *
                FROM companies
                WHERE company_name = '{$insertData["data"]["company_name"]}')";

        if ($this->dbCon->query($sql)) {
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
        $id = $data['data']['id'];

        $sql = "UPDATE companies SET company_name = '{$data["data"]["company_name"]}' 
                WHERE company_id = '$id'";

        if ($this->dbCon->query($sql)) {
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
}
?>