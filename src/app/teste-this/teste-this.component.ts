import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-this',
  templateUrl: './teste-this.component.html',
  styleUrls: ['./teste-this.component.css']
})
export class TesteThisComponent implements OnInit {

  // <!-- ################################ BIND: ################################ -->
  title= "teste"
  title2= "teste1"
  btndisable: boolean = true
  btn2:string = "btn2";
  paragrafo: string;
  paragrafo2: string;
  paragrafo3: string;
  field: string;


  myStyles = {
    'background-color': '	#428bca',
    'color': 'white',
    'font-size': '20px',
    'font-weight': 'bold'
    }
    flag:boolean = true;
    button2Version2:string = "btn2v2";


  // <!-- ################################ DIRETIVAS: ################################ -->


  position = {'margin-left':'0px'}

  heroes = ['Homem de Ferro','Homem Aranha','Viúva Negra','Thor']



  heroesMoment = null

  changeBoxPosition(positionTemp){

    this.position = {'margin-left':`${positionTemp}px`}
    // alert(positionTemp);
  }



  click(value){
    console.log(this.title);
    alert(value);
  }

  cor(event) {
    var color =[ "black", "blue", "brown", "green"];
    var indice=0;

    setInterval(function(){
        event.target.style = "background-color: " + color[indice];
        indice++;
        indice %= 4;

      }, 1000);
  }

  changeColorButton2(){

  }

  constructor() {
    this.changeColorButton2();
   }


  exibirId(id){
    console.log(id);
  }

  change(event){
    this.paragrafo = event.target.value;
  }

  submitField(event){
    this.paragrafo2 = event.target.value;
  }

  submitForm(inputFormChange){
    this.paragrafo3 = inputFormChange;
  }

  ngOnInit(): void {
  }

}
