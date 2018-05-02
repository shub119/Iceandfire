import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpGotService } from '../http-got.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allData = [];

  constructor(private gotservice: HttpGotService) { }



  public loadChardata = () => {
    this.gotservice.getCharacterData().subscribe(
      response => {
        //console.log(response);
        this.allData = this.allData.concat(response);
      }
    );
  }

  public loadBookdata = () => {
    this.gotservice.getBookData().subscribe(
      response => {
        //console.log(response);
        this.allData = this.allData.concat(response);

        console.log(this.allData);
      }
    );
  }
  public loadHousedata = () => {
    this.gotservice.getHouseData().subscribe(
      response => {
        //console.log(response);
        this.allData = this.allData.concat(response);

      }
    );
  }


  ngOnInit() {
    this.loadChardata();
    this.loadHousedata();
    this.loadBookdata();
    setTimeout(() => {
      console.log(this.allData);
    }, 1000);
  }

}