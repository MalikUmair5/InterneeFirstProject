import {ItemDataType} from "@/lib/definitations"
import Item from "@/app/Items/item";

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
                {itemsData && itemsData.map((item) => (
                    <Item
                        key={item.id}
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
