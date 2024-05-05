let bulb= document.getElementById("bulbImage")
            // console.log(bulb.getAttribute("src"))

let offBtn=document.getElementById("offBtn")
let onBtn=document.getElementById("onBtn")
            
offBtn.addEventListener("click",()=>{
                
    bulb.setAttribute("src","https://cdn.vectorstock.com/i/2000v/70/44/3d-realistic-off-light-bulb-icon-closeup-vector-27407044.avif")
})

onBtn.addEventListener("click",()=>{
    bulb.setAttribute("src","https://cdn.vectorstock.com/i/1000x1000/70/45/3d-realistic-turning-on-light-bulb-icon-vector-27407045.webp")
                
})