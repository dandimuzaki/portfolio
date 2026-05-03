import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Experience() {
  const experiences = [
    {
      company: "DIRO (Digital Intelligence Reservation Oracle)",
      position: "Fullstack Developer Intern",
      start: "Dec 2025",
      end: "Apr 2026",
      description: "Improved booking system experience by redesigning core user flows, implementing reusable UI components, and adding bilingual support for scalable product expansion."
    },
    {
      company: "Sintech IT Solutions",
      position: "Laravel Developer Intern",
      start: "Dec 2025",
      end: "Apr 2026",
      description: "Developed backend features for a Doorprize Management System, including authentication, role management, and optimized data handling for large datasets."
    },
    {
      company: "Kebun Dex (PT. Kebun Online Agrobisnis)",
      position: "Marketing Analyst Intern",
      start: "Apr 2025",
      end: "Jun 2025",
      description: "Built a data platform integrating international trade APIs, processing large datasets and visualizing insights through an interactive dashboard."
    },
    {
      company: "Agripacul",
      position: "Co-Founder & Fullstack Developer",
      start: "Sep 2022",
      end: "Oct 2023",
      description: "Developed an end-to-end e-commerce platform for agricultural products, including product management, checkout flow, and shipping cost integration."
    },
  ]

  return (
    <div className="relative">
      <div className='h-full w-1 left-2 md:left-6 bg-secondary absolute'></div>
    <Accordion
      type="single"
      collapsible
      className="w-full text-white md:py-16"
    >
      {experiences.map((e) => (
        <AccordionItem className="border-none" key={e.company} value={e.company}>
          <AccordionTrigger className="">
            <div className="flex gap-2 items-start w-full">
              <div className="p-1 md:p-4">
                <div className="w-3 h-3 md:w-5 md:h-5 bg-secondary rounded-full"></div>
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-xl text-primary md:text-2xl font-semibold">{e.company}</h3>
                <p className="text-base md:text-lg">{e.position}</p>
              </div>
              <div className="text-sm md:text-base">
                <p>{e.start}</p>
                <p>{e.end}</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-4 flex gap-4 flex-wrap pl-15">
            {e.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
    </div>
  )
}
