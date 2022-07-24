import * as React from "react"

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
            {props.course.description}
        </div>
    )
}

const courses = [
    {
        title: "Nybörjarkurs", 
        description: "A"
    },
    {
        title: "Avancerad kurs", 
        description: "B"},
    {
        title: "Watercasting", 
        description: "C"
    }
]

const IndexPage = () => {
    return (
        <main style={pageStyles}>
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
        </main>

    )
}

export default IndexPage