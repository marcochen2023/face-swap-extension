// 多語言翻譯對象
const translations = {
    'zh-tw': {
        title: 'Face Swap Extension 設置',
        api_settings: 'RunPod API 設置',
        api_key_label: 'RunPod API Key:',
        api_key_placeholder: '請輸入您的RunPod API Key',
        api_endpoint_label: 'RunPod API 端點:',
        get_api_key: '取得RunPod API Key',
        setup_api_endpoint: '設置API端點',
        image_settings: '換臉圖片設置',
        image_description: '請上傳您想要用來換臉的圖片（建議使用清晰的正面照片）',
        choose_image: '選擇圖片',
        adjust_image: '調整圖片',
        zoom_in: '放大',
        zoom_out: '縮小',
        reset: '重置',
        save_image: '儲存圖片',
        current_image: '目前使用的換臉圖片',
        change_image: '更換圖片',
        save_settings: '儲存設置',
        instructions: '使用說明',
        instruction_1: '填入您的RunPod API Key和端點URL',
        instruction_2: '上傳並調整您想要用來換臉的圖片',
        instruction_3: '點擊「儲存設置」',
        instruction_4: '在任何網頁的圖片上右鍵點擊，選擇「Face Swap」即可開始換臉',
        related_links: '相關連結',
        sponsor: '贊助打賞',
        photo_clone: '一鍵相片克隆',
        ai_novel: 'AI小說生成',
        clone_intro: '相片克隆介紹',
        OC_sticker: '一鍵生成超美貼圖'
    },
    'zh-cn': {
        title: 'Face Swap Extension 设置',
        api_settings: 'RunPod API 设置',
        api_key_label: 'RunPod API Key:',
        api_key_placeholder: '请输入您的RunPod API Key',
        api_endpoint_label: 'RunPod API 端点:',
        get_api_key: '获取RunPod API Key',
        setup_api_endpoint: '设置API端点',
        image_settings: '换脸图片设置',
        image_description: '请上传您想要用来换脸的图片（建议使用清晰的正面照片）',
        choose_image: '选择图片',
        adjust_image: '调整图片',
        zoom_in: '放大',
        zoom_out: '缩小',
        reset: '重置',
        save_image: '保存图片',
        current_image: '目前使用的换脸图片',
        change_image: '更换图片',
        save_settings: '保存设置',
        instructions: '使用说明',
        instruction_1: '填入您的RunPod API Key和端点URL',
        instruction_2: '上传并调整您想要用来换脸的图片',
        instruction_3: '点击「保存设置」',
        instruction_4: '在任何网页的图片上右键点击，选择「Face Swap」即可开始换脸',
        related_links: '相关链接',
        sponsor: '赞助打赏',
        photo_clone: '一键相片克隆',
        ai_novel: 'AI小说生成',
        clone_intro: '相片克隆介绍',
        OC_sticker: '一键生成超美贴图'
    },
    'en': {
        title: 'Face Swap Extension Settings',
        api_settings: 'RunPod API Settings',
        api_key_label: 'RunPod API Key:',
        api_key_placeholder: 'Please enter your RunPod API Key',
        api_endpoint_label: 'RunPod API Endpoint:',
        get_api_key: 'Get RunPod API Key',
        setup_api_endpoint: 'Setup API Endpoint',
        image_settings: 'Face Swap Image Settings',
        image_description: 'Please upload the image you want to use for face swapping (recommend using clear front-facing photos)',
        choose_image: 'Choose Image',
        adjust_image: 'Adjust Image',
        zoom_in: 'Zoom In',
        zoom_out: 'Zoom Out',
        reset: 'Reset',
        save_image: 'Save Image',
        current_image: 'Current Face Swap Image',
        change_image: 'Change Image',
        save_settings: 'Save Settings',
        instructions: 'Instructions',
        instruction_1: 'Enter your RunPod API Key and endpoint URL',
        instruction_2: 'Upload and adjust the image you want to use for face swapping',
        instruction_3: 'Click "Save Settings"',
        instruction_4: 'Right-click on any image on a webpage and select "Face Swap" to start face swapping',
        related_links: 'Related Links',
        sponsor: 'Sponsor/Donate',
        photo_clone: 'One-click Photo Clone',
        ai_novel: 'AI Novel Generation',
        clone_intro: 'Photo Clone Introduction',
        OC_sticker: 'One Click Sticker'
    },
    'ja': {
        title: 'Face Swap Extension 設定',
        api_settings: 'RunPod API 設定',
        api_key_label: 'RunPod API Key:',
        api_key_placeholder: 'RunPod API Keyを入力してください',
        api_endpoint_label: 'RunPod API エンドポイント:',
        get_api_key: 'RunPod API Keyを取得',
        setup_api_endpoint: 'APIエンドポイントを設定',
        image_settings: '顔交換画像設定',
        image_description: '顔交換に使用したい画像をアップロードしてください（鮮明な正面写真を推奨）',
        choose_image: '画像を選択',
        adjust_image: '画像を調整',
        zoom_in: '拡大',
        zoom_out: '縮小',
        reset: 'リセット',
        save_image: '画像を保存',
        current_image: '現在の顔交換画像',
        change_image: '画像を変更',
        save_settings: '設定を保存',
        instructions: '使用方法',
        instruction_1: 'RunPod API KeyとエンドポイントURLを入力',
        instruction_2: '顔交換に使用する画像をアップロードして調整',
        instruction_3: '「設定を保存」をクリック',
        instruction_4: 'ウェブページの任意の画像を右クリックして「Face Swap」を選択すると顔交換が開始されます',
        related_links: '関連リンク',
        sponsor: 'スポンサー/寄付',
        photo_clone: 'ワンクリック写真クローン',
        ai_novel: 'AI小説生成',
        clone_intro: '写真クローン紹介',
        OC_sticker: 'ワンクリックステッカー'
    },
    'ko': {
        title: 'Face Swap Extension 설정',
        api_settings: 'RunPod API 설정',
        api_key_label: 'RunPod API Key:',
        api_key_placeholder: 'RunPod API Key를 입력하세요',
        api_endpoint_label: 'RunPod API 엔드포인트:',
        get_api_key: 'RunPod API Key 가져오기',
        setup_api_endpoint: 'API 엔드포인트 설정',
        image_settings: '얼굴 교체 이미지 설정',
        image_description: '얼굴 교체에 사용할 이미지를 업로드하세요 (선명한 정면 사진 권장)',
        choose_image: '이미지 선택',
        adjust_image: '이미지 조정',
        zoom_in: '확대',
        zoom_out: '축소',
        reset: '재설정',
        save_image: '이미지 저장',
        current_image: '현재 얼굴 교체 이미지',
        change_image: '이미지 변경',
        save_settings: '설정 저장',
        instructions: '사용 방법',
        instruction_1: 'RunPod API Key와 엔드포인트 URL을 입력',
        instruction_2: '얼굴 교체에 사용할 이미지를 업로드하고 조정',
        instruction_3: '"설정 저장"을 클릭',
        instruction_4: '웹페이지의 임의 이미지를 우클릭하고 "Face Swap"을 선택하면 얼굴 교체가 시작됩니다',
        related_links: '관련 링크',
        sponsor: '후원/기부',
        photo_clone: '원클릭 사진 복제',
        ai_novel: 'AI 소설 생성',
        clone_intro: '사진 복제 소개',
        OC_sticker: '원클릭 스티커'
    }
};

let currentLanguage = 'zh-tw';
let currentImage = null;
let canvas = null;
let ctx = null;
let scale = 1;
let offsetX = 0;
let offsetY = 0;
let isDragging = false;
let lastX = 0;
let lastY = 0;

// 語言切換功能
function changeLanguage(lang) {
    currentLanguage = lang;
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // 更新placeholder
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // 儲存語言設置
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.sync) {
        chrome.storage.sync.set({ language: lang });
    } else {
        localStorage.setItem('language', lang);
    }
}

// 載入語言設置
function loadLanguage() {
    // 檢查是否在擴展環境中
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.sync) {
        chrome.storage.sync.get(['language'], function(result) {
            const savedLanguage = result.language || 'zh-tw';
            currentLanguage = savedLanguage;
            document.getElementById('languageSelect').value = savedLanguage;
            changeLanguage(savedLanguage);
        });
    } else {
        // 在非擴展環境中使用localStorage
        const savedLanguage = localStorage.getItem('language') || 'zh-tw';
        currentLanguage = savedLanguage;
        document.getElementById('languageSelect').value = savedLanguage;
        changeLanguage(savedLanguage);
    }
}

// 頁面載入時初始化
document.addEventListener('DOMContentLoaded', function() {
    canvas = document.getElementById('cropCanvas');
    ctx = canvas.getContext('2d');
    
    // 設置canvas大小
    canvas.width = 400;
    canvas.height = 400;
    
    // 載入語言設置
    loadLanguage();
    
    // 載入已儲存的設置
    restoreOptions();
    
    // 綁定語言切換事件
    document.getElementById('languageSelect').addEventListener('change', function(e) {
        changeLanguage(e.target.value);
    });
    
    // 綁定事件監聽器
    document.getElementById('uploadBtn').addEventListener('click', () => {
        document.getElementById('imageUpload').click();
    });
    
    document.getElementById('imageUpload').addEventListener('change', handleImageUpload);
    document.getElementById('zoomIn').addEventListener('click', () => zoom(1.1));
    document.getElementById('zoomOut').addEventListener('click', () => zoom(0.9));
    document.getElementById('resetCrop').addEventListener('click', resetCrop);
    document.getElementById('saveCrop').addEventListener('click', saveCroppedImage);
    document.getElementById('changeImage').addEventListener('click', changeImage);
    document.getElementById('save').addEventListener('click', saveOptions);
    
    // Canvas 事件監聽器
    canvas.addEventListener('mousedown', startDrag);
    canvas.addEventListener('mousemove', drag);
    canvas.addEventListener('mouseup', endDrag);
    canvas.addEventListener('wheel', handleWheel);
});

// 處理圖片上傳
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    if (!file.type.startsWith('image/')) {
        showStatus('請選擇有效的圖片文件', 'error');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            currentImage = img;
            resetCrop();
            document.getElementById('cropArea').style.display = 'block';
            document.getElementById('savedImageArea').style.display = 'none';
            showUploadStatus('圖片載入成功，請調整裁切區域');
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

// 重置裁切
function resetCrop() {
    if (!currentImage) return;
    
    const canvasSize = 400;
    const imgAspect = currentImage.width / currentImage.height;
    
    if (imgAspect > 1) {
        // 寬圖
        scale = canvasSize / currentImage.height;
    } else {
        // 高圖或正方形
        scale = canvasSize / currentImage.width;
    }
    
    offsetX = (canvasSize - currentImage.width * scale) / 2;
    offsetY = (canvasSize - currentImage.height * scale) / 2;
    
    drawImage();
}

// 縮放
function zoom(factor) {
    scale *= factor;
    drawImage();
}

// 繪製圖片
function drawImage() {
    if (!currentImage) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 繪製圖片
    ctx.drawImage(
        currentImage,
        offsetX,
        offsetY,
        currentImage.width * scale,
        currentImage.height * scale
    );
    
    // 繪製裁切框（正方形，居中）
    const cropSize = Math.min(canvas.width, canvas.height) * 0.8;
    const cropX = (canvas.width - cropSize) / 2;
    const cropY = (canvas.height - cropSize) / 2;
    
    ctx.strokeStyle = '#ff0000';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.strokeRect(cropX, cropY, cropSize, cropSize);
    ctx.setLineDash([]);
}

// 開始拖拽
function startDrag(e) {
    isDragging = true;
    const rect = canvas.getBoundingClientRect();
    lastX = e.clientX - rect.left;
    lastY = e.clientY - rect.top;
}

// 拖拽中
function drag(e) {
    if (!isDragging) return;
    
    const rect = canvas.getBoundingClientRect();
    const currentX = e.clientX - rect.left;
    const currentY = e.clientY - rect.top;
    
    offsetX += currentX - lastX;
    offsetY += currentY - lastY;
    
    lastX = currentX;
    lastY = currentY;
    
    drawImage();
}

// 結束拖拽
function endDrag() {
    isDragging = false;
}

// 處理滾輪縮放
function handleWheel(e) {
    e.preventDefault();
    const factor = e.deltaY > 0 ? 0.9 : 1.1;
    zoom(factor);
}

// 儲存裁切後的圖片
function saveCroppedImage() {
    if (!currentImage) return;
    
    // 創建新的canvas用於裁切
    const cropCanvas = document.createElement('canvas');
    const cropCtx = cropCanvas.getContext('2d');
    cropCanvas.width = 1024;
    cropCanvas.height = 1024;
    
    // 計算裁切區域
    const cropSize = Math.min(canvas.width, canvas.height) * 0.8;
    const cropX = (canvas.width - cropSize) / 2;
    const cropY = (canvas.height - cropSize) / 2;
    
    // 計算圖片在裁切區域內的位置和大小
    const scaleX = cropSize / (currentImage.width * scale);
    const scaleY = cropSize / (currentImage.height * scale);
    const finalScale = Math.max(scaleX, scaleY);
    
    const sourceX = (cropX - offsetX) / scale;
    const sourceY = (cropY - offsetY) / scale;
    const sourceWidth = cropSize / scale;
    const sourceHeight = cropSize / scale;
    
    // 繪製裁切後的圖片
    cropCtx.drawImage(
        currentImage,
        Math.max(0, sourceX),
        Math.max(0, sourceY),
        Math.min(currentImage.width, sourceWidth),
        Math.min(currentImage.height, sourceHeight),
        0,
        0,
        1024,
        1024
    );
    
    // 轉換為base64並儲存
    const base64Data = cropCanvas.toDataURL('image/jpeg', 0.92).split(',')[1];
    
    // 檢查是否在擴展環境中
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
        chrome.storage.local.set({
            swapFaceImage: base64Data
        }, function() {
            showUploadStatus('圖片儲存成功！');
            document.getElementById('cropArea').style.display = 'none';
            showSavedImage(base64Data);
        });
    } else {
        // 在非擴展環境中使用localStorage
        localStorage.setItem('swapFaceImage', base64Data);
        showUploadStatus('圖片儲存成功！');
        document.getElementById('cropArea').style.display = 'none';
        showSavedImage(base64Data);
    }
}

// 顯示已儲存的圖片
function showSavedImage(base64Data) {
    const savedImage = document.getElementById('savedImage');
    savedImage.src = 'data:image/jpeg;base64,' + base64Data;
    document.getElementById('savedImageArea').style.display = 'block';
}

// 更換圖片
function changeImage() {
    document.getElementById('imageUpload').click();
}

// 儲存設置
function saveOptions() {
    const apiKey = document.getElementById('apiKey').value;
    const endpoint = document.getElementById('endpoint').value;
    
    if (!apiKey.trim()) {
        showStatus('請輸入API Key', 'error');
        return;
    }
    
    if (!endpoint.trim()) {
        showStatus('請輸入API端點', 'error');
        return;
    }
    
    // 檢查是否在擴展環境中
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
        chrome.storage.local.set({
            runpodApiKey: apiKey,
            runpodEndpoint: endpoint
        }, function() {
            showStatus('設置已儲存！', 'success');
        });
    } else {
        // 在非擴展環境中使用localStorage
        localStorage.setItem('runpodApiKey', apiKey);
        localStorage.setItem('runpodEndpoint', endpoint);
        showStatus('設置已儲存！', 'success');
    }
}

// 載入已儲存的設置
function restoreOptions() {
    // 檢查是否在擴展環境中
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
        chrome.storage.local.get([
            'runpodApiKey',
            'runpodEndpoint',
            'swapFaceImage'
        ], function(result) {
            if (result.runpodApiKey) {
                document.getElementById('apiKey').value = result.runpodApiKey;
            }
            
            if (result.runpodEndpoint) {
                document.getElementById('endpoint').value = result.runpodEndpoint;
            }
            
            if (result.swapFaceImage) {
                showSavedImage(result.swapFaceImage);
            }
        });
    } else {
        // 在非擴展環境中使用localStorage
        const apiKey = localStorage.getItem('runpodApiKey');
        const endpoint = localStorage.getItem('runpodEndpoint');
        const swapImage = localStorage.getItem('swapFaceImage');
        
        if (apiKey) {
            document.getElementById('apiKey').value = apiKey;
        }
        
        if (endpoint) {
            document.getElementById('endpoint').value = endpoint;
        }
        
        if (swapImage) {
            showSavedImage(swapImage);
        }
    }
}

// 顯示狀態訊息
function showStatus(message, type = 'info') {
    const status = document.getElementById('status');
    status.textContent = message;
    status.className = `status ${type}`;
    setTimeout(() => {
        status.textContent = '';
        status.className = 'status';
    }, 3000);
}

// 顯示上傳狀態
function showUploadStatus(message) {
    const uploadStatus = document.getElementById('uploadStatus');
    uploadStatus.textContent = message;
    setTimeout(() => {
        uploadStatus.textContent = '';
    }, 3000);
}