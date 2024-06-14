function filterNegatives(data) {
    return data.filter(number => number >= 0);
  }

  function multiplyByTwo(data) {
    return data.map(number => number * 2);
  }

  function formatAsString(data) {
    return data.map(number => `Número: ${number}`);
  }


  function executePipeline(data, filters) {
    return filters.reduce((result, filter) => filter(result), data);
  }


  function processData() {

    const inputData = [1, -2, 3, -4, 5];

    const pipeline = [
      filterNegatives,
      multiplyByTwo,
      formatAsString
    ];


    const outputData = executePipeline(inputData, pipeline);


    document.getElementById('output').textContent = JSON.stringify(outputData, null, 2);
  }