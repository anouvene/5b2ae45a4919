import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  animaux: Object[] = [{}];
  visible: boolean = false;

  labelCompo: string;

  constructor() { }

  ngOnInit() {
    this.labelCompo = 'label';
    this.animaux = [
      { id:'0', nom: "Chien", parler: 'Aboyer', manger: 'Je mange de tout'},
      { id:'1', nom: "Chat", parler: 'Miauler', manger: 'Je mange du Kitekat'},
      { id:'2', nom: "Vache", parler: 'Meugler', manger: 'Je broute de l\'herbe'},
    ]
  }

  displayDetails($event){
    this.visible = !this.visible;
  }

}
