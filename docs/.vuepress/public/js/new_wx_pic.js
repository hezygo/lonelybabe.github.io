function getOffsetByBody(el) {
    //获取标签元素距离底部的距离
    let offsetTop = 0
    while (el && el.tagName !== 'BODY') {
        offsetTop += el.offsetTop
        el = el.offsetParent
    }
    return offsetTop
}
function lazyload() {
    let img = document.getElementsByClassName('img')//获取到页面中class名为img的所有标签
    let availHeight = window.screen.availHeight // 浏览器可用部分高度
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop // 滚动隐藏的高度
    for (let i = 0; i < img.length; i++) {
        let offsetTop = getOffsetByBody(img[i])
        console.log(offsetTop)
        if (offsetTop - scrollTop < availHeight) {  // 判断条件，元素是否出现在用户视野内
            img[i].setAttribute("referrerPolicy","no-referrer"); // 将真实地址赋给图片的src属性
                
            
        }
    }
}
window.onload = lazyload // 页面加载执行 lazyload
window.onscroll = lazyload // 监听滚动事件，滚动时执行lazyload