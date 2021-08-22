import Axios from 'axios';
import routerObj from './httpRouters';
let defaultUrl = 'http://localhost:3000/';
//  let defaultUrl = 'http://www.studycode.com.cn';
function POST(router,param,callBack,failBack){
    let myUrl = defaultUrl + routerObj[router].url
    // console.log(myUrl)
    Axios.post(myUrl,param).then(function(res){
        callBack(res.data)
    }).catch(function(err){
        failBack(err)
    })
}
function POSTFILE(router,param,callBack,failBack){
    let myUrl = defaultUrl + routerObj[router].url
    // console.log(myUrl)
    Axios.post(myUrl,param,{
        headers:{
            "Content-Type":"multipart/form-data"
        }
    }).then(function(res){
        callBack(res.data)
    }).catch(function(err){
        failBack(err)
    })
}
export default {
    POST,
    POSTFILE
}