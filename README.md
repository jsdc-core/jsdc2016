# jsdc2016

### :: step 1

`npm start`

### :: step2

`open http://localhost:3000/`

## 目前檔案結構
  
  >  debug 小技巧
  
  >  將 gulpfile.js 檔案的第36行( .pipe(plugins.uglify()) ) 隱閉起來，編譯出來的 main.min.js 就不會是 min 的 js，比較好抓錯誤

  ```
  .
  | - dist (放置編譯完成的檔案)
  | - source (放置編譯的檔案)
    | - js (放置js檔案)
    | - scss (放置scss檔案)
    | - views (放置jade檔案)
  ```
## 暫定版位設計

### 第一個版本 - 拉贊助用

##### ::Main
  - Banner
  - 何謂 JSDC
  - 精彩回顧
  - 徵求贊助商

##### ::Footer

### 第二個版本 - 完整版 (尚未動工)

##### :: Header
##### :: Main
  
  - Banner
  - 何謂 JSDC
  - 最新消息
  - 精彩回顧
  - 講者名單回顧
  - 徵求贊助商
  - 活動商品 (未定)
  - 工作人員名單

##### :: Footer
