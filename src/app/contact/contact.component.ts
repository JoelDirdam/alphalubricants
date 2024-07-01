import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactSecComponent } from './contact-sec/contact-sec.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ CommonModule, ContactSecComponent ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
