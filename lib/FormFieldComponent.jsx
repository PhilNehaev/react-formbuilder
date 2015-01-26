var React = require("react"),
    Button = require("./Button.jsx")

var FormFieldComponent = React.createClass({

    displayName: "FormFieldComponent",
    
    mixins: [
        require("./mixins/FormFieldWrapper.jsx")
    ],

    render() {

        return this.wrapper(this.props.schema.component)
    }
})

module.exports = FormFieldComponent