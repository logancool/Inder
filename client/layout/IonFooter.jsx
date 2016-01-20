let Transition = React.addons.CSSTransitionGroup;

IonFooter = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {}
    },
    getDefaultProps() {
        return {
            tabs: ["Tab 1", "Tab 2", "Tab 3"]
        }
    },
    getInitialState() {
        return {
            modal: false
        }
    },
    getAppShell() {
        <Home />
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
            <div className="tabs tabs-icon-top">
                {this.state.modal ? <Backdrop /> : false}
                <Transition transitionName="modal" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                    {this.state.modal}
                </Transition>
                {this.props.tabs.map((tab, i) => {
                    return (
                        <a className="tab-item" key={tab} onClick={this.ionModal.bind(null, tab)}>
                            <i className="icon ion-star"></i>
                            {tab}
                        </a>
                    )
                })}
            </div>
        )
    }
});