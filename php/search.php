<?php 
  
?>

<!DOCTYPE html>
<html lang="jp">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <title>顧客管理システム</title>
</head>
<body>
    <header class="header">
        <h1 class="hedaer-title">
            <a href="./search.php" class="a-home">顧客管理システム</a>
        </h1>
    </header>

    <main>
    <div class="area">
        <div class="section-1">
            <h2 class="btn"><a href="./data.php" class="h2-btn">登録</a><h2>
        </div>

        <div class="section-2">
            <form action="" method="POST" id="customer_search">
                    <div class="form-item">
                        <label for="user-name">顧客名：</label>
                        <input type="text" id="user-name" name="user_name"/>
                    </div>
                    <div class="form-item">
                        <label for="user-name-kana">顧客名（カナ）：</label>
                        <input type="text" id="user-name-kana" name="user_kana" pattern="^[ァ-ヶー]+$" placeholder="※カナ入力のみ"/>
                    </div>
                    <div class="form-item sex-search">
                        <label for="sex">性別：</label>
                        <div class="sex-1">
                            <label for="all">全て</label>
                            <input type="radio" id="all" name="user_sex" value="all" checked />
                        </div>
                        <div class="sex-2">
                            <label for="man">・男性</label>
                            <input type="radio" id="man" name="user_sex" value="man"/>
                        </div>
                        <div class="sex-3">
                            <label for="woman">・女性</label>
                            <input type="radio" id="woman" name="user_sex" value="woman"/>
                        </div>
                    </div>
                    <div class="form-item">
                        <label for="start">生年月日：</label>
                        <input type="month" id="start" name="start" min="1930-01" /> ~
                        <input type="month" id="end" name="end" min="1931-01" />
                    </div>
                    <div class="form-item">
                        <label class="search" for="company-select">所属会社：</label>
                        <select id="user-company"  name="company-select">
                            <option></option>
                        </select>
                    </div>
                    <button type="button" value="customer_search" class="data-submit" id="btn-search" onclick="list()">検索</button>
            </form>
        </div>
        
        <h2 class="look">顧客情報一覧</h2>
        <div class="section-3">
            <table class="table">
                <thead>
                    <tr class="look-tr">
                        <th class="look-th">顧客ID</th>
                        <th class="look-th">顧客名（カナ）</th>
                        <th class="look-th">電話番号/メールアドレス</th>
                        <th class="look-th">所属会社</th>
                        <th class="look-th">新規日時/更新日時</th>
                        <th class="look-th">編集</th>
                        <th class="look-th">削除</th>
                    </tr>
                </thead>

                <tbody id="search_list">
                    <tr>
                        <td colspan="9"></td>
                    </tr>
                </tbody>

            </table>
        </div>
    </div>
    </main>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="../js/drag.js"></script>
    <script type="text/javascript" src="../js/costomer_delete.js"></script>
    <script type="text/javascript" src="../js/onload_1.js"></script>
    
</body>
</html>