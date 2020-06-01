(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{3099:function(a,b){a.exports={content:["section",["p","多选框。"],["h2","何时使用"],["ul",["li",["p","在一组可选项中进行多项选择时；"]],["li",["p","单独使用可以表示两种状态之间的切换，和 ",["code","switch"]," 类似。区别在于切换 ",["code","switch"]," 会直接触发状态改变，而 ",["code","checkbox"]," 一般用于状态标记，需要和提交操作配合。"]]]],meta:{category:"Components",subtitle:"多选框",type:"数据录入",title:"Checkbox",cover:"https://gw.alipayobjects.com/zos/alicdn/p7QZthygf/Checkbox.svg",filename:"components/checkbox/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["h3","属性"],["h4","Checkbox"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","autoFocus"],["td","自动获取焦点"],["td","boolean"],["td","false"],["td"]],["tr",["td","checked"],["td","指定当前是否选中"],["td","boolean"],["td","false"],["td"]],["tr",["td","defaultChecked"],["td","初始是否选中"],["td","boolean"],["td","false"],["td"]],["tr",["td","disabled"],["td","失效状态"],["td","boolean"],["td","false"],["td"]],["tr",["td","indeterminate"],["td","设置 indeterminate 状态，只负责样式控制"],["td","boolean"],["td","false"],["td"]],["tr",["td","onChange"],["td","变化时回调函数"],["td","Function(e:Event)"],["td","-"],["td"]]]],["h4","Checkbox Group"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","defaultValue"],["td","默认选中的选项"],["td","string","[","]"],["td","[","]"],["td"]],["tr",["td","disabled"],["td","整组失效"],["td","boolean"],["td","false"],["td"]],["tr",["td","name"],["td","CheckboxGroup 下所有 ",["code",'input[type="checkbox"]']," 的 ",["code","name"]," 属性"],["td","string"],["td","-"],["td"]],["tr",["td","options"],["td","指定可选项"],["td","string","[","] ","|"," Option","[","]"],["td","[","]"],["td"]],["tr",["td","value"],["td","指定选中的选项"],["td","string","[","]"],["td","[","]"],["td"]],["tr",["td","onChange"],["td","变化时回调函数"],["td","Function(checkedValue)"],["td","-"],["td"]]]],["h5","Option"],["pre",{lang:"typescript",highlighted:`<span class="token keyword">interface</span> <span class="token class-name">Option</span> <span class="token punctuation">{</span>
  label<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
  value<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
  disabled<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`},["code",`interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}`]],["h3","方法"],["h4","Checkbox"],["table",["thead",["tr",["th","名称"],["th","描述"],["th","版本"]]],["tbody",["tr",["td","blur()"],["td","移除焦点"],["td"]],["tr",["td","focus()"],["td","获取焦点"],["td"]]]]]}}}]);
