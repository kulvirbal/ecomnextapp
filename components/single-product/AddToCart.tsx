import Link from "next/link"
import { Button } from "../ui/button"

const AddToCart = ({productId}:{productId:string}) => {
  return (
    <Button className="capitalize mt-8" size='lg' asChild>
        <Link href={`/cart/add/${productId}`}>Add To Cart</Link>
    </Button>
  )
}

export default AddToCart