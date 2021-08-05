/*Service 3*/
//for문 사용
//만약 myMinCompare <= totalSongList[index].min && myMaxCompare >= totalSongList[index].max라면(부를 수 있다면)
//해당 노래를 캐러셀에 추가 by 를 추가
//세부 방식 나중에 다시 고민

const button = document.getElementById("button1");
button.addEventListener("click", showList);

let slideNumber = 1;
const carouselIndicators = document.querySelector(".carousel-indicators");
const carouselInner= document.querySelector(".carousel-inner");
function showList(){
    for (let index = 0; index < totalSongList.length; index++) {
        const element = totalSongList[index];
        const myMinCompare = parseInt(myMin.value);
        const myMaxCompare = parseInt(myMax.value);
        element.min = parseInt(element.min);
        element.max = parseInt(element.max);
        if(myMinCompare <= element.min && myMaxCompare >= element.max){
            //carouselIndicator에 버튼 추가
            const newButton = document.createElement("button");
            newButton.setAttribute('type', 'button');
            newButton.setAttribute('data-bs-target', '#carouselExampleIndicators');
            newButton.setAttribute('data-bs-slide-to', `${slideNumber}`);
            newButton.setAttribute('aria-label', `Slide ${slideNumber+1}`);
            slideNumber++;
            carouselIndicators.appendChild(newButton);
            //careouselInner에 div append 후 그 안에 a삽입 후 img 삽입
            const newDiv = document.createElement("div");
            newDiv.className = "carousel-item added";
            carouselInner.appendChild(newDiv);
            const newAnchor = document.createElement("a");
            newAnchor.setAttribute('href', `${element.youtube}`);
            newAnchor.setAttribute('target', '_blank');
            newDiv.appendChild(newAnchor);

            const newImage = document.createElement('img');
            newImage.className = "d-block w-100";
            newImage.setAttribute('src', `/static/images/songs/${element.image_name}.jpeg`);
            newImage.setAttribute('alt', '...');
            newAnchor.appendChild(newImage);

            console.log(carouselInner);
            const imgSource = newImage.src;
            console.log(imgSource);
        }
        else{
            console.log(`아쉽게도 당신은 ${element.name}를 소화하기 어렵습니다.`);
        }
    }
};
