function getsquare(x:number)
{
    return x * x;
}
var target:number = getsquare(4)
console.log(target)
interface IStudent {
    name: string;
    course?: string;
    Matricno: string
}
function getStudentInfo(info: IStudent)
{
    console.log(`Student details are: Name is ${info.name} and course is ${info.course} and matric number is ${info.Matricno}`);
    //console.log(info.Matricno);
}

const student: IStudent = {
    name:'Ikenna',
    course:'MIT',
    Matricno: '139056746'
}

 class Student{
    public name: string;
    public course?: string;
    public matno: string;
    constructor(sdetails:IStudent)
    {
        this.name = sdetails.name;
        this.course = sdetails.course;
        this.matno = sdetails.Matricno;

    }
    public tostring(): String{
        return `Student details are Name:${this.name},Course:${this.course} and MatricNo:${this.matno}`
    }
}
getStudentInfo(student)
const newStudent = new Student({
    name:'Janet Sanders',
    course:'Sociology',
    Matricno: '01234567'
})
console.log(newStudent.tostring())
