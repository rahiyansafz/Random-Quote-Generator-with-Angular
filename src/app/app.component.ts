import { Component, OnInit, VERSION } from "@angular/core";
import { ApiService } from "./api.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  content: string = "";
  author: string = "";

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.getApi();
  }

  getApi() {
    this.api.apiCall().subscribe(data => {
      console.log(data);
      this.content = data["content"];
      this.author = data["author"];
    });
  }
}
