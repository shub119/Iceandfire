import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HttpGotService } from '../http-got.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
  providers:[Location]
})
export class CharactersComponent implements OnInit {
  private id;
  public character;
  public goback() {
    this.location.back();
  }
  constructor(private _route:ActivatedRoute,private gotservice:HttpGotService,private location:Location) { }
  private getCharacterDetails=(id)=>{
    this.gotservice.getCharacter(id).subscribe(
      response=>{
        //console.log(response);
        this.character=response;
        console.log(this.character);
      },
      error=>{
        console.log("some error occurred");
      }
      
    );
  }
  ngOnInit() {
    this._route.params.subscribe(params=>{
      this.id=params.id;
      this.getCharacterDetails(this.id);
    });
    //this.getCharacterDetails(this.id);
  }

}
