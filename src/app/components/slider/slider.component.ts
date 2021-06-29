import { Component, OnInit, ViewChild } from '@angular/core';
// import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  // @ViewChild('nav') slider: NgImageSliderComponent;

  // https://www.npmjs.com/package/ngx-image-zoom
  // https://stackblitz.com/edit/angular-image-zoom-kngrur?file=src%2Fapp%2Fapp.component.ts


  imagesSlider = {
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    fade: true,
    arrows: true,
    draggable: true,
    // prevArrow: '.client-feedback .prev-arrow',
    // nextArrow: '.client-feedback .next-arrow',
    asNavFor: ".thumbs",
  };
  thumbnailsSlider = {
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: 'linear',
    centerMode: true,
    arrows: true,
    draggable: false,
    focusOnSelect: true,
    asNavFor: ".feedback",
    // prevArrow: '.client-thumbnails .prev-arrow',
    // nextArrow: '.client-thumbnails .next-arrow',
  };

  fileToUpload: File | null = null;

  imageObject = [];

  myThumbnail = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";
  myFullresImage = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";

  message: string = '';
  imagePath: any;
  url: any;
  fileType: any;
  @ViewChild('mymodal')
  mymodal: any;
  isWheeled: boolean;
  constructor() { }

  ngOnInit(): void {
    this.imageObject = [
      {
        image: 'https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270',
        title: 'Image title-1',
        alt: 'Image alt',
        order: 1
      },
      {
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        title: 'Image title-2',
        alt: 'Image alt',
        order: 2
      }, {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShiGNXTuXkJkAaYpvCsx6ZJ8t2EVHTSvAbXXwNOMQs_1BEJvI&s',
        title: 'Image title-4',
        alt: 'Image alt',
        order: 4
      }, {
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        title: 'Image title-3',
        alt: 'Image alt',
        order: 4
      },
      {
        image: 'https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270',
        title: 'Image title-1',
        alt: 'Image alt',
        order: 1
      },
      {
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        title: 'Image title-2',
        alt: 'Image alt',
        order: 2
      }, {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShiGNXTuXkJkAaYpvCsx6ZJ8t2EVHTSvAbXXwNOMQs_1BEJvI&s',
        title: 'Image title-4',
        alt: 'Image alt',
        order: 4
      }, {
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        title: 'Image title-3',
        alt: 'Image alt',
        order: 4
      },
      {
        image: 'https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270',
        title: 'Image title-1',
        alt: 'Image alt',
        order: 1
      },
      {
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        title: 'Image title-2',
        alt: 'Image alt',
        order: 2
      }, {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShiGNXTuXkJkAaYpvCsx6ZJ8t2EVHTSvAbXXwNOMQs_1BEJvI&s',
        title: 'Image title-4',
        alt: 'Image alt',
        order: 4
      }, {
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        title: 'Image title-3',
        alt: 'Image alt',
        order: 4
      }
    ]

  }

  handleFileInput(files: FileList) {
    if (files.length === 0)
      return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    let image: any = document.getElementById('output');
    let preImage: any = document.getElementById('previewImg');
    image.src = URL.createObjectURL(files[0]);
    preImage.src = URL.createObjectURL(files[0]);
    // this.imagePath = files;
    // const reader = new FileReader();
    // reader.addEventListener("load", () => {
    //   this.url = reader.result;
    // });
    // if (files) {
    //   reader.readAsDataURL(files[0]);
    // }
  }

  onClickModal(evt) {
    evt.preventDefault();
    // const modal = document.getElementById("myModal");
    // const btn = document.getElementById("myBtn");
    // const previewMsg = document.getElementsByClassName("previewMsg")[0];
    this.isWheeled = !this.isWheeled;
    // modal.style.display = "block";

    // const checkBox: any = document.getElementById("checkBox");
    // checkBox.checked = false;
  }
  zoominClick() {
    // const checkBox: any = document.getElementById("checkBox");
    // checkBox.checked = !checkBox.checked;
  }

  close() {
    // const modal = document.getElementById("myModal");
    // modal.style.display = "none";
  }
}
