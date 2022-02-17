

setTimeout(function(){
    var element = document.images
    for (var i=0,len=element.length; i<len; i++){   
        var element_item = element[i]
        //然后对该标签的属性进行设值,使用setAttribute("","")方法来实现，第一个参数是指属性值，
        //第二个参数指具体修改的值，如果标签原先有这个属性，则直接替换原来的值，否则重新添加一个新的属性给对应的标签
        element_item.setAttribute("referrerPolicy","no-referrer");
    } 
}, 200);
setTimeout()