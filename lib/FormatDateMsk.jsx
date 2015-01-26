var React = require("react"),
    moment = require("moment")

module.exports = React.createClass({

    render() {

        return <span>
            {moment(this.props.date).add('m', moment().zone() + 240).format(this.props.format)}
        </span>
    }
})