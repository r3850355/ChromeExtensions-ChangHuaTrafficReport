# 關於

僅適用於 `彰化縣交通違規檢舉` 部分欄位快速填入的Chrome擴充功能。 如您是位於其他縣市可以參考這篇教學對程式碼進行修改。


# 如何使用

### 步驟一，下載

在這個頁面的右上角會有一個寫著「CODE的綠色的按鈕」，點開裡面有一個「Download Zip」。

下載後請先解壓縮。

### 步驟二，修改範例資料

打開專案中的 `content-script.js`，並將 `data` 裡的範例資料替換成你的個人資料。

```
const data = {
  Name: '王小明',
  IdentityCard: 'A999999999',
  OfficeTel: '0912345678',
  Address: '500彰化縣彰化市中正路二段778號',
  Mail: 'test@example.com'
}
```

## 步驟三，上傳寫好的擴充功能

在瀏覽器的網址列輸入 `chrome://extensions/` 就能開啟擴充功能的頁面

之後在最右邊找到「開發人員模式」並將其打開，此時就會多出一行操作列。

接著點選左側的「載入未封裝項目」，並上傳上面建立的這兩個檔案就完成啦

![https://ithelp.ithome.com.tw/upload/images/20220806/20111805XaFCiAYd7W.png](https://ithelp.ithome.com.tw/upload/images/20220806/20111805XaFCiAYd7W.png)

## 完成

接著回到檢舉表單填寫的網頁，資料應該都會自動填入了！