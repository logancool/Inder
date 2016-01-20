IonHeader = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {}
    },
    render() {
        return (
            <div className="bar bar-header bar-dark">
                <a href="/settings" className="button button-icon icon ion-gear-a"/>
                <a href="/" className="h1 title">App Name</a>
                <a href="/other" className="button button-icon icon ion-heart"/>
            </div>
        )
    }
});