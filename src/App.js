import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import CampaignTable from './CampaignTableContainer';

function TabPanel(props) {
    const {children, value, index, ...other} = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function App() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div id="campaign">
            <header className="appHeader">
                <h1>Manage Campaigns</h1>
            </header>

            <Tabs value={value} onChange={handleChange}>
                <Tab label="Upcoming Campaigns" id="tab-1"/>
                <Tab label="Live Campaigns" id="tab-2"/>
                <Tab label="Past Campaigns" id="tab-3"/>
            </Tabs>

            <TabPanel value={value} index={0}>
                <CampaignTable {...{index: 0}}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <CampaignTable {...{index: 1}} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <CampaignTable {...{index: 2}} />
            </TabPanel>
        </div>
    );
}

export default App;