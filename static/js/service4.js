const highResult = document.querySelector("#high_result");
const savedHighResult = localStorage.getItem(HIGH_TEST_RESULT_KEY);
highResult.innerText = `최근 테스트 결과: ${savedHighResult}`;


function getHighCheckboxValue(event){//선택한 최고음정 가져오기
  let result2 = '';
  if(event.checked)  {
    result2 = event.value;
  }else {
    result2 = '';
  }
  localStorage.setItem(HIGH_TEST_RESULT_KEY, result2);
  const newSavedHighResult = localStorage.getItem(HIGH_TEST_RESULT_KEY);
  console.log(newSavedHighResult);
  console.log(highResult);
  highResult.innerText = `최근 테스트 결과: ${newSavedHighResult}`;
}