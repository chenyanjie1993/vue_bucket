import http from "../config";
export default {
    getGoods(params={}){
        return http.get("/goods/getGoods",params)  
    }
}