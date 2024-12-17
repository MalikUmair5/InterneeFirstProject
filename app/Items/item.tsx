"use client"
import React from 'react'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import {ItemDataType} from "@/lib/definitations";
import {useRouter} from "next/navigation";



const Item = ({id, title, image }:ItemDataType) => {
    const router = useRouter();
    const handleClick = (id: number) =>{
        router.push(`/Items/${id}`);
    }

    return (
        <Card className={"w-[276px] cursor-pointer"} key={id} onClick={() => handleClick(id)}>
            <CardHeader>
                <Image className={"self-center w-auto h-[150px]"} src={image} alt={title} height={100} width={100} placeholder='blur'/>
            </CardHeader>
            <CardContent>
                <CardTitle>{title}</CardTitle>
            </CardContent>
        </Card>
    )
}
export default Item
