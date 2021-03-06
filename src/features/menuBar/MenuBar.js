import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TabContext from '@material-ui/lab/TabContext';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Posts from '../posts/Posts';
import About from '../about/About';
import Recipes from '../recipes/Recipes';
import {
    Switch,
    Route,
    useHistory,
    useLocation,
} from "react-router-dom";

const TITLE = "Tea Leaves and Moore"
const DEFAULT_PATH = '/posts'

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: theme.colors.lightGreen,
        display: 'flex',
    },
    toolBar: {
    },
    barTitle: {
        color: theme.colors.darkGrey,
        fontSize: "30px",
        marginLeft: theme.spacing(2),
        flexGrow: 1,
    },
    fullHeight: {
    },
    panelWrapper: {
        marginTop: theme.spacing(3),
    },
    logo: {
        maxWidth: "600px",
        width: "60%",
        display: 'block',
        padding: theme.spacing(2),
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}));

export default function MenuBar() {
    const classes = useStyles();
    const history = useHistory();
    let location = useLocation();
    if (location.pathname === '/') {
        history.push(DEFAULT_PATH)
    }

    const [activeTab, setActiveTab] = React.useState(location.pathname);

    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
        history.push(newValue);
    };

    return (
        <div className={classes.root}>
            <header>
                <span>
                    <img src='./fullNamedLogo.png' className={classes.logo} />
                    {/* <Typography className={classes.barTitle}>
                            {TITLE}
                        </Typography> */}
                </span>
            </header>
            <TabContext value={activeTab}>
                <AppBar position="sticky" className={classes.appBar}>
                    {/* <Toolbar className={classes.toolBar}> */}
                    {/* <img src='./cupOutline.png' className={classes.logo} />
                        <Typography className={classes.barTitle}>
                            {TITLE}
                        </Typography> */}
                    <Tabs
                        value={activeTab}
                        className={classes.fullHeight}
                        onChange={handleChange}
                        aria-label="tabs"
                        indicatorColor="primary"
                        textColor="primary"
                        centered>
                        <Tab className={classes.fullHeight} label="Posts" id="posts" value="/posts" />
                        <Tab className={classes.fullHeight} label="Recipes" id="recipes" value="/recipes" />
                        <Tab className={classes.fullHeight} label="About" id="about" value="/about" />
                    </Tabs>
                    {/* </Toolbar> */}
                </AppBar>
                <div className={classes.panelWrapper} >
                    <Switch>
                        <Route path='/about'>
                            <About />
                        </ Route>
                        <Route path='/posts'>
                            <Posts />
                        </ Route>
                        <Route path='/recipes'>
                            <Recipes />
                        </ Route>
                    </Switch>
                </div>
            </TabContext>
        </div>
    );
}