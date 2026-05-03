import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import js from '../assets/js.png'
import ts from '../assets/Typescript.svg'
import php from '../assets/PHP.svg'
import py from '../assets/Python.svg'
import go from '../assets/golang.png'
import html from '../assets/html.svg'
import css from '../assets/CSS.svg'
import react from '../assets/react.svg'
import next from '../assets/nextjs.png'
import node from '../assets/Node.js.svg'
import express from '../assets/ex.png'
import django from '../assets/Django.svg'
import gin from '../assets/gin.svg'
import laravel from '../assets/Laravel.svg'
import mysql from '../assets/MySQL.svg'
import postgre from '../assets/Postgresql.svg'
import mongodb from '../assets/MongoDB.svg'

export function TechnicalSkills() {
  const skills = [
    {
      name: "Programming Language",
      icons: [js, ts, go, py, php]
    },
    {
      name: "Frontend Development",
      icons: [html, css, react, next]
    },
    {
      name: "Backend Development",
      icons: [node, express, django, gin, laravel]
    },
    {
      name: "Database Management",
      icons: [mysql, postgre, mongodb]
    }
  ]

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full text-white md:order-1"
    >
      {skills.map((s) => (
        <AccordionItem key={s.name} value={s.name}>
          <AccordionTrigger className="text-xl md:text-3xl font-semibold">{s.name}</AccordionTrigger>
          <AccordionContent className="pb-4 flex gap-2 md:gap-4 flex-wrap">
            {s.icons.map(icon => (<div key={icon} className="h-10 w-14 md:h-12 md:w-16 flex items-center bg-gray-500 p-1 md:p-2 justify-center rounded-lg">
              <img src={`${icon}`} className="w-fit h-full"/>
            </div>))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
