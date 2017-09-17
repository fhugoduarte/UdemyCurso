(function(){
	angular.module('primeiraApp').factory('msgs', [
		'toastr',
		MsgsFactory
	])
	function MsgsFactory(toastr){
		function addMsg(msgs, tittle, method){
			if(msgs instanceof Array){
				msgs.forEach(msg => toastr[method](msg, tittle))
			}else{
				toastr[method](msgs, tittle)
			}
		}

		function addSuccess(msgs){
			addMsg(msgs, 'Success', 'success')
		}

		function addError(msgs){
			addMsg(msgs, 'Error', 'error')
		}

		return {addSuccess, addError}
	}
})()