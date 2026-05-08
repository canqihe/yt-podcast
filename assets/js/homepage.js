// ===== 主入口文件 =====
// 协调加载文章数据并初始化各模块

(async function() {
    'use strict';

    /**
     * 初始化应用
     */
    async function initApp() {
        console.log('初始化应用...');

        // 等待 DOM 加载完成
        if (document.readyState === 'loading') {
            await new Promise(resolve => {
                document.addEventListener('DOMContentLoaded', resolve);
            });
        }

        // 渲染文章（数据已由 articles-data.js 加载到全局）
        if (typeof articlesData !== 'undefined' && articlesData.length > 0) {
            if (typeof renderArticles === 'function') {
                renderArticles(articlesData);
            } else {
                console.error('renderArticles 函数未找到，请确保 articles-renderer.js 已加载');
            }
        } else {
            console.warn('没有文章数据可显示');
        }
    }

    // 初始化
    initApp();

})();
