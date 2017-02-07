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