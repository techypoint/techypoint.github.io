---
layout: blog
permalink: /blog/
description: "This Page contains blogs related to java, java blogs, amazon S3 blogs"
---
<div id="blog-posts">
<div class="grid-container">
{% for post in site.posts %}
<div class="card">
  <div class="card-info">
      <span class="user-profile">
        <svg class="svg-icon">
          <use xlink:href="#user-profile" />
        </svg>
        {{post.author}}
      </span>  
    <span class="clockCont">
      <svg class="svg-icon">
            <use xlink:href="#timer" />
          </svg>{{ post.date | date: '%B %d, %Y' }}</span>
  </div>
  <div class="bg-img test">
    <img loading="lazy" class="object-fit" alt="{{post.title}}" src="{{post.image}}">
  </div>
  <div class="content">    
    <p>{{post.description}}</p>
    <a href='{{post.url}}'> READ MORE</a>
  </div>
</div>
{% endfor%}
</div>
</div>
