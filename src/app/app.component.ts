import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyLogbookFrontend';

  personArray:Array<string>=[];
  person : string;
 
  addNames(Firstname:string, Lastname:string){
    this.person = "{"+"FirstName"+":"+Firstname+","+"LastName"+":"+Lastname+"}";
    this.personArray.push(this.person);
}

}
