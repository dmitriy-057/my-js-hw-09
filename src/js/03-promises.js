const refs = {
  form: document.querySelector(".form"),
  delay: document.querySelector("[name='delay']"),
  step: document.querySelector("[name='step']"),
  amount: document.querySelector("[name='amount']")
}


function createPromise(position,delay) {
  return new Promise((resolve, reject) => {
    console.log('Promise pending');

    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        // Fulfill
        resolve({position,delay});
      } else {
        // Reject
        reject({position,delay});
      };

    }, delay);
  })
};


    



refs.form.addEventListener("submit", onFormSubmit)

function onFormSubmit(e) {
  e.preventDefault();
  let amount = Number(refs.amount.value);
  let delay = Number(refs.delay.value);
  let step = Number(refs.step.value);

  for (let i = 0; i < amount; i+=1) {
    let position = amount[i];
    createPromise(position,delay)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  }
 
};


// function delay(ms) {
//   // ваш код
// return new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve()
//   }, ms);
// })
// }

// delay(3000).then(() => alert('выполнилось через 3 секунды'));







