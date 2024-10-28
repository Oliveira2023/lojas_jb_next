import { images } from "@utils/heroslide";
export default function Descriptions({ clickNext, clickPrev, activeImgIndex }) {
    return (<div className="text-center text-1xl w-full">
            <div>
                {images.map((image, index) => (<div className={index === activeImgIndex ? `border-2 block p-0 w-full` : `hidden`} style={{ height: '50px' }} key={image.Id}>
                        <div>{image.title}</div>
                        <div>{image.description}</div>
                    </div>))}
            </div>
        </div>);
}
