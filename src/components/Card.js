import * as React from "react"
import CardContent from "./CardContent"
import { Link } from "gatsby"

let topLevelVars = "group items-center last:mb-20 max-w-6xl m-6 mt-16 p-6 dynamic-card"

export default function Card(props) {
    return (
        <Link to={props.href} id="no-link">
            <div className={topLevelVars}>
                <div className={props.video ? "pl-1" : ""}>
                    <CardContent 
                        cardTitle={props.cardTitle}
                        cardSubTitle={props.cardSubTitle} 
                        cardDate={props.cardDate}
                        cardData={props.cardData} 
                        skill={props.skill}
                        href={props.href}
                        video={props.video}
                    />                    
                </div>

                <div className={props.video ? "pt-4" : ""}>
                    <div 
                        dangerouslySetInnerHTML={{ __html: props.video}}
                    />
                </div>
            </div>
        </Link>
    )
}