const user = document.querySelector("#user_username");
const userName = user.innerText;
const LOW_TEST_RESULT_KEY = `low_test_result_${userName}`;
const lowResult = document.querySelector("#low_result");
let savedLowResult = localStorage.getItem(LOW_TEST_RESULT_KEY);
if(savedLowResult === null){
  savedLowResult = "?";
}
lowResult.innerText = `최근 테스트 결과: ${savedLowResult}`;

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
  localStorage.setItem(LOW_TEST_RESULT_KEY, result);
  const newSavedLowResult = localStorage.getItem(LOW_TEST_RESULT_KEY);
  if(newSavedLowResult === null){
    newSavedLowResult = "?";
  }
  lowResult.innerText = `최근 테스트 결과: ${newSavedLowResult}`;
}