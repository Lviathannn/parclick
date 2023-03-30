import { Table } from "flowbite-react";
import { categoryDetail } from "../data/dummy";

export default function Detail() {
   return (
      <div className="md:px-20 p-5 py-10">
         <Table>
            <Table.Head>
               <Table.HeadCell>No</Table.HeadCell>
               <Table.HeadCell>Car name</Table.HeadCell>
               <Table.HeadCell>Cost</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
               {categoryDetail.map((car) => {
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
                        <Table.Cell>{car.cost}</Table.Cell>
                     </Table.Row>
                  );
               })}
            </Table.Body>
         </Table>
      </div>
   );
}
