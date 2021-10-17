import { useState } from 'react'
import { Button } from './styles/Button.styled'
import { StyledCard } from './styles/Card.styled'

export default function Card({ item: { id, title, body, languages, image, url } }) {
    const [width, setWidth] = useState('80%')
    return (
        <StyledCard layout={id % 2 === 0 && 'row-reverse'}
            width={width}
            onMouseOver={() => {
                setWidth('100%')
            }}
        >
            <div>
                <h2><a href={url} target='_blank' title={url}>{title}</a></h2>
                <p>{body}<br />
                    <span>{languages}</span>
                </p>
                <Button><a href={url} target='_blank' title={url}>Watch a Demo</a></Button>
            </div>

            <div>
                <img src={`${image}`} alt='' />
            </div>
        </StyledCard>
    )
}
