var helpers = require('../../../utils/widgets/helper'),

    dialogs = require('ui/dialogs'),

    dataService = require('../../../dataProviders/backendServices');

function navigatedTo(args) {
    var page = args.object;

    page.navigationContext.pageTitle =
        page.navigationContext.cancha;

    // context changes

    page.bindingContext = page.navigationContext;
}

exports.navigatedTo = navigatedTo;

function onEditItemTap(args) {
    var source = args.view || args.object;

    helpers.navigate({
        moduleName: 'components/horarios/editItemForm/editItemForm',
        context: source.bindingContext
    });
}
exports.onEditItemTap = onEditItemTap;