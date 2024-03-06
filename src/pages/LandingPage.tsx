import {
  Grid,
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { landing } from "./Styles";
import { useContext, useState } from "react";
import Child from "../Components/Child";
import { Nav } from "../Components/Nav";
import { detailsContext } from "../context/ContextProvide";

interface Istate {
  status: string;
  type: string;
  countries: string;
  states: string;
}

const LandingPage = () => {
  const [status, setStatus] = useState<Istate["states"]>("Any Type");
  const [type, setType] = useState<Istate["type"]>("Any Type");
  const context = useContext(detailsContext);

  const handleStatusChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
    context && context.filterByStatus(event.target.value);
  };
  const handleTypeChange = (event: SelectChangeEvent) => {
    setType(event.target.value);
    context && context.filteredByType(event.target.value, status);
  };

  return (
    <>
      <Nav />
      <Box sx={landing.root}>
        {context?.toggle && (
          <Box sx={landing.SelectContainer}>
            <FormControl sx={landing.selectInputMb}>
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
            <FormControl sx={landing.selectInputMb}>
              <Select
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
          </Box>
        )}
        <Grid container spacing={2}>
          {context && context.filtered.length === 0
            ? context.flatsData.map((obj) => (
                <Grid item key={obj.id} xs={12} sm={6} md={6} lg={4}>
                  <Child details={obj} />
                </Grid>
              ))
            : context?.filtered.map((obj) => (
                <Grid item key={obj.id} xs={12} sm={6} md={6} lg={4}>
                  <Child details={obj} />
                </Grid>
              ))}
        </Grid>
      </Box>
    </>
  );
};

export default LandingPage;
