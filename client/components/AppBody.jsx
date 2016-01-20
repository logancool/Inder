let Transition = React.addons.CSSTransitionGroup;

AppBody = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {}
    },
    ionModal(tab) {
        this.setState({
            modal: (
                <IonModal>
                    <div className="h1 title">{tab}</div>
                    <button onClick={ () => this.setState({modal:false}) } className="button button-icon active">
                        <i className="icon ion-ios-close-empty"></i>
                    </button>
                </IonModal>
            )
        })
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
