function convert(e){return e.replace(/wx:/g,"a:").replace(/a:for-items/g,"a:for").replace(/\.wxml/g,".axml").replace(/\s+formType=['"]\w+['"]/g,e=>e.replace("formType","form-type")).replace(/<canvas[^>]+(canvas-id)=['"]/g,(e,r)=>e.replace(r,"id")).replace(/a:for-index=['"]({{\w+}})['"]/gi,e=>e.replace("{{","").replace("}}","")).replace(/<import\s+src="([\w]+)/gi,(e,r)=>e.replace(r,["./",r].join(""))).replace(/<[\w]+/gi,e=>e.replace(/[A-Z]/g,e=>["-",e.toLowerCase()].join(""))).replace(/<\/[\w]+>/gi,e=>e.replace(/[A-Z]/g,e=>["-",e.toLowerCase()].join(""))).replace(/{{[^}]+(<)[^=\s][^}]+}}/gi,(e,r)=>e.replace(r,[r," "].join(""))).replace(/\s+bind[\w]+=['"]/gi,e=>e.replace(/bindscrolltolower/gi,"bindScrollToLower").replace(/bindscrolltoupper/gi,"bindScrollToUpper").replace(/bind(\w)/g,(e,r)=>["on",r.toUpperCase()].join(""))).replace(/\s+onTouch(start|end|move|cancel)=/g,(e,r)=>e.replace(r,r.substring(0,1).toUpperCase()+r.substring(1))).replace(/\s+catch[\w]+=['"]/gi,e=>e.replace(/catchsubmit/gi,"onSubmit").replace(/catch(\w)/g,(e,r)=>["catch",r.toUpperCase()].join(""))).replace(/<progress[^>]+(activeColor|backgroundColor)=/g,(e,r)=>e.replace(r,r.replace(/[A-Z]/,e=>`${e.toLowerCase()}-`))).replace(/<progress[^>]+(activeColor|backgroundColor)=/g,(e,r)=>e.replace(r,r.replace(/[A-Z]/,e=>`${e.toLowerCase()}-`)))}module.exports=convert;