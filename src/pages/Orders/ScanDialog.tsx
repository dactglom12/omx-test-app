import React, { useState } from "react";
import {
  Dialog,
  DialogProps,
  makeStyles,
  DialogContent,
  Box,
  Input,
} from "@material-ui/core";
import BarcodeScannerComponent from "react-qr-barcode-scanner-17";
import { Result } from "@zxing/library";

type Props = {
  onSuccessfulScan: (result: Result) => void;
  onErrorScan: (error: unknown) => void;
} & Omit<DialogProps, "children">;

const useStyles = makeStyles((theme) => ({
  scannerWrapper: {},
  inputWrapper: {
    marginTop: theme.spacing(2),
  },
}));

export const ScanDialog: React.FC<Props> = ({
  onSuccessfulScan,
  onErrorScan,
  ...dialogProps
}) => {
  const { scannerWrapper, inputWrapper } = useStyles();
  const [typedBarcode, setTypedBarcode] = useState("");

  const handleOnUpdate = (error: unknown, result?: Result) => {
    if (error) {
      onErrorScan(error);
      return;
    }

    if (result) {
      onSuccessfulScan(result);
    }
  };

  return (
    <Dialog {...dialogProps}>
      <DialogContent>
        <div className={scannerWrapper}>
          <BarcodeScannerComponent onUpdate={handleOnUpdate} />
        </div>
        <Box className={inputWrapper}>
          <Input
            onChange={(e) => setTypedBarcode(e.target.value)}
            value={typedBarcode}
            placeholder="Enter barcode..."
            fullWidth
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};
