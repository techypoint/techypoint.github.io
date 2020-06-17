---
title: "Design Home Page "
author: "Varun Bisht"
description: "Design cool Home Page for the webiste."
keywords: ""
category: "create a webiste"
permalink: "/create-a-webiste/create-a-blog-part2"
image: "/assets/img/create-a-webiste/create-a-blog/"
---
# CREATE A BLOG FOR YOUR WEBSITE - PART 3

**PREREQUISITE**
1. CREATE A BLOG FOR YOUR WEBSITE - PART 1
In PART 1 - we have created basic wesbite Using Jekyll. Before Going further, you need to read PART 1.
So link for PART 1 is - CREATE A BLOG FOR YOUR WEBSITE - PART 1 link
2. CREATE A BLOG FOR YOUR WEBSITE - PART 2
In PART 2 - we have created blog post for our website Using Jekyll. Before Going further, you need to read PART 2.
So link for PART 2 is - CREATE A BLOG FOR YOUR WEBSITE - PART 2 link

In this part i.e PART 3, we are going to create a Page To show all the blog posts.

Why we need to create this page for all blog posts?
because when a user lands to your homepage,he/she needs a way to your blog posts.

What we will do -
1. create a blog.md file in base directory.
2. Add blog link in navigation.md
3. Instead of manually copying the post content to this page, Jekyll gives a feature to access all the posts in _post directory.
This feature helps a lot in your future post development. You dont need to update post contaent everywhere. Just create a post and its done.
4. Design this page.

So lets start
1. created blog.md in base directory.
2. Add blog link in navigation.md
{% highlight html %}{% raw %}
 <li class="nav-item">
  <a class="nav-link" href="/blog">BLOG</a>
 </li>
{% endraw %}{% endhighlight %}
3. Now add Front Matters like title, description, permalink for this page and copy the HTML code.
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

Here, apart from HTML code, there are Jekyll variables and Jekyll Liquid.

Jekyll Variables - Jekyll provides some default variables related to post and site. Here we are using
- site.posts- A reverse chronological list of all Posts.
- post.url- The URL of the Post without the domain, but with a leading slash, e.g. /2008/12/14/my-post.html.
- post.date- The Date assigned to the Post. This can be overridden in a Post’s front matter by specifying a new date/time in the format.
- post.description - description of the post
- post.author - author of this post
- post.blogImg - image for this blog

You can also create your own front Matter and used to display information.
Jekyll Liquid - lets you output content using two curly braces. For Eg - {{variable}}
- {{post.url}} - we are displaying this post url.

4. CSS for this page -

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

Now we are successfully able to create a blog and set to publish posts but there is one thing missing i.e user engagement.
We have dedicated further tutorials for this.

Further Study Material
1. For Jekyll Installation- https://jekyllrb.com/docs/installation/
2. For Jekyll- https://www.youtube.com/watch?v=T1itpPvFWHI&list=PLLAZ4kZ9dFpOPV5C5Ay0pHaa0RJFhcmcB
3. For Front Matter- https://jekyllrb.com/docs/front-matter
4. For Variables - https://jekyllrb.com/docs/variables/
5. For Liquid - https://jekyllrb.com/docs/liquid/
4. For Markdown- https://www.markdownguide.org/basic-syntax/

In the next tutorial, we will focus on how to integrate commenting for our blog posts.
