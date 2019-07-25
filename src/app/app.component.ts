import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  list = [] ;
  title = 'Todo';
  AddToList(val){
  this.list.push(val);
  }
  Delete(val){
    for(let i=0 ;i<= this.list.length ;i++){
      		if(val == this.list[i]){
      			this.list.splice(i,1)
      		}
      	}
    }
 
}
