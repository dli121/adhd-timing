# 工作计时 · Work Timer

一个极简的**工作计时与统计**工具:开始一项工作按「开始」,结束按「结束」并记录产出,自动汇总每个时间段里每个任务用了多久、产出了什么,并用图表可视化。

单文件、零依赖、可离线使用;也可打包成 macOS 桌面 App。

> A minimal single-file work timer with per-task stats and charts. Runs offline in any browser, and can be packaged into a desktop app with Electron.

---

## 使用方式(任选一种)

### 方式一 · 下载现成的 App(最省事)

到 **[Releases](https://github.com/dli121/work-timing/releases)** 页面下载最新的 `work-timing-macOS-arm64.zip`,解压得到「工作计时.app」,拖进「应用程序」即可双击使用。

> - 未做代码签名。首次打开若提示「无法验证开发者」:**右键点 App → 打开 → 再次点打开**,确认一次即可。
> - 该二进制仅适用于 **Apple Silicon(arm64)** 的 Mac。Intel Mac 或其它系统请用方式二自行构建。

### 方式二 · 克隆后自己跑

```bash
git clone https://github.com/dli121/work-timing.git
cd work-timing
```

然后二选一:

- **只想用一下** —— 直接用浏览器打开 `index.html` 即可,**无需安装任何东西**。
  想常驻:Safari「文件 → 添加到程序坞」;Chrome/Edge「安装此网站」。
- **想要双击运行的桌面 App** —— 需要 [Node.js](https://nodejs.org):

  ```bash
  npm install       # 安装 Electron 与打包工具
  npm start         # 开发预览(可选)
  npm run dist      # 打包,产物在 dist/mac-arm64/工作计时.app
  ```

  > 打包其它平台:改 `package.json` 里的 `build.mac.target`(如 `dmg`),或用 `electron-builder --win` / `--linux`。

---

## 功能

- ⏱ 一键开始 / 结束计时,实时秒表
- 📝 结束时记录本次「产物」(交付了什么)
- 📊 仪表盘:左侧计时,右侧按时间段(今天 / 近 7 天 / 本月 / 全部)统计
  - KPI:合计时长、任务数、记录数、平均每次
  - 图表:各任务用时(横向条形图)、近 14 天每日用时(柱状图)
- ✏️ 手动补录,或编辑任意记录的开始 / 结束时间与产物
- 💾 数据存本地(localStorage),支持导出 CSV、导出 / 导入 JSON 备份
- 🌗 自动适配浅色 / 深色模式

## 数据存储

- 数据保存在**运行环境自己的 localStorage** 里:浏览器版跟着浏览器走,桌面 App 版有独立存储,两者**不共享**。
- 迁移 / 换设备:在一处点「导出 JSON」,在另一处点「导入 JSON」。
- 清缓存或无痕模式会丢数据,重要数据请定期导出备份。

## 技术说明

- 纯 `HTML + CSS + 原生 JavaScript`,**单文件、无运行时依赖**,图表为手写 SVG / HTML,不引入任何图表库。
- 桌面版用 [Electron](https://www.electronjs.org/) 加载同一个 `index.html`,逻辑完全一致。

## 目录结构

```
index.html    # 应用本体(计时 + 统计 + 图表,单文件)
main.js       # Electron 主进程(桌面版入口)
package.json  # 打包配置与依赖
```

## License

[MIT](LICENSE)
