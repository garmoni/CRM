import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import EmployeesLayout from "./EmployeesLayout";
import { actions } from "../../../Store/Actions";
import { crmConst, apiURL } from "../../../Store/Constants";
import {
  getFetchData,
  getFetchError,
  isFetchPending,
  getFetchDone,
  isFetchRequired
} from "../../../Store/Reducers/fetchData.reducer.js";

import { getViewMode } from "../../../Store/Reducers/employees.reducer.js";

const mapStateToProps = state => ({
  data: getFetchData(state),
  fetchPending: isFetchPending(state),
  fetchError: getFetchError(state),
  fetchDone: getFetchDone(state),
  fetchRequired: isFetchRequired(state),
  viewMode: getViewMode(state)
});

function createData(...rest) {
  return [...rest];
}
let tableHeaders, inputName;
let tableRows, tableRowsAll, tableRowsFullAll;
let tableRowsFull;
let departmentsList = [], departmentsListAll = [];
let userProfileData = [];
class EmployeesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      depSelected: 0,
      userSelected: -1,
      userProfileDataReady: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleViewModeToggle = this.handleViewModeToggle.bind(this);
    this.handleEmployeeSelect = this.handleEmployeeSelect.bind(this);
    this.handleDepSelect = this.handleDepSelect.bind(this);
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleEmployeeSelect = (e, index) => {
    userProfileData = [];
    this.setState({ 'userSelected': index });
    if (index == -1) {
      this.setState({ 'userProfileDataReady': false });
      userProfileData = [];
    }
    else {
      userProfileData = tableRowsAll[index];
      this.setState({ 'userProfileDataReady': true });

    }
  };

  handleDepSelect = (e, index) => {
    if (this.state.depSelected===index) return;
    this.setState({ 'depSelected': index });
    this.setState({ 'userProfileDataReady': false });
    tableRows=tableRowsFull[index];
    userProfileData = [];
  };
  handleViewModeToggle = viewModePos => {
    this.props.dispatch(actions.employeesToggleViewMode(viewModePos));
    this.setState({ 'userProfileDataReady': false });
    userProfileData = [];
  
  };

  render() {
    const {
      data,
      fetchPending,
      fetchError,
      fetchDone,
      viewMode,
      onRowSelect,
      fetchRequired,
      userData
    } = this.props;
    if (fetchDone) {
      if (viewMode === crmConst.EMPLOYEES_BY_USERS) {
        //by users
        tableRows = [];
        tableRows = data.map(user => {
          return createData(
            user.last_name,
            user.first_name,
            user.patronym_name,
            user.email,
            user.phone_in,
            user.mob,
            user.mob2,
            user.birth_date === null ? "" : user.birth_date
          );
        });
        tableHeaders = createData(
          "Фамилия",
          "Имя",
          "Отчество",
          "e-mail",
          "внутренний тел",
          "мобильный тел1",
          "мобильный тел2",
          "дата рождения"
        );
        tableRowsAll = data.map(user => {
          return createData(
            user.last_name,
            user.first_name,
            user.patronym_name,
            user.location,
            user.phone_in,
            user.phone_out,
            user.mob,
            user.mob2,
            user.birth_date === null ? "" : user.birth_date,
            user.email,
            user.comment
          );
        });
        //departmentsList = [];
      } else {
        //by deps
        tableRows = [];
        tableRowsFull = [];
        departmentsList = data.map(dep => dep.name);
        data.map((dep, ind) => {
          // tableRows[ind] = []; 
          tableRowsFull[ind] = dep.users.map(user =>
            createData(
              user.last_name,
              user.first_name,
              user.patronym_name,
              user.position,
              user.email
            )
          );
        });

        tableRowsFullAll = [];
        departmentsListAll = data.map(dep => dep.name);
        data.map((dep, ind) => {
          tableRowsFullAll[ind] = dep.users.map(user =>
            createData(
              user.last_name,
              user.first_name,
              user.patronym_name,
              user.location,
              user.phone_in,
              user.phone_out,
              user.mob,
              user.mob2,
              user.birth_date === null ? "" : user.birth_date,
              user.email,
              user.comment,
              user.position
            )
          );
        });
        tableRowsAll = tableRowsFullAll[this.state.depSelected];
        tableRows = tableRowsFull[this.state.depSelected];
        tableHeaders = createData(
          "Фамилия",
          "Имя",
          "Отчество",
          "Должность",
          "e-mail"
        );
      }
    }

    inputName = createData(
      "Фамилия",
      "Имя",
      "Отчество",
      "Размещение",
      "вн. телефон",
      "гор. телефон",
      "моб.1 телефон",
      "моб.2 телефон",
      "дата рожения",
      "e-mail",
      "примечание",
      "должность"
    );

    if (fetchRequired) {
      this.props.dispatch(
        actions.fetchData(
          viewMode === crmConst.EMPLOYEES_BY_DEPS
            ? apiURL.EMPLOYEES_BY_DEPS
            : apiURL.EMPLOYEES_BY_USERS
        )
      );
    }
    return (
      <EmployeesLayout
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleViewModeToggle={this.handleViewModeToggle}
        handleEmployeeSelect={this.handleEmployeeSelect}
        handleDepSelect={this.handleDepSelect}
        rows={tableRows}
        rowsAll={tableRowsAll}
        headers={tableHeaders}
        inputName={inputName}
        deps={departmentsList}
        dataPending={fetchPending || fetchRequired}
        dataError={fetchError}
        dataReady={fetchDone}
        userData={userData}
        userDataReady={this.state.userProfileDataReady}
        userProfileData={userProfileData}
        viewMode={viewMode}
      />
    )
  }
}

export default withRouter(connect(mapStateToProps)(EmployeesContainer));
