

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import css from "./navbar.module.css"
import { useNavigate } from 'react-router';
import { PriceFilter } from '../PriceFilter/PriceFilter';
import { useDispatch } from 'react-redux';
import { filter_book_data } from '../../Redux/Books/action';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export  function Navbar() {

  

   const navigate = useNavigate()
   const dispatch = useDispatch()

  return (
    <Box sx={{ flexGrow: 1 , marginBottom:"60px"}}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography onClick={()=>navigate("/")}
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' , cursor:"pointer" } }}
          >
            BOOK APP
          </Typography>
          <Search id={css.search} >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase  id={css.inp}  onChange={(e)=>dispatch(filter_book_data(e.target.value))}
              placeholder="Search by author/ Title"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

       

          <Typography onClick={()=>navigate("/create")}
            variant="h6"
            noWrap
            component="div"
             sx={{ display: { xs: 'none', sm: 'block' ,marginLeft:"300px" ,cursor:"pointer"} }}
          >
           ADD BOOK
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
