import React from 'react';
import { ItemDataType } from "@/lib/definitations";
import Image from "next/image";
import Item from "@/app/Items/item";
import {CardDescription, CardTitle} from "@/components/ui/card";

const Page = async ({ params }: { params: { id: string } }) => {
    const { id } = await params; // Await the params object
    // Fetch the item data
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
        throw new Error("Failed to fetch item");
    }
    const item: ItemDataType = await response.json();
    const fetchAllRelatedItems = await fetch(`https://fakestoreapi.com/products/category/${item.category}`);
    if (!fetchAllRelatedItems.ok) {
        throw new Error("Failed to fetch item");
    }
    const relatedItems: ItemDataType[] = await fetchAllRelatedItems.json();

    return (
        <div className={"p-10"}>
            <section className={"flex gap-10 items-center justify-center flex-wrap"}>
                <div>
                    <Image src={item.image} alt={item.title} height={400} width={400}/>
                </div>
                <div className={"w-[400px] relative"}>
                    <p>{item.category}</p>
                    <p className={"absolute top-0 right-0 italic sm:block"}>{item.rating.rate} / {item.rating.count}</p>
                    <h1 className={"sub-heading"}>{item.title}</h1>
                    <CardDescription>{item.description}</CardDescription>
                    <CardTitle className={"mt-5"}>Price: ${item.price}</CardTitle>
                </div>
            </section>
            <section>
                <p className={"heading !mt-10"}>More from {item.category}</p>
            <div className={"flex flex-wrap gap-5"}>
                {relatedItems.map((item: ItemDataType, index: number) => (
                    <Item
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        category={item.category}
                        description={item.description}
                        image={item.image}
                        rating={item.rating}
                        key={item.id}
                    >
                    </Item>
                ))}
            </div>
            </section>

        </div>

    )
        ;
};

export default Page;
