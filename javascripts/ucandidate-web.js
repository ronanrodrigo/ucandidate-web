angular.module('ucandidate-web', [])
  .controller("CandidateCtrl", [function(){
    var self = this;
    self.candidate = {};
    self.candidate.knowledges_attributes = [{item: "HTML", level: null}, {item: "CSS", level: null}, {item: "JavaScript", level: null}, {item: "Python", level: null}, {item: "Django", level: null}, {item: "Desenvolvimento iOS", level: null}, {item: "Desenvolvimento Android", level: null}];
  }]);