// ボタン要素を取得
const button = document.getElementById("btn");

// ボタンがクリックされたときの処理を定義
button.addEventListener("click", function() {
    // テキストを変更
    const textElement = document.getElementById("text");
    textElement.textContent = "ボタンをクリックしました";
});