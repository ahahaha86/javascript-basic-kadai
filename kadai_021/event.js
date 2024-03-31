//btnというidを持つHTML要素をを取得し代入する
const btn  = document.getElementById('btn');

//HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', function(){
    //2秒後に実行される関数を定義
    function changeText(){
        const textElement = document.getElementById('text');
        textElement.textContent = 'ボタンをクリックしました'
    }

    //2秒後にchangeText()関数を実行する
    setTimeout(changeText,2000);
});