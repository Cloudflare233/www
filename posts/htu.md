---
title: "How to create a Nextjs App like my Website."
date: "2021-03-12"
---

#### 介绍

嘿，你好。正如您所看见的，这是一个基于Nextjs, Geist-UI的响应式网站启动器，他非常简陋，因为我只花了不到两天去写它，这没有什么可自豪的，因为谁都知道，**慢工出细活**。

这个网站的特点真的没有很多，但他配置简单，拥有绝佳的Lighthouse评分，简洁的用户界面，文件很少（因为作者菜）。但很迅速有效，配置它只需5-20分钟，即可以将您的静态网站发布到Vercel或者您的云服务器。

当然，如果您提供有效的`manifest.json`给Nextjs，它是可安装的。

#### 对比

VS Nextjs Learn Starter

好像功能上并没有区别，只是评分高了点。

VS Hexo

简洁之上，这两个本质上有一定区别，这个启动器是为了使您能够专心于写作，而不是专心于优化博客。

VS Others...

#### 安装

安装它非常容易，就像鸭子汤：

克隆它：

```sh
git clone git@github.com:Cloudflare233/www.git
```

运行开发服务器

```sh
yarn && yarn dev
```

或者:

```sh
npm install && npm run dev
```

#### 运行

当一切都就绪的时候，您打开<a href="http://localhost:3000/">http://localhost:3000</a>.将会看到如下画面

<Image src="https://cdn.jsdelivr.net/gh/Cloudflare233/www/public/done.webp" alt="http://localhost:3000" width="100%" />

#### 配置

配置它非常简单因为配置项都包含在`blog.config.js`中了，您几乎不需要修改任何源文件:

```js
const BLOG = {
title: "Andrew (@Cloudflare233)",
user: "Andrew",
lang: "en",
description: "Hi there! I'm Andrew! Nice to meet you! I'm a student from china. Do something uninteresting and share something interesting.",
other: "I dislike writing blogs. Because I can not write good things. I have not finished studying English. I 'm still a student. That everyone in this world is the student of the earth and nature.",
}

export default BLOG
```

#### 发布

Vercel

#### MIT
