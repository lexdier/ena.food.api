import {Module} from '@nestjs/common';
import {AppService} from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import {UserSchema} from "./entities/user.entity";
import {ItemSchema} from "./entities/item.entity";
import {ShopSchema} from "./entities/shop.entity";
import {OrderSchema} from "./entities/order.entity";
import {UserRepository} from "./repositories/user.repository";
import {UserController} from "./controllers/user.controller";
import {ProductSchema} from "./entities/product.entity";
import {OrderController} from "./controllers/order.controller";
import {OrderRepository} from "./repositories/order.repository";
import {ProductController} from "./controllers/product.controller";
import {ProductRepository} from "./repositories/product.repository";
import {ShopController} from "./controllers/shop.controller";
import {ShopRepository} from "./repositories/shop.repository";
import {CartSchema} from "./entities/cart.entity";
import {CartController} from "./controllers/cart.controller";
import {CartRepository} from "./repositories/cart.repository";

@Module({
    imports: [
        MongooseModule.forRoot(
            'mongodb+srv://test:qqsUMu7gUfnDhMFD@enafood.a9omlgi.mongodb.net/'
        ),
        MongooseModule.forFeature([
            {name: 'users', schema: UserSchema},
            {name: 'items', schema: ItemSchema},
            {name: 'shops', schema: ShopSchema},
            {name: 'orders', schema: OrderSchema},
            {name: 'products', schema: ProductSchema},
            {name: 'carts', schema: CartSchema}
        ])
    ],
    controllers: [UserController, OrderController, ProductController, ShopController, CartController],
    providers: [AppService, UserRepository, OrderRepository, ProductRepository, ShopRepository, CartRepository],
})

export class AppModule {
}
