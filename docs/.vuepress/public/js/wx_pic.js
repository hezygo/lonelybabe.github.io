

setTimeout(function(){
    let img = document.getElementsByClassName('img')//获取到页面中class名为img的所有标签
    for (let i = 0; i < img.length; i++) {
        img[i].setAttribute("referrerPolicy","no-referrer");}} // 将真实地址赋给图片的src属性
        , 500);
