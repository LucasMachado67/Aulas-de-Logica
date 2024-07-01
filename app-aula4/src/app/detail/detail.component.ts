import { Component } from '@angular/core';
import { TProduto } from '../interfaces';
import { ActivatedRoute } from '@angular/router';
import { NgFor } from '@angular/common';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [NgFor],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

  
  produto: TProduto = {id: 0, descricao: ''}

  idProduto: string = '';

  constructor(private route: ActivatedRoute, private crudService: CrudService){
    this.produto = this.crudService.getOneProduct(this.route.snapshot.params['id']);
  }
}
