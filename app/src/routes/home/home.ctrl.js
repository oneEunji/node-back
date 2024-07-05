"use strict";

const output = {
    hello: (req,res) => {
        res.render("home/index");
    },
    login: (req,res) => {
        res.render("home/login");
    },
        
};
const process = {
    login: (req,res) => {
        console.log(req);
    },
};

module.exports = {
    output,
    process,
}
// 위처럼 하나만 넣어주면 key: value 방식이 key==value가 되므로
// 아래와 같은 뜻임
// module.exports = {
//     hello : hello ,
//     login : login,
// }