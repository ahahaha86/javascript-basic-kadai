// 今日の日付を取得する
const today = new Date();

// 年、月、日を取得する
const year = today.getFullYear(); // 年
const month = today.getMonth() + 1; // 月 (0から始まるため、+1する)
const day = today.getDate(); // 日

// 年月日を指定された形式で表示する
console.log(year + "年" + month + "月" + day + "日");