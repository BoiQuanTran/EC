import Toolbar from '@mui/material/Toolbar';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import ReplayIcon from '@mui/icons-material/Replay';
import { useDispatch, useSelector } from 'react-redux';
import { deleteManySuccess, setColors, setSelected, showAddColor, showUpdateColor } from '../../slice';
import ColorService from '../../../../services/color.service';

const EditTable = ({ numSelected }) => {
    const state = useSelector(state => state.color);
    const dispatch = useDispatch();
    const getColors = async () => {
        const data = await ColorService.getAll();
        dispatch(setColors(data.result));
    };
    const addColor = () => {
        dispatch(showAddColor());
    };
    const updateColor = () => {
        dispatch(showUpdateColor());
    };
    const deleteColor = async () => {
        const data = await ColorService.deleteAll(state.selected);
        if (data) {
            dispatch(deleteManySuccess());
            dispatch(setSelected([]));

        }

    };

    if (numSelected === 1) {
        return (
            <>
                <Tooltip title='Update color'>
                    <IconButton onClick={updateColor}>
                        <EditIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title='Delete'>
                    <IconButton onClick={deleteColor}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </>
        );
    } else if (numSelected > 1) {
        return (
            <Tooltip title='Delete'>
                <IconButton onClick={deleteColor}>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        );
    } else {
        return (<>
                <Tooltip title='Reload'>
                    <IconButton onClick={getColors}>
                        <ReplayIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title='Add color'>
                    <IconButton onClick={addColor}>
                        <AddIcon />
                    </IconButton>
                </Tooltip>
            </>
        );
    }

};

const ColorToolbar = (props) => {
    const { numSelected } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity)
                })
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color='inherit'
                    variant='subtitle1'
                    component='div'
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant='h4'
                    id='tableTitle'
                    component='div'
                >
                    Color
                </Typography>
            )}
            <EditTable numSelected={numSelected} />
        </Toolbar>
    );
};
export default ColorToolbar;
