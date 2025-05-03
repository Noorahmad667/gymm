const btons=document.querySelectorAll('.bton')
btons.forEach(bton =>{
    bton.addEventListener("click",function(e){
        const x=e.clientX;
        const y=e.clientY;
        
        const buttonLeft=e.target.offsetLeft;
        const buttonTop=e.target.offsetTop;
      const xInside=x-buttonLeft;
      const yInside=y-buttonTop;
      const circle=document.createElement('span')
      circle.classList.add('ripple')
      circle.style.left=xInside+"px";
      circle.style.top=yInside+"px";
      this.appendChild(circle)
      setTimeout(()=>circle.remove(),5000)
    })
})
const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector("nav ul");

menuToggle.onclick = () => {
  navList.classList.toggle("on");
};
const icon_downs=document.querySelectorAll('.fas.fa-chevron-down')
const drop_downs=document.querySelector('.drop-down')
icon_downs.forEach(icon_down=>{
  icon_down.addEventListener("click",()=>{

    drop_downs.classList.toggle("active")
  })
  
})


