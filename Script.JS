// Digital Clock

function updateClock(){

    let now = new Date();

    let hours = String(now.getHours()).padStart(2, '0');

    let minutes = String(now.getMinutes()).padStart(2, '0');

    let seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById("clock").innerText =
    `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

updateClock();


// Constructor Function

function Student(name, age, course){

    this.name = name;
    this.age = age;
    this.course = course;

    // Object Method

    this.introduce = function(){

        return `Hi! I am ${this.name} and I study ${this.course}`;
    }
}


// Array

let students = [];


// DOM

let addBtn = document.getElementById("addBtn");

let studentContainer = document.getElementById("studentContainer");


// Add Student

addBtn.addEventListener("click", function(){

    let name = document.getElementById("name").value;

    let age = document.getElementById("age").value;

    let course = document.getElementById("course").value;


    // Validation

    if(name === "" || age === "" || course === ""){

        alert("Please fill all fields");
        return;
    }


    // Create Object

    let newStudent = new Student(name, age, course);


    // Push Into Array

    students.push(newStudent);


    // Display

    displayStudents();


    // Clear Inputs

    document.getElementById("name").value = "";

    document.getElementById("age").value = "";

    document.getElementById("course").value = "";

});


// Display Students

function displayStudents(){

    studentContainer.innerHTML = "";


    students.forEach(function(student, index){

        studentContainer.innerHTML += `

        <div class="student-card">

            <h2>${student.name}</h2>

            <p><strong>Age:</strong> ${student.age}</p>

            <p><strong>Course:</strong> ${student.course}</p>

            <div class="card-buttons">

                <button class="intro-btn"
                onclick="showIntro(${index})">

                Introduce

                </button>

                <button class="delete-btn"
                onclick="deleteStudent(${index})">

                Delete

                </button>

            </div>

        </div>

        `;
    });


    // Update Stats

    document.getElementById("totalStudents").innerText =
    students.length;


    let uniqueCourses = [...new Set(
        students.map(student => student.course)
    )];

    document.getElementById("totalCourses").innerText =
    uniqueCourses.length;

}


// Introduce Method

function showIntro(index){

    alert(students[index].introduce());

}


// Delete Student

function deleteStudent(index){

    students.splice(index, 1);

    displayStudents();

}