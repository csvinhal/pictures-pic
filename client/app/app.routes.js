"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by crist on 12/05/2017.
 */
var router_1 = require("@angular/router");
var register_component_1 = require("./register/register.component");
var listing_component_1 = require("./listing/listing.component");
var appRouters = [
    { path: '', component: listing_component_1.ListingComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'register/:id', component: register_component_1.RegisterComponent },
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRouters);
//# sourceMappingURL=app.routes.js.map