var React = require("react"),
    CardInput = require("./CardInput.jsx")

var FormFieldCard = React.createClass({

    displayName: "FormFieldCard",

    mixins: [
        require("./mixins/FormFieldWrapper.jsx")
    ],

    render() {

        return this.wrapper([<div className="form-builder-card">
            <div className="form-builder-card__number">
                <div className="form-builder-card__label">Номер карты</div>
                <CardInput {...this.props} onChange={this.onChangeCard} />
            </div>
            <div className="form-builder-card__expiry">
                <div className="form-builder-card__label">Срок действия</div>
                <input type="text" ref="month" onChange={this.onExpiryChange} className="form-builder-card__expiry-input input" minLength="2" maxLength="2" autocomplete="off" />
                /
                <input type="text" ref="year" onChange={this.onExpiryChange} className="form-builder-card__expiry-input input" minLength="2" maxLength="2" autocomplete="off" />
            </div>
        </div>])
    },

    onChangeCard(cardNumber) {

        this.props.onChange([{ key: this.props.name, value: cardNumber }])
    },

    onExpiryChange() {

        this.props.onChange([{

            key: "expiryDate",
            value: [this.refs.month.getDOMNode().value, this.refs.year.getDOMNode().value].join("/")
        }])
    }
})

module.exports = FormFieldCard