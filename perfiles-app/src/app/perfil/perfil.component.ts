import { Component, OnInit } from '@angular/core';
import {Perfil} from './perfil';
import swal from 'sweetalert2';
import {PerfilService} from './perfil.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfiles: Perfil[];

  constructor(private perfilService: PerfilService) { }

  ngOnInit() {
    this.perfilService.getPerfiles().subscribe(
      perfiles => this.perfiles = perfiles
    );
  }

  delete(perfil: Perfil): void {
    swal({
      title: 'Esta seguro?',
      text: `¿Seguro que desea eliminar el perfil ${perfil.nombre} ${perfil.apePaterno} ${perfil.apeMaterno}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {

        this.perfilService.delete(perfil.userId).subscribe(
          response => {
            this.perfiles = this.perfiles.filter(cli => cli !== perfil)
            swal(
              'Perfil Eliminado!',
              `Perfil ${perfil.nombre} eliminado con ï¿½xito.`,
              'success'
            )
          }
        )

      }
    });
  }

      detalle(perfil: Perfil): void {
        var newDate = new Date(perfil.fechaNacimiento).toLocaleString();
        swal({
          html: "<img src='"+perfil.foto+"' style='width:150px;'>",
          title: `Nombre: ${perfil.nombre}
          Apellido Paterno: ${perfil.apePaterno}
          Apellido Materno: ${perfil.apeMaterno}
          Fecha Nacimiento: ${newDate}
          Edad: ${perfil.edad}`,
        });
      }

}
