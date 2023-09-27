// CategorySelect.js
import PropTypes from 'prop-types';
import React from 'react';

export default function CategorySelect({ value, onChange }) {
  return (
    <select
      name="category"
      value={value}
      onChange={onChange}
      required
    >
      <option value="">Select Category</option>
      <option value="Food">Food</option>
      <option value="Activity">Activity</option>
      <option value="Office Equipment">Office Equipment</option>
    </select>
  );
}

CategorySelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};