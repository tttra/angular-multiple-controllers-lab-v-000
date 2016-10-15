function StaffController() {
  var vm = this
  vm.name = "Staff 1"
  vm.email = "Email 1"
  vm.phone = "Phone 1"
}

angular
  .module('app')
  .controller('StaffController', StaffController)