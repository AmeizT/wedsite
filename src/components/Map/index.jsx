import React from "react"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { Box, Button, Headtext, Icon, Segment } from "../../@fastor"

export default function VenueMap(){
    return (
        <Box $dir="vrt">
            <Segment>
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d243148.18740625578!2d31.02367862236401!3d-17.782745246637653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x1931a4ee1bdddb35%3A0xa5143b9be5134f2f!2sHarare%2C%20Zimbabwe!3m2!1d-17.8216288!2d31.0492259!4m5!1s0x1931c80e3d704933%3A0x663fc7728691ca5c!2sBlue%20Ridge%20Spar%2C%20779H%2BW8G%2C%20Zimbabwe!3m2!1d-17.7301762!2d31.278319099999997!5e0!3m2!1sen!2sbw!4v1660401427485!5m2!1sen!2sbw"
                width="100%"
                height="450"
                style={{ border: "0", borderRadius: "var(--s7)" }}
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Segment>
        </Box>
    )
}