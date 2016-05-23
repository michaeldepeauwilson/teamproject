var times_feed,
	subSections = [],
	stories = [];

function getNYTimes(cb){
	var url = "https://api.nytimes.com/svc/topstories/v2/world.json";
	url += '?' + $.param({'api-key': "4a4a769ce48a48aea15a51f049d59e30"}); // Built by LucyBot. www.lucybot.com

	$.getJSON(url, function(feed){
		times_feed = feed;
	}).done(cb);
}

function getSubSections(){
	_.each(times_feed.results, function(story){
		console.log(story.subsection);
		if(subSections.indexOf(story.subsection) == -1 && story.subsection != ""){
			subSections.push(story.subsection);
		}
	});
}

function buildDropdown(){
	_.each(subSections, function(subsection){
		$("#subsections").append("<option value='" + subsection + "'>" + subsection + "</option>");
	});
}

function getBySubsection(subsection){
	stories = _.filter(times_feed.results, function(story){
		return story.subsection === subsection;
	});

	showStoryList(stories);
}

function showStoryList(stories){
	var html = [];

	_.each(stories, function(story){
		html.push("<li><a href='" + story.url + "'>" + story.title + "</a><p>" + story.abstract + "</p></li>");
	});

	$("#story-list").html(html.join(""));
}


$(document).ready(function(){
	//get the data
	getNYTimes(function(){
		getSubSections();
		buildDropdown();
	});
});