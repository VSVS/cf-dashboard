import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import fetch from "node-fetch";

import Layout from "../comps/Layout";
import EmployeeTable from "../comps/Table";
import Employee from "../comps/Employee";
import SideDrawer from "../comps/SideDrawer";

const useStyles = makeStyles((theme) => ({}));

const Main = ({ employees }) => {
  const classes = useStyles();
  const [employee, setEmployee] = React.useState({});
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelectEmployee = (employee) => {
    setEmployee({
      ...employee,
    });
    setOpen(true);
  };

  return (
    <Layout>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <Paper>
            <Grid container>
              <Grid item xs={12}>
                <EmployeeTable
                  employees={employees}
                  onSelect={handleSelectEmployee}
                />
                <SideDrawer
                  title="Employee Profile"
                  open={open}
                  onClose={handleClose}
                >
                  <Employee employee={employee} onCancel={handleClose} />
                </SideDrawer>
              </Grid>
            </Grid>
          </Paper>
        </main>
      </Container>
    </Layout>
  );
};

// export async function getInitialProps() {
//   const res = await fetch("https://cf-dashboard.now.sh/api/employees");
//   const employees = await res.json();

//   return {
//     props: {
//       employees,
//     },
//   };
// }

export default Main;
