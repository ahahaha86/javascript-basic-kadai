// 1以上の正の数を変数に代入
const num = 30; // 任意の正の数を設定

// 3の倍数かつ5の倍数かどうかをチェック
if (num % 3 === 0 && num % 5 === 0) {
        console.log("3と5の倍数です");
}
// 3の倍数かどうかをチェック
else if (num % 3 === 0) {
    console.log("3の倍数です");
}
// 5の倍数かどうかをチェック
else if (num % 5 === 0) {
    console.log("5の倍数です");
}
// それ以外の場合はそのままの値を出力
else {
    console.log(num);
}