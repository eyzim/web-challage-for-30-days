import { Component } from "@angular/core";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent{

  enteredValue = 'Please input your Ip range';
  newPost = 'nothing yet'

  onAddContent(){
    // alert(this.enteredValue)
    this.newPost = this.enteredValue
  }

}
