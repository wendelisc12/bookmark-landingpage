module.exports = (grunt)=>{

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        sass:{
            dev:{
                files:{"src/styles/style.css" : "src/styles/style.scss"}
            }
        },
        
        watch:{
            sass:{
                files:["src/styles/**/*.scss"],
                tasks:["sass"]
            }
        }
    })

    grunt.loadNpmTasks("grunt-contrib-sass")
    grunt.loadNpmTasks("grunt-contrib-watch")
}