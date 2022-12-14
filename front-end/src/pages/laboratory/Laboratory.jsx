import { Button, Grid, List, ListItem, ListItemText, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React from "react";
import LabRevenue from "../../components/charts/LabRevenue";
import Table from "../../components/table/Table";

export const Laboratory = ({patients, lab}) => {
  // date picker
  const newDate = new Date();
  const [to, setTo] = React.useState(dayjs(newDate.toString()));
  const [from, setFrom] = React.useState(dayjs(newDate.toString()));

  const handleFilter = (e) => {
    e.preventDefault();
    console.log(to.$d.toString());
    console.log(from.$d.toString());
  };
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <h2>Laboratory</h2>
      {/* datepicker */}
      <Grid
        container
        spacing={3}
        sx={{
          mt: 4,
          mb: 4,
          mr: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="from" style={{ flex: 2 }}>
          <label
            htmlFor="from"
            style={{
              paddingRight: "5px",
              marginRight: "5px",
              marginBottom: "10px",
            }}
          >
            From:
          </label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              openTo="year"
              views={["year", "month", "day"]}
              label="Year, month and date"
              value={from}
              onChange={(newValue) => setFrom(newValue)}
              renderInput={(params) => (
                <TextField {...params} helperText={null} />
              )}
            />
          </LocalizationProvider>
        </div>
        <div className="to" style={{ paddingLeft: "10px", flex: 2 }}>
          <label htmlFor="to" style={{ paddingRight: "5px" }}>
            To:
          </label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              openTo="year"
              views={["year", "month", "day"]}
              label="Year, month and date"
              value={to}
              onChange={(newValue) => setTo(newValue)}
              renderInput={(params) => (
                <TextField {...params} helperText={null} />
              )}
            />
          </LocalizationProvider>
        </div>
        <Button
          // type="submit"
          sx={{
            width: "100%",
            ml: 4,
            mr: 4,
            flex: 1,
            color: "white",
            backgroundColor: "lightblue",
          }}
          onClick={handleFilter}
        >
          Filter
        </Button>
      </Grid>
      <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
              component="nav"
              aria-label="mailbox folders"
            >
              {/* <ListItem button>
                <ListItemText primary="Registration" secondary={`KES ${reg}`} />
              </ListItem>
              <Divider />             */}
            
              <ListItem button>
                <ListItemText
                  primary="TOTAL REVENUE"
                  secondary={`KES ${lab}`}
                />
              </ListItem>
            </List>

      <Grid
        container
        spacing={3}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <LabRevenue />
        {/* report */}
      </Grid>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Table patients={patients} />
        {/* report */}

      </Grid>
    </Container>
  );
};
