import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  constructor(private fb: FormBuilder){ }

  addBookmark: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    url: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
  });

  submitAction() {
    if(this.addBookmark.valid){
      console.warn(this.addBookmark.value);
      localStorage.setItem('form-data', JSON.stringify(this.addBookmark.value));
      this.addBookmark.value
      Swal.fire('Success', 'Success', 'success')
      this.addBookmark.reset();
    }else{
      Swal.fire('Error', 'Please Input Valid Data', 'error')
    }
  }
  getData() {
    //return localStorage.getItem('form-data')
 }



  get title() {
    return this.addBookmark.get('title');
  }
  get url() {
    return this.addBookmark.get('url');
  }

  get category() {
    return this.addBookmark.get('phone_no');
  }
}
