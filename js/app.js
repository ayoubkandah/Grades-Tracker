/////////--------------------object
function Student(name,course){
this.name=name;
this.course=course;
this.grade=RandomNumber();

Student.prototype.StudentArray.push(this);
}
Student.prototype.StudentArray=[];

function RandomNumber(){

    var random=Math.floor(Math.random()*100);
return random;
}
//-----------storage
if (localStorage.getItem("student")){

var Data=JSON.parse(localStorage.getItem("student"));

}else{

    var Data=[];
}
//--------------------------Form

var form=document.getElementById("form");
form.addEventListener("submit",Result)

function Result(event){


event.preventDefault();
var Name=event.target.studentName.value;
var Course=event.target.course.value;

var input=new Student(Name,Course);
Data.push(input);
localStorage.setItem("student",JSON.stringify(Data));

// console.log(Student.prototype.StudentArray);

RenderTable();

}


///----------------------------------Render Table

var fixedContent=["Student Name","Student Grade","Course","Pass/Fail"]

function RenderTable(){

var table=document.getElementById("table");
if (table.firstChild){
do{
table.removeChild(table.firstChild);
}
while(table.firstChild)
}
var Trth=document.createElement("tr");
table.appendChild(Trth);

for(var x=0;x<fixedContent.length;x++){

var th=document.createElement("th");
th.textContent=fixedContent[x];
Trth.appendChild(th);

}
////---------------------td 


for(var x=0;x<Data.length;x++){
var TRtd=document.createElement("tr");
table.appendChild(TRtd);
var td=document.createElement("td");
td.textContent=Data[x].name;
TRtd.appendChild(td);

var td=document.createElement("td");
td.textContent=Data[x].grade;
TRtd.appendChild(td);

var td=document.createElement("td");
td.textContent=Data[x].course;
TRtd.appendChild(td);

if(Data[x].grade<50){
    var td=document.createElement("td");
    td.textContent="Fail"
    TRtd.appendChild(td); 
}else{
    var td=document.createElement("td");
    td.textContent="Pass"
    TRtd.appendChild(td); 
}


}




}
if(localStorage.getItem("student")){
    RenderTable();
}


function Remove(){
localStorage.clear();
Data=[];
console.log("d");
var table=document.getElementById("table");
do{
table.removeChild(table.firstChild);
}
while(table.firstChild)


}