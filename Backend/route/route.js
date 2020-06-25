

function createRouter(db) {
  const express = require('express');
  const router = express.Router();
  const jwt = require('jsonwebtoken');
  const bcrypt = require('bcryptjs');

  //const User = require('../model/userModel');
  const secret = '43joi3rhr3io';
  const owner = '';

  router.post('/api/register', function(req,res) {

     db.query('SELECT * FROM user WHERE email = ? AND uname = ? LIMIT 1',[req.body.email, req.body.uname],
     (err, usr) => {
       console.log(usr);
        if(err) console.log(err);
        else if(usr[0]!=null){
           return res.send({flag:false, msg:'User Already exists...'});
        }
        else {
        //   var hashed = bcrypt.hash(req.body.password, 10);
        //    console.log('hashed password is '+hashed);

             var payload = {
               uname: req.body.uname, email: req.body.email,
                mobNo: req.body.mobNo, password: req.body.password,
                role: req.body.role
             };
              console.log(payload);

              db.query('INSERT INTO user VALUES (?,?,?,?,?)',
              [req.body.uname, req.body.email, req.body.mobNo, req.body.password, req.body.role],
               (err, result) => {
                 if(err) console.log(err);
                 else console.log(result);
              });

              var token = jwt.sign({payload}, secret);
             return res.send({flag:true, msg:'You have registered successfully...'});
        }

     });
  });

  router.post('/api/login', function(req,res) {

      db.query('SELECT * FROM user WHERE email= ? LIMIT 1',[req.body.email],
      (err, usr) => {

        var usr= usr[0];
         if(err) {
           console.log('if');
           console.log(err);
         }
         else if(usr==null) {
           console.log('elseif');
           return res.send({ msg:"Invalid credentials...", flag: false});
         }
         else{
           console.log('else');
           //var validPwd = bcrypt.compareSync(req.body.password, usr.password);
           var validPwd = (usr.password==req.body.password)? true: false;
           if(validPwd==false){
               return res.send({msg: 'password is invalid', flag: false});
           }
           else{
             const payload = {
                  uname: usr.uname, email:usr.email
             };

                let token = jwt.sign({payload},secret);
                return res.send({token: token, msg:"Youare logged in...", flag: true});
           }
         }
      });
  });

  router.get('/api/profile', function(req,res) {

     const token =req.headers['authorization'];

     var decoded= jwt.verify(token,secret);
     console.log(decoded);

  /*  db.query('SELECT * FROM user WHERE email == ? LIMIT 1',[decoded.payload.email],
     (err,usr) => {
      var usr = usr;
      console.log(usr);*/
      if(!decoded)
         return res.send({msg:"Can't get the user details...", flag:false});
      else
         return res.send({details:decoded.payload, flag:true});

  //  });
  });

  router.post('/api/questions', function(req,res){

    //var qno = req.params['noOfQues'];
    //var top = req.params['topic'];
    //console.log(qno+'  '+top);
    db.query("SELECT * FROM "+(req.body.topic).toLowerCase()+" ORDER BY RAND() LIMIT ?", [Number(req.body.noOfQues)],
    (err, ques) => {
       if(err) console.log(err);
       else{
         res.send({flag: true, data:ques});
       }
    });




  });



  return router;
}
module.exports = createRouter;
