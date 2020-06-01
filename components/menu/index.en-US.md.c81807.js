(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{3153:function(a,b){a.exports={content:["section",["p","A versatile menu for navigation."],["h2","When To Use"],["p","Navigation is an important part of any website, as a good navigation setup allows users to move around the site quickly and efficiently. Ant Design offers top and side navigation options. Top navigation provides all the categories and functions of the website. Side navigation provides the multi-level structure of the website."],["p","More layouts with navigation: ",["a",{title:null,href:"/components/layout"},"Layout"],"."]],meta:{category:"Components",cols:1,type:"Navigation",title:"Menu",cover:"https://gw.alipayobjects.com/zos/alicdn/3XZcjGpvK/Menu.svg",filename:"components/menu/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span><span class="token punctuation">></span></span>Menu<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SubMenu</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>SubMenu<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span><span class="token punctuation">></span></span>SubMenuItem<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SubMenu</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu</span><span class="token punctuation">></span></span>`},["code",`<Menu>
  <Menu.Item>Menu</Menu.Item>
  <SubMenu title="SubMenu">
    <Menu.Item>SubMenuItem</Menu.Item>
  </SubMenu>
</Menu>`]],["h3","Menu"],["table",["thead",["tr",["th","Param"],["th","Description"],["th","Type"],["th","Default value"],["th","Version"]]],["tbody",["tr",["td","defaultOpenKeys"],["td","Array with the keys of default opened sub menus"],["td","string","[","]"],["td"],["td"]],["tr",["td","defaultSelectedKeys"],["td","Array with the keys of default selected menu items"],["td","string","[","]"],["td"],["td"]],["tr",["td","forceSubMenuRender"],["td","Render submenu into DOM before it becomes visible"],["td","boolean"],["td","false"],["td"]],["tr",["td","inlineCollapsed"],["td","Specifies the collapsed status when menu is inline mode"],["td","boolean"],["td","-"],["td"]],["tr",["td","inlineIndent"],["td","Indent (in pixels) of inline menu items on each level"],["td","number"],["td","24"],["td"]],["tr",["td","mode"],["td","Type of menu; ",["code","vertical"],", ",["code","horizontal"],", or ",["code","inline"]],["td",["code","vertical"]," ","|"," ",["code","horizontal"]," ","|"," ",["code","inline"]],["td",["code","vertical"]],["td"]],["tr",["td","multiple"],["td","Allows selection of multiple items"],["td","boolean"],["td","false"],["td"]],["tr",["td","openKeys"],["td","Array with the keys of currently opened sub-menus"],["td","string","[","]"],["td"],["td"]],["tr",["td","selectable"],["td","Allows selecting menu items"],["td","boolean"],["td","true"],["td"]],["tr",["td","selectedKeys"],["td","Array with the keys of currently selected menu items"],["td","string","[","]"],["td"],["td"]],["tr",["td","style"],["td","Style of the root node"],["td","CSSProperties"],["td"],["td"]],["tr",["td","subMenuCloseDelay"],["td","Delay time to hide submenu when mouse leaves (in seconds)"],["td","number"],["td","0.1"],["td"]],["tr",["td","subMenuOpenDelay"],["td","Delay time to show submenu when mouse enters, (in seconds)"],["td","number"],["td","0"],["td"]],["tr",["td","theme"],["td","Color theme of the menu"],["td",["code","light"]," ","|"," ",["code","dark"]],["td",["code","light"]],["td"]],["tr",["td","onClick"],["td","Called when a menu item is clicked"],["td","function({ item, key, keyPath, domEvent })"],["td","-"],["td"]],["tr",["td","onDeselect"],["td","Called when a menu item is deselected (multiple mode only)"],["td","function({ item, key, keyPath, selectedKeys, domEvent })"],["td","-"],["td"]],["tr",["td","onOpenChange"],["td","Called when sub-menus are opened or closed"],["td","function(openKeys: string","[","])"],["td","noop"],["td"]],["tr",["td","onSelect"],["td","Called when a menu item is selected"],["td","function({ item, key, keyPath, selectedKeys, domEvent })"],["td","none"],["td"]],["tr",["td","overflowedIndicator"],["td","Customized icon when menu is collapsed"],["td","ReactNode"],["td","-"],["td"]]]],["blockquote",["p","More options in ",["a",{title:null,href:"https://github.com/react-component/menu#api"},"rc-menu"]]],["h3","Menu.Item"],["table",["thead",["tr",["th","Param"],["th","Description"],["th","Type"],["th","Default value"],["th","Version"]]],["tbody",["tr",["td","disabled"],["td","Whether menu item is disabled"],["td","boolean"],["td","false"],["td"]],["tr",["td","key"],["td","Unique ID of the menu item"],["td","string"],["td"],["td"]],["tr",["td","title"],["td","Set display title for collapsed item"],["td","string"],["td"],["td"]],["tr",["td","icon"],["td","icon of the menu item"],["td","ReactNode"],["td"],["td","4.2.0"]],["tr",["td","danger"],["td","Display the danger style"],["td","boolean"],["td","false"],["td","4.3.0"]]]],["blockquote",["p","Note: ",["code","icon"]," is a newly added prop in",["code","4.2.0"],". For previous versions, please use the following method to define the icon."],["pre",{lang:"jsx",highlighted:`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PieChartOutlined</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>Option <span class="token number">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.SubMenu</span>
  <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PieChartOutlined</span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>Option <span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">}</span></span>
<span class="token punctuation">></span></span>
  <span class="token operator">...</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.SubMenu</span><span class="token punctuation">></span></span>`},["code",`<Menu.Item>
  <PieChartOutlined />
  <span>Option 1</span>
</Menu.Item>
<Menu.SubMenu
  title={
    <>
      <PieChartOutlined />
      <span>Option 2</span>
    </>
  }
>
  ...
</Menu.SubMenu>`]]],["h3","Menu.SubMenu"],["table",["thead",["tr",["th","Param"],["th","Description"],["th","Type"],["th","Default value"],["th","Version"]]],["tbody",["tr",["td","popupClassName"],["td","Sub-menu class name"],["td","string"],["td"],["td"]],["tr",["td","children"],["td","Sub-menus or sub-menu items"],["td","Array","<","MenuItem","|","SubMenu>"],["td"],["td"]],["tr",["td","disabled"],["td","Whether sub-menu is disabled"],["td","boolean"],["td","false"],["td"]],["tr",["td","key"],["td","Unique ID of the sub-menu"],["td","string"],["td"],["td"]],["tr",["td","title"],["td","Title of sub menu"],["td","string","|","ReactNode"],["td"],["td"]],["tr",["td","icon"],["td","Icon of sub menu"],["td","ReactNode"],["td"],["td","4.2.0"]],["tr",["td","onTitleClick"],["td","Callback executed when the sub-menu title is clicked"],["td","function({ key, domEvent })"],["td"],["td"]]]],["h3","Menu.ItemGroup"],["table",["thead",["tr",["th","Param"],["th","Description"],["th","Type"],["th","Default value"],["th","Version"]]],["tbody",["tr",["td","children"],["td","sub-menu items"],["td","MenuItem","[","]"],["td"],["td"]],["tr",["td","title"],["td","title of the group"],["td","string","|","ReactNode"],["td"],["td"]]]],["h3","Menu.Divider"],["p","Divider line in between menu items, only used in vertical popup Menu or Dropdown Menu."]]}}}]);
