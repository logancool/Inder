IonHeader = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {}
    },
    render() {
        return (
            <div className="bar bar-header bar-light">
                <a div className="button button-icon icon ion-gear-a"/>
                <a className="h1 title" label="App Name"/>
                <a className="button button-icon icon ion-heart" label="Other"/>
            </div>
        )
    }
});