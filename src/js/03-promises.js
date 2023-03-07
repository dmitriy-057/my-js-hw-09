const refs = {
  form: document.querySelector(".form"),
  delay: document.querySelector("[name='delay']"),
  step: document.querySelector("[name='step']"),
  amount: document.querySelector("[name='amount']")
}

function createPromise(position,delay) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        // Reject
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      };


    }, delay);
  })
}


    



refs.form.addEventListener("submit", onFromSubmit)

function onFromSubmit(e) {
  e.preventDefault();

  const amount = Number(refs.amount.value);
  const delay = Number(refs.delay.value);
  const step =  Number(refs.step.value)
 
  for (let i = 0; i < amount; i +=1) {
    createPromise()
    .then(result => alert('result', result))
    .catch(error => alert('error', error));
    
  }
    delay +=step;
};











