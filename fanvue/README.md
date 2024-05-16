# fanvue
## 一、项目介绍
基于`WebGL`+`threejs`构建三维风机可视化模块



## 二、项目安装运行
### 1、构建项目cmd执行命令：`vue create tresdemo`
```cmd
Vue CLI v5.0.8
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel
? Choose a version of Vue.js that you want to start the project with 3.x
? Where do you prefer placing config for Babel, ESLint, etc.? In package.json
? Save this as a preset for future projects? No
```

### 2、安装包依赖
- 安装three以及tres包`npm install @tresjs/core three`
- 安装tres Cientos包 `npm install @tresjs/cientos`
- 安装element-plus包`npm install element-plus --save`

> --sava 在早期版本标志用于，将安装的包信息保存到 `package.json` 文件中的 dependencies 字段中，以便在将项目部署到其他环境时可以重现相同的依赖关系。这是因为在 package.json 中列出的依赖项会在运行 `npm install` 时自动安装。在较新的版本中已经不需要了
 
### 3、创建vue组件

### 4、运行安装

- 安装项目所需依赖：`npm install` 
- 编译并热更新用于开发环境: `npm run serve` 和`npm run build`
- 编译并压缩用于生产环境：`npm run build`

## 备注
参考Tres官方文档：https://docs.tresjs.org/zh/cookbook/load-models.html