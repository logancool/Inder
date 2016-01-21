let Transition = React.addons.CSSTransitionGroup;

IonFooter = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {}
    },
    render() {
        return (
            <div className="ionic-body">
                <AppBody />
            </div>
        )
    }
});