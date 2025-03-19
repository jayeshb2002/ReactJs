import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TableHead from '../ui/TableHead'
import TableBody from '../ui/TableBody'
// import Table from './Table'

const PaymentDetails = () => {
    const [paymentList, setPaymentList] = useState([])

    useEffect(() => {
        fetchData()
    }, [])
    
    const fetchData = async function () {
        let response = await axios.get("http://localhost:3000/payments")
        setPaymentList(response.data)
        console.log(response)
    }
  return (
      <>
          {/* <Table columns={['Id','CustomerName', 'Amount', 'Currency']} data={paymentList}/> */}
          <TableHead columns={['Id','CustomerName', 'Amount', 'Currency']}/>
          <TableBody data={paymentList}/>
    </>
  )
}

export default PaymentDetails