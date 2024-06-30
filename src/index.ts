import debounce from './debounce';

function results() {
  console.log("Fetching input suggestions");
}

const processChange = debounce(results, 500);

processChange();
setTimeout(() => processChange(), 100);
setTimeout(() => processChange(), 200);
setTimeout(() => processChange(), 800);
