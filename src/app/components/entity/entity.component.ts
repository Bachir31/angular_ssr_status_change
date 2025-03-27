import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-entity',
  imports: [CommonModule],
  templateUrl: './entity.component.html',
  styleUrl: './entity.component.scss'
})
export class EntityComponent {

  constructor(private route: ActivatedRoute,
    private router: Router
  ) { }

  existingEntities: string[] = ['123456789-entity', '987654321-entity']

  currentEntity: string = '';

  ngOnInit(): void {

    this.route.params.subscribe(routeParams => {
      if (this.existingEntities.includes(routeParams['entity'])) {
        this.currentEntity = routeParams['entity'];
      } else {
        this.currentEntity = '';
        // this.router.navigate(['/404-page-not-found']);
      }
    })
  }

}
