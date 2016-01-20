MainLayout = React.createClass({
    render() {
        return (
            <div>
                {this.props.header}
                <div className="ionic-body">
                    <div className="view">
                        <div className="scroll-content ionic-scroll">
                            <div className="content overflow-scroll has-header has-footer has-bouncing">
                                {this.props.content}
                            </div>
                        </div>
                    </div>
                </div>
                {this.props.footer}
            </div>
        )
    }
});