---
date: '{{ time.Now.Format "2006-01-02" }}'
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
description: ""
slug: '{{ replace .File.ContentBaseName "-" " " | title }}'
draft: true
---