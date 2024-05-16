<?php
class DB {
    public $dbCon;

    public function set() {
        $this->dbCon = new mysqli("127.0.0.1", "root", "", "client_db");
        $this->dbCon->set_charset('utf8');

        if ($this->dbCon->connect_error) {
            exit('データベースへの接続に失敗しました。');
        }

        return $this->dbCon;
    }
}
?>