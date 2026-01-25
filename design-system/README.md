# 深色渐变风格设计系统

**用途**：视频总结文章网页
**风格**：深色科技风 + 橙青渐变
**创建日期**：2025-01-25

---

## 📁 文件结构

```
design-system/
├── design-tokens.css         # CSS 变量（设计 Tokens）
├── style.css                 # 完整样式表
├── template.html             # 空白模板（引用外部 CSS）
├── template-standalone.html  # 独立模板（内嵌所有 CSS）⭐ 推荐直接使用
├── design-spec.md            # 详细设计规范
└── README.md                 # 本文档
```

---

## 🚀 快速开始

### 方法 1：使用独立模板（最简单）⭐

**直接复制并使用**，无需其他文件：

```bash
# 复制独立模板
cp ~/Desktop/design-system/template-standalone.html ~/Desktop/my-article.html

# 编辑并打开
open ~/Desktop/my-article.html
```

**优势**：
- ✅ 单文件，包含所有 CSS
- ✅ 可以复制到任何位置
- ✅ 直接在浏览器中打开

---

### 方法 2：使用引用式模板

如果你想要 CSS 和 HTML 分离：

1. **复制整个文件夹**
   ```bash
   cp -r ~/Desktop/design-system ~/Desktop/my-project
   cd ~/Desktop/my-project
   ```

2. **编辑 template.html**

3. **预览**
   ```bash
   open template.html
   ```

---

### 方法 2：让 AI 生成

#### 告诉 AI：

```
请使用我的 design-system 为文章生成网页。

设计系统路径：~/Desktop/design-system/
文章内容路径：~/Desktop/a.txt

要求：
- 引用 design-tokens.css 和 style.css
- 严格遵循 design-spec.md 中的组件规范
- 参考 template.html 的页面结构
```

#### 或者更简单：

```
请使用 ~/Desktop/design-system/ 中的设计系统为文章生成网页
文章内容：~/Desktop/a.txt
```

---

## 📦 设计系统文件说明

### 1. `design-tokens.css` - 设计变量

包含所有 CSS 变量：
- 颜色（背景、文本、强调色）
- 字号（响应式）
- 字重
- 间距
- 边框圆角
- 阴影
- 动画时间

**用途**：提供设计的基础变量，确保一致性

---

### 2. `style.css` - 完整样式表

包含所有组件样式：
- 重置样式
- 布局
- 组件（卡片、按钮、徽章等）
- 交互效果
- 响应式断点

**用途**：直接引用，无需再写 CSS

---

### 3. `template.html` - 空白模板

预填充的 HTML 结构：
- Header 区域
- 要点区域
- 章节区域
- 收获区域
- Footer

**用途**：复制后直接填入内容

---

### 4. `design-spec.md` - 设计规范

详细的设计文档：
- 配色方案
- 排版系统
- 组件库（带代码示例）
- 交互效果
- 响应式设计

**用途**：查阅设计规范，了解每个组件的用法

---

## 🎯 使用场景

### ✅ 适合：

- YouTube 视频总结文章
- 播客内容整理
- 深度文章展示
- 技术博客
- 学习笔记

### ❌ 不适合：

- 电商产品页
- 企业官网
- 落地页（需要不同的 Hero 设计）

---

## 🎨 自定义指南

### 修改颜色

编辑 `design-tokens.css`：

```css
:root {
  /* 修改主色调 */
  --accent-orange: #ff6b35;  /* 改成你喜欢的颜色 */
  --accent-cyan: #00d4ff;    /* 改成你喜欢的颜色 */

  /* 修改背景色 */
  --bg-primary: #0a0a0b;
  --bg-card: #141416;
}
```

### 修改字体

```css
:root {
  /* 修改主字体 */
  --font-system: 'Your Font', sans-serif;
}
```

### 调整间距

```css
:root {
  /* 调整卡片内边距 */
  --card-padding: 40px;  /* 改成 32px 让卡片更紧凑 */

  /* 调整章节间距 */
  --section-padding-vertical: 120px;  /* 改成 80px 让页面更紧凑 */
}
```

---

## 💡 最佳实践

### 1. 优先使用 CSS 变量

```css
/* ✅ 推荐 */
color: var(--text-secondary);
padding: var(--spacing-lg);

/* ❌ 避免 */
color: #a0a0a0;
padding: 24px;
```

### 2. 复用组件代码

从 `template.html` 或 `design-spec.md` 复制组件代码块，只修改内容。

### 3. 保持结构一致

严格按照模板的结构顺序：
- Header → Points → Topics → Takeaways → Footer

### 4. 渐变文字使用

```html
<!-- 橙→青渐变 -->
<span class="title-line-2">渐变文字</span>

<!-- 或自定义 -->
<span style="background: var(--gradient-accent);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;">
  渐变文字
</span>
```

---

## 🔧 常见问题

### Q: 如何添加更多要点卡片？

复制一个 `point-card` 并修改编号：

```html
<div class="point-card">
  <div class="point-number">07</div>
  <h3 class="point-title">新要点</h3>
  <p class="point-desc">描述</p>
</div>
```

### Q: 如何修改时间戳颜色？

```css
.topic-timestamp {
  color: var(--accent-orange);  /* 改成橙色 */
}
```

### Q: 如何禁用滚动动画？

删除或注释掉页面底部的 `<script>` 标签。

### Q: 如何在移动端调整布局？

编辑 `style.css` 中的响应式部分：

```css
@media (max-width: 768px) {
  .points-grid {
    grid-template-columns: 1fr;  /* 改成单列 */
  }
}
```

---

## 📚 延伸阅读

- [design-spec.md](design-spec.md) - 完整设计规范
- [template.html](template.html) - 空白模板
- [design-tokens.css](design-tokens.css) - 所有 CSS 变量

---

## 📝 版本历史

- **v1.0** (2025-01-25)：初始版本，提取自 moonshots-ai-2026.html

---

## 📄 许可

本设计系统可自由使用和修改。
