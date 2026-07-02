import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Download, LucideAngularModule } from 'lucide-angular';
import { about } from '../../../shared/data/content';

@Component({
  selector: 'app-about',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly about = about;

  protected readonly DownloadIcon = Download;
}
