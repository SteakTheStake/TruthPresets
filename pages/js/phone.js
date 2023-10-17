const app = angular.module('app', ['ngAnimate']);

app.controller('ctrl', function($scope) {

    // todo: pass numbers to message page when selected from contacts
    // todo: pass type to message page when selected Public Services
    // todo: adding new phone numbers
    // todo: read and reply to messages

    //** Refactor: mock user data and bind to UI **//
    $scope.users = [
        {
            UserName: 'User',
            Wallet: [{
                Clean: 230,
                Dirty: 230,
                Bank: 230,
            }],
            Contacts: [
                {
                    Name: 'Sal Rosenberg',
                    Number: 1231232
                },
                {
                    Name: 'Wyatt Derp',
                    Number: 1231232
                }
            ],
            Inventory: [{

            }]
        }
    ];

    //** Refactor: this nasty jquery mess **//
    // Toggle For hiding phone
    $scope.hidePhone = function(){
        $('.phone-wrapper').addClass('hide');
        $('.showMainMenu').removeClass('hide');
    }
    // Toggle For showing phone
    $scope.showPhone = function(){
        $('.showMainMenu').addClass('hide');
        $('.phone-wrapper').removeClass('hide');
    }
});