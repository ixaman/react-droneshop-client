import { faCheck, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import useOrders from "../../hooks/useOrders";

const trashicon = <FontAwesomeIcon icon={faTrashAlt} />;
const checkicon = <FontAwesomeIcon icon={faCheck} />;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ManageOrders = () => {
  const { orders, setOrders } = useOrders();

// handle update status
  const handleUpdateStatus = id => {
    const updated = { status: "Shipped" }
   const url = `https://obscure-plains-97206.herokuapp.com/orders/${id}`;
   fetch(url, {
       method: 'PUT',
       headers: {
           'content-type': 'application/json'
       },
       body: JSON.stringify(updated)
   })
   .then(res => res.json())
   .then(data => {
       if(data.modifiedCount > 0){
           alert('Staus update successfull !')
           window.location.reload();
       }
   })
}

// handle delete order

const handleDeleteOrder = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://obscure-plains-97206.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingOrder = orders.filter((order) => order._id !== id);
            setOrders(remainingOrder);
          }
        });
    }
  };







  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Order Details</StyledTableCell>
              <StyledTableCell align="right">Customer</StyledTableCell>
              <StyledTableCell align="right">Address</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Update Status</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row">
                  {row.order.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.name}</StyledTableCell>
                <StyledTableCell align="right">{row.address}</StyledTableCell>
                <StyledTableCell align="right">
                  <strong>{row.status}</strong>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <button  onClick={()=>handleUpdateStatus(row._id)} type="button" class="btn btn-success btn-sm">
                    {checkicon} Approve
                  </button>
                </StyledTableCell>
                <StyledTableCell onClick={()=>handleDeleteOrder(row._id)} align="right">
                  <button type="button" class="btn btn-danger btn-sm">
                    {trashicon} Delete
                  </button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ManageOrders;
