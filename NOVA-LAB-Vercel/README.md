# NOVA LAB Angola — Vercel版

这是可直接部署到 Vercel 的标准 Next.js 网站项目。

## 网站内容

- `/` — NOVA LAB品牌主页及商品列表
- `/nova-3d-lab` — NOVA 3D LAB业务主页
- `/nova-3d-lab/filamentos` — 3D打印耗材目录
- `/nova-3d-lab/produtos/...` — 6个独立商品页面
- `/sobre-nos` — 关于我们
- `/contacto` — 联系方式、地址及WhatsApp

## 上传至Vercel

### 方法一：通过GitHub

1. 在GitHub新建仓库。
2. 将本项目全部文件上传到仓库根目录。
3. 登录Vercel，选择 **Add New → Project**。
4. 导入该GitHub仓库。
5. Framework Preset选择 **Next.js**。
6. Build Command保持 `next build`，点击Deploy。

### 方法二：Vercel CLI

安装Node.js后，在本项目目录执行：

```bash
npm install
npm run build
npx vercel
```

## 绑定www.novalab.ao

部署完成后进入Vercel项目：

1. 打开 **Settings → Domains**。
2. 添加 `novalab.ao` 和 `www.novalab.ao`。
3. 按Vercel提示到域名服务商修改DNS记录。
4. 建议将 `www.novalab.ao` 设为主域名，并把根域名重定向至www版本。

## 更新商品

商品数据位于：

`app/nova-3d-lab/produtos/catalog.tsx`

修改商品名称、价格、说明和图片后，重新部署即可。

## 联系信息

- 地址：Camama Shopping Popular, Bloco 11, Lojas B03–04, Luanda, Angola
- WhatsApp：+244 946 459 991
