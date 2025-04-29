import { Component } from '@angular/core';
import { PhotoService } from "../services/photo.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  showPhotos=false;
  constructor(public photoService:PhotoService) {}
    
  
    addPhotoToGallery(){
      this.photoService.addNewToGallery();
      
    }
    mostrarPhotos() {
      this.showPhotos=true
      }
    async ngOnInit() {
      await this.photoService.loadSaved();
    }

}
