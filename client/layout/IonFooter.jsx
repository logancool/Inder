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
    render() {
        return (
            <div className="tabs tabs-icon-top">
            {this.props.tabs.map((tab, i) => {
                return (
                    <a className="tab-item" key={tab}>
                        <i className="icon ion-star"></i>
                        {tab}
                    </a>
                )
            })
    }
    </div>
        )
    }
});