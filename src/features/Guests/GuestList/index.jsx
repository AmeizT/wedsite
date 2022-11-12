import React from 'react'
import RsvpForm from '../RsvpForm'
import { IconContext } from 'react-icons'
import { MdCancel } from 'react-icons/md'
import { HiBadgeCheck } from 'react-icons/hi'
import { Button, Item, Table, THead, TableBody, TableRow, TableHead, TableData } from "../../../@fastor"

export default function GuestList({ guests, children }){
    const [guest, setGuest] = React.useState('')
    const [confirm, setConfirm] = React.useState(false)
    
    function Icon({ color, size, children }){
        return (
            <IconContext.Provider value={{ size: 24 || `${size}`, color: `${color}` }}>
                {children}
            </IconContext.Provider>)
    }

    function confirmGuest(id){
        guests.forEach((guest) => {
            if(id === guest._id){
                setGuest({ id: guest._id, name: `${guest.name} ${guest.surname}`})
                setConfirm(true)
            }
        })
    }

    return (
        <React.Fragment>
            <Item pv="center" line="base" space="var(--s10)">
                {children}
            </Item>
        
            <Table w="100%">
                <THead>
                    <TableRow bg="var(--snow20)" bgd="var(--dark60)">
                        <TableHead>
                            <Item view="BLK" ps="var(--s10)">#</Item>
                        </TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Last Name</TableHead>
                        <TableHead>Sitting</TableHead>
                        <TableHead>
                            <Icon color="var(--dark40)" size="16"><HiBadgeCheck /></Icon>
                        </TableHead>
                    </TableRow>
                </THead>

                <TableBody>
                    {guests.map((guest, i) => (
                        <TableRow key={guest._id} bg="var(--snow20)" bgd="var(--dark60)">
                            <TableData variant={7}>
                                <Item ps="var(--s10)" variant={7}>{i+1}</Item>
                            </TableData>
                            <TableData>{guest.name}</TableData>
                            <TableData>{guest.surname}</TableData>
                            <TableData>{guest.seat ? guest.seat : 'TBD'}</TableData>
                            <TableData>
                                {guest.rsvp === 'accept' ? 
                                    <Icon color="var(--sagebrush)">
                                        <HiBadgeCheck />
                                    </Icon> :

                                guest.rsvp === 'decline' ?
                                    <Icon color="var(--firebrick)">
                                        <MdCancel />
                                    </Icon> :

                                    <Button view="block" space="0" onClick={() => confirmGuest(guest._id)}>
                                        <Icon color="var(--snow40)">
                                            <HiBadgeCheck />
                                        </Icon>
                                    </Button>
                                }
                            </TableData>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {confirm && 
            <RsvpForm 
            guest={guest} 
            confirm={confirm} 
            setConfirm={setConfirm} />}
        </React.Fragment>
    )
}