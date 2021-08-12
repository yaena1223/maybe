const btn = document.getElementById('btn-change-text');
const txt = document.getElementById('special');

btn.addEventListener('click',function(){
  // txt.innerHTML = "<div style=''><h3>부를 수 있을거야 아마두~</h3></div>";
  txt.innerHTML = "<h3><div style='color:yellow'>부를 수 없을거야 아마두~ </div><br><div style='color:yellow'>이 노래를 부르기 위해서는 4 음정 조절이 필요합니다!</div></h3>";
});