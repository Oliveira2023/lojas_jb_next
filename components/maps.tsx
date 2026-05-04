import { GoogleMapsEmbed } from "@next/third-parties/google"

export default function Maps({ local, width, mapsApi }: any) {
  if (!mapsApi) {
    return (
      <div className="flex h-full min-h-[323px] w-full items-center justify-center bg-slate-100 text-sm text-slate-500">
        Mapa indisponível no momento.
      </div>
    );
  }

  return (
    <GoogleMapsEmbed
      apiKey={mapsApi}
      height={width}
      width={width}
      mode="place"
      q={local}
    />
  )
}
