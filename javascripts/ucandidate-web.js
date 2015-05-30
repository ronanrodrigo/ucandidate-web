angular.module('ucandidate-web', [])
  .controller("CandidateCtrl", [function(){
    var self = this
    self.knowledgesItems = ["HTML", "CSS", "JavaScript", "Python", "Django", "Desenvolvimento iOS", "Desenvolvimento Android"];
    self.candidate = {name: "", email: ""}
    self.candidateKnowledges = []
  }])