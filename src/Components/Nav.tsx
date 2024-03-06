import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import { useContext, useState } from "react";
import { landing } from "../pages/Styles";
import { MoreHoriz, Add, MenuOpen } from "@mui/icons-material";
import { detailsContext } from "../context/ContextProvide";

interface Istate {
  status: string;
  type: string;
  countries: string;
  states: string;
}
export const Nav = () => {
  const [status, setStatus] = useState<Istate["states"]>("Any Type");
  const [type, setType] = useState<Istate["type"]>("Any Type");
  const [countries, setCountries] =
    useState<Istate["countries"]>("All Countries");
  const context = useContext(detailsContext);
  const [state, setState] = useState<Istate["states"]>("All States");

  const handleStatusChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
    context && context.filterByStatus(event.target.value);
  };
  const handleTypeChange = (event: SelectChangeEvent) => {
    setType(event.target.value);
    context && context.filteredByType(event.target.value, status);
  };
  const handleCountryChange = (event: SelectChangeEvent) => {
    setCountries(event.target.value);
  };

  const handleStateChange = (event: SelectChangeEvent) => {
    setState(event.target.value);
  };

  const handleToggle = () => {
    context && context.toggleHandler();
    console.log(context?.toggle);
  };
  return (
    <Box sx={landing.nav}>
      <Box sx={landing.navMain}>
        <Box sx={landing.navLogo}>
          Property<Box component={"span"}>List</Box>
        </Box>

        {context?.toggle === false && (
          <FormControl sx={landing.selectInput}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              onChange={handleStatusChange}
            >
              <MenuItem value="Any Type">
                <em>Any Status</em>
              </MenuItem>
              <MenuItem value={"Sold"}>Sold</MenuItem>
              <MenuItem value={"Active"}>Active</MenuItem>
              <MenuItem value={"Draft"}>Drafts</MenuItem>
            </Select>
          </FormControl>
        )}
        <Stack direction={"row"} gap={1} justifyContent={"end"}>
          {context?.toggle ? (
            <MoreHoriz sx={landing.more} onClick={handleToggle} />
          ) : (
            <Add sx={landing.more} onClick={handleToggle} />
          )}
          {/* <MenuOpen sx={landing.more} /> */}
        </Stack>

        <FormControl sx={landing.selectInput}>
          <Select
            sx={landing.typeForm}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            onChange={handleTypeChange}
          >
            <MenuItem value="Any Type">
              <em>Any Type</em>
            </MenuItem>
            "type": "bussiness",
            <MenuItem value={"bussiness"}>Bussiness</MenuItem>
            <MenuItem value={"office"}>Office</MenuItem>
            <MenuItem value={"home"}>Home</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={landing.selectInput}>
          <Select
            sx={landing.countrieForm}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={countries}
            onChange={handleCountryChange}
          >
            <MenuItem value="All Countries">
              <em>All Countries</em>
            </MenuItem>
            <MenuItem value={10}>IN</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={landing.selectInput}>
          <Select
            sx={landing.statesForm}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state}
            onChange={handleStateChange}
          >
            <MenuItem value="All States">
              <em>All States</em>
            </MenuItem>
            <MenuItem value={"Telangana"}>Telangana</MenuItem>
            <MenuItem value={"AndhraPrasesh"}>AndhraPrasesh</MenuItem>
            <MenuItem value={"Karnataka"}>Karnataka</MenuItem>
            <MenuItem value={"TamilNadu"}>TamilNadu</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};
