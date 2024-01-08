import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import Form from "./form/Form";
import {List as ListComponent} from "./List/List";
import { GlobalExpenseContext } from "../../context/Context";
import InfoCard from "./InfoCard";

const Main = () => {
  const classes = useStyles();
  const {balance} = GlobalExpenseContext()
  console.log("Balance",balance)
  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Using Speechly Plugin" />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance ₦{balance}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{
            lineHeight: "1.5em",
            marginTop: "20px",
          }}
        >
          <InfoCard/>
        </Typography>
        <Divider className={classes.divider}/>
        {/*Form*/}
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* <List/> */}
            <ListComponent/>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
