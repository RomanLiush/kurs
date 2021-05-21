import React, {useState, forwardRef} from 'react';

import style from '../../../assets/style/scss/header/header-logo-input/header-logo-input.module.css'
import logo from '../../../assets/images/blackchip-logo.png';
import {NavLink} from "react-router-dom";
import CallIcon from '@material-ui/icons/Call';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
// import { Button } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';


import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


import styles from '../../../assets/style/scss/header/style.module.css';
import {CssBaseline} from '@material-ui/core'

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function HeaderLogoInput(props) {

    const classes = useStyles();

    const [adminLogin, setAdminLogin] = useState('');
    const [adminPassword, setAdminPassword] = useState('');

    (adminLogin === '' && adminPassword === '') ?
        localStorage.setItem('admin', '1') : localStorage.setItem('admin', '0')

    console.log(localStorage.getItem('admin'))

    const [openLogin, setOpenLogin] = useState(false);
    const [isLogOut, setLogOut] = useState(false);
    const [isDialog, setDialog] = useState(false);

    const handleLoginOpen = () => {
        setOpenLogin(true)
    }

    const handleLoginClose = () => {
        setOpenLogin(false)
    }

    const sum = props.data.reduce(function (sum, {all_price}) {
        return sum + all_price
    }, 0)
    return (
        <div className={style.HeaderLogoInput_main}>
            <div className={style.HeaderLogoInput_main__content}>
                <img src={logo} alt={'logo'}/>
                <div className={style.input_and_phone}>
                    <div className={style.input_and_phone__contact}><p><CallIcon fontSize={"small"}/>(068)463-24-36 |
                        9:00 до 18:00 крім Сб та Нд</p></div>
                    <div className={style.input_and_phone__search_panel}><input type='text'/>
                        <Button color={'default'} variant={'contained'} size={'small'} className={style.btn}>
                            <SearchIcon/>
                        </Button>
                    </div>
                </div>
                <div className={style.HeaderLogoInput_main__content__basket}>
                    <span><NavLink to={'/basket'}><ShoppingBasketIcon
                        fontSize={'large'}/> <span>Товарів: {props.data.length} ({sum} грн)</span></NavLink></span>
                </div>
                <div
                    className={style.HeaderLogoInput_main__content__basket}
                    onClick={handleLoginOpen}
                >
                    {
                        (!isLogOut && <span className={'btn btn-primary'}
                                            onClick={() => setDialog(prevState => !prevState)}
                        >LogIn</span>) ||
                        (isLogOut && <span className={'btn btn-primary'}
                                           onClick={() => setLogOut(prevState => !prevState)}
                        >LogOut</span>)
                    }
                </div>
                <div
                    className={style.HeaderLogoInput_main__content__basket}
                    onClick={handleLoginOpen}
                >
                    <span className={'btn btn-primary'}>Registration</span>
                </div>


                {isDialog && <Dialog
                    open={openLogin}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleLoginClose}
                    className={styles.lab5_dialog1}
                >
                    <Container component="main" maxWidth="xs">
                        <CssBaseline/>
                        <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <LockOutlinedIcon/>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <form className={classes.form} noValidate>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    onChange={event => setAdminLogin(event.target.value)}
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={event => setAdminPassword(event.target.value)}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary"/>}
                                    label="Remember me"
                                />
                                {/*<Link*/}
                                {/*    href="/home"*/}
                                {/*    // variant="body2"*/}
                                {/*>*/}
                                <Button
                                    // type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={() => {
                                            setLogOut(prevState => !prevState)
                                            setDialog(prevState => !prevState)
                                        }
                                    }
                                >
                                    Sign In
                                </Button>
                                {/*</Link>*/}
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                        <Box mt={8}>
                            <Copyright/>
                        </Box>
                    </Container>
                </Dialog>}

            </div>
        </div>
    );
};

