/**
 *
 * Form
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Input = React.memo((props) => {
  let { name, type, autoFocus,errors, ...rest } = props
  return (
    <div className="form-group">
      <input
        {...rest}
        // value={value}
        autoFocus={autoFocus}
        name={name}
        type={type}
        id={name}
        className="form-control"
      />
      {/* {errors && <div className="alert alert-danger">{errors}</div>} */}
      {errors && <div className="text-danger mt-1">{errors}</div>}
    </div>
  );
})

Input.propTypes = {};


export const DateInput = React.memo(({ onChange, dateValue, handleChangeDate, name, ...rest }) => {
  console.log("value", dateValue);
  return (
    <div className="form-group">
      <div className="react-datepicker-wrapper">
        <DatePicker
          {...rest}
          onChange={(value) => handleChangeDate(value)}
          // selected={value}
          name={name}
          id={name}
         // minDate={new Date()}
         // maxDate={addDays(new Date(), 5)}
          selected={dateValue}
          className="form-control"
          placeholderText="MMMM DD, YYYY H:MM A"
          isClearable={true}
          showWeekNumbers

          dateFormat="yyyy MMMM d H:MM:SS"
          //dateFormat="MMMM d, yyyy"
          //scrollableYearDropdown
          //yearDropdownItemNumber={15}
         
          //showMonthYearPicker

          showMonthDropdown
          showYearDropdown
          dropdownMode="select"

          timeInputLabel="Time:"
          showTimeInput
        />
        {/* {errors && <div className="alert alert-danger">{errors}</div>} */}
      </div>
    </div>
  );
});

DateInput.propTypes = {};



export const Select = React.memo((props, { ...rest }) => {

  let languageList = [{ id: '1', optionName: "DE" }, { id: '2', optionName: "BD" }];
  //let { name, errors, lable, options, defaultValue, ...rest } = props;

  return (
    <div className="form-group">
      {/* <label htmlFor={name}>{lable}</label> */}
      <select //name={name} id={name} {...rest} value={defaultValue}
        className="form-control" >
        <option value="" />
        {languageList.map(item =>
          <option
            key={item.id}
            value={item.optionName}
          >{item.optionName}
          </option>
        )}
      </select>
      {/* {errors && <div className="alert alert-danger">{errors}</div>} */}
    </div>
  );
});
