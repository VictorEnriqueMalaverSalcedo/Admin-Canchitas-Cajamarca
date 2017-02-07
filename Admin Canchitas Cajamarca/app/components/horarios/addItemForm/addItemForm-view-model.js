'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;
// additional requires

ViewModel = new Observable({

    cancha: '',

    lunes: '',

    martes: '',

    miercoles: '',

    jueves: '',

    viernes: '',

    sabado: '',

    domingo: '',

    // additional properties

});

// START_CUSTOM_CODE_horariosModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_horariosModel
module.exports = ViewModel;