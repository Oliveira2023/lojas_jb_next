import { GoogleMapsEmbed } from "@next/third-parties/google"
export default function Mapas ({local}: any) {
    return (
        <GoogleMapsEmbed
        apiKey="AIzaSyCeR9iZGZDm1SZ56wC85Htlp5pdQV5gk1M"
        height={400}
        width={400}
        mode="place"
        q={local}
        />
    )
        
 
}