import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getRecipeImage } from "../customHooks/GetImage";
import "../Assets/Styles/userAccountPage.scss"
import "../Assets/Styles/common.scss"

export default function DenseTable(props) {
  return (
    // <TableContainer component={Paper} className='tableContainer'>
    //   <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>Dessert (100g serving)</TableCell>
    //         <TableCell align="right">Calories</TableCell>
    //         <TableCell align="right">Fat&nbsp;(g)</TableCell>
    //         <TableCell align="right">Carbs&nbsp;(g)</TableCell>
    //         <TableCell align="right">Protein&nbsp;(g)</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {props.data&& props.data.map((myRecipe) => (
    //         <TableRow
    //           key={myRecipe.title}
    //           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    //         >
    //           <TableCell component="th" scope="row" align="center">
    //           <img src={getRecipeImage(myRecipe)} alt="" className="small-image" />
    //           </TableCell>
    //           <TableCell align="center">{myRecipe.title}</TableCell>
    //           <TableCell align="center">{myRecipe.rating}</TableCell>
    //           <TableCell align="center"><button>Edit</button></TableCell>
    //           <TableCell align="center"><button>Delete</button></TableCell>
              
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
  

<div className="table-container">
<table>
  <tbody>
    {/* Populate the table body with rows and cells */}
    {props.data&& props.data.map((myRecipe) => (
        <div  className='table-row'>
    <tr>
    <img src={getRecipeImage(myRecipe)} alt="" className="small-image" />
      <td>{myRecipe.title}</td>
      <td>{myRecipe.rating}</td>
      <td><button>Edit</button></td>
      <td><button>Delete</button></td>
    </tr>
    </div>
    ))}
  </tbody>
</table>
</div>

);
}