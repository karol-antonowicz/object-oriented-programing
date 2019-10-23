console.log('Hello World!')



/* const student1 = {
    name: 'Karol',
    adress: 'Gdansk',
    studentIdNumber: 144437,
    profile: 'Math',
    displayFullInfo: function () {

    },
    changeId: function (x) {     // substracts studentIdNumber by parameter
        this.studentIdNumber = this.studentIdNumber - x
        console.log(this.studentIdNumber)
    }

}

const student2 = {
    name: 'Michak',
    adress: 'Sopot',
    studentIdNumber: 144387,
    profile: 'Math',
    displayFullInfo: function () {   //
        console.log(`Imie: ${this.name} Adress: ${this.adress} studentIdNumber: ${this.studentIdNumber} Profile: ${this.profile}`)
    },
    changeId: function (x) {     // substracts studentIdNumber by parameter
        this.studentIdNumber = x    // np. nowe id
        console.log(this.studentIdNumber)
    }
}
*/










/*
var studentsList = [];  // tworzy pustą tablicę gdzie będziemy wrzucać studentów

var Person = {
    name: '',
    adress: '',
    studentIdNumber:'',
    profile: '',
    setData: function (name, adres, id, profile) {
        this.name = name
        this.adress = adres
        this.studentIdNumber = id
        this.profile = profile
    }
}

var student1 = Object.create(Person);                   
student1.setData('Michał', 'Poznań', 14585, 'student')      //tu nalezy podać imię, adres, numer id, profil 

var student2 = Object.create(Person);
student2.setData('Karol', 'Gdansk', 14586, 'student')

var student3 = Object.create(Person);
 student3.setData('Łukasz', 'Gdynia', 14587, 'student')

var student4 = Object.create(Person);
student4.setData('Adam', 'Gdansk', 14588, 'student')

var student5 = Object.create(Person);
student5.setData('Karol', 'Poznań', 14589, 'student')

var student6 = Object.create(Person);
student6.setData('Johnny', 'Gdansk', 14590, 'student')

var student7 = Object.create(Person);
student7.setData('Goro', 'Toruń', 14591, 'student')

var student8 = Object.create(Person);
student8.setData('Wariacik', 'Gdansk', 14592, 'student')

var student9 = Object.create(Person);
student9.setData('Siwy', 'Warszawa', 14593, 'student')

var student10 = Object.create(Person);
student10.setData('Mateusz', 'Gdansk', 14594, 'student')




// dodaje wszystkcih studentów do pustej tablicy studentsList


studentsList.push(student1, student2, student3, student4, student5, student6, student7, student8, student9, student10)




var divDisplay = document.querySelector('#display')         // grabs the div on the website
var output = ''                                            // creates empty output

studentsList.map(x=> output += `<div class="content"> ${x.name} ${x.adress} ${x.studentIdNumber} ${x.profile}</div>`)  
//mapuje studentlistę i do pustego output wrzuca do niego dla każdego elementu tablicy studentlsita tworzy div o klasie content i wsadza do niego text z nazwa, adresem, id, profilem studenta

divDisplay.innerHTML = output   // dodaje do diva o id display w srodku 
divDisplay.style.display = 'flex';  // dla diva o id display zmienia display na flex
divDisplay.style.flexDirection = 'column';  // wiadomo
divDisplay.style.justifyContent = 'space-around';   // wiadomo
divDisplay.style.height = '98vh';   // wiadomo

divContent = document.querySelectorAll('.content')







*/



// CONSTRUCTOR FUNCTION 



function Person(name, id, adress) {
    this.name = name;
    this.id = id;
    this.adress = adress;
}





Person.prototype.drawEmoji = function () {
    console.log('=D')
}




function Student(name, adress, id) {
    Person.call(this, name, id, adress);
    this.changeId = function (newId) {
        this.studentIdNumber = newId;
    };
    this.profile = 'student'
}





function Teacher(name, adress) {
    Person.call(this, name, null, adress);
    this.profile = 'teacher'
}





Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;



Teacher.prototype = Object.create(Person.prototype)
Teacher.prototype.constructor = Teacher;




var student1 = new Student('Michael', 'Warszawa', 123)
var student2 = new Student('Johnny', 'Gdansk', 124)

var teacher1 = new Teacher('Ewelina', 'Gdansk')
var teacher2 = new Teacher('Marian', "Warszawa")




// creating lists /arrays 

var studentsList = [];
studentsList.push(student1, student2)

var teachersList = [];
teachersList.push(teacher1, teacher2)


// DOM


divDisplay = document.getElementById('display') // grabs the div with display id

var outputT = [];
var outputS = [];

let a = teachersList.map((x => outputT +=`<div class="teacher">${x.name} ${x.adress} ${x.profile}</div>`))
let b = studentsList.map((x => outputS +=`<div class="student">${x.name} ${x.adress} ${x.profile} ${x.id}</div>`))

let makeSectionT = document.createElement('section')
let makeSectionS = document.createElement('section')

divDisplay.appendChild(makeSectionT).classList.add('teacher')
divDisplay.appendChild(makeSectionS).classList.add('student')

document.getElementsByClassName('teacher')[0].innerHTML = outputT
document.getElementsByClassName('student')[0].innerHTML = outputS









/*



var studentsList = [
    new Student('Karol', 'Gdansk', 8555),
    new Student('Michal', 'Gdansk', 8556),
    new Student('Jacek', 'Gdansk', 8557),
    new Student('Tomasz', 'Gdansk', 8558)
]



function StudentsList(...studentsList) {
    this.list = [];
    this.AddToList = function (...studentsList) {
        this.list.push(...studentsList)
    }
}


StudentsList(studentsList);
console.log(StudentsList(studentsList))




*/







