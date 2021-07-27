const img = document.getElementById('introduce_img');
const txt = document.getElementById('introduce_txt');
const more = document.getElementById('introduce_more');
const img_first = document.getElementById('img_first');
const img_center = document.getElementById('img_center');
const img_last = document.getElementById('img_last');
let first_line = document.getElementsByClassName('first_line');
let second_line = document.getElementsByClassName('second_line');
const goods = document.getElementsByClassName('goods')[0]
const login = document.getElementById('login')
const register = document.getElementById('register')
const login_view = document.getElementById('login_view')
const register_view = document.getElementById('register_view')
const exit = document.getElementsByClassName('exit')
const masktop = document.getElementById('masktop')
let header_wrapper = document.getElementById('header_wrapper')
const pause = document.getElementsByClassName('fa-pause')[0]
const play = document.getElementsByClassName('fa-play')[0]
const audio = document.getElementById('audio')



login.onclick  = function(){
    login_view.style.display = 'block'
    masktop.style.display = 'block'
}
exit[0].onclick = function(){
    // alert()
    login_view.style.display = 'none'
    masktop.style.display = 'none'
}


exit[1].onclick = function(){
    // alert()
    register_view.style.display = 'none'
    masktop.style.display = 'none'
}
register.onclick  = function(){
    register_view.style.display = 'block'
    masktop.style.display = 'block'
}

pause.onclick = function(){
    audio.play()
    pause.style.display = 'none'
    play.style.display = 'inline'

}
play.onclick = function(){
    audio.pause()
    play.style.display = 'none'
    pause.style.display = 'inline'
}


// 鼠标滚轮滚动到一定位置执行的js代码
window.onscroll = function (){  
	let clienth = document.documentElement.clientHeight;  //屏幕高度
	let scrollt = document.documentElement.scrollTop + document.body.scrollTop; //滚动条滚动高度
    if(scrollt>=40){
        header_wrapper.style.cssText = 'position:fixed; z-index:999; background-color:#eaeaea;width:100%;top:0'
    }else{
        header_wrapper.style.cssText = ''
    }

    if (scrollt+clienth>=813) {
        img_first.style.cssText = 'animation: rotateX 1s;'
        img_center.style.cssText = 'animation: rotateX  1s;'
        img_last.style.cssText = 'animation: rotateX  1s;'
    }

    if (scrollt+clienth>=1324) {
        backtop.style.cssText = 'display:block'
    }else{
        backtop.style.cssText = 'display:none'
    }

	if (scrollt+clienth>=1372) {
	 	img.style.cssText = 'animation: slideLeft 1s;'
        txt.style.cssText = 'animation: slideRight 1s;'
    }
    if (scrollt+clienth>=1824) {
        more.style.cssText = 'animation: slideBottom 1s;'
    }
    if(scrollt+clienth>1960){
        for(let i=0;i<first_line.length;i++){
            first_line[i].style.cssText = 'animation: scale 1s;'
        }
    }
     if(scrollt+clienth>2284){
        for(let i=0;i<second_line.length;i++){
            second_line[i].style.cssText = 'animation: scale 1s;'
        }
    }
    // console.log("--------------------------")
    // console.log(scrollt + "滚动条高度")
    // console.log(clienth + "屏幕高度")
	 console.log(scrollt+clienth)

} 

// 轮播图
const swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    loop: true,
    autoplay: 3000,
    speed: 1000,
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
    effect: 'fade', 
    grabCursor: true,
    cube: {
        shadow: false,
        slideShadows: false,
        shadowOffset: 20,
        shadowScale: 0.94
    }
});