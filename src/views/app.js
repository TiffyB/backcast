var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    //$('body').append(this.render());
    console.log(this.videos);
    
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    this.videoListView = new VideoListView();
    //this.videoListEntryView = new VideoListEntryView();
    this.videoPlayerView = new VideoPlayerView();
    this.searchView = new SearchView();
    //this.$('.video-list div').children().detach();
    //this.$('.list').append(this.videoList.template());
    // this.$('.video-list div').html(this.videoListEntryView.template());
    // this.$('.col-md-7').html(this.videoPlayerView.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

}); 
