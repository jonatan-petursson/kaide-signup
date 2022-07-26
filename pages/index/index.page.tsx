import { Box, Button, Stack, List, ListItem, ListItemText, ListItemIcon, Radio, RadioGroup, Accordion, AccordionDetails, AccordionSummary, Chip } from "@mui/material"
import { ExpandMore } from '@mui/icons-material'

import React from "react"
import ReactMarkdown from 'react-markdown'
import moment from "moment"

const Courses = ({ courses }: { courses: any }) => {
    return <>
        {courses.map((x: any) => <Course key={x.id} course={x} />)}
    </>
}

const Course = ({ course }: { course: any }) => {
    return <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
            <Box>
                <h3>{course.title}</h3>
                <ReactMarkdown components={{ h1: 'h2', h2: 'h3', h3: 'h4' }} children={course.description} />
            </Box>
        </AccordionSummary>
        <AccordionDetails>
            <form>
                <Sessions course={course}></Sessions>
                <Box>
                    <Button variant={"outlined"} >
                        Bokad
                    </Button>
                </Box>
            </form>
        </AccordionDetails>
    </Accordion>
}

const Sessions = ({ course }: { course: any }) => {
    return <List>
        <RadioGroup>
            {course.sessions.map((session: any) => <Session key={course.id + session.startDate} course={course} session={session} />)}
        </RadioGroup>
    </List>
}

const Session = ({ course, session }: { course: any, session: any }) => {
    const id = "course" + course.id + "date" + session.startDate
    let radio = <Radio name={"course" + course.id} id={id} value={session.startDate} />
    let dateList = <Stack direction="row" spacing={1}>
        {session.classes.map((d: any) => <Chip variant="outlined" size="small" key={id + d} label={moment(d).format("DD MMM")} />)}
    </Stack>

    return <ListItem>
        <ListItemIcon>
            {radio}
        </ListItemIcon>
        <label htmlFor={id}>
            <ListItemText
                id={"courseHeader" + course.id}
                primary={session.name + " " + moment(session.startDate).format("D. MMMM")} />
            {dateList}
        </label>
    </ListItem>


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
        sessions: [
            { name: "Nybörjarkurs", startDate: "2022-09-01", classes: ["2022-09-01", "2022-09-07", "2022-09-14"] },
            { name: "Nybörjarkurs", startDate: "2022-09-07", classes: ["2022-09-01", "2022-09-07", "2022-09-14"] }
        ]
    },
    {
        title: "Söndagskurser",
        id: "2",
        selection: "many",
        description: "En heldag i vår ateljé, färdigställ ett enklare smycke eller jobba på egna projekt",
        sessions: [
            { name: "Nybörjarkurs", startDate: "2022-09-04", classes: ["2022-09-01", "2022-09-07", "2022-09-14"] },
            { name: "Nybörjarkurs", startDate: "2022-09-09", classes: ["2022-09-01", "2022-09-07", "2022-09-14"] }
        ]
    },
    {
        title: "Specialkurser",
        id: "3",
        selection: "one",
        description: "Lär dig nya tekniker och experimentera med oss!",
        sessions: [
            { name: "Watercasting", startDate: "2022-09-09", classes: ["2022-09-01", "2022-09-07", "2022-09-14"] },
            { name: "Nybörjarkurs", startDate: "2022-09-10", classes: ["2022-09-01", "2022-09-07", "2022-09-14"] }
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
                    <Courses courses={courses}></Courses>
                </Box>
            </Stack>
        </>
    )
}
