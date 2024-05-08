import { images } from "@utils/heroslide"
type Props ={
    clickNext: any,
    clickPrev: any,
    activeImgIndex: any
}
export default function Descriptions({clickNext, clickPrev, activeImgIndex}: Props) {
    return (
        <div className="text-center text-1xl w-full">
            <div>
                {images.map((image, index) => (
                    <div className={index === activeImgIndex ? `block bg-yellow-500 p-0 w-full`: `hidden`} key={image.Id}>
                        <div>{image.title}</div>
                        <div>{image.description}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}