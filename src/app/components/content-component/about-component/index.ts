import { Component } from 'decorators';

@Component({
    template: `
        <h1>About</h1>
    `
})
export class AboutComponent {
    constructor() {
        console.log('about init');
    }
}