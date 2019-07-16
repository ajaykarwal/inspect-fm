---
layout: list
title: All Episodes
permalink: /episodes/
---
<div class="episode-list">
  
  {% for post in site.posts %}
  <article class="episode-list__item">
    <header>
      <div class="episode-number">
      {{post.number}}
      </div>
      <h2>
        <a href="{{ post.url | relative_url }}" title="Episode {{post.number}} - {{post.title}}">
          {{ post.title | escape }}
        </a>
      </h2>
            <p class="date">
        <time datetime="{{ page.date }}" itemprop="datePublished">
          {{ post.date | date_to_long_string }}
        </time>
      </p>
    </header>
      <p>{{post.short_description}}</p>
      <hr />
   </article>
  {% endfor %}
</div>
