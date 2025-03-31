import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');

  form.addEventListener('submit', event => {
    event.preventDefault();

    const delay = Number(form.delay.value);
    const state = form.state.value;

    createPromise(delay, state)
      .then(delay => {
        console.log(`✅ Fulfilled promise in ${delay}ms`);
        iziToast.success({
          title: 'Success',
          message: `✅ Fulfilled promise in ${delay}ms`,
          position: 'topRight',
        });
      })
      .catch(delay => {
        console.log(`❌ Rejected promise in ${delay}ms`);
        iziToast.error({
          title: 'Error',
          message: `❌ Rejected promise in ${delay}ms`,
          position: 'topRight',
        });
      });
  });

  function createPromise(delay, state) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });
  }
});
