import React from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api"
import { formatRelative } from "data-fns";



import "@reach/combobox/styles.css";

export default function Map() {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ["places"]
    })
}
