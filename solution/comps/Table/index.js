import React from "react";
import MaterialTable from "material-table";
import UserIcon from "@material-ui/icons/AccountCircle";
import { Avatar } from "@material-ui/core";

export default function EmployeeTable({ employees, onSelect }) {
  const [state, setState] = React.useState({
    columns: [
      {
        field: "avatar",
        title: "Avatar",
        sorting: false,
        render: (rowData) => {
          return (
            <Avatar
              src={rowData.headshot.thumbnail}
              alt={`Employee ${rowData.name.first} ${rowData.name.last}`}
            />
          );
        },
      },
      {
        field: "name.first",
        title: "First Name",
      },
      {
        field: "name.last",
        title: "Last Name",
      },
      {
        field: "job_title",
        title: "Job Title",
      },
      {
        field: "phone",
        title: "Phone",
      },
      {
        field: "department",
        title: "Department",
      },
    ],
    data: employees,
  });

  return (
    <MaterialTable
      title="Employees"
      columns={state.columns}
      data={state.data}
      actions={[
        {
          icon: () => <UserIcon />,
          tooltip: "Open Employee",
          onClick: (e, row) => {
            e.preventDefault();
            onSelect(row);
          },
        },
      ]}
      options={{
        sorting: true,
        draggable: false,
        actionsColumnIndex: -1,
        headerStyle: {
          backgroundColor: "#4E9A92",
          color: "#FFF",
        },
        searchFieldStyle: {
          border: "solid 2px #ccc",
          padding: "5px",
          borderRadius: "5px",
        },
        search: true,
      }}
    />
  );
}
