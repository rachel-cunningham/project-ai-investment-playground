import React from "react";
import { Box, Typography } from "@mui/material";
import AuthHeader from "../components/AuthHeader";
import { useParams } from "react-router-dom";

function AccountPage() {
  const { userId } = useParams();

  return (
    <Box>
      <AuthHeader userId={userId} />
      <Typography>This is the Account Page for user {userId}</Typography>
    </Box>
  );
}

export default AccountPage;
