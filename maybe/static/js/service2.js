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
    youtube: "https://www.youtube.com/results?search_query=Marry+me",
    image_name: "marryme",
  },
  {
    name: "NEXT LEVEL",
    singer: "aespa",
    min: "7",
    max: "25",
    min_name: "0옥타브 시",
    max_name: "3옥타브 파",
    youtube: "https://www.youtube.com/results?search_query=NEXT+LEVEL",
    image_name: "nextlevel",
  },
  {
    name: "One Love",
    singer: "MC THE MAX",
    min: "6",
    max: "24",
    min_name: "0옥타브 라",
    max_name: "3옥타브 미",
    youtube: "https://www.youtube.com/results?search_query=One+Love",
    image_name: "onelove",
  },
  {
    name: "Timeless",
    singer: "SG워너비",
    min: "6",
    max: "16",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=Timeless",
    image_name: "timeless",
  },
  {
    name: "그 날에 나는 맘이 편했을까",
    singer: "이예준",
    min: "6",
    max: "16",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=%EA%B7%B8%EB%82%A0%EC%97%90+%EB%82%98%EB%8A%94+%EB%A7%98%EC%9D%B4+%ED%8E%B8%ED%96%88%EC%9D%84%EA%B9%8C",
    image_name: "그날에나는맘이편했을까",
  },
  {
    name: "그녀를 사랑해줘요",
    singer: "하동균",
    min: "5",
    max: "15",
    min_name: "0옥타브 솔",
    max_name: "2옥타브 도",
    youtube: "https://www.youtube.com/results?search_query=그녀를+사랑해줘요",
    image_name: "그녀를사랑해줘요",
  },
  {
    name: "그대라는 사치",
    singer: "한동근",
    min: "3",
    max: "22",
    min_name: "0옥타브 미",
    max_name: "3옥타브 도",
    youtube: "https://www.youtube.com/results?search_query=그대라는+사치",
    image_name: "그대라는사치",
  },
  {
    name: "그대를 사랑하는 10가지 이유",
    singer: "이석훈",
    min: "1",
    max: "19",
    min_name: "0옥타브 도",
    max_name: "2옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=그대를+사랑하는+10가지+이유",
    image_name: "그대를사랑하는10가지이유",
  },
  {
    name: "기다릴게",
    singer: "하동균 & 이정",
    min: "7",
    max: "23",
    min_name: "0옥타브 시",
    max_name: "3옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=기다릴게",
    image_name: "기다릴게",
  },
  {
    name: "까만안경",
    singer: "이루",
    min: "3",
    max: "16",
    min_name: "0옥타브 미",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=까만안경",
    image_name: "까만안경",
  },
  {
    name: "꿈속에 너",
    singer: "에이치코드(feat.전상근)",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=꿈속에+너",
    image_name: "꿈속에너",
  },
  {
    name: "나를 사랑했던 사람아",
    singer: "허각",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=나를+사랑했던+사람아",
    image_name: "나를사랑했던사람아",
  },
  {
    name: "내 사람",
    singer: "SG워너비",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=내+사람",
    image_name: "내사람",
  },
  {
    name: "내 손을 잡아(최고의 사랑 OST)",
    singer: "IU",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=내+손을+잡아(최고의+사랑+OST)",
    image_name: "내손을잡아",
  },
  {
    name: "너를 만나",
    singer: "폴킴",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=너를+만나",
    image_name: "너를만나",
  },
  {
    name: "너였다면(또 오해영 OST)",
    singer: "정승환",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=너였다면(또+오해영+OST)",
    image_name: "너였다면",
  },
  {
    name: "너의 모든 순간(별에서 온 그대 OST)",
    singer: "성시경",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=너의+모든+순간(별에서+온+그대+OST)",
    image_name: "너의모든순간",
  },
  {
    name: "너의 번호를 누르고",
    singer: "#안녕(prod.영화처럼)",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=너의+번호를+누르고",
    image_name: "너의 번호를 누르고",
  },
  {
    name: "노래방에서",
    singer: "장범준",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=노래방에서",
    image_name: "노래방에서",
  },
  {
    name: "다시 만날까봐",
    singer: "V.O.S",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=다시+만날까봐",
    image_name: "다시만날까봐",
  },
  {
    name: "라라라",
    singer: "SG워너비",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=라라라",
    image_name: "라라라",
  },
  {
    name: "롤린(Rollin')",
    singer: "브레이브걸스",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=롤린(Rollin')",
    image_name: "롤린",
  },
  {
    name: "모든 날, 모든 순간",
    singer: "폴킴",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=모든+날,+모든+순간",
    image_name: "모든날모든순간",
  },
  {
    name: "밝게 빛나는 별이 되어 비춰줄게",
    singer: "송이한",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=밝게+빛나는+별이+되어+비춰줄게",
    image_name: "밝게빛나는별이되어비춰줄게",
  },
  {
    name: "벌써 일년",
    singer: "브라운 아이즈",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=벌써+일년",
    image_name: "벌써일년",
  },
  {
    name: "사계",
    singer: "태연",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=사계",
    image_name: "사계",
  },
  {
    name: "사랑이 식었다고 말해도 돼",
    singer: "먼데이키즈",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=사랑이+식었다고+말해도+돼",
    image_name: "사랑이식었다고말해도돼",
  },
  {
    name: "삭제",
    singer: "이승기",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=삭제",
    image_name: "삭제",
  },
  {
    name: "살다가",
    singer: "SG워너비",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=살다가",
    image_name: "살다가",
  },
  {
    name: "상상더하기",
    singer: "MSG워너비",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=상상더하기",
    image_name: "상상더하기",
  },
  {
    name: "소주 한 잔",
    singer: "임창정",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=소주+한+잔",
    image_name: "소주한잔",
  },
  {
    name: "스토커",
    singer: "10cm",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=스토커",
    image_name: "스토커",
  },
  {
    name: "신호등",
    singer: "이무진",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=신호등",
    image_name: "신호등",
  },
  {
    name: "아로하(슬기로운 의사생활 OST)",
    singer: "조정석",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=아로하(슬기로운+의사생활+OST)",
    image_name: "아로하",
  },
  {
    name: "안아줘",
    singer: "정준일",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=안아줘",
    image_name: "안아줘",
  },
  {
    name: "야생화",
    singer: "박효신",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=야생화",
    image_name: "야생화",
  },
  {
    name: "어디에도",
    singer: "MC THE MAX",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=어디에도",
    image_name: "어디에도",
  },
  {
    name: "오래된 노래",
    singer: "스탠딩에그",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=오래된+노래",
    image_name: "오래된노래",
  },
  {
    name: "우리 왜 헤어져야 해",
    singer: "신예영",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=우리+왜+헤어져야+해",
    image_name: "우리왜헤어져야해",
  },
  {
    name: "응급실(쾌걸춘향 OST)",
    singer: "izi",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=응급실(쾌걸춘향+OST)",
    image_name: "응급실",
  },
  {
    name: "이미 슬픈 사랑",
    singer: "야다",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=이미+슬픈+사랑",
    image_name: "이미슬픈사랑",
  },
  {
    name: "조금 취했어",
    singer: "임재현",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=조금+취했어",
    image_name: "조금취했어",
  },
  {
    name: "좋니",
    singer: "윤종신",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=좋니",
    image_name: "좋니",
  },
  {
    name: "지나오다",
    singer: "닐로",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=지나오다",
    image_name: "지나오다",
  },
  {
    name: "첫눈처럼 너에게 가겠다",
    singer: "에일리",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=첫눈처럼+너에게+가겠다",
    image_name: "첫눈처럼너에게가겠다",
  },
  {
    name: "체념",
    singer: "빅마마",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=체념",
    image_name: "체념",
  },
  {
    name: "추억은 만남보다 이별에 남아",
    singer: "정동하",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=추억은+만남보다+이별에+남아",
    image_name: "추억은만남보다이별에남아",
  },
  {
    name: "축가",
    singer: "전우성",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=축가",
    image_name: "축가",
  },
  {
    name: "포장마차",
    singer: "황인욱",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=포장마자",
    image_name: "포장마차",
  },
  {
    name: "형",
    singer: "노라조",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=형",
    image_name: "형",
  },
  {
    name: "홍연",
    singer: "안예은",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=홍연",
    image_name: "홍연",
  }
]

btn.addEventListener("click", service2);
function service2(){
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
        resultDetail.innerText = resultDetail.innerText = "당신의 실력을 보여주세요.";
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
};
