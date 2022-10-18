import React, { useState } from "react";
import { OrderCard } from "../../components/OrderCard";
import { OrderStatuses } from "../../enums";
import { Order } from "../../types";
import { Grid } from "@material-ui/core";
import { PageTemplate } from "../../components/PageTemplate";
import { Button } from "../../components/Button";
import { ScanDialog } from "./ScanDialog";

const mockOrders: Order[] = [
  {
    status: OrderStatuses.DELIVERED,
    details: {
      customer: { name: "Vasya Pupkin", address: "Vernadskogo Street, 16" },
    },
    name: "Order 123",
    distance: "2 km",
    id: 1,
  },
];

export const OrdersPage: React.FC = () => {
  const [isScanModalOpen, setIsScanModalOpen] = useState(false);
  const [barcodes, setBarcodes] = useState<string[]>([]);

  const openModal = () => setIsScanModalOpen(true);
  const closeModal = () => setIsScanModalOpen(false);

  const onSuccessfulScan = (result: any) => {
    setBarcodes((barcodes) => [...barcodes, result.text]);
  };

  const onErrorScan = (error: unknown) => {
    console.log(error);
  };

  return (
    <>
      <PageTemplate>
        <Grid container spacing={2}>
          {barcodes.map((code) => (
            <p>{code}</p>
          ))}
          <Grid item xs={12}>
            <Button onClick={openModal} fullWidth variant="outlined">
              Scan or type in barcode
            </Button>
          </Grid>
          <Grid container item spacing={2}>
            {mockOrders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </Grid>
        </Grid>
      </PageTemplate>
      <ScanDialog
        onSuccessfulScan={onSuccessfulScan}
        onErrorScan={onErrorScan}
        open={isScanModalOpen}
        onClose={closeModal}
        fullWidth
      />
    </>
  );
};
