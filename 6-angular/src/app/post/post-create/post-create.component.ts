import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { PostService } from "../post.service";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent{

  enteredTitle = "";
  enteredConetent = "";

  requireTilte = ""
  requireContent = ""

  constructor(public postService: PostService) {}

  onAddPost(form: NgForm){

    if(form.invalid){
      this.requireTilte = "Please enter your title.";
      this.requireContent = "Please enter your content.";
      return;
    }

    // send our post data
    this.postService.addPost(form.value.title, form.value.content)

    // reset the data posted
    form.resetForm();
  }
}
