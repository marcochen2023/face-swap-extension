# Face Swap Chrome Extension

[English](README.md) | [繁體中文](README.zh-tw.md)

A Chrome extension for face swapping using RunPod Inswapper API.

## Features

- 🎭 **One-Click Face Swap**: Right-click on any image on the web to perform face swapping
- 🖼️ **Image Cropping Tool**: Built-in 1:1 ratio image cropping and adjustment tool
- ⚡ **Fast Download**: Automatically download result images after processing
- 🔧 **Easy Setup**: Intuitive settings page for easy API configuration
- 📱 **Responsive Design**: Supports various screen sizes

## Installation

### 1. Download Extension Files
Download the entire `face-swap-extension` folder to your computer.

### 2. Load into Chrome
1. Open Chrome browser
2. Navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked"
5. Select the `face-swap-extension` folder

### 3. API Setup
1. Click the extension icon or "Options" in the right-click menu
2. Enter your RunPod API Key
3. Confirm the API endpoint URL 
4. Upload and adjust the image you want to use for face swapping
5. Click "Save Settings"

## Usage

### Setting Up Face Swap Image
1. Click "Choose Image" on the settings page
2. Upload a clear front-facing photo
3. Use the cropping tool to adjust the image:
   - Drag to move the image position
   - Use mouse wheel or buttons to zoom
   - Red dashed box shows the crop area
4. Click "Save Image" to complete setup

### Performing Face Swap
1. Find an image you want to face swap on any webpage
2. Right-click on the image
3. Select "Face Swap" option
4. Wait for processing to complete (notifications will be shown)
5. The image will automatically download to your Downloads folder

## API Setup

### Getting RunPod API Key
1. Visit [RunPod Console](https://www.runpod.io/console/user/settings)
2. Create an account or log in
3. Navigate to Settings > API Keys
4. Generate a new API key
5. Copy the key to the extension settings

### Setting Up RunPod API Endpoint

You need to deploy your own Face Swap endpoint on RunPod. Follow these steps:

#### Step 1: Access RunPod Serverless Hub
1. Go to [RunPod Serverless Repos](https://console.runpod.io/hub?tabSelected=serverless?ref=le1d7tb4)
2. Search for "Face Swap" in the search bar
3. Select the "Face Swap" project by user **ashleykleynhans**
4. Or directly visit: [Face Swap Project](https://console.runpod.io/hub/ashleykleynhans/runpod-worker-inswapper?ref=le1d7tb4)

#### Step 2: Deploy the Endpoint
1. Click "Deploy 4.0.5" (current version)
2. Click "Create Endpoint"
3. Click "Manage" in the top right corner
4. Click "Edit Endpoint"

#### Step 3: Configure Endpoint Settings
1. **GPU Selection**: Check both "24GB PRO" and "32GB PRO" checkboxes
2. **Max Workers**: Set to 3-5 (recommended)
3. Click "Save Endpoint" at the bottom

#### Step 4: Get Your API Endpoint URL
1. Go to your Face Swap 4.0.5 Endpoint main page
2. Click on "Requests" tab
3. Copy the POST URL: `https://api.runpod.ai/v2/[YOUR_ENDPOINT_ID]/run`
4. This is your API endpoint - paste it into the extension's "RunPod API 端點" field

**Important Notes:**
- The endpoint URL format should be: `https://api.runpod.ai/v2/[YOUR_ENDPOINT_ID]/run`
- Make sure your RunPod account has sufficient credits for API calls
- The endpoint may take a few minutes to become active after deployment

## File Structure

```
face-swap-extension/
├── manifest.json          # Extension configuration
├── background.js          # Background service worker
├── options.html          # Settings page HTML
├── options.js            # Settings page JavaScript
├── offscreen.html        # Offscreen document for downloads
├── offscreen.js          # Download handling
├── style.css             # Styling for options page
├── icons/                # Extension icons
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md             # This file
```

## Technical Features

- **Manifest V3**: Uses the latest Chrome extension manifest version
- **Offscreen API**: Handles image downloads using Chrome's Offscreen API
- **Canvas API**: Image cropping and manipulation
- **Chrome Storage API**: Secure storage of settings and images
- **Context Menus API**: Right-click menu integration

## Supported Image Formats

- **Input**: JPEG, PNG, WebP, GIF
- **Output**: JPEG (default), PNG

## Troubleshooting

### Common Issues

1. **"API Key not set" error**
   - Make sure you've entered a valid RunPod API key in settings
   - Check that the API key has sufficient credits

2. **"Failed to process image" error**
   - Ensure the target image contains a clear, visible face
   - Check your internet connection
   - Verify the API endpoint is correct

3. **Extension not appearing in right-click menu**
   - Refresh the webpage after installing the extension
   - Check that the extension is enabled in chrome://extensions/

4. **Image not downloading**
   - Check your browser's download settings
   - Ensure pop-ups are allowed for the extension

### Getting Help

If you encounter issues:
1. Check the browser console for error messages
2. Verify your API key and endpoint settings
3. Try with a different image
4. Restart Chrome and try again

## Privacy Policy

- Images are only sent to RunPod API for processing
- No images are stored permanently by this extension
- API keys are stored locally in your browser
- No personal data is collected or transmitted

## License

This project is open source and available under the MIT License.

## Updates

### Version 1.0
- Initial release
- Basic face swapping functionality
- Image cropping tool
- RunPod API integration
- Automatic download feature

---

**Note**: This extension requires a RunPod API key and credits to function. Face swapping quality depends on the clarity and angle of both source and target faces.

## 🤝 Contributing

Welcome to submit Issues and Pull Requests!

1. Fork this project
2. Create feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push branch: `git push origin feature/new-feature`
5. Submit Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## 🙏 Acknowledgments

- [RUNPOD](https://www.runpod.io/) - Provides efficient AI image generation services
- Chrome Extensions API - Provides rich browser integration features

## 📞 Contact

If you have questions or suggestions, please contact us through:

- Email: marcochen2023@gmail.com

⭐ If this project helps you, please give us a star!

## 🙏 Donate
- Patreon: [Donate](https://www.patreon.com/c/NovelPD)

🧑‍💻 Developers
Marco Chen (marcochen2023@gmail.com)
Ethan Chen
Sinsin Wang (https://x.com/0xCutecat2003)