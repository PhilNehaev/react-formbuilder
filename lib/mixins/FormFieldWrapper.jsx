var React = require("react")

var FormFieldWrapper = {

    wrapper(...childs) {

        var schema = this.props.schema

        return <div className={"form-builder__field form-builder__field_type_" + this.props.name}>
            <div className="form-builder__label" title={schema.label}>
                {schema.label && schema.label + ":"}
            </div><div className="form-builder__value">
                {childs}
            </div>
        </div>
    }
}

module.exports = FormFieldWrapper