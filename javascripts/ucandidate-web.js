angular.module('ucandidate-web', [])
  .controller("CandidateCtrl", ['$http', function($http){
    var self = this;
    self.candidate = {};
    self.candidate.knowledges_attributes = [{item: "HTML", level: null}, {item: "CSS", level: null}, {item: "JavaScript", level: null}, {item: "Python", level: null}, {item: "Django", level: null}, {item: "Desenvolvimento iOS", level: null}, {item: "Desenvolvimento Android", level: null}];

    $http.get("https://ucandidate-api.herokuapp.com/api/authorization").then(function(response){
      self.authenticity_token = response.data.authenticity_token
    }, function(errResponse){
      console.log("Erro ao conectar com a API")
    })

    self.submit = function () {
      console.log(self.candidate)
    }
  }])
  .config(['$httpProvider', function($httpProvider){
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json"
    $httpProvider.defaults.headers.common["Accept"] = "application/vnd.ucandidate.v1"
  }]);