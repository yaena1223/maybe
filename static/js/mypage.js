const mypageLowResult = document.querySelector("#only_low_result");
const mypageHighResult = document.querySelector("#only_high_result");
mypageLowResult.innerText = localStorage.getItem(`low_test_result_${userName}`);
mypageHighResult.innerText = localStorage.getItem(`high_test_result_${userName}`);