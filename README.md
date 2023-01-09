"del": "^6.1.1" downgraded version. for avoiding error.


npm install del@6.1.1 --save-dev


Error: Cannot find module 'webp-converter/cwebp'

solution (might come in handy):
copy files from: node_modules> webp-converter> src
in: node_modules> webp-converter