var helpers = require('../../../utils/widgets/helper'),

    dialogs = require('ui/dialogs'),

    dataService = require('../../../dataProviders/backendServices');

function navigatedTo(args) {
    var page = args.object;

    page.navigationContext.pageTitle =
        page.navigationContext.nombre;

    page.navigationContext.foto = helpers.processImage(page.navigationContext.foto, dataService.setup);
    // context changes

    page.bindingContext = page.navigationContext;

    // iterate grasses
    var grasses = "";
    for (var i = 0; i < page.bindingContext.grassExpand.length; i++) {
        grasses += page.bindingContext.grassExpand[i].descripcion + " ";
    }
    page.getViewById("grasses").text = grasses;
    // 
}

exports.navigatedTo = navigatedTo;

function onEditItemTap(args) {
    var source = args.view || args.object;

    helpers.navigate({
        moduleName: 'components/canchas/editItemForm/editItemForm',
        context: source.bindingContext
    });
}
exports.onEditItemTap = onEditItemTap;


function onGoToHorarioItemTap(args) {
    var source = args.view || args.object;

    helpers.navigate({
        moduleName: 'components/horarios/horarios',
        context: source.bindingContext,
        filter: encodeURIComponent(JSON.stringify({
            field: 'cancha',
            value: '11db0e90-ecea-11e6-876c-955c6aa0be14',
            operator: 'eq'
        })),

    });
}
exports.onGoToHorarioItemTap = onGoToHorarioItemTap;