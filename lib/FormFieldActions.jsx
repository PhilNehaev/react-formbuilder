var React = require("react"),
    Button = require("./Button.jsx")

var FormFieldActions = React.createClass({

    displayName: "FormFieldActions",

    mixins: [
        require("./mixins/FormFieldWrapper.jsx")
    ],

    render() {

        return this.wrapper(
            this.props.schema.value.map(this.action)
        )
    },

    action(schema) {

        return schema && <Button
            context={this.props.context}
            value={schema.text}
            type={schema.type}
            url={schema.url}
            onClick={schema.onClick}
            className={"form-builder__button" + (schema.style === "link" ? " form-builder__button_cancel" : "")} />
    }
})

module.exports = FormFieldActions