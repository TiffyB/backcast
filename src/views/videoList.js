var VideoListView = Backbone.View.extend({
  el: '.list',
  initialize: function() {
    this.render();
  },

  render: function() { 
    // console.log(this.template());
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$('.video-list').children().detach();
    //console.log(window.exampleVideoData[0]);
    
    var videosArray = window.exampleVideoData.map(function(videoObj) {
      var video = new Video(videoObj);
      var videoListEntryView = new VideoListEntryView();
      return video;
    });
    var videos = new Videos(videosArray);
    console.log(videos.models[0].attributes.snippet.title);
    
    return this;
  },

  template: templateURL('src/templates/videoList.html')

}); 

//console.log(this.$el);
    
    // this.$el.find('.video-list').append(this.collection.map(function(video, index) {
    //   // console.log(video.template());
    //   var videoEntryView = new VideoListEntryView({model: video});
    //   return videoEntryView.render();

    // }));
    
    // this.$el.children().detach();
    // this.$el.html(this.template());
    //console.log(this.$el);