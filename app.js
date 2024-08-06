document.getElementById("menu-toggle").addEventListener("click", function () {
  this.classList.toggle("active");
  //document.getElementById('mobile-menu').classList.toggle('active');
});


/*/modo dark da pagina */
const btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
  const main = document.querySelector("main");
  main.style.backgroundColor = '#420ea7';

  const header = document.querySelector("header");
  header.style.background = '#420ea7'
  return;
});
/* fim do modo escuro da pagina */

const btn2 = document.querySelector('#btn2')
btn2.addEventListener('click',function(){
  const main = document.querySelector("main");
  main.style.backgroundColor = '#5e17eb';

  const header = document.querySelector("header");
  header.style.background = '#5e17eb'
})