# TcasView

## 介绍

基本 `geoscene api for JavaScript` 的地图预览系统，文档地址 https://doc.geoscene.cn/javascript ，仅支持Vue3

## 使用

### 克隆本仓库

```bash
git clone git@github.com:jue/tcas-package.git
```

### 使用

1. 将 `lib` 目录拷贝到 `components` 目录下，重命名为 `TcasView`
2. 在VUE项目中script标签中注册组件，如下：  
  ```javascript
  import { TcasView } from '~/components/tcas-view'
  ```
3. template中使用组件
  ```javascript
  <TcasView  />
  ```
4. 组件接受一个参数 ` baseUrl `，用于设置 `axios api` 的数据请求地址
  ```javascript
  <TcasView baseUrl="http://127.0.0.1:30192"  />
  ```
