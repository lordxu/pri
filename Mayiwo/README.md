# Mafengwo

模仿马蜂窝做的手机端网站

使用Vue-cli搭建项目，Sass + Vue + Vue-router 开发

项目结构：

> src
>> assets 静态资源
>>> style 样式文件
>>
>> pages 页面
>>> home 主页面  
>>> search 搜索页面  
>>> detail 详情页面
>>
>> router 路由配置  
>> store 公共状态  
>> usual 全局函数
>
> static
>> mock 模拟后端数据

构建设置：
```
# 安装相关依赖
npm install

# 运行开发版本，localhost:8080端口开启热重载
npm run dev

# 打包生产版本
npm run build
```