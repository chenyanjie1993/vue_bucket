import * as mutationTypes from "../mutation_types.js"
const state={
    goodsLength:0,
    goodsList:[],  //初始化一个userCode变量
};
// 赋值方法    
const mutations={
     [mutationTypes.GOODS_GET]: (state, device) => {//如何变化userCode,插入device
        state.goodsList = device;
        state.goodsLength=device.length?device.length:0;
      },
 };
 //调用方法
const actions={
    getGoods({ commit }, {$net,params}) {//触发mutations里面的userCodeChang ,传入数据形参device 对应到device
        return new Promise((resolve,reject)=>{
            $net(params).then(res=>{
                commit(mutationTypes.GOODS_GET, res.data)
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
      },
};
export default {
     namespaced:true,//用于在全局引用此文件里的方法时标识这一个的文件名
     state,
     mutations,
     actions
}
