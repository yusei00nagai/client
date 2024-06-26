<?php

require_once 'Model.php';

class Customer extends Model{
    public $sqlTable = 'users';
    public $sqlId = 'id';

    public function insert($data) {
        $keys = implode(',', array_map(function($key) {
            return "{$key}";
        }, array_keys($data['data'])));
        
        $values = implode(',', array_map(function($value) {
            return "'" . $value . "'";
        }, array_values($data['data'])));

        $sql = "INSERT INTO users( {$keys} ) VALUES( {$values} )";
    
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

    public function edit($data) {
        $sql = "UPDATE users SET user_name = '{$data["data"]["user_name"]}',
                user_kana = '{$data["data"]["user_kana"]}',
                user_mail = '{$data["data"]["user_mail"]}',
                user_phone = '{$data["data"]["user_phone"]}',
                user_sex = '{$data["data"]["user_sex"]}',
                user_born = '{$data["data"]["user_born"]}',
                company_id = '{$data["data"]["company_id"]}'
                WHERE id = {$data["id"]}";
        
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

    public function search($searchData) {
        $sql = 'SELECT users.id, users.user_name, users.user_kana, users.user_born, users.user_mail, users.user_phone, users.user_sex, users.company_id, companies.company_name, users.insert_time, users.update_time 
                FROM users INNER JOIN companies ON users.company_id = companies.company_id 
                WHERE 1';

        if (!empty($searchData['data']['user_name'])) {
            $sql .= " AND user_name LIKE '%{$searchData['data']['user_name']}%'";
        }if (!empty($searchData['data']['user_kana'])) {
            $sql .= " AND user_kana LIKE '%{$searchData['data']['user_kana']}%'";
        }if ($searchData["data"]["user_sex"] != "all") {
            $sql .= " AND user_sex LIKE '{$searchData['data']['user_sex']}'";
        }if (!empty($searchData["data"]["start"]) && !empty($searchData["data"]["end"])) {
            $sql .= " AND user_born BETWEEN '{$searchData["data"]["start"]}' AND '{$searchData["data"]["end"]}'";
        }else if (!empty($searchData["data"]["start"])) {
            $sql .= " AND user_born > '{$searchData["data"]["start"]}'";
        }else if (!empty($searchData["data"]["end"])) {
            $sql .= " AND user_born < '{$searchData["data"]["end"]}'";
        }if (!empty($searchData["data"]["company-select"])) {
            $sql .= " AND users.company_id LIKE '{$searchData["data"]["company-select"]}'";
        }

        $result = $this->dbCon->query($sql);
        
        $list_array = [];

        foreach ($result as $data) {
            $list_array[] = [
                "id" => $data["id"],
                "user_name" => $data["user_name"],
                "user_kana" => $data["user_kana"],
                "user_born" => $data["user_born"],
                "user_mail" => $data["user_mail"],
                "user_phone" => $data["user_phone"],
                "user_sex" => $data["user_sex"],
                "insert_time" => $data["insert_time"],
                "update_time" => $data["update_time"],
                "company_id" => $data["company_id"],
                "company_name" => $data["company_name"],
            ];
        }

        if (!$result) {
            $response = [
                'success' => '1 : 異常',
                'data' => []
            ];
        } else {
            $response = [
                'success' => '0 : 正常',
                'searchData' => $searchData,
                'data' => $list_array
            ];
        }
        return $response;
    }

    public function getId($getIdData) {
        $id = $getIdData['data']['id'];

        $sql = "SELECT users.user_name, users.user_kana, users.user_born, users.user_mail, users.user_phone, users.user_sex, companies.company_id 
                FROM users INNER JOIN companies ON users.company_id = companies.company_id 
                WHERE users.id = '$id'";
        
        

        $result = $this->dbCon->query($sql);
                
        $list_array = [];

        foreach ($result as $data) {
            $list_array[] = [
                "user_name" => $data["user_name"],
                "user_kana" => $data["user_kana"],
                "user_born" => $data["user_born"],
                "user_mail" => $data["user_mail"],
                "user_phone" => $data["user_phone"],
                "user_sex" => $data["user_sex"],
                "company_id" => $data["company_id"],
            ];
        }

        if (!$result) {
            $response = [
                'success' => '1 : 異常',
                'data' => []
            ];
        } else {
            $response = [
                'success' => '0 : 正常',
                'getIdData' => $getIdData,
                'data' => $list_array
            ];
        }
        return $response;
    }
}
?>