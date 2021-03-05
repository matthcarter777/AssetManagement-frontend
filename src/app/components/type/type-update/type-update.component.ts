import { Router, ActivatedRoute } from '@angular/router';
import { TypeService } from './../type.service';
import { Component, OnInit } from '@angular/core';

import { Type } from '../type.model';

@Component({
  selector: 'app-type-update',
  templateUrl: './type-update.component.html',
  styleUrls: ['./type-update.component.css']
})
export class TypeUpdateComponent implements OnInit {
  type: Type | undefined;

  constructor(
    private typeService: TypeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.typeService.show(id as string).subscribe(type => {
      this.type = type
    });
  }

  update(): void {
    this.typeService.update(this.type as Type).subscribe(() => {
      this.typeService.showMessage('Categoria alterada com sucesso!');
      this.router.navigate(['/categories']);
    });
  }

  cancel(): void {
    this.router.navigate(["/categories"]);
  }

}
