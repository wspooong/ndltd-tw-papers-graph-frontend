# NDLTD TW Papers Graph

This project is aimed to visualize the thesis on the National Digital Library of Theses and Dissertations in Taiwan (臺灣博碩士論文知識加值系統).  
Created by using the [D3.js](https://d3js.org) library.

## Description

This is a content-based recommendation system uses the "abstract" of each thesis for vector search, and selects the most relevant articles.

* Data Collection
  * Gathering data from NDLTD by using serverless function on AWS as distributed crawler.
  * Chinese preprocessing. ([ckiplab/ckip-transformers](https://github.com/ckiplab/ckip-transformers))
* NLP
  * Generate Word Embedding by using [SentenceTransformers](https://www.sbert.net/) library and [paraphrase-multilingual-mpnet-base-v2](https://huggingface.co/sentence-transformers/paraphrase-multilingual-mpnet-base-v2) model.
* Frontend
  * Using Vue.js (Vuetify) as frontend framework.
  * D3.js for data visualization.
* Backend
  * Opensearch as vector search database and search engine.
  * FastAPI as backend server.
* CI/CD
  * Github Actions for CI/CD. ([aws.yml](https://github.com/wspooong/ndltd-tw-papers-graph-frontend/blob/main/.github/workflows/aws.yml))

## Getting Started

```bash
git clone https://github.com/wspooong/ndltd-tw-papers-graph-frontend
cd ndltd-tw-papers-graph-frontend
yarn install
yarn dev
```

## Authors

* **Shih-Peng Wen** - [wspooong.com](https://wspooong.com)
