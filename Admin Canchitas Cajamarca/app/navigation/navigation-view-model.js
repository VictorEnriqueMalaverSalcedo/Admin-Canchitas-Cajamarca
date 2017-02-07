'use strict';
var menuItems,
    observable = require('data/observable'),
    navigationViewModel = new observable.Observable();

menuItems = [{
    "title": "Mis datos",
    "moduleName": "components/canchas/canchas",
    "icon": "\ue0e4"
}, {
    "title": "Grasses",
    "moduleName": "components/grasses/grasses",
    "icon": "\ue204"
}, {
    "title": "Horarios",
    "moduleName": "components/horarios/horarios",
    "icon": "\ue0d2"
}, {
    "title": "Salir",
    "moduleName": "components/login/login",
    "icon": "\ue1ff",
    "context": {
        "logout": true
    }
}];

navigationViewModel.set('menuItems', menuItems);
navigationViewModel.set('backButtonHidden', true);

module.exports = navigationViewModel;