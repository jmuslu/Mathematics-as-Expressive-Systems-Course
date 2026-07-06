# Primary Paper Trail

This course uses research papers as sources of mathematical pressure. A paper is included when it creates a real design question for robust external memory systems for LLMs.

## Core Transformer And Attention

- [Attention Is All You Need](https://arxiv.org/abs/1706.03762) - softmax attention as content-addressed retrieval over keys and values.
- [Transformers are RNNs: Fast Autoregressive Transformers with Linear Attention](https://arxiv.org/abs/2006.16236) - kernel feature maps and associativity as a route from quadratic attention to linear recurrence.
- [FlashAttention](https://arxiv.org/abs/2205.14135) - IO complexity and memory hierarchy as mathematical constraints on attention.

Problem hooks:

- Derive scaled dot-product attention from nearest-neighbor retrieval.
- Compare softmax retrieval with hard top-k retrieval.
- Compute the memory cost of storing QK^T versus streaming blocks.

## Retrieval-Augmented And External-Memory Language Models

- [Generalization through Memorization: Nearest Neighbor Language Models](https://arxiv.org/abs/1911.00172) - interpolation between parametric next-token probabilities and kNN datastore probabilities.
- [REALM: Retrieval-Augmented Language Model Pre-Training](https://arxiv.org/abs/2002.08909) - latent retrieval trained from masked language modeling.
- [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](https://arxiv.org/abs/2005.11401) - parametric memory plus non-parametric dense vector memory.
- [Improving language models by retrieving from trillions of tokens](https://arxiv.org/abs/2112.04426) - RETRO and chunked cross-attention over retrieved neighbors.
- [Memorizing Transformers](https://arxiv.org/abs/2203.08913) - non-differentiable kNN memory over recent key-value representations.
- [Augmenting Language Models with Long-Term Memory](https://arxiv.org/abs/2306.07174) - long-term cache, frozen encoder, and side-network retrieval.
- [Neural Turing Machines](https://arxiv.org/abs/1410.5401) - differentiable read/write memory as an algorithmic learning substrate.
- [Hybrid computing using a neural network with dynamic external memory](https://www.nature.com/articles/nature20101) - Differentiable Neural Computer and structured memory access.

Problem hooks:

- Derive kNN-LM probability interpolation and study the lambda tradeoff.
- Compare parametric and non-parametric memory update costs.
- Model retrieved chunks as latent variables and derive a marginal likelihood.
- Analyze when a memory write should overwrite, merge, or create a new key.

## Dense Retrieval And Embedding Geometry

- [Dense Passage Retrieval for Open-Domain Question Answering](https://arxiv.org/abs/2004.04906) - dual encoders and maximum inner product retrieval.
- [ColBERT](https://arxiv.org/abs/2004.12832) - late interaction and token-level max similarity.
- [Unsupervised Dense Information Retrieval with Contrastive Learning](https://arxiv.org/abs/2112.09118) - contrastive training for dense retrieval without labeled pairs.
- [Text Embeddings by Weakly-Supervised Contrastive Pre-training](https://arxiv.org/abs/2212.03533) - large-scale weak supervision for general text embeddings.

Problem hooks:

- Convert cosine similarity into inner product search by normalizing vectors.
- Derive the InfoNCE loss and identify false negatives.
- Compare single-vector, multi-vector, and cross-encoder scoring.
- Show how embedding collapse breaks retrieval.

## Approximate Nearest Neighbor And Vector Indexes

- [Efficient and robust approximate nearest neighbor search using HNSW graphs](https://arxiv.org/abs/1603.09320) - graph navigation and recall-latency tradeoffs.
- [Billion-scale similarity search with GPUs](https://arxiv.org/abs/1702.08734) - FAISS, GPU k-selection, and billion-scale similarity search.
- [Product Quantization for Nearest Neighbor Search](https://inria.hal.science/inria-00514462) - compression by Cartesian products of subquantizers.
- [Similarity Search in High Dimensions via Hashing](https://www.cs.columbia.edu/~verma/classes/uml/ref/nn_lsh_gionis_indyk_motwani.pdf) - locality-sensitive hashing as probabilistic indexing.

Problem hooks:

- Compute the distortion introduced by scalar and product quantization.
- Compare exact top-k with approximate top-k under recall constraints.
- Derive a simple LSH collision probability.
- Reason about HNSW insertion, graph degree, and search beam width.

## Evaluation, Robustness, And Long Context

- [BEIR: A Heterogeneous Benchmark for Zero-shot Evaluation of Information Retrieval Models](https://arxiv.org/abs/2104.08663) - retrieval robustness across domains.
- [Lost in the Middle](https://arxiv.org/abs/2307.03172) - positional failure modes in long-context retrieval use.
- [RAGAS: Automated Evaluation of Retrieval Augmented Generation](https://arxiv.org/abs/2309.15217) - reference-free evaluation dimensions for RAG.
- [How faithful are RAG models?](https://arxiv.org/html/2404.10198v1) - tension between retrieved evidence and parametric prior.

Problem hooks:

- Decompose failure into retrieval miss, ranking error, context placement error, and generation unfaithfulness.
- Compute recall@k, precision@k, MRR, and nDCG by hand.
- Construct adversarial retrieval examples where nearest is not most useful.
- Model evidence conflict as Bayesian updating between prior and retrieved context.
