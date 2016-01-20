IonHeader = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {}
    },
    render() {
        return (
            <div className="bar bar-header bar-dark">
                <a className="button button-icon icon ion-gear-a"/>
                <a className="h1 title">App Name</a>
                <a className="button button-icon icon ion-heart"/>
            </div>
        )
    }
});