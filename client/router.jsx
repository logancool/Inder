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
        renderMainLayoutWith(<Home />);
    }
});

FlowRouter.route("/root", {
    name: "AppBody",
    action(params) {
        renderMainLayoutWith(<AppBody />);
    }
});

FlowRouter.route("/other", {
    name: "Other",
    action(params) {
        renderMainLayoutWith(<Other />);
    }
});

FlowRouter.route("/settings", {
    name: "Settings",
    action(params) {
        renderMainLayoutWith(<Settings />);
    }
});


FlowRouter.notFound = {
    action: function() {
        renderMainLayoutWith(<AppNotFound />);
    }
};


Meteor.startup(function () {
   renderMainLayoutWith(<Home />);
});

function renderMainLayoutWith(component) {
    ReactLayout.render(MainLayout, {
        header: <IonHeader />,
        content: component,
        footer: <IonFooter />
    });
}
