var React = require("react"),
    Globalize = require("globalize"),
    cldrData = require( "cldr-data" )

Globalize.load(
    cldrData("supplemental/likelySubtags"),
    cldrData("main/ru/numbers")
)

Globalize.locale("ru")

module.exports = React.createClass({

    render() {

        var value = this.props.value || 0,
            splitted = value.toString().split("."),
            precision = this.props.precision || splitted.length >= 2 ? "n2" : "n0"

        return <span>{Globalize.formatNumber(+value)}</span>
    }
})