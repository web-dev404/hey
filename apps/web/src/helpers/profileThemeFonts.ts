import {
  Archivo,
  Archivo_Narrow,
  Arimo,
  BioRhyme,
  Eczar,
  Gaegu,
  IBM_Plex_Mono,
  IBM_Plex_Serif,
  Inconsolata,
  Inter,
  Inter_Tight,
  Karla,
  Libre_Baskerville,
  Nunito,
  Playfair_Display,
  Poppins,
  Red_Rose,
  Rubik,
  Space_Grotesk,
  Space_Mono,
  Spline_Sans,
  Spline_Sans_Mono,
  Work_Sans
} from "next/font/google";

export enum Font {
  Archivo = "archivo",
  ArchivoNarrow = "archivoNarrow",
  Arimo = "arimo",
  Poppins = "poppins",
  Nunito = "nunito",
  WorkSans = "workSans",
  SplineSansMono = "splineSansMono",
  SplineSans = "splineSans",
  SpaceMono = "spaceMono",
  SpaceGrotesk = "spaceGrotesk",
  Rubik = "rubik",
  RedRose = "redRose",
  PlayfairDisplay = "playfairDisplay",
  Karla = "karla",
  LibreBaskerville = "libreBaskerville",
  Inter = "inter",
  InterTight = "interTight",
  Inconsolata = "inconsolata",
  IBMPlexSerif = "ibmPlexSerif",
  IBMPlexMono = "ibmPlexMono",
  Gaegu = "gaegu",
  Eczar = "eczar",
  BioRhyme = "bioRhyme"
}

const archivo = Archivo({ subsets: ["latin"], weight: ["400", "700"] });
const archivoNarrow = Archivo_Narrow({
  subsets: ["latin"],
  weight: ["400", "700"]
});
const arimo = Arimo({ subsets: ["latin"], weight: ["400", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700"] });
const workSans = Work_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const splineSansMono = Spline_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "700"]
});
const splineSans = Spline_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"]
});
const rubik = Rubik({ subsets: ["latin"], weight: ["400", "700"] });
const redRose = Red_Rose({ subsets: ["latin"], weight: ["400", "700"] });
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"]
});
const karla = Karla({ subsets: ["latin"], weight: ["400", "700"] });
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: "400"
});
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });
const interTight = Inter_Tight({ subsets: ["latin"], weight: ["400", "700"] });
const inconsolata = Inconsolata({ subsets: ["latin"], weight: ["400", "700"] });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"]
});
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"]
});
const gaegu = Gaegu({ subsets: ["latin"], weight: ["400", "700"] });
const eczar = Eczar({ subsets: ["latin"], weight: ["400", "700"] });
const bioRhyme = BioRhyme({ subsets: ["latin"], weight: ["400", "700"] });

const profileThemeFonts = (id: string | undefined): string => {
  if (!id) {
    return "";
  }

  switch (id) {
    case Font.Archivo:
      return archivo.className;
    case Font.ArchivoNarrow:
      return archivoNarrow.className;
    case Font.Arimo:
      return arimo.className;
    case Font.Poppins:
      return poppins.className;
    case Font.Nunito:
      return nunito.className;
    case Font.WorkSans:
      return workSans.className;
    case Font.SplineSansMono:
      return splineSansMono.className;
    case Font.SplineSans:
      return splineSans.className;
    case Font.SpaceMono:
      return spaceMono.className;
    case Font.SpaceGrotesk:
      return spaceGrotesk.className;
    case Font.Rubik:
      return rubik.className;
    case Font.RedRose:
      return redRose.className;
    case Font.PlayfairDisplay:
      return playfairDisplay.className;
    case Font.Karla:
      return karla.className;
    case Font.LibreBaskerville:
      return libreBaskerville.className;
    case Font.Inter:
      return inter.className;
    case Font.InterTight:
      return interTight.className;
    case Font.Inconsolata:
      return inconsolata.className;
    case Font.IBMPlexSerif:
      return ibmPlexSerif.className;
    case Font.IBMPlexMono:
      return ibmPlexMono.className;
    case Font.Gaegu:
      return gaegu.className;
    case Font.Eczar:
      return eczar.className;
    case Font.BioRhyme:
      return bioRhyme.className;
    default:
      return "";
  }
};

export default profileThemeFonts;
