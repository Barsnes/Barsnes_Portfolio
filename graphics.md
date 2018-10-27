---
layout: portfolio_site
title: Graphics
---

<div class="image_list">
{% for image in site.graphics %}
<div class="image_container">
    <img src="{{ image.imageurl }}" alt="{{ image.description }}">
    <div class="image_description">
      <div class="image_contents">
        <h1>{{ image.title }}</h1>
          <hr>
        <a href="{{ baseurl }}{{ image.imageurl }}"><h3>See full image</h3></a>
      </div>
    </div>
</div>
{% endfor %}
</div>
