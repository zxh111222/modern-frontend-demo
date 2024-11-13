// vite.config.js 中配置了 js/app.js 是入口文件
// 这里除了可以写 js 代码，也可以通过 import 的方式导入 css 或者说 scss 等更现代的样式文件
// vite 会帮我们自动识别，并编译

// 比如：导入之前提到的更现代化的 scss 样式
import '../scss/app.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'