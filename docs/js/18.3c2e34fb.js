(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{ca50:function(n,e,t){"use strict";t.r(e),e["default"]='<template>\n  <q-page class="flex flex-center">\n    <q-pdfviewer\n      v-model="show"\n      type="html5"\n      :src="updatedSrc"\n      content-class="absolute"\n    />\n  </q-page>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      show: true,\n      src: \'pdf/c4611_sample_explain.pdf\'\n    }\n  },\n  computed: {\n    updatedSrc () {\n      if (process.env.MODE === \'electron\') {\n        return \'/\' + this.src\n      }\n      return this.src\n    }\n  }\n}\n<\/script>\n'}}]);