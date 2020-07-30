import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public yearOld = '';
  public name = '';
  public comments;
  public posts = [];
  constructor(
    private common: CommonService,
    private serverHttp: ServerHttpService
    ) {
      // this.yearOld = common.yearOld;
    }

  ngOnInit(): void {
    // this.serverHttp.getProfile().subscribe((data => {
    //   console.log('profile', data);
    //   this.name = data.name;
    //   this.yearOld = data.yearOld
    // }));

    // this.serverHttp.getComments().subscribe((data => {
    //   console.log('comments', data);
    //   this.comments = data;
    // }));

    // this.serverHttp.getPosts().subscribe((data => {
    //   console.log('posts', data);
    //   this.posts = data;
    // }));
  }

  public addPost(){
    const newData = { title: "testing", author: "author testing"};
    this.serverHttp.addPosts(newData).subscribe((data) => {
      console.log('addPost', data);
      this.posts.push(data);
    });
  }

  public tangtuoi() {
    // this.common.yearOld++;
    // this.yearOld = this.common.yearOld;
  }
  public giamtuoi() {
    // this.common.yearOld--;
    // this.yearOld = this.common.yearOld;
  }

}
