import { Component } from 'decorators';

@Component({
    template: `
        <dg-header></dg-header>
        
        <div ui-view></div>
        
        <dg-footer></dg-footer>
    `
})
export class ContentComponent {
    
}