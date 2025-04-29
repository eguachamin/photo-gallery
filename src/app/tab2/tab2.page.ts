import { Component } from '@angular/core';
import { PhotoService } from "../services/photo.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  showPhotos=true;
  constructor(public photoService:PhotoService) {}
    tomarFotoCalidadAlta() {
      this.photoService.addNewToGallery(100); // calidad completa
    }
    tomarFotoCalidadMedia() {
      this.photoService.addNewToGallery(50); // calidad 50%
    }
    mostrarPhotos() {
      this.showPhotos=!this.showPhotos;
    }
    async ngOnInit() {
      await this.photoService.loadSaved();
    }

}
