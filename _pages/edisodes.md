---
layout: list
title: All Episodes
permalink: /episodes/
---

{% for post in site.posts %}
<article>
  <header>
    <h2>
      <a href="{{ post.url | relative_url }}" title="Episode {{post.number}} - {{post.title}}">
        {{ post.title | escape }}
      </a>
    </h2>
    <p class="date">
      <time datetime="{{ page.date }}" itemprop="datePublished">
        {{ post.date | date: "%b %-d, %Y" }}
      </time>
    </p>
  </header>
  <p>
    {{ post.excerpt | remove: '<p>' | remove: '</p>' }}
  </p>
  <p>
    <a class="btn" href="{{ post.url | relative_url }}">Listen to the show</a>
  </p>
</article>
<div class="dot-divider">&middot; &middot; &middot;</div>
{% endfor %}
