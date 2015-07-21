$function() {
	'use strict';

	var tpl = $(".js-list").html();
	$(".js-list").html("");

	var promise = $.ajax({
        method: 'GET',
        url: 'http://randomuser.me/api/0.6/...'  // not full url
    }).then(function(data) {
        console.log('type:', typeof data);
        console.log(data);
    })

}