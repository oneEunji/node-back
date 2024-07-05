"use strict";

const output = {
    hello: (req,res) => {
        res.render("home/index");
    },
    login: (req,res) => {
        res.render("home/login");
    },
        
};


const users = {
    id: ["test", "나개발", "eunji"],
    psword: ["1234", "1234", "2134"],
}


const process = {
    login: (req,res) => {
      const id = req.body.id,
        psword = req.body.psword;

      if (users.id.includes(id)){
         const idx = users.id.indexOf(id);
         if (users.psword[idx] === psword){
            return res.json({
                success: true,
            });
         }
      } 

      return res.json({
       success: false,
       msg: "로그인에 실패하셨습니다.",
      });



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