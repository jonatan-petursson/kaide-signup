import React from "react"
import ReactMarkdown from 'react-markdown'

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

const courseSelector = {
    width: "100%",
    display: "grid",
    background: "#999",
    gridAutoColumns: "minmax(0, 1fr)",
    gridAutoFlow: "column"
}

const CourseHead = (props: any) => {
    const courseHead = {
        background:"#CCC",
        padding: "10px"
    }

    return (
        <div style={{padding: "10px"}}>
            <div style={courseHead} id={"course-head-"+props.course.id}>
                <div style={{background: "#FFF", aspectRatio:"1/1", borderRadius:"100%"}}>

                </div>
                <h2 style={{fontSize:"90%", textAlign:"center", marginBottom:"10px"}}>{props.course.title}</h2>
            </div>
        </div>
    )
}

const CourseBody = (props: any) => {
    const courseBody = {

    }

    return (
        <div style={courseBody} id={"course-body-"+props.course.id}>
            <ReactMarkdown components={{h1: 'h2', h2: 'h3', h3: 'h4'}} children={props.course.description} />
        </div>
    )
}

const courses = [
    {
        title: "Kvällskurser", 
        description: `
# Nybörjarkurs i silversmide
Test

## Innehåll
Vi introducerar dig i hantverket och du lär dig använda olika verktyg och maskiner samt grundläggande arbetsmetoder.

Du gör smycken efter egen design men vi hjälper dig självklart genom att bolla idéer och lösningar. Om du är nybörjare rekommenderar vi att du gör en enklare ring som ditt första projekt. Efter kursanmälan får du en lathund som beskriver arbetsprocessen steg för steg.
`,
        dates: [
            "2022-09-01",
            "2022-09-07"
        ]
    },
    {
        title: "Söndagskurser", 
        description: "B"
    },
    {
        title: "Specialkurser", 
        description: "C"
    }
]

export { Page }

function Page(){
    return (
        <>
            <div style={containerStyles}>
                <title>Kaide course signup</title>
                <h1>Kaide courses</h1>    
                <div style={courseSelector}>
                    {courses.map(x => <CourseHead course={x} />)}
                </div>
                <div>
                    {courses.map(x => <CourseBody course={x} />)}
                </div>
            </div>
        </>

    )
}
