import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //creating a list to render on UI when service call is made
  contacts : Array<{id:string, name:string, description:string, email:string}> = [
    {
      id: "1",
      name: "Shivam Kale",
      description: "Senior Developer",
      email: "kaleshivam019@gmial.com"
    },
    {
      id: "2",
      name: "Surbhi Kale",
      description: "Senior Developer",
      email: "kalesurbhi028@gmial.com"
    },
    {
      id: "1",
      name: "Shubham Kale",
      description: "Senior Developer",
      email: "kaleshubham004@gmial.com"
    }
  ]
  constructor() { }

  //Method to retrive or fetch the list of contacts
  getContacts() : Array<{id:string, name:string, description:string, email:string}> {
    return this.contacts;
  }

  //This method is used to create/add object in contacts list
  createContact(contact : {id:string, name:string, description:string, email:string}) : boolean {
    if(this.contacts.includes(contact)){
      return false;
    }else{
      this.contacts.push(contact);
    }
    return true;
  }
}
