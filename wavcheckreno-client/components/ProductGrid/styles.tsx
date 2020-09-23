import { styled } from '@material-ui/core/styles';
import { GridList } from '@material-ui/core';

// TODO: Adapt based on device size
// QUESTION: Should these styles be applied to the container or the MenuNavLinks?
export const ProductGridList = styled(GridList)({
  width: '100%',
  height: 450,
});

export const ProductGridContainer = styled('div')({
  background: 'black',
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  overflow: 'hidden',
});
