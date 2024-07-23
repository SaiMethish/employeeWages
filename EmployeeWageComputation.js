const employee={
    id:Math.floor(Math.random()*10),
    name:"emp1",
    partTime:Math.random()>=0.5?1:0,
};

const checkAttendance=(id)=>{
    if(id<5){
        return "present";

    }
    return "absent";
}

const calculateWage=()=>{
    let wagePerHr,hrs;
    wagePerHr=20;
    if(checkAttendance(employee.id)==="present"){
        if(employee.partTime==1){
            hrs=4;
        }
        else hrs=8;
        return wagePerHr*hrs;
    }
    return "employee is absent";
}
console.log(calculateWage());