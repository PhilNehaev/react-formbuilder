/** @jsx React.DOM */

var React = require('react'),
    $ = require('jquery')

module.exports = React.createClass({

    mixins: [
        require('./mixins/FormChange'),
        require('./mixins/FormFieldWrapper.jsx')
    ],

    componentDidMount() {

        this.selectInit()
    },

    shouldComponentUpdate(nextProps) {

        return JSON.stringify(this.props.schema.value) !== JSON.stringify(nextProps.schema.value)
    },

    componentDidUpdate() {

        this.getElem()
            .select2('destroy')

        this.selectInit()
    },

    selectInit() {

        this.getElem()
            .select2({ minimumResultsForSearch: -1 })
    },

    render() {

        var schema = this.props.schema

        return this.wrapper(
            <select name={this.props.key}
                    defaultValue={schema.defaultValue}
                    onChange={this.onChange}
                    ref='value'
                    className={'form-builder__select' + (schema.isSmall && ' form-builder__select_size_small' || '')}>
                {schema.value.map((value) => <option value={value.key}>{value.value}</option>)}
            </select>,
            schema.hint ? Hint({ schema: this.props.schema }) : null
        )
    },

    getElem() {

        this.$select = this.$select || $(this.refs.value.getDOMNode()).on('change', this.onChange)
        return this.$select
    }
})