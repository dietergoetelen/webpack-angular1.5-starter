import { Component } from 'components';

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