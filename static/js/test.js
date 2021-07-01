const btn = document.getElementById('btn-change-text');
const txt = document.getElementById('special');
btn.addEventListener('click',function(){
  txt.innerHTML = '당신은 이 곡을 부를 수 있습니다.';
});