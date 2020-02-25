import React from "react";
import './EmployeesComponent.css'
import Switcher from '../Parts/Switcher'
import EmployeesTable from "./EmployeesTable";


export default function EmployeesComponent(props) {

  return (
    <div className="rootLayoutEmployees">
      <h6 className="layoutHeader">
        Справочник сотрудников и структура предприятия
      </h6>
      <Switcher
        className="layoutSwitcher"
        labelEmployees="Вид по сотрудникам"
        labelDepartments="Вид по подразделениям"
        handleViewModeToggle={props.handleViewModeToggle}
        position={props.viewMode}
      />
      {props.done && <EmployeesTable
        data={props.data}
        pending={props.pending}
        error={props.error}
        done={props.done}
        viewMode={props.viewMode}
      />}
    </div>
  );
}

