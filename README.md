# SyncroBrain 官网

基于 [v0.app](https://v0.app) 设计稿实现的营销站点：**Next.js 静态导出** + **Ant Design v6**，部署至 **Cloudflare Pages**，域名 **syncrobrain.com**。

## 本地开发

```powershell
cd website
pnpm install
pnpm dev
```

浏览器打开 http://localhost:3000

## 构建（静态 HTML）

```powershell
pnpm build
```

产物目录：`website/out/`

本地预览静态站：

```powershell
pnpm preview
```

## 部署到 Cloudflare Pages

### 方式 A — Wrangler CLI（推荐）

1. 登录 Cloudflare：`npx wrangler login`
2. 首次创建 Pages 项目（只需一次）：

   ```powershell
   pnpm build
   npx wrangler pages project create syncrobrain-website --production-branch=master
   npx wrangler pages deploy out --project-name=syncrobrain-website --branch=master
   ```

3. 后续发布：

   ```powershell
   pnpm deploy
   ```

### 方式 B — GitHub Actions

在仓库 Settings → Secrets 中配置：

| Secret | 说明 |
|--------|------|
| `CLOUDFLARE_API_TOKEN` | Pages 编辑权限 |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare 账户 ID |

推送至 `master` 且 `website/**` 有变更时，`.github/workflows/website-cloudflare.yml` 会自动构建并部署。

### 绑定自定义域名 syncrobrain.com

1. Cloudflare Dashboard → **Workers & Pages** → **syncrobrain-website** → **Custom domains**
2. 添加 `syncrobrain.com` 与 `www.syncrobrain.com`
3. 若域名已在 Cloudflare DNS，CNAME 会自动配置；否则按提示添加 DNS 记录

## 技术栈

- Next.js 15（`output: 'export'` 全站静态）
- Ant Design 6 + `@ant-design/nextjs-registry`
- Tailwind CSS 4（设计 token 与布局辅助）
- Cloudflare Pages + Wrangler 4

## 目录

```text
website/
├── app/              # App Router（layout + 首页）
├── components/       # 页面区块（Hero、Features、Pricing…）
├── public/           # 静态资源
├── wrangler.jsonc    # Cloudflare Pages 配置
└── out/              # 构建输出（gitignore）
```
