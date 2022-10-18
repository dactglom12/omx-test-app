import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  makeStyles,
  Divider,
  Box,
} from "@material-ui/core";
import { Order } from "../../types";
import { OrderStatuses } from "../../enums";

export type Props = {
  order: Order;
};

const useStyles = makeStyles((theme) => ({
  card: {},
  titleWrapper: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
  },
  cardContent: {
    boxSizing: "border-box",
    position: "relative",
  },
  statusBadge: {
    border: "1px solid",
  },
}));

export const OrderCard: React.FC<Props> = ({ order }) => {
  const { card, titleWrapper, cardContent } = useStyles();

  const mapStatusToString = (status: OrderStatuses) =>
    status
      .split("_")
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

  return (
    <Grid item xs={12} md={6} lg={3}>
      <Card variant="outlined" className={card}>
        <Box>
          <Box className={titleWrapper}>
            <Typography variant="button">{order.name}</Typography>
          </Box>
          <Divider variant="fullWidth" />
        </Box>
        <CardContent className={cardContent}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography>{order.details.customer.name}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>{order.distance}</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>{order.details.customer.address}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>{mapStatusToString(order.status)}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};
