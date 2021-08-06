/*Service 3*/
//for문 사용
//만약 myMinCompare <= totalSongList[index].min && myMaxCompare >= totalSongList[index].max라면(부를 수 있다면)
//해당 노래를 캐러셀에 추가 by 를 추가
//세부 방식 나중에 다시 고민
const myGenre = document.querySelector("#my_genre");
const button = document.getElementById("button1");
button.addEventListener("click", showList);

const carouselIndicators = document.querySelector(".carousel-indicators");
const carouselInner= document.querySelector(".carousel-inner");
function showList(){
    //carouselInner 초기화 작업
    button.setAttribute("disabled", "disabled");
    button.innerText = "새로고침 후 이용하세요";
    button.style.marginLeft = "42%";
    let slideNumber = 1;
    // const initialIndicator = carouselIndicators.firstElementChild;
    // const initialInner = carouselInner.firstElementChild;
    // while (carouselInner.hasChildNodes()){
    //     carouselInner.removeChild(carouselInner.firstChild); 
    // }
    // while(carouselIndicators.hasChildNodes()){
    //     carouselIndicators.removeChild(carouselIndicators.firstChild);
    // }
    // initialInner.className += ' active';
    // carouselIndicators.appendChild(initialIndicator);
    // carouselInner.appendChild(initialInner);
    //조건에 부합하는 carouselinner 추가 및 같은 수의 carouselIndicator 추가
    for (let index = 0; index < totalSongList.length; index++) {
        const element = totalSongList[index];
        if(element.genre === myGenre.value || myGenre.value === "all"){
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
            }
        }
        
    }
    moveToCarousel('carousel');
    //console.log(carouselIndicators);
    //console.log(carouselInner);
};

function moveToCarousel(seq){
    var offset = $("." + seq).offset();
    $('html, body').animate({scrollTop : offset.top + 200}, 100);
}