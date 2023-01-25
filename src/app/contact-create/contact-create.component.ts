import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {
  contact : {id:string, name:string, description:string, email:string} = {
    id : "",
    name: "",
    description: "",
    email: ""
  };


  constructor(private dataService : DataService){

  }

  ngOnInit(){

  }

  createContact(){
    console.log(this.contact);
    this.dataService.createContact(this.contact);
  }
}
