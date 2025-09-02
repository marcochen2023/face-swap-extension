# Face Swap Chrome Extension

[English](README.md) | [Traditional Chinese](README.zh-tw.md)

一個使用RunPod Inswapper API進行人臉交換的Chrome擴展插件。

## 功能特色

- 🎭 **一鍵人臉交換**: 在任何網頁圖片上右鍵點擊即可進行人臉交換
- 🖼️ **圖片裁切工具**: 內建1:1比例的圖片裁切和調整工具
- ⚡ **快速下載**: 處理完成後自動下載結果圖片
- 🔧 **簡單設置**: 直觀的設置頁面，輕鬆配置API參數
- 📱 **響應式設計**: 支援各種螢幕尺寸

## 安裝步驟

### 1. 下載擴展文件
將整個 `face-swap-extension` 文件夾下載到您的電腦。

### 2. 載入到Chrome
1. 開啟Chrome瀏覽器
2. 在網址列輸入 `chrome://extensions/`
3. 開啟右上角的「開發人員模式」
4. 點擊「載入未封裝項目」
5. 選擇 `face-swap-extension` 文件夾

### 3. 設置API
1. 點擊擴展圖標或右鍵選單中的「選項」
2. 填入您的RunPod API Key
3. 確認API端點URL
4. 上傳並調整您想要用來換臉的圖片
5. 點擊「儲存設置」

## 使用方法

### 設置換臉圖片
1. 在設置頁面點擊「選擇圖片」
2. 上傳一張清晰的正面照片
3. 使用裁切工具調整圖片：
   - 拖拽移動圖片位置
   - 使用滾輪或按鈕縮放
   - 紅色虛線框顯示裁切區域
4. 點擊「儲存圖片」完成設置

### 執行人臉交換
1. 在任何網頁上找到想要換臉的圖片
2. 右鍵點擊圖片
3. 選擇「Face Swap」選項
4. 等待處理完成（會顯示通知）
5. 圖片會自動下載到您的下載文件夾

## API設置

### 取得RunPod API Key
1. 前往 [RunPod控制台](https://www.runpod.io/console/user/settings?ref=le1d7tb4)
2. 創建帳戶或登入
3. 導航至 設置 > API Keys
4. 生成新的API Key
5. 複製API Key到擴展設置中

### 設置RunPod API端點

您需要在RunPod上部署自己的Face Swap端點。請按照以下步驟操作：

#### 步驟1：訪問RunPod Serverless Hub
1. 前往 [RunPod Serverless Repos](https://console.runpod.io/hub?tabSelected=serverless?ref=le1d7tb4)
2. 在搜尋欄中搜尋「Face Swap」
3. 選擇用戶 **ashleykleynhans** 的「Face Swap」項目
4. 或直接訪問：[Face Swap Project](https://console.runpod.io/hub/ashleykleynhans/runpod-worker-inswapper?ref=le1d7tb4)

#### 步驟2：部署端點
1. 點擊「Deploy 4.0.5」（當前版本）
2. 點擊「Create Endpoint」
3. 點擊右上角的「Manage」
4. 點擊「Edit Endpoint」

#### 步驟3：配置端點設置
1. **GPU選擇**：勾選「24GB PRO」和「32GB PRO」兩個選項
2. **Max Workers**：設置為3-5（建議值）
3. 點擊底部的「Save Endpoint」

#### 步驟4：取得API端點URL
1. 前往您的Face Swap 4.0.5端點主頁面
2. 點擊「Requests」標籤頁
3. 複製POST URL：`https://api.runpod.ai/v2/[YOUR_ENDPOINT_ID]/run`
4. 這就是您的API端點 - 將其貼到擴展的「RunPod API 端點」欄位中

**重要注意事項：**
- 端點URL格式應為：`https://api.runpod.ai/v2/[YOUR_ENDPOINT_ID]/run`
- 確保您的RunPod帳戶有足夠的額度進行API調用
- 端點部署後可能需要幾分鐘才能啟動

## 文件結構

```
face-swap-extension/
├── manifest.json          # 擴展配置文件
├── background.js           # 背景腳本，處理右鍵菜單和API調用
├── options.html           # 設置頁面HTML
├── options.js             # 設置頁面JavaScript
├── offscreen.html         # 離屏文檔HTML
├── offscreen.js           # 處理圖片下載
├── style.css              # 設置頁面樣式
├── icons/                 # 擴展圖標
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md              # 說明文件
```

## 技術特點

- **Manifest V3**: 使用最新的Chrome擴展標準
- **Offscreen API**: 安全處理圖片下載
- **Canvas API**: 實現圖片裁切和調整功能
- **Chrome Storage API**: 本地儲存設置和圖片
- **Context Menus API**: 右鍵菜單整合

## 支援的圖片格式

- 輸入：JPEG, PNG, WebP等常見格式
- 輸出：JPEG格式（92%品質壓縮）
- 處理尺寸：自動調整為1024x1024像素

## 故障排除

### 常見問題

**Q: 右鍵菜單沒有出現「Face Swap」選項**
A: 確保擴展已正確載入並啟用，重新載入頁面後再試。

**Q: 提示API Key未設置**
A: 前往擴展設置頁面，填入有效的RunPod API Key。

**Q: 處理失敗或超時**
A: 檢查網路連線和API Key是否正確，確保RunPod服務正常運行。

**Q: 圖片下載失敗**
A: 檢查瀏覽器下載設置，確保允許自動下載。

### 除錯模式
1. 開啟Chrome開發者工具（F12）
2. 查看Console標籤頁的錯誤訊息
3. 檢查Network標籤頁的API請求狀態

## 隱私說明

- 所有圖片處理都通過RunPod API進行
- 換臉圖片儲存在本地瀏覽器中
- 不會收集或儲存任何個人資料
- API Key僅儲存在本地

## 授權條款

本專案僅供學習和個人使用。請遵守相關法律法規，不得用於非法用途。

## 更新日誌

### v1.0.0
- 初始版本發布
- 基本人臉交換功能
- 圖片裁切工具
- 自動下載功能

---

如有問題或建議，歡迎提出Issue或Pull Request。