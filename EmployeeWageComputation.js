const employee={
    id:Math.floor(Math.random()*10),
    name:"emp1",
};

const checkAttendance=(id)=>{
    if(id<5){
        console.log("present");
    }
    else console.log("absent");
}
checkAttendance(employee.id);