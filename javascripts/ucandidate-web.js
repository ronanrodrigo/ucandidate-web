angular.module('ucandidate-web', [])
  .controller("CandidateCtrl", [function(){
    var self = this
    self.message = "Hello";
    self.changeMessage = function(){
      self.message =  "Goodbye"
    }
  }])