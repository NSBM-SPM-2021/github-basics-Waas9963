import { environment } from 'src/environments/environment'

export const baseUrl = environment.production? 'http://localhost:4200/' :'http://localhost:3000'
export const productsUrl=baseUrl + '/products'
export const cartUrl=baseUrl + '/cart'
export const wishlistUrl= baseUrl +'/wishlist'