# Micro-Frontend

## Server-Side-Integration

### 实现方式
部署nginx或者其它静态资源服务作为路由中心，
不同的子应用（打包之后的index.html及配套资源）host在不同的文件夹中

### 特点
- 子应用之间完全隔离
    - 独立开发
    - 可独立部署
- 子应用开发新的功能需要主应用重新打包image并部署
