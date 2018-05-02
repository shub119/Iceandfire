import { Component, OnInit } from '@angular/core';
import {HttpGotService} from '../http-got.service';
import {ActivatedRoute} from '@angular/router'
import { Location } from '@angular/common';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers:[Location]
})
export class BooksComponent implements OnInit {

  private id;
  public book;

  constructor(private _route:ActivatedRoute,private gotservice:HttpGotService,private location:Location) { }


  public goback() {
    this.location.back();
  }

  public getBookDetails=(id)=>{
    this.gotservice.getBook(id).subscribe(

      response=>{
        this.book=response;
        console.log(this.book);
      },

      error=>{
        console.log("some error occurred");
      }
    );
  }
  
  ngOnInit() {
    
    this._route.params.subscribe(params=>{
      this.id=params['id'];
      this.getBookDetails(this.id);
    })
    //this.getBookDetails(this.id);
  }

}
