'use strict';

var isInit = true,
    helpers = require('../../../utils/widgets/helper'),
    // additional requires
    dataService = require('../../../dataProviders/backendServices'),
    viewModel = require('./addItemForm-view-model');

function onRequestSuccess() {
    helpers.back();
}

function onRequestFail(err) {
    alert(JSON.stringify(err));
    return err;
}

exports.onCancelTap = function onCancelTap() {
    helpers.back();
};

exports.onSaveTap = function onSaveTap() {
    var data = dataService.data('horarios');
    var horas = {
        "0": viewModel.get('Hora0'),
        "1": viewModel.get('Hora1'),
        "2": viewModel.get('Hora2'),
        "3": viewModel.get('Hora3'),
        "4": viewModel.get('Hora4'),
        "5": viewModel.get('Hora5'),
        "6": viewModel.get('Hora6'),
        "7": viewModel.get('Hora7'),
        "8": viewModel.get('Hora8'),
        "9": viewModel.get('Hora9'),
        "10": viewModel.get('Hora10'),
        "11": viewModel.get('Hora11'),
        "12": viewModel.get('Hora12'),
        "13": viewModel.get('Hora13'),
        "14": viewModel.get('Hora14'),
        "15": viewModel.get('Hora15'),
        "16": viewModel.get('Hora16'),
        "17": viewModel.get('Hora17'),
        "18": viewModel.get('Hora18'),
        "19": viewModel.get('Hora19'),
        "20": viewModel.get('Hora20'),
        "21": viewModel.get('Hora21'),
        "22": viewModel.get('Hora22'),
        "23": viewModel.get('Hora23'),
    };

    data.save({

        cancha: viewModel.get('cancha'),

        Lunes: horas,

        Martes: horas,

        Miercoles: horas,

        Jueves: horas,

        Viernes: horas,

        Sabado: horas,

        Domingo: horas,

        // save properties

    })
        .then(onRequestSuccess.bind(this))
        .catch(onRequestFail.bind(this));
};

// additional functions
function pageLoaded(args) {
    var page = args.object;

    helpers.platformInit(page);

    viewModel.set('cancha', '');

    viewModel.set('Hora0', '');
    viewModel.set('Hora1', '');
    viewModel.set('Hora2', '');
    viewModel.set('Hora3', '');
    viewModel.set('Hora4', '');
    viewModel.set('Hora5', '');
    viewModel.set('Hora6', '');
    viewModel.set('Hora7', '');
    viewModel.set('Hora8', '');
    viewModel.set('Hora9', '');
    viewModel.set('Hora10', '');
    viewModel.set('Hora11', '');
    viewModel.set('Hora12', '');
    viewModel.set('Hora13', '');
    viewModel.set('Hora14', '');
    viewModel.set('Hora15', '');
    viewModel.set('Hora16', '');
    viewModel.set('Hora17', '');
    viewModel.set('Hora18', '');
    viewModel.set('Hora19', '');
    viewModel.set('Hora20', '');
    viewModel.set('Hora21', '');
    viewModel.set('Hora22', '');
    viewModel.set('Hora23', '');

    // init properties

    page.bindingContext = viewModel;

    // additional pageLoaded
}

// START_CUSTOM_CODE_horariosModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_horariosModel
exports.pageLoaded = pageLoaded;