(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{3144:function(a,b){a.exports={content:["section",["p","Handling the overall layout of a page."],["h2","Specification"],["h3","Size"],["p","The first level navigation is left aligned near a logo, and the secondary menu is right aligned."],["ul",["li",["p","Top Navigation: the height of the first level navigation ",["code","64px"],", the second level navigation ",["code","48px"],"."]],["li",["p","Top Navigation (for landing pages): the height of the first level navigation ",["code","80px"],", the second level navigation ",["code","56px"],"."]],["li",["p","Calculation formula of a top navigation: ",["code","48+8n"],"."]],["li",["p","Calculation formula of an aside navigation: ",["code","200+8n"],"."]]],["h3","Interaction rules"],["ul",["li",["p","The first level navigation and the last level navigation should be distinguishable by visualization;"]],["li",["p","The current item should have the highest priority of visualization;"]],["li",["p","When the current navigation item is collapsed, the style of the current navigation item is applied to its parent level;"]],["li",["p","The left side navigation bar has support for both the accordion and expanding styles; you can choose the one that fits your case the best."]]],["h2","Visualization rules"],["p","Style of a navigation should conform to its level."],["ul",["li",["p",["strong","Emphasis by colorblock"]],["p","When background color is a deep color, you can use this pattern for the parent level navigation item of the current page."]],["li",["p",["strong","The highlight match stick"]],["p","When background color is a light color, you can use this pattern for the current page navigation item; we recommend using it for the last item of the navigation path."]],["li",["p",["strong","Highlighted font"]],["p","From the visualization aspect, a highlighted font is stronger than colorblock; this pattern is often used for the parent level of the current item."]],["li",["p",["strong","Enlarge the size of the font"]],["p",["code","12px"],", ",["code","14px"]," is a standard font size of navigations, ",["code","14px"]," is used for the first and the second level of the navigation. You can choose an appropriate font size regarding the level of your navigation."]]],["h2","Component Overview"],["ul",["li",["p",["code","Layout"],": The layout wrapper, in which ",["code","Header"]," ",["code","Sider"]," ",["code","Content"]," ",["code","Footer"]," or ",["code","Layout"]," itself can be nested, and can be placed in any parent container."]],["li",["p",["code","Header"],": The top layout with the default style, in which any element can be nested, and must be placed in ",["code","Layout"],"."]],["li",["p",["code","Sider"],": The sidebar with default style and basic functions, in which any element can be nested, and must be placed in ",["code","Layout"],"."]],["li",["p",["code","Content"],": The content layout with the default style, in which any element can be nested, and must be placed in ",["code","Layout"],"."]],["li",["p",["code","Footer"],": The bottom layout with the default style, in which any element can be nested, and must be placed in ",["code","Layout"],"."]]],["blockquote",["p","Based on ",["code","flex layout"],", please pay attention to the ",["a",{title:null,href:"http://caniuse.com/#search=flex"},"compatibility"],"."]]],meta:{category:"Components",type:"Layout",cols:1,title:"Layout",cover:"https://gw.alipayobjects.com/zos/alicdn/hzEndUVEx/Layout.svg",filename:"components/layout/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Specification",title:"Specification"},"Specification"]],["li",["a",{className:"bisheng-toc-h2",href:"#Visualization-rules",title:"Visualization rules"},"Visualization rules"]],["li",["a",{className:"bisheng-toc-h2",href:"#Component-Overview",title:"Component Overview"},"Component Overview"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Header</span><span class="token punctuation">></span></span>header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Header</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Sider</span><span class="token punctuation">></span></span>left sidebar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Sider</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Content</span><span class="token punctuation">></span></span>main content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Content</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Sider</span><span class="token punctuation">></span></span>right sidebar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Sider</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Footer</span><span class="token punctuation">></span></span>footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Footer</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>`},["code",`<Layout>
  <Header>header</Header>
  <Layout>
    <Sider>left sidebar</Sider>
    <Content>main content</Content>
    <Sider>right sidebar</Sider>
  </Layout>
  <Footer>footer</Footer>
</Layout>`]],["h3","Layout"],["p","The wrapper."],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","className"],["td","container className"],["td","string"],["td","-"]],["tr",["td","hasSider"],["td","whether contain Sider in children, don't have to assign it normally. Useful in ssr avoid style flickering"],["td","boolean"],["td","-"]],["tr",["td","style"],["td","to customize the styles"],["td","CSSProperties"],["td","-"]]]],["blockquote",["p","APIs of ",["code","Layout.Header"]," ",["code","Layout.Footer"]," ",["code","Layout.Content"]," are the same as that of ",["code","Layout"],"."]],["h3","Layout.Sider"],["p","The sidebar."],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","breakpoint"],["td",["a",{title:null,href:"/components/grid#Col"},"breakpoints"]," of the responsive layout"],["td",["code","xs"]," ","|"," ",["code","sm"]," ","|"," ",["code","md"]," ","|"," ",["code","lg"]," ","|"," ",["code","xl"]," ","|"," ",["code","xxl"]," }"],["td","-"]],["tr",["td","className"],["td","container className"],["td","string"],["td","-"]],["tr",["td","collapsed"],["td","to set the current status"],["td","boolean"],["td","-"]],["tr",["td","collapsedWidth"],["td","width of the collapsed sidebar, by setting to ",["code","0"]," a special trigger will appear"],["td","number"],["td","80"]],["tr",["td","collapsible"],["td","whether can be collapsed"],["td","boolean"],["td","false"]],["tr",["td","defaultCollapsed"],["td","to set the initial status"],["td","boolean"],["td","false"]],["tr",["td","reverseArrow"],["td","reverse direction of arrow, for a sider that expands from the right"],["td","boolean"],["td","false"]],["tr",["td","style"],["td","to customize the styles"],["td","CSSProperties"],["td","-"]],["tr",["td","theme"],["td","color theme of the sidebar"],["td",["code","light"]," ","|"," ",["code","dark"]],["td",["code","dark"]]],["tr",["td","trigger"],["td","specify the customized trigger, set to null to hide the trigger"],["td","string","|","ReactNode"],["td","-"]],["tr",["td","width"],["td","width of the sidebar"],["td","number","|","string"],["td","200"]],["tr",["td","onCollapse"],["td","the callback function, executed by clicking the trigger or activating the responsive layout"],["td","(collapsed, type) => {}"],["td","-"]],["tr",["td","onBreakpoint"],["td","the callback function, executed when ",["a",{title:null,href:"/components/grid#API"},"breakpoints"]," changed"],["td","(broken) => {}"],["td","-"]],["tr",["td","zeroWidthTriggerStyle"],["td","to customize the styles of the special trigger that appears when ",["code","collapsedWidth"]," is 0"],["td","object"],["td","-"]]]],["h4","breakpoint width"],["pre",{lang:"js",highlighted:`<span class="token punctuation">{</span>
  xs<span class="token punctuation">:</span> <span class="token string">'480px'</span><span class="token punctuation">,</span>
  sm<span class="token punctuation">:</span> <span class="token string">'576px'</span><span class="token punctuation">,</span>
  md<span class="token punctuation">:</span> <span class="token string">'768px'</span><span class="token punctuation">,</span>
  lg<span class="token punctuation">:</span> <span class="token string">'992px'</span><span class="token punctuation">,</span>
  xl<span class="token punctuation">:</span> <span class="token string">'1200px'</span><span class="token punctuation">,</span>
  xxl<span class="token punctuation">:</span> <span class="token string">'1600px'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>`},["code",`{
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
}`]],["style",`
  [data-theme="dark"] .site-layout-background {
    background: #141414;
  }
  [data-theme="dark"] .site-layout-header-background {
    background: #1f1f1f;
  }
`]]}}}]);
