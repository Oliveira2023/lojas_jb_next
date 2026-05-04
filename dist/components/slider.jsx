import { images } from "../utils/heroslide";
import Image from "next/image";
export default function Slider() {
    return (<>
            
            {images.map((image, index) => (<div key={image.Id} className="w-full">
                    <Image src={image.src} width={1280} height={844} alt={image.alt} priority={false}/>
                </div>))}
            {/* <Descriptions /> */}
        </>);
}
