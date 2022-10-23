'use strict';
const express = require('express');
const { SocketAddress } = require('net');
const path = require('path');
const Drink = require('../models/Drink.js');
const Shop = require('../models/Shop.js')

module.exports = () => {
    const router = express.Router();

    router.get('/api/test', async(req, res) => {
        res.send('hello world');
    });
   // 8. 전국 전통주점 페이지
    router.get('/stores/test', async(req,res) => {
        try{
            Shop.find(async(에러, 결과) => {  //post 문서의 모든 데이터를 출력
            console.log(결과[0].name);
            res.render('shop.ejs', { data : 결과 }); //db에서 가져온 결과를 posts라는 이름으로 ejs에 넣음
            // 쿼리문으로 주소에 서울, 경기도 강원도, 제주특별자치도,.. 으로 나누고, 따로따로 저장해서 렌더링
            // Shop.find({address:/서울/}, function(에러,서울결과){
            // console.log("서울결과",서울결과);
            // //     /res.render('shop.ejs',{seoul:서울결과});
            // res.render('shop.ejs',{data:결과, seoul:서울결과});
        });
        }catch(err){
            console.log(err);
        }
        })

        
    
            
     // 11. 실험 페이지
     router.get('/drinks/test', async(req,res) => {
        try{
            let a1 = {가격 : { $lte: '10' }};
            let a2 = {가격 : { $gte: '11' }};

            let b1 = {도수 : { $lte: '14' }};
            let b2 = {도수 : { $gte: '15' }};

            let c1 = {주종 : '탁주'};
            let c2 = {주종 : '약주'};
            let c3 = {주종 : '증류주'};
            let c4 = {주종 : '과실주'};
            let c5 = {주종 : '기타주류'};
            
            let d1 = {단맛 : { $lte: '2' }};
            let d2 = {단맛 : { $gte: '3' }};
            
            let e1 = {신맛 : { $lte: '2' }};
            let e2 = {신맛 : { $gte: '3' }};
            
            let f1 = {바디감 : { $lte: '2' }};
            let f2 = {바디감 : { $gte: '3' }};
            
            let g1 = {청량감 : { $lte: '2' }};
            let g2 = {청량감 : { $gte: '3' }};

            let content1 = { q1 : {$elemMatch: { "value": "ediya" }} };
            let content2 = { q1 : {$elemMatch: { "value": "ediya" }} };
          
            let { q1, q2, q3, q4, q5, q6, q7 } = req.query; // q2 q3 q4 q5 .....
            console.log(req.query);
            console.log(typeof req.query);

            let i = {
                $or : [
                    {content1 : a1, content2 : a2},
                    {q2 : b1, q2 : b2},
                    {q3 : c1, q3 : c2, q3 : c3, q3 : c4, q3 : c5, },
                    {q4 : d1, q4 : d2},
                    {q5 : e1, q5 : e2},
                    {q6 : f1, q6 : f2},
                    {q7 : g1, q7 : g2},
                ]
             }      
            let vv ={ q1 : {$elemMatch: { value : 18 }} };
            let v =  req.query.q1 == 18
            if (req.query.q1 == 18){
            }
            
            {$where : v}
            let j = {가격 : req.query.q1};
            let k = {도수 : req.query.q2};
            let l = {주종 : req.query.q3};
            let m = {단맛 : req.query.q4};
            let n = {신맛 : req.query.q5};
            let o = {바디감 : req.query.q6};
            let p = {청량감 : req.query.q7};
            let as = {$where : [a1,req.query]};    
            let vj = {
                $and: [ { j , k } ]
            }
            // db에 저장된 값 -> 화면에 출력
            Drink.find( async(에러, 결과)=>{  //post 문서의 모든 데이터를 출력
                console.log(결과);
                res.render('test2.ejs', { posts : 결과 });    
                 //db에서 가져온 결과를 posts라는 이름으로 ejs에 넣음
            }).and([j, k, l, m, n, o, p]);

            }catch(err){
                    console.log(err);
                }
            })

  
    // 10. 술 업로드 페이지
    router.get('/drinks/list/:id', async(req,res) => {
        try{
            Drink.findOne({id : parseInt(req.params.id)}, function(에러, 결과){  //post 문서의 모든 데이터를 출력
            console.log(결과);
            res.render('detail.ejs', { data : 결과 });    
            //db에서 가져온 결과를 posts라는 이름으로 ejs에 넣음
        });
        }catch(err){
            console.log(err);
        }
    })
    //Shop.find({address:/서울/}, function(에러,서울결과){
    router.get('/stores/Gyunggi',function(req,res,next){  // 실제 연결:http://localhost:3000/stores/test
        //res.send('지역별');
        try{
            Shop.find({$and: [{address:/경기/},{name:{$ne:"물뛴다"}}]},function(에러,결과){ //서울 경기대로 제거
            //Shop.find({address:/경기/},function(에러,결과){
            console.log(결과);
            res.render('Gyunggi.ejs',{data:결과});
            });
        }catch(err){
            console.log(err);
        }
    });
    //Shop.find({$and: [{address:/서울/},{address:{$ne:/경기/}}]},function(에러,결과){

    //console.log(Shop.find({$and: [{address:/서울/},{address:{$ne:/경기대로/}}]}));
    // 서울 처리하기
    router.get('/stores/Seoul',function(req,res,next){  // 실제 연결:http://localhost:3000/stores/test
        //res.send('지역별');
        try{
            Shop.find({address:/서울/},function(에러,결과){
            res.render('seoul.ejs',{data:결과});
            });
        }catch(err){
            console.log(err);
        }
    });

    //전라도
    router.get('/stores/jeolla',function(req,res,next){  // 실제 연결:http://localhost:3000/stores/test
        //res.send('지역별');
        try{
            Shop.find({$or: [{address:/전남/},{address:/전북/}]},function(에러,결과){ //서울 경기대로 제거
            //Shop.find({address:/경기/},function(에러,결과){
            console.log(결과);
            res.render('jeolla.ejs',{data:결과});
            });
        }catch(err){
            console.log(err);
        }
    });


    router.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "/react-project/build/index.html"));
    });   
        
    return router;        
};
