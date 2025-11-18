/**
 * SquareHero Plugin Installer
 * This script runs once to install the SquareHero Advanced Product Manager plugin
 * and then removes itself from the site.
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
    
    // UI Functions - copied from extension for consistent experience
    
    // Show installation progress UI
    function showInstallationProgress() {
        // Remove any existing prompt
        const existingPrompt = document.getElementById('squarehero-install-prompt');
        if (existingPrompt) {
            existingPrompt.remove();
        }
        
        const promptHTML = `
            <div id="squarehero-install-prompt" style="
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 999999;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            ">
                <div style="
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                    max-width: 500px;
                    width: 90%;
                    overflow: hidden;
                ">
                    <div style="
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        padding: 30px;
                        text-align: center;
                        color: white;
                    ">
                        <div style="font-size: 48px; margin-bottom: 10px;">⚡</div>
                        <h2 style="margin: 0; font-size: 24px; font-weight: 600;">Installing Plugin</h2>
                    </div>
                    
                    <div style="padding: 30px;">
                        <div id="install-progress-container">
                            <div id="progress-message" style="
                                text-align: center;
                                font-size: 16px;
                                color: #666;
                                margin-bottom: 20px;
                            ">Preparing installation...</div>
                            
                            <div style="
                                background: #f0f0f0;
                                height: 8px;
                                border-radius: 4px;
                                overflow: hidden;
                                position: relative;
                            ">
                                <div id="progress-bar" style="
                                    background: linear-gradient(90deg, #667eea, #764ba2);
                                    height: 100%;
                                    width: 0%;
                                    border-radius: 4px;
                                    transition: width 0.3s ease;
                                "></div>
                            </div>
                            
                            <div id="progress-percentage" style="
                                text-align: center;
                                font-size: 14px;
                                color: #999;
                                margin-top: 10px;
                            ">0%</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', promptHTML);
    }
    
    // Update progress
    function updateProgress(percentage, message) {
        const progressBar = document.getElementById('progress-bar');
        const progressMessage = document.getElementById('progress-message');
        const progressPercentage = document.getElementById('progress-percentage');
        
        if (progressBar) {
            progressBar.style.width = percentage + '%';
        }
        if (progressMessage) {
            progressMessage.textContent = message;
        }
        if (progressPercentage) {
            progressPercentage.textContent = percentage + '%';
        }
    }
    
    // Show success message
    function showInstallationSuccess(pageUrl, password) {
        const prompt = document.getElementById('squarehero-install-prompt');
        if (!prompt) return;
        
        prompt.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 999999;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            ">
                <div style="
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                    max-width: 550px;
                    width: 90%;
                    overflow: hidden;
                ">
                    <div style="
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        padding: 40px;
                        text-align: center;
                        color: white;
                    ">
                        <div style="font-size: 64px; margin-bottom: 15px;">🎉</div>
                        <h2 style="margin: 0; font-size: 28px; font-weight: 600;">Installation Complete!</h2>
                    </div>
                    
                    <div style="padding: 30px;">
                        <p style="text-align: center; font-size: 16px; color: #666; margin-bottom: 25px;">
                            Your Advanced Product Manager has been successfully installed!
                        </p>
                        
                        <div style="
                            background: #f5f5f5;
                            border-radius: 8px;
                            padding: 20px;
                            margin-bottom: 25px;
                        ">
                            <div style="margin-bottom: 15px;">
                                <label style="display: block; font-size: 12px; color: #999; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 0.5px;">Plugin URL</label>
                                <input type="text" readonly value="${pageUrl}" style="
                                    width: 100%;
                                    padding: 10px;
                                    border: 1px solid #ddd;
                                    border-radius: 4px;
                                    font-family: monospace;
                                    font-size: 14px;
                                    background: white;
                                    box-sizing: border-box;
                                " onclick="this.select()">
                            </div>
                            
                            <div>
                                <label style="display: block; font-size: 12px; color: #999; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 0.5px;">Password</label>
                                <input type="text" readonly value="${password}" style="
                                    width: 100%;
                                    padding: 10px;
                                    border: 1px solid #ddd;
                                    border-radius: 4px;
                                    font-family: monospace;
                                    font-size: 14px;
                                    background: white;
                                    box-sizing: border-box;
                                " onclick="this.select()">
                            </div>
                        </div>
                        
                        <div style="text-align: center;">
                            <button onclick="window.location.href='${pageUrl}'" style="
                                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                                color: white;
                                border: none;
                                padding: 12px 30px;
                                font-size: 16px;
                                border-radius: 6px;
                                cursor: pointer;
                                font-weight: 600;
                                margin-right: 10px;
                            ">Access Plugin</button>
                            
                            <button onclick="document.getElementById('squarehero-install-prompt').remove()" style="
                                background: white;
                                color: #667eea;
                                border: 2px solid #667eea;
                                padding: 10px 30px;
                                font-size: 16px;
                                border-radius: 6px;
                                cursor: pointer;
                                font-weight: 600;
                            ">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Show error message
    function showInstallationError(errorMessage) {
        const prompt = document.getElementById('squarehero-install-prompt');
        if (!prompt) return;
        
        prompt.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 999999;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            ">
                <div style="
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                    max-width: 500px;
                    width: 90%;
                    overflow: hidden;
                ">
                    <div style="
                        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                        padding: 30px;
                        text-align: center;
                        color: white;
                    ">
                        <div style="font-size: 48px; margin-bottom: 10px;">⚠️</div>
                        <h2 style="margin: 0; font-size: 24px; font-weight: 600;">Installation Failed</h2>
                    </div>
                    
                    <div style="padding: 30px; text-align: center;">
                        <p style="font-size: 16px; color: #666; margin-bottom: 25px;">${errorMessage}</p>
                        
                        <button onclick="window.location.reload()" style="
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            color: white;
                            border: none;
                            padding: 12px 30px;
                            font-size: 16px;
                            border-radius: 6px;
                            cursor: pointer;
                            font-weight: 600;
                            margin-right: 10px;
                        ">Try Again</button>
                        
                        <button onclick="document.getElementById('squarehero-install-prompt').remove()" style="
                            background: white;
                            color: #667eea;
                            border: 2px solid #667eea;
                            padding: 10px 30px;
                            font-size: 16px;
                            border-radius: 6px;
                            cursor: pointer;
                            font-weight: 600;
                        ">Close</button>
                    </div>
                </div>
            </div>
        `;
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
            return;
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
        const timestamp = new Date().toISOString();
        
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
        
        const result = await createResponse.json();
        console.log('✓ Plugin page created successfully');
        
        // Store the page password for user
        sessionStorage.setItem('sh_plugin_password', password);
        sessionStorage.setItem('sh_plugin_url', `${window.location.origin}/${CONFIG.pageUrlId}`);
        
        return result;
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
    
    // Show success message to user
    function showSuccessMessage() {
        const password = sessionStorage.getItem('sh_plugin_password');
        const url = sessionStorage.getItem('sh_plugin_url');
        
        if (!password || !url) return;
        
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            z-index: 999999;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        `;
        
        overlay.innerHTML = `
            <div style="
                background: white;
                padding: 40px;
                border-radius: 12px;
                max-width: 500px;
                text-align: center;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
            ">
                <div style="font-size: 64px; margin-bottom: 20px;">🎉</div>
                <h2 style="margin: 0 0 15px 0; font-size: 28px; color: #333;">Installation Complete!</h2>
                <p style="margin: 0 0 25px 0; font-size: 16px; color: #666; line-height: 1.6;">
                    Your Advanced Product Manager has been installed successfully!
                </p>
                <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 25px; text-align: left;">
                    <div style="font-size: 14px; color: #666; margin-bottom: 10px;">Access your plugin at:</div>
                    <div style="font-family: monospace; font-size: 14px; color: #0066cc; word-break: break-all; margin-bottom: 15px;">
                        ${url}
                    </div>
                    <div style="font-size: 14px; color: #666; margin-bottom: 10px;">Password:</div>
                    <div style="font-family: monospace; font-size: 14px; color: #333; background: white; padding: 10px; border-radius: 4px;">
                        ${password}
                    </div>
                </div>
                <button onclick="this.parentElement.parentElement.remove()" style="
                    background: #0066cc;
                    color: white;
                    border: none;
                    padding: 12px 30px;
                    font-size: 16px;
                    border-radius: 6px;
                    cursor: pointer;
                    font-weight: 600;
                ">Got it!</button>
            </div>
        `;
        
        document.body.appendChild(overlay);
        
        // Clear stored data after showing
        setTimeout(() => {
            sessionStorage.removeItem('sh_plugin_password');
            sessionStorage.removeItem('sh_plugin_url');
        }, 1000);
    }
    
    // Main installation flow
    async function runInstallation() {
        // Show progress UI immediately (skip the "begin installation" button)
        showInstallationProgress();
        updateProgress(10, "Starting installation...");
        
        // Fun installation messages
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
            const pageUrl = sessionStorage.getItem('sh_plugin_url') || `${window.location.origin}/${CONFIG.pageUrlId}`;
            const password = sessionStorage.getItem('sh_plugin_password') || '';
            
            setTimeout(() => {
                showInstallationSuccess(pageUrl, password);
                
                // Clear stored data
                sessionStorage.removeItem('sh_plugin_password');
                sessionStorage.removeItem('sh_plugin_url');
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
