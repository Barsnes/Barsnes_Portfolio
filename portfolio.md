---
layout: standard
title: Portfolio
---
<div id="#photographs" class="image_list">
{% for image in site.images %}
<div class="image_container hover">
    <img src="{{ image.imageurl }}" alt="{{ image.description }}">
    <div class="image_description">
      <div class="image_contents">
        <h1>{{ image.title }}</h1>
          <hr>
        <a href="photographs"><h3>See more images</h3></a>
      </div>
    </div>
</div>
{% endfor %}

{% for image in site.graphics %}
<div class="image_container hover">
    <img src="{{ image.imageurl }}" alt="{{ image.description }}">
    <div class="image_description">
      <div class="image_contents">
        <h1>{{ image.title }}</h1>
          <hr>
        <a href="photographs"><h3>See more images</h3></a>
      </div>
    </div>
</div>
{% endfor %}
</div>
