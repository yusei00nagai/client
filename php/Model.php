<?php
require_once 'DB.php';

abstract class Model {
    public $dbCon;
    public $sqlTable;
    public $sqlId;

    public function __construct() {
        $DB = new DB();
        $this->dbCon = $DB->set();
    }

    //全ての子クラスで使用
    abstract public function search($searchData);
    abstract public function insert($data);
    abstract public function edit($data);

    //共通が多いメソッド
    public function delete($deleteData) {
        $id = $deleteData['data']['id'];

        $sql = "DELETE FROM $this->sqlTable WHERE $this->sqlId = '$id'";

        $result = $this->dbCon->query($sql);

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
