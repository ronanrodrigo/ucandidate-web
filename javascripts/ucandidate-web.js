angular.module('ucandidate-web', [])
  .controller("CandidateCtrl", ['$http', function($http){
    var self = this;
    self.candidate = {};
    self.candidate.knowledges_attributes = [{item: "HTML", level: null}, {item: "CSS", level: null}, {item: "JavaScript", level: null}, {item: "Python", level: null}, {item: "Django", level: null}, {item: "Desenvolvimento iOS", level: null}, {item: "Desenvolvimento Android", level: null}];

    self.submit = function () {

      $http.post("http://ucandidate-api.herokuapp.com/:3000/api/candidates", {"candidate" : self.candidate}).then(function(response){
        console.log(response)
      }, function(errResponse){
        console.log("Erro ao comunicar com a API")
      })
    }
  }])
  .config(['$httpProvider', function($httpProvider){
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    $httpProvider.defaults.headers.post["Content-Type"] = "application/json";
    $httpProvider.defaults.headers.common["Accept"] = "application/vnd.ucandidate.v1";
    $httpProvider.defaults.headers.post["Accept"] = "application/vnd.ucandidate.v1";
  }]);