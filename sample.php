<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/sample.css">
    <title>Document</title>
</head>
<body>
    <form id="form" novalidate>
        <p>
            <label>
                <span>必須チェック: </span>
                <input type="text" id="input" required>
            </label>
            <span class="errorMessage"></span>
        </p>
        <p>
            <label>
                <span>メールアドレス形式チェック: </span>
                <input type="email" required>
            </label>
            <span class="errorMessage"></span>
        </p>
        <p>
            <label>
                <span>特定の形式チェック: </span>
                <input type="text" title="「banana」もしくは「cherry」を入力してください。" required pattern="[Bb]anana|[Cc]herry">
            </label>
            <span class="errorMessage"></span>
        </p>
        <p>
            <button>submit</button>
        </p>
    </form>
    <script type="text/javascript" src="js/sample.js"></script>
</body>
</html>