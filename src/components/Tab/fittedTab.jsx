import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useColorModeValue,
} from "@chakra-ui/react";

const FittedTab = ({ tabs }) => {
  const bg = useColorModeValue("primary.200", "primary.200");
  return (
    <Tabs isFitted variant="enclosed">
      <TabList mb="1em">
        {tabs.map((tab, index) => {
          return (
            <Tab
              key={index}
              _selected={{
                bg: bg,
                color: "white",
                _focus: "none",
              }}
              _focus="none"
              _active="none"
            >
              {tab.name}
            </Tab>
          );
        })}
      </TabList>
      <TabPanels>
        {tabs.map((tab, index) => {
          return (
            <TabPanel key={index}>
              <tab.component />
            </TabPanel>
          );
        })}
      </TabPanels>
    </Tabs>
  );
};
export default FittedTab;
