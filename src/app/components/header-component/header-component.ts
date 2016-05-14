require('./header.less');

import { Component } from 'decorators';

@Component({
  bindings: {
    prop: '<'
  },
  template: '<div>Hello from home</div>'
})
export class HeaderComponent {
    
}