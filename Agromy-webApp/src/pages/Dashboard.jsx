import React, { useState, useEffect } from 'react'
import '../styles/Dashboard.css'


const Dashboard = () => {
    const[orders, setOrders] =useState([
        {id: 1, item: '', amount: '', quantity: Number, price: '' }
    ])
    return(
        <div className="dashboard-container">
            <h1>Buyer Dashboard</h1>
            <p>Welcome Back! What's happening with your orders</p>
            <table className="table-container">
                <thead className="thead">
                    <tr>
                        <th>Items Purchased</th>
                        <th>Amount</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{orders.map((order) => (
                    <tr key = {order.id}>
                        <td>{order.item}</td>
                        <td>{order.amount}</td>
                        <td>{order.quantity}</td>
                        <td>{order.price}</td>
                    </tr>
                ))} </tbody>
            </table>
        </div>
    );
};

export default Dashboard;