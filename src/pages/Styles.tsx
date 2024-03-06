export const landing = {
  nav: {
    background: { xs: "white", md: "#163762" },
    width: "100%",
    height: { xs: "10vh", md: "9vh", lg: "10vh" },
    position: "fixed",
    zIndex: "1",
    top: 0,
    display: "flex",
    alignItems: "center",
    gap: 1,
  },
  navLogo: {
    color: { xs: "#163762", md: "white" },
    fontWeight: "bold",
    ml: "20px",
  },
  navMain: {
    display: "flex",
    alignItems: "center",
    gap: { xs: 2, md: 4 },
  },
  more: {
    display: { xs: "block", sm: "none" },
    backgroundColor: { xs: "#163762", md: "white" },
    borderRadius: "5px",
    px: { xs: "10px", md: "15px" },
    paddingTop: "6px",
    paddingBottom: "6px",
    color: { xs: "white", md: "#163762" },
  },

  typeForm: {
    display: { xs: "none", sm: "flex" },
  },
  countrieForm: {
    display: { xs: "none", sm: "none", md: "flex" },
  },
  statesForm: {
    display: { xs: "flex", sm: "none", md: "none" },
  },

  navChild: {
    width: "100%",
    display: "flex",
  },
  root: {
    background: "white",
    height: "100%",
    paddingLeft: "20px",
    borderRadius: "20px",
    mt: { xs: "6em", md: "6.5em" },
    pb: "5em",
    transition: "all 1s ease",
    position: "relative",
  },
  selectInput: {
    width: { xs: "6em", md: "10em" },
    ml: "5px",
    "& .MuiOutlinedInput-root fieldset": {
      display: "none",
      color: "#163762",
    },
    "& .MuiOutlinedInput-root": {
      border: "0",
      borderRadius: "5px",
      backgroundColor: "#f4faff",
    },

    "& .MuiOutlinedInput-input": {
      padding: 1,
      border: "1px solid #163762",
    },
  },

  SelectContainer: {
    display: "flex",
    px: "5px",
    py: "15px",
  },
  selectInputMb: {
    width: { xs: "9em", md: "10em" },
    ml: "5px",
    display: { xs: "flex", md: "none" },
    "& .MuiOutlinedInput-root fieldset": {
      display: "none",
      color: "#163762",
    },
    "& .MuiOutlinedInput-root": {
      border: "0",
      borderRadius: "5px",
      backgroundColor: "#f4faff",
    },

    "& .MuiOutlinedInput-input": {
      padding: 1,
      border: "none",
    },
  },
  image: {
    width: { xs: "130px", sm: "140px", md: "140px", lg: "200px" },
    height: { xs: "140px", sm: "140px", md: "140px", lg: "200px" },
    borderRadius: "10px",
  },

  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 0.5,
  },

  soldStatus: {
    background: "#c6f999",
    paddingLeft: "15px",
    paddingRight: "15px",
    color: "green",
    fontSize: "15px",
    fontWeight: "bold",
    borderRadius: "5px",
  },
  activeStatus: {
    background: "#f6c5bb",
    paddingLeft: "15px",
    paddingRight: "15px",
    color: "#f7421e",
    borderRadius: "5px",
    fontSize: "15px",
    fontWeight: "bold",
  },
  draftStatus: {
    background: "#f7edd0",
    color: "#f58f0a",
    borderRadius: "5px",
    fontSize: "15px",
    fontWeight: "bold",
    paddingLeft: "15px",
    paddingRight: "15px",
  },
  title: {
    fontWeight: "bold",
    fontSize: { xs: "15px", sm: "18px", lg: "20px" },
  },
  icon: {
    fontSize: { xs: "12px", md: "15px" },
    color: "#163762",
  },
  cardText: {
    fontSize: { xs: "10px", md: "15px" },
    color: "#555",
  },
  priceTag: {
    fontSize: "smaller",
    color: "white",
    background: "#163762",
    fontWeight: "bold",
    width: "6em",
    height: "2.2em",
    "&:hover": {
      cursor: "pointer",
      color: "white",
      background: "#163762",
      opacity: "0.8",
    },
  },
};
