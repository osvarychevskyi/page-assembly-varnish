import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SurroundSoundIcon from '@material-ui/icons/SurroundSound';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function App() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="home">
                        <SurroundSoundIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Tech Blog
                    </Typography>
                    <IconButton aria-label="show 17 new notifications" color="inherit">
                        <Badge badgeContent={17} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Paper position="static" color="default">
                <Tabs value={false} aria-label="nav tabs example">
                    <Tab component="a" label="Page One" href="/drafts" />
                    <Tab component="a" label="Page Two" href="/trash" />
                    <Tab component="a" label="Page Three" href="/spam" />
                </Tabs>
            </Paper>
        </div>
    );
}

export default App;
