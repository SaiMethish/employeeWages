const employee={
    id:Math.floor(Math.random()*10),
    name:"emp1",
};

const checkAttendance=(id)=>{
    if(id<5){
        return "present";

    }
    return "absent";
}

const calculateWage=()=>{
    if(checkAttendance(employee.id)==="present"){
        let wagePerHr=20;
        let hrs=8;
        return wagePerHr*hrs;
    }
    return "employee is absent";
}
console.log(calculateWage());