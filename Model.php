<?php
abstract class Model {
    //全ての子クラスで使用
    abstract protected function search($searchData);
    abstract protected function insert($data);
    abstract protected function edit($data);
    abstract protected function delete($deleteData);
    //全てではないが複数の子クラスで使用
    // protected function getId($getIdData) {
    //     //子クラスで必ず生成しなければならない変数
    //     // $id;
    //     // $sql;
    //     // $result;
    // }
}
?>
