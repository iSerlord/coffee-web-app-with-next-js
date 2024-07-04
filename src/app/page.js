"use client";
import { useEffect, useState } from "react";
import CustomSlider from "./components/CustomSlider";
import { Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";
import image1 from "../../public/images/coffee1.jpg";
import image2 from "../../public/images/cherries-chocolate-cake-food.jpg";
import Loading from "./loading";

// const images = [
//   "https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w",
//   "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
//   "https://fastly.picsum.photos/id/14/2500/1667.jpg?hmac=ssQyTcZRRumHXVbQAVlXTx-MGBxm6NHWD3SryQ48G-o",
// ];

export default function Home() {
  const [showCoffees, setShowCoffees] = useState([]);
  const [loading, setLoading] = useState(true);
  const images = [image1, image2];
  const getCoffee = async () => {
    try {
      const resp = await fetch("https://api.sampleapis.com/coffee/hot");
      const json = await resp.json();
      console.log("[Debug] coffee : ", json);
      randomCoffees(json, 5);
      setLoading(false);
    } catch (err) {
      console.log("[Error] : ", err);
    }
  };

  const randomCoffees = (data, amountCoffees) => {
    const resultArray = [];
    for (let i = 0; i < amountCoffees; i++) {
      if (data.length === 0) {
        throw new Error("Not enough elements in the array to select from");
      }
      const randomIndex = Math.floor(Math.random() * data.length);
      const element = data.splice(randomIndex, 1)[0]; // Remove the element from the source array
      resultArray.push(element); // Add the element to the result array
    }
    console.log("[resultArray] : ", resultArray);
    setShowCoffees(resultArray);
  };

  useEffect(() => {
    getCoffee();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box>
      {loading ? (
        <Loading />
      ) : (
        <>
          <CustomSlider images={images} />
          <Container>
            <Box sx={{ pb: 2 }}>
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  margin: "2rem 0",
                }}
              >
                Home Page
              </Typography>
              <Box>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <MainShow>
                      <Image
                        src={showCoffees[0]?.image}
                        alt={`photo-${0}`}
                        width={2000}
                        height={2000}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </MainShow>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box>
                      <Grid container spacing={2}>
                        {showCoffees.map((coffee, index) => {
                          if (index === 0) return null;
                          return (
                            <Grid item xs={6} md={6} key={index}>
                              <MenuShow>
                                <Image
                                  src={coffee.image}
                                  alt={`photo-${index}`}
                                  width={2000}
                                  height={2000}
                                  style={{ width: "100%", height: "100%" }}
                                />
                              </MenuShow>
                            </Grid>
                          );
                        })}
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </>
      )}
    </Box>
  );
}

const MainShow = styled(Box)({
  width: "100%",
  height: "100%",
});

const MenuShow = styled(Box)({
  width: "100%",
  height: "100%",
});

const Container = styled(Box)({
  padding: "0 6%",
});
