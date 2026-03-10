import Image from "next/image";
import styles from "@/components/banner.module.css"

export default function Banner(){
    return (
        <div>
            <div className={styles.banner}>
                <Image src={'/img/cover.jpg'} 
                    alt='cover' 
                    fill={true}
                    priority
                    objectFit='cover'  
                />
                <div className={styles.bannerText}>
                    <h1>where every event finds its venue</h1>
                    <h3>Finding the perfect venue has never been easier. Whether it's a wedding, corporate event, or private party, we're connecting people to the perfect place.</h3>
                </div>
            </div>
            
        </div>
    );
}