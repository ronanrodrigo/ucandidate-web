angular.module('ucandidate-web', [])
  .controller("CandidateCtrl", ['$http', function($http){
    var self = this;
    var nanobar = new Nanobar({bg: "#337ab7"})

    self.startData = function(){
      self.candidate = {};
      self.candidate.knowledges_attributes = [{item: "HTML", level: null}, {item: "CSS", level: null}, {item: "JavaScript", level: null}, {item: "Python", level: null}, {item: "Django", level: null}, {item: "Desenvolvimento iOS", level: null}, {item: "Desenvolvimento Android", level: null}];
    }

    self.startData()

    self.submit = function () {
      console.log(self.candidateForm)
      nanobar.go(10)
      $http.post("http://ucandidate-api.herokuapp.com/api/candidates", {"candidate" : self.candidate}).then(function(response){
        nanobar.go(100)
        self.startData()
        swal("Informaçoes recebidas!", "Em breve você receberá um e-mail sobre nossas vagas.", "success")
      }, function(errResponse){
        nanobar.go(100)
        console.log("Erro ao comunicar com a API")
      })
    }
  }])
  .config(['$httpProvider', function($httpProvider){
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    $httpProvider.defaults.headers.post["Content-Type"] = "application/json";
    $httpProvider.defaults.headers.common["Accept"] = "application/vnd.ucandidate.v1";
    $httpProvider.defaults.headers.post["Accept"] = "application/vnd.ucandidate.v1";
  }])
  .filter('trim', function () {
    return function (value) {
        return (!value) ? '' : value.replace(/ /g, '');
    };
  });;