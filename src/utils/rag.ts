// Cosine Similarity Math Function (Runs instantly in-browser)
function cosineSimilarity(vecA: number[], vecB: number[]) {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

// The Local RAG Retriever
export async function searchResume(queryEmbedding: number[], topK: number = 2) {
  // 1. Fetch your static JSON "database"
  const response = await fetch('/resume_vectors.json');
  const chunks = await response.json();

  // 2. Compare the user's query embedding against all your chunks
  const scoredChunks = chunks.map((chunk: any) => ({
    text: chunk.text,
    score: cosineSimilarity(queryEmbedding, chunk.embedding)
  }));

  // 3. Sort by highest score and return the top results
  scoredChunks.sort((a: any, b: any) => b.score - a.score);
  return scoredChunks.slice(0, topK).map((c: any) => c.text);
}