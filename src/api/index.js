const context = require.context('./modules', false, /\.js$/);
const path=require("path")
let Api = {}
context.keys().map((m, k) => {
  let strFileName = m.replace(/(.*\/)*([^.]+).*/ig,"$2");
  let data=context(m).default;
  Api[strFileName]=data
}, {})

export default Api;