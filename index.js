import { Teacher } from "./teacher.js";
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

const teacher = new Teacher ("Mosh","MSc");
console.log (teacher);
teacher.walk();
teacher.teach();

