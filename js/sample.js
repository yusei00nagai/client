const form = document.getElementById('form');
const inputElms = form.querySelectorAll('input');

form.addEventListener('submit', (e) => {
        e.preventDefault();                           // キャンセル
        inputElms.forEach((input) => {              
            const label = input.closest('label');     // inputの親ラベルを取得？
            label.classList.remove('is-error');       //　クラス削除
            const errorMessage = label.nextElementSibling;    //　ラベルの次の要素取得
            errorMessage.textContent = '';            //　エラーメッセージクリア
        });
        const isValid = form.checkValidity();         //　バリデーションを抜けたかどうか　ture or false
        if (isValid) {
            alert('成功しました。');
        }
    },
    { passive: false }
);
inputElms.forEach((input) => {
  input.addEventListener('invalid', (e) => {               // inputが無効の場合に発火？
        const currentTarget = e.currentTarget;             //現在のターゲット
        const label = currentTarget.closest('label');      //それの親ラベルを取得
        label.classList.add('is-error');                   //エラークラス追加
        const errorMessage = label.nextElementSibling;     //ラベルの次の要素取得
        errorMessage.textContent = currentTarget.validationMessage; // バリデーションメッセージ
  });
});