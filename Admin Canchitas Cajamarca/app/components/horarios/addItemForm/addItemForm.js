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

    data.save({

            cancha: viewModel.get('cancha'),

            Lunes: viewModel.get('lunes'),

            Martes: viewModel.get('martes'),

            Miercoles: viewModel.get('miercoles'),

            Jueves: viewModel.get('jueves'),

            Viernes: viewModel.get('viernes'),

            Sabado: viewModel.get('sabado'),

            Domingo: viewModel.get('domingo'),

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

    viewModel.set('lunes', '');

    viewModel.set('martes', '');

    viewModel.set('miercoles', '');

    viewModel.set('jueves', '');

    viewModel.set('viernes', '');

    viewModel.set('sabado', '');

    viewModel.set('domingo', '');

    // init properties

    page.bindingContext = viewModel;

    // additional pageLoaded
}

// START_CUSTOM_CODE_horariosModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_horariosModel
exports.pageLoaded = pageLoaded;