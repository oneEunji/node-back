"use strict";

const hello = (req,res) => {
    res.render("home/index");
};
const login = (req,res) => {
    res.render("home/login");
};
    
module.exports = {
    hello,
    login,
}
// 위처럼 하나만 넣어주면 key: value 방식이 key==value가 되므로
// 아래와 같은 뜻임
// module.exports = {
//     hello : hello ,
//     login : login,
// }