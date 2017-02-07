'use strict';

var helpers = require('../../../utils/widgets/helper'),
    // additional requires
    dataService = require('../../../dataProviders/backendServices'),
    Observable = require('data/observable').Observable,
    viewModel = new Observable({}),
    context;

function goBack() {
    helpers.navigate({
        moduleName: 'components/canchas/itemDetails/itemDetails',
        context: context
    });
}

function onRequestSuccess() {

    context.nombre = viewModel.get('nombre');

    context.contacto = viewModel.get('contacto');

    context.direccion = viewModel.get('direccion');

    context.ruc = viewModel.get('ruc');

    context.celular = viewModel.get('celular');

    // refresh edited properties

    goBack();
}

function onRequestFail(err) {
    alert(JSON.stringify(err));
    return err;
}

exports.onCancelTap = function onCancelTap() {
    goBack();
};

exports.onSaveTap = function onSaveTap() {
    var data = dataService.data('canchas');

    data.updateSingle({

            nombre: viewModel.get('nombre'),

            contacto: viewModel.get('contacto'),

            direccion: viewModel.get('direccion'),

            ruc: viewModel.get('ruc'),

            celular: viewModel.get('celular'),

            // save properties

            Id: viewModel.get('id')
        })
        .then(onRequestSuccess.bind(this))
        .catch(onRequestFail.bind(this));
};

function onNavigatedTo(args) {
    context = args.object.navigationContext;

    viewModel.set('id', context.Id);

    viewModel.set('nombre', context.nombre);

    viewModel.set('contacto', context.contacto);

    viewModel.set('direccion', context.direccion);

    viewModel.set('ruc', context.ruc);

    viewModel.set('celular', context.celular);

    // read properties

}
exports.onNavigatedTo = onNavigatedTo;

// additional functions
function pageLoaded(args) {
    var page = args.object;

    helpers.platformInit(page);

    page.bindingContext = viewModel;

    // additional pageLoaded
}

// START_CUSTOM_CODE_canchasModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_canchasModel
exports.pageLoaded = pageLoaded;