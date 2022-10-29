// const checkForOdd = () => {
//   console.log('Line 1');
//   console.log('Line 2');
//   console.log('Line 3');
//   // return { msg: 'Hello World' };
// };

// const checkVal = checkForOdd();

// console.log('Check Value', checkVal);



// async --> used only infront of a function

// async function samFunc() {
//   return { msg: 'Hello World' }
// }

// // async function wraps return value as a promise

// const checkValue = samFunc();

// console.log('Check Value', checkValue);

// retrun type async function ---> promise ()
// but usually we won't retrun anything from async function


// const SampleFunc = async () => {
//   console.log('Line 1');

//   setTimeout(() => {
//     console.log('Line 2');
//   }, 5000);

//   console.log('Line 3');
// }

// SampleFunc();




// const SampleFunc = async () => {

//   try {
//     console.log('Line 1');

//     const response = await new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log('Line 2');
//         resolve({ msg: 'hello world' });
//         // reject({ msg: 'error from sampleFunc' });
//       }, 5000);
//     });

//     console.log('Line 3', response);
//     console.log('Line 4', response);
//     console.log('Line 5', response);
//     console.log('Line 6', response);
//     console.log('Line 7', response);
//     console.log('Line 8', response);
//   } catch (err) {
//     console.log('Error', err)
//   }
// }

// SampleFunc();


const fetchCountries = async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const countries = await response.json();
    console.log('Countries', countries);
  } catch (error) {
    console.log('Errr in getting countries', error)
  }
}

fetchCountries();
