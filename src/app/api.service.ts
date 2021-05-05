import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  apiCall() {
    return this.http.get("https://api.quotable.io/random");
  }
}
