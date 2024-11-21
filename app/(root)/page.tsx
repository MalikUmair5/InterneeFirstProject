import Image from "next/image";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {ItemDataType} from "@/lib/definitations"
import Link from "next/link";
import {Copyright, ShoppingCartIcon} from "lucide-react";
import Item from "@/app/Items/item";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default async function Home() {
   let itemsData: ItemDataType[] = [];
    await fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>itemsData = json)
    console.log(itemsData);
    return (
        <>

            <section >
                <h1 className={"heading"}>List of Products</h1>
                <div className={"flex justify-center flex-wrap gap-5"}>
                {itemsData && itemsData.map((item, index) => (
                    <Item
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        category={item.category}
                        description={item.description}
                        image={item.image}
                        rating={item.rating}>
                    </Item>
                ))
                }
                </div>

            </section>


        </>

    );
}
