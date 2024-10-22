import Button from "../components/ui/Button";
import {Card} from "../components/ui/Card";
import { CardContent } from "../components/ui/Card";
import { CardFooter } from "../components/ui/Card";
import { CardHeader } from "../components/ui/Card";
import { CardTitle } from "../components/ui/Card";

import {Avatar} from "../components/ui/Avatar";
import { AvatarFallback } from "../components/ui/Avatar";
import { AvatarImage } from "../components/ui/Avatar";
import { Home, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom"; // Use react-router-dom for navigation

const architects = [
  {
    name: "Alice Johnson",
    avatar: "/placeholder.svg",
    rating: 4.8,
    image: "/placeholder.svg",
    description: "Specializing in modern, eco-friendly home designs",
    reviews: [
      {
        author: "John D.",
        text: "Alice designed our dream home. Highly recommended!",
      },
      {
        author: "Sarah M.",
        text: "Professional, creative, and attentive to detail.",
      },
    ],
  },
  {
    name: "Bob Smith",
    avatar: "/placeholder.svg",
    rating: 4.5,
    image: "/placeholder.svg",
    description: "Expert in traditional and colonial architecture",
    reviews: [
      { author: "Emily R.", text: "Bob's designs are timeless and beautiful." },
      {
        author: "Michael T.",
        text: "Great experience working with Bob on our renovation.",
      },
    ],
  },
  {
    name: "Carol White",
    avatar: "/placeholder.svg",
    rating: 4.9,
    image: "/placeholder.svg",
    description: "Innovative designs blending form and function",
    reviews: [
      {
        author: "David L.",
        text: "Carol's creativity transformed our living space.",
      },
      {
        author: "Lisa K.",
        text: "Exceptional attention to detail and client needs.",
      },
    ],
  },
  // Add more architects as needed
];

export default function ArchitectPortfolios() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" to="/">
          <Home className="h-6 w-6 text-primary" />
          <span className="ml-2 text-2xl font-bold text-primary">
            HOME HARBOR
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="/about"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="/contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
            Our Featured Architects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {architects.map((architect, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src={architect.avatar}
                        alt={architect.name}
                      />
                      <AvatarFallback>
                        {architect.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>{architect.name}</CardTitle>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(architect.rating)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-muted-foreground">
                          {architect.rating.toFixed(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <img
                    src={architect.image}
                    alt={`Featured project by ${architect.name}`}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p className="text-muted-foreground mb-4">
                    {architect.description}
                  </p>
                  <div className="space-y-2">
                    {architect.reviews.map((review, reviewIndex) => (
                      <div
                        key={reviewIndex}
                        className="bg-muted p-2 rounded-md"
                      >
                        <p className="text-sm font-medium">{review.author}</p>
                        <p className="text-sm text-muted-foreground">
                          {review.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Full Portfolio</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8 gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          © 2024 HOME HARBOR. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4"
            to="/terms"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            to="/privacy"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
