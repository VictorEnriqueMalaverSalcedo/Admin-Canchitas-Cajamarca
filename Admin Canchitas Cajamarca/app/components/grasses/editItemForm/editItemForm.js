'use strict';

var helpers = require('../../../utils/widgets/helper'),
    // additional requires
    dataService = require('../../../dataProviders/backendServices'),
    Observable = require('data/observable').Observable,
    viewModel = new Observable({}),
    context;

function goBack() {
    helpers.navigate({
        moduleName: 'components/grasses/itemDetails/itemDetails',
        context: context
    });
}

function onRequestSuccess() {

    context.dimensiones = viewModel.get('dimensiones');

    context.descripcion = viewModel.get('descripcion');

    context.costodia = viewModel.get('costoDia');

    context.costonoche = viewModel.get('costonoche');

    context.horainicio = viewModel.get('horainicio');

    context.horafin = viewModel.get('horafin');

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
    var data = dataService.data('grasses');

    data.updateSingle({

            dimensiones: viewModel.get('dimensiones'),

            descripcion: viewModel.get('descripcion'),

            costodia: viewModel.get('costoDia'),

            costonoche: viewModel.get('costonoche'),

            horainicio: viewModel.get('horainicio'),

            horafin: viewModel.get('horafin'),

            // save properties

            Id: viewModel.get('id')
        })
        .then(onRequestSuccess.bind(this))
        .catch(onRequestFail.bind(this));
};

function onNavigatedTo(args) {
    context = args.object.navigationContext;

    viewModel.set('id', context.Id);

    viewModel.set('dimensiones', context.dimensiones);

    viewModel.set('descripcion', context.descripcion);

    viewModel.set('costoDia', context.costodia);

    viewModel.set('costonoche', context.costonoche);

    viewModel.set('horainicio', context.horainicio);

    viewModel.set('horafin', context.horafin);

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

// START_CUSTOM_CODE_grassesModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_grassesModel
exports.pageLoaded = pageLoaded;