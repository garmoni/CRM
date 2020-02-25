import React from "react";
import './EmployeesLayout.css'

import Grid from "@material-ui/core/Grid";
import TableLayout from "./Parts/EmployeeTableLayout";
import Switcher from "./Parts/Switcher";
import CRMList from "./Parts/DepsList";
import Spinner from "../Parts/Spinner";


import { crmConst } from "../../../Store/Constants";
import UserProfile from "./UserProfile/UserProfile";
//import index from "../../../Store/Reducers";

export default function EmployeesLayout(props) {
  const {
    viewMode,
    handleViewModeToggle,
    handleEmployeeSelect,
    handleDepSelect,
    rows,
    headers,
    deps,
    inputName,
    onRowSelect,
    userSelected,
    userProfileData,
    dataReady,
    dataPending,
    dataError
  } = props;

  //dep's menu
  const depsMenuView = (
    <Grid item lg={2} md={2} sm={12}>
      <CRMList itemsList={deps} onItemSelect={handleDepSelect} />
    </Grid>
  );
    //main table
  const usersTableView = (
    <Grid item sm={12} md={10} lg={10}>
      <TableLayout
        rows={rows}
        headers={headers}
        onRowSelect={handleEmployeeSelect}
      />

    </Grid>
  );

    //profile
  const userProfileView = (
    <Grid item sm={12} md={2} lg={2}>
        <UserProfile  inputName={inputName}  key = {props.userProfileData} userProfileData={props.userProfileData} onRowSelect={handleEmployeeSelect}/>
    </Grid>
  );
    //data pending
  const dataPendingView = (
    <Grid item>
      {'Данные обновляются '}<Spinner />     
    </Grid>
  );
    //data error
  const dataErrorView = (
    <Grid item className="errorMessage">
      {'Ошибка чтения данных'} {props.dataError.errMsg}
    </Grid>

  );

  return (
    <div className="rootLayoutEmployees">
       <div>
          <h4 className="layoutHeader">
            Справочник сотрудников и структура предприятия
          </h4>
          <Switcher
            className="layoutSwitcher"
            // labelLeft="Вид по сотрудникам"
            // labelRight="Вид по подразделениям"
            handleViewModeToggle={handleViewModeToggle}
            position={viewMode}
          />
          <Grid container className="itemEmployees">
            <div>{viewMode === crmConst.EMPLOYEES_BY_DEPS && depsMenuView}
                {dataReady && usersTableView}</div>
            {dataPending && dataPendingView}
            {dataError.err && dataErrorView}
            {props.userDataReady && userProfileView}
          </Grid>
       </div>
    </div>
  )
}

