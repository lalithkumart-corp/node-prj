app1.factory('studentDataFac', ['$http', function ($http) {

    var urlBase = 'http://localhost:2307/Service1.svc';
    var anObj = {};

    anObj.studentsList = ['Anandh', 'Balaji', 'Chitra', 'Devaraj', 'Eradiya'];
    anObj.getStudents = function () {
        return anObj.studentsList;
    };

    anObj.addStudent = function (stud) {
        return anObj.studentsList.push(stud);
    };

    // anObj.getStudents = function () {
    //     return $http.get(urlBase+'/GetStudents');
    // };

    // anObj.addStudent = function (stud) {
    //     return $http.post(urlBase + '/AddStudent', stud);
    // };

    return anObj;

}]);