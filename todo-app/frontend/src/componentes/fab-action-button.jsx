import React from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import '../../public/assets/css/components.css'

export default props=> (
    <div className='fab-icon'>
        <Fab className='fab-button' color="primary" aria-label="add" size="meddium">
            <AddIcon/>
        </Fab>
    </div>
)
