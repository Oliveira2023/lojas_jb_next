
import { GoogleMapsEmbed } from "@next/third-parties/google"

export default function Maps({local}: any) {
    const apiKey = 'AIzaSyD310CkG0wT9mqQgjapyhsnBDA4QycESjM';
    // const apiKey = process.env.MapsApi ?? 'AIzaSyD310CkG0wT9mqQgjapyhsnBDA4QycESjM'
    // o problema aqui é que este componente é client side, pra poder usar a chave de api corretamente tenho que tornar server side.

    return (
        <GoogleMapsEmbed
        apiKey={apiKey ?? 'defaultApiKey'}
        height={300}
        width={300}
        mode="place"
        q={local}
        />
    )
        
 
}