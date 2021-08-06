import app from "./app";
import { addClass, getStudentsbyClass, getTeachersbyClass, updateModule } from "./endpoints/classes";
import { getAllStudents } from "./endpoints/endpoints";
import { addStudent, deleteStudent, getStudentAge, removeStudentFromClass, studentbyHobby, studentToClass } from "./endpoints/students";
import { addTeacher, removeTeacherFromClass, teacherToClass } from "./endpoints/teachers";


app.get('/users', getAllStudents)
app.get('/student/age', getStudentAge)
app.post('/student', addStudent)
app.post('/teacher', addTeacher)
app.post('/class', addClass)
app.put('/class/student', studentToClass)
app.put('/class/teacher', teacherToClass)
app.get('/class/:classId/students', getStudentsbyClass)
app.get('/class/:classId/teacher', getTeachersbyClass)
app.delete('/class/remove/:studentId', removeStudentFromClass)
app.delete('/student/remove/:studentId', deleteStudent)
app.delete('/remove/:teacherId', removeTeacherFromClass)
app.put('/class/update/:classId', updateModule)
app.get('/students/hobbies', studentbyHobby)