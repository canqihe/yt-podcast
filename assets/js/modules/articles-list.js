// ===== 文章列表交互模块 =====
// 负责搜索、分页、过滤功能

(function() {
    'use strict';

    const ITEMS_PER_PAGE = 15;
    let currentPage = 1;
    let allCards = [];
    let filteredCards = [];

    // DOM 元素
    let searchInput, articlesGrid, prevBtn, nextBtn, pageNumbers, searchResultsInfo, paginationInfo;

    /**
     * 初始化列表功能
     */
    function init() {
        searchInput = document.getElementById('searchInput');
        articlesGrid = document.getElementById('articlesGrid');
        prevBtn = document.getElementById('prevBtn');
        nextBtn = document.getElementById('nextBtn');
        pageNumbers = document.getElementById('pageNumbers');
        searchResultsInfo = document.getElementById('searchResultsInfo');
        paginationInfo = document.getElementById('paginationInfo');

        if (!articlesGrid) return;

        allCards = Array.from(document.querySelectorAll('.article-card'));
        console.log('找到卡片数:', allCards.length);
        filteredCards = [...allCards];

        setupEventListeners();
        updateDisplay();
    }

    /**
     * 设置事件监听器
     */
    function setupEventListeners() {
        // 搜索功能
        if (searchInput) {
            searchInput.addEventListener('input', handleSearch);
        }

        // 分页按钮
        if (prevBtn) {
            prevBtn.addEventListener('click', goToPrevPage);
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', goToNextPage);
        }
    }

    /**
     * 处理搜索
     */
    function handleSearch(e) {
        const searchTerm = e.target.value.toLowerCase().trim();

        if (searchTerm === '') {
            filteredCards = [...allCards];
            if (searchResultsInfo) searchResultsInfo.style.display = 'none';
        } else {
            filteredCards = allCards.filter(card => {
                const title = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
                const excerpt = card.querySelector('.card-excerpt')?.textContent.toLowerCase() || '';
                const category = card.querySelector('.card-category')?.textContent.toLowerCase() || '';
                const tags = Array.from(card.querySelectorAll('.card-tag'))
                    .map(tag => tag.textContent.toLowerCase())
                    .join(' ');

                return title.includes(searchTerm) ||
                       excerpt.includes(searchTerm) ||
                       category.includes(searchTerm) ||
                       tags.includes(searchTerm);
            });

            if (searchResultsInfo) {
                searchResultsInfo.textContent = `找到 ${filteredCards.length} 篇相关文章`;
                searchResultsInfo.style.display = 'block';
            }
        }

        currentPage = 1;
        updateDisplay();
    }

    /**
     * 上一页
     */
    function goToPrevPage() {
        if (currentPage > 1) {
            currentPage--;
            updateDisplay();
            scrollToArticles();
        }
    }

    /**
     * 下一页
     */
    function goToNextPage() {
        const totalPages = Math.ceil(filteredCards.length / ITEMS_PER_PAGE);
        if (currentPage < totalPages) {
            currentPage++;
            updateDisplay();
            scrollToArticles();
        }
    }

    /**
     * 滚动到文章区域
     */
    function scrollToArticles() {
        const articlesSection = document.querySelector('.articles-section');
        if (!articlesSection) return;

        const yOffset = -20;
        const y = articlesSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }

    /**
     * 更新显示
     */
    function updateDisplay() {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        const totalPages = Math.ceil(filteredCards.length / ITEMS_PER_PAGE);

        console.log('updateDisplay: currentPage=' + currentPage + ', filteredCards=' + filteredCards.length);

        // 隐藏所有卡片
        allCards.forEach(card => {
            card.classList.add('hidden-card');
        });

        if (filteredCards.length > 0) {
            const pageCards = filteredCards.slice(startIndex, endIndex);
            pageCards.forEach(card => {
                card.classList.remove('hidden-card');
            });

            updatePaginationButtons(totalPages);

            const showStart = startIndex + 1;
            const showEnd = Math.min(endIndex, filteredCards.length);
            if (paginationInfo) {
                paginationInfo.textContent = `显示 ${showStart}-${showEnd} / 共 ${filteredCards.length} 篇`;
                paginationInfo.style.display = 'block';
            }

            removeNoResults();
        } else {
            showNoResults();
            if (paginationInfo) paginationInfo.style.display = 'none';
            updatePaginationButtons(0);
        }
    }

    /**
     * 更新分页按钮
     */
    function updatePaginationButtons(totalPages) {
        if (!prevBtn || !nextBtn || !pageNumbers) return;

        prevBtn.disabled = currentPage <= 1 || totalPages === 0;
        nextBtn.disabled = currentPage >= totalPages || totalPages === 0;

        pageNumbers.innerHTML = '';

        if (totalPages > 0) {
            let startPage = Math.max(1, currentPage - 2);
            let endPage = Math.min(totalPages, currentPage + 2);

            if (endPage - startPage < 4) {
                if (startPage === 1) {
                    endPage = Math.min(totalPages, 5);
                } else if (endPage === totalPages) {
                    startPage = Math.max(1, totalPages - 4);
                }
            }

            if (startPage > 1) {
                pageNumbers.appendChild(createPageButton(1));
                if (startPage > 2) {
                    pageNumbers.appendChild(createEllipsis());
                }
            }

            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.appendChild(createPageButton(i));
            }

            if (endPage < totalPages) {
                if (endPage < totalPages - 1) {
                    pageNumbers.appendChild(createEllipsis());
                }
                pageNumbers.appendChild(createPageButton(totalPages));
            }
        }
    }

    /**
     * 创建页码按钮
     */
    function createPageButton(pageNum) {
        const btn = document.createElement('button');
        btn.className = 'pagination-btn';
        btn.textContent = pageNum;
        if (pageNum === currentPage) {
            btn.classList.add('active');
        }
        btn.addEventListener('click', function() {
            currentPage = pageNum;
            updateDisplay();
            scrollToArticles();
        });
        return btn;
    }

    /**
     * 创建省略号
     */
    function createEllipsis() {
        const span = document.createElement('span');
        span.className = 'pagination-btn';
        span.textContent = '...';
        span.style.cursor = 'default';
        span.style.border = 'none';
        span.style.background = 'transparent';
        return span;
    }

    /**
     * 显示无结果提示
     */
    function showNoResults() {
        let noResultsDiv = document.querySelector('.no-results');
        if (!noResultsDiv && articlesGrid) {
            noResultsDiv = document.createElement('div');
            noResultsDiv.className = 'no-results';
            articlesGrid.after(noResultsDiv);
        }
        if (noResultsDiv) {
            noResultsDiv.innerHTML = `
                <div class="no-results-icon">🔍</div>
                <h3>未找到相关文章</h3>
                <p>请尝试其他关键词搜索</p>
            `;
        }
    }

    /**
     * 移除无结果提示
     */
    function removeNoResults() {
        const noResults = document.querySelector('.no-results');
        if (noResults) {
            noResults.remove();
        }
    }

    // 导出到全局作用域（供外部调用）
    window.initArticlesList = init;

    // DOMContentLoaded 后初始化（如果已存在卡片）
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            // 延迟初始化，等待文章渲染
            setTimeout(init, 100);
        });
    } else {
        setTimeout(init, 100);
    }

})();
