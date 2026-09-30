---
page_id: projects
layout: page
title: 프로젝트
permalink: /projects/
description: KAIST Knowledge System Lab에서 수행한 산학 연구 프로젝트입니다.
nav: true
nav_order: 2
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">
  {% assign sorted_projects = site.projects | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>
