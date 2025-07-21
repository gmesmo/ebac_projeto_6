export type DishesType = {
  id: number
  name: string
  description: string
  image: string
}

class Restaurant {
  id: number
  name: string
  image: string
  destaque?: boolean
  rating: number
  cuisine: string
  description: string[]
  link: string
  dishes?: DishesType[]

  constructor(restaurant: Restaurant) {
    this.id = restaurant.id
    this.name = restaurant.name
    this.image = restaurant.image
    this.destaque = restaurant.destaque
    this.rating = restaurant.rating
    this.cuisine = restaurant.cuisine
    this.description = restaurant.description
    this.link = restaurant.link
    this.dishes = restaurant.dishes
  }
}

export default Restaurant
