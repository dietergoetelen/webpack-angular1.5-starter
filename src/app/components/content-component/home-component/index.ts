import { Component } from 'decorators';

@Component({
    template: `
        <h1>Home</h1>
    `
})
export class HomeComponent {
    constructor() {
        console.log('home init');
    }
}