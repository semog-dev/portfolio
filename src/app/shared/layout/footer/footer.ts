import { Component } from '@angular/core';
import { footerText } from '../../data/content';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected readonly footerText = footerText;
}
