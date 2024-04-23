"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Smriti Gujjar",
    avatar: "S",
    title: "CSE ( IoT & cyber security including Blockchain Technology) ",
    description: "Designed and implemented a user-friendly and visually appealing front-end for the project, ensuring an optimal user experience.",
  },
  {
    name: "Radha Jha",
    avatar: "A",
    title: "CSE ( IoT & cyber security including Blockchain Technology) ",
    description: "Designed and implemented the database schema for user authentication,including the definition of user data and relationships.",
  },
  {
    name: "Madanmohan Jha",
    avatar: "M",
    title: "CSE ( IoT & cyber security including Blockchain Technology) ",
    description: "Developed and implemented an API to seamlessly integrate the AI model into the project",
  },
  {
    name: "Shardul Vanage",
    avatar: "M",
    title: "CSE ( IoT & cyber security including Blockchain Technology) ",
    description: "Facilitated secure payments through Stripe integration and implemented Crisp for efficient customer support",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
{/*       <h2 className="text-center text-4xl text-white font-extrabold mb-10">Developed By</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div> */}
    </div>
  )
}
