import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import WeekendIcon from '@material-ui/icons/Weekend';
import AssignmentIcon from '@material-ui/icons/Assignment';
import TodayIcon from '@material-ui/icons/Today';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { Icon } from '@material-ui/core';


export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon/>
      </ListItemIcon>
      <ListItemText primary="Reservas" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <TodayIcon/>
      </ListItemIcon>
      <ListItemText primary="Calendário" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <WeekendIcon />
      </ListItemIcon>
      <ListItemText primary="Salas" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIndIcon/>
      </ListItemIcon>
      <ListItemText primary="Perfil Empresa" />
    </ListItem>
    
  </div>
);