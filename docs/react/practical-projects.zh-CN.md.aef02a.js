(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{3262:function(a,b){a.exports={content:["article",["p","在真实项目开发中，你可能会需要 Redux 或者 MobX 这样的数据流方案，Ant Design React 作为一个 UI 库，可以和任何 React 生态圈内的数据流方案以及应用框架搭配使用。我们基于 Redux 推出了自己的最佳实践 dva，以及可插拔的企业级应用框架 umi，推荐你在项目中使用。"],["p",["a",{title:null,href:"http://dvajs.com/"},"dva"]," 是一个基于 Redux 的 轻量级数据流方案，概念来自 elm，支持 side effects、热替换、动态加载、react-native、SSR 等，已在生产环境广泛应用。"],["p",["a",{title:null,href:"http://umijs.org/"},"umi"]," 则是一个可插拔的企业级 react 应用框架。umi 以路由为基础的，支持",["a",{title:null,href:"https://umijs.org/zh/guide/router.html"},"类 next.js 的约定式路由"],"，以及各种进阶的路由功能，并以此进行功能扩展，比如",["a",{title:null,href:"https://umijs.org/zh/plugin/umi-plugin-react.html#dynamicimport"},"支持路由级的按需加载"],"。然后配以完善的",["a",{title:null,href:"https://umijs.org/zh/plugin/"},"插件体系"],"，覆盖从源码到构建产物的每个生命周期，支持各种功能扩展和业务需求，同时提供 ",["a",{title:null,href:"https://umijs.org/zh/guide/umi-ui.html"},"Umi UI"]," 通过可视化辅助编程（VAP）提高开发体验和研发效率。"],["blockquote",["p","你可能也会对 ",["a",{title:null,href:"https://pro.ant.design/"},"Ant Design Pro"]," 感兴趣，这是一个基于 umi、dva 和 ant design 的开箱即用的中台前端/设计解决方案。"]],["p","本文会引导你使用 Umi、dva 和 antd 从 0 开始创建一个简单应用。"],["h2","安装 Umi"],["p","推荐使用 yarn 创建 Umi 脚手架，执行以下命令。"],["pre",{lang:"bash",highlighted:`$ <span class="token function">mkdir</span> myapp <span class="token operator">&amp;&amp;</span> <span class="token function">cd</span> myapp
$ yarn create @umijs/umi-app
$ yarn`},["code",`$ mkdir myapp && cd myapp
$ yarn create @umijs/umi-app
$ yarn`]],["blockquote",["p","如果你使用 npm，可执行 ",["code","npx @umijs/create-umi-app"],"，效果一致。"]],["h2","安装插件集"],["p","执行以下命令，安装插件集（包括 antd、dva、国际化等常用插件）："],["pre",{lang:"bash",highlighted:`<span class="token comment" spellcheck="true"># 或 npm i @umijs/preset-react -D</span>
$ yarn add @umijs/preset-react -D`},["code",`# 或 npm i @umijs/preset-react -D
$ yarn add @umijs/preset-react -D`]],["blockquote",["p","插件默认使用 ",["code",'"antd": "^4.0.0"'],"，如果要使用固定版本的 antd，你可以在项目里安装额外的 antd 依赖，",["code","package.json"]," 里声明的 antd 依赖会被优先使用。"]],["h2","新建路由"],["p","我们要写个应用来先显示产品列表。首先第一步是创建路由，路由可以想象成是组成应用的不同页面。"],["p","然后通过命令创建 ",["code","/products"]," 路由，"],["pre",{lang:"bash",highlighted:`$ npx umi g page products --typescript

Write: src/pages/products.tsx
Write: src/pages/products.css`},["code",`$ npx umi g page products --typescript

Write: src/pages/products.tsx
Write: src/pages/products.css`]],["p","在 ",["code",".umirc.ts"]," 中配置路由，如果有国际化需要，可以配置 ",["code","locale"]," 开启 antd 国际化："],["pre",{lang:"diff",highlighted:`import { defineConfig } from 'umi';

export default defineConfig({
<span class="token inserted">+ locale: { antd: true },</span>
  routes: [
    { path: '/', component: '@/pages/index' },
<span class="token inserted">+   { path: '/products', component: '@/pages/products' },</span>
  ],
});`},["code",`import { defineConfig } from 'umi';

export default defineConfig({
+ locale: { antd: true },
  routes: [
    { path: '/', component: '@/pages/index' },
+   { path: '/products', component: '@/pages/products' },
  ],
});`]],["p","运行 ",["code","yarn start"]," 然后在浏览器里打开 ",["a",{title:null,href:"http://localhost:8000/products"},"http://localhost:8000/products"],"，你应该能看到对应的页面。"],["h2","编写 UI Component"],["p","随着应用的发展，你会需要在多个页面分享 UI 元素 (或在一个页面使用多次)，在 umi 里你可以把这部分抽成 component 。"],["p","我们来编写一个 ",["code","ProductList"]," component，这样就能在不同的地方显示产品列表了。"],["p","然后新建 ",["code","src/components/ProductList.tsx"]," 文件："],["pre",{lang:"js",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Table<span class="token punctuation">,</span> Popconfirm<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> ProductList <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> onDelete<span class="token punctuation">,</span> products <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      title<span class="token punctuation">:</span> <span class="token string">'Name'</span><span class="token punctuation">,</span>
      dataIndex<span class="token punctuation">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      title<span class="token punctuation">:</span> <span class="token string">'Actions'</span><span class="token punctuation">,</span>
      render<span class="token punctuation">:</span> <span class="token punctuation">(</span>text<span class="token punctuation">,</span> record<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>Popconfirm title<span class="token operator">=</span><span class="token string">"Delete?"</span> onConfirm<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">onDelete</span><span class="token punctuation">(</span>record<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>Button<span class="token operator">></span>Delete<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Popconfirm<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Table dataSource<span class="token operator">=</span><span class="token punctuation">{</span>products<span class="token punctuation">}</span> columns<span class="token operator">=</span><span class="token punctuation">{</span>columns<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> ProductList<span class="token punctuation">;</span>`},["code",`import { Table, Popconfirm, Button } from 'antd';

const ProductList = ({ onDelete, products }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Actions',
      render: (text, record) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];
  return <Table dataSource={products} columns={columns} />;
};

export default ProductList;`]],["h2","定义 dva Model"],["p","完成 UI 后，现在开始处理数据和逻辑。"],["p","dva 通过 ",["code","model"]," 的概念把一个领域的模型管理起来，包含同步更新 state 的 reducers，处理异步逻辑的 effects，订阅数据源的 subscriptions 。"],["p","新建 model ",["code","src/models/products.ts"],"，"],["pre",{lang:"js",highlighted:`<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  namespace<span class="token punctuation">:</span> <span class="token string">'products'</span><span class="token punctuation">,</span>
  state<span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">'dva'</span><span class="token punctuation">,</span> id<span class="token punctuation">:</span> <span class="token string">'dva'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">'antd'</span><span class="token punctuation">,</span> id<span class="token punctuation">:</span> <span class="token string">'antd'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  reducers<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">delete</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> <span class="token punctuation">{</span> payload<span class="token punctuation">:</span> id <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>item <span class="token operator">=</span><span class="token operator">></span> item<span class="token punctuation">.</span>id <span class="token operator">!==</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>`},["code",`export default {
  namespace: 'products',
  state: [
    { name: 'dva', id: 'dva' },
    { name: 'antd', id: 'antd' },
  ],
  reducers: {
    delete(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};`]],["p","这个 model 里："],["ul",["li",["p",["code","namespace"]," 表示在全局 state 上的 key"]],["li",["p",["code","state"]," 是初始值，在这里是空数组"]],["li",["p",["code","reducers"]," 等同于 redux 里的 reducer，接收 action，同步更新 state"]]],["p","umi 里约定 ",["code","src/models"]," 下的 model 会被自动注入，你无需手动注入。"],["h2","connect 起来"],["p","到这里，我们已经单独完成了 model 和 component，那么他们如何串联起来呢?"],["p","dva 提供了 ",["code","connect"]," 方法。如果你熟悉 redux，这个 connect 来自 react-redux。"],["p","编辑 ",["code","src/pages/products.tsx"],"，替换为以下内容："],["pre",{lang:"js",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'umi'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ProductList <span class="token keyword">from</span> <span class="token string">'@/components/ProductList'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Products <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> dispatch<span class="token punctuation">,</span> products <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">handleDelete</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      type<span class="token punctuation">:</span> <span class="token string">'products/delete'</span><span class="token punctuation">,</span>
      payload<span class="token punctuation">:</span> id<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h2<span class="token operator">></span>List <span class="token keyword">of</span> Products<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
      <span class="token operator">&lt;</span>ProductList onDelete<span class="token operator">=</span><span class="token punctuation">{</span>handleDelete<span class="token punctuation">}</span> products<span class="token operator">=</span><span class="token punctuation">{</span>products<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> products <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  products<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span>Products<span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`import { connect } from 'umi';
import ProductList from '@/components/ProductList';

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
};

export default connect(({ products }) => ({
  products,
}))(Products);`]],["p","执行启动命令："],["pre",{lang:"bash",highlighted:"$ yarn start"},["code","$ yarn start"]],["p","访问 ",["a",{title:null,href:"http://localhost:8000/"},"http://localhost:8000"],"，应该能看到以下效果："],["p",["img",{src:"https://gw.alipayobjects.com/zos/antfincdn/dPsy4tFHN3/umi.gif"}]],["h2","构建应用"],["p","完成开发并且在开发环境验证之后，就需要部署给我们的用户了，执行以下命令："],["pre",{lang:"bash",highlighted:"$ yarn build"},["code","$ yarn build"]],["p",["img",{title:null,src:"https://gw.alipayobjects.com/zos/antfincdn/Zd3f%242NdOK/b911d244-f1a5-4d61-adc5-3710cd86cd1b.png",alt:null}]],["p","构建会打包所有的资源，包含 JavaScript, CSS, web fonts, images, html 等。你可以在 ",["code","dist/"]," 目录下找到这些文件。"],["h2","下一步"],["p","我们已经完成了一个简单应用，你可能还有很多疑问，比如："],["ul",["li",["p","如何统一处理出错？"]],["li",["p","如何处理更多路由，比如动态路由，嵌套路由，权限路由等？"]],["li",["p","如何 mock 数据？"]],["li",["p","如何部署？"]],["li",["p","等等"]]],["p","你可以："],["ul",["li",["p","访问 ",["a",{title:null,href:"https://umijs.org/"},"umi 官网"],"和 ",["a",{title:null,href:"https://dvajs.com/"},"dva 官网"]]],["li",["p","理解 ",["a",{title:null,href:"https://umijs.org/zh/guide/router.html"},"umi 的路由"]]],["li",["p","理解 ",["a",{title:null,href:"https://umijs.org/zh/guide/deploy.html"},"如何部署 umi 应用"]]],["li",["p","查看 ",["a",{title:null,href:"https://dvajs.com/knowledgemap/"},"dva 知识地图"],"，包含 ES6, React, dva 等所有基础知识"]],["li",["p","理解 ",["a",{title:null,href:"https://dvajs.com/guide/concepts.html"},"dva 的 8 个概念"],"，以及他们是如何串起来的"]]]],meta:{order:3,title:"项目实战",filename:"docs/react/practical-projects.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#安装-Umi",title:"安装 Umi"},"安装 Umi"]],["li",["a",{className:"bisheng-toc-h2",href:"#安装插件集",title:"安装插件集"},"安装插件集"]],["li",["a",{className:"bisheng-toc-h2",href:"#新建路由",title:"新建路由"},"新建路由"]],["li",["a",{className:"bisheng-toc-h2",href:"#编写-UI-Component",title:"编写 UI Component"},"编写 UI Component"]],["li",["a",{className:"bisheng-toc-h2",href:"#定义-dva-Model",title:"定义 dva Model"},"定义 dva Model"]],["li",["a",{className:"bisheng-toc-h2",href:"#connect-起来",title:"connect 起来"},"connect 起来"]],["li",["a",{className:"bisheng-toc-h2",href:"#构建应用",title:"构建应用"},"构建应用"]],["li",["a",{className:"bisheng-toc-h2",href:"#下一步",title:"下一步"},"下一步"]]]}}}]);
