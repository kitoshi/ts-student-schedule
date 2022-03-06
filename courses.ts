
type courses = Object

function CourseAdd(obj: courses) {
  for (const item in obj) {
    document.querySelector('ul').innerHTML += `<li>${obj[item]}</li>`
  }
    
}


  
const fetchPromise = fetch('http://localhost:8081/courselist')
fetchPromise.then(res => {
  CourseAdd(res.body)
})