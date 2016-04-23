import { Component } from 'angular2/core';
import { MainmenuComponent } from './mainmenu/mainmenu.component';

@Component({
    selector: 'kg-app',
    template: `
    <div>
        <kg-mainmenu></kg-mainmenu>
    </div>
    `,
    styleUrls: ['app/app.component.css'],
    directives: [MainmenuComponent]
})
export class AppComponent {
    pageTitle: string = "Konki Gaming";
}