;(function($){
 $.fn.SlideShow= function(opts){
	 var opts= $.extend({
		 effect:"none",
		 interval:4000,
		 duration:300,
		 autoplay:true
	 },opts);
	 var _this=this;
	 _this.timerID=null;
	 var picsBox = _this.find(".pics ul").eq(0);
	 var numsBox = _this.find(".nums ul").eq(0);
     var Len=picsBox.find("li").length;
	 var s_w=_this.width();
	 var s_h=_this.height();
	 var index=0;
	 var _translation=function(index, effect){
		 switch(effect){
			 case "none":
			 {
			 picsBox.find("li").eq(index).show().siblings().hide()
			  break;
			 }
			 case "fadeIn":
			 {
			 picsBox.find("li").eq(index).fadeIn(opts.duration).siblings().fadeOut(opts.duration)
			 break;
			 }
			 case "slideLeft":
			 {
			 picsBox.animate({left:- index * s_w}, opts.duration)
			  break;
			 }
			 case "slideTop":
			 {
			 picsBox.animate({marginTop:- index * s_h}, opts.duration)
			 break;
			 }
		 }
		  numsBox.find("li").eq(index).addClass("current").siblings().removeClass("current")
	 }
	 numsBox.find("li").click(function(){
		 clearInterval(_this.timerID)
		 index=$(this).index()
		 _translation(index, opts.effect)
	 }).eq(0).trigger("click")
	_this.hover(function(){
		clearInterval(_this.timerID)
	},function(){
		 _this.timerID= self.setInterval(function(){
		 index= ++index >= Len ? 0 : index
		  _translation(index, opts.effect)
		 }, opts.interval)
	});
	if(opts.autoplay){
      _this.trigger("mouseleave")
	}
 }
})(jQuery)