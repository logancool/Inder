//const routes = (
//    <ReactRouter.Route name="root" handler={AppBody}>
   //     <ReactRouter.Route name="home" path="/" handler={Home} />
   //     <ReactRouter.Route name="other" path="/other" handler={Other} />
   //     <ReactRouter.Route name="settings" path="/settings" handler={Settings} />
    ///    <ReactRouter.DefaultRoute handler={AppLoading} />
   //     <ReactRouter.NotFoundRoute handler={AppNotFound} />
  //  </ReactRouter.Route>
//);

FlowRouter.route("/", {
    name: "Home",
    action(params) {

    }
});

FlowRouter.route("/root", {
    name: "AppBody",
    action(params) {

    }
});

FlowRouter.route("/other", {
    name: "Other",
    action(params) {

    }
});

FlowRouter.route("/settings", {
    name: "Settings",
    action(params) {

    }
});


FlowRouter.notFound = {
    action: function() {
        ReactLayout.render(<AppNotFound />, {content: <NotFound />});
    }
};


Meteor.startup(function () {
    ReactDOM.render(<AppLoading />, document.getElementById("app"));
});
