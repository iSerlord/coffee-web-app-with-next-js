"use client";
import React, { useEffect, useState, useRef } from 'react';import {
  Box,
  Stack,
  Typography,
  Button,
  Checkbox,
  Collapse,
  InputBase,
  IconButton,
} from "@mui/material";
import image1 from "../../../public/images/coffee1.jpg";
import image2 from "../../../public/images/cherries-chocolate-cake-food.jpg";
import CustomSlider from "../components/CustomSlider";
import { Container } from "../styles";
import SearchIcon from "@mui/icons-material/Search";

const Page = () => {
  const images = [image1, image2];
  const [isFilter, setIsFilter] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const boxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (boxRef.current) {
        const boxTop = boxRef.current.getBoundingClientRect().top;
        setIsFixed(boxTop <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleClick = () => {
    console.log("Box clicked");
    setIsFilter(!isFilter);
  };
  const handleSearchClick = (event) => {
    console.log("[debug] : handleSearchClick " + searchTerm);
  };
  const handleSearchChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setSearchTerm(value);
  };

  return (
    <Box sx={{ height: 2000 }}>
      {/* <Typography>Coffee Page</Typography> */}
      <CustomSlider images={images} />
      <Container>
        <Box sx={{ pb: 2, pt: 4 }}>
          <Stack
            direction="row"
            sx={{
              justifyContent: "center",
              borderBottom: "1px solid #ededed",
              pb: 3,
            }}
          >
            <Box
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                width: "20%",
                pr: 10,
              }}
            >
              <Box
                sx={{
                  cursor: "pointer",
                }}
                onClick={handleClick}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "normal",
                    borderBottom: "1px solid #000000",
                  }}
                >
                  {isFilter ? "Hide Filters" : "Show Filters"}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                alignItems: "center",
                border: "1px solid #ededed",
                width: "60%",
              }}
            >
              <InputBase
                sx={{ px: 2, flex: 1, width: "90%" }}
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <IconButton
                type="button"
                sx={{ p: "10px", width: "10%", height: "100%" }}
                aria-label="search"
                onClick={handleSearchClick}
              >
                <SearchIcon />
              </IconButton>
            </Box>
          </Stack>
          <Collapse in={isFilter}>
            <Box
              sx={{
                pt: 2,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                gap: 10,
              }}
            >
              <Stack>
                <Typography>Filter 1</Typography>
                <Checkbox></Checkbox>
                <Checkbox></Checkbox>
              </Stack>
              <Stack>
                <Typography>Filter 2</Typography>
                <Checkbox></Checkbox>
                <Checkbox></Checkbox>
              </Stack>
              <Stack>
                <Typography>Filter 3</Typography>
                <Checkbox></Checkbox>
                <Checkbox></Checkbox>
              </Stack>
              <Stack>
                <Typography>Filter 4</Typography>
                <Checkbox></Checkbox>
                <Checkbox></Checkbox>
              </Stack>
            </Box>
          </Collapse>
        </Box>
        <Box
          sx={{
            height: 300,
            backgroundColor: "lightblue",
          }}
        ></Box>
      </Container>
    </Box>
  );
};

export default Page;
