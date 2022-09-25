import { Box, Button, Grid, Stack, Typography, List, ListItem, ListItemText, ListItemIcon, Radio, RadioGroup, ListItemButton, Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import { ExpandMore } from '@mui/icons-material'

import React from "react"
import ReactMarkdown from 'react-markdown'
import { isPropertySignature } from "typescript"

const pageStyles = {
    color: "#232129",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    width: "100%",
    height: "100%"
}

const containerStyles = {
    maxWidth: "1000px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#DDD",
    borderRadius: "5px"
}

const Course = (props: any) => {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
                <div>
                    <h3>{props.course.title}</h3>
                    <ReactMarkdown components={{ h1: 'h2', h2: 'h3', h3: 'h4' }} children={props.course.description} />
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <form>
                    <List>
                        <RadioGroup>
                            {props.course.dates.map((x: any) => {
                                const id = "course" + props.course.id + "date" + x.startDate
                                let radio = <Radio name={"course" + props.course.id} id={id} value={x.startDate} />
                                return <ListItem >
                                    <ListItemIcon>
                                        {radio}
                                    </ListItemIcon>
                                    <label htmlFor={id}>
                                        <ListItemText id={"courseHeader" + props.course.id} primary={"Kursstart " + x.startDate} secondary={"Datum 2022-09-10"} />
                                    </label>
                                </ListItem>
                            })}
                        </RadioGroup>
                    </List>
                    <Button variant={"outlined"} >
                        Boka
                    </Button>
                </form>
            </AccordionDetails>
        </Accordion>
    )
}

const Intro = (props: any) => {
    return (<section>
        <ReactMarkdown components={{ h1: 'h2', h2: 'h3', h3: 'h4' }} children={props.intro} />
    </section>)
}

const intro = `
# För vem?

Våra kurser är både för dig som redan gillar att jobba med händerna och för dig som vill testa på något nytt.

Inga förkunskaper krävs. Grupperna är små med max 5 deltagare så att alla kan få individuell handledning efter sina behov. Nybörjare och mer erfarna är lika välkomna och grupperna blandas för en bra dynamik.

# Innehåll

Vi introducerar dig i hantverket och du lär dig använda olika verktyg och maskiner samt grundläggande arbetsmetoder.

Du gör smycken efter egen design men vi hjälper dig självklart genom att bolla idéer och lösningar. Om du är nybörjare rekommenderar vi att du gör en enklare ring som ditt första projekt. Efter kursanmälan får du en lathund som beskriver arbetsprocessen steg för steg.
# Material

Alla verktyg och material ingår i kursavgiften förutom silvermaterialet som köps på plats för 18 kr/gram. Vi använder återvunnet 925 sterling silver. En enkel ring kostar cirka 40-90 kr i material. Om du har egen silverplåt eller silvertråd kan du ta med det.
# Bra att veta

I kursavgiften ingår också te, kaffe och ostsmörgås. Meddela oss om allergier eller kostpreferenser. Det finns ett kök med mikro och kylskåp som du kan använda tisdagar från kl 17.30 och söndagar under hela kurstiden.
`

const courses = [
    {
        title: "Kvällskurser",
        id: "1",
        description: `
Kvällskurserna hålls tre åt gången och hela gruppen följs åt. 
`,
        selection: "one",
        dates: [
            { startDate: "2022-09-01" },
            { startDate: "2022-09-07" }
        ]
    },
    {
        title: "Söndagskurser",
        id: "2",
        selection: "many",
        description: "En heldag i vår ateljé, ",
        dates: [
            { startDate: "2022-09-04" },
            { startDate: "2022-09-09" }
        ]
    },
    {
        title: "Specialkurser",
        id: "3",
        selection: "one",
        description: "",
        dates: [
            { startDate: "2022-09-09" },
            { startDate: "2022-09-10" }
        ]
    }
]

export { Page }

function Page() {
    return (
        <>
            <Stack>
                <Box>
                    <Intro intro={intro} />
                </Box>
                <Box>
                    {courses.map(x => <Course course={x} />)}
                </Box>
            </Stack>
        </>
    )
}
