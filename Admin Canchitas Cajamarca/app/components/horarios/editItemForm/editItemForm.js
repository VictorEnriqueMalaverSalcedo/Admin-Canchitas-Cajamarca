'use strict';

var helpers = require('../../../utils/widgets/helper'),
    // additional requires
    dataService = require('../../../dataProviders/backendServices'),
    Observable = require('data/observable').Observable,
    viewModel = new Observable({}),
    context;

function goBack() {
    helpers.navigate({
        moduleName: 'components/horarios/itemDetails/itemDetails',
        context: context
    });
}

function onRequestSuccess() {

    context.cancha = viewModel.get('cancha');

    context.Lunes = viewModel.get('lunes');

    context.Martes = viewModel.get('martes');

    context.Miercoles = viewModel.get('miercoles');

    context.Jueves = viewModel.get('jueves');

    context.Viernes = viewModel.get('viernes');

    context.Sabado = viewModel.get('sabado');

    context.Domingo = viewModel.get('domingo');

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
    var data = dataService.data('horarios');

    data.updateSingle({

            cancha: viewModel.get('cancha'),

            Lunes: viewModel.get('lunes'),

            Martes: viewModel.get('martes'),

            Miercoles: viewModel.get('miercoles'),

            Jueves: viewModel.get('jueves'),

            Viernes: viewModel.get('viernes'),

            Sabado: viewModel.get('sabado'),

            Domingo: viewModel.get('domingo'),

            // save properties

            Id: viewModel.get('id')
        })
        .then(onRequestSuccess.bind(this))
        .catch(onRequestFail.bind(this));
};

function onNavigatedTo(args) {
    context = args.object.navigationContext;

    viewModel.set('id', context.Id);

    viewModel.set('cancha', context.cancha);

    viewModel.set('lunes', context.Lunes);

    viewModel.set('martes', context.Martes);

    viewModel.set('miercoles', context.Miercoles);

    viewModel.set('jueves', context.Jueves);

    viewModel.set('viernes', context.Viernes);

    viewModel.set('sabado', context.Sabado);

    viewModel.set('domingo', context.Domingo);

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

// START_CUSTOM_CODE_horariosModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_horariosModel
exports.pageLoaded = pageLoaded;