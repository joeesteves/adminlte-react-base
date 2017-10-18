// //JS
import './jquery'
import 'components-jqueryui'
import 'bootstrap'
import 'moment'
import 'bootstrap-daterangepicker'
import 'bootstrap-datepicker'
import 'jquery-slimscroll'
import 'admin-lte'
import 'admin-lte/dist/js/demo'
/*on every route change u have to execute window.fixLayout
with redux react router would be something like this
const history = syncHistoryWithStore(browserHistory, store)
history.listen(() => setTimeout(() => window.fixLayout(), 1))
*/
import './fix'


// Resolve conflict in jQuery UI tooltip with Bootstrap tooltip
window.$.widget.bridge('uibutton', window.$.ui.button)


// Charts Libraries
// import 'raphael'
// import 'morris.js'
// import 'jquery-sparkline'
// import '../plugins/admin-lte/jvectormap/jquery-jvectormap-1.2.2.min.js'
// import '../plugins/admin-lte/jvectormap/jquery-jvectormap-world-mill-en.js'
// import 'jquery-knob'
// import 'jvectormap'

// Otras librerias sacadas

// import 'fastclick'