var React = require("react"),
    $ = require("jquery")

var Form = React.createClass({

    displayName: "Form",

    mixins: [
        require("./mixins/FormValidate")
    ],

    propTypes: {

        onSubmit: React.PropTypes.func,
        onChange: React.PropTypes.func
    },

    Fields: {

        number: require("./FormFieldText.jsx"),
        string: require("./FormFieldText.jsx"),
        actions: require("./FormFieldActions.jsx"),
        component: require("./FormFieldComponent.jsx"),
        select: require("./FormFieldSelect.jsx"),
        hidden: require("./FormFieldHidden.jsx"),
        amount: require("./FormFieldAmount.jsx"),
        time: require("./FormFieldTime.jsx"),
        card: require("./FormFieldCard.jsx")
    },

    componentWillMount() {

        this.values = {}
    },

    getFields() {

        var schemaProps = this.props.schema.properties,
            CurField,
            curSchema,
            fields = []

        for (var key in schemaProps) {

            curSchema = schemaProps[key]
            CurField = this.Fields[curSchema.type]
            if (!CurField) throw new Error(curSchema.type + " not impemented")

            curSchema.defaultValue && !this.values[key] && (this.values[key] = curSchema.defaultValue)

            this.addValidateRule(key, {

                required: curSchema.required,
                pattern: curSchema.pattern,
                min: curSchema.min,
                max: curSchema.max,
                dateGr: curSchema.dateGr
            })

            fields.push(CurField({ key: key, ref: key, name: key, schema: schemaProps[key], onChange: this.onFieldChange, context: this.props.context }))
        }

        return fields
    },

    render() {

        return <form ref="form" className="form" {...this.props} onSubmit={this.onSubmit}>{this.getFields()}</form>
    },

    onSubmit(event) {

        event.preventDefault()
        var onSubmit = this.props.onSubmit

        this.isValid() && onSubmit && onSubmit(this.values)
    },

    onFieldChange(value) {

        var onChange = this.props.onChange

        value.forEach((value) => this.values[value.key] = value.value)
        onChange && onChange(this.values)
    }
})

module.exports = Form