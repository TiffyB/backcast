var VideoListView = Backbone.View.extend({


  render: function() { 
    // console.log(this.template());
    this.$el.html(this.template());
    console.log(this.$el);
    this.$el.children().detach();
    this.$el.find('.video-list').append(this.collection.map(function(video, index) {
      // console.log(video.template());
      var videoEntryView = new VideoListEntryView({model: video});
      return videoEntryView.render();

    }));
    
    // this.$el.children().detach();
    // this.$el.html(this.template());
    console.log(this.$el);
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
