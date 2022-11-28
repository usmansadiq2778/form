import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import { VisibilityIcon, VisibilityOffIcon } from '@mui/icons-material';

// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
import '../src/style.css';

export default function Form() {
    const [value, setvalue] = useState('usman sadiw');
    const [password, showpassword] = useState();

    const handleChange = (event) => {
        setvalue(event.target.value);
    };
    const currencies = [
        {
            value: 'USD',
            label: '$',
        },
        {
            value: 'EUR',
            label: '€',
        },
        {
            value: 'BTC',
            label: '฿',
        },
        {
            value: 'JPY',
            label: '¥',
        },
    ];

    return (
        <div
            className='formcontainer'
            style={{
                width: '100%',

                textAlign: 'center',
            }}
        >
            <form
                style={{
                    display: 'inline-block',
                    flexDirection: 'column',
                    margin: '50px 0px',

                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'ceneter',
                    width: '70%',
                    padding: 40,
                }}
            >
                <h1> Contact form</h1>
                <TextField
                    type='string'
                    style={{ width: '60%', marginBottom: 20, color: 'green' }}
                    id='outlined-basic'
                    label='Enter Your name'
                    variant='outlined'
                />{' '}
                {/* <TextField
                    style={{ width: '60%', marginBottom: 20 }}
                    id='outlined-basic'
                    label='Enter Last name'
                    variant='outlined'
                    required
                /> */}
                <TextField
                    type='email'
                    style={{ width: '60%', marginBottom: 20 }}
                    id='outlined-basic'
                    className='txtfld'
                    label='Enter your Email :'
                    variant='outlined'
                    required
                />
                <TextField
                    required
                    type={'password'}
                    style={{ width: '60%', marginBottom: 20 }}
                    id='outlined-basic'
                    className='txtfld'
                    label='Enter Password :'
                    variant='outlined'
                />
                <TextField
                    required
                    type='number'
                    style={{ width: '60%', marginBottom: 20 }}
                    id='outlined-basic'
                    label='Enter your phone '
                    variant='outlined'
                />
                <TextField
                    style={{ width: '60%', marginBottom: 20 }}
                    id='outlined-select-currency  outlined-basic '
                    select
                    label='Select'
                    variant='outlined'
                    value={value}
                    onChange={handleChange}
                    helperText='Please select your currency'
                    SelectProps={{
                        native: true,
                    }}
                >
                    {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label} {option.value}
                        </option>
                    ))}
                </TextField>
            </form>
        </div>
    );
}
