# 设计规范文档

**设计名称**：深色渐变风格 - 视频总结文章网页
**创建日期**：2025-01-25
**参考文件**：`/Users/colin/yt-podcast/articles/moonshots-ai-2026.html`

---

## 📋 快速开始

### 使用方法

1. **引用设计系统**
   ```html
   <link rel="stylesheet" href="design-system/design-tokens.css">
   <link rel="stylesheet" href="design-system/style.css">
   ```

2. **使用空白模板**
   - 复制 `design-system/template.html`
   - 填入你的内容

3. **告诉 AI 生成网页**
   ```
   请使用我的 design-system 文件夹中的设计系统为文章生成网页
   文章内容：Desktop/a.txt
   ```

---

## 🎨 设计系统概览

### 核心特征

- **主题**：深色科技风格
- **配色**：橙色 → 青色渐变
- **字体**：系统字体栈
- **布局**：卡片式网格
- **交互**：Hover 提升 + 滚动动画

---

## 🎨 配色方案

### 基础色彩（固定不变）

| 用途 | CSS 变量 | 颜色值 | 说明 |
|------|---------|--------|------|
| 背景 | `--bg-primary` | #0a0a0b | 深黑色背景 |
| 卡片背景 | `--bg-card` | #141416 | 稍浅的背景 |
| 主文本 | `--text-primary` | #ffffff | 纯白 |
| 次要文本 | `--text-secondary` | #a0a0a0 | 中灰色 |
| 第三文本 | `--text-tertiary` | #666666 | 深灰色 |
| 边框 | `--border` | #2a2a2e | 深灰色边框 |

### 强调色（每篇文章随机选择一套）

生成文章时，从以下 6 套方案中**随机选择一套**，替换 `:root` 中的 5 个变量：

| # | 方案名 | `--accent-primary` | `--accent-secondary` | `--accent-primary-rgb` | `--accent-secondary-rgb` |
|---|--------|-------------------|---------------------|----------------------|------------------------|
| 1 | 橙青 | `#ff6b35` | `#00d4ff` | `255, 107, 53` | `0, 212, 255` |
| 2 | 紫粉 | `#a855f7` | `#ec4899` | `168, 85, 247` | `236, 72, 153` |
| 3 | 绿黄 | `#22c55e` | `#eab308` | `34, 197, 94` | `234, 179, 8` |
| 4 | 蓝靛 | `#ff4081` | `#3b82f6` | `59, 130, 246` | `129, 140, 248` |
| 5 | 珊瑚金 | `#f97066` | `#fbbf24` | `249, 112, 102` | `251, 191, 36` |
| 6 | 青紫 | `#14b8a6` | `#a78bfa` | `20, 184, 166` | `167, 139, 250` |

**只需要替换这 5 个变量**，所有引用 `var(--accent-primary)` / `var(--accent-secondary)` / `var(--accent-primary-rgb)` / `var(--accent-secondary-rgb)` 的样式会自动更新，包括渐变、光晕、阴影、引用块等。

### 渐变

```css
/* 主标题渐变（固定） */
background: linear-gradient(135deg, #ffffff 0%, #666666 100%);

/* 强调色渐变（自动继承配色方案） */
background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%);

/* 数字渐变（固定） */
background: linear-gradient(180deg, var(--border) 0%, transparent 100%);
```

---

## ✏️ 排版系统

### 字体

- **主字体**：系统字体栈（`-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif`）
- **等宽字体**：SF Mono, Monaco, Inconsolata（用于时间戳）

### 字号

| 元素 | CSS 变量 | 值 |
|------|---------|-----|
| 超大标题 | `--font-size-hero` | clamp(48px, 10vw, 120px) |
| 章节标题 | `--font-size-section` | clamp(32px, 5vw, 56px) |
| 主题标题 | `--font-size-topic` | clamp(24px, 4vw, 36px) |
| 章节编号 | `--font-size-number` | clamp(64px, 15vw, 120px) |
| 正文 | `--font-size-body` | 16px |
| 小字 | `--font-size-small` | 12px |
| 微小字 | `--font-size-tiny` | 11px |

### 字重

- 300: Light（副标题）
- 400: Regular（正文）
- 600: Semibold（徽章、按钮）
- 700: Bold（卡片标题）
- 800: Extra Bold（所有标题）

---

## 📐 组件库

### 1. Badge（徽章）

```html
<span class="badge">The MAD Podcast</span>
```

**内容规则**：
- 优先使用**播客频道名称**（如果有）
- 如果没有频道信息，使用内容分类标签

**样式**：
- 胶囊形状（`border-radius: 100px`）
- 内边距：8px 16px
- 边框：1px solid #2a2a2e
- Hover：边框变白色

---

### 2. Title（标题）

```html
<h1 class="title">
  <span class="title-line-1">第一行</span>
  <span class="title-line-2">第二行（渐变）</span>
</h1>
```

**样式**：
- 超大字号（最大 120px）
- 字重 800
- 字间距 -0.03em
- 第二行使用橙→青渐变

**约束：标题严格不超过两行。**

---

### 3. Meta Grid（元信息网格）

```html
<div class="meta-grid">
  <div class="meta-item">
    <div class="meta-label">主持人</div>
    <div class="meta-value">Harry Stebbings</div>
  </div>
  <div class="meta-item">
    <div class="meta-label">时长</div>
    <div class="meta-value">1:21:57</div>
  </div>
</div>
```

**样式**：
- 响应式网格（最小 200px）
- 顶部边框分隔
- 标签全大写，字间距加宽

---

### 4. CTA Button（行动按钮）

```html
<a href="#" class="cta-button">
  <svg>...</svg>
  观看完整视频
</a>
```

**样式**：
- 橙→青渐变背景
- 胶囊形状
- 内边距：16px 32px
- 橙色发光阴影
- Hover：向上 2px + 阴影加强

---

### 5. Point Card（要点卡片）

```html
<div class="point-card">
  <div class="point-number">01</div>
  <h3 class="point-title">标题</h3>
  <p class="point-desc">描述内容</p>
</div>
```

**样式**：
- 深色背景（#141416）
- 边框：1px solid #2a2a2e
- 顶部隐藏的渐变线（Hover 时显示）
- Hover：边框变橙色 + 向上 4px

---

### 6. Topic（章节）

```html
<div class="topic">
  <div class="topic-header">
    <span class="topic-number">01</span>
    <div class="topic-info">
      <h3 class="topic-title">章节标题</h3>
      <span class="topic-timestamp">01:19 - 14:00</span>
    </div>
  </div>
  <div class="topic-content">
    <div class="topic-section-title">核心观点</div>
    <p class="topic-core-point">...</p>
    <div class="topic-detail">
      <div class="topic-detail-label">标签</div>
      <p class="topic-detail-content">内容</p>
    </div>
  </div>
</div>
```

**样式**：
- 大号渐变编号（灰色渐变）
- 时间戳：等宽字体 + 青色
- 内容卡片：左侧大边距
- Detail：左侧 2px 灰色边框

---

### 7. Quote Block（引用块）

```html
<div class="quote-block">
  引用内容...
</div>
```

**样式**：
- 左侧 3px 橙色边框
- 半透明橙色背景（rgba(255, 107, 53, 0.05)）
- 斜体

---

### 8. Thought Block（思考块）

```html
<div class="thought-block">
  <div class="thought-label">个人感受</div>
  内容...
</div>
```

**样式**：
- 灰色边框
- 圆角 12px
- 标签全大写

---

### 9. Data Table（数据表格）

```html
<table class="data-table">
  <thead>
    <tr>
      <th>列标题1</th>
      <th>列标题2</th>
      <th>列标题3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>数据1</td>
      <td>数据2</td>
      <td>数据3</td>
    </tr>
    <tr>
      <td>数据4</td>
      <td>数据5</td>
      <td>数据6</td>
    </tr>
  </tbody>
</table>
```

**样式**：
- 深色半透明背景（rgba(255, 255, 255, 0.02)）
- 表头：强调色半透明背景 + 橙色文字 + 大写字母
- 单元格：底部边框分隔
- Hover：行背景高亮
- 移动端：字号缩小，内边距减小

**使用场景**：展示对比数据、时间线、价格走势等结构化信息

---

### 10. Takeaway Card（收获卡片）

```html
<div class="takeaway-card">
  <div class="takeaway-emoji">💡</div>
  <h3 class="takeaway-title">标题</h3>
  <p class="takeaway-desc">内容</p>
</div>
```

**样式**：
- Hover：边框变青色 + 向上 4px
- Emoji：40px

---

## 🎬 交互效果

### Hover 效果

1. **卡片提升**
   ```css
   transform: translateY(-4px);
   ```

2. **边框变色**
   ```css
   border-color: var(--accent-orange);
   /* 或 */
   border-color: var(--accent-cyan);
   ```

3. **阴影发光**
   ```css
   box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
   ```

### 滚动动画

**实现方式：使用 CSS Transition 避免闪动**

```css
/* 初始状态 - 隐藏 */
.point-card,
.takeaway-card,
.topic {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

/* 触发动画 - 显示 */
.point-card.animate-in,
.takeaway-card.animate-in,
.topic.animate-in {
  opacity: 1;
  transform: translateY(0);
}
```

**Header 元素使用 Keyframes（页面加载时触发）**：
```css
.header .animate-in {
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
}
```

**JavaScript 触发**：
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.point-card, .takeaway-card, .topic').forEach(el => {
  observer.observe(el);
});
```

**使用示例**：
```html
<!-- Header 元素 - 使用 keyframes -->
<div class="badge-wrapper animate-in">...</div>
<span class="title-line-1 animate-in delay-1">...</span>

<!-- 卡片元素 - 使用 transition -->
<div class="point-card">...</div>
<div class="takeaway-card">...</div>
<div class="topic">...</div>
```

**延迟类**：
```css
.delay-1 { transition-delay: 0.1s; }
.delay-2 { transition-delay: 0.2s; }
.delay-3 { transition-delay: 0.3s; }
.delay-4 { transition-delay: 0.4s; }
```

---

## 📱 响应式设计

### 断点

- **移动端**：< 768px
  - 单列布局
  - 章节内容左边距归零
  - 字号使用 clamp() 自动缩放

- **桌面端**：≥ 768px
  - 多列网格布局
  - 章节内容左边距 120px

---

## 🖼️ Header 背景图（可选）

如果文章有封面图/嘉宾照片，应在 Header 中添加背景图，提升视觉层次感。

### 有背景图时的样式

将 `.header::before` 从纯渐变替换为**渐变遮罩 + 背景图**，并新增 `.header::after` 作为额外的光晕叠加层：

```css
.header::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background:
        /* 渐变遮罩：左侧纯黑确保文字可读，右侧透出图片 */
        linear-gradient(to left, rgba(10, 10, 11, 0.3) 0%, rgba(10, 10, 11, 0.95) 40%, var(--bg-primary) 70%),
        /* 背景图 */
        url('images/图片文件名.jpg') no-repeat right center / cover;
    pointer-events: none;
    opacity: 0.6;
}

/* 额外的渐变叠加层（橙色+青色光晕） */
.header::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: radial-gradient(ellipse at top right, rgba(255, 107, 53, 0.15) 0%, transparent 50%),
                radial-gradient(ellipse at bottom left, rgba(0, 212, 255, 0.12) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
}
```

### 无背景图时的样式（默认）

```css
.header::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: radial-gradient(ellipse at top right, rgba(255, 107, 53, 0.1) 0%, transparent 50%),
                radial-gradient(ellipse at bottom left, rgba(0, 212, 255, 0.08) 0%, transparent 50%);
    pointer-events: none;
}
/* 无背景图时不需要 .header::after */
```

### 使用规范

| 项目 | 说明 |
|------|------|
| 图片路径 | `articles/images/文章名-bg.jpg` |
| 图片来源 | YouTube 封面图、嘉宾照片、视频截图等 |
| 遮罩方向 | 从右到左渐变，右侧透出图片，左侧纯黑保文字可读 |
| 透明度 | `opacity: 0.6`，保持图片不抢文字焦点 |
| 判断标准 | 有图片就用背景图版，没有就用默认渐变版 |

---

## 🏗️ 页面结构

```html
<body>
  <!-- Header -->
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="badge-wrapper">...</div>
        <h1 class="title">...</h1>
        <p class="subtitle">...</p>
        <div class="meta-grid">...</div>
        <a class="cta-button">...</a>
      </div>
    </div>
  </header>

  <!-- Core Points -->
  <section class="section">
    <div class="container">
      <h2 class="section-title">核心要点</h2>
      <div class="points-grid">
        <div class="point-card">...</div>
      </div>
    </div>
  </section>

  <div class="divider"></div>

  <!-- Topics -->
  <section class="section">
    <div class="container">
      <h2 class="section-title">深度洞察</h2>
      <div class="topic">...</div>
    </div>
  </section>

  <div class="divider"></div>

  <!-- Takeaways -->
  <section class="section">
    <div class="container">
      <h2 class="section-title">精华收获</h2>
      <div class="takeaways-grid">
        <div class="takeaway-card">...</div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">...</div>
  </footer>
</body>
```

---

## 💡 使用技巧

### 技巧 1：使用 Design Tokens

所有设计值都已提取为 CSS 变量，优先使用变量而非硬编码：

```css
/* ✅ 推荐 */
color: var(--text-secondary);
padding: var(--spacing-lg);

/* ❌ 避免 */
color: #a0a0a0;
padding: 24px;
```

### 技巧 2：复用组件

复制组件代码块，只修改内容：

```html
<!-- 复制这个 -->
<div class="point-card">
  <div class="point-number">01</div>
  <h3 class="point-title">新标题</h3>
  <p class="point-desc">新描述</p>
</div>
```

### 技巧 3：渐变文字

任何需要渐变文字的元素：

```css
.gradient-text {
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## 📦 文件清单

```
design-system/
├── design-tokens.css    # CSS 变量（设计 Token）
├── style.css            # 完整样式表
├── template.html        # 空白模板
├── design-spec.md       # 本文档
└── README.md            # 使用说明
```

---

## 🔄 版本历史

- **v1.0** (2025-01-25)：初始版本，提取自 moonshots-ai-2026.html
- **v1.1** (2026-03-28)：新增 Header 背景图规范
- **v1.2** (2026-03-29)：新增 Data Table 数据表格组件
