window.ATTENDANCE_COMMON_CONFIG = Object.freeze({
  // 將原本已部署、結尾為 /exec 的 Apps Script 網址貼在這裡。
  APPS_SCRIPT_URL: "https://script.google.com/macros/s/你的部署代碼/exec",

  REQUIRE_LOCATION: true,
  LOCATION_TIMEOUT_MS: 20000,

  PRIVACY_NOTICE:
    "本頁蒐集課別、店號、店舖名稱、姓名、簽到時間及裝置定位，僅供本次活動出席確認、統計與異常查核使用。請確認資料正確後再送出。"
});
