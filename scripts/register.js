//constructor
function Student(name,age,g1,g2){
    this.name=name;
    this.age=age;
    this.g1=g1;
    this.g2=g2;
}
//get the inputs from HTML
const inputName = document.getElementById("txtName");
const inputAge = document.getElementById("txtAge");
const inputG1 = document.getElementById("txtGrade1");
const inputG2 = document.getElementById("txtGrade2");

let students = JSON.parse(localStorage.getItem("students")) || [];

function register(){
    if( inputName.value == ""){
        alert("Ingresa el nombre");
        return;
    }
    // crear objeto estudiante
    let newStudent = new Student(inputName.value,inputAge.value,inputG1.value,inputG2.value);
    //Agregar estudiante al arreglo
    students.push(newStudent);
    //guardar en localStorage
    localStorage.setItem("students",JSON.stringify(students));
    //mostrar en pantalla
    displayStudents();
    //Limpiar formulario
    inputName.value="";
    inputAge.value="";
    inputG1.value="";
    inputG2.value="";
    //desplegar el obj
}

function displayStudents(){
    const list = document.getElementById("list");
    list.innerHTML="";
    students.forEach((student, index) => {
        let studentElement = `
        <div style="padding-bottom: 10px;">
            <p>${student.name} - ${student.age} - ${student.g1} - ${student.g2}</p>
            <button class="btn btn-danger" onclick="deleteStudent(${index})">Eliminar</button>
        </div>
        `;
        list.innerHTML+=studentElement;
    });
}

function deleteStudent(index){
    students.splice(index,1);
    JSON.stringify(students);
    displayStudents();
}

function clearStorage(){
    localStorage.clear();
    students=[];
    displayStudents();
}

// Mostrar estudiantes
document.addEventListener("DOMContentLoaded", displayStudents);
