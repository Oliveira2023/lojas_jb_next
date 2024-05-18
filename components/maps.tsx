import { GoogleMapsEmbed } from "@next/third-parties/google"
// import '../envConfig'
export default function Mapas ({local}: any) {
    console.log({process: process.env.MapsApi})
    return (
        <GoogleMapsEmbed
        apiKey="AIzaSyD310CkG0wT9mqQgjapyhsnBDA4QycESjM"
        height={400}
        width={400}
        mode="place"
        q={local}
        />
    )
        
 
}