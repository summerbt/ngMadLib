(function () {
    var app = angular.module('myApp', [])
    app.controller('politicsWordCollection', function () {
            this.words = politicsMadLib;
        })
        .controller('lyricsWordCollection', function () {
            this.words = lyricsMadLib;
        });
    var politicsMadLib = {
        flag: '',
        usa: '',
        republic: '',
        nation: '',
        god: '',
        all: '',
        create: false
    }
    var lyricsMadLib = {
        big: '',
        butts: '',
        mix: '',
        alot: '',
        brothers: '',
        girl: '',
        waist: '',
        round: '',
        face: '',
        create: false
    }
})();
