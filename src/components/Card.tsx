import Image from "next/image";
import styles from "@/components/card.module.css"

export default function Card(){
    return (
        <div className={styles.card}>
            <div className={styles.cardImg}>
                <Image src={"/img/party-place-1.jpg"} 
                    alt="party-place"
                    fill={true}
                    objectFit="cover"
                />
            </div>
            <div className={styles.cardText}>
                <h1>Grand Crystal Ballroom</h1>
                <p>
                    "The Crystal Ballroom"
                    Our crown jewel — a breathtaking ballroom featuring cascading crystal chandeliers, 
                    warm golden lighting, and regal décor. 
                    Designed for weddings, corporate galas, 
                    and milestone celebrations in the grandest style. 
                    Seats 200+ guests 
                </p>
            </div>
        </div>
    );
}