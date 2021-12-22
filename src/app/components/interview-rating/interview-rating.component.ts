import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'interview-rating',
  templateUrl: './interview-rating.component.html',
  styleUrls: ['./interview-rating.component.css']
})
export class InterviewRatingComponent implements OnInit {
  value = ""
  communication = ""
  development = ""
  oops = ""
  programming = ""
  database = ""
  version = ""
  result = "";
  grade = ""
  data: any;
  courses: any;
  drop=""
  constructor(private backend: BackendService,) { }

  ngOnInit(): void {
    this.drop=this.backend.fw
    this.updateValue();
    this.backend.getRatings().subscribe(
      response => {
        console.log(response)
        this.data = response;

      },
      error => {
        console.log(error)
      }
    )

    this.backend.getCourses().subscribe(
      response => {
        console.log(response)
        this.courses = response;

      },
      error => {
        console.log(error)
      }
    )
  }

 

  setProgramming(rating: any) {
    this.programming = rating;
    console.log(this.programming);
    this.updateRes();
  }
  setOops(rating: any) {
    this.oops = rating;
    console.log(this.oops);
    this.updateRes();
  }
  setDatabase(rating: any) {
    this.database = rating;
    console.log(this.database);
    this.updateRes();
  }
  setVersion(rating: any) {
    this.version = rating;
    console.log(this.version);
    this.updateRes();
  }
  setDevelopment(rating: any) {
    this.development = rating;
    console.log(this.development);
    this.updateRes();
  }
  setCummunication(rating: any) {
    this.communication = rating;
    console.log(this.communication);
    this.updateRes();
  }

  setResult() {
    var result: number = Number(this.communication) + Number(this.development) + Number(this.oops) + Number(this.programming) + Number(this.database) + Number(this.version);
    var r = result / 6;
    this.result = r.toFixed(2);
    if (r >= 0 && r < 1) {
      this.grade = "E"
    }
    if (r >= 1 && r < 2) {
      this.grade = "D"
    }
    if (r >= 2 && r < 3) {
      this.grade = "C"
    }
    if (r >= 3 && r < 4) {
      this.grade = "B"
    }
    if (r >= 4 && r < 5) {
      this.grade = "A"
    }
    if (r == 5) {
      this.grade = "A+"
    }
    this.updateRes();
  }
  updateRes() {
    this.updateValue();
  }

  updateValue() {
    
    this.value = "1. Communiation:" + this.communication + "" + '\n\n' + "2. Basic of Web Development:" + this.development + "" + '\n\n' + "3. OOPS:" + this.oops + "" + '\n\n' + "4. Programming Language/Framework:" + this.programming + "" + '\n\n' + "5. Version Control:" + this.version + "" + '\n\n' + "6. DataBase:" + this.database + "" + '\n\n' + "------------------" + '\n' + "The Result is:" + this.result + "" + '\n' + "Overall Grade:" + this.grade;

  }
}