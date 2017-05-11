import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimePicker from 'material-ui/TimePicker';
import { FieldTitle } from 'admin-on-rest';

export const datify = input => {
    if (!input) {
        return null;
    }

    //const date = input instanceof Date ? input : new Date(input);
    //if (isNaN(date)) {
    //    throw new Error(`Invalid date: ${input}`);
    //}

    return input;
};

class TimeInput extends Component {
    onChange = (_, date) => this.props.input.onChange(date);

    render() {
        const { input, label, meta: { touched, error }, options, source, elStyle, resource } = this.props;

        return (<TimePicker
            {...input}
            errorText={touched && error}
            floatingLabelText={<FieldTitle label={label} source={source} resource={resource} />}

            autoOk
            value={datify(input.value)}
            onChange={this.onChange}
            style={elStyle}
            {...options}
        />);
    }
}

TimeInput.propTypes = {
    addField: PropTypes.bool.isRequired,
    elStyle: PropTypes.object,
    input: PropTypes.object,
    label: PropTypes.string,
    meta: PropTypes.object,
    options: PropTypes.object,
    resource: PropTypes.string,
    source: PropTypes.string,
};

TimeInput.defaultProps = {
    addField: true,
    options: {},
};

export default TimeInput;
