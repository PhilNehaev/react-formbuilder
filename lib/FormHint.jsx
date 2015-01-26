var React = require("react")

var FormHint = React.createClass({

    displayName: "FormHint",

    render() {

        return <div className="form-builder__value-hint">{this.props.schema.hint}</div>
    }
})

module.exports = FormHint