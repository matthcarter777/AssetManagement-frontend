import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TypeService } from './../type.service';
import { Type } from '../type.model';

@Component({
  selector: 'app-type-delete',
  templateUrl: './type-delete.component.html',
  styleUrls: ['./type-delete.component.css']
})
export class TypeDeleteComponent implements OnInit {
  type: Type | undefined;

  constructor(
    private typeService: TypeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.typeService.show(id as string).subscribe(type => {
      this.type = type;
    });
  }

  delete(): void {
    this.typeService.delete(this.type?.id as string).subscribe(() => {
      this.typeService.showMessage('Categoria removida com sucesso!');
      this.router.navigate(['/categories']);
    });
  };

  cancel(): void {
    this.router.navigate(['/categories']);
  };
}
