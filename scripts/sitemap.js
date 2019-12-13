

jQuery(document).ready(function(){
	alert("welcome to the sitemap of RACCO restaurent click on the Pages of Sitemap to see the site map");
	$("#subMenu").hide();
	$("#sitemap").hide();
	$("#eventList").hide();
	
	//alert(document.getElementById("menu"));
	$("#mainMenu").click(showFunction);
	$("#eventMenu").click(showFunction2);
	$("#sitemapHeader").click(sitemap);
	$("a").click(links);
	
	
	function showFunction(){
		//alert("This is the submenu of Menu");
		$("#subMenu").toggle(3000);
	}
	function sitemap(){
		//alert("This is the sitemap of RACCO restaurent");
		$("#sitemap").toggle(3000);
	}
	function showFunction2(){
		//alert("This is the submenu of Events");
		$("#eventList").toggle(3000);
	}
	function links(){
    $("a").css("color","white");
	}
	
	$("a").mouseover(function()
	{
	$(this).css("border-bottom", "1px solid #fff").css( "color", "#CB2D5A");
	});

	$("a").mouseleave(function()
	{
	  $(this).css("border-bottom", "none").css("color", "white");
	});
	});



	
