import { LinearProgress } from '@mui/material';
import React from 'react'

function LoadingProgress(props) {
    const loadingStatus = props.status;

  return (
    <>
    {loadingStatus ? <LinearProgress></LinearProgress> : <></>}
    </>
  )
}

export default LoadingProgress