/*
selectors:-
    $("h2").action();
    $(".class").action();
    $("#id").action();
    $("#id1, #id2, .class1, div, p").action();

    (selecting nested elements)
    $("div > p").action();
    $("div p").action();
    
    (selecting first occurence)
    $("p:first").action();
    $(".class1:first").action();
    $("div .class1:first").action();
    
    (selecting patterned occurences)
    $("div .class1:even").action();
    $("div .class2:odd").action();
*/

/*
events:-
    $("h2").action();
    $(".class").action();
    $("#id").action();
    $("#id1, #id2, .class1, div, p").action();

    (selecting nested elements)
    $("div > p").action();
    $("div p").action();
    
    (selecting first occurence)
    $("p:first").action();
    $(".class1:first").action();
    $("div .class1:first").action();
    
    (selecting patterned occurences)
    $("div .class1:even").action();
    $("div .class2:odd").action();
*/

// jquery syntax
$(document).ready(function () {
	function fade() {
		$("#title1").fadeToggle(2000);
	}

	function fadeIn() {
		$("#title1").fadeIn();
	}

	function fadeOut() {
		$("#title1").fadeOut();
	}

	// single click event
	$("#btn1").click(fade);

	// double click event
	$("#btn2").dblclick(fade);

	// mouseover event
	$("#title1").mouseenter(fadeOut);

	// mouseout event
	$("#title1").mouseleave(fadeIn);

	// hover event
	$("#title2").hover(fadeOut, fadeIn);

	/**
	 * actions:-
	 * hide, show, toggle(does both show hide)
	 * fadeIn("slow/fast/{number}", callback), fadeOut, fadeToggle
	 * slideUp, slideDown, slideTOggle,
	 */

	$("#btn3").click(function () {
		$("#cube").animate(
			{
				left: "150px",
				opacity: "1",
				width: "100px",
				height: "100px",
			},
			1000
		);
	});

	$("#btn3").click(function () {
		// chaining of effects
		$("#title2").slideUp(2000).slideDown(2000);
	});

	/**
	 * dom manipulation methods:-
	 * text(), html(), attr(), css()
     * append(), prepend(), after(), before()
     * empty(), remove(#id1, #id2)
     * addClass(), removeClass(), toggleClass() 
	 */
	$("#btn4").click(function () {
        console.log($('#exp').text());
        console.log($('#exp').html());
        console.log($('#exp').attr("value"));
        console.log($('#exp').css("color"));
        $('#exp').text("<b>This is stolen.</b>") //enter as text
        $('#exp').html("<b>This is stolen.</b>") //enter as html
        $('#exp').attr("value", "Welcome World") 
        $('#exp').css("color", "red") 

        $('#exp').append("<em>This is not stolen append</em>")
        $('#exp').prepend("<em>This is not stolen prepend</em>")
        $('#exp').before("<em>This is not stolen before</em>")
        // $('#exp').remove()
        // $('#exp').empty()
    });
});
