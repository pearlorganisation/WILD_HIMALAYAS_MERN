import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";


const AvailableDates = ({ months }) => {


  return (

    <Accordion type="single" collapsible className="w-full grid grid-cols-2 gap-3  md:block">
      {months?.map((item, idx) => {
        return (

          <AccordionItem value={`item-${idx}`} Key={idx} >
            <AccordionTrigger className="bg-[#f4f4f4] px-2  shadow-lg ">{item?.name}</AccordionTrigger>
            <AccordionContent className="space-y-2 border border-[#dddbdb] p-2">


              {item.availableDates.map((el, index) => {
                return <div key={index} className="flex justify-between  items-center p-0 md:p-2  hover:bg-[#f4f4f4] hover:cursor-pointer  ]">

                  <span className="md:w-fit px-2 py-1  text text-xsm my-1 rounded">
                    {el.date}
                  </span>

                  <Link to="/register">
                    <span className={`text-white ${el.isAvailable ? 'bg-green-600' : 'bg-red-500'}  w-fit px-2 py-1 rounded`}>
                      {el.isAvailable ? "Avbl" : "Full"}
                    </span>
                  </Link>

                </div>
              })}
            </AccordionContent>
          </AccordionItem>

        );
      })}
    </Accordion>
  );
}

export default AvailableDates;
