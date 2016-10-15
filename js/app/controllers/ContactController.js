function ContactController() {
  var vm = this
  vm.name = "Tra"
  vm.email = "info@email.com"
  vm.phone = '88958492648'

  this.changeName = function() {
    vm.name = 'Something else!'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController)