var express=require("express");
var server=express();

var bodyparser=require("body-parser");
server.use(bodyparser.urlencoded({extended:true}));
server.use(bodyparser.json());

var router = express.Router();
/*
router.use("/",function(req,res,next){
   console.log({message:"okay you are in router"});
    next();
});
*/
var mongoose=require("mongoose");
var db=mongoose.connect("mongodb://localhost/studentdb");
//later use a separate collection to generate id for student.
var studentSchema=new mongoose.Schema({
  firstname:String,
  lastname:String,
  dob:Date,
  id:String,
  course:String   
});
var studentModel=mongoose.model("studentModel",studentSchema,"students")


server.get("/",function(req,res){
    res.sendFile( __dirname+"/pages/index.html");
});
server.get("/addStudentForm",function(req,res){
    res.sendFile( __dirname+"/pages/addStudentForm.html");
});
server.get("/showAllStudentsForm",function(req,res){
    res.sendFile( __dirname+"/pages/showAllStudentsForm.html");
});


router.post("/addStudent",function(req,res){
    var student=new studentModel();
    if(req.body.dataType=="application/json"){
    student.firstname=req.body.data.firstname;
    student.lastname=req.body.data.lastname;
    student.id=req.body.data.id;
    student.dob=req.body.data.dob;
    student.course=req.body.data.course; 
    }else{
    student.firstname=req.body.firstname;
    student.lastname=req.body.lastname;
    student.id=req.body.id;
    student.dob=req.body.dob;
    student.course=req.body.course;
    }
    student.save(function(err,result){
        if(err){
         res.status=400;
          res.json({"message":"Error!Student was not added"});
        }else{
         res.status=201;
         res.json(result);
        }
    }); 
    
});
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    studentModel.find({},function(err,result){
        if(err){
            res.status=500;
            res.send({message:"database error"});
        }else{
            res.json(result);
        }
    });
});
router.delete('/deleteStudent/:studentid',function(req,res){
    var id=req.params.studentid;
    studentModel.remove({"id":id},function(err,result){
        if(err){
         res.status=400;
         res.json({"message":"could not delete student"});  
        }else{
           res.status=200;
           res.json(result) ;
        }
    })
});
server.use("/students",router);
server.listen("3000");
