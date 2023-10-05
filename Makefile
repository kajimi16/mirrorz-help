pre:
	chmod -R +x ./util/*
	git submodule update --init --recursive
	cd util && ./gen-json.cjs
	rsync -rv ./overwrite/ . --mkpath
	cd mirrorz-help && npm install

dev:
	export NEXT_PUBLIC_JSON_ENDPOINT=http://localhost:3000/osa-pack.json && cd mirrorz-help && npm run dev

prod: pre
	export NEXT_PUBLIC_JSON_ENDPOINT=https://mirrors-help.osa.moe/osa-pack.json && cd mirrorz-help && npm run og:clean && npm run og:build && npm run build && npm run export

.PHONY: pre dev prod