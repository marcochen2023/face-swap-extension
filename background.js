const OFFSCREEN_DOCUMENT_PATH = '/offscreen.html';

// 多語言翻譯對象 - 通知訊息
const notificationTranslations = {
  'zh-tw': {
    settings_incomplete: '設置未完成',
    please_setup_api: '請先設置RunPod API Key和端點。',
    no_swap_image: '未設置換臉圖片',
    please_upload_image: '請先上傳要換臉的圖片。',
    start_face_swap: '開始人臉交換',
    preparing_data: '正在準備圖片數據...',
    requesting_generation: '正在請求生成圖片',
    waiting_for_result: '已發送請求至RunPod API，正在等待處理結果...',
    generation_success: '圖片生成成功！',
    face_swap_complete: '人臉交換完成，正在下載結果圖片...',
    download_complete: '下載完成',
    download_success: '人臉交換圖片已成功下載到您的電腦。',
    processing_failed: '處理失敗',
    error_prefix: '錯誤: '
  },
  'zh-cn': {
    settings_incomplete: '设置未完成',
    please_setup_api: '请先设置RunPod API Key和端点。',
    no_swap_image: '未设置换脸图片',
    please_upload_image: '请先上传要换脸的图片。',
    start_face_swap: '开始人脸交换',
    preparing_data: '正在准备图片数据...',
    requesting_generation: '正在请求生成图片',
    waiting_for_result: '已发送请求至RunPod API，正在等待处理结果...',
    generation_success: '图片生成成功！',
    face_swap_complete: '人脸交换完成，正在下载结果图片...',
    download_complete: '下载完成',
    download_success: '人脸交换图片已成功下载到您的电脑。',
    processing_failed: '处理失败',
    error_prefix: '错误: '
  },
  'en': {
    settings_incomplete: 'Settings Incomplete',
    please_setup_api: 'Please set up RunPod API Key and endpoint first.',
    no_swap_image: 'No Face Swap Image Set',
    please_upload_image: 'Please upload a face swap image first.',
    start_face_swap: 'Starting Face Swap',
    preparing_data: 'Preparing image data...',
    requesting_generation: 'Requesting Image Generation',
    waiting_for_result: 'Request sent to RunPod API, waiting for processing result...',
    generation_success: 'Image Generated Successfully!',
    face_swap_complete: 'Face swap completed, downloading result image...',
    download_complete: 'Download Complete',
    download_success: 'Face swap image has been successfully downloaded to your computer.',
    processing_failed: 'Processing Failed',
    error_prefix: 'Error: '
  },
  'ja': {
    settings_incomplete: '設定が未完了',
    please_setup_api: 'まずRunPod API Keyとエンドポイントを設定してください。',
    no_swap_image: '顔交換画像が未設定',
    please_upload_image: 'まず顔交換用の画像をアップロードしてください。',
    start_face_swap: '顔交換を開始',
    preparing_data: '画像データを準備中...',
    requesting_generation: '画像生成をリクエスト中',
    waiting_for_result: 'RunPod APIにリクエストを送信しました。処理結果を待機中...',
    generation_success: '画像生成成功！',
    face_swap_complete: '顔交換が完了しました。結果画像をダウンロード中...',
    download_complete: 'ダウンロード完了',
    download_success: '顔交換画像がコンピューターに正常にダウンロードされました。',
    processing_failed: '処理失敗',
    error_prefix: 'エラー: '
  },
  'ko': {
    settings_incomplete: '설정 미완료',
    please_setup_api: '먼저 RunPod API Key와 엔드포인트를 설정하세요.',
    no_swap_image: '얼굴 교체 이미지 미설정',
    please_upload_image: '먼저 얼굴 교체용 이미지를 업로드하세요.',
    start_face_swap: '얼굴 교체 시작',
    preparing_data: '이미지 데이터 준비 중...',
    requesting_generation: '이미지 생성 요청 중',
    waiting_for_result: 'RunPod API에 요청을 보냈습니다. 처리 결과를 기다리는 중...',
    generation_success: '이미지 생성 성공!',
    face_swap_complete: '얼굴 교체가 완료되었습니다. 결과 이미지를 다운로드 중...',
    download_complete: '다운로드 완료',
    download_success: '얼굴 교체 이미지가 컴퓨터에 성공적으로 다운로드되었습니다.',
    processing_failed: '처리 실패',
    error_prefix: '오류: '
  }
};

// 獲取當前語言設置
async function getCurrentLanguage() {
  try {
    const result = await chrome.storage.sync.get(['language']);
    return result.language || 'zh-tw';
  } catch (error) {
    return 'zh-tw';
  }
}

// 獲取翻譯文本
function getTranslation(key, language = 'zh-tw') {
  return notificationTranslations[language]?.[key] || notificationTranslations['zh-tw'][key] || key;
}

// 創建右鍵菜單項目
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "faceSwap",
    title: "Face Swap",
    contexts: ["image"]
  });
});

// 監聽右鍵菜單點擊事件
chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === "faceSwap" && info.srcUrl) {
    // 獲取當前語言和設置
    const currentLanguage = await getCurrentLanguage();
    const settings = await chrome.storage.local.get(['runpodApiKey', 'runpodEndpoint', 'swapFaceImage']);
    
    if (!settings.runpodApiKey || !settings.runpodEndpoint) {
      chrome.runtime.openOptionsPage();
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icons/icon48.png',
        title: getTranslation('settings_incomplete', currentLanguage),
        message: getTranslation('please_setup_api', currentLanguage)
      });
      return;
    }

    if (!settings.swapFaceImage) {
      chrome.runtime.openOptionsPage();
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icons/icon48.png',
        title: getTranslation('no_swap_image', currentLanguage),
        message: getTranslation('please_upload_image', currentLanguage)
      });
      return;
    }

    const processingNotificationId = `processing-${Date.now()}`;
    
    // 第一階段：開始處理
    chrome.notifications.create(processingNotificationId, {
      type: 'basic',
      iconUrl: 'icons/icon48.png',
      title: getTranslation('start_face_swap', currentLanguage),
      message: getTranslation('preparing_data', currentLanguage)
    });

    try {
      // 將目標圖片轉換為base64
      const targetImageBase64 = await imageUrlToBase64(info.srcUrl);
      
      // 第二階段：發送API請求
      chrome.notifications.clear(processingNotificationId);
      const requestNotificationId = `request-${Date.now()}`;
      chrome.notifications.create(requestNotificationId, {
        type: 'basic',
        iconUrl: 'icons/icon48.png',
        title: getTranslation('requesting_generation', currentLanguage),
        message: getTranslation('waiting_for_result', currentLanguage)
      });
      
      // 調用RunPod API
      const resultImageBase64 = await callRunPodAPI(
        settings.swapFaceImage,
        targetImageBase64,
        settings.runpodApiKey,
        settings.runpodEndpoint
      );

      if (resultImageBase64) {
        // 第三階段：生成成功
        chrome.notifications.clear(requestNotificationId);
        chrome.notifications.create({
          type: 'basic',
          iconUrl: 'icons/icon48.png',
          title: getTranslation('generation_success', currentLanguage),
          message: getTranslation('face_swap_complete', currentLanguage)
        });
        
        // 下載結果圖片
        await downloadImage(resultImageBase64);
        
        // 最終成功通知
        setTimeout(() => {
          chrome.notifications.create({
            type: 'basic',
            iconUrl: 'icons/icon48.png',
            title: getTranslation('download_complete', currentLanguage),
            message: getTranslation('download_success', currentLanguage)
          });
        }, 1000);
      }
    } catch (error) {
      console.error("Error processing face swap:", error);
      chrome.notifications.clear(processingNotificationId);
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icons/icon48.png',
        title: getTranslation('processing_failed', currentLanguage),
        message: `${getTranslation('error_prefix', currentLanguage)}${error.message}`
      });
    }
  }
});

// 將圖片URL轉換為base64
async function imageUrlToBase64(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`無法讀取圖片，狀態碼: ${response.status}`);
  }
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

// 調用RunPod API進行人臉交換
async function callRunPodAPI(sourceImageBase64, targetImageBase64, apiKey, endpoint) {
  const requestBody = {
    input: {
      source_image: sourceImageBase64,
      target_image: targetImageBase64,
      source_indexes: "-1",
      target_indexes: "-1",
      background_enhance: true,
      face_restore: true,
      face_upsample: true,
      upscale: 1,
      codeformer_fidelity: 0.5,
      output_format: "JPEG"
    }
  };

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify(requestBody)
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`RunPod API 錯誤: ${errorData.error || response.statusText}`);
  }

  const data = await response.json();
  
  // 如果使用同步端點，直接返回結果
  if (data.output && data.output.image) {
    return data.output.image;
  }
  
  // 如果使用異步端點，需要輪詢狀態
  if (data.id) {
    return await pollForResult(data.id, apiKey, endpoint);
  }
  
  throw new Error('API 回應格式不符，找不到結果圖片。');
}

// 輪詢異步任務結果
async function pollForResult(jobId, apiKey, endpoint) {
  const statusEndpoint = endpoint.replace('/run', '/status/') + jobId;
  const maxAttempts = 30; // 最多等待5分鐘
  let attempts = 0;
  
  while (attempts < maxAttempts) {
    await new Promise(resolve => setTimeout(resolve, 10000)); // 等待10秒
    
    const response = await fetch(statusEndpoint, {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });
    
    if (!response.ok) {
      throw new Error(`狀態查詢失敗: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    if (data.status === 'COMPLETED' && data.output && data.output.image) {
      return data.output.image;
    } else if (data.status === 'FAILED') {
      throw new Error(`任務失敗: ${data.error || '未知錯誤'}`);
    }
    
    attempts++;
  }
  
  throw new Error('任務超時，請稍後再試。');
}

// 下載圖片
async function downloadImage(base64Data) {
  if (!(await hasOffscreenDocument(OFFSCREEN_DOCUMENT_PATH))) {
    await chrome.offscreen.createDocument({
      url: OFFSCREEN_DOCUMENT_PATH,
      reasons: ['BLOBS'],
      justification: 'Needed to download the face swapped image.',
    });
  }
  
  const response = await chrome.runtime.sendMessage({
    type: 'download-image',
    target: 'offscreen-doc',
    data: base64Data,
  });

  if (!response || !response.success) {
    throw new Error('圖片下載失敗');
  }
}

// 檢查offscreen文檔是否存在
async function hasOffscreenDocument(path) {
  const offscreenUrl = chrome.runtime.getURL(path);
  const clients = await self.clients.matchAll();
  return clients.some(client => client.url === offscreenUrl);
}