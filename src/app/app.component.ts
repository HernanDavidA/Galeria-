import { Component, ElementRef, ViewChildren, Renderer2, QueryList } from '@angular/core';
interface Gallery {
  url : string;
  title : string;
  description : string;
  status : boolean;
  category : string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  public title = 'Gallery';

  public isHovered: number | null = null;
  
  public images: Gallery[] = [
    {
      url : "../assets/gallery/coche.jpg",
      title : "Coche",
      description : "Lamborghini Urus",
      status : false,
      category : "Coche"
    },
    {
      url : "../assets/gallery/coche2.webp",
      title : "Coche",
      description : "Toyota 4Runner",
      status : false,
      category : "Coche"
    }
    ,
    {
      url : "../assets/gallery/coche3.jpg",
      title : "Coche",
      description : "Mercedes AMG C63",
      status : false,
      category : "Coche"
    }
    ,{
      url : "../assets/gallery/comida.jpeg",
      title : "Comida",
      description : "Hamburguesa con salsa y papas",
      status : false,
      category : "Comida"
    },
    {
      url : "../assets/gallery/comida2.webp",
      title : "Comida",
      description : "Empanadas con ají",
      status : false,
      category : "Comida"
    }
    ,
    {
      url : "../assets/gallery/comida3.jpg",
      title : "Comida",
      description : "Picada colombiana",
      status : false,
      category : "Comida"
    },
    {
      url : "../assets/gallery/gato.webp",
      title : "Mascota",
      description : "Gato gris",
      status : false,
      category : "Mascota"
    },
    {
      url : "../assets/gallery/mascota2.jpg",
      title : "Mascota",
      description : "Golden Retriever",
      status : false,
      category : "Mascota"
    },
    {
      url : "../assets/gallery/mascota3.jpg",
      title : "Mascota",
      description : "Gato negro",
      status : false,
      category : "Mascota"
    }
  ];
  public uniqueCategories: string[] = [];
  public originalImages= [...this.images];
  

  
  public imgFavoritas: Gallery[] = [];
  @ViewChildren('targetElement') targetElement!: QueryList<ElementRef>;
 
  
  constructor() {
    this.getUniqueCategories();
  }
  public onHover(index: number): void {
    this.isHovered = index;
  }

  // Método para resetear el hover
  public onLeave(): void {
    this.isHovered = null;
  }
  public eliminarFavorito(index: number) : Gallery[]{

  const currentImage = this.images[index];

  this.imgFavoritas = this.imgFavoritas.filter(img => img !== currentImage);

    return this.imgFavoritas;
  }
  public favoritos(index: number): Gallery []{

    this.images[index].status = !this.images[index].status;

    if(this.images[index].status){
      let currentImage = this.images[index];
      if(this.images[index].status && !this.imgFavoritas.includes(currentImage)){
        this.imgFavoritas.push(this.images[index]);
      }
    }else{
        this.eliminarFavorito(index);
      }
    return this.imgFavoritas;
  }
  public filtrar(category: string): void{

    this.images = [...this.originalImages];
    console.log(category);
      switch(category){
        case "Coche":
        case "Comida":
        case "Mascota":
          this.images = this.images.filter(img => img.category === category);
          break;
        default:
          console.log(category + " no existe");
      }
      console.log(this.images);
  }
  getUniqueCategories(): void {
    const categories = this.images.map(image => image.category); // Extraer categorías
    this.uniqueCategories = Array.from(new Set(categories)); // Filtrar duplicados con Set
  }
  
  };

    
    

