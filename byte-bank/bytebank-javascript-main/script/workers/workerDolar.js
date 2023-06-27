function conectaAPI() {
    fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
      .then(response => response.json())
      .then(conectaTraduzido => postMessage(conectaTraduzido.USDBRL))
      .catch(error => console.error(error));
  }
  
  addEventListener("message", () => {
    conectaAPI();
    setInterval(conectaAPI, 5000);
  });
  
