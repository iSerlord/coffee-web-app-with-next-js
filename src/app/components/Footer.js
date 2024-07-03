import { Box, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Stack
      direction="row"
      sx={{ padding: "0 6%", width: "100%", backgroundColor: "#e6e7e8", mt: 4 }}
    >
      <Box sx={{ padding: "15px", width: "100%" }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Roboto",
            mb: 1,
          }}
        >
          About Us
        </Typography>
        <Typography variant="body1">Our Story</Typography>
        <Typography variant="body1">Our Coffee</Typography>
        <Typography variant="body1">Our Menu</Typography>
      </Box>
      <Box sx={{ padding: "15px", width: "100%" }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Roboto",
            mb: 1,
          }}
        >
          Contact Us
        </Typography>
        <Typography variant="body1">Contact</Typography>
        <Typography variant="body1">Support</Typography>
        <Typography variant="body1">Destinations</Typography>
      </Box>
      <Box sx={{ padding: "15px", width: "100%" }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Roboto",
            mb: 1,
          }}
        >
          Social Media
        </Typography>
        <Typography variant="body1">Facebook</Typography>
        <Typography variant="body1">Instagram</Typography>
        <Typography variant="body1">Twitter</Typography>
      </Box>
    </Stack>
  );
};

export default Footer;
