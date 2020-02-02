const getters = {
    //getters 文件为导出state里面的数据，导出格式state => state.Login.userCode ,
    //表示store/modules/Login/Login.js里面的state里的变量userCode
    //如果不是很懂，下面会介绍在state存数据
    goodsList : state => state.goods.goodsList ,
  }
  export default getters
