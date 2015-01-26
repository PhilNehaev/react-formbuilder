var React = require("react")

module.exports = React.createClass({

    render() {

        var value = this.props.value,
            _value = value && value.toString() || '',
            result = ''

        if (_value.length === 16) {

            result = _value.replace(/(\d{4})/g, '$1 ')
        } else if (_value.length === 18) {

            result = _value.replace(/(\d{8})(\d{10})/, '$1 $2')
        }

        return <span>{result}</span>
    }
})