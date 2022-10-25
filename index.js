const jobs = [
    {id:1, isActive: true},
    {id:2, isActive: false},
    {id:3, isActive: true},
];
console.log (jobs);


const activeJobs = jobs.filter(function(job) {return job.isActive;});
const activeJob = jobs.filter(job => job.isActive);

console.log(activeJobs);
console.log(activeJob);


class Person {
    constructor(name){
    this.name = name;
    }
    walk(){
        console.log("walk");
    }
}

class Teacher extends Person{
    constructor (name,degree) {
        super(name);
        this.degree = degree;
    }
    teach(){
        console.log("teach");
    }
}


const teacher = new Teacher ("Mosh","MSc");
console.log (teacher);
teacher.walk();
teacher.teach();

