<!DOCTYPE html>
<html lang="jp">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
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
            <h2 class="h2-data">データ編集</h2>
            <form action="" method="POST" id="customer_edit">
                <table class="data-table">
                    <tr class="data-tr">
                        <th class="form-title"><label for="user-name">お名前</label></th>
                        <td class="form-item"><input type="text" id="user-name" name="user_name" value=""  maxlength="32" required/></td>
                    </tr>
                    <tr class="data-tr">
                        <th class="form-title"><label for="user-name-kana">お名前（カナ）</label></th>
                        <td class="form-item"><input type="text" id="user-name-kana" name="user_kana" value="" pattern="^[ァ-ヶー]+$" maxlength="32" required /></td>
                    </tr>
                    <tr class="data-tr">
                        <th class="form-title"><label for="user-mail">メールアドレス</label></th>
                        <td class="form-item"><input type="mail" id="user-mail" name="user_mail" value="" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" maxlength="50"required /></td>
                    </tr>
                    <tr class="data-tr">
                        <th class="form-title"><label for="user-phone">電話番号</label></th>
                        <td class="form-item"><input type="tel" id="user-phone" name="user_phone" value="" pattern="^[0-9]+$" maxlength="15" required /></td>
                    </tr>
                    <tr class="data-tr">
                        <th class="form-title"><legend class="sex">性別</legend></th>
                        <td class="form-item">
                            <label for="man">男性</label>
                            <input type="radio" id="man" name="user_sex" value="man" />
                            <label for="woman">・女性</label>
                            <input type="radio" id="woman" name="user_sex" value="woman"/>
                        </td>
                    </tr>
                    <tr class="data-tr">
                        <th class="form-title"><label for="user-born">生年月日</label></th>
                        <td class="form-item">
                            <input type="date" id="user-born" name="user_born" min="1930-01" value="" required />
                        </td>
                    </tr>
                    <tr class="data-tr">
                        <th class="form-title"><label for="user-company-3">所属会社</label></th>
                        <td class="form-item">
                            <select id="user-company-3"  name="company_id" required>
                                <option></option>
                            </select>
                            <button type="button" id="openModal">登録・編集</button>
                        </td>
                    </tr>
                </table>
                <div class="data-btn">
                    <a href="./search.php" class="h2-btn">キャンセル</a>
                    <button type="submit" value="customer_insert" class="data-submit" id="btn-submit">登録</button>
                </div>
            </form>
        </div>

        <section id="modalArea" class="modalArea">
        <div id="modalBg" class="modalBg"></div>
        <div class="modalWrapper">
            <div class="modalContents">
                <h2>会社一覧</h2>
                <div class="modal-area">
                    <form action="" method="POST" id="company_insert">
                        <input type="text" id="company-name" name="company-name">
                        <button type="submit" value="company_insert">登録</button>
                    </form>
                    <form action="" method="POST">
                        <div style="overflow: auto; max-height: 500px;">
                            <table id="modal-table">
                                <tbody id="companyList">
                                    <tr>
                                        <td colspan="9"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </form>
                <div>
            </div>
            <div id="closeModal" class="closeModal">
            ×
            </div>
        </div>
        </section>

    </main>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="js/modal.js"></script>
    <script type="text/javascript" src="js/costomer_edit.js"></script>
    <script type="text/javascript" src="js/company_insert.js" defer></script>
    <script type="text/javascript" src="js/company_edit.js"></script>
    <script type="text/javascript" src="js/company_delete.js"></script>
    <script type="text/javascript" src="js/onload_2.js"></script>
</body>
</html>