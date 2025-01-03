import Link from "next/link"
import { Button } from "../ui/button"
import HeroCarousel from "./HeroCarousel"

const HeroContainer = () => {
    return (
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <h1 className="max-w-2xl font-bold text-4xl tracking-tighter sm:text-6xl">
            We are changing the way people shop
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          </p>
          <Button size='lg' className="mt-10" asChild>
            <Link href="/products">Our Products</Link>
          </Button>
        </div>
        
        <HeroCarousel />
      </section>
    )
  }
  
export default HeroContainer