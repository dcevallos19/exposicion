// Clase original que queremos adaptar
class WebService {
    request(data: any): void {
      console.log("Enviando solicitud al servicio web externo:", data);
    }
  }
  
  // Interfaz que espera el cliente para enviar solicitudes
  interface WebServiceClient {
    sendRequest(data: any): void;
  }
  
  // Adaptador que convierte la interfaz de WebService a WebServiceClient
  class WebServiceAdapter implements WebServiceClient {
    private webService: WebService;
  
    constructor(webService: WebService) {
      this.webService = webService;
    }
  
    sendRequest(data: any): void {
      console.log("Adaptando y enviando solicitud al nuevo servicio web:");
      this.webService.request(data);
    }
  }
  
  // Cliente que utiliza la interfaz WebServiceClient
  class Client {
    private webServiceClient: WebServiceClient;
  
    constructor(webServiceClient: WebServiceClient) {
      this.webServiceClient = webServiceClient;
    }
  
    makeRequest(data: any): void {
      this.webServiceClient.sendRequest(data);
    }
  }
  
  // Uso del adaptador
  const oldWebService = new WebService();
  const adapter = new WebServiceAdapter(oldWebService);
  const client = new Client(adapter);
  
  client.makeRequest("Datos de la solicitud");
  
  