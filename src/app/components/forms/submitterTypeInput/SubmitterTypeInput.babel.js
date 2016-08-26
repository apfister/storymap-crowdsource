import React from 'react'; // eslint-disable-line no-unused-vars
import FormGroup from 'babel/components/forms/base/FormGroup';

export default class SubmitterTypeInput extends FormGroup {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

    this.input = {
      value: this.props.defaultValue
    };

    super.componentDidMount();
  }

  onChange(e) {
    this.input.value = e.target.value;
    super.onChange();
  }

  render() {

    return (
      <input
        id={this.props.id}
        className="form-control submitter-type-input"
        onChange={this.onChange}
        onBlur={this.onBlur}
        {...this.props.inputAttr}>
      </input>
    );

  }
}
