
config.$inject = ['$stateProvider', '$urlRouterProvider'];
export default function config($stateProvider:ng.ui.IStateProvider, $urlRouterProvider:ng.ui.IUrlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        .state('home', {
            url: "/home",
            template: "<dg-home></dg-home>"
        });
}