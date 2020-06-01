(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{3233:function(a,b){a.exports={content:["section",["p","Double column transfer choice box."],["h2","When To Use"],["ul",["li",["p","It is a select control essentially which can be use for selecting multiple items."]],["li",["p","Transfer can display more information for items and take up more space."]]],["p","Transfer the elements between two columns in an intuitive and efficient way."],["p","One or more elements can be selected from either column, one click on the proper ",["code","direction"]," button, and the transfer is done. The left column is considered the ",["code","source"]," and the right column is considered the ",["code","target"],". As you can see in the API description, these names are reflected in."]],meta:{category:"Components",type:"Data Entry",cols:1,title:"Transfer",cover:"https://gw.alipayobjects.com/zos/antfincdn/7w84d56hrUo/Transfer.svg",filename:"components/transfer/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#Warning",title:"Warning"},"Warning"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","dataSource"],["td","Used for setting the source data. The elements that are part of this array will be present the left column. Except the elements whose keys are included in ",["code","targetKeys"]," prop."],["td",["a",{title:null,href:"https://git.io/vMM64"},"TransferItem"],"[","]"],["td","[","]"],["td"]],["tr",["td","disabled"],["td","Whether disabled transfer"],["td","boolean"],["td","false"],["td"]],["tr",["td","filterOption"],["td","A function to determine whether an item should show in search result list"],["td","(inputValue, option): boolean"],["td"],["td"]],["tr",["td","footer"],["td","A function used for rendering the footer."],["td","(props) => ReactNode"],["td"],["td"]],["tr",["td","listStyle"],["td","A custom CSS style used for rendering the transfer columns."],["td","object","|","({direction: 'left'","|","'right'}) => object"],["td"],["td"]],["tr",["td","locale"],["td","i18n text including filter, empty text, item unit, etc"],["td","{ itemUnit: string; itemsUnit: string; searchPlaceholder: string; notFoundContent: ReactNode; }"],["td",["code","{ itemUnit: 'item', itemsUnit: 'items', notFoundContent: 'The list is empty', searchPlaceholder: 'Search here' }"]],["td"]],["tr",["td","operations"],["td","A set of operations that are sorted from top to bottom."],["td","string","[","]"],["td","[","'>', '<']"],["td"]],["tr",["td","oneWay"],["td","Display as single direction style"],["td","boolean"],["td","false"],["td","4.3.0"]],["tr",["td","operationStyle"],["td","A custom CSS style used for rendering the operations column."],["td","object"],["td"],["td"]],["tr",["td","pagination"],["td","Use pagination. Not work in render props"],["td","boolean ","|"," { pageSize: number }"],["td","false"],["td","4.3.0"]],["tr",["td","render"],["td","The function to generate the item shown on a column. Based on an record (element of the dataSource array), this function should return a React element which is generated from that record. Also, it can return a plain object with ",["code","value"]," and ",["code","label"],", ",["code","label"]," is a React element and ",["code","value"]," is for title"],["td","(record) => ReactNode"],["td"],["td"]],["tr",["td","selectedKeys"],["td","A set of keys of selected items."],["td","string","[","]"],["td","[","]"],["td"]],["tr",["td","showSearch"],["td","If included, a search box is shown on each column."],["td","boolean"],["td","false"],["td"]],["tr",["td","showSelectAll"],["td","Show select all checkbox on the header"],["td","boolean"],["td","true"],["td"]],["tr",["td","targetKeys"],["td","A set of keys of elements that are listed on the right column."],["td","string","[","]"],["td","[","]"],["td"]],["tr",["td","titles"],["td","A set of titles that are sorted from left to right."],["td","ReactNode","[","]"],["td","-"],["td"]],["tr",["td","selectAllLabels"],["td","A set of customized labels for select all checkboxs on the header"],["td","(ReactNode ","|"," (info: { selectedCount: number, totalCount: number }) => ReactNode)[]"],["td"],["td"]],["tr",["td","onChange"],["td","A callback function that is executed when the transfer between columns is complete."],["td","(targetKeys, direction, moveKeys): void"],["td"],["td"]],["tr",["td","onScroll"],["td","A callback function which is executed when scroll options list"],["td","(direction, event): void"],["td"],["td"]],["tr",["td","onSearch"],["td","A callback function which is executed when search field are changed"],["td","(direction: 'left'","|","'right', value: string): void"],["td","-"],["td"]],["tr",["td","onSelectChange"],["td","A callback function which is executed when selected items are changed."],["td","(sourceSelectedKeys, targetSelectedKeys): void"],["td"],["td"]]]],["h3","Render Props"],["p","Transfer accept ",["code","children"]," to customize render list, using follow props:"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Version"]]],["tbody",["tr",["td","direction"],["td","List render direction"],["td",["code","left"]," ","|"," ",["code","right"]],["td"]],["tr",["td","disabled"],["td","Disable list or not"],["td","boolean"],["td"]],["tr",["td","filteredItems"],["td","Filtered items"],["td","TransferItem[]"],["td"]],["tr",["td","onItemSelect"],["td","Select item"],["td","(key: string, selected: boolean)"],["td"]],["tr",["td","onItemSelectAll"],["td","Select a group of items"],["td","(keys: string[], selected: boolean)"],["td"]],["tr",["td","selectedKeys"],["td","Selected items"],["td","string[]"],["td"]]]],["h4","example"],["pre",{lang:"jsx",highlighted:'<span class="token operator">&lt;</span>Transfer <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>listProps <span class="token operator">=</span><span class="token operator">></span> <span class="token operator">&lt;</span>YourComponent <span class="token punctuation">{</span><span class="token operator">...</span>listProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Transfer</span><span class="token punctuation">></span></span>'},["code","<Transfer {...props}>{listProps => <YourComponent {...listProps} />}</Transfer>"]],["h2","Warning"],["p","According the ",["a",{title:null,href:"http://facebook.github.io/react/docs/lists-and-keys.html#keys"},"standard"]," of React, the key should always be supplied directly to the elements in the array. In Transfer, the keys should be set on the elements included in ",["code","dataSource"]," array. By default, ",["code","key"]," property is used as an unique identifier."],["p","If there's no ",["code","key"]," in your data, you should use ",["code","rowKey"]," to specify the key that will be used for uniquely identify each element."],["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// eg. your primary key is `uid`</span>\n<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Transfer</span> <span class="token attr-name">rowKey</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>record <span class="token operator">=</span><span class="token operator">></span> record<span class="token punctuation">.</span>uid<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>'},["code","// eg. your primary key is `uid`\nreturn <Transfer rowKey={record => record.uid} />;"]],["h2","FAQ"],["h3","How to support fetch and present data from a remote server in Transfer column."],["p","In order to keep the page number synchronized, you can disable columns you checked without removing the option: ",["a",{title:null,href:"https://codesandbox.io/s/93xeb"},"https://codesandbox.io/s/93xeb"]]]}}}]);
