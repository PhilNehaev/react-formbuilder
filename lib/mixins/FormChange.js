module.exports = {

    onChange(event) {

        this.props.onChange([{ key: this.props.name, value: event.target.value }])
    }
}