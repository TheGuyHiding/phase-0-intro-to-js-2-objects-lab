// Write your solution in this file!
const employee = {name: 'Sam', streetAddress: '11 Broadway'};

function updateEmployeeWithKeyAndValue(obj, key, value){
    const employee = {...obj};
    return {...obj,[key]: value,};
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key){
    const employee = {...obj};
    delete employee.name;
    return employee;

}

function destructivelyDeleteFromEmployeeByKey(obj, key, value){
    obj[key] = value;

    return obj;
}
