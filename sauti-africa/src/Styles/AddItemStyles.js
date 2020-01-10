import React from 'react';
import styled from 'styled-components';
import ProfileImage from '../Assets/profile_image.png';


const img = `url('${ProfileImage}')`;

export const inputStyle = {

    padding: '.5rem',
    fontSize: '16px',
    display: 'block',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '.5rem',

}

export const containerStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    width: '100%'
}

export const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'center',
    width: '100%',
    margin: '20px',
    maxWidth: '375px'
}

export const imgContainer = {
    display: 'flex',
    width: '100%',
    justifyContent: 'center'
}

export const mainImg = {
    backgroundImage: img,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '48px',
    maxWidth: '375px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    lineHeight: '59px',
    width: '175px',
    height: '175px',
    borderRadius: '100%'
}

export const buttonStyle = {
    background: '#000000',
    borderRadius: '4px',
    color: 'white',
    fontFamily: 'Quicksand',
    fontStyle: 'normal',
    fontWeight: 'bold',
    border: 'none',
    padding: '.5rem'
}

export const selectionLabel = {
    fontWeight: 'bold',
    display: 'block',
    textAlign: 'left',
    fontSize: '.75rem'
}