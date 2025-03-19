import { Component } from '@angular/core';
import { TopNavigationComponent } from '../top-navigation/top-navigation.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss'],
  imports: [TopNavigationComponent, RouterOutlet],
})
export class FrameComponent {}
