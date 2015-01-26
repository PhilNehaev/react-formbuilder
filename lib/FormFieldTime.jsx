var React = require("react"),
    moment = require("moment"),
    $ = require("jquery"),
    Checkbox = require("./Checkbox.jsx")

var FormFieldTime = React.createClass({

    displayName: "FormFieldTime",
    
    propTypes: {

        schema: React.PropTypes.shape({

            editable: React.PropTypes.bool,
            disableable: React.PropTypes.string,
            isDisabled: React.PropTypes.bool,
            startDate: React.PropTypes.date,
            endDate: React.PropTypes.date
        }).isRequired
    },

    mixins: [
        require("./mixins/FormFieldWrapper.jsx")
    ],

    componentDidMount() {

        var defaultValue = this.props.schema.defaultValue

        if (this.props.schema.editable !== false) {

            this.inputDOMNode = this.refs.input.getDOMNode()
            this.$input = $(this.inputDOMNode)

            this.$input.datepicker({

                language: "ru",
                autoclose: true,
                todayHighlight: false,
                startDate: this.props.startDate,
                endDate: this.props.endDate
            }).on("changeDate", this.onChange)

            defaultValue && this.$input.datepicker("setDate", new Date(defaultValue))
        }
    },

    componentDidUpdate() {

        if (this.props.schema.editable !== false) {

            this.$input.datepicker("setStartDate", this.props.schema.startDate)
            this.$input.datepicker("setEndDate", this.props.schema.endDate)

            if (this.getInputTime() > this.props.schema.endDate) {

                this.$input.datepicker("setDate", new Date(this.props.schema.endDate))
            }
        }
    },

    render() {

        return this.wrapper(
            this.props.schema.editable === false ?
                this.format(this.props.schema.value)
            :
                <div>
                    <input
                        ref="input"
                        type="text"
                        name={this.props.key}
                        className="form-builder__input form-builder__input_time"
                        onChange={this.onChange}
                        disabled={this.props.schema.isDisabled} />
                    {this.props.schema.disableable &&
                        <Checkbox
                            ref="disableInput"
                            label={this.props.schema.disableable}
                            onChange={this.onDisableChange}
                            isChecked={this.props.schema.isDisabled} />}
                </div>
        )
    },

    format(value) {

        return moment(value).format("D MMM. YYYY")
    },

    getTime() {

        var date = this.$input.datepicker("getDate"),
            getTime = date.getTime

        return getTime && getTime.call(date)
    },

    getInputTime() {

        return moment(this.$input.val(), "DD.MM.YYYY").toDate()
    },

    onChange() {

        this.props.onChange([{ key: this.props.key, value: !this.props.schema.isDisabled && this.getTime() }])
    },

    onDisableChange(event) {

        var checked = event.target.checked

        checked && $(this.inputDOMNode.form).validate().resetForm()
        this.props.onChange([{ key: this.props.key + "Disabled", value: checked }])
    }
})

module.exports = FormFieldTime