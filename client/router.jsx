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
        ReactDOM.render(<Home />, document.getElementById("app"));
    }
});

FlowRouter.route("/root", {
    name: "AppBody",
    action(params) {
        ReactDOM.render(<AppBody />, document.getElementById("app"));
    }
});

FlowRouter.route("/other", {
    name: "Other",
    action(params) {
        ReactDOM.render(<Other />, document.getElementById("app"));
    }
});

FlowRouter.route("/settings", {
    name: "Settings",
    action(params) {
        ReactDOM.render(<Settings />, document.getElementById("app"));
    }
});


FlowRouter.notFound = {
    action: function() {
        ReactDOM.render(<AppNotFound />, document.getElementById("app"));
    }
};


Meteor.startup(function () {
    ReactDOM.render(<AppBody />, document.getElementById("app"));
});

function renderMainLayoutWith(component) {
    ReactLayout.render(MainLayout, {
        header: <IonHeader />,
        content: component,
        footer: <IonFooter />
    });
}
