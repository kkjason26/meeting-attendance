window.ATTENDANCE_CONFIG = Object.freeze({
  // 顯示在簽到頁上方的活動名稱
  EVENT_NAME: "會議簽到",

  // 請貼上 Google Apps Script 部署後取得、結尾為 /exec 的網址
  APPS_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbxdmt6QYHBDerS9zv7yjYu_RBsJ2RNiG90qFL0dMHQkVFoj4BHb7nUQhZyEExQyKy66/exec",

  // 是否強制取得定位後才能送出
  REQUIRE_LOCATION: true,

  // 手機取得定位的逾時毫秒數
  LOCATION_TIMEOUT_MS: 20000,

  // 顯示在表單下方的告知文字，可依公司規範調整
  PRIVACY_NOTICE:
    "本頁蒐集店號、店舖名稱、姓名、簽到時間及裝置定位，僅供本次會議出席確認、統計與異常查核使用。請確認資料正確後再送出。"
});
