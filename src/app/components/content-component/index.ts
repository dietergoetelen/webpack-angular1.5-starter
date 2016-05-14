import * as angular from 'angular';
import * as router from 'angular-ui-router';

// config
import routeConfig from './config/route.config';

// modules
import headerComponent from '../header-component';
import footerComponent from '../footer-component';

// components
import { HomeComponent } from './home-component';

export default angular.module('app.content', [
    <string>router,
    headerComponent.name,
    footerComponent.name
])

.component('dgHome', HomeComponent)

.config(routeConfig)

;