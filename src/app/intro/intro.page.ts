import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slidesOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    centerSlides: true,
    speed: 400
  };

  slides = [
    {
      imageSrc: "assets/img/logo.png",
      imageAlt: "Platzi Music Logo",
      title: "Escucha tu música",
      subtitle: "EN CUALQUIER LUGAR",
      description: `Los mejores álbumes, las mejores canciones. Escucha y comparte en
        cualquier momento, a todas horas.`,
      icon: "play"
    },
    {
      imageSrc: "assets/img/logo.png",
      imageAlt: "Platzi Music Logo",
      title: "Disfruta de nuestro reproductor",
      subtitle: "DE VIDEOS INCREÍBLES",
      description: `Entra al modo video de nuestro reproductor y obtén acceso a clips,
        documentales y making offs incríbles de tu artista favorito.`,
      icon: "videocam"
    },
    {
      imageSrc: "assets/img/logo.png",
      imageAlt: "Platzi Music Logo",
      title: "Accede al exclusivo",
      subtitle: "MODO DEPORTE",
      description: `Crea una playlist basada en tu actividad física.
        Ten reportes y acceso a lo que necesites, integrado con GPS!`,
      icon: "bicycle"
    }
  ];

  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
  }

  finish() {
    this.storage.set('isIntroShowed', true);
    this.router.navigateByUrl('/home');
  }

}
