import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { formatRating } from '@bg-hoard/util-formatters';

@Component({
  selector: 'lib-feature-game-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './feature-game-detail.component.html',
  styleUrl: './feature-game-detail.component.css',
})
export class FeatureGameDetailComponent {
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  game$ = this.route.paramMap.pipe(
    map((params: ParamMap) => params.get('id')),
    switchMap((id) => this.http.get<any>(`/api/games/${id}`))
  );
  formatRating = formatRating;
}
