import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";

export default function Form() {
   return (
      <div className="md:px-20 p-5 py-10">
         <form className="flex flex-col gap-4 bg-white px-14 py-10 rounded-md shadow-lg">
            <div>
               <div className="mb-2 block">
                  <Label htmlFor="car-name" value="Car Name" />
               </div>
               <TextInput id="car-name" type="text" required={true} />
            </div>
            <div>
               <div className="mb-2 block">
                  <Label htmlFor="vehicle-id" value="Vehicle ID" />
               </div>
               <TextInput id="vehicle-id" type="text" required={true} />
            </div>
            <div id="select">
               <div className="mb-2 block">
                  <Label htmlFor="category" value="Select Category" />
               </div>
               <Select id="category" required={true}>
                  <option>Bike</option>
                  <option>Electrict</option>
                  <option>Sedan</option>
                  <option>SUV</option>
                  <option>Sport</option>
               </Select>
            </div>
            <div>
               <div className="mb-2 block">
                  <Label htmlFor="Time" value="Time" />
               </div>
               <TextInput id="Time" type="datetime-local" required={true} />
            </div>
            <div className="flex items-center gap-2">
               <Checkbox id="payed" />
               <Label htmlFor="payed">Payed ?</Label>
            </div>
            <Button type="submit">Submit</Button>
         </form>
      </div>
   );
}
