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
    width: "100%"
    display: "flex"
}

const courseHead = {
    
}

const IndexPage = () => {
    return (
        <main style={pageStyles}>
            <div style={containerStyles}>
                <title>Kaide course signup</title>
                <h1>Kaide courses</h1>    
                <div style={courseSelector}>
                    <div style={courseHead}>
                        Nybörjare
                    </div>
                    <div style={courseHead}>
                        Avancerat
                    </div>
                    <div style={courseHead}>
                        Watercasting
                    </div>
                </div>
                <div>
                    <div style={courseBody} className="course-body">

                    </div>
                    <div style={courseBody} className="course-body">

                    </div>
                    <div style={courseBody} className="course-body">

                    </div>
                </div>
            </div>
        </main>

    )
}

export default IndexPage