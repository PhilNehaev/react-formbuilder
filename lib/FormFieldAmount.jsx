var React = require("react"),
    Hint = require("./FormHint.jsx")

var FormFieldAmount = React.createClass({

    displayName: "FormFieldAmount",
    
    mixins: [
        require("./mixins/FormFieldWrapper.jsx"),
        require("./mixins/FormChange")
    ],

    componentDidMount() {

        $(this.refs.value.getDOMNode()).keyfilter("money")
    },

    render() {

        var schema = this.props.schema

        return this.wrapper([
            <input
                ref="value"
                type="text"
                name={this.props.key}
                defaultValue={schema.defaultValue}
                className="form-builder__input form-builder__amount"
                onChange={this.onChange} />,
            schema.afterLabel ? schema.afterLabel : " руб.",
            schema.hint ? Hint({ schema: schema }) : null
        ])
    }
})

module.exports = FormFieldAmount