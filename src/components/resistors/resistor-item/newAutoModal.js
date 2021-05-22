import React, {useState, forwardRef} from 'react';

import styles from './styles.module.css';

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
import {CssBaseline} from '@material-ui/core'

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Copyright() {
    return (
        <Typography variant='body2' color='textSecondary' align='center'>
            {'Copyright © '}
            <Link color='inherit' href='https://material-ui.com/'>
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}))

const NewAutoModal = ({open, onClose, data, newItem}) => {

    const classes = useStyles()

    const [id, setId] = useState('');
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [weight, setWeight] = useState('');
    const [size, setSize] = useState('');
    const [image, setImage] = useState(null);
    const [desc, setDesc] = useState('');
    const [model, setModel] = useState('');
    const [power, setPower] = useState('');

    let newAuto1 = {
        'id': id,
        'type': category,
        'marka': name,
        'price': price,
        'weigth': weight,
        'size': size,
        'url': image,
        'info': desc,

        "articul": "001232",
        "deviation": "± 0.5%",
        "napruga": "200",
        "model": model,
        "useful": "Opir",
        "opir": size,
        "power": power,
        "in_market": "120",

    }

    let editAuto2 = {
        "id": "0",
        "type": "resistor",
        "marka": "china-internation",
        "in_market": "120",
        "weigth": "0.2",
        "size": "0.02x0.02",
        "info": "vsio garno, vsio abs",
        "model": "МЛТ-0.125",
        "useful": "Opir",
        "opir": "12000",
        "power": "0.125",
        "napruga": "200",
        "deviation": "± 0.5%",
        "url": "https://blackchip.com.ua/image/catalog/tovar/rezustoru/MLT.jpg",
        "price": "1",
        "articul": "001232"
    }

    const setEditAuto = (editAuto) => localStorage.setItem('editAuto', JSON.stringify(editAuto))

    const editedAuto = localStorage.getItem('editAuto');
    console.log(editedAuto, 'EDITED AUTO')

    const [open_3, setOpen_3] = useState(true);
    const handleClickOpen_3 = () => {
        setOpen_3(true)
    }
    const handleClose_3 = () => {
        setOpen_3(false)
    }


    return(
        <>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={onClose}
                className={styles.lab5_dialog1}
            >
                <Container component='main' maxWidth='xs'>
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Typography component='h1' variant='h5'>
                            Створіть товар
                        </Typography>
                        <form className={classes.form} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete='fname'
                                        name='firstName'
                                        variant='outlined'
                                        required
                                        fullWidth
                                        id='id'
                                        label='ID'
                                        type={'number'}
                                        autoFocus
                                        placeholder={id}
                                        onChange={event => setId(event.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant='outlined'
                                        required
                                        fullWidth
                                        id='categoryID'
                                        label='Category ID'
                                        name='Category ID'
                                        type={'text'}
                                        onChange={event => setCategory(event.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant='outlined'
                                        required
                                        fullWidth
                                        id={'name'}
                                        label='Name'
                                        name={'Name'}
                                        onChange={event => setName(event.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant='outlined'
                                        required
                                        fullWidth
                                        id='price'
                                        label='Price'
                                        name='Price'
                                        type={'text'}
                                        onChange={event => setPrice(event.target.value)}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant='outlined'
                                        required
                                        fullWidth
                                        id='weight'
                                        name='Weight'
                                        label={'Weight'}
                                        type={'text'}
                                        onChange={event => setWeight(event.target.value)}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant='outlined'
                                        required
                                        fullWidth
                                        id='size'
                                        name='Size'
                                        label={'Size'}
                                        type={'text'}
                                        onChange={event => setSize(event.target.value)}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant='outlined'
                                        required
                                        fullWidth
                                        id='image'
                                        name='Image'
                                        type={'file'}
                                        onChange={event => setImage(event.target.value)}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant='outlined'
                                        required
                                        fullWidth
                                        id='model'
                                        name='Model'
                                        label={'Model'}
                                        type={'text'}
                                        onChange={event => setModel(event.target.value)}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant='outlined'
                                        required
                                        fullWidth
                                        id='power'
                                        name='Power'
                                        label={'Power'}
                                        type={'text'}
                                        onChange={event => setPower(event.target.value)}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        variant='outlined'
                                        required
                                        fullWidth
                                        id='description'
                                        name='Description'
                                        label={'Descriptions'}
                                        onChange={event => setDesc(event.target.value)}
                                    />
                                </Grid>

                            </Grid>

                            <Button
                                // type="submit"
                                fullWidth
                                variant='contained'
                                color='primary'
                                className={classes.submit}

                                onClick={async () => {
                                    await onClose()
                                    await newItem(newAuto1)
                                }
                                }
                            >
                                Створити!
                            </Button>

                        </form>
                    </div>
                </Container>
            </Dialog>
        </>
    )
}

export default NewAutoModal;
