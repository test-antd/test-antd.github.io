(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{3058:function(a,b){a.exports={content:["section",["p","Wrap Affix around another component to make it stick the viewport."],["h2","When To Use"],["p","On longer web pages, its helpful for some content to stick to the viewport. This is common for menus and actions."],["p","Please note that Affix should not cover other content on the page, especially when the size of the viewport is small."]],meta:{category:"Components",type:"Navigation",title:"Affix",cover:"https://gw.alipayobjects.com/zos/alicdn/SQGCQ7gOO/Affix.svg",filename:"components/affix/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","offsetBottom"],["td","Offset from the bottom of the viewport (in pixels)"],["td","number"],["td","-"]],["tr",["td","offsetTop"],["td","Offset from the top of the viewport (in pixels)"],["td","number"],["td","0"]],["tr",["td","target"],["td","Specifies the scrollable area DOM node"],["td","() => HTMLElement"],["td","() => window"]],["tr",["td","onChange"],["td","Callback for when Affix state is changed"],["td","Function(affixed)"],["td","-"]]]],["p",["strong","Note:"]," Children of ",["code","Affix"]," must not have the property ",["code","position: absolute"],", but you can set ",["code","position: absolute"]," on ",["code","Affix"]," itself:"],["pre",{lang:"jsx",highlighted:`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Affix</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> position<span class="token punctuation">:</span> <span class="token string">'absolute'</span><span class="token punctuation">,</span> top<span class="token punctuation">:</span> y<span class="token punctuation">,</span> left<span class="token punctuation">:</span> x <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token operator">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Affix</span><span class="token punctuation">></span></span>`},["code","<Affix style={{ position: 'absolute', top: y, left: x }}>...</Affix>"]],["h2","FAQ"],["h3","Affix bind container with ",["code","target"],", sometime move out of container."],["p","We don't listen window scroll for performance consideration. You can add listener if you still want: ",["a",{title:null,href:"https://codesandbox.io/s/2xyj5zr85p"},"https://codesandbox.io/s/2xyj5zr85p"]],["p","Related issues：",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/3938"},"#3938"]," ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/5642"},"#5642"]," ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/16120"},"#16120"]]]}}}]);
