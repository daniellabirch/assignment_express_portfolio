var projects = [];

function newProject(name,technologies,link,image){
	var thisProject = {
		create:function(name,technologies,link,image){
					this.name = name;
					this.technologies = technologies;
					this.link = link;
					this.image = image;
				}
	};
	projects.push(thisProject);
}