function lazyload() {
    let img = document.getElementsByClassName('img')//获取到页面中class名为img的所有标签
    for (let i = 0; i < img.length; i++) {
        img[i].setAttribute("referrerPolicy","no-referrer"); // 将真实地址赋给图片的src属性
    }
}
setTimeout(function(){
    var element = document.images;
    for (var i=0,len=element.length; i<len; i++){   
        var element_item = element[i];
        //然后对该标签的属性进行设值,使用setAttribute("","")方法来实现，第一个参数是指属性值，
        //第二个参数指具体修改的值，如果标签原先有这个属性，则直接替换原来的值，否则重新添加一个新的属性给对应的标签
        element_item.setAttribute("referrerPolicy","no-referrer");
    } 
}, 100);
window.onload = lazyload // 页面加载执行 lazyload
window.onscroll = lazyload // 监听滚动事件，滚动时执行lazyload