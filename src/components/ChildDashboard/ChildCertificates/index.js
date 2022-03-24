import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

import { useMediaQuery } from "react-responsive";
import { ChildCertificateCard } from "./ChildCertificateCard";
import { useState } from "react";
import { modal } from "../../../styles";
import { MOBILE } from "../../../media";

export const ChildCertificates = ({ childData, certificateImg }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const isMobile = useMediaQuery(MOBILE);

  return (
    <Stack sx={{ width: "100%" }}>
      <Typography
        className="headingFont"
        variant="subtitle1"
        gutterBottom
        align="center"
      >
        Certificates:
      </Typography>
      {childData.length === 0 && (
        <Alert severity="info">
          {childData.firstName} {childData.lastName} has no absence requests
          yet, click on the 'request absence' button to submit one.
        </Alert>
      )}
      <Stack
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-around"
        sx={{ width: "100%" }}
      >
        {childData?.certificates?.map((certificate, index) => {
          if (index + 1 === childData.certificates.length) {
            return (
              <ChildCertificateCard
                key={index}
                backgroundImage={certificateImg(certificate.certificateType)}
                studentName={certificate.name}
                message={certificate.message}
              />
            );
          } else {
            return <></>;
          }
        })}
      </Stack>
      <Button onClick={handleOpen}>See all Certificates</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...modal.container,
            width: isMobile ? "60%" : "80%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {childData?.certificates?.map((certificate, index) => {
            return (
              <ChildCertificateCard
                key={index}
                backgroundImage={certificateImg(certificate.certificateType)}
                studentName={certificate.name}
                message={certificate.message}
              />
            );
          })}
        </Box>
      </Modal>
    </Stack>
  );
};