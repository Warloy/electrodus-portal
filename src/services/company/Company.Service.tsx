import { AxiosResponse } from "axios";
import { TResponseData, http } from "../http" 

class CompanyService {

  private BASE: string;

  constructor() {
    this.BASE = "company"
  };

  public async get(): Promise<AxiosResponse<any>> {
    return await http.get(`${this.BASE}`);
  };

};

export default CompanyService;