var React = require("react"),
    Hint = require("./FormHint.jsx")

var FormFieldText = React.createClass({

    displayName: "FormFieldText",

    mixins: [
        require("./mixins/FormFieldWrapper.jsx"),
        require("./mixins/FormChange")
    ],

    render() {

        var schema = this.props.schema

        return this.wrapper(
            <input
                type="text"
                name={this.props.name}
                autoFocus={schema.autoFocus}
                defaultValue={schema.defaultValue}
                className="form-builder__input"
                onChange={this.onChange}
            />,
            schema.hint ? Hint({ schema: schema }) : null
        )
    }
})

module.exports = FormFieldText