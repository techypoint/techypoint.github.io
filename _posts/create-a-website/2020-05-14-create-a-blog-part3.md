---
title: "Create a Blog Part 3"
author: "Varun Bisht"
description: "Create a blog Part 3- create a page to show all the blog posts"
keywords: "Display all posts in the same page,list all posts jekyll"
category: "create a website"
permalink: "/create-a-website/create-a-blog-part3"
published: false
image: "/assets/img/create-a-website/create-a-blog-part3/blog.jpg"
featureImage: "/assets/img/create-a-website/create-a-blog-part3/blog.jpg"
imgText: "Photo by Miguel Á. Padriñán from Pexels"
---
# CREATE A BLOG FOR YOUR WEBSITE - PART 3

## PREREQUISITE

1. CREATE A BLOG FOR YOUR WEBSITE - PART 1

   In PART 1 - we have created basic website using Jekyll. Before Going further, you need to read [PART 1]({% post_url create-a-website/2020-05-12-create-a-blog-part1 %})
2. CREATE A BLOG FOR YOUR WEBSITE - PART 2

   In PART 2 - we have created blog post for our website using Jekyll. Before going further, you need to read [PART 2]({% post_url create-a-website/2020-05-13-create-a-blog-part2 %})

In this part i.e PART 3, we are going to create a page to show all the blog posts.

### Why we need to create this page for all blog posts?
because when a user lands to your homepage, he/she needs a way to your blog posts.

### What we will do-
1. Create a blog.md file in base directory.
2. Add blog link in navigation.md
3. Instead of manually copying the post content to this page, Jekyll gives a feature to access all the posts in _post directory.
This feature helps a lot in your future post development. You don't need to update post content everywhere. Just create a post and it's done.
4. Design this page.

### So lets start -

- Created blog.md in base directory.
- Add blog link in navigation.md
{% highlight html %}{% raw %}
 <li class="nav-item">
  <a class="nav-link" href="/blog">BLOG</a>
 </li>
{% endraw %}{% endhighlight %}
- Now add Front Matters like title, description, permalink in blog.md and copy the HTML code. We are using post layout for this file.
{% highlight html %}{% raw %}
---
layout: post
permalink: /blog/
description: "This Page contains cooking recipe posts"
---
<div id="blog-posts">
<div class="grid-container">
{% for post in site.posts %}
<div class="card">
  <div class="card-info">
    <span> <i class="fa fa-user user-icon" aria-hidden="true"></i> {{post.author}}</span>  
    <span class="clockCont"> <i class="fa fa-clock-o clock-icon"></i>{{ post.date | date_to_long_string: "ordinal", "US" }}</span>
  </div>
  <div class="bg-img">
    <img alt="{{post.title}}" src="{{post.blogImg}}">
  </div>
  <div class="content">    
    <p>{{post.description}}</p>
    <a href='{{post.url}}'> READ MORE</a>
  </div>
</div>
{% endfor%}
</div>
</div>
{% endraw %}{% endhighlight %}

- Here, apart from HTML code, there are Jekyll variables and Jekyll Liquid.

   **Jekyll Variables** - Jekyll provides some default variables related to post and site. Here we are using
   - **site.posts**- A reverse chronological list of all posts.
   - **post.url**- The URL of the post without the domain, but with a leading slash, e.g. /2008/12/14/my-post.html.
   - **post.date**- The date assigned to the post. This can be overridden in a post’s front matter by specifying a new date/time in the format.
   - **post.description** - description of the post
   - **post.author** - author of the post
   - **post.blogImg** - image for the blog

You can also create your own front Matter and used to display information.

   **Jekyll Liquid** - lets you output content of variable using two curly braces. For Eg - {% highlight html %}{% raw %}{{variable}}{% endraw %}{% endhighlight %}

- CSS for this page -

{% highlight html %}{% raw %}
#blog-posts .card{
  padding: 10px;
  margin-bottom: 10px;
}
#blog-posts span.clockCont i {
    margin-right: 5px;
}
#blog-posts .card-info span {
    margin-right: 10px;
}
#blog-posts img{
  height: 500px;
}
#blog-posts a {
  background-color: transparent;
  border: 1px solid #2196F3;
  padding: .5rem 1rem;
  cursor: pointer;
  border-radius: .25rem;
}
#blog-posts .content p{
  margin: 5px 0px !important;
}
{% endraw %}{% endhighlight %}

Now go to your website and checkout blog post through navigation panel.

Now save or push changes to the github Account.
<div class="imgCont">
  <img alt="save blog part 3" title="save blog part 3" src="/assets/img/create-a-website/create-a-blog-part3/save-blog3.png"/>
</div>

Now we are successfully able to create a blog and ready to publish posts but there is one feature missing i.e **user engagement**.

We have dedicated further tutorials for this.

<a href="https://github.com/vbisht7038/vbisht7038.github.io.git">Click to get the full Implementation of this tutorial on Github</a>

### Further Study Material
1. For Jekyll - [Jekyll Youtube Playlist](https://www.youtube.com/watch?v=T1itpPvFWHI&list=PLLAZ4kZ9dFpOPV5C5Ay0pHaa0RJFhcmcB "Jekyll Youtube Playlist")
2. [For Front Matter](https://jekyllrb.com/docs/front-matter "For Front Matter")
3. [For Variables](https://jekyllrb.com/docs/variables "For Variables")
5. [For Liquid](https://jekyllrb.com/docs/liquid "For Liquid")
4. [For Markdown](https://www.markdownguide.org/basic-syntax "For Markdown")

**In the next tutorial**, we will focus on how to integrate commenting for our blog posts.
