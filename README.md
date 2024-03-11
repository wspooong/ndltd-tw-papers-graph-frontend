# 博碩士論文相似度網絡

「博碩士論文相似度網絡」是一個基於內容的推薦系統（Content-Based Recommendation System）。  
本推薦系統使用每個博碩士論文的「摘要」進行向量搜尋，並且選出與其相關度最高的文章。

Inpired by:

1. <https://keywords.groundedai.company/>
2. <https://www.connectedpapers.com/>

## 處理步驟

* Data
  1. 博碩士論文網爬蟲（利用AWS、GCP、Azure的serverless function）
  2. 中文預處理（CKIP斷詞系統）

* NLP
  1. 建立Word2Vec Embedding Model
  2. 計算摘要Word Vector
  3. 計算Cosine Similarity

* 展示介面
  1. 使用FastAPI建立API
  2. 利用Vue.js Quasar建立展示介面
  3. 使用D3.js繪製相似度網絡

## Refs

* NLP部分
  1. <https://github.com/devalindey/Recommender-Systems-using-Word-Embeddings>
  2. <https://dylancastillo.co/nlp-snippets-cluster-documents-using-word2vec/>
  3. <https://github.com/AmoliR/nlp-for-book-recommendation>

* 展示頁面部分
  1. <https://observablehq.com/@d3/force-directed-graph>
