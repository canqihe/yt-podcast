// ===== 滚动显示动画模块 =====
// 使用 Intersection Observer API 实现高性能滚动动画

(function() {
    'use strict';

    let reveals = [];
    let revealObserver = null;

    /**
     * 初始化 Intersection Observer
     */
    function initIntersectionObserver() {
        if ('IntersectionObserver' in window) {
            revealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // 动画完成后停止观察
                        revealObserver.unobserve(entry.target);
                    }
                });
            }, {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            });

            reveals.forEach(element => {
                revealObserver.observe(element);
            });
        }
    }

    /**
     * 节流函数
     */
    function throttle(func, wait) {
        let timeout;
        let lastRan;
        return function() {
            const context = this;
            const args = arguments;
            if (!lastRan) {
                func.apply(context, args);
                lastRan = Date.now();
            } else {
                clearTimeout(timeout);
                timeout = setTimeout(function() {
                    if ((Date.now() - lastRan) >= wait) {
                        func.apply(context, args);
                        lastRan = Date.now();
                    }
                }, wait - (Date.now() - lastRan));
            }
        };
    }

    /**
     * 传统的滚动监听（降级方案）
     */
    function revealOnScroll() {
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const revealPoint = 150;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    }

    /**
     * 初始化滚动动画（公共接口）
     */
    function initScrollAnimations() {
        // 清理旧的 observer
        if (revealObserver) {
            revealObserver.disconnect();
        }

        reveals = Array.from(document.querySelectorAll('.reveal'));

        if ('IntersectionObserver' in window) {
            initIntersectionObserver();
        } else {
            // 降级方案
            window.addEventListener('scroll', throttle(revealOnScroll, 100));
            window.addEventListener('load', revealOnScroll);
        }
    }

    // 导出到全局作用域（供其他模块调用）
    window.initScrollAnimations = initScrollAnimations;

    // 页面加载完成后初始化
    if (document.readyState === 'loading') {
        window.addEventListener('load', initScrollAnimations);
    } else {
        initScrollAnimations();
    }

})();
