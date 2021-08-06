const lowResult = document.querySelector(".low_result");
const savedLowResult = localStorage.getItem("low_test_result");
lowResult.innerText = savedLowResult;

const highResult = document.querySelector(".high_result");
const savedHighResult = localStorage.getItem("high_test_result");
highResult.innerText = savedHighResult;

function checkOnlyOne(element) {//중복 체크 막기
  const checkboxes = document.getElementsByName("scales");
  checkboxes.forEach((cb) => {
    cb.checked = false;
  })
  element.checked = true;
}

function getLowCheckboxValue(event){//선택한 최저음정 가져오기
  let result = '';
  if(event.checked)  {
    result = event.value;
  }else {
    result = '';
  }
  localStorage.setItem("low_test_result", result);
  const newSavedLowResult = localStorage.getItem("low_test_result");
  lowResult.innerText = newSavedLowResult;
}

function getHighCheckboxValue(event){//선택한 최고음정 가져오기
  let result2 = '';
  if(event.checked)  {
    result2 = event.value;
  }else {
    result2 = '';
  }
  localStorage.setItem("high_test_result", result2);
  const newSavedHighResult = localStorage.getItem("high_test_result");
  highResult.innerText = newSavedHighResult;
}