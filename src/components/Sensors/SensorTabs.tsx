/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNode } from 'react';
import {
  createStyles, Theme, withStyles,
} from '@material-ui/core/styles';
import { Tabs, Tab } from 'libs/mui';

const tabsStyles = (theme: Theme) => createStyles({
  root: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  indicator: {
    backgroundColor: theme.palette.primary.main,
    height: '2px',
  },
});

const StyledTabs = withStyles(tabsStyles)(Tabs);

const StyledTab = withStyles((theme: Theme) => createStyles({
  root: {
    minWidth: 125,
    fontWeight: 700,
    letterSpacing: '0.75px',
    textTransform: 'uppercase',
    color: theme.palette.primary.main,
  },
}))(Tab);

interface TabPanelProps {
  children: ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface Props {
  classes: any;
  children: ReactNode;
  tabs: string[];
}

function SensorTabs({ classes, children, tabs }: Props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <StyledTabs value={value} onChange={handleChange} aria-label="tabs">
        {tabs.map((tab, i) => (
          <StyledTab key={tab} label={tab} {...a11yProps(i)} />
        ))}
      </StyledTabs>
      {
        React.Children.map(children, (child, i) => (
          <TabPanel key={`tab-${i}`} value={value} index={i}>
            {child}
          </TabPanel>
        ))
      }
    </div>
  );
}

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    marginTop: theme.spacing(),
  },
});

export default withStyles(styles)(SensorTabs);
