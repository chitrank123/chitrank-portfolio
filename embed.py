import json
from sentence_transformers import SentenceTransformer

# 1. Load a fast, free, powerful embedding model
print("Downloading model...")
model = SentenceTransformer('all-MiniLM-L6-v2')

# 2. Read your raw data
with open('raw_data.json', 'r') as f:
    chunks = json.load(f)

print("Generating vector embeddings for Chitrank's resume...")

# 3. Calculate embeddings for each chunk
for chunk in chunks:
    # Convert text to a vector (list of floats)
    vector = model.encode(chunk['text']).tolist()
    chunk['embedding'] = vector

# 4. Save the final file for React
with open('resume_vectors.json', 'w') as f:
    json.dump(chunks, f)

print("Done! Move 'resume_vectors.json' to your React public/ folder.")