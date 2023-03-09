const refs = {
  form: document.querySelector(".form"),
  delay: document.querySelector("[name='delay']"),
  step: document.querySelector("[name='step']"),
  amount: document.querySelector("[name='amount']")
}


function createPromise(position,delay) {
  
   return new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log('Promise pending');

      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        // Fulfill
       resolve({i:position,delay});
      } else {
        // Reject
        reject({i:position,delay});
      };

    }, delay);
  } )
};


    



refs.form.addEventListener("submit", onFormSubmit)

function onFormSubmit(e) {
  e.preventDefault();
  let amount = Number(refs.amount.value);
  let delay = Number(refs.delay.value);
  let step = Number(refs.step.value);

 
  for (let i= 0; i < amount; i ++ ) {

    createPromise(i+1, delay + i * step)
      .then(({ i, delay }) => {
      alert(`✅ Fulfilled promise ${i} in ${delay}ms`);
    })
    .catch(({ i, delay }) => {
      alert(`❌ Rejected promise ${i} in ${delay}ms`);
    });
  }
 
};










