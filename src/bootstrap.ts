require('file?name=[name].[ext]!./index.html');

import * as angular from 'angular';
import mainModule from './app/app';

angular.element(document).ready(() => {
    angular.bootstrap(document, [
        mainModule.name
    ]);
});