import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  //template: '<p>Aqui iría un empleado</p>',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
  //styles: ['p{background-color:red;}'],
})
export class EmpleadoComponent implements OnInit {
  nombre = 'Juan';

  apellido = 'Diaz';

  edad = 8;

  empresa = 'Google';

  /*
  cambiaEmpresa(event: Event) {
    this.empresa = (<HTMLInputElement>event.target).value;
  }
  */

  getEdad() {
    return this.edad;
  }

  habilitacionCuadro = false;

  usuRegistrado = false;

  textoDeRegistro = 'No hay nadie registrado';

  getRegistroUsuario() {
    this.usuRegistrado = false;
  }

  setusuarioRegistrado(event: Event) {
    // alert('El usuario se acaba de registrar');

    //this.textoDeRegistro = 'El usuario se acaba de registrar';

    if ((<HTMLInputElement>event.target).value === 'si') {
      this.textoDeRegistro = 'El usuario se acaba de registrar';
    } else {
      this.textoDeRegistro = 'No hay nadie registrado';
    }
  }

  constructor() {}

  llamaEmpresa(value: String) {}

  ngOnInit(): void {}
}
