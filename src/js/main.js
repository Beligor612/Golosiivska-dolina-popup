$(function () {
    function Dnone(){
        setTimeout(()=>{
            $('.overview').css('display', 'none')
        },500)
    }
    function PopupHide(){
        $('.popup').removeClass('animate__bounceIn').removeClass('animate__delay-1s').addClass('animate__bounceOut');
    }
    $('.popup__close_icon').on('click', ()=>{
        PopupHide()
        Dnone()
    })
    $('.popup-form').submit((e)=>{
        e.preventDefault()
        PopupHide()
        
    })
    $('.overview').click((e)=>{
        PopupHide()
        Dnone()
    })
    $('.popup').click((e)=>{
        e.stopPropagation()
    })
});