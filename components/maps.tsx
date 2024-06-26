
import { GoogleMapsEmbed } from "@next/third-parties/google"

export default function Maps({local, width}: any) {
    const apiKey = process.env.MapsApi ?? 'AIzaSyD310CkG0wT9mqQgjapyhsnBDA4QycESjM'
    // o problema aqui é que este componente é client side, pra poder usar a chave de api corretamente tenho que tornar server side.
    console.log(apiKey)
    return (
        <GoogleMapsEmbed
        apiKey={apiKey}
        height={width}
        width={width}
        mode="place"
        q={local}
        />
    )
        
 
}