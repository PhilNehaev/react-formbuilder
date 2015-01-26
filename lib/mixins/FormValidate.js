/** @jsx React.DOM */

var $ = require('jquery'),
    _ = require('lodash')

module.exports = {

    componentDidMount() {

        this.formDOMNode = this.refs.form.getDOMNode()
        this.$form = $(this.formDOMNode)
        this.validator = this.$form.validate()
    },

    isValid() {

        _.forEach(this.rules, (rule, key) => {

            var el = this.formDOMNode.elements[key]

            if (el) {
                $(el).rules('remove')
                $(el).rules('add', rule)
            }
        })

        this.validator.resetForm()

        return this.$form.valid()
    },

    addValidateRule(key, rule) {

        this.rules = this.rules || {}
        this.rules[key] = rule
    }
}