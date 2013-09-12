$(document).ready(function(){
	$("object#page").height($(window).height()).width($("article.main").width())

	$("nav.main").height($(window).height())

    window.ClassHomepage = window.ClassHomepage || {}
    window.ClassHomepage.load_links = function(links_template_data) {
        console.log("loading links")
        var source = $("#links-template").html()
        var template = Handlebars.compile(source)
        var html = template({'links': links_template_data})
        $('nav.main').html(html)


        // click handlers for links
        // to load into frame
        $("nav.main a").click(function(){
            $("article.main")
                .empty()
                .append($("<object>")
                    .attr("type","text/html")
                    .attr("id", "page")
                    .attr("height", $(window).height())
                    .attr("width", $("article.main").width())
                    .attr("data",$(this).attr("href"))
                )
            return false
        })

        $('nav.main a').eq(0).trigger("click")
    }

    // $("#todoist").click(function(){
    // 	$("article.main")
    // 		.empty()
    // 		.append($("<object>")
    //     		.attr("type","text/html")
    //     		.attr("id", "page")
    //     		.attr("height", $(window).height())
    //     		.attr("width", $("article.main").width()-700)
    //     		.attr("data",$(this).attr("data-todoist"))
    //     		.css("float","left")
    // 		)
    // 		.append($("<object>")
    //     		.attr("type","text/html")
    //     		.attr("id", "page")
    //     		.attr("height", $(window).height())
    //     		.attr("width", "700px")
    //     		.attr("data",$(this).attr("data-toggle"))
    //     		.css("float","left")
    // 		)
    // 	return false
    // })

    // resize layout handlers
    $(window).resize(function(){
    	if($("article.main > *").size() == 1){
    		$("article.main > *")
    			.attr("height", $(window).height())
    			.attr("width", $("article.main").width())
    	}
    	else {
    		$("article.main > * ").first()
    			.attr("height", $(window).height())
    			.attr("width", $("article.main").width()-700)
    		$("article.main > *").last()
    			.attr("height", $(window).height())
    			.attr("width", "700px")
    	}
    })
})
