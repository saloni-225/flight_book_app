import React from 'react';


const Table = () => {
  const tableData = [
    {
      planeName: 'Flight 1',
      from: 'City A',
      to: 'City B',
      departureDate: '2023-10-01',
      returnDate: '2023-10-05',
      travelers: 2,
    },
    {
      planeName: 'Flight 2',
      from: 'City C',
      to: 'City D',
      departureDate: '2023-11-15',
      returnDate: '2023-11-20',
      travelers: 4,
    },
    {
      planeName: 'Flight 3',
      from: 'City E',
      to: 'City F',
      departureDate: '2023-12-05',
      returnDate: '2023-12-10',
      travelers: 3,
    },
  ];

  return (
    <div className="table-container flex container">
        <h2 className="table-heading">Available Flights</h2>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Plane Name</th>
            <th>From</th>
            <th>To</th>
            <th>Departure Date</th>
            <th>Return Date</th>
            <th>Travelers</th>
            <th>Book Ticket</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className="table-row">
              <td>{row.planeName}</td>
              <td>{row.from}</td>
              <td>{row.to}</td>
              <td>{row.departureDate}</td>
              <td>{row.returnDate}</td>
              <td>{row.travelers}</td>
              <td>
                <button className="btn">Book Ticket</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
