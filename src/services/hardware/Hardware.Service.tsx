import { AxiosResponse } from "axios";
import { TResponseData, http } from "../http" 

class HardwareService {

  private BASE: string;

  constructor() {
    this.BASE = "equipment"
  };

  public async get(query?: string): Promise<AxiosResponse<any>> {
    return await http.get(`${this.BASE}?p=0&limit=50&query=${query}`);
  };

};

export default HardwareService;