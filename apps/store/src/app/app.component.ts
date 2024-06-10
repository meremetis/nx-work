import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@bg-hoard/ui-shared';
import { formatRating } from '@bg-hoard/util-formatters';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [RouterModule, MatCardModule, CommonModule, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  title = 'Board Game Hoard';
  games = this.http.get<any[]>('/api/games');
  formatRating = formatRating;
}
