const employee={
    id:Math.floor(Math.random()*10),
    name:"emp1",
    partTime:Math.random()>=0.5?1:0,
};

let wagePerHr,hrs;
const checkAttendance=(id)=>{
    if(id>2){
        return "present";

    }
    return "absent";
}

const assignHrs=()=>{
    switch(employee.partTime){
        case 1:
            hrs=4;
            break;
        default:
            hrs=8;
    }
}

const calculateWage=()=>{
    wagePerHr=20;
    if(checkAttendance(employee.id)==="present"){
        assignHrs();
        return wagePerHr*hrs;
    }
    return "employee is absent";
}
console.log("employee daily wage ="+calculateWage());

const calculateMonthlyWage=()=>{
    wagePerHr=20;
    assignHrs();
    let monthlyWage=20*(wagePerHr*hrs);
    return monthlyWage;
}
console.log("employee monthly wage ="+calculateMonthlyWage());