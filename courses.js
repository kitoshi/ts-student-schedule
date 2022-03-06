function CourseAdd(obj) {
    for (var item in obj) {
        document.querySelector('ul').innerHTML += "<li>".concat(obj[item], "</li>");
    }
}
var fetchPromise = fetch('http://localhost:8081/courselist');
fetchPromise.then(function (res) {
    CourseAdd(res.body);
});
