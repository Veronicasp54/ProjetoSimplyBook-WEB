import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import WeekendIcon from '@material-ui/icons/Weekend';
import AssignmentIcon from '@material-ui/icons/Assignment';
import TodayIcon from '@material-ui/icons/Today';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { grey } from '@material-ui/core/colors';


export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon  style={{ color: grey[50] }}/>
      </ListItemIcon>
      <ListItemText primary="Reservas" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <TodayIcon  style={{ color: grey[50] }}/>
      </ListItemIcon>
      <ListItemText primary="Calendário" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <WeekendIcon  style={{ color: grey[50] }} />
      </ListItemIcon>
      <ListItemText primary="Salas" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIndIcon  style={{ color: grey[50] }}/>
      </ListItemIcon>
      <ListItemText primary="Perfil" />
    </ListItem>
    
  </div>
);