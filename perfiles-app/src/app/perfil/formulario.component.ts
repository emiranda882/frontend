import {Perfil} from './perfil';
import {Component, OnInit} from '@angular/core';
import {PerfilService} from './perfil.service';
import {ActivatedRoute, Router} from '@angular/router';
import swal from 'sweetalert2';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  private perfil: Perfil = new Perfil;

  private titulo: string = "Perfil";

  fileToUpload: File = null;


  constructor(private perfilService: PerfilService,
    private router: Router, private activatedRoute: ActivatedRoute) {}


  ngOnInit() {
    this.cargarPerfil();
  }

  cargarPerfil(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.perfilService.getPerfil(id).subscribe((perfil) => this.perfil = perfil);
      }
    });
  }

  public createPerfil(): void {
    var preview = document.querySelector('img').src;
    this.perfil.foto = preview;
    this.perfilService.create(this.perfil).subscribe(perfil => {
      this.router.navigate(['/perfil']);
      swal('Nuevo perfil', `Perfil ${perfil.nombre} creado con �xito!`, 'success');
    });
  }


  update(): void {
    this.perfilService.update(this.perfil)
      .subscribe(perfil => {
        this.router.navigate(['/perfil']);
        swal('Perfil Actualizado', `Perfil ${perfil.nombre} actualizado con �xito!`, 'success');
      }
      );
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);

    var preview = document.querySelector('img');
    var reader = new FileReader;

    reader.onloadend = function() {
      preview.src = reader.result;
    }

    if (this.fileToUpload) {
      reader.readAsDataURL(this.fileToUpload);
    } else {
      preview.src = "";
    }
  }

}
