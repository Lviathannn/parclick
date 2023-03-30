import { Table } from "flowbite-react";
import { carData } from "../data/dummy";

export default function FlowTable() {
   return (
      <div className="md:px-20 p-5 py-10">
         <Table>
            <Table.Head>
               <Table.HeadCell>No</Table.HeadCell>
               <Table.HeadCell>Car name</Table.HeadCell>
               <Table.HeadCell>Vehicle ID</Table.HeadCell>
               <Table.HeadCell>Category</Table.HeadCell>
               <Table.HeadCell>Time</Table.HeadCell>
               <Table.HeadCell>Status</Table.HeadCell>
               <Table.HeadCell>
                  <span className="sr-only">Edit</span>
               </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
               {carData.map((car) => {
                  return (
                     <Table.Row
                        className="bg-white dark:border-gray-700 dark:bg-gray-800"
                        key={car.id}
                     >
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           {car.id}
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium dark:text-white">
                           {car.name}
                        </Table.Cell>
                        <Table.Cell>{car.carID}</Table.Cell>
                        <Table.Cell>{car.category}</Table.Cell>
                        <Table.Cell>{car.time}</Table.Cell>
                        <Table.Cell className="flex gap-2 items-center">
                           <span
                              className={`block w-3 h-3 rounded-full ${
                                 car.status == "Payed"
                                    ? "bg-emerald-500"
                                    : "bg-red-500"
                              }`}
                           ></span>
                           {car.status}
                        </Table.Cell>
                        <Table.Cell>
                           <a
                              href="/tables"
                              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                           >
                              Edit
                           </a>
                        </Table.Cell>
                     </Table.Row>
                  );
               })}
            </Table.Body>
         </Table>
      </div>
   );
}
