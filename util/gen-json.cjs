#!/usr/bin/env node

const fs = require("fs")
const routes = require("../overwrite/mirrorz-help/src/routes.json")

const sites = [
    {
        "url": "http://mirrors.osa.moe",
        "logo": "http://mirrors.osa.moe/_nuxt/logo.85126c79.svg",
        "abbr": "HITSZ OSA",
        "name": "HITSZ 开源软件镜像站",
        "homepage": "https://osa.moe"
    },
]

const names = Object.keys(routes).map((k) => {
    const regex = /[^\/]+/g
    const match = k.match(regex)
    return match[0]
})

const mirrors = names.map((str) => {
    const obj = {
        "cname": str,
        "options_name": str,
        "url": `/${str}`
    }
    return obj
})

const pack = sites.map((site) => {
    const obj = {
        "site": site,
        "mirrors": mirrors,
    }
    return obj
})

const packStr = JSON.stringify(pack)
const listStr = JSON.stringify(names)

fs.writeFile('../overwrite/mirrorz-help/public/osa-pack.json', packStr, err => {
    if (err) {
      console.error(err);
    }
});

fs.writeFile('../overwrite/mirrorz-help/public/help_list.json', listStr, err => {
    if (err) {
      console.error(err);
    }
});
