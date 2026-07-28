// ===== 文章渲染模块 =====
// 负责从数据生成文章卡片 HTML

/**
 * 生成单个文章卡片的 HTML
 * @param {Object} article - 文章数据对象
 * @returns {string} - 卡片 HTML 字符串
 */
function createArticleCard(article) {
    const tagsHtml = article.tags.slice(0, 3).map(tag => `<span class="card-tag">${tag}</span>`).join('');
    // 只保留 category 的第一个词（在" · "之前）
    const singleWordCategory = article.category.split(' · ')[0];

    return `
        <a href="${article.url}" class="article-card ${article.card_class}" target="_blank" rel="noopener">
            <div class="card-header">
                <span class="card-category">${singleWordCategory}</span>
                <span class="card-meta">${article.date}</span>
            </div>
            <h3 class="card-title">${article.title}</h3>
            <p class="card-excerpt">
                ${article.excerpt}
            </p>
            <div class="card-tags">
                ${tagsHtml}
            </div>
            <div class="card-footer">
                <span class="read-link">
                    阅读全文
                    <span class="read-arrow">→</span>
                </span>
                <span class="card-stat">⏱ 约 20 分钟</span>
            </div>
        </a>
    `;
}

/**
 * 渲染所有文章到页面
 * @param {Array} articlesData - 文章数据数组
 */
function renderArticles(articlesData) {
    console.log('renderArticles: 开始渲染, 文章数=' + articlesData.length);
    const articlesGrid = document.getElementById('articlesGrid');
    if (articlesGrid) {
        const html = articlesData.map(createArticleCard).join('');
        console.log('renderArticles: 生成的HTML长度=' + html.length);
        articlesGrid.innerHTML = html;
        console.log('renderArticles: 插入完成, 当前子元素数=' + articlesGrid.children.length);

        // 初始化滚动动画和列表功能
        setTimeout(() => {
            if (typeof initScrollAnimations === 'function') {
                initScrollAnimations();
                console.log('renderArticles: initScrollAnimations 已调用');
            }
            // 初始化列表功能（搜索、分页）
            if (typeof initArticlesList === 'function') {
                initArticlesList();
                console.log('renderArticles: initArticlesList 已调用');
            }
        }, 100);
    } else {
        console.error('renderArticles: 找不到 articlesGrid 元素!');
    }
}
