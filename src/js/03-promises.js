const refs = {
  form: document.querySelector(".form"),
  delay: document.querySelector("[name='delay']"),
  step: document.querySelector("[name='step']"),
  amount: document.querySelector("[name='amount']")

}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {

    const shouldResolve = Math.random() > 0.3;
    setInterval(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        // Reject
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  })


}


refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const step = Number(refs.step.value);
  console.log('step', step);
  const delay = Number(refs.delay.value);
  console.log('delay', delay);
  const amount = Number(refs.amount.value);
  console.log('amount', amount);

  for (let position = 0; position < amount; position +=1) {
    createPromise(position, delay)
    .then(position => alert('position', position))
    .catch(error => alert('error', error));
  
  }

}








