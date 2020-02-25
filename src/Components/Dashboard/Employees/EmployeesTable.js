import React from "react";
import Spinner from "../Parts/Spinner";
import viewMode from "./EmployeesContainer";


// export default function EmployeesTable(props) {
//

//   return (
//     <div className="tableEmployees">
//       {props.pending?('Данные обновляются '):(props.error.err && props.error.errMsg)}
//         {props.pending&&<Spinner />}
//         <table>
//             <tbody>
//             {props.done&&(props.viewMode?<><tr><th>Название компании</th><th>Имя</th><th>Отчество</th><th>E-mail</th><th>Внутренний тел</th><th>Мобильный тел</th><th>Дата рождения</th></tr>{unitsTable}</> :
//                 <><tr><th>Фамилия</th><th>Имя</th><th>Отчество</th><th>E-mail</th><th>Внутренний тел</th><th>Мобильный тел</th><th>Дата рождения</th></tr>{dataTable}</>)}
//             </tbody>
//         </table>
//
//     </div>
//
//   );
// }
function  createData(...rest){
    return {...rest};
}
const headersByEmployees = createData('Фамилия','Имя','Отчество','e-mail');
const headersByDeps = createData('Подразделение','Фамилия','Имя','Отчество','Должность','e-mail');

let rows;

export default function employeesTable(props) {
    const dataTable = props.data.map(function(data) {
        console.log(props.data);
        return <tr>
            <td>{data.last_name}</td>
            <td>{data.first_name}</td>
            <td>{data.patronym_name}</td>
            <td>{data.email}</td>
            <td>{data.phone_in}</td>
            <td>{data.mob}</td>
            <td>{data.birth_date}</td>
        </tr>

    })

    const unitsTable = props.data.map(function(data) {
        return <tr>
            <td>{data.name}</td>
        </tr>

    })

    // if (props.done)
    //     if (!props.viewMode){
    //         //by users
    //         rows = props.data.map(user=>{
    //                 return  createData(user.last_name,user.first_name,user.patronym_name,user.email);
    //             }
    //         );
    //     }
    //     else
    //     {
    //         //by deps
    //         rows = props.data.map(dep=>{
    //             if (dep.users!=undefined){
    //                 let depname=dep.name;
    //                 console.log(depname);
    //                 return  dep.users.map(user=>createData(depname,user.last_name,user.first_name,user.patronym_name,user.position,user.email));
    //             }
    //         });
    //     }

    return (
        <div className="tableEmployees">
            {props.pending?('Данные обновляются '):(props.error.err && props.error.errMsg)}
            {props.pending&&<Spinner />}
            <table>
               <th>
                  {props.done&&props.viewMode?JSON.stringify(headersByDeps):JSON.stringify(headersByEmployees)}</th>

               {props.done&&(props.viewMode?unitsTable:dataTable)}
            </table>
        </div>
    );
}

