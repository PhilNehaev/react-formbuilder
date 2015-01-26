/** @jsx React.DOM */

var React = require('react')

module.exports = React.createClass({

    render() {

        return <input type='hidden' value={this.props.schema.value} />
    }
})