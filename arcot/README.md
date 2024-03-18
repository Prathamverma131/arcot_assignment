# arcot_assignment

# Setup_Instructions

1. Clone the repository from "https://github.com/Prathamverma131/arcot_assignment"
2. After cloning go to arcot directory through cd arcot in cmd
3. Run npm install to download all the package (if some are missing , it will check from package.json file) from cmd.
4. After installing run npm start to run the application.


# Brief_of_the_application

1. As the application start , In the componentDidMount event called the mock API and from there extracted the data from json object and stored desired values in state hook.

2. In the second step created 3 components and passed the extracted data to them through props. And covered them inside ordered list.

3. Three charts i.e Bar, Line and Pie were create inside components. First installed chart.js package from npm (Node Package Manager) then extract required chart from it.

4. For each component first created a clean-up function to check if old chart exist, if yes then delete the old one and then create a new one.

5. At last eextracted x-axis data and y-axis data from the props and then rendered it inside the Chart configurating along with background-color and responsiveness.

# Walkthrough of project

Link:- https://vimeo.com/924746718/f860bcfc71?share=copy
