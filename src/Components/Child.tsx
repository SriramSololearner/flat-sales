import { Box, Button, Stack, Typography } from "@mui/material";
import { landing } from "../pages/Styles";
import { KingBed, LocationOn, Bathtub, CropRotate } from "@mui/icons-material";

interface Iprops {
  details: {
    status: string;
    title: string;
    bedRooms: string;
    bathRooms: string;
    price: string;
    address: string;
    url: string;
  };
}

const Child: React.FC<Iprops> = ({ details }) => {
  return (
    <Stack direction={"row"} gap={4} alignItems={"center"}>
      <Box component={"img"} src={details.url} sx={landing.image} />
      <Stack sx={landing.cardContent}>
        {details.status === "Sold" && (
          <Typography sx={landing.soldStatus}>{details.status}</Typography>
        )}
        {details.status === "Draft" && (
          <Typography sx={landing.draftStatus}>{details.status}</Typography>
        )}
        {details.status === "Active" && (
          <Typography sx={landing.activeStatus}>{details.status}</Typography>
        )}
        <Typography sx={landing.title}>{details.title}</Typography>
        <Stack direction={"row"} gap={1} alignItems={"center"}>
          <LocationOn sx={landing.icon} />
          <Typography sx={landing.cardText}>{details.address}</Typography>{" "}
        </Stack>
        <Stack direction={"row"} alignItems={"center"} gap={1}>
          <Stack direction={"row"} alignItems={"center"} gap={0.5}>
            <KingBed sx={landing.icon} />
            <Typography sx={landing.cardText}>{details.bedRooms}</Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} gap={0.5}>
            <Bathtub sx={landing.icon} />
            <Typography sx={landing.cardText}>{details.bathRooms}</Typography>
          </Stack>
          <CropRotate sx={landing.icon} />
          <Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              sx={landing.cardText}
            >
              <Typography sx={landing.cardText}> 6 &times; 8 </Typography>
              <Typography sx={landing.cardText} component={"sup"}>
                m
              </Typography>
              <Box component={"sub"} sx={landing.cardText}>
                2
              </Box>
            </Stack>
          </Stack>
        </Stack>
        <Button sx={landing.priceTag}> ₹ {details.price}</Button>
      </Stack>
    </Stack>
  );
};

export default Child;
