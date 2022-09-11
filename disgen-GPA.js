var table=document.getElementById("table-body");
window.onclick = e => {
    if(e.target.getAttribute("id") == "remove"){
        e.target.parentNode.parentElement.remove();
    }
}  

let count = 0;

function createElements() {
    let tempNum = null;
    for(let i = count ; i < count + 6 ;i++){
    let row =`
    <td><input type="text" placeholder="Course name" class="name-course" id="test"></td>
    <td><select name="select" class="select" >
        <option selected="selected" value="0" disabled="disabled" hidden="hidden"class="grades">Grade</option>
        <option value="4">A+</option>
        <option value="3.7">A</option>
        <option value="3.3">B+</option>
        <option value="3">B</option>
        <option value="2.7">C+</option>
        <option value="2.4">C</option>
        <option value="2.2">D+</option>
        <option value="2">D</option>
        <option value="0">F</option>
    </select></td>
    <td><input type="number" placeholder="Degree" class="points"></td>
    <!-- <td><input type="number" placeholder="Hours"></td> -->
    <td><select name="" id="" class="hours">
        <option selected="selected" disabled="disabled" hidden="hidden">Hours</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select></td>
    <td><i class="bi bi-x-circle" id="remove"></i></td>`;
    var temp=document.createElement("tr");

    temp.innerHTML=row;        
    table.appendChild(temp);
    tempNum = i  + 1;
    }

    count = tempNum;
}

function calculation(){
    let rowValue = document.querySelectorAll('tr');
    let totalPoints = 0;
    let totalHours = 0;
    rowValue.forEach(element => {
        let point = parseInt(element.querySelector("select.select").value);
        let hour = parseInt(element.querySelector("select.hours").value);
        totalHours += hour;
        totalPoints += point * hour;
    })
    // console.log(totalPoints/totalHours);
    document.getElementById("result").innerHTML=(totalPoints/totalHours);
    // console.log(totalPoints/totalHours);


    
}

createElements();

function createCourse() {
    var temp=document.createElement("tr");
    let row =`
    <td><input type="text" placeholder="Course name" class="name-course" id="test"></td>
    <td><select name="select" class="select" >
        <option selected="selected" value="0" disabled="disabled" hidden="hidden"class="grades">Grade</option>
        <option value="4">A+</option>
        <option value="3.7">A</option>
        <option value="3.3">B+</option>
        <option value="3">B</option>
        <option value="2.7">C+</option>
        <option value="2.4">C</option>
        <option value="2.2">D+</option>
        <option value="2">D</option>
        <option value="0">F</option>
    </select></td>
    <td><input type="number" placeholder="Degree" class="points"></td>
    <!-- <td><input type="number" placeholder="Hours"></td> -->
    <td><select name="" id="" class="hours">
        <option selected="selected" disabled="disabled" hidden="hidden">Hours</option>
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
    </select></td>
    <td><i  onclick="cleanRow(${count})" class="bi bi-x-circle"></i></td>`;
temp.innerHTML=row;
table.appendChild(temp);
count++;
}















// const grades=document.querySelectorAll('.grades');
// const chours=document.querySelectorAll('.chours');
// const points=document.querySelectorAll('.points');
// const gpoints=document.querySelectorAll('.gpoints');
// const result=document.querySelectorAll('.result');
// var p=0;
// var cr=0;
// function calculation() {
//     for (var i = 0; i < grades.length; i++) {
//         if (grades[i].value=="A"&&chours[i]=="1") {
//             p=p+3.7;
//             cr=cr+1;
//         }
//         else if(grades[i].value=="A"&&chours[i]=="2"){
//             p=p+7.4;
//             cr=cr+2;
//         }
//         else if(grades[i].value=="A"&&chours[i]=="3"){
//             p=p+11.2;
//             cr=cr+3;
//         }
//         else if(grades[i].value=="B"&&chours[i]=="1"){
//             p=p+3;
//             cr=cr+1;
//         }
//         else if(grades[i].value=="B"&&chours[i]=="2"){
//             p=p+6;
//             cr=cr+2;
//         }
//         else if(grades[i].value=="B"&&chours[i]=="3"){
//             p=p+9;
//             cr=cr+3;
//         }
//         else if(grades[i].value=="C"&&chours[i]=="1"){
//             p=p+1.5;
//             cr=cr+1;
//         }
//         else if(grades[i].value=="C"&&chours[i]=="2"){
//             p=p+3;
//             cr=cr+2;
//         }
//         else if(grades[i].value=="C"&&chours[i]=="3"){
//             p=p+4.5;
//             cr=cr+3;
//         }
//         else if(grades[i].value=="D"&&chours[i]=="1"){
//             p=p+1;
//             cr=cr+1;
//         }
//         else if(grades[i].value=="D"&&chours[i]=="2"){
//             p=p+2;
//             cr=cr+2;
//         }
//         else if(grades[i].value=="D"&&chours[i]=="3"){
//             p=p+3;
//             cr=cr+3;
//         }
//     }
//     var total=p/cr;
//     result.innerHTML=`your gpa is${total}`;
// }