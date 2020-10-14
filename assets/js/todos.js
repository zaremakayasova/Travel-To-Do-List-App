$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");

});

$("ul").on("click", "span",function(event){
	$(this).parent().fadeOut(300,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input").keypress(function(event){
	if(event.which===13) {
		//grabbing new todo text from input
		var todoText=$(this).val();
		$(this).val("");
		//create a new li and add it to ul
		$('ul').append('<li><span><i class="fas fa-trash-alt"></i></span> ' + todoText + '</li>');

	} 
});

$(".fa-plus").on("click",function(){

		$("input").fadeToggle();

	});



		