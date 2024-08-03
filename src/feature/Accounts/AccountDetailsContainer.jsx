import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TopSection from "../../ui/TopSection";
import StyledContainer from "../../ui/Container";
import { AccountCircle, ShoppingBag } from "@mui/icons-material";
import Logout from "./Logout";
import UserName from "./UserName";
import { useUser } from "./useUser";
import UserProfile from "./UserProfile";
import UserOrder from "./UserOrder";

export default function AcountDetailsContainer() {
  const [value, setValue] = useState("1");
  const { user } = useUser();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TopSection>
      <StyledContainer>
        <Box sx={{ typography: "body1", textAlign: "right" }} mb={2}>
          <Logout />
        </Box>
        <UserName user={user} />
        <Box
          sx={{
            typography: "body1",
            width: { md: "70%", sm: "100%" },
            mx: "auto",
          }}
        >
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab icon={<AccountCircle />} label="Profile" value="1" />
                <Tab icon={<ShoppingBag />} label="Orders" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ padding: "1rem 0" }}>
              <UserProfile user={user} />
            </TabPanel>
            <TabPanel value="2" sx={{ padding: "1rem 0" }}>
              <UserOrder />
            </TabPanel>
          </TabContext>
        </Box>
      </StyledContainer>
    </TopSection>
  );
}
