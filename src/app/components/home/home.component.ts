import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/service/backend.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  chosenMod: string = "";
  courses: any;
  constructor(private backend:BackendService) { }

  ngOnInit(): void {
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
  modo(se:any){
   this.backend.fw=se;
    
  }
}
