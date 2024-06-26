"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; description: string }[] = [
  {
    title:"Starbuck Coffe",
    description:"Starbucks Corporation is one of our allies and they have a cafe in every corner of the world.",
  },
  {
    title:"Costa Coffe",
    description:"Costa Coffee is a British multinational coffeehouse company headquartered in Dunstable, Bedfordshire, and a wholly-owned subsidiary of The Coca-Cola Company.",
  },
  {
    title:"Cafe Coffee Day",
    description:"Café Coffee Day is a coffee shop for the young and the young at heart.",
  },
  {
    title:"Barista",
    description:"Barista Lavazza is a chain of espresso bars that deliver a truly Italian coffee experience in warm, friendly and relaxed environment.",
  }
]

export function NavBtn() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Our Cafes</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href=""
                    style={{backgroundImage: 'url(/bg.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}
                  >
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="" title="Free Wifi">
                Our cafes are equipped with free wifi for all our customers.
              </ListItem>
              <ListItem href="" title="Top Rated">
                Our cafes are top rated and highly recommended.
              </ListItem>
              <ListItem href="" title="Customer Freindly">
                Our cafes are customer friendly.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Gourmet Cafes</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="" target="blank" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              HelpDesk
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"