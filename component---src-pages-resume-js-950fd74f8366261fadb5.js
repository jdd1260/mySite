webpackJsonp([0x8eb291567e75],{109:function(e,a){},76:function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}a.__esModule=!0;var n=t(1),u=l(n),r=t(77),s=l(r),c=t(81),d=l(c),o=t(79),i=l(o),m=function(){return u.default.createElement("section",{id:"resume"},u.default.createElement(d.default,null),u.default.createElement(s.default,null),u.default.createElement(i.default,null))};a.default=m,e.exports=a.default},77:function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}a.__esModule=!0;var n=t(1),u=l(n),r=t(78),s=l(r),c=function(){return u.default.createElement("div",{className:"row education"},u.default.createElement("div",{className:"resume-left columns header-col"},u.default.createElement("h1",null,u.default.createElement("span",null,"Education"))),u.default.createElement("div",{className:"resume-right columns main-col"},s.default.map(function(e){return u.default.createElement("div",{className:"row item",key:e.name},u.default.createElement("div",{className:"twelve columns"},u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"eight columns"},u.default.createElement("h4",null,e.name)),u.default.createElement("div",{className:"four columns text-right"},u.default.createElement("h5",null," ",e.location," "))),u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"seven columns"},e.degree),u.default.createElement("div",{className:"five columns text-right"},e.date)),u.default.createElement("ul",{className:"bulleted"},e.items.map(function(e,a){return u.default.createElement("li",{key:a},e)}))))})))};a.default=c,e.exports=a.default},78:function(e,a){"use strict";a.__esModule=!0;var t=[{name:"University of Illinois",location:"Urbana, IL",degree:"Master of Computer Science - Data Science",date:"Expected May 2020",items:["GPA: 3.90"]},{name:"Pomona College",location:"Claremont, CA",degree:"Bachelor of Arts, Computer Science",date:"May 2012",items:["Minor: Mathematics","Thesis: Updatable Learning of Support Vector Machines","3 Years as a Computer Science T.A."]}];a.default=t,e.exports=a.default},221:function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}a.__esModule=!0;var n=t(1),u=l(n),r=t(222),s=l(r),c=function(){return u.default.createElement("div",{id:"resume-header"},u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"twelve columns text-center"},u.default.createElement("div",{className:"title"},s.default.name),s.default.title," ",u.default.createElement("br",null),s.default.location," ",u.default.createElement("br",null),u.default.createElement("a",{href:s.default.website}," ",s.default.website," "))))};a.default=c,e.exports=a.default},222:function(e,a){"use strict";a.__esModule=!0;var t={name:"Joel Detweiler",title:"Full-Stack Software Engineer",location:"Tacoma, WA",website:"https://jdd1260.github.io/"};a.default=t,e.exports=a.default},79:function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}a.__esModule=!0;var n=t(1),u=l(n),r=t(80),s=function(){return u.default.createElement("div",{className:"row skill"},u.default.createElement("div",{className:"resume-left columns header-col"},u.default.createElement("h1",null,u.default.createElement("span",null,"Skills"))),u.default.createElement("div",{className:"resume-right columns main-col"},r.intro,u.default.createElement("div",{className:"bars"},u.default.createElement("ul",{className:"skills"},r.skills.map(function(e){return u.default.createElement("li",{key:e.name},u.default.createElement("span",{className:"bar-expand",style:{width:e.value+"%"}}),u.default.createElement("em",null,e.name))})))))};a.default=s,e.exports=a.default},80:function(e,a){"use strict";a.__esModule=!0;a.skills=[{name:"JavaScript/ES6",value:99},{name:"PostgreSQL",value:95},{name:"REST APIs",value:95},{name:"React",value:95},{name:"Project Management",value:90},{name:"Managing Developers",value:85},{name:"MongoDB",value:80},{name:"Machine Learning",value:75},{name:"AWS",value:75},{name:"Java",value:75},{name:"Scala",value:75},{name:"Sass",value:70},{name:"Tableau",value:60},{name:"d3.js",value:50}],a.intro="My skills are focused around full-stack web development: front and back end development, databases, css, and basic DevOps. I am experienced as the lead developer on new projects, where I have coordinated efforts and made big technical decisions. I am a flexible developer and passionate about staying up to date on new technologies and frameworks, seeking always to keep projects performant and maintainable."},81:function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}a.__esModule=!0;var n=t(1),u=l(n),r=t(82),s=l(r),c=function(){return u.default.createElement("div",{className:"row work"},u.default.createElement("div",{className:"resume-left columns header-col"},u.default.createElement("h1",null,u.default.createElement("span",null,"Work"))),u.default.createElement("div",{className:"resume-right columns main-col"},s.default.map(function(e){return u.default.createElement("div",{className:"row item",key:e.company},u.default.createElement("div",{className:"twelve columns"},u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"eight columns"},u.default.createElement("h4",null,e.company)),u.default.createElement("div",{className:"four columns text-right"},u.default.createElement("h5",null," ",e.location," "))),u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"seven columns"},e.title),u.default.createElement("div",{className:"five columns text-right"},e.dates)),u.default.createElement("ul",{className:"bulleted"},e.items.map(function(e,a){return u.default.createElement("li",{key:a},e)}))))})))};a.default=c,e.exports=a.default},82:function(e,a){"use strict";a.__esModule=!0;var t=[{company:"iFit",location:"Remote",dates:"September 2017 - Present",title:"Senior JavaScript Developer and Chapter Lead",items:["Developed microservices for AWS Lambda using Typescript.","Built a real-time big data product using PostgreSQL.","Used React and Redux for front end development.","Team's lead developer.","Managed 5 full-stack developers."]},{company:"Motion Math",location:"San Francisco, CA",dates:"February 2015 - December 2016",title:"Full-Stack Developer",items:["Ownership over all front end development of company site using AngularJS and AWS.","Developed REST APIs using Scala, MongoDB, and PostgreSQL.","Managed collection and display of key company analytics.","Managed summer interns."]},{company:"Veeva Systems",location:"Pleasanton, CA",dates:"August 2012 - February 2015",title:"Associate Software Engineer",items:["Developed rich client-side UIs using JavaScript, jQuery, and AngularJS.","Built a complex back end and RESTful APIs in Java.","Integrated all work with the Salesforce data platform."]},{company:"Lawrence Livermore National Laboratory",location:"Livermore, CA",dates:"May 2010 - August 2010",title:"Student Intern",items:["Performed original Machine Learning research with applications to computer security.","Used Markov Chains and Hidden Markov Models for anomaly detection."]}];a.default=t,e.exports=a.default},228:function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}a.__esModule=!0;var n=t(1),u=l(n);t(109);var r=t(221),s=l(r),c=t(76),d=l(c),o=function(){return u.default.createElement("div",null,u.default.createElement(s.default,null),u.default.createElement(d.default,null))};a.default=o,e.exports=a.default}});
//# sourceMappingURL=component---src-pages-resume-js-950fd74f8366261fadb5.js.map