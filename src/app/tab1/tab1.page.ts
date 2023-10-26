import { Component, ElementRef, ViewChild } from '@angular/core';

import recentlyPlayed from '../../assets/mockdata/recentlyPlayed.json'
import heavyRotation from '../../assets/mockdata/heavyRotation.json'
import jumpBackIn from '../../assets/mockdata/jumpBackIn.json'
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  @ViewChild('swiper', { static: false }) swiperElement: ElementRef | undefined;
  swiper: Swiper | undefined

  data = [
    {
      title: 'Recently played',
      albums: recentlyPlayed
    },
    {
      title: 'Heavy rotation',
      albums: heavyRotation
    },
    {
      title: 'Jump back in',
      albums: jumpBackIn
    }
  ]

  swiperParams: SwiperOptions = {
    slidesPerView: 2.4,
    slidesOffsetBefore: 20,
    spaceBetween: 20,
  };

  constructor(
    private router: Router
  ) { }

  ngAfterViewInit() {
    //dosen`t work
    /*     if (this.swiperElement) {
          this.swiper = new Swiper('swiper', this.swiperParams);
        } */
  }

  dasherize(string: any) {
    return string.replace(/[A-Z]/g, (char: any, index: any) => {
      return (index !== 0 ? '-' : '') + char.toLowerCase()
    })
  }

  openAlbum(album: any){
      const titleEscaped = encodeURIComponent(album.title)
      this.router.navigateByUrl(`/tabs/tab1/${titleEscaped}`)
  }
}
