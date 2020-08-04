import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import axios from 'axios'

export class Map extends Component {
    constructor(props) {
        super(props)
        this.state={
            lat: this.props.latitude,
            lng: this.props.longitude,
        }
    }

    render() {

        console.log("Render")

        const center = {
            lat: this.state.lat,
            lng: this.state.lng
        }

        const zoom = 14

        const getMapOptions = (maps) => {
            return {
                disableDefaultUI: false,
                mapTypeControl: true,
                streetViewControl: true,
                styles: [{ featureType: 'poi', 
                    elementType: 'labels', 
                    stylers: [{ visibility: 'on' }] }],
                }
        }

        const renderMarkers = (map, maps) => {

            const position = {
                lat: this.state.lat,
                lng: this.state.lng
            }

            let marker = new maps.Marker({
                position: position,
                map,
                title: this.state.direccion})
        }



        return (
            <div className="mapa" style={{height:"200px",width:"300px"}}>
                <GoogleMapReact 
                    key={this.state.direccion}
                    bootstrapURLKeys={ { key: GOOGLE_API_KEY} }
                    defaultCenter={center}
                    defaultZoom={zoom}
                    options={getMapOptions}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}

                />
            </div>
        )
    }
}

export default Map
