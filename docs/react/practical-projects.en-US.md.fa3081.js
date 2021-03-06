(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{3261:function(a,b){a.exports={content:["article",["p","In real project development, you might need a data flow solution like Redux or MobX. Ant Design React is a UI library that can be used with any data flow solution and application framework within the React ecosystem. We have launched dva based on Redux, as well as a pluggable enterprise application framework umi, which is recommended for use in your projects."],["p","Dva is a lightweight data flow solution based on Redux. The concept comes from elm. It supports side effects, hot module replacement, dynamic loading, react-native, SSR, etc. It has been widely used in production."],["p","And ",["a",{title:null,href:"http://umijs.org/"},"umi"]," is a routing-based framework that supports ",["a",{title:null,href:"https://umijs.org/guide/router.html"},"next.js-like conventional routing"]," and various advanced routing functions, such as ",["a",{title:null,href:"https://umijs.org/en/plugin/umi-plugin-react.html#dynamicimport"},"routing-level on-demand loading"],". With a complete ",["a",{title:null,href:"https://umijs.org/plugin/"},"plugin system"]," that covers every life cycle from source code to build product, umi is able to support various functional extensions and business needs; meanwhile ",["a",{title:null,href:"https://umijs.org/guide/umi-ui.html"},"Umi UI"]," is provided to enhance the development experience and development efficiency through Visual Aided Programming (VAP)."],["blockquote",["p","You may also be interested in ",["a",{title:null,href:"https://pro.ant.design/"},"Ant Design Pro"],", an Out-of-box UI solution for enterprise applications based on umi, dva and ant design."]],["p","This article will guide you to create a simple application from zero using Umi, dva and antd."],["h2","Install Umi"],["p","It is recommended to use yarn to create an application and execute the following command."],["pre",{lang:"bash",highlighted:`$ <span class="token function">mkdir</span> myapp <span class="token operator">&amp;&amp;</span> <span class="token function">cd</span> myapp
$ yarn create @umijs/umi-app
$ yarn`},["code",`$ mkdir myapp && cd myapp
$ yarn create @umijs/umi-app
$ yarn`]],["blockquote",["p","If you are using npm, execute ",["code","npm install umi -g"]," and the effect will be the same."]],["h2","Install presets"],["p","Execute the following command, install presets(including the antd, dva, locale plugins):"],["pre",{lang:"bash",highlighted:`<span class="token comment" spellcheck="true"># 或 npm i @umijs/preset-react -D</span>
$ yarn add @umijs/preset-react -D`},["code",`# 或 npm i @umijs/preset-react -D
$ yarn add @umijs/preset-react -D`]],["blockquote",["p","And if you want to use a fixed version of antd, you can install additional antd dependency in your project, and the antd dependencies declared in package.json will be used first."]],["h2","Create Routes"],["p","We need to write an application displaying the list of products. The first step is to create a route."],["p","If you don't have npx, you need to install it first to execute the commands under node_modules."],["pre",{lang:"bash",highlighted:"$ yarn global add npx"},["code","$ yarn global add npx"]],["p","Then create a ",["code","/products"]," route,"],["pre",{lang:"bash",highlighted:`$ npx umi g page products --typescript

Write: src/pages/products.tsx
Write: src/pages/products.css`},["code",`$ npx umi g page products --typescript

Write: src/pages/products.tsx
Write: src/pages/products.css`]],["p","In ",["code",".umirc.ts"]," configured in routing, if there is need to internationalization, can configure ",["code","locale"]," enable antd internationalization:"],["pre",{lang:"diff",highlighted:`import { defineConfig } from 'umi';

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
});`]],["p","run ",["code","yarn start"]," then open ",["a",{title:null,href:"http://localhost:8000/products"},"http://localhost:8000/products"]," in your browser and you should see the corresponding page."],["h2","Write UI Components"],["p","As your application grows and you notice you are sharing UI elements between multiple pages (or using them multiple times on the same page), in umi it's called reusable components."],["p","Let's create a ",["code","ProductList"]," component that we can use in multiple places to show a list of products."],["p","Create ",["code","src/components/ProductList.tsx"]," by typing:"],["pre",{lang:"js",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Table<span class="token punctuation">,</span> Popconfirm<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

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

export default ProductList;`]],["h2","Define dva Model"],["p","After completing the UI, we will begin processing the data and logic."],["p","dva manages the domain model with ",["code","model"],", with reducers for synchronous state updates, effects for async logic, and subscriptions for data source subscribe."],["p","Let's create a model ",["code","src/models/products.ts"]," by typing,"],["pre",{lang:"js",highlighted:`<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
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
};`]],["p","In this model:"],["ul",["li",["p",["code","namespace"]," represents the key on global state"]],["li",["p",["code","state"]," is the initial value, here it is an empty array"]],["li",["p",["code","reducers"]," is equivalent to a reducer in redux, accepting an action, and update state simultaneously"]]],["p","In umi, the model files under ",["code","src/models"]," will be automatically injected, you don't need to inject manually."],["h2","Connect"],["p","So far, we have completed a separate model and component. How do we connect them together?"],["p","dva provides a ",["code","connect"]," method. If you are familiar with redux, this connect is from react-redux."],["p","Edit ",["code","src/pages/products.js"]," and replace it with the following,"],["pre",{lang:"js",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'umi'</span><span class="token punctuation">;</span>
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
}))(Products);`]],["p","Refresh your browser, you should see the following result:"],["p",["img",{src:"https://gw.alipayobjects.com/zos/antfincdn/dPsy4tFHN3/umi.gif"}]],["h2","Build"],["p","Now that we've written our application and verified that it works in development, it's time to get it ready for deployment to our users. To do so, execute the following command:"],["pre",{lang:"bash",highlighted:"$ yarn build"},["code","$ yarn build"]],["p",["img",{title:null,src:"https://gw.alipayobjects.com/zos/antfincdn/Zd3f%242NdOK/b911d244-f1a5-4d61-adc5-3710cd86cd1b.png",alt:null}]],["p","The ",["code","build"]," command packages up all of the assets that make up your application —— JavaScript, templates, CSS, web fonts, images, and more. Then you can find these files in the ",["code","dist/"]," directory."],["h2","What's Next"],["p","We have completed a simple application, but you may still have lots of questions, such as:"],["ul",["li",["p","How to handle onError globally and locally?"]],["li",["p","How to handle routes?"]],["li",["p","How to mock data?"]],["li",["p","How to deploy?"]],["li",["p","ant so on..."]]],["p","You can:"],["ul",["li",["p","Visit ",["a",{title:null,href:"https://umijs.org/"},"umi official website"]," and ",["a",{title:null,href:"https://dvajs.com/"},"dva official website"]]],["li",["p","Know ",["a",{title:null,href:"https://umijs.org/zh/guide/router.html"},"the umi routes"]]],["li",["p","Know ",["a",{title:null,href:"https://umijs.org/zh/guide/deploy.html"},"how to deploy umi application"]]],["li",["p","Checkout ",["a",{title:null,href:"https://dvajs.com/knowledgemap/"},"dva knowledge"],", including all the basic knowledge with ES6, React, dva"]],["li",["p","Be familiar with the ",["a",{title:null,href:"https://dvajs.com/guide/concepts.html"},"8 Concepts of dva"],", and understand how they are connected together"]]]],meta:{order:3,title:"Real project with umi and dva",filename:"docs/react/practical-projects.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Install-Umi",title:"Install Umi"},"Install Umi"]],["li",["a",{className:"bisheng-toc-h2",href:"#Install-presets",title:"Install presets"},"Install presets"]],["li",["a",{className:"bisheng-toc-h2",href:"#Create-Routes",title:"Create Routes"},"Create Routes"]],["li",["a",{className:"bisheng-toc-h2",href:"#Write-UI-Components",title:"Write UI Components"},"Write UI Components"]],["li",["a",{className:"bisheng-toc-h2",href:"#Define-dva-Model",title:"Define dva Model"},"Define dva Model"]],["li",["a",{className:"bisheng-toc-h2",href:"#Connect",title:"Connect"},"Connect"]],["li",["a",{className:"bisheng-toc-h2",href:"#Build",title:"Build"},"Build"]],["li",["a",{className:"bisheng-toc-h2",href:"#What's-Next",title:"What's Next"},"What's Next"]]]}}}]);
