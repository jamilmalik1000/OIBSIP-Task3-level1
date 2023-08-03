function convertTemperature() {
    const inputElement = document.getElementById("input");
    const typeElement = document.getElementById("type");
    const resultElement = document.getElementById("result");
    const inputValue = parseFloat(inputElement.value);
    const selectedType = typeElement.value;
    let convertedValue;

    switch (selectedType) {
      case "Celcius":
        convertedValue = inputValue;
        break;
      case "Fahrenheit":
        convertedValue = (inputValue * 9/5) + 32;
        break;
      case "Kelvin":
        convertedValue = inputValue + 273.15;
        break;
      default:
        convertedValue = inputValue;
    }

    resultElement.value = convertedValue.toFixed(2) + " " + selectedType;
  }