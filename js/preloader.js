document.body.onload = function() {
    setTimeout(function(){
        document.getElementsByClassName('preloader')[0].style= "opacity: 0";
        document.getElementsByClassName('preloader')[0].style= "z-index: -3";
        document.getElementsByClassName('preloader')[0].style= "visibility: hidden";
        /*document.getElementsByTagName('div')[0].remove();*/
        
    },1000);
    
}
