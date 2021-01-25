window.addEventListener("scroll",()=>{
    var node = document.getElementById("div2");
    var innerheight = window.innerHeight;
    var pageyOffset = window.pageYOffset;
    var bodyheight = document.body.offsetHeight;
    node.innerHTML ="innerHeight: " + innerheight + "PageYoffset: " + pageyOffset + " bodyHeight: " + bodyheight;
    if(innerheight+pageyOffset>bodyheight-3){
        document.body.innerHTML += '<div class ="div1"></div>';
    }
});


