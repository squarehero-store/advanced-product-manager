/**
 * SquareHero Plugin Installer
 * This script runs once to install the SquareHero Advanced Product Manager plugin
 * Replicates the exact UI/UX from the Chrome extension
 */

(function() {
    'use strict';
    
    console.log('🚀 SquareHero Installer: Starting installation...');
    
    // Configuration
    const CONFIG = {
        helperScript: 'https://cdn.jsdelivr.net/gh/squarehero-store/advanced-product-manager@latest/dist/sh-helper.min.js',
        pluginScript: 'https://cdn.jsdelivr.net/gh/squarehero-store/advanced-product-manager@latest/dist/squarehero-product-manager.js',
        pluginCSS: 'https://cdn.jsdelivr.net/gh/squarehero-store/advanced-product-manager@latest/dist/sh-product-manager.css',
        pageUrlId: 'sh-product-manager-7qk3z8pl',
        helperMarker: 'SH_b4d455e8c78f9f23a982f3b4c1e67d2a'
    };
    
    // Inject CSS - exact copy from extension
    function injectCSS() {
        if (document.getElementById('squarehero-installer-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'squarehero-installer-styles';
        style.textContent = `
            #squarehero-install-prompt {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                top: 0;
                left: 0;
                z-index: 99999;
                background: radial-gradient(at 86.9% 91.1%, #580F8C 0px, transparent 20%), 
                           radial-gradient(at 12.5% 10.2%, #4a137f 0px, transparent 50%), 
                           radial-gradient(at 83.2% 63.7%, #1b169d 0px, transparent 0%), 
                           radial-gradient(at 6.7% 12.6%, #1b169d 0px, transparent 50%), 
                           rgba(1, 30, 69, 0.95);
                color: white;
                padding: 0;
                width: 100vw;
                height: 70vh;
                min-height: 470px;
                border-radius: 0 0 70px 70px;
                box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.55);
                backdrop-filter: blur(10px);
                box-sizing: border-box;
                font-family: "Red Hat Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                font-size: 14px;
                line-height: 1.5;
                overflow: hidden;
                text-align: center;
                transform: translateY(-100%);
                transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }
            
            #squarehero-install-prompt.squarehero-slide-in {
                transform: translateY(0) !important;
            }
            
            #squarehero-install-prompt .install-wrapper {
                position: relative;
                width: 400px;
                z-index: 3;
                background: rgba(255, 255, 255, 0.08);
                border: 1px solid rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(10px);
                border-radius: 10px;
                padding: 50px;
                margin: 16px 0;
            }
            
            #squarehero-install-prompt .logo-wrapper {
                width: 120px;
                height: 63px;
                margin: 0 auto 20px auto;
            }
            
            #squarehero-install-prompt .progress-content {
                text-align: center;
                padding: 20px;
            }
            
            #squarehero-install-prompt .progress-title {
                margin: 0 0 10px 0;
                font-weight: 600;
            }
            
            #squarehero-install-prompt .progress-container {
                background: rgba(255, 255, 255, 0.1);
                border-radius: 8px;
                padding: 10px;
                margin: 10px 0;
            }
            
            #squarehero-install-prompt .progress-bar-container {
                width: 100%;
                height: 8px;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 4px;
                overflow: hidden;
                margin: 10px 0;
                position: relative;
            }
            
            #squarehero-install-prompt #progress-bar {
                height: 100%;
                background: linear-gradient(90deg, #00D1FF 0%, #FF00E6 50%, #FF003D 100%);
                background-size: 200% 100%;
                animation: gradient-flow 3s ease-in-out infinite;
                border-radius: 4px;
                transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                position: relative;
                overflow: hidden;
                width: 0%;
            }
            
            #squarehero-install-prompt #progress-bar .shimmer {
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
                animation: shimmer 2s infinite;
            }
            
            #squarehero-install-prompt #progress-text {
                margin: 8px 0 0 0;
                opacity: 0.8;
                font-size: 12px;
            }
            
            .done-button-large {
                background: rgba(255, 255, 255, 0.9);
                color: #333;
                border: none;
                padding: 12px 24px;
                border-radius: 10px;
                cursor: pointer;
                font-weight: 600;
                font-size: 14px;
                width: 100%;
                transition: 0.3s;
            }
            
            .done-button-large:hover {
                background: rgb(255, 255, 255);
            }
            
            .demo-mode-button {
                background: none;
                color: white;
                border: 1px solid rgba(255, 255, 255, 0.3);
                padding: 14px 24px;
                border-radius: 10px;
                cursor: pointer;
                font-weight: 600;
                font-size: 14px;
                width: 100%;
                margin-bottom: 8px;
                transition: 0.3s;
            }
            
            .demo-mode-button:hover {
                background: rgba(255, 255, 255, 0.1);
                border-color: rgba(255, 255, 255, 0.5);
            }
            
            @keyframes gradient-flow {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            
            @keyframes shimmer {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
            }
        `;
        
        document.head.appendChild(style);
    }
    
    // SquareHero logo SVG
    const LOGO_SVG = `
        <svg width="120" height="63" viewBox="0 0 129 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_351_55680)">
                <path d="M76.4813 21.2212V7.71755L64.499 0.965698L52.5166 7.71755V21.2212L64.499 27.9731L76.4813 21.2212Z" fill="#001E45"/>
                <path d="M76.4813 21.2212V7.71755L64.499 0.965698L52.5166 7.71755V21.2212L64.499 27.9731L76.4813 21.2212Z" fill="#87C4CC"/>
                <path d="M56.4197 5.53273C57.2382 6.91753 58.4159 8.06757 59.8344 8.86718C61.2528 9.66678 62.862 10.0878 64.5001 10.0878C66.1382 10.0878 67.7474 9.66678 69.1658 8.86718C70.5843 8.06757 71.762 6.91753 72.5805 5.53273L64.4993 0.965698L56.4151 5.52226L56.4197 5.53273Z" fill="#0CC2ED"/>
                <path d="M64.4986 18.866C62.8614 18.8697 61.2538 19.2923 59.8361 20.0915C58.4184 20.8908 57.2402 22.0388 56.4189 23.421L64.4986 27.9731L72.5798 23.421C71.7582 22.0387 70.5798 20.8906 69.1618 20.0914C67.7439 19.2921 66.136 18.8696 64.4986 18.866Z" fill="#0CC2ED"/>
                <path d="M73.3233 5.94702C72.4292 7.45877 71.143 8.71416 69.5942 9.58699C68.0453 10.4598 66.2883 10.9193 64.4997 10.9193C62.7112 10.9193 60.9542 10.4598 59.4053 9.58699C57.8565 8.71416 56.5703 7.45877 55.6762 5.94702L52.5166 7.71761V21.2213L55.6762 23.0024C56.57 21.4902 57.856 20.2344 59.4049 19.3613C60.9539 18.4882 62.711 18.0285 64.4997 18.0285C66.2885 18.0285 68.0456 18.4882 69.5945 19.3613C71.1434 20.2344 72.4295 21.4902 73.3233 23.0024L76.4828 21.2213V7.71761L73.3233 5.94702Z" fill="#001E45"/>
                <path d="M76.9094 6.99237L64.9286 0.242015L64.4996 -0.000244141L64.0705 0.242015L52.1081 6.9819L52.0897 6.99237L51.6592 7.23313V21.7059L51.8905 21.836L52.0882 21.9466L64.0705 28.6985L64.4996 28.9407L64.9286 28.6985L73.0098 24.1449L73.7529 23.7277L74.2126 23.4705L76.9155 21.9466L77.3446 21.7059V21.2213V7.23463L76.9094 6.99237Z" fill="white"/>
            </g>
            <defs>
                <clipPath id="clip0_351_55680">
                    <rect width="129" height="68" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    `;
    
    // Create popup overlay
    function createInstallPrompt() {
        if (document.getElementById('squarehero-install-prompt')) return;
        
        const prompt = document.createElement('div');
        prompt.id = 'squarehero-install-prompt';
        document.body.appendChild(prompt);
        
        // Trigger slide-in animation
        setTimeout(() => {
            prompt.classList.add('squarehero-slide-in');
        }, 100);
    }
    
    // Update popup content
    function updatePopupContent(html) {
        const prompt = document.getElementById('squarehero-install-prompt');
        if (prompt) {
            prompt.innerHTML = html;
        }
    }
    
    // Show installation progress
    function showInstallationProgress() {
        const html = `
            <div class="install-wrapper">
                <div class="progress-content">
                    <div class="logo-wrapper">${LOGO_SVG}</div>
                    <p class="progress-title">Installing Advanced Product Manager...</p>
                    <div class="progress-container">
                        <div class="progress-bar-container">
                            <div id="progress-bar">
                                <div class="shimmer"></div>
                            </div>
                        </div>
                        <p id="progress-text">Preparing installation...</p>
                    </div>
                </div>
            </div>
        `;
        updatePopupContent(html);
    }
    
    // Update progress
    function updateProgress(percentage, message) {
        const progressBar = document.getElementById('progress-bar');
        const progressText = document.getElementById('progress-text');
        
        if (progressBar) {
            progressBar.style.width = percentage + '%';
        }
        if (progressText) {
            progressText.textContent = message;
        }
    }
    
    // Show installation success
    function showInstallationSuccess(pageUrl, pagePassword) {
        const html = `
            <div class="install-wrapper">
                <div class="progress-content">
                    <div class="logo-wrapper">${LOGO_SVG}</div>
                    <h3 style="margin: 0 0 15px 0; font-weight: 600;">Plugin Installed Successfully!</h3>
                    <p style="margin: 0 0 25px 0; opacity: 0.8;">Try all features with demo content!</p>
                    
                    <div style="background: rgba(255,255,255,0.08); border-radius: 12px; padding: 16px; margin: 16px 0; border: 1px solid rgba(255,255,255,0.1); text-align: left;">
                        <div style="margin-bottom: 15px;">
                            <label style="display: block; font-size: 12px; opacity: 0.7; margin-bottom: 5px;">Plugin URL</label>
                            <input type="text" readonly value="${pageUrl}" onclick="this.select()" style="
                                width: 100%;
                                padding: 10px;
                                border: 1px solid rgba(255,255,255,0.3);
                                border-radius: 6px;
                                background: rgba(255,255,255,0.1);
                                color: white;
                                font-family: monospace;
                                font-size: 13px;
                                box-sizing: border-box;
                            ">
                        </div>
                        <div>
                            <label style="display: block; font-size: 12px; opacity: 0.7; margin-bottom: 5px;">Password</label>
                            <input type="text" readonly value="${pagePassword}" onclick="this.select()" style="
                                width: 100%;
                                padding: 10px;
                                border: 1px solid rgba(255,255,255,0.3);
                                border-radius: 6px;
                                background: rgba(255,255,255,0.1);
                                color: white;
                                font-family: monospace;
                                font-size: 13px;
                                box-sizing: border-box;
                            ">
                        </div>
                    </div>
                    
                    <button class="demo-mode-button" onclick="window.location.href='${pageUrl}'">Open Product Manager</button>
                    <button class="done-button-large" onclick="document.getElementById('squarehero-install-prompt').remove()">Done</button>
                </div>
            </div>
        `;
        updatePopupContent(html);
    }
    
    // Show error
    function showInstallationError(errorMessage) {
        const html = `
            <div class="install-wrapper">
                <div class="progress-content">
                    <div style="
                        width: 60px;
                        height: 60px;
                        background: #f44336;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 0 auto 20px auto;
                    ">
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                        </svg>
                    </div>
                    <h3 style="margin: 0 0 15px 0; font-weight: 600; color: #f44336;">Installation Failed</h3>
                    <p style="margin: 0 0 25px 0; opacity: 0.8; font-size: 14px;">${errorMessage}</p>
                    
                    <button class="done-button-large" onclick="window.location.reload()">Try Again</button>
                    <button class="demo-mode-button" onclick="document.getElementById('squarehero-install-prompt').remove()">Close</button>
                </div>
            </div>
        `;
        updatePopupContent(html);
    }
    
    // Get CSRF token
    function getCrumb() {
        const crumb = document.cookie.split(';')
            .find(c => c.trim().startsWith('crumb='))
            ?.split('=')[1];
        return crumb;
    }
    
    // Install sh-helper.js into header injection
    async function installHelperScript() {
        console.log('📦 Installing sh-helper.js...');
        
        const crumb = getCrumb();
        if (!crumb) {
            throw new Error('Could not find CSRF token');
        }
        
        // Get current injection settings
        const settingsResponse = await fetch(`${window.location.origin}/api/config/GetInjectionSettings`, {
            method: 'GET',
            headers: {
                'x-csrf-token': crumb,
                'accept': 'application/json, text/plain, */*'
            },
            credentials: 'include'
        });
        
        const currentSettings = await settingsResponse.json();
        const currentHeader = currentSettings.header || '';
        
        // Check if sh-helper is already installed
        if (currentHeader.includes(CONFIG.helperMarker)) {
            console.log('✓ sh-helper.js already installed');
            return;
        }
        
        // Create the helper script injection code
        const helperCode = `
<!-- ${CONFIG.helperMarker}_START -->
<!-- ⚡ SquareHero Power Source ⚡
Without them, our plugins are no longer super!
======================================= -->
<script>(function(){const s=document.createElement('script');s.src='${CONFIG.helperScript}?v='+new Date().getTime();document.head.appendChild(s)})();</script>
<!-- SquareHero.store - Making Squarespace super, one plugin at a time!-->
<!-- ${CONFIG.helperMarker}_END -->
`;
        
        // Save updated settings
        const formBody = new URLSearchParams({
            header: currentHeader + helperCode,
            footer: currentSettings.footer || '',
            lockPage: currentSettings.lockPage || '',
            postItem: currentSettings.postItem || ''
        });
        
        const saveResponse = await fetch(`${window.location.origin}/api/config/SaveInjectionSettings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'x-csrf-token': crumb
            },
            body: formBody.toString(),
            credentials: 'include'
        });
        
        if (!saveResponse.ok) {
            throw new Error(`Failed to save header injection: ${saveResponse.status}`);
        }
        
        console.log('✓ sh-helper.js installed successfully');
    }
    
    // Create the plugin page
    async function createPluginPage() {
        console.log('📄 Creating plugin page...');
        
        const crumb = getCrumb();
        if (!crumb) {
            throw new Error('Could not find CSRF token');
        }
        
        // Check if page already exists
        const layoutResponse = await fetch(`${window.location.origin}/api/commondata/GetSiteLayout`, {
            method: 'GET',
            headers: {
                'accept': 'application/json, text/plain, */*',
                'x-csrf-token': crumb
            },
            credentials: 'include'
        });
        
        const siteLayout = await layoutResponse.json();
        
        // Check if page exists
        const pageExists = siteLayout?.layout?.some(nav => 
            nav?.links?.some(link => link?.urlId === CONFIG.pageUrlId)
        );
        
        if (pageExists) {
            console.log('✓ Plugin page already exists');
            // Find the page to get its password
            const existingPage = siteLayout.layout
                .flatMap(nav => nav.links)
                .find(link => link?.urlId === CONFIG.pageUrlId);
            
            return {
                pageUrl: `${window.location.origin}/${CONFIG.pageUrlId}`,
                password: existingPage?.password || 'N/A'
            };
        }
        
        // Generate random password
        const generatePassword = () => {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
            let password = '';
            for (let i = 0; i < 20; i++) {
                password += chars[Math.floor(Math.random() * chars.length)];
            }
            return password;
        };
        
        const password = generatePassword();
        
        // Plugin page header code
        const headerCode = `<!-- Advanced Product Manager by SquareHero.store --><script>(function(){const s=document.createElement('script');s.src='${CONFIG.pluginScript}?v='+new Date().getTime();document.head.appendChild(s)})();</script><script>(function(){const l=document.createElement('link');l.rel='stylesheet';l.href='${CONFIG.pluginCSS}?v='+new Date().getTime();document.head.appendChild(l)})();</script><style>#siteWrapper{display:none!important}</style>`;
        
        const pageData = {
            collectionData: {
                description: { html: '', raw: false },
                enabled: true,
                deleted: false,
                folder: false,
                homepage: false,
                navigationTitle: 'Product Manager 7qk3z8pl',
                ordinal: 999,
                publicCommentCount: 0,
                starred: false,
                title: 'Advanced Product Manager',
                type: 1,
                typeLabel: 'page',
                urlId: CONFIG.pageUrlId,
                fullUrl: `/${CONFIG.pageUrlId}`,
                password: password,
                passwordChangeRequired: false,
                passwordProtected: true
            },
            pageLevelCustomCss: '',
            pageLevelHeaderInjection: headerCode,
            pageLevelFooterInjection: ''
        };
        
        // Create the page
        const createResponse = await fetch(`${window.location.origin}/api/pages/CreatePage`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'x-csrf-token': crumb
            },
            body: JSON.stringify(pageData),
            credentials: 'include'
        });
        
        if (!createResponse.ok) {
            throw new Error(`Failed to create page: ${createResponse.status}`);
        }
        
        console.log('✓ Plugin page created successfully');
        
        return {
            pageUrl: `${window.location.origin}/${CONFIG.pageUrlId}`,
            password: password
        };
    }
    
    // Remove this installer script from header injection
    async function removeSelf() {
        console.log('🧹 Cleaning up installer...');
        
        const crumb = getCrumb();
        if (!crumb) {
            throw new Error('Could not find CSRF token');
        }
        
        // Get current injection settings
        const settingsResponse = await fetch(`${window.location.origin}/api/config/GetInjectionSettings`, {
            method: 'GET',
            headers: {
                'x-csrf-token': crumb,
                'accept': 'application/json, text/plain, */*'
            },
            credentials: 'include'
        });
        
        const currentSettings = await settingsResponse.json();
        let currentHeader = currentSettings.header || '';
        
        // Remove installer script tags
        currentHeader = currentHeader.replace(/<!-- SH_INSTALLER_START -->[\s\S]*?<!-- SH_INSTALLER_END -->/g, '');
        
        // Save updated settings
        const formBody = new URLSearchParams({
            header: currentHeader.trim(),
            footer: currentSettings.footer || '',
            lockPage: currentSettings.lockPage || '',
            postItem: currentSettings.postItem || ''
        });
        
        await fetch(`${window.location.origin}/api/config/SaveInjectionSettings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'x-csrf-token': crumb
            },
            body: formBody.toString(),
            credentials: 'include'
        });
        
        console.log('✓ Installer removed successfully');
    }
    
    // Main installation flow
    async function runInstallation() {
        // Inject CSS
        injectCSS();
        
        // Create and show prompt
        createInstallPrompt();
        showInstallationProgress();
        updateProgress(10, "Starting installation...");
        
        // Fun installation messages (same as extension)
        const messages = [
            "Rearranging pixels...",
            "Warming the coffee machine...",
            "Dusting off the product shelves...",
            "Polishing the product images...",
            "Straightening the virtual shelves...",
            "Quietly preparing magic..."
        ];
        
        const getRandomMessage = () => messages[Math.floor(Math.random() * messages.length)];
        
        try {
            updateProgress(20, getRandomMessage());
            
            // Step 1: Install sh-helper.js
            await installHelperScript();
            updateProgress(50, getRandomMessage());
            
            // Step 2: Create plugin page
            const result = await createPluginPage();
            updateProgress(80, "Cleaning up...");
            
            // Step 3: Remove this installer
            await removeSelf();
            updateProgress(100, "Installation complete!");
            
            // Step 4: Show success message
            setTimeout(() => {
                showInstallationSuccess(result.pageUrl, result.password);
            }, 500);
            
            console.log('🎉 Installation complete!');
            
        } catch (error) {
            console.error('❌ Installation failed:', error);
            showInstallationError(`Installation failed: ${error.message}\n\nPlease contact SquareHero support if this persists.`);
        }
    }
    
    // Check if we're in the Squarespace config area (don't run there)
    if (window.location.pathname.startsWith('/config/')) {
        console.log('⏸️ Installer detected config area, waiting for page load...');
        return;
    }
    
    // Run installation when page is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', runInstallation);
    } else {
        runInstallation();
    }
    
})();
