import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [RouterModule, CommonModule]
})
export class HeaderComponent implements AfterViewInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngAfterViewInit() {
    const menuButton = document.getElementById('menu-button');
    const closeButton = document.getElementById('close-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const searchInputField = document.getElementById('search-input-field');
    const searchInputIcon = document.getElementById('search-input-icon');

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

  isActive(path: string): boolean {
    return this.router.isActive(path, {
      paths: 'exact',
      queryParams: 'exact',
      matrixParams: 'exact',
      fragment: 'ignored'
    });
  }

  getImagePath(page: string): string {
    return this.isActive(page) ? `/img/${page}-icon.png` : `/img/${page}-hidden-icon.png`;
  }
}
