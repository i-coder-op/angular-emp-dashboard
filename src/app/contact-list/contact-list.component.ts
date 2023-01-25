import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {

  //declare a array variable to recieve the data from service
  contacts : Array<{id:string, name:string, description:string, email:string}> = [];

  selectedContact:any;

  //Inject the dataService object using consutructor to call the API
  constructor(private dataService : DataService){

  }

  ngOnInit(){
    this.contacts = this.dataService.getContacts();
  }

  selectContact(contact : {id:string, name:string, description:string, email:string}){
    this.selectedContact = contact;
  }

}
