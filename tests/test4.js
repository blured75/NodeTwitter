function doubleAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x * 2);
      }, 2000);
    });
  }
  
  function addPromise(x){
    return new Promise(resolve => {
      doubleAfter2Seconds(10).then((a) => {
        doubleAfter2Seconds(20).then((b) => {
          doubleAfter2Seconds(30).then((c) => {
            resolve(x + a + b + c);
            })
        })
      })
    });
  }

  function prout(sum) {
      console.log(`sum ${sum}`)
  }

  function addPromise2(x){
    return new Promise(resolve => {
      doubleAfter2Seconds(10).then(doubleAfter2Seconds(10)).then(doubleAfter2Seconds(10)).then(prout);
      
    })
  }


  
  addPromise(10).then((sum) => {
    console.log("addPromise")
    console.log(sum);
  });
  addPromise2(10).then((sum) => {
    console.log("addPromise2")
    console.log(sum);
  });