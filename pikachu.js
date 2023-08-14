let eye=document.querySelectorAll(".eyeroll")
document.addEventListener('mousemove',(e)=>{
   eye.forEach(eye=>{
    const x=eye.getBoundingClientRect().left+(eye.clientWidth/2);
    console.log(x);
    const y=eye.getBoundingClientRect().top+(eye.clientHeight/2);
    console.log(y);
    const radian=Math.atan2(e.pageX-x,e.pageY-y);
    //  console.log(radian);
    const rot = (radian * (180 / Math.PI) * -1) + 90;
    console.log(rot);
    eye.style.transform=`rotate(${rot}deg)`;
   })
})