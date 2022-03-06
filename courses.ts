
interface Courses {
  classes: Array<{
    name: string;
    number: string;
    description: string;
    credits: string;
    prerequisites: string;
  }>
}

function CourseAdd(obj: Courses) {
  for (const item in obj.classes) {
    document.querySelector('table').innerHTML += `<tr><td>${obj.classes[item].name}</td><td>${obj.classes[item].number}</td><td>${obj.classes[item].description}</td><td>${obj.classes[item].credits}</td><td>${obj.classes[item].prerequisites}</td></tr>`
  }
    
}


  

async function fetchCourses() {
  const response = await fetch('http://localhost:8081/courselist')
  const courses = await response.json()
  console.log(courses.classes)
  CourseAdd(courses)
}

fetchCourses()