module.exports=function(elementSe){
	
	elementSe.keyup(function(){
		$('.input-box').text($(this).val())
	})
}
