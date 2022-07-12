import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import CustomerCard from "./components/CustomerCard";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";

function App() {

  const [reservationNameInput,setReservationNameInput] = useState('')


  const reservations = useSelector((state: RootState) => state.reservations.value)
  const customers = useSelector((state: RootState) => state.customer.value)

  const dispatch = useDispatch()

  const handleAddReservations = () =>{
    if(!reservationNameInput){
      return
    }
    dispatch(addReservation(reservationNameInput))
    setReservationNameInput('')
  }
  //  return <ReservationCard name={name}></ReservationCard>} )}
  return (
    <div className="App">
      <div className="container">
        {/* reservation container */}
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name,index)=><ReservationCard name={name} index={index}></ReservationCard>)}
            </div>
          </div>
          <div className="reservation-input-container">
            <input 
             value={reservationNameInput}
             onChange={(e)=>setReservationNameInput(e.target.value)}
            />
            <button  onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
        {customers.map((customer)=>{
          return <CustomerCard></CustomerCard>
        })}
        
        </div>
      </div>
    </div>
  );
}

export default App;