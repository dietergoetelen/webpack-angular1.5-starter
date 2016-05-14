require('./header.less');

import { Component } from 'components';

@Component({
  bindings: {
    prop: '<'
  },
  template: '<div>Hello from home</div>'
})
export class HeaderComponent {
    
}