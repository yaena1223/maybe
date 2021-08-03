/*
음정표:
  0옥타브 도 = 1
  0옥타브 레 = 2
  0옥타브 미 = 3
  0옥타브 파 = 4
  0옥타브 솔 = 5
  0옥타브 라 = 6
  0옥타브 시 = 7
  1옥타브 도 = 8
  1옥타브 레 = 9
  1옥타브 미 = 10
  1옥타브 파 = 11
  1옥타브 솔 = 12
  1옥타브 라 = 13
  1옥타브 시 = 14
  2옥타브 도 = 15
  2옥타브 레 = 16
  2옥타브 미 = 17
  2옥타브 파 = 18
  2옥타브 솔 = 19
  2옥타브 라 = 20
  2옥타브 시 = 21
  3옥타브 도 = 22
  3옥타브 레 = 23
  3옥타브 미 = 24
  3옥타브 파 = 25
  3옥타브 솔 = 26
  3옥타브 라 = 27
  3옥타브 시 = 28
*/

const btn = document.getElementById('btn-change-text');
const special = document.getElementById('special');
const normal = document.getElementById('normal');
const myMin = document.querySelector("#my_min");
const myMax = document.querySelector("#my_max");
const chosenSong = document.querySelector("#chosen_song");
const wantSong = document.querySelector(".want_song")
const resultBoolean = document.querySelector(".result_boolean");
const resultDetail = document.querySelector(".result_detail");
const totalSongList = [
  {
    name: "Marry Me",
    singer: "마크튭&구윤회",
    min: "5",
    max: "15",
    min_name: "0옥타브 솔",
    max_name: "2옥타브 도",
  },
  {
    name: "NEXT LEVEL",
    singer: "aespa",
    min: "7",
    max: "25",
    min_name: "0옥타브 시",
    max_name: "3옥타브 파",
  },
  {
    name: "One Love",
    singer: "MC THE MAX",
    min: "6",
    max: "24",
    min_name: "0옥타브 라",
    max_name: "3옥타브 미",
  },
  {
    name: "Timeless",
    singer: "SG워너비",
    min: "6",
    max: "16",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
  },
  {
    name: "그 날에 나는 맘이 편했을까L",
    singer: "이예준",
    min: "6",
    max: "16",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
  },
  {
    name: "윤회1",
    singer: "You",
    min: "3",
    max: "22",
  },
  {
    name: "윤회2",
    singer: "You",
    min: "3",
    max: "22",
  },
  {
    name: "윤회3",
    singer: "You",
    min: "3",
    max: "22",
  },
  {
    name: "윤회4",
    singer: "You",
    min: "3",
    max: "22",
  },
  {
    name: "윤회5",
    singer: "You",
    min: "3",
    max: "22",
  }
]

btn.addEventListener('click',function(){
  // special.innerHTML = "나의 최저음정: " + myMin.value +" / 나의 최고 음정: " + myMax.value;
  special.innerHTML = `나의 최저음정: ${myMin.value} / 나의 최고 음정: ${myMax.value}`;
  const myMinCompare = parseInt(myMin.value);
  const myMaxCompare = parseInt(myMax.value);
  for (let index = 0; index < totalSongList.length; index++) {
    const element = totalSongList[index];
    if(element.name === chosenSong.value){//이름 일치하면
      //노래의 음정 출력(숫자로)
      normal.innerHTML = `노래의 최저음정: ${element.min} / 노래의 최고 음정: ${element.max}`;
      //당신이 선택한 노래는 (가수)의 (제목)입니다.
      wantSong.innerText = `당신이 부르고 싶은 노래는 ${element.singer}의 ${element.name}입니다.`;
      //부를수 있는지 없는지 판정
      element.min = parseInt(element.min);
      element.max = parseInt(element.max);
      if(myMinCompare <= element.min && myMaxCompare >= element.max){
        resultBoolean.innerText = "당신은 이 노래를 충분히 소화할 수 있습니다!";
        // resultDetail.innerText = "myMin:" + myMin.value + " totalSongList[0].min:" + totalSongList[0].min + "myMax:" + myMax.value + "totalSongList[0].max:" + totalSongList[0].max;
      }
      else{
        resultBoolean.innerText = "아쉽게도 당신은 이 노래를 소화하기 어렵습니다.";
        if(myMinCompare > element.min){
          resultDetail.innerText = `이 노래를 소화하기 위해서는 ${(myMinCompare - element.min)}음정 더 낮게 부를 수 있어야 합니다.`;
        }
        if(myMaxCompare < element.max){
          resultDetail.innerText = `이 노래를 소화하기 위해서는 ${(element.max - myMaxCompare)}음정 더 높게 부를 수 있어야 합니다.`;
        }
        if(myMinCompare > element.min && myMaxCompare < element.max){
          resultDetail.innerText = `이 노래를 소화하기 위해서는 ${(myMinCompare - element.min)}음정 더 낮게, ${(element.max - myMaxCompare)}음정 더 높게 부를 수 있어야 합니다.`;
        }
      }
    }
  }
});

/*Service 3*/
//for문 사용
//만약 myMinCompare <= totalSongList[index].min && myMaxCompare >= totalSongList[index].max라면(부를 수 있다면)
//해당 노래를 캐러셀에 추가 by <img src="{% static 'images/songs/그녀를사랑해줘요.jpeg' %}" class="d-block w-100" alt="...">를 추가
//세부 방식 나중에 다시 고민
const button = document.querySelector("#button1");
button.addEventListener("click", showList);
const carouselIndicators = document.querySelector(".carousel-indicators");
const carouselItem = document.querySelector(".carousel-item");
