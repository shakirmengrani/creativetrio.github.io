import { useState } from 'react'
import {
    Typography, makeStyles, createStyles, Button, NoSsr, Grid,
    Paper, AppBar, Toolbar, Menu, MenuItem, IconButton, Box, Modal,
    Tabs, Tab, Card, CardHeader, CardActions, CardMedia, CardContent,
    List, ListItem, Divider, TextField
} from '@material-ui/core'
import TodayIcon from '@material-ui/icons/Today'
import MenuIcon from '@material-ui/icons/Menu'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles(theme => createStyles({
    hero: {
        backgroundImage: "url(/assets/hero.jpg)",
        backgroundSize: 'cover'
    },
    heroContent: {
        width: '100vw',
        height: '95vh',
        display: 'grid',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: '#ffffff'
    },
    tagCard: {
        display: "grid",
        maxHeight: "20vh",
        margin: '5px 1px',
        padding: '8px 15px',
        alignContent: "center",
        justifyContent: "center"
    },
    skillTag: {
        margin: '5px'
    },
    menuToggle: {
        color: "#ffffff"
    },
    menuText: {
        color: "#ffffff"
    },
    appTitle: {
        flexGrow: 1,
        color: "#ffffff"
    },
    packListContainer: {
        justifyContent: "center"
    },
    modalButton: {
        fontWeight: '600'
    },
    modalContainer: {
        display: 'grid',
        justifyContent: 'center',
        alignContent: 'center'
    },
    modalPaper: {
        width: '50vw',
        height: '60vh'
    },
    pricingCard: {
        padding: '0px 16px'
    },
    pricingCustomCard: {
        padding: '0px 16px',
        width: '20vw',
        height: '50vh',
        textAlign: 'center'
    },
    pricingList: {
        width: '20vw',
        height: '50vh',
        overflow: 'auto'
    },
    contactContent: {
        display: 'grid',
        alignContent: 'center',
        textAlign: 'center',
        color: '#ffffff',
        backgroundColor: 'rgba(0,0,0,0.8)',
        height: '100%'
    },
    contactForm: {
        padding: '15px 15px'
    },
    contactImage: {
        height: '60vh',
        backgroundSize: '27vw 60vh',
        backgroundImage: 'url(/assets/contact.jpg)'
    }
}));

export function MyMenu(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles()
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <NoSsr>
            <Button aria-controls={props.title} variant="text" className={classes.menuText} onClick={handleClick}>{props.title}</Button>
            <Menu
                id={props.title}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </NoSsr>
    );
}


export function MainMenu(props) {
    const classes = useStyles()
    return (
        <NoSsr>
            <AppBar position="sticky">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuToggle}>
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.appTitle} variant="h6">{props.title}</Typography>
                    {/* <MyMenu title="Services" /> */}
                </Toolbar>
            </AppBar>
        </NoSsr>
    );
}

export function ScheduleButton(props) {
    return (
        <Button variant="contained" color="primary" fullWidth={props.fullWidth ? props.fullWidth : false} target="_blank" href="https://calendly.com/shakirmengrani/20-minutes">
            <TodayIcon /> Schedule Today
        </Button>
    );
}

export function Header() {
    const classes = useStyles()
    return (
        <NoSsr>
            <div className={classes.hero}>
                <div className={classes.heroContent}>
                    <Typography variant="h4">
                        The way we transform your ideas and your business to digitalized
                    </Typography>
                    <Grid container>
                        <Grid item xs="6" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <ScheduleButton />
                        </Grid>
                        <Grid item xs="6">
                            <MyModal variant="contained" title="get in touch" />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </NoSsr>
    );
}

export function TagCard(props) {
    const classes = useStyles()
    return (
        <NoSsr>
            <Paper className={classes.tagCard}>
                <Typography variant="h5">
                    {props.title}
                </Typography>
                {props.content}
            </Paper>
        </NoSsr>
    );
}


export function SkillTag(props) {
    const classes = useStyles()
    return (
        <NoSsr>
            <img src={props.image} className={classes.skillTag} title={props.title} alt={props.title} />
        </NoSsr>
    );
}

export function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export function ServicesTab(props) {
    const classes = useStyles()
    const [selected, setSelected] = useState(0)
    return (
        <NoSsr>
            <Tabs value={selected} variant="fullWidth" onChange={(evt, val) => setSelected(val)}>
                {props.tabs.map((tab, key) => (<Tab key={key} label={tab.label} />))}
            </Tabs>
            {props.tabs.map((tab, key) => (
                <TabPanel key={key} value={selected} index={key}>
                    <Grid container className={classes.packListContainer} spacing={4}>
                        {tab.packages.map((pack, key) => (
                            <Grid item key={key} xs={3}>
                                <Pricing {...pack} />
                            </Grid>
                        ))}
                    </Grid>
                </TabPanel>
            ))}
        </NoSsr>
    );
}

export function Pricing(props) {
    const classes = useStyles()
    if (props.title == "Custom") {
        return (
            <NoSsr>
                <Card>
                    <CardHeader title={props.title} />
                    <CardMedia image="http://placehold.it/200" />
                    <CardContent className={classes.pricingCustomCard}>
                        <p>
                            For businesses with multiplex solutions
                        </p>
                        <MyModal fullWidth={true} title="Request a quote" />
                        <Divider />
                        <ScheduleButton fullWidth={true} />
                    </CardContent>
                    <CardActions>
                    </CardActions>
                </Card>
            </NoSsr>
        )
    }
    return (
        <NoSsr>
            <Card>
                <CardHeader title={props.title} />
                <CardMedia image="http://placehold.it/200" />
                <CardContent className={classes.pricingCard}>
                    <List className={classes.pricingList}>
                        {props.features?.map((lineItem, key) => (<ListItem key={key}>{lineItem}</ListItem>))}
                    </List>
                    <Divider />
                    <span>{props.price}</span>
                </CardContent>
                <CardActions>
                    <MyModal fullWidth={true} color="primary" variant="outlined" title="Select plan" />
                </CardActions>
            </Card>
        </NoSsr>
    )
}

export function ContactForm(props) {
    const classes = useStyles()
    return (
        <NoSsr>
            <Grid container>
                <Grid item xs={6}>
                    <div className={classes.contactImage}>
                        <div className={classes.contactContent}>
                            <Typography variant="h4">
                                Let's connect
                            </Typography>
                            <p>
                                Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.
                            </p>
                            <span><PhoneIcon /> +92-323-2611654</span>
                            <span><EmailIcon />c8v3io@gmail.com</span>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className={classes.contactForm}>
                        <TextField fullWidth id="standard-basic" label="Name" />
                        <TextField fullWidth id="standard-basic" label="Email" />
                        <TextField fullWidth id="standard-basic" label="Phone" />
                        <TextField multiline fullWidth id="standard-basic" label="Message" />
                        <Button variant="contained" color="primary" style={{marginTop: '20px'}} fullWidth>Send</Button>
                    </div>
                </Grid>
            </Grid>
        </NoSsr>
    );
}

export function MyModal(props) {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    return (
        <NoSsr>
            <Button className={classes.modalButton} fullWidth={props.fullWidth ? props.fullWidth : false} variant={props.variant} color={props.color} onClick={() => setOpen(true)}>{props.title}</Button>
            <Modal className={classes.modalContainer} onClose={() => setOpen(false)} open={open} title="Hello">
                <Paper className={classes.modalPaper}>
                    <ContactForm />
                </Paper>
            </Modal>
        </NoSsr>
    );
}