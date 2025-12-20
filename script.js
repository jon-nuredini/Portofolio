/* Typed text */
const text = ["Full-Stack Developer", "DevOps Enthusiast", "Modern Web Designer"];
let i=0,j=0;
const typed = document.querySelector(".typed");

function typing(){
  if(j < text[i].length){
    typed.textContent += text[i][j++];
    setTimeout(typing,80);
  } else {
    setTimeout(() => {
      typed.textContent="";
      j=0;
      i=(i+1)%text.length;
      typing();
    },1500);
  }
}
typing();

/* Dark / Light */
const toggle=document.getElementById("themeToggle");
toggle.onclick=()=>document.body.classList.toggle("light");

/* Modal */
const modal=document.getElementById("modal");
const title=document.getElementById("modalTitle");
const textModal=document.getElementById("modalText");

document.querySelectorAll(".project-card").forEach(card=>{
  card.onclick=()=>{
    title.textContent=card.textContent;
    textModal.textContent="Project details go here.";
    modal.style.display="flex";
  }
});

document.getElementById("closeModal").onclick=()=>modal.style.display="none";

/* Particles */
const c=document.getElementById("particles");
const ctx=c.getContext("2d");
c.width=innerWidth;c.height=innerHeight;
let particles=[...Array(80)].map(()=>({
  x:Math.random()*c.width,
  y:Math.random()*c.height,
  r:Math.random()*2+1,
  dx:Math.random()-0.5,
  dy:Math.random()-0.5
}));

function animate(){
  ctx.clearRect(0,0,c.width,c.height);
  particles.forEach(p=>{
    p.x+=p.dx; p.y+=p.dy;
    if(p.x<0||p.x>c.width) p.dx*=-1;
    if(p.y<0||p.y>c.height) p.dy*=-1;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle="rgba(255,255,255,0.6)";
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();
