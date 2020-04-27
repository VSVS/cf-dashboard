import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import WorkIcon from "@material-ui/icons/Work";

const useStyles = makeStyles((theme) => ({
  pic: {
    borderRadius: "100%",
    border: `solid 7px ${theme.palette.secondary.main}`,
  },
  title: {
    marginTop: "-10px",
  },
  lightWeight: {
    fontWeight: 100,
  },
  category: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: "20px",
    marginTop: "20px",
  },
  divider: {
    width: "100%",
    backgroundColor: "#4e9a923b",
  },
  list: {
    paddingLeft: "10px",
    paddingBottom: "10px",
    listStyle: "none",
    textAlign: "left",
  },
  mont: {
    fontFamily: "Montserrat",
  },
}));

const MetaData = ({ children }) => {
  return <div style={{ textAlign: "center" }}>{children}</div>;
};

export function EmployeeForm({ employee }) {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <div>
            <img src={employee.headshot.large} className={classes.pic} />
          </div>
          <h1 className={classes.mont}>
            {employee.name.first} {employee.name.last}
          </h1>
          <h4 className={classes.title}>
            {employee.department} <span style={{ margin: "0px 3px" }}>| </span>
            {employee.job_title}
          </h4>
          <h4 className={classes.title + " " + classes.lightWeight}>
            {employee.phone}
          </h4>

          <Divider className={classes.divider} />
        </Box>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={4}>
          <MetaData>
            <h2 className={classes.category + " " + classes.mont}>
              <LocationOnIcon color="primary" /> Address
            </h2>
            <Box
              display="flex"
              flexDirection="column"
              alignContent="center"
              justifyContent="center"
            >
              {`${employee.location.street} ${employee.location.city}`}
              <br />
              {`${employee.location.state} ${employee.location.postcode}`}
            </Box>
          </MetaData>
        </Grid>
        <Grid item xs={12} md={4}>
          <MetaData>
            <h2 className={classes.category + " " + classes.mont}>
              <FormatListBulletedIcon color="primary" /> Skills
            </h2>
            <ul>
              {employee.skills.length > 0 ? (
                employee.skills.map((skill) => (
                  <li className={classes.list} key={skill.id}>
                    - {skill.id}
                  </li>
                ))
              ) : (
                <li>N/A</li>
              )}
            </ul>
          </MetaData>
        </Grid>
        <Grid item xs={12} md={4}>
          <MetaData>
            <h2 className={classes.category + " " + classes.mont}>
              <WorkIcon color="primary" /> Mananger
            </h2>
            <p>{employee.is_manager ? "Yes" : "No"}</p>
          </MetaData>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default EmployeeForm;
