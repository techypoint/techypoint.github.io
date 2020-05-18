---
layout: blog
permalink: /blog/
---
<div id="blog-posts">
<div class="grid-container">
{% for post in site.posts %}
<div class="card">
  <div class="card-info">
    <h4> {{post.title}} </h4>
    <span>Varun Bisht</span>  <span> <i class="far fa-clock pr-2 clock-icon"></i>{{ post.date | date_to_long_string: "ordinal", "US" }}</span>
  </div>
  <div class="bg-img">
    <img src="{{post.image}}">
  </div>
  <div class="content">    
    <p>{{post.description}}</p>
    <a href='{{post.url}}'> READ MORE</a>
  </div>
</div>
{% endfor%}
</div>
</div>
