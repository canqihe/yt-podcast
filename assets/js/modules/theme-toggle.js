// ===== 主题切换模块 =====
// 支持深色/浅色模式切换

(function() {
    'use strict';

    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    /**
     * 初始化主题（根据系统偏好）
     */
    function initTheme() {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
    }

    /**
     * 设置主题
     * @param {string} theme - 'dark' 或 'light'
     */
    function setTheme(theme) {
        html.setAttribute('data-theme', theme);
        updateButtonIcon(theme);
        updateLogo(theme);
    }

    /**
     * 更新按钮图标
     * @param {string} theme - 'dark' 或 'light'
     */
    function updateButtonIcon(theme) {
        if (!themeToggle) return;
        themeToggle.setAttribute('data-mode', theme);
        themeToggle.title = theme === 'dark' ? '夜间模式' : '日间模式';
    }

    /**
     * 更新 Logo（深色模式切换为反色版本）
     * @param {string} theme - 'dark' 或 'light'
     */
    function updateLogo(theme) {
        const logoSrc = theme === 'dark' ? 'assets/images/logo-night.svg' : 'assets/images/logo.svg';
        // 更新页面内所有 logo img
        document.querySelectorAll('img[src*="logo"]').forEach(function(img) {
            img.src = logoSrc;
        });
        // 更新 favicon
        const favicon = document.querySelector('link[rel="icon"]');
        if (favicon) {
            favicon.href = logoSrc;
        }
    }

    /**
     * 切换主题
     */
    function toggleTheme() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        setTheme(newTheme);

        // 按钮动画效果
        if (themeToggle) {
            themeToggle.style.transform = 'scale(0.9) rotate(15deg)';
            setTimeout(() => {
                themeToggle.style.transform = '';
            }, 150);
        }
    }

    // 初始化
    initTheme();

    // 绑定切换事件
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // 监听系统主题变化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        setTheme(e.matches ? 'dark' : 'light');
    });

})();
