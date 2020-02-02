const Mock = require('mockjs');
Mock.mock('/goods/getGoods', 'get', () => {
  return {
    status: '0',
    msg: '',
    data: [{
      _id:1,
      productId: "201710003",
      productName: "平衡车",
      salePrice: 1999,
      productImage: "pingheng.jpg",
      productUrl: ""
    }]
  }
});
