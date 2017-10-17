var bio = {
 	"name" : "John Doe",
 	"role" : "Developer",
 	"contacts" : {
 		"mobile" : "650-555-55555",
 		"email" : "john@example.com",
 		"github" : "johndoe",
 		"twitter": "@johndoe",
 		"location" : "San Francisco"
 	},
 	"biopic" : "images/fry.jpg",
 	"welcomeMessage" : "Eager to jump into a pool of talented people like Scrooge McDuck!!!",
 	"skills": ["programming", "awesome thinking", "algorithms", "saving the universe"]
 };

var work = {
	"jobs":[{
	 	"employer": "Planet Express",
	 	"title": "Delivery Boy",
	 	"dates": "Dec2014 - inprogress",
	 	"location": "Brooklyn, NY",
	 	"description": "Depending on the nature of the Ajax application, dynamic page updates may disrupt user interactions, particularly if the Internet connection is slow or unreliable. For example, editing a search field may trigger a query to the server for search completions, but the user may not know that a search completion popup is forthcoming, and if the Internet connection is slow, the popup list may show up at an inconvenient time, when the user has already proceeded to do something else."
 	},
 	{
	 	"employer": "Panuccis Pizza",
	 	"title": "Delivery Boy",
	 	"dates": "Aug,2013 - Dec,2014",
	 	"location": "Manhattan, NY",
	 	"description": "Depending on the nature of the Ajax application, dynamic page updates may disrupt user interactions, particularly if the Internet connection is slow or unreliable. For example, editing a search field may trigger a query to the server for search completions, but the user may not know that a search completion popup is forthcoming, and if the Internet connection is slow, the popup list may show up at an inconvenient time, when the user has already proceeded to do something else."
 	}
 ]};

var projects = {
 	"projects":[
 	{
  		"title":"Random Mapping",
  		"description": "Because of the asynchronous nature of Ajax, each chunk of data that is sent or received by the client occurs in a connection established specifically for that event. This creates a requirement that for every action, the client must poll the server, instead of listening, which incurs significant overhead. This overhead leads to several times higher latency with Ajax than what can be achieved with a technology such as websockets.",
  		"dates": "2013",
  		"images":["images/proj.gif"]
  	}
 	]
};

var education = {
	"schools": [{
		"name": "Nova South Eastern University",
		"degree": "Masters",
		"majors": ["CompSci"],
		"dates": "2011-2013", 
		"location": "Fort Lauderdale, FL"
	}, {
		"name": "Eckered College",
		"degree": "Bachelors",
		"majors": ["CompSci"],
		"dates": "2006-2010",
		"location": "Saint Petersburg,FL"
	}],
	"onlineCourses": [{
		"title": "Frontend Nano degree Program",
		"school": "Udacity",
		"dates": "2017",
		"url": "https://example.com"
	}]
};

bio.display = diaplayBioInfo;
 
work.display = function(){ 
	for(var i=0; i < work.jobs.length; i++){
		$("#workExperience").append(HTMLworkStart);
		displayWork(i);	
	}
};

projects.display = function(){
	for(var key=0; key<projects.projects.length; key++){		
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[key].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[key].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[key].description);
		var formattedprojectImage = HTMLprojectImage.replace("%data%",projects.projects[key].images);
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(formattedProjectTitle).append(formattedProjectDates)
			.append(formattedProjectDescription).append(formattedprojectImage)
			.append(formattedprojectImage);					
	}
};

bio.display();
work.display();
projects.display();
education.display = displayEducation;
education.display();




function diaplayBioInfo(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formatterRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedPicture = HTMLbioPic.replace("%data%",bio.biopic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

	var formattedContactEmail = HTMLcontactGeneric.replace("%data%", bio.contacts.mobile)
					.replace("%contact%","mobile");
	var formattedContacts = formattedContactEmail;	
	$("#header").prepend(formatterRole).prepend(formattedName)
	.append(formattedPicture).append(formattedWelcomeMsg);

	$("#topContacts").append(formattedMobile).append(formattedEmail)
		.append(formattedGithub).append(formattedTwitter)
		.append(formattedLocation);

	if(bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
		for( var i=0; i < bio.skills.length; i++){
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkills);
		}
	}		
	$("#main").append(internationalizeButton);
	$("#mapDiv").append(googleMap);
	$("#footerContacts").append(formattedMobile).append(formattedEmail)
		.append(formattedGithub).append(formattedTwitter)
		.append(formattedLocation);		
}

function displayWork(key){
	var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[key].employer);
	var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[key].title);
	var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[key].dates);
	var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[key].location);
	var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[key].description);
	var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
	$(".work-entry:last").append(formattedWorkEmployerTitle)
			.append(formattedWorkDates).append(formattedWorkLocation)
			.append(formattedWorkDescription);
}

function displayEducation(){
	var i;
	for(i=0; i < education.schools.length; i++){
		$("#education").append(HTMLschoolStart);
		displaySchool(i);		
	}

	for(i=0; i < education.onlineCourses.length; i++){
		$(".education-entry:last").append(HTMLonlineClasses);
		displayOnlineCourses(i);		
	}
}

function displaySchool(key){
	var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[key].name);
	var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[key].location);
	var formattedSchoolDates = HTMLprojectDates.replace("%data%",education.schools[key].dates);
	var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[key].majors);
	var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[key].degree);
	$(".education-entry:last").append(formattedSchoolName)
		.append(formattedSchoolLocation).append(formattedSchoolDates)
		.append(formattedSchoolMajor);
}

function displayOnlineCourses(key){
	var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[key].title);
	var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[key].school);
	var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[key].dates);
	var formattedOnlineUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[key].url);
	$(".education-entry:last").append(formattedOnlineTitle)
		.append(formattedOnlineSchool).append(formattedOnlineDates)
		.append(formattedOnlineUrl);
}

function inName(name){
	var names = name.trim().split(" ");
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return names[0] + " " + names[1].toUpperCase();
}