# 个人主页 · Personal Homepage

一个基础的、中英双语的个人主页，使用 **纯 HTML / CSS / JavaScript** 实现，无需任何构建工具，双击或本地服务器即可预览。

## 页面板块

- 首屏 Hero（头像 + 名字 + 一句话介绍）
- 个人简介 About
- 我的爱好 Hobbies
- 项目 · 作品 Projects
- 教育经历 Education
- 联系方式 Contact

## 如何在本地查看

**方式一（最简单）**：直接双击打开 `index.html` 即可。

> 注意：部分功能（如读取本地数据）在 `file://` 协议下会有限制，推荐用方式二。

**方式二（推荐）**：用本地服务器打开。在项目根目录执行：

```bash
# 用 Python 自带的静态服务器
python3 -m http.server 8000
```

然后浏览器打开 <http://localhost:8000>

## 如何改成你自己的信息

项目中所有带 `[方括号]` 的都是占位符，你只需要：

1. 在 `index.html` 中搜索 `[` ，把 `[你的姓名]`、`[你的学校]`、`[爱好]` 等替换成你自己的内容。
2. 上传你的照片到 `assets/` 文件夹，并把文件名改成 **`avatar.png`**（或 `avatar.jpg` / `avatar.jpeg` / `avatar.webp`），主页会自动以圆形头像显示。若图片不存在，会显示一个纯色圆作为占位。想生效时 URL 里填哪个后缀，就改 `index.html` 里 `src` 对应的文件名。
3. 联系方式默认只保留占位，出于隐私考虑建议不要公开展示手机号 / 真实住址。
4. 想换主题色，打开 `css/style.css`，修改 `:root` 里的 `--color-primary` 成你喜欢的颜色即可。

## 如何让其他设备（手机 / 平板）访问

在项目根目录执行：

```bash
./serve.sh          # 默认端口 8000
```

或在 macOS 中直接双击 `启动主页.command`。脚本启动后会在终端打印当前的局域网地址，
例如 `http://10.11.7.148:8000`，在同一 Wi-Fi 下的手机浏览器输入该地址即可打开。

- 对外提供的入口是 `index.html`（内容同步自最新版主页 `personal-homepageV2.html`）。
  以后修改主页内容，请直接改 `index.html`。
- 需要 Mac 保持开机，且手机与电脑处于同一 Wi-Fi。
- 更完整的注意事项见 `docs/` 目录下的《个人主页局域网访问说明》。

## 如何上传到 GitHub Pages（免费部署，让同学能通过网址访问）

1. 在 GitHub 新建一个仓库，**仓库名建议填 `你的用户名.github.io`**（这样能直接用 `https://你的用户名.github.io` 访问）。
2. 用 Git 同步本项目：

```bash
git init
git add .
git commit -m "feat: 初始化个人主页"
git branch -M main
git remote add origin https://github.com/你的用户名/你的仓库名.git
git push -u origin main
```

3. 打开仓库的 **Settings → Pages**，Source 选 `Deploy from a branch`，分支选 `main`，目录选 `/(root)`，保存。
4. 等一两分钟，访问 `https://你的用户名.github.io/仓库名/` 即可看到你的主页。

> 小提示：若仓库名不是 `用户名.github.io`，主页会挂在子路径下，此时 `index.html` 里的资源路径建议用相对路径（本项目已全部使用 `./` 相对路径，可直接适配）。

## 技术栈

- HTML5 / CSS3 / JavaScript（原生，无框架）
- 响应式布局（手机 / 平板 / 桌面）
- 渐进增强：滚动淡入、导航高亮、移动端菜单

## License

MIT
