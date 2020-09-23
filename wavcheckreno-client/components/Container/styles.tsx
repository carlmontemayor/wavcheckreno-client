import { styled } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import MenuTheme from 'MenuTheme';

// TODO: Adapt based on device size
// QUESTION: Should these styles be applied to the container or the MenuNavLinks?
export const MenuContainer = styled(Grid)({
  '& h2': {
    marginTop: MenuTheme.spacing(3),
    marginBottom: MenuTheme.spacing(2),
  },
});
