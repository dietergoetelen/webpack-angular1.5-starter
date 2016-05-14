require('./header.less');

import { Component } from 'decorators';

@Component({
  bindings: {
    prop: '<'
  },
  template: `
    <p>
      <a ui-sref="root.home">Home</a> | <a ui-sref="root.about">About</a>
    </p>

  `
})
export class HeaderComponent {
    
}