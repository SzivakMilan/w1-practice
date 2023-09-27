function myCarPrice(price, buy) {
    let result;
    if (buy < price) {
      result = "Bad deal";
    } else {
      result = "Good deal";
    }
    return result;
  }
  
  console.log(myCarPrice(6000, 5000));