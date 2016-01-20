let Transition = React.addons.CSSTransitionGroup;

AppBody = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {}
    },

    render() {
        return (
            <div className="ionic-body">
                <div className="view">
                    <div className="scroll-content ionic-scroll">
                        <div className="content overflow-scroll has-header">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
