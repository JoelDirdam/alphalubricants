import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  ngAfterViewInit() {
    const menuButton = document.getElementById('menu-button');
    const closeButton = document.getElementById('close-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const searchInputField = document.getElementById('search-input-field');
    const searchInputIcon = document.getElementById('search-input-icon');

    // print the variables to the console
    console.log(searchInputField, searchInputIcon);

    menuButton?.addEventListener('click', () => {
      mobileMenu?.classList.remove('hidden');
      searchInputField?.classList.add('hidden-input');
      searchInputIcon?.classList.add('hidden-input');
    });

    closeButton?.addEventListener('click', () => {
      mobileMenu?.classList.add('hidden');
      searchInputField?.classList.remove('hidden-input');
      searchInputIcon?.classList.remove('hidden-input');
    });
  }
}
