function autoGetMy(){
    const savedMyMin = localStorage.getItem(`low_test_result_${userName}`);
    const savedMyMax = localStorage.getItem(`high_test_result_${userName}`);
    for (let index = 0; index < myMin.children.length; index++) {
      const element = myMin.children[index];
      if(element.innerText === savedMyMin){
        element.setAttribute("selected", "selected");
        break;
      }
    }
    for (let index = 0; index < myMax.children.length; index++) {
      const element = myMax.children[index];
      if(element.innerText === savedMyMax){
        element.setAttribute("selected", "selected");
        break;
      }
    }
  }
autoGetMy();