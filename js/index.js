$(function(){
	//头部下拉菜单
	$(".leftNav li").hover(function(){
	$(this).find(".showList").show().parent().siblings().find(".showList").hide();
   },function(){
	$(this).find(".showList").hide();
   })
	
	$(".leftNav_right li").hover(function(){
	$(this).find(".showList").show().parent().siblings().find(".showList").hide();
   },function(){
	$(this).find(".showList").hide();
   })
	
	$(".qx").click(function(){
		$(".list_item li input").each(function(index,element){
			$(".list_item li input").prop("checked",true);
		});
	})
	$(".fx").click(function(){
		$(".list_item li input").each(function(index){
		    if($(".list_item li input").eq(index).prop("checked")==false){
		    	$(".list_item li input").eq(index).prop("checked",true);
		    }else{
		    	$(".list_item li input").eq(index).prop("checked",false);
		    }
		});
	})
	
	$(".qbx").click(function(){
		$(".list_item li input").each(function(index){
			$(".list_item li input").prop("checked",false);
		});
	})
	
	$(".searchTxt").click(function(){
		$(".list").stop().slideToggle();
	})
	
	$(".searchBtn").click(function () {
			      var b=$(".searchInputs").val();
			      $('.comList li a').parent().css("background","#fff")
			      $(".comList li a:contains("+b+")").parent().css("background","red");	    
        })
	
	
	
	function tab(a,b){
		$(a).children(".tp").hover(function(){
		 var index=$(this).index();
		$(a).children(".tp").eq(index).addClass("active").siblings().removeClass("active");
		$(b).children(".wrap").eq(index).addClass("active1").siblings().removeClass("active1");
	})
		
	}
	tab(".comTitle_tabs",".newsBox");
	tab(".tab_title",".smList");
	tab(".ty",".ty1");
	tab(".le2",".le3");
	tab(".le4",".le5");
	tab(".le6",".le7");
	tab(".le8",".le9");
	tab(".le10",".le11");
	tab(".le12",".le13");
	tab(".le14",".le15");
	tab(".le16",".le17");
	tab(".le18",".le19");
	tab(".day",".le-1");
	
})
