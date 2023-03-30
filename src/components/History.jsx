import { Table } from "flowbite-react";
import { carHistory } from "../data/dummy";

export default function History() {
   return (
      <div class="md:px-20 p-5 py-10 dark:bg-gray-900">
         <label for="table-search" class="sr-only">
            Search
         </label>
         <div class="relative mt-1 mb-4 ">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
               <svg
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     fill-rule="evenodd"
                     d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                     clip-rule="evenodd"
                  ></path>
               </svg>
            </div>
            <input
               type="text"
               id="table-search"
               class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Search for items"
            />
         </div>

         <Table>
            <Table.Head>
               <Table.HeadCell>No</Table.HeadCell>
               <Table.HeadCell>Car name</Table.HeadCell>
               <Table.HeadCell>Vehicle ID</Table.HeadCell>
               <Table.HeadCell>Category</Table.HeadCell>
               <Table.HeadCell>Check In</Table.HeadCell>
               <Table.HeadCell>Check Out</Table.HeadCell>
               <Table.HeadCell>Cost</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
               {carHistory.map((car) => {
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
                        <Table.Cell>{car.checkIn}</Table.Cell>
                        <Table.Cell>{car.checkOut}</Table.Cell>
                        <Table.Cell>{car.cost}</Table.Cell>
                     </Table.Row>
                  );
               })}
            </Table.Body>
         </Table>
      </div>
   );
}
