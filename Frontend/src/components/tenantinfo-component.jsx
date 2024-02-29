import React, { useState } from "react";

export default function TenantInfoComponent() {
  const data = [
    {
      id: 1,
      f_name: "John",
      l_name: "Doe",
      n_name: "JDoe",
      address: "123 Main St, Cityville",
      phone: "555-1234",
      email: "john.doe@example.com",
      created_at: "2024-02-18T12:00:00Z",
      username: "john_doe",
      password: "password123",
      date_of_birth: "1990-01-01",
      gender: "Male",
      role: "ADMIN",
      user_rentals: [],
      bills: [],
      payments: [],
    },
    {
      id: 2,
      f_name: "Jane",
      l_name: "Smith",
      n_name: "JSmith",
      address: "456 Oak St, Townsville",
      phone: "555-5678",
      email: "jane.smith@example.com",
      created_at: "2024-02-18T12:15:00Z",
      username: "jane_smith",
      password: "password456",
      date_of_birth: "1985-05-15",
      gender: "Female",
      role: "USER",
      user_rentals: [],
      bills: [],
      payments: [],
    },
    {
      id: 3,
      f_name: "Bob",
      l_name: "Johnson",
      n_name: "BJ",
      address: "789 Pine St, Villagetown",
      phone: "555-9876",
      email: "bob.johnson@example.com",
      created_at: "2024-02-18T12:30:00Z",
      username: "bob_johnson",
      password: "password789",
      date_of_birth: "1988-09-20",
      gender: "Male",
      role: "USER",
      user_rentals: [],
      bills: [],
      payments: [],
    },
    {
      id: 4,
      f_name: "Emily",
      l_name: "Williams",
      n_name: "EWill",
      address: "101 Elm St, Grovetown",
      phone: "555-1111",
      email: "emily.williams@example.com",
      created_at: "2024-02-18T12:45:00Z",
      username: "emily_williams",
      password: "password111",
      date_of_birth: "1992-03-12",
      gender: "Female",
      role: "USER",
      user_rentals: [],
      bills: [],
      payments: [],
    },
    {
      id: 5,
      f_name: "David",
      l_name: "Brown",
      n_name: "DBrown",
      address: "202 Maple St, Hillside",
      phone: "555-2222",
      email: "david.brown@example.com",
      created_at: "2024-02-18T13:00:00Z",
      username: "david_brown",
      password: "password222",
      date_of_birth: "1987-07-05",
      gender: "Male",
      role: "USER",
      user_rentals: [],
      bills: [],
      payments: [],
    },
    {
      id: 6,
      f_name: "Sarah",
      l_name: "Miller",
      n_name: "SMiller",
      address: "303 Cedar St, Riverside",
      phone: "555-3333",
      email: "sarah.miller@example.com",
      created_at: "2024-02-18T13:15:00Z",
      username: "sarah_miller",
      password: "password333",
      date_of_birth: "1995-11-28",
      gender: "Female",
      role: "USER",
      user_rentals: [],
      bills: [],
      payments: [],
    },
    {
      id: 7,
      f_name: "Michael",
      l_name: "Taylor",
      n_name: "MTaylor",
      address: "404 Birch St, Woodsville",
      phone: "555-4444",
      email: "michael.taylor@example.com",
      created_at: "2024-02-18T13:30:00Z",
      username: "michael_taylor",
      password: "password444",
      date_of_birth: "1984-04-15",
      gender: "Male",
      role: "USER",
      user_rentals: [],
      bills: [],
      payments: [],
    },
    {
      id: 8,
      f_name: "Emma",
      l_name: "Anderson",
      n_name: "EAnderson",
      address: "505 Pine St, Parkville",
      phone: "555-5555",
      email: "emma.anderson@example.com",
      created_at: "2024-02-18T13:45:00Z",
      username: "emma_anderson",
      password: "password555",
      date_of_birth: "1993-08-22",
      gender: "Female",
      role: "USER",
      user_rentals: [],
      bills: [],
      payments: [],
    },
    {
      id: 9,
      f_name: "Daniel",
      l_name: "Clark",
      n_name: "DClark",
      address: "606 Oak St, Cityville",
      phone: "555-6666",
      email: "daniel.clark@example.com",
      created_at: "2024-02-18T14:00:00Z",
      username: "daniel_clark",
      password: "password666",
      date_of_birth: "1986-06-10",
      gender: "Male",
      role: "USER",
      user_rentals: [],
      bills: [],
      payments: [],
    },
    {
      id: 10,
      f_name: "Olivia",
      l_name: "Moore",
      n_name: "OMoore",
      address: "707 Elm St, Hillside",
      phone: "555-7777",
      email: "olivia.moore@example.com",
      created_at: "2024-02-18T14:15:00Z",
      username: "olivia_moore",
      password: "password777",
      date_of_birth: "1991-12-05",
      gender: "Female",
      role: "USER",
      user_rentals: [],
      bills: [],
      payments: [],
    },
  ];
  return (
    <>
      <div className="text-2xl text-gray-500 font-bold mb-8">
        <p>Tenant Info Component</p>
      </div>
      <div className="overflow-x-auto my-2 bg-gray-200 rounded-md text-white">
        <table className="table table-md ">
          <thead>
            <tr className="text-black ">
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Nickname</th>
              <th>Address</th>
              <th>Phone</th>
              {/* <th>Email</th> */}

              {/* <th>Username</th> */}
              {/* <th>Password</th> */}
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Role</th>
              <th>Created At</th>
              {/* Add more columns if needed */}
            </tr>
          </thead>
          <tbody className="text-gray-700 font-medium">
            {data.map((user) => (
              <tr key={user.id} className="cursor-pointer hover:bg-gray-300">
                <td>{user.id}</td>
                <td>{user.f_name}</td>
                <td>{user.l_name}</td>
                <td>{user.n_name}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
                {/* <td>{user.email}</td> */}
                {/* <td>{user.username}</td> */}
                {/* <td>{user.password}</td> */}
                <td>{user.date_of_birth}</td>
                <td>{user.gender}</td>
                <td className={user.role === "ADMIN" ? "font-extrabold" : ""}>
                  {user.role}
                </td>
                <td>{user.created_at}</td>
                {/* Add more cells if needed */}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="text-black ">
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Nickname</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Role</th>
              <th>Created At</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}
