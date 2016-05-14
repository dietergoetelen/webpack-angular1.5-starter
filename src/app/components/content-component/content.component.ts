import { Component } from 'decorators';

@Component({
    template: `
        <x-header></x-header>
        
        <div ui-view></div>
        
        <x-footer></x-footer>
    `
})
export class ContentComponent {
    
}