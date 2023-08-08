import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
    message: string = "Welcome To Student Webpage!";
    inputValue: string = '';
    Details="Details";
  
    onInputChange(event: any) {
      this.inputValue = event.target.value;
    
  }

}
