
config.$inject = ['$stateProvider', '$urlRouterProvider'];
export default function config($stateProvider:ng.ui.IStateProvider, $urlRouterProvider:ng.ui.IUrlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        .state('root', {
            abstract: true,
            template: "<dg-content></dg-content>"
        })
        .state('root.home', {
            url: '/home',
            template: "<dg-home></dg-home>"
        })
        .state('root.about', {
            url: '/about',
            template: '<dg-about></dg-about>'
        })
        ;
}