/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
 var awesomeThoughts="I am Ashish and I am AWESOME" 
 console.log(awesomeThoughts)
 var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
 $("#main").append(funThoughts);
 console.log(funThoughts);
 var formatedName = HTMLheaderName.replace("%data%","Golya");
 var role = "Web Developer";
 var formatedRole = HTMLheaderRole.replace("%data%",role);
 
 $("#header").prepend(formatedRole);
 $("#header").prepend(formatedName);
 var skill= ["java" , "c" ,"js"];
 var bio = {"name":"Ashish",
			"role": "Web Developer",
			"age" : 27,
			"skills": skill,
			"Message": "Welcome"
 };
  $("#header").append(bio);
 