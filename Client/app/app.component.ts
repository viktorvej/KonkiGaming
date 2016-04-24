import { Component } from 'angular2/core';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { CarouselComponent } from './carousel/carousel.component';

@Component({
    selector: 'kg-app',
    template: `
    <div>
        <kg-mainmenu></kg-mainmenu>
        <kg-carousel></kg-carousel>
    </div>
    `,
    styleUrls: ['app/app.component.css'],
    directives: [MainmenuComponent, CarouselComponent]
})
export class AppComponent {
    pageTitle: string = "Konki Gaming";
}