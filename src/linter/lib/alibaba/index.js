const utils=require("../utils/utils"),unsupportedFns=require("./unsupported-fns"),unsupportedTags=require("./unsupported-tags"),unsupportedAttrs=require("./unsupported-attrs"),unsupportedEvents=require("./unsupported-events"),wxmlLineRules=[e=>{const t="组件阿里小程序未实现";for(let s=0;s<unsupportedTags.length;s++){const u=unsupportedTags[s],r=new RegExp(`<${u}\\s+`);if(e.match(r))return{source:e,rule:[u,t].join("")}}return null},e=>{const t=["contact","getUserInfo","getPhoneNumber","openSetting","feedback"].join("|"),s=`阿里小程 button 组件 不支持 ${t} 属性`,u=new RegExp(`<button[^>]+open-type="${t}"`);return e.match(u)?{source:e,rule:s}:null}],wxmlFileRules=[(e,t)=>utils.unsupportedAttrOrEvents(e,t,unsupportedAttrs,"阿里","属性"),(e,t)=>utils.unsupportedAttrOrEvents(e,t,unsupportedEvents,"阿里","事件")],wxssFileRules=[],wxssLineRules=[],scriptLineRules=[e=>{const t="方法阿里小程序未实现";for(let s=0;s<unsupportedFns.length;s++){const u=unsupportedFns[s],r=new RegExp(`\\.${u}\\(`);if(e.match(r))return{source:e,rule:[u,t].join("")}}return null}],scriptFileRules=[(e,t)=>{const s=/['"][\w\/.]+['"]/,u=e.match(/require\(([^)]+)\)/);if(u&&!s.test(u[1])){return{line:utils.calcLine(e,u[0]),path:t,source:u[0],rule:"`require`，参数只能是字符串直接量，不能是变量（如：`var path = '/a/b/c'; require(path);`）"}}return null},(e,t)=>{const s=/triggerEvent\(['"]/,u=e.match(/triggerEvent\(([^)]+)\)/);if(u&&!s.test(u[0])){return{line:utils.calcLine(e,u[0]),path:t,source:u[0],rule:"triggerEvent(name, data)`，`name`目前只支持字符串直接量，不支持变量"}}return null}];module.exports={wxmlLineRules:wxmlLineRules,wxmlFileRules:wxmlFileRules,wxssLineRules:wxssLineRules,wxssFileRules:wxssFileRules,scriptLineRules:scriptLineRules,scriptFileRules:scriptFileRules};