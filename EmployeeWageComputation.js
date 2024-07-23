const employee={
    id:Math.floor(Math.random()*10),
    name:"emp1",
    partTime:Math.random()>=0.5?1:0,
};


class EmployeeWage{
    hrs;
    wagePerhr;
    checkAttendance=(id)=>{
        if(id>2){
            return "present";
    
        }
        return "absent";
    }
    assignHrs=()=>{
        switch(employee.partTime){
            case 1:
                this.hrs=4;
                break;
            default:
                this.hrs=8;
        }
    }
    calculateWage=()=>{
        this.wagePerHr=20;
        if(this.checkAttendance(employee.id)==="present"){
            this.assignHrs();
            return this.wagePerHr*this.hrs;
        }
        return "employee is absent";
    }
    calculateMonthlyWage=()=>{
        this.wagePerHr=20;
        this.assignHrs();
        let monthlyWage=20*(this.wagePerHr*this.hrs);
        return monthlyWage;
    }
    calculateWageTillCondition=(duration)=>{
        let total=0;
        while(duration>0){
            total+=this.wagePerHr;
            duration--;
        }
        return total;
    }
}

let emp1=new EmployeeWage();
emp1.calculateWage()==="employee is absent"?console.log("employee is absent")
:console.log("employee wage ="+emp1.calculateWage());