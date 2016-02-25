(function () {
    var app = angular.module('myApp', [])
    app.controller('wordCollection', function () {
        this.words = madLib;
    });
    var madLib = {
        flag: 'FLAG',
        usa: 'USA',
        republic: 'REPUBLIC',
        nation: 'NATION',
        god: 'GOD',
        all: 'ALL',
        create: false
    }
})();
