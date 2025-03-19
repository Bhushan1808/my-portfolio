import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss'],
  imports: [RouterLink, RouterLinkActive],
})
export class TopNavigationComponent {
  public routes: { name: string; path: string }[] = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Projects', path: 'projects' },
    { name: 'Contact', path: 'contact' },
  ];
}
