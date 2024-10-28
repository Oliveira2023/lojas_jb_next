import { GoogleMapsEmbed } from "@next/third-parties/google"


export default function Maps({local, width, mapsApi}: any) {
    const apiKey = mapsApi;
    return (
        <GoogleMapsEmbed
        apiKey={apiKey ?? 'defaultApiKey'}
        height={width}
        width={width}
        mode="place"
        q={local}
        />
    )
        
 
}