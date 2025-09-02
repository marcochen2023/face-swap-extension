chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.target === 'offscreen-doc' && message.type === 'download-image') {
    handleImageDownload(message.data, sendResponse);
  }
  return true;
});

function handleImageDownload(base64Data, sendResponse) {
  try {
    // 將base64轉換為Blob
    const byteCharacters = atob(base64Data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'image/jpeg' });
    
    // 創建下載URL
    const url = URL.createObjectURL(blob);
    
    // 生成文件名：年月日_時分秒_8位隨機數字.jpg
    const now = new Date();
    const dateStr = now.getFullYear().toString() + 
                   (now.getMonth() + 1).toString().padStart(2, '0') + 
                   now.getDate().toString().padStart(2, '0');
    const timeStr = now.getHours().toString().padStart(2, '0') + 
                   now.getMinutes().toString().padStart(2, '0') + 
                   now.getSeconds().toString().padStart(2, '0');
    const randomNum = Math.floor(Math.random() * 100000000).toString().padStart(8, '0');
    const filename = `${dateStr}_${timeStr}_${randomNum}.jpg`;
    
    // 創建下載鏈接並觸發下載
    const downloadLink = document.getElementById('download-link');
    downloadLink.href = url;
    downloadLink.download = filename;
    downloadLink.click();
    
    // 清理URL
    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 1000);
    
    sendResponse({ success: true });
  } catch (error) {
    console.error('Failed to download image:', error);
    sendResponse({ success: false, error: error.message });
  }
}