import { Component, HostListener } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <main>
      <a href="/ng-deploy/"><header [class.hidden]="!navbarVisible" class="brand-name">
        <img class="brand-logo" src="assets/logo.svg" 
        alt="logo" aria-hidden="true">
      </header></a>
      
      <section class="content">
        <router-outlet> </router-outlet>
      </section>
    </main>
    `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, RouterModule]
})
export class AppComponent {
  title = 'homes';

  navbarVisible = true;
  private lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if(currentScroll > this.lastScrollTop && currentScroll > 100) {
      this.navbarVisible = false;
    } else {
      this.navbarVisible = true;
    }

    this.lastScrollTop = currentScroll;
  }
}
